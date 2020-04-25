<?php

include "../../admin/include/koneksi/koneksi.php";

$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');
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

    $query1_1 = mysql_query("SELECT SUM(tenaga_panen) as tenaga_panen_rencana
                                    FROM data_rencana_panen
                                    WHERE id_unit_usaha = '$id_unit_usaha'
                                    AND date(waktu) >= '$tanggal'
                                    AND status = 'disetujui'
                                ");
    if (mysql_num_rows($query1_1) > 0) {
        while ($row1_1 = mysql_fetch_array($query1_1)) {
            $rencana[] = array(
                'x' => '' . $i . '',
                'y' => round($row1_1['tenaga_panen_rencana']),
            );
        }
    } else {
        $rencana[] = array(
            'x' => '' . $i . '',
            'y' => 0,
        );
    }

    $query1_2 = mysql_query("SELECT IFNULL(SUM(tenaga_panen), 0) as tenaga_panen_realisasi
                                    FROM data_realisasi_panen
                                    WHERE id_unit_usaha = '$id_unit_usaha'
                                    AND date(waktu) = '$tanggal'
                                    AND status = 'disetujui'
                                    ");
    if (mysql_num_rows($query1_2) > 0) {
        while ($row1_2 = mysql_fetch_array($query1_2)) {
            $realisasi[] = array(
                'x' => '' . $i . '',
                'y' => $row1_2['tenaga_panen_realisasi'],
            );
        }
    } else {
        $realisasi[] = array(
            'x' => '' . $i . '',
            'y' => 0,
        );
    }
    $i++;
}

$data['rkap'] = $rencana;
$data['realisasi'] = $realisasi;

echo json_encode($data);