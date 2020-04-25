<?php
include "../../admin/include/koneksi/koneksi.php";
include "../../admin/include/function/all.php";

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI20200215081207771';

$bulan = bulanIndo(date('m'));
$tahun = date('Y');

$bulan_realisasi = date('mY');

$query1 = mysql_query("SELECT IFNULL(SUM(produksi),0) as produksi
                            FROM data_realisasi_panen
                            WHERE id_unit_usaha = '$id_unit_usaha'
                            AND DATE_FORMAT(waktu, '%c%Y') = '$bulan_realisasi'
                            AND status = 'disetujui'
                            ");
$row1 = mysql_fetch_array($query1);

$query2 = mysql_query("SELECT IFNULL(produksi,0) as produksi
                            FROM data_rkap
                            WHERE id_unit_usaha = '$id_unit_usaha'
                            AND bulan = '$bulan'
                            AND tahun = '$tahun'
                            ");
$row2 = mysql_fetch_array($query2);

$i = 0;
$data = array(
    intval($row2['produksi']),
    intval($row1['produksi']),
);

echo json_encode($data);