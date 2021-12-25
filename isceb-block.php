<?php

/**
 * Plugin Name:       ISCEB Blocks package
 * Description:       A collection of blocks custom made for ISCEB.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Anastasia Dv and Stijn Pink
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       isceb-block
 *
 * @package           isceb-author-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function isceb_author_block_isceb_block_block_init()
{
	register_block_type(plugin_dir_path(__FILE__) . 'isceb-blocks/isceb-author-block/');
}
add_action('init', 'isceb_author_block_isceb_block_block_init');


function isceb_news_block_isceb_block_block_init()
{
	register_block_type(plugin_dir_path(__FILE__) . 'isceb-blocks/isceb-news-block/');
}
add_action('init', 'isceb_news_block_isceb_block_block_init');
