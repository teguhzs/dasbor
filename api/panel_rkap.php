<?php
include "../../admin/include/koneksi/koneksi.php";
include "../../admin/include/function/all.php";

if (!isset($_POST['id_unit_usaha'])) {
    echo "Maaf.. Halaman tidak ditemukan";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$bulan = bulanIndo(date('m'));
$tahun = date('Y');

$query1 = mysql_query("SELECT IFNULL(produksi, 0) as produksi
                        FROM data_rkap
                        WHERE id_unit_usaha = '$id_unit_usaha'
                        AND bulan = '$bulan'
                        AND tahun = '$tahun'");

$cek1 = mysql_num_rows($query1);

if ($cek1 > 0) {
    $row1 = mysql_fetch_array($query1);

    $rkap_value = $row1['produksi'];
} else {
    $rkap_value = 0;
}

$data['rkap_value'] = $rkap_value;

echo json_encode($data);