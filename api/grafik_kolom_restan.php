<?php
include "../../admin/include/koneksi/koneksi.php";

$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];

$query1 = mysql_query("SELECT * FROM data_afdeling WHERE id_unit_usaha = '$id_unit_usaha' ORDER BY nama_afdeling ASC");
if (mysql_num_rows($query1) > 0) {
    while ($row1 = mysql_fetch_array($query1)) {
        $query1_1 = mysql_query("SELECT SUM(drp.restan) as restan
                                    FROM data_realisasi_panen drp
                                    LEFT JOIN data_pegawai dp ON dp.id_pegawai = drp.id_pegawai
                                    WHERE dp.id_afdeling = '$row1[id_afdeling]'
                                    AND date(drp.waktu) >= '$tanggal_mulai'
                                    AND date(drp.waktu) <= '$tanggal_akhir'
                                ");
        if (mysql_num_rows($query1_1) > 0) {
            while ($row1_1 = mysql_fetch_array($query1_1)) {
                $restan[] = array(
                    'x' => $row1['nama_afdeling'],
                    'y' => round($row1_1['restan']),
                );
            }
        } else {
            $restan[] = array(
                'x' => $row1['nama_afdeling'],
                'y' => 0,
            );
        }
    }

} else {
    $restan[] = array(
        'x' => "",
        'y' => 0,
    );
}

$data['restan'] = $restan;

echo json_encode($data);