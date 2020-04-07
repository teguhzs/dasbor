<?php
if ($_POST['curah_hujan_lama'] == 0) {
    $curah_hujan_lama = 1;
} else {
    $curah_hujan_lama = $_POST['curah_hujan_lama'];
}
$curah_hujan_value_baru = rand(1, 10);

$total_curah_hujan = $curah_hujan_lama + $curah_hujan_value_baru;

$selisih = $total_curah_hujan - $curah_hujan_lama;
$persen = ($selisih / $curah_hujan_lama) * 100;

$data['curah_hujan_value'] = $total_curah_hujan;
$data['curah_hujan_persen'] = round($persen, 2);

echo json_encode($data);