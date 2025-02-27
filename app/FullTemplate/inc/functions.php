<?php
use Templatiq\Repositories\LoggingRepository;
/**
 * Functions
 *
 * @since  1.0.0
 * @package Templatiq Sites
 */

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'templatiq_sites_error_log' ) ):

	/**
	 * Error Log
	 *
	 * A wrapper function for the error_log() function.
	 *
	 * @since 2.0.0
	 *
	 * @param  mixed $message Error message.
	 * @return void
	 */
	function templatiq_sites_error_log( $message = '' ) {
		if ( defined( 'WP_DEBUG_LOG' ) && WP_DEBUG_LOG ) {
			if ( is_array( $message ) ) {
				$message = wp_json_encode( $message );
			}

			if ( apply_filters( 'templatiq_sites_debug_logs', false ) ) {
				error_log( $message ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- This is for the debug logs while importing. This is conditional and will not be logged in the debug.log file for normal users.
			}
		}
	}

endif;

if ( ! function_exists( 'templatiq_sites_is_valid_image' ) ):
	/**
	 * Check for the valid image
	 *
	 * @param string $link  The Image link.
	 *
	 * @since 2.6.2
	 * @return boolean
	 */
	function templatiq_sites_is_valid_image( $link = '' ) {
		return preg_match( '/^((https?:\/\/)|(www\.))([a-z0-9-].?)+(:[0-9]+)?\/[\w\-\@]+\.(jpg|png|gif|jpeg|svg)\/?$/i', $link );
	}

endif;

if ( ! function_exists( 'templatiq_get_site_data' ) ):
	/**
	 * Returns the value of the index for the Site Data
	 *
	 * @param string $index  The index value of the data.
	 *
	 * @since 2.6.14
	 * @return mixed
	 */
	function templatiq_get_site_data( $index = '' ) {
		$demo_data = get_option( 'templatiq_sites_import_data', [] );
		if ( ! empty( $demo_data ) && isset( $demo_data[$index] ) ) {
			return $demo_data[$index];
		}

		return '';
	}

endif;

/**
 * Get all the posts to be reset.
 *
 * @since 3.0.3
 * @return array
 */
function templatiq_sites_get_reset_post_data() {
	global $wpdb;

	$post_ids = $wpdb->get_col( "SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key='_templatiq_sites_imported_post'" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- We need this to get all the posts and pages. Traditional WP_Query would have been expensive here.

	return $post_ids;
}

/**
 * Get all the forms to be reset.
 *
 * @since 3.0.3
 * @return array
 */
function templatiq_sites_get_reset_form_data() {
	global $wpdb;

	$form_ids = $wpdb->get_col( "SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key='_templatiq_sites_imported_wp_forms'" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- We need this to get all the WP forms. Traditional WP_Query would have been expensive here.

	return $form_ids;
}

/**
 * Get all the terms to be reset.
 *
 * @since 3.0.3
 * @return array
 */
function templatiq_sites_get_reset_term_data() {
	global $wpdb;

	$term_ids = $wpdb->get_col( "SELECT term_id FROM {$wpdb->termmeta} WHERE meta_key='_templatiq_sites_imported_term'" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- We need this to get all the terms and taxonomy. Traditional WP_Query would have been expensive here.

	return $term_ids;
}

/**
 * Check if Import for Templatiq Site is in progress
 *
 * @since 3.0.21
 * @return array
 */
function templatiq_sites_has_import_started() {
	$has_import_started = get_transient( 'templatiq_sites_import_started' );
	if ( 'yes' === $has_import_started ) {
		return true;
	}

	return false;
}

/**
 * Remove the post excerpt
 *
 * @param int $post_id  The post ID.
 * @since 3.1.0
 */
function templatiq_sites_empty_post_excerpt( $post_id = 0 ) {
	if ( ! $post_id ) {
		return;
	}

	wp_update_post(
		[
			'ID'           => $post_id,
			'post_excerpt' => '',
		]
	);
}
