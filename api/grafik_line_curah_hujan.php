<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');
$j = 1;

$id_unit_usaha = 'UNI1912006';

$query1 = mysql_query("SELECT * FROM data_afdeling WHERE id_unit_usaha = '$id_unit_usaha' ORDER BY nama_afdeling ASC");
$cekafdeling = mysql_num_rows($query1);
if ($cekafdeling > 0) {
    while ($row1 = mysql_fetch_array($query1)) {
        $i = 1;

        while ($i < 13) {
            $bulan = $i . $tahun;
            $query1_1 = mysql_query("SELECT IFNULL(SUM(drp.curah_hujan),0) as curah_hujan
                                    FROM data_realisasi_panen drp
                                    LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                                    WHERE dp.id_afdeling = '$row1[id_afdeling]'
                                    AND DATE_FORMAT(drp.waktu, '%c%Y') = '$bulan'");

            $row1_1 = mysql_fetch_array($query1_1);
            $cek1_1 = mysql_num_rows($query1_1);

            $tanggal = "01-" . $i . "-" . date('Y');
            $curah_hujan[$j][] = array(
                'x' => date('M', strtotime($tanggal)),
                'y' => $row1_1['curah_hujan'],
            );

            $i++;
        }
        $afdeling[][$j] = $curah_hujan[$j];

        $j++;
    }
} else {
    $afdeling = "Tidak ada data";
}

$data['curah_hujan'] = $afdeling;

echo json_encode($data);