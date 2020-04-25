<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');
$i = 1;
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI20200215081207771';
$tahun = date('Y');
$bulan = date('m');
$hariBulanIni = cal_days_in_month(CAL_GREGORIAN, $bulan, $tahun);

$i = 1;

$y = 0;
while ($i <= $hariBulanIni) {
    $tanggal = $tahun . '-' . $bulan . '-' . $i;
    $query1 = mysql_query("SELECT IFNULL(SUM(produksi), 0) as produksi
                            FROM data_realisasi_panen
                            WHERE id_unit_usaha = '$id_unit_usaha'
                            AND date(waktu) = '$tanggal'
                            AND status = 'disetujui'");
    $row1 = mysql_fetch_array($query1);

    $y = $row1['produksi'] + $y;
    $tanggal = "01-" . $i . "-" . date('Y');
    $realisasi[] = array(
        'x' => '' . $i . '',
        'y' => round($y / 1000, 2),
    );

    $i++;
}

$data['realisasi'] = $realisasi;

echo json_encode($data);