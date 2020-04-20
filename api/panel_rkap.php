<?php
include "../../admin/include/koneksi/koneksi.php";

if (!isset($_POST['id_unit_usaha'])) {
    echo "Maaf.. Halaman tidak ditemukan";
    die();
}
$bulan = date("mY");
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(rkap, 0) as rkap
                        FROM data_rkap
                        WHERE id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(waktu, '%c%Y') = '$bulan'");

$cek1 = mysql_num_rows($query1);

if ($cek1 > 0) {
    $row1 = mysql_fetch_array($query1);

    $rkap_value = $row1['rkap'];
} else {
    $rkap_value = 0;
}

$data['rkap_value'] = $rkap_value;

echo json_encode($data);