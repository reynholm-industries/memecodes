<?php
/*
Plugin Name: MemeCodes
Description: Meme shortcodes
Version: 1.0
Author: Carlos Morales
Author URI: http://cmorales.es/
*/

/**
 * Copyright (c) 2014 Carlos Morales. All rights reserved.
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * **********************************************************************
 */





define( 'MEMECODES_PATH', plugin_dir_path(__FILE__) ); //Includes trailing slash!!!

class memecodes {
	protected $prefix = "meme";
	protected $longname = "memecodes";
    protected $memes;
    
    public function __construct()
    {            
		$this->memes = array(
			'allthethings' => array('file' => 'allthethings.png', 'description' => 'All the things'),
			'areyoukiddingme' => array('file' => 'areyoukiddingme.png', 'description' => 'Are you kidding me?'),
			'cerealspit' => array('file' => 'cerealspit.png', 'description' => 'Cereal spit'),
			'challengeaccepted' => array('file' => 'challengeaccepted.png', 'description' => 'Challenge accepted'),
			'feellikeasir' => array('file' => 'feellikeasir.png', 'description' => 'Feel like a sir'),
			'firstworldproblem' => array('file' => 'firstworldproblem.jpg', 'description' => 'First world problem'),
			'fonzie' => array('file' => 'fonzie.png', 'description' => 'Fonzie'),
			'foreveralone' => array('file' => 'foreveralone.png', 'description' => 'Foreveralone'),
			'freddie' => array('file' => 'freddie.png', 'description' => 'Freddie'),
			'fuckyeah' => array('file' => 'fuckyeah.png', 'description' => 'Fuck yeah'),
			'genius' => array('file' => 'genius.png', 'description' => 'Genius'),
			'jackie' => array('file' => 'jackie.png', 'description' => 'Jackie'),
			'mentira' => array('file' => 'mentira.png', 'description' => 'Mentira'),
			'nothingtodohere' => array('file' => 'nothingtodohere.png', 'description' => 'Nothing to do here'),
			'notsureif' => array('file' => 'notsureif.png', 'description' => 'Not sure if'),
			'okay' => array('file' => 'okay.png', 'description' => 'Okay'),
			'success' => array('file' => 'success.jpg', 'description' => 'Success'),
			'trollface' => array('file' => 'trollface.png', 'description' => 'Trollface'),
			'yuno' => array('file' => 'yuno.png', 'description' => 'Y u no')
		);
    }
    
    public function init()
    {
        add_action('wp_enqueue_scripts', array(&$this, 'add_styles'));
		add_shortcode('memecode_small', array(&$this, 'render_small_meme'));
		add_shortcode('memecode_medium', array(&$this, 'render_medium_meme'));    
    }

    public function add_styles() {
       wp_enqueue_style($this->prefix . 'css', plugins_url('/stylesheets/memes.css', __FILE__));
   }
    
    public function render_small_meme($attributes)
    {
        if ( ( ! empty($attributes['meme']) ) &&  array_key_exists( $attributes['meme'], $this->memes ) ) {          
            return '<span class="meme-small-' . $attributes['meme'] . '"></span>';
        }
    }
    
    public function render_medium_meme($attributes, $content = null)
    {
        if ( ( ! empty($attributes['meme']) ) &&  array_key_exists( $attributes['meme'], $this->memes ) ) {
            $html = '<div class="meme-medium-' . $attributes['meme'] . ' wp-caption memecaption">';
            $html .= '<img width="300" height="300" src="' . plugins_url('/images/medium/' . $this->memes[$attributes['meme']]['file'], __FILE__) 
                . '" alt="' .  $this->memes[$attributes['meme']]['description'] . '" />';
            if ( $content  ) {
                $html .= '<p class="wp-caption-text">' . $content . '</p>';
            }
            $html .= '</div>';
            return $html;
         }
    }
    

}



$memecodes = new memecodes;
$memecodes->init();


