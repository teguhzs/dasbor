<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');
$i = 1;
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];

while ($i < 13) {
    $bulan = $i . $tahun;
    $query1 = mysql_query("SELECT IFNULL(SUM(drp.produksi), 0) as produksi
                            FROM data_realisasi_panen drp
                            LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                            WHERE dp.id_unit_usaha = '$id_unit_usaha'
                            AND DATE_FORMAT(drp.waktu, '%c%Y') = '$bulan'");
    $row1 = mysql_fetch_array($query1);
    $y = $row1['produksi'] / 1000;
    $tanggal = "01-" . $i . "-" . date('Y');
    $realisasi[] = array(
        'x' => date('M', strtotime($tanggal)),
        'y' => round($y),
    );
    $query2 = mysql_query("SELECT IFNULL(rkap, 0) as rkap
                            FROM data_rkap
                            WHERE id_unit_usaha = '$id_unit_usaha'
                            AND DATE_FORMAT(waktu, '%c%Y') = '$bulan'");
    $row2 = mysql_fetch_array($query2);
    $y2 = $row2['rkap'] / 1000;
    $rkap[] = array(
        'x' => date('M', strtotime($tanggal)),
        'y' => round($y2),
    );

    $i++;
}

$data['rkap'] = $rkap;
$data['realisasi'] = $realisasi;

echo json_encode($data);