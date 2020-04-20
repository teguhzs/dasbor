<?php
include "../../admin/include/koneksi/koneksi.php";

if ($_POST['tenaga_pemeliharaan_lama'] == 0) {
    $tenaga_pemeliharaan_lama = 0;
} else {
    $tenaga_pemeliharaan_lama = $_POST['tenaga_pemeliharaan_lama'];
}

$tahun = date('Y');

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(SUM(drp.tenaga_pemeliharaan), 0) as tenaga_pemeliharaan
                        FROM data_realisasi_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row1 = mysql_fetch_array($query1);

$tenaga_pemeliharaan_value_baru = round($row1['tenaga_pemeliharaan']);

if ($tenaga_pemeliharaan_lama == $tenaga_pemeliharaan_value_baru) {
    $tenaga_pemeliharaan_value_baru = 0;
}

// hitung persen
$total_tenaga_pemeliharaan = $tenaga_pemeliharaan_lama + $tenaga_pemeliharaan_value_baru;

$selisih = $total_tenaga_pemeliharaan - $tenaga_pemeliharaan_lama;

if ($tenaga_pemeliharaan_lama == 0) {
    $persen = ($selisih / 1) * 100;
} else {
    $persen = ($selisih / $tenaga_pemeliharaan_lama) * 100;
}

// rkap tahun ini
$query2 = mysql_query("SELECT IFNULL(SUM(drp.tenaga_pemeliharaan), 0) as tenaga_pemeliharaan
                        FROM data_rencana_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row2 = mysql_fetch_array($query2);

$data['tenaga_pemeliharaan_rkap'] = intval($row2['tenaga_pemeliharaan']);
$data['tenaga_pemeliharaan_value'] = $total_tenaga_pemeliharaan;
$data['tenaga_pemeliharaan_persen'] = round($persen, 2);

echo json_encode($data);
