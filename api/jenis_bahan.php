<?php
include '../../admin/include/koneksi/koneksi.php';

if (!isset($_POST['id_unit_usaha'])) {
    header('HTTP/1.0 403 Forbidden');

    echo "Halaman tidak ditemukan!!";
    die();
}

$query_pemel = mysql_query("SELECT * FROM data_jenis_bahan ORDER BY jenis_bahan ASC");
while ($row_pemel = mysql_fetch_array($query_pemel)) {
    $jenis_bahan[] = array(
        'id_jenis_bahan' => $row_pemel['id_jenis_bahan'],
        'jenis_bahan' => $row_pemel['jenis_bahan'],
    );
}

$data['jenis_bahan'] = $jenis_bahan;

echo json_encode($data);