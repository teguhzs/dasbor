<?php
$result = null;
$i = 1;

while ($i < 7) {
    $inspeksi_panen[] = array(
        'x' => "Afdeling " . $i,
        'y' => rand(1, 100),
    );

    $i++;
}

$data['inspeksi_panen'] = $inspeksi_panen;

echo json_encode($data);