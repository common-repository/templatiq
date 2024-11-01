<?php
/**
 * @author  wpWax
 * @package Templatiq
 */

namespace Templatiq\Admin;

use Templatiq\Abstracts\EnqueuerBase;
use Templatiq\Repositories\DependencyRepository;

class Enqueuer extends EnqueuerBase {

	public function __construct() {
		$this->action( 'admin_enqueue_scripts', [$this, 'enqueue_scripts'] );
	}

	public function enqueue_scripts( $hook ) {
		$this->admin_submenu_css();

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_GET['page'] ) || 'templatiq' !== $_GET['page'] ) {
			return;
		}

		wp_enqueue_style( 'wp-components' );

		$script_asset_path = TEMPLATIQ_ASSETS_PATH . '/js/admin.asset.php';

		$script_info = file_exists( $script_asset_path ) ? include $script_asset_path : [
			'dependencies' => [],
			'version'      => TEMPLATIQ_VERSION,
		];

		$script_dep = array_merge( $script_info['dependencies'], ['updates', 'wp-hooks'] );
		$script_ver = $script_info['version'];

		$this->enqueue_script( 'templatiq-app', '/js/admin.js', $script_dep, true, $script_ver );

		$this->enqueue_style( 'templatiq-app', '/css/global.css', [], $script_ver );

		$obj = $this->localize_object();

		wp_localize_script( 'templatiq-app', 'templatiq_obj', $obj );
	}

	public function localize_object() {
		$builder = get_option( '_templatiq_selected_builder', 'elementor' );
		$dep     = new DependencyRepository();

		return apply_filters(
			'templatiq_admin_localize_data',
			[
				'rest_args'      => [
					'nonce'    => wp_create_nonce( 'wp_rest' ),
					'endpoint' => get_rest_url( null, 'templatiq' ),
				],
				'assets_url'     => TEMPLATIQ_ASSETS,
				'pixetiq_status' => $dep->get_pixetiq_status(),
				'current_theme'  => $dep->get_current_theme(),
				'dashboard_url'  => admin_url( 'admin.php?page=templatiq' ),

				'builder'        => $builder,
				'version'        => TEMPLATIQ_VERSION,

				'cloud_connect'  => TEMPLATIQ_CLOUD_CONNECT_URL,
				'cloud_checkout' => TEMPLATIQ_CLOUD_CHECKOUT_URL,
				'cloud_account'  => TEMPLATIQ_CLOUD_ACCOUNT_URL,
			]
		);
	}

	public function admin_submenu_css() {
		echo '<style>.toplevel_page_templatiq > div.wp-menu-image:before {
					margin-top: 0;
					line-height: 27px !important;
					content: "";
					background: url("' . esc_attr( TEMPLATIQ_ASSETS ) . '/svg/sidebar-icon.svg' . '") no-repeat center center;
					background-size: 20px 20px;
					speak: none !important;
					font-style: normal !important;
					font-weight: normal !important;
					font-variant: normal !important;
					text-transform: none !important;
					/* Better Font Rendering =========== */
					-webkit-font-smoothing: antialiased !important;
					-moz-osx-font-smoothing: grayscale !important;
					box-sizing: content-box;
					width: 100%
				}
				.toplevel_page_templatiq:hover > div.wp-menu-image:before{
					background: url("' . esc_attr( TEMPLATIQ_ASSETS ) . '/svg/sidebar-icon-hover.svg' . '") no-repeat center center;
					background-size: 20px 20px;
				}
				.current.toplevel_page_templatiq > div.wp-menu-image:before{
					background: url("' . esc_attr( TEMPLATIQ_ASSETS ) . '/svg/sidebar-icon-active.svg' . '") no-repeat center center;
					background-size: 20px 20px;
				}</style>';
	}
}