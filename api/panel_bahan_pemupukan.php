<?php
include "../../admin/include/koneksi/koneksi.php";

if ($_POST['bahan_pupuk_lama'] == 0) {
    $bahan_pupuk_lama = 0;
} else {
    $bahan_pupuk_lama = $_POST['bahan_pupuk_lama'];
}

$tahun = date('Y');

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(SUM(drp.bahan_pupuk), 0) as bahan_pupuk
                        FROM data_realisasi_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row1 = mysql_fetch_array($query1);

$bahan_pupuk_value_baru = round($row1['bahan_pupuk']);

if ($bahan_pupuk_lama == $bahan_pupuk_value_baru) {
    $bahan_pupuk_value_baru = 0;
}

// hitung persen
$total_bahan_pupuk = $bahan_pupuk_lama + $bahan_pupuk_value_baru;

$selisih = $total_bahan_pupuk - $bahan_pupuk_lama;

if ($bahan_pupuk_lama == 0) {
    $persen = ($selisih / 1) * 100;
} else {
    $persen = ($selisih / $bahan_pupuk_lama) * 100;
}

// rkap tahun ini
$query2 = mysql_query("SELECT IFNULL(SUM(drp.bahan_pupuk), 0) as bahan_pupuk
                        FROM data_rencana_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row2 = mysql_fetch_array($query2);

$data['bahan_pupuk_rkap'] = intval($row2['bahan_pupuk']);
$data['bahan_pupuk_value'] = $total_bahan_pupuk;
$data['bahan_pupuk_persen'] = round($persen, 2);

echo json_encode($data);
