<?php
/**
 * Plugin Name: gutermberg
 * Plugin URI: https://github.com/shahin8r/gutermberg
 * Description: A Gutenberg block for embedding code with a nice terminal
 * Author: shahin8r
 * Author URI: https://shahin.tech
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package gutermberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
