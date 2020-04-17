<?php
include "../../admin/include/koneksi/koneksi.php";

if ($_POST['realisasi_lama'] == 0) {
    $realisasi_lama = 0;
} else {
    $realisasi_lama = $_POST['realisasi_lama'];
}

$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT SUM(drp.produksi) as produksi
                        FROM data_realisasi_panen drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND date(drp.waktu) >= '$tanggal_mulai'
                        AND date(drp.waktu) <= '$tanggal_akhir'");

$cek1 = mysql_num_rows($query1);
if ($cek1 > 0) {

    $row1 = mysql_fetch_array($query1);

    $realisasi_value_baru = round($row1['produksi']) / 1000;
    if ($realisasi_lama == $realisasi_value_baru) {
        $realisasi_value_baru = 0;
    }
} else {
    $realisasi_value_baru = 0;
}

$total_realisasi = $realisasi_lama + $realisasi_value_baru;

$selisih = $total_realisasi - $realisasi_lama;
if ($curah_hujan_lama == 0) {
    $persen = ($selisih / 1) * 100;
} else {
    $persen = ($selisih / $realisasi_lama) * 100;
}

$data['realisasi_value'] = $total_realisasi;
$data['realisasi_persen'] = round($persen, 2);

echo json_encode($data);