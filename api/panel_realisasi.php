<?php
include "../../admin/include/koneksi/koneksi.php";
include "../../admin/include/function/all.php";

// variabel waktu
$bulan = bulanIndo(date('m'));
$tahun = date('Y');
$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');

// if (!isset($_POST['id_unit_usaha'])) {
//     echo "Halaman tidak ditemukan!!";
//     die();
// }
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI20200215081207771';

$query1 = mysql_query("SELECT IFNULL(SUM(produksi),0) as produksi
                        FROM data_realisasi_panen
                        WHERE id_unit_usaha = '$id_unit_usaha'
                        AND date(waktu) >= '$tanggal_mulai'
                        AND date(waktu) <= '$tanggal_akhir'
                        AND status = 'disetujui'");
$query2 = mysql_query("SELECT IFNULL(produksi, 0) as produksi
                        FROM data_rkap
                        WHERE id_unit_usaha = '$id_unit_usaha'
                        AND bulan = '$bulan'
                        AND tahun = '$tahun'");

$cek1 = mysql_num_rows($query1);
if ($cek1 > 0) {

    $row1 = mysql_fetch_array($query1);

    $realisasi = $row1['produksi'];
} else {
    $realisasi = 1;
}

$row2 = mysql_fetch_array($query2);
if (mysql_num_rows($query2) > 0) {
    $row1 = mysql_fetch_array($query1);

    $rkap = $row2['produksi'];

} else {
    $rkap = 1;
}

$persen = ($realisasi / $rkap) * 100;

$data['realisasi_value'] = $realisasi;
$data['realisasi_persen'] = round($persen, 2);

echo json_encode($data);