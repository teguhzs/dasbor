<?php 
$result = null;
$i      = 1;

while ($i < 13) {
    $tanggal = "01-".$i."-".date('Y');
    $rkap[] = array(
        'x' => date('M', strtotime($tanggal)),
        'y' => rand(1,100)
    );

    $realisasi[] = array(
        'x' => date('M', strtotime($tanggal)),
        'y' => rand(1,100)
    );

    $i++;
}

$data['rkap'] = $rkap;
$data['realisasi'] = $realisasi;

echo json_encode($data);
?>