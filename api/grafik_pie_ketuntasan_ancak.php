<?php
include "../../admin/include/koneksi/koneksi.php";

// if (!isset($_POST['id_unit_usaha'])) {
//     echo "Halaman tidak ditemukan!!";
//     die();
// }
// $id_unit_usaha = $_POST['id_unit_usaha'];
$id_unit_usaha = 'UNI1912006';

$bulan = date('mY');

$query1 = mysql_query("SELECT IFNULL(SUM(drp.produksi),0) as produksi
                            FROM data_realisasi_panen drp
                            LEFT JOIN data_pegawai dp ON drp.id_pegawai = dp.id_pegawai
                            WHERE dp.id_unit_usaha = '$id_unit_usaha'
                            AND DATE_FORMAT(drp.waktu, '%c%Y') = '$bulan'
                            ");
$row1 = mysql_fetch_array($query1);

$query2 = mysql_query("SELECT IFNULL(rkap,0) as rkap
                            FROM data_rkap
                            WHERE id_unit_usaha = '$id_unit_usaha'
                            AND DATE_FORMAT(waktu, '%c%Y') = '$bulan'
                            ");
$row2 = mysql_fetch_array($query2);

$i = 0;
$data = array(
    intval($row2['rkap']),
    intval($row1['produksi']),
);

echo json_encode($data);