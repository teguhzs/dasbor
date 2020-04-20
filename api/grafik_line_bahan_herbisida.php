<?php
include "../../admin/include/koneksi/koneksi.php";

if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];

$i = 1;

$tahun = date('Y');
$bulan = date('m');
$hariBulanIni = cal_days_in_month(CAL_GREGORIAN, $bulan, $tahun);

while ($i <= $hariBulanIni) {

    $tanggal = $tahun . '-' . $bulan . '-' . $i;

    $query1 = mysql_query("SELECT IFNULL(SUM(drp.bahan_herbisida),0) as bahan_herbisida_pemeliharaan
                            FROM data_rencana_pemeliharaan drp
                            LEFT JOIN data_pegawai dp ON drp.id_pegawai = dp.id_pegawai
                            WHERE dp.id_unit_usaha = '$id_unit_usaha'
                            AND date(drp.waktu) = '$tanggal'
                            ");
    $row1 = mysql_fetch_array($query1);

    $rkap[] = array(
        'x' => '' . $i . '',
        'y' => $row1['bahan_herbisida_pemeliharaan'],
    );

    $query2 = mysql_query("SELECT IFNULL(SUM(drp.bahan_herbisida),0) as bahan_herbisida_pemeliharaan
                            FROM data_realisasi_pemeliharaan drp
                            LEFT JOIN data_pegawai dp ON drp.id_pegawai = dp.id_pegawai
                            WHERE dp.id_unit_usaha = '$id_unit_usaha'
                            AND date(drp.waktu) = '$tanggal'
                            ");
    $row2 = mysql_fetch_array($query2);

    $realisasi[] = array(
        'x' => '' . $i . '',
        'y' => $row2['bahan_herbisida_pemeliharaan'],
    );

    $i++;
}

$data['rkap'] = $rkap;
$data['realisasi'] = $realisasi;

echo json_encode($data);
