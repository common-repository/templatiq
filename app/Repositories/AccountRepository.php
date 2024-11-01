<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Repositories;

use Templatiq\Utils\Helper;
use Templatiq\Utils\Http;
use Templatiq\Utils\Options;

class AccountRepository {
	private string $cloud_endpoint;

	public function __construct() {
		$this->cloud_endpoint = TEMPLATIQ_CLOUD_API_BASE;
	}

	public function login( string $username, string $password ) {
		$http     = new Http( $this->cloud_endpoint . '/account/login' );
		$response = $http->body( [
			'username' => $username,
			'password' => $password,
		] )
			->post()
			->response();

		$status_code = wp_remote_retrieve_response_code( $response );
		if ( 200 !== $status_code ) {
			throw new \Exception(
				esc_html( $response->get_error_message() ?? __( 'Invalid username or password', 'templatiq' ) ),
				esc_html( $status_code )
			);
		}

		$body                             = wp_remote_retrieve_body( $response );
		$response['body']                 = json_decode( $body, true );
		$response['body']['last_updated'] = time();

		Options::set( 'token', $response['body']['token'] ?? '' );
		Options::set( 'account_data', $response['body'] ?? [] );

		return $response;
	}

	public function create( string $user_email, string $name ) {
		$_ip       = Helper::get_ip();
		$_site_url = home_url( '/' );

		$http = new Http( $this->cloud_endpoint . '/account/create' );

		$response = $http->body(
			[
				'user_email' => $user_email,
				'name'       => $name,
				'site_url'   => $_site_url,
				'ip'         => $_ip,
			] )
			->post()
			->response();

		$status_code = wp_remote_retrieve_response_code( $response );
		if ( 200 !== $status_code ) {
			throw new \Exception(
				esc_html__( 'Email already exists, please try with another email address.', 'templatiq' ),
				esc_html( $status_code )
			);
		}

		$body             = wp_remote_retrieve_body( $response );
		$response['body'] = json_decode( $body, true );

		return $response;
	}

	public function data() {
		$token = Options::get( 'token' );

		$http     = new Http( $this->cloud_endpoint . '/account/data' );
		$response = $http->body(
			[
				'token' => $token,
			] )
			->post()
			->response();

		$status_code = wp_remote_retrieve_response_code( $response );
		if ( 200 !== $status_code ) {
			throw new \Exception(
				esc_html__( "Can't get data from templatiq.com, please re-login", 'templatiq' ),
				esc_html( $status_code )
			);
		}

		$body             = wp_remote_retrieve_body( $response );
		$response['body'] = json_decode( $body, true );
		if ( is_array( $response['body'] ) ) {
			$response['body']['last_updated'] = time();
		}

		Options::set( 'account_data', $response['body'] ?? [] );

		return $response['body'];
	}
}