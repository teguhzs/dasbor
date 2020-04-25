<?php
include "../../admin/include/koneksi/koneksi.php";

$tahun = date('Y');
$j = 0;
// if (!isset($_POST['id_unit_usaha'])) {
//     echo "Halaman tidak ditemukan!!";
//     die();
// }
// $id_unit_usaha = $_POST['id_unit_usaha'];
$id_unit_usaha = 'UNI20200215081207771';

$tahun = date('Y');
$bulan = date('m');
$hariBulanIni = cal_days_in_month(CAL_GREGORIAN, $bulan, $tahun);

$query1 = mysql_query("SELECT * FROM data_jenis_bahan ORDER BY jenis_bahan ASC");
$cek_kategori = mysql_num_rows($query1);
if ($cek_kategori > 0) {
    while ($row1 = mysql_fetch_array($query1)) {
        $i = 1;

        while ($i <= $hariBulanIni) {
            $tanggal = $tahun . '-' . $bulan . '-' . $i;

            $query1_1 = mysql_query("SELECT IFNULL(SUM(jumlah_bahan), 0) as jumlah_bahan
                                    FROM data_realisasi_pemeliharaan
                                    WHERE id_jenis_bahan = '$row1[id_jenis_bahan]'
                                    AND date(waktu) = '$tanggal'
                                    AND status = 'disetujui'");

            $row1_1 = mysql_fetch_array($query1_1);

            $jumlah_bahan[$j][] = array(
                'x' => '' . $i . '',
                'y' => $row1_1['jumlah_bahan'],
            );

            $i++;
        }
        $bahan[][$j] = array(
            "jenis_bahan" => $row1['jenis_bahan'],
            'data' => $jumlah_bahan[$j],
        );

        $j++;
    }
} else {
    $bahan = "Tidak ada data";
}

$data['bahan'] = $bahan;

echo json_encode($data);