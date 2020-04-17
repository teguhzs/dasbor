<?php
include "../../admin/include/koneksi/koneksi.php";
$tanggal_mulai = date('Y-m-01');
$tanggal_akhir = date('Y-m-t');
if (!isset($_POST['id_unit_usaha'])) {
    echo "Halaman tidak ditemukan!!";
    die();
}
$id_unit_usaha = $_POST['id_unit_usaha'];

$query1 = mysql_query("SELECT
                        IFNULL(SUM(dip.brond_tidak_terkutip), 0) as BTT,
                        IFNULL(SUM(dip.buah_mentah_dipanen), 0) as BMD,
                        IFNULL(SUM(dip.buah_masak_tidak_dipanen), 0) as BMTD,
                        IFNULL(SUM(dip.pelepah_tidak_tersusun), 0) as PTT
                        FROM data_inspeksi_panen dip
                        LEFT JOIN data_pegawai dp ON dp.id_pegawai = dip.id_pegawai
                        WHERE dp.id_unit_usaha ='$id_unit_usaha'
                        AND date(dip.waktu) >= '$tanggal_mulai'
                        AND date(dip.waktu) <= '$tanggal_akhir'
                        ");
$row1 = mysql_fetch_assoc($query1);
foreach ($row1 as $x => $y) {
    $inspeksi_panen[] = array(
        'x' => $x,
        'y' => $y,
    );
}

$data['inspeksi_panen'] = $inspeksi_panen;

echo json_encode($data);