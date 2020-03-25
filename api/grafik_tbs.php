<?php 
$result = null;
$i=0;
while ($i < 7) {
    $result[] = array(
        'x' => "Afdeling ".$i,
        'y'  => rand(100, 1000)
    );

    $tertinggi[] = array(
        'x' => "Afdeling ".$i,
        'y'  => rand(100, 1000)
    );

    $i++;
}

$data['hari_ini'] = $result;
$data['tertinggi'] = $tertinggi;

echo json_encode($data);
?>