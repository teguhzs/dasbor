<?php
include "../../admin/include/koneksi/koneksi.php";

$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(SUM(drp.tenaga_pemeliharaan),0) as tenaga_pemeliharaan
                            FROM data_rencana_pemeliharaan drp
                            LEFT JOIN data_pegawai dp ON drp.id_pegawai = dp.id_pegawai
                            WHERE dp.id_unit_usaha = '$id_unit_usaha'
                            AND date(drp.waktu) >= '$tanggal_mulai'
                            AND date(drp.waktu) <= '$tanggal_akhir'
                            ");
$row1 = mysql_fetch_array($query1);

$query2 = mysql_query("SELECT IFNULL(SUM(drp.tenaga_pemeliharaan),0) as tenaga_pemeliharaan
                            FROM data_realisasi_pemeliharaan drp
                            LEFT JOIN data_pegawai dp ON drp.id_pegawai = dp.id_pegawai
                            WHERE dp.id_unit_usaha = '$id_unit_usaha'
                            AND date(drp.waktu) >= '$tanggal_mulai'
                            AND date(drp.waktu) <= '$tanggal_akhir'
                            ");
$row2 = mysql_fetch_array($query2);

$i = 0;
$data = array(
    intval($row2['tenaga_pemeliharaan']),
    intval($row1['tenaga_pemeliharaan']),
);

echo json_encode($data);
