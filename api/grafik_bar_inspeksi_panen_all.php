<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');

for ($i = $tahun - 8; $i <= $tahun; $i++) {
    $query = mysql_query("SELECT
                            IFNULL(SUM(brond_tidak_terkutip),0) as BTT,
                            IFNULL(SUM(buah_mentah_dipanen),0) as BMD,
                            IFNULL(SUM(buah_masak_tidak_dipanen),0) as BMTD,
                            IFNULL(SUM(pelepah_tidak_tersusun),0) as PTT
                            FROM data_inspeksi_panen
                            WHERE DATE_FORMAT(waktu, '%Y') = '$i'
                        ");
    $row = mysql_fetch_array($query);

    // array btt
    $btt[] = array(
        'x' => '' . $i . '',
        'y' => $row['BTT'],
    );

    // array btt
    $bmd[] = array(
        'x' => '' . $i . '',
        'y' => $row['BMD'],
    );

    // array btt
    $bmtd[] = array(
        'x' => '' . $i . '',
        'y' => $row['BMTD'],
    );

    // array btt
    $ptt[] = array(
        'x' => '' . $i . '',
        'y' => $row['PTT'],
    );
}

$data['BTT'] = $btt;

$data['BMD'] = $bmd;

$data['BMTD'] = $bmtd;

$data['PTT'] = $ptt;

echo json_encode($data);