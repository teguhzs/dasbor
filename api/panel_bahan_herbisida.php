<?php
include "../../admin/include/koneksi/koneksi.php";

if ($_POST['bahan_herbisida_lama'] == 0) {
    $bahan_herbisida_lama = 0;
} else {
    $bahan_herbisida_lama = $_POST['bahan_herbisida_lama'];
}

$tahun = date('Y');

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT IFNULL(SUM(drp.bahan_herbisida), 0) as bahan_herbisida
                        FROM data_realisasi_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row1 = mysql_fetch_array($query1);

$bahan_herbisida_value_baru = round($row1['bahan_herbisida']);

if ($bahan_herbisida_lama == $bahan_herbisida_value_baru) {
    $bahan_herbisida_value_baru = 0;
}

// hitung persen
$total_bahan_herbisida = $bahan_herbisida_lama + $bahan_herbisida_value_baru;

$selisih = $total_bahan_herbisida - $bahan_herbisida_lama;

if ($bahan_herbisida_lama == 0) {
    $persen = ($selisih / 1) * 100;
} else {
    $persen = ($selisih / $bahan_herbisida_lama) * 100;
}

// rkap tahun ini
$query2 = mysql_query("SELECT IFNULL(SUM(drp.bahan_herbisida), 0) as bahan_herbisida
                        FROM data_rencana_pemeliharaan drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND DATE_FORMAT(drp.waktu, '%Y') = '$tahun'
                    ");

$row2 = mysql_fetch_array($query2);

$data['bahan_herbisida_rkap'] = intval($row2['bahan_herbisida']);
$data['bahan_herbisida_value'] = $total_bahan_herbisida;
$data['bahan_herbisida_persen'] = round($persen, 2);

echo json_encode($data);
