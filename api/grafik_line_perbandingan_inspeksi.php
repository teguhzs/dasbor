<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');
// if (!isset($_POST['id_unit_usaha'])) {
//     echo "Halaman tidak ditemukan!!";
//     die();
// }
$id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT
                                IFNULL(SUM(dip.brond_tidak_terkutip),0) as BTT,
                                IFNULL(SUM(dip.buah_mentah_dipanen),0) as BMD,
                                IFNULL(SUM(dip.buah_masak_tidak_dipanen),0) as BMTD,
                                IFNULL(SUM(dip.pelepah_tidak_tersusun), 0) as PTT
                                    FROM data_inspeksi_panen dip
                                    LEFT JOIN data_pegawai dp ON dp.id_pegawai = dip.id_pegawai
                                    WHERE dp.id_unit_usaha = '$id_unit_usaha'");
$row1 = mysql_fetch_assoc($query1);

$j = 0;
foreach ($row1 as $x => $y) {
    $i = 1;
    while ($i < 13) {
        $bulan = $i . $tahun;

        $query1_1 = mysql_query("SELECT
                                IFNULL(SUM(dip.brond_tidak_terkutip),0) as BTT,
                                IFNULL(SUM(dip.buah_mentah_dipanen),0) as BMD,
                                IFNULL(SUM(dip.buah_masak_tidak_dipanen),0) as BMTD,
                                IFNULL(SUM(dip.pelepah_tidak_tersusun), 0) as PTT
                                    FROM data_inspeksi_panen dip
                                    LEFT JOIN data_pegawai dp ON dp.id_pegawai = dip.id_pegawai
                                    WHERE dp.id_unit_usaha = '$id_unit_usaha'
                                    AND DATE_FORMAT(dip.waktu, '%c%Y') = '$bulan'");
        $row1_1 = mysql_fetch_array($query1_1);

        $tanggal = "01-" . $i . "-" . date('Y');

        if ($x == 'BTT') {
            $y = $row1_1['BTT'];
        } elseif ($x == 'BMD') {
            $y = $row1_1['BMD'];

        } elseif ($x == 'BMTD') {
            $y = $row1_1['BMTD'];
        } elseif ($x == 'PTT') {
            $y = $row1_1['PTT'];
        } else {
            $y = 0;
        }

        $grafik[$j][] = array(
            'x' => date('M', strtotime($tanggal)),
            'y' => $y,
        );

        $i++;
    }

    $inspeksi[] = array(
        'nama_inspeksi' => $x,
        'grafik' => $grafik[$j],
    );

    $j++;
}

$data['inspeksi'] = $inspeksi;

echo json_encode($data);
