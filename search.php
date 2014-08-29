<?php 
define('SERVICEBASEURL', 'http://itunes.apple.com');

if ($_GET['term'] && $_GET['limit']) {
	$opts = array('http'=>array('method'=>"GET"));
	$context = stream_context_create($opts);
	
	// Open the file using the HTTP headers set above
	$url = SERVICEBASEURL."/search?term={$_GET['term']}&limit={$_GET['limit']}";
	$data = file_get_contents($url, false, $context);
	print_r($data);
}

?>