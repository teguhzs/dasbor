<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');
$j = 0;
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];
// $id_unit_usaha = 'UNI20200215081207771';

$tahun = date('Y');
$bulan = date('m');
$hariBulanIni = cal_days_in_month(CAL_GREGORIAN, $bulan, $tahun);

$query1 = mysql_query("SELECT * FROM data_afdeling WHERE id_unit_usaha = '$id_unit_usaha' ORDER BY nama_afdeling ASC");
$cekafdeling = mysql_num_rows($query1);
if ($cekafdeling > 0) {
    while ($row1 = mysql_fetch_array($query1)) {
        $i = 1;

        while ($i <= $hariBulanIni) {
            $tanggal = $tahun . '-' . $bulan . '-' . $i;

            $bulan = $i . $tahun;
            $query1_1 = mysql_query("SELECT IFNULL(SUM(curah_hujan),0) as curah_hujan
                                    FROM data_realisasi_panen
                                    WHERE id_afdeling = '$row1[id_afdeling]'
                                    AND date(waktu) = '$tanggal'
                                    AND status = 'disetujui'");

            $row1_1 = mysql_fetch_array($query1_1);
            $cek1_1 = mysql_num_rows($query1_1);

            $curah_hujan[$j][] = array(
                'x' => '' . $i . '',
                'y' => $row1_1['curah_hujan'],
            );

            $i++;
        }
        $afdeling[][$j] = array(
            "nama_afdeling" => $row1['nama_afdeling'],
            'data' => $curah_hujan[$j],
        );

        $j++;
    }
} else {
    $afdeling = "Tidak ada data";
}

$data['curah_hujan'] = $afdeling;

echo json_encode($data);