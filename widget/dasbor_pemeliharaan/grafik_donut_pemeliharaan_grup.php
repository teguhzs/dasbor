<div class="row">
    <?php
$query_pemel = mysql_query("SELECT * FROM data_kategori_pemeliharaan ORDER BY kategori_pemeliharaan ASC");
$i = 0;
$jumlah = mysql_num_rows($query_pemel);
switch ($jumlah) {
    case 1:
        $kolom = 'col-xl-12';
        break;
    case 2:
        $kolom = 'col-xl-6';
        break;
    case 3:
        $kolom = 'col-xl-4';
        break;
    case 4:
        $kolom = 'col-xl-3';
        break;
    case 5:
        $kolom = 'col-xl-2';
        break;
    case 6:
        $kolom = 'col-xl-2';
        break;
    case 7:
        $kolom = 'col-xl-1';
        break;
}
while ($row_pemel = mysql_fetch_array($query_pemel)) {
    ?>
    <div class="<?=$kolom?> inner-spacing">

        <div class="widget widget-chart-three">
            <div class="widget-content">
                <div id="donutPemeliharaan<?php echo $row_pemel['id_kategori_pemeliharaan'] ?>"
                    style="padding-left: 10px; padding-top: 40px; height: 365px;"></div>
            </div>
        </div>
    </div>
    <?php
$i++;
}
?>
</div>