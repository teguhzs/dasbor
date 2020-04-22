<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');

$query1 = mysql_query("SELECT * FROM data_unit_usaha ORDER BY nama_unit_usaha ASC");

$cek1 = mysql_num_rows($query1);

if ($cek1 > 0) {
    while ($row1 = mysql_fetch_array($query1)) {
        $query1_1 = mysql_query("SELECT
                                (SUM(drp.produksi) / (SELECT SUM(produksi) FROM data_realisasi_panen WHERE DATE_FORMAT(waktu, '%Y') = '$tahun') * 100) as produksi
                                FROM data_realisasi_panen drp
                                LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                                WHERE dp.id_unit_usaha = '$row1[id_unit_usaha]'
                                AND DATE_FORMAT(waktu, '%Y') = '$tahun'
                            ");

        $row1_1 = mysql_fetch_array($query1_1);

        if ($row1_1['produksi'] != null) {
            $y = $row1_1['produksi'];
        } else {
            $y = 0;
        }

        $x = $row1['nama_unit_usaha'];

        $produksi[] = array(
            'x' => $x,
            'y' => round($y, 2),
        );

    }
} else {
    $produksi[] = array(
        'x' => 0,
        'y' => 0,
    );
}

$data['produksi'] = $produksi;

echo json_encode($data);