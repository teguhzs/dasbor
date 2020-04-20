<?php
include "../../admin/include/koneksi/koneksi.php";

if ($_POST['luas_lama'] == 0) {
    $luas_lama = 0;
} else {
    $luas_lama = $_POST['luas_lama'];
}

$tahun = date('Y');

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(SUM(drp.luas), 0) as luas
                        FROM data_realisasi_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row1 = mysql_fetch_array($query1);

$luas_value_baru = round($row1['luas']);

if ($luas_lama == $luas_value_baru) {
    $luas_value_baru = 0;
}

// hitung persen
$total_luas = $luas_lama + $luas_value_baru;

$selisih = $total_luas - $luas_lama;

if ($luas_lama == 0) {
    $persen = ($selisih / 1) * 100;
} else {
    $persen = ($selisih / $luas_lama) * 100;
}

// rkap tahun ini
$query2 = mysql_query("SELECT IFNULL(SUM(drp.luas), 0) as luas
                        FROM data_rencana_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row2 = mysql_fetch_array($query2);

$data['luas_rkap'] = intval($row2['luas']);
$data['luas_value'] = $total_luas;
$data['luas_persen'] = round($persen, 2);

echo json_encode($data);
