<?php 
$result = null;
$i      = 1;

while ($i < 7) {
    $restan[] = array(
        'x' => "Afdeling ".$i,
        'y' => rand(1,100)
    );
    
    $i++;
}

$data['restan'] = $restan;

echo json_encode($data);
?>