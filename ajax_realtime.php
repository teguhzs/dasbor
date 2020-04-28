<?php
include '../admin/include/koneksi/koneksi.php';

$querytabel = "SELECT r2.waktu
,r2.lat
,r2.lng
,r2.id_realtime
,p.id_pegawai
,p.nama
FROM (SELECT max(id_realtime) AS id_realtime, id_pegawai FROM data_realtime GROUP BY id_pegawai DESC) as realtime
inner JOIN data_realtime r2
ON (r2.id_realtime = realtime.id_realtime )
INNER JOIN data_pegawai p
ON r2.id_pegawai = p.id_pegawai";
$proses = mysql_query($querytabel);

$no = 0;
while ($data = mysql_fetch_array($proses)) {
    $js[$no] = array(
        'waktu' => $data['waktu'],
        'lat' => $data['lat'],
        'lng' => $data['lng'],
        'id_pegawai' => $data['id_pegawai'],
        'id_realtime' => $data['id_realtime'],
        'nama' => $data['nama'],

    );
    $no++;}
;

echo json_encode($js);