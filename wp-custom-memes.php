<?php
/*
Plugin Name: WP Custom Memes
Plugin URI:
Description: This is a plugin that lets you create custom messages with the available memes list.
Author: Silvano Alves Vence
Version: 1.0
Author URI:
License: GPLv2 or later
*/

register_activation_hook( __FILE__, 'prowp_install' );

function prowp_install() {
    global $wp_version;

    if( version_compare( $wp_version, '3.5.1', '<') ) {
        wp_die( 'This plugin requires Wordpress version 3.5.1 or higher.' );
    }
}

add_action( 'admin_head', 'add_new_tinymce_style' );

function add_new_tinymce_style() {
    global $typenow;

    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
   	    return;
    }

    if( ! in_array( $typenow, array( 'post', 'page' ) ) ) {
        return;
    }

    if ( get_user_option( 'rich_editing' ) == 'true' ) {
        add_filter( "mce_external_plugins", "add_tinymce_plugin" );
        add_filter( 'mce_buttons', 'register_my_tinymce_meme_button' );
    }
}

function add_tinymce_plugin( $plugin_array ) {
    $plugin_array['tinymce_meme_button'] = plugins_url( 'js/meme-button.js' , __FILE__ );
    return $plugin_array;
}

function register_my_tinymce_meme_button( $buttons ) {
    array_push( $buttons, 'tinymce_meme_button' );
    return $buttons;
}

function meme_css() {
    wp_enqueue_style( 'meme-style', plugins_url( 'css/style.css', __FILE__ ) );
}

add_action( 'admin_enqueue_scripts', 'meme_css' );


/*
Copyright 2014 Silvano Alves Vence (email : salvesvence@gmail.com)

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/