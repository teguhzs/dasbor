<?php 
$result = null;
$i      = 0;
while ($i < 7) {
    $rkap[] = array(
        'x' => "Afdeling ".$i,
        'y' => rand(1,100)
    );

    $realisasi[] = array(
        'x' => "Afdeling ".$i,
        'y' => rand(1,100)
    );

    $i++;
}

$data['rkap'] = $rkap;
$data['realisasi'] = $realisasi;

echo json_encode($data);
?>