<?php
include '../../admin/include/koneksi/koneksi.php';

$id_unit_usaha = $_POST['id_unit_usaha'];

// $query = mysql_query("SELECT file FROM data_unit_usaha WHERE id_unit_usaha = 'UNI1911005'");
$query = mysql_query("SELECT file FROM data_unit_usaha WHERE id_unit_usaha = '$id_unit_usaha'");
$row = mysql_fetch_row($query);
$data['file'] = $row;

echo json_encode($data);