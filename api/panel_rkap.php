<?php
include "../../admin/include/koneksi/koneksi.php";

if (!isset($_POST['id_unit_usaha'])) {
    echo "Maaf.. Halaman tidak ditemukan";
    die();
}
$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(SUM(drp.tdn * drp.rbt), 0) as rkap
                        FROM data_rencana_panen drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE drp.id_unit_usaha = '$id_unit_usaha'
                        AND date(drp.waktu) >= '$tanggal_mulai'
                        AND date(drp.waktu) <= '$tanggal_akhir'");

$cek1 = mysql_num_rows($query1);

if ($cek1 > 0) {
    $row1 = mysql_fetch_array($query1);

    $rkap_value = $row1['rkap'];
} else {
    $rkap_value = 0;
}

$data['rkap_value'] = $rkap_value;

echo json_encode($data);