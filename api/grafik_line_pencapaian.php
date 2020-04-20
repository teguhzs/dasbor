<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');

for ($i = $tahun - 8; $i <= $tahun; $i++) {
    # code...

    $query1 = mysql_query("SELECT IFNULL(SUM(drp.tdn * drp.rbt), 0) as rkap
    FROM data_rencana_panen drp
    LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
    WHERE DATE_FORMAT(drp.waktu, '%Y') = '$i'");
    $row1 = mysql_fetch_array($query1);
    $y1 = $row1['rkap'] / 1000;
    $rkap[] = array(
        'x' => '' . $i . '',
        'y' => round($y1, 2),
    );

    $query2 = mysql_query("SELECT IFNULL(SUM(drp.produksi), 0) as produksi
FROM data_realisasi_panen drp
LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
WHERE DATE_FORMAT(drp.waktu, '%Y') = '$i'");
    $row2 = mysql_fetch_array($query2);
    $y2 = $row2['produksi'] / 1000;
    $pencapaian[] = array(
        'x' => '' . $i . '',
        'y' => round($y2, 2),
    );

}

$data['rkap'] = $rkap;
$data['pencapaian'] = $pencapaian;

echo json_encode($data);