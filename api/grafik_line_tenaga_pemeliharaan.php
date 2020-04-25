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

$query1 = mysql_query("SELECT * FROM data_kategori_pemeliharaan ORDER BY kategori_pemeliharaan ASC");
$cek_kategori = mysql_num_rows($query1);
if ($cek_kategori > 0) {
    while ($row1 = mysql_fetch_array($query1)) {
        $i = 1;

        while ($i <= $hariBulanIni) {
            $tanggal = $tahun . '-' . $bulan . '-' . $i;

            $query1_1 = mysql_query("SELECT IFNULL(SUM(tenaga_pemeliharaan), 0) as tenaga_pemeliharaan
                                    FROM data_realisasi_pemeliharaan
                                    WHERE id_kategori_pemeliharaan = '$row1[id_kategori_pemeliharaan]'
                                    AND date(waktu) = '$tanggal'
                                    AND status = 'disetujui'");

            $row1_1 = mysql_fetch_array($query1_1);

            $tenaga_pemeliharaan[$j][] = array(
                'x' => '' . $i . '',
                'y' => $row1_1['tenaga_pemeliharaan'],
            );

            $i++;
        }
        $pemeliharaan[][$j] = array(
            "kategori_pemeliharaan" => $row1['kategori_pemeliharaan'],
            'data' => $tenaga_pemeliharaan[$j],
        );

        $j++;
    }
} else {
    $pemeliharaan = "Tidak ada data";
}

$data['tenaga_pemeliharaan'] = $pemeliharaan;

echo json_encode($data);