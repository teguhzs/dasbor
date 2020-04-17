<?php
$result = null;
$i = 1;

$tahun = date('Y');
$bulan = date('m');
$hariBulanIni = cal_days_in_month(CAL_GREGORIAN, $bulan, $tahun);

while ($i <= $hariBulanIni) {
    $rkap[] = array(
        'x' => '' . $i . '',
        'y' => rand(1, 100),
    );

    $realisasi[] = array(
        'x' => '' . $i . '',
        'y' => rand(1, 100),
    );

    $i++;
}

$data['rkap'] = $rkap;
$data['realisasi'] = $realisasi;

echo json_encode($data);