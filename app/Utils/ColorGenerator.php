<?php

namespace App\Utils;

function getRandomColor(): string {
	$letters = '0123456789ABCDEF';
		
	$color = '#';
			
	for ($i = 0; $i < 6; $i++) {
		$color .= $letters[rand(0, 15)];
	}
		
	return $color;
}