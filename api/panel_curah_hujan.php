<?php
include "../../admin/include/koneksi/koneksi.php";

if ($_POST['curah_hujan_lama'] == 0) {
    $curah_hujan_lama = 0;
} else {
    $curah_hujan_lama = $_POST['curah_hujan_lama'];
}
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT SUM(drp.curah_hujan) as curah_hujan
                        FROM data_realisasi_panen drp
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                        WHERE dp.id_unit_usaha = '$id_unit_usaha'
                        AND date(drp.waktu) >= '$tanggal_mulai'
                        AND date(drp.waktu) <= '$tanggal_akhir'");
$cek1 = mysql_num_rows($query1);

if ($cek1 > 0) {

    $row1 = mysql_fetch_array($query1);

    $curah_hujan_value_baru = $row1['curah_hujan'];
    if ($curah_hujan_lama == $curah_hujan_value_baru) {
        $curah_hujan_value_baru = 0;
    }
} else {
    $curah_hujan_value_baru = 0;
}

$total_curah_hujan = $curah_hujan_lama + $curah_hujan_value_baru;

$selisih = $total_curah_hujan - $curah_hujan_lama;
if ($curah_hujan_lama == 0) {
    $persen = ($selisih / 1) * 100;
} else {
    $persen = ($selisih / $curah_hujan_lama) * 100;
}

$data['curah_hujan_value'] = $total_curah_hujan;
$data['curah_hujan_persen'] = round($persen, 2);

echo json_encode($data);