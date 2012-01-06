<?php defined('SYSPATH') or die('No direct access allowed.');

// @TODO change module list to objects.
return array
(
	'default' => array
	(
		'modules' => array(
			
			array(
			
			'title' => 'Shop',
			//'icon' => 'asd.jpg',
			'desktop_icon' =>true,
			'controller' => 'Controller_Shop_Shop',
			'controller_location' => '/shop/shop',
			),
			array(
			
			'title' => 'Shop Product',
			//'icon' => 'asd.jpg',
			'desktop_icon' =>true,
			'controller' => 'Controller_Shop_Product',
			'controller_location' => '/shop/product',
			),
		),
	),
);