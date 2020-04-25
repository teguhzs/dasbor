<?php
include '../../admin/include/koneksi/koneksi.php';
include "../../admin/include/function/all.php";

// $id_unit_usaha = $_POST['id_unit_usaha'];
$id_unit_usaha = 'UNI20200215081207771';

$bulan_ini = date('mY');
$bulan = bulanIndo(date('m'));
$tahun = date('Y');

$query_pemel = mysql_query("SELECT * FROM data_kategori_pemeliharaan");

$cek_pemel = mysql_num_rows($query_pemel);
if ($cek_pemel > 0) {
    while ($row_pemel = mysql_fetch_array($query_pemel)) {
        $query_real = mysql_query("SELECT IFNULL(SUM(luas), 0) as luas
                                        FROM data_realisasi_pemeliharaan
                                        WHERE id_unit_usaha = '$id_unit_usaha'
                                        AND id_kategori_pemeliharaan = '$row_pemel[id_kategori_pemeliharaan]'
                                        AND DATE_FORMAT(waktu, '%m%Y') = '$bulan_ini'
                                        AND status = 'disetujui'
                                        ");

        $row_real = mysql_fetch_array($query_real);

        $query_rencana = mysql_query("SELECT IFNULL(SUM(luas_satu_bulan), 0) as luas
                                        FROM data_rpp
                                        WHERE id_unit_usaha = '$id_unit_usaha'
                                        AND id_kategori_pemeliharaan = '$row_pemel[id_kategori_pemeliharaan]'
                                        AND bulan = '$bulan'
                                        AND tahun = '$tahun'
                                        ");

        $row_rencana = mysql_fetch_array($query_rencana);

        $data_pemel = array(
            intval($row_rencana['luas']),
            intval($row_real['luas']));
        $pemeliharaan[] = array(
            'id_kategori_pemeliharaan' => $row_pemel['id_kategori_pemeliharaan'],
            'data' => $data_pemel,
        );
    }
} else {
    $pemeliharaan = array(
        'id_kategori_pemeliharaan' => $row_pemel['id_kategori_pemeliharaan'],
        'data' => null,
    );
}

$data['pemeliharaan'] = $pemeliharaan;

echo json_encode($data);