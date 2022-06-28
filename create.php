<?php

$name = $_POST["name"];
$image = $_POST["image"];
$ip = $_POST["ip"];

$fields = array(
    'image' => $image
);

$fields_string = http_build_query($fields);

$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_URL, $ip . "/containers/create?name=" . $name);
curl_setopt($curl, CURLOPT_POSTFIELDS, $fields_string);
curl_exec($curl); // Execute the request
curl_close($curl);

?>