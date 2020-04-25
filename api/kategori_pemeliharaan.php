<?php
include '../../admin/include/koneksi/koneksi.php';

if (!isset($_POST['id_unit_usaha'])) {
    header('HTTP/1.0 403 Forbidden');

    echo "Halaman tidak ditemukan!!";
    die();
}

$query_pemel = mysql_query("SELECT * FROM data_kategori_pemeliharaan ORDER BY kategori_pemeliharaan ASC");
while ($row_pemel = mysql_fetch_array($query_pemel)) {
    $kategori_pemeliharaan[] = array(
        'id_kategori_pemeliharaan' => $row_pemel['id_kategori_pemeliharaan'],
        'kategori_pemeliharaan' => $row_pemel['kategori_pemeliharaan'],
    );
}

$data['kategori_pemeliharaan'] = $kategori_pemeliharaan;

echo json_encode($data);