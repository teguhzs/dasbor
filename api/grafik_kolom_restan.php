<?php
include "../../admin/include/koneksi/koneksi.php";

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

while ($i <= $hariBulanIni) {
    $tanggal = $tahun . '-' . $bulan . '-' . $i;

    $query1_1 = mysql_query("SELECT IFNULL(SUM(restan), 0) as restan
                                    FROM data_realisasi_panen
                                    WHERE id_unit_usaha = '$id_unit_usaha'
                                    AND date(waktu) = '$tanggal'
                                    AND status = 'disetujui'
                                ");
    if (mysql_num_rows($query1_1) > 0) {
        while ($row1_1 = mysql_fetch_array($query1_1)) {
            $restan[] = array(
                'x' => '' . $i . '',
                'y' => round($row1_1['restan']),
            );
        }
    } else {
        $restan[] = array(
            'x' => '' . $i . '',
            'y' => 0,
        );
    }

    $i++;
}

$data['restan'] = $restan;

echo json_encode($data);