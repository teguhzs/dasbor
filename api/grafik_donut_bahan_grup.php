<?php
include '../../admin/include/koneksi/koneksi.php';
include "../../admin/include/function/all.php";

// $id_unit_usaha = $_POST['id_unit_usaha'];
$id_unit_usaha = 'UNI20200215081207771';

$bulan_ini = date('mY');
$bulan = bulanIndo(date('m'));
$tahun = date('Y');

$query_pemel = mysql_query("SELECT * FROM data_jenis_bahan");

$cek_pemel = mysql_num_rows($query_pemel);
if ($cek_pemel > 0) {
    while ($row_pemel = mysql_fetch_array($query_pemel)) {
        $query_real = mysql_query("SELECT IFNULL(SUM(jumlah_bahan), 0) as jumlah_bahan
                                        FROM data_realisasi_pemeliharaan
                                        WHERE id_unit_usaha = '$id_unit_usaha'
                                        AND id_jenis_bahan = '$row_pemel[id_jenis_bahan]'
                                        AND DATE_FORMAT(waktu, '%m%Y') = '$bulan_ini'
                                        AND status = 'disetujui'
                                        ");

        $row_real = mysql_fetch_array($query_real);

        $query_rencana = mysql_query("SELECT IFNULL(SUM(jumlah_bahan_satu_bulan), 0) as jumlah_bahan
                                        FROM data_rpp
                                        WHERE id_unit_usaha = '$id_unit_usaha'
                                        AND id_jenis_bahan = '$row_pemel[id_jenis_bahan]'
                                        AND bulan = '$bulan'
                                        AND tahun = '$tahun'
                                        ");

        $row_rencana = mysql_fetch_array($query_rencana);

        $data_pemel = array(
            intval($row_rencana['jumlah_bahan']),
            intval($row_real['jumlah_bahan']));
        $bahan[] = array(
            'id_jenis_bahan' => $row_pemel['id_jenis_bahan'],
            'data' => $data_pemel,
        );
    }
} else {
    $bahan = array(
        'id_jenis_bahan' => $row_pemel['id_jenis_bahan'],
        'data' => null,
    );
}

$data['bahan'] = $bahan;

echo json_encode($data);