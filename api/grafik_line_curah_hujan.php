<?php
$result = null;
$j = 1;
for ($j; $j < 7; $j++) {
    $i = 1;
    while ($i < 7) {
        $tanggal = "01-" . $i . "-" . date('Y');
        $curah_hujan[$j][] = array(
            'x' => date('M', strtotime($tanggal)),
            'y' => rand(1, 100),
        );

        $i++;
    }
    $afdeling[][$j] = $curah_hujan[$j];
}

$data['curah_hujan'] = $afdeling;

echo json_encode($data);