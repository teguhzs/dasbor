<?php
if ($_POST['realisasi_lama'] == 0) {
    $realisasi_lama = 1;
} else {
    $realisasi_lama = $_POST['realisasi_lama'];
}
$realisasi_value_baru = rand(1, 10);

$total_realisasi = $realisasi_lama + $realisasi_value_baru;

$selisih = $total_realisasi - $realisasi_lama;
$persen = ($selisih / $realisasi_lama) * 100;

$data['realisasi_value'] = $total_realisasi;
$data['realisasi_persen'] = round($persen, 2);

echo json_encode($data);