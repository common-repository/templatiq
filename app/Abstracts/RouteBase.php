<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Abstracts;

use Templatiq\Utils\Config;
use Templatiq\Utils\Response;
use Templatiq\Utils\Singleton;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

abstract class RouteBase {
	use Singleton;

	protected $token;
	protected $request;
	protected $namespace = 'templatiq';

	public function __construct() {
		add_action( 'rest_api_init', [$this, 'register_routes'] );
	}

	abstract function register_routes(): void;

	public function permission_check( WP_REST_Request $request ) {
		$this->request = $request;

		if ( 'development' === Config::get( 'environment' ) ) {
			return true;
		}

		if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) {
			return true;
		}

		$_route = $request->get_route();

		return $this->permission_error( '', $_route );
	}

	protected function permission_error( string $message, string $endpoint = '' ) {
		if ( empty( $message ) ) {
			$message = __( 'Sorry, you are not logged in.', 'templatiq' );
		}

		$_additional_data = [
			'status' => rest_authorization_required_code(),
		];

		if ( ! empty( $endpoint ) ) {
			$_additional_data['endpoint'] = $endpoint;
		}

		return new WP_Error( 'authorization_failed', $message, $_additional_data );
	}

	public function get( $endpoint, $callback, $args = [] ) {
		return $this->register_endpoint( $endpoint, $callback, $args, WP_REST_Server::READABLE );
	}

	public function post( $endpoint, $callback, $args = [] ) {
		return $this->register_endpoint( $endpoint, $callback, $args, WP_REST_Server::CREATABLE );
	}

	protected function register_endpoint( string $endpoint, array $callback, array $args, string $method ) {

		$check = apply_filters( 'templatiq_register_endpoint', true, $endpoint );
		if ( ! $check ) {
			return;
		}

		return register_rest_route(
			$this->namespace,
			$endpoint,
			[
				'methods'             => $method,
				'callback'            => function ( WP_REST_Request $wp_rest_request ) use ( $callback ) {
					$controller = new $callback[0];

					return $controller->{$callback[1]}( $wp_rest_request );
				},
				'permission_callback' => [$this, 'permission_check'],
				'args'                => $args,
			]
		);
	}

	public function response( $response, $endpoint, $status = 500, $additional_data = [] ) {
		if ( $response instanceof WP_Error ) {
			return Response::error(
				$response->get_error_code(),
				$response,
				$endpoint,
				$status,
				$additional_data
			);
		}

		return Response::success( $response );
	}

	public function get_param( string $param, $default = '', string $sanitizer = 'sanitize_text_field' ) {
		$_value = $this->request->get_param( $param );
		if ( ! empty( $_value ) ) {
			if ( is_callable( $sanitizer ) && ! is_array( $_value ) ) {
				return call_user_func_array( $sanitizer, [$_value] );
			} elseif ( is_array( $_value ) && is_callable( $sanitizer ) ) {
				return array_map( $sanitizer, $_value );
			}

			return $_value;
		}

		return $default;
	}
}