<div class="row">
    <?php
$query_pemel_3 = mysql_query("SELECT *
                                FROM data_jenis_bahan
                                ORDER BY jenis_bahan ASC");
$jumlah_3 = mysql_num_rows($query_pemel_3);
switch ($jumlah_3) {
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
while ($row_pemel_3 = mysql_fetch_array($query_pemel_3)) {
    ?>
    <div class="<?=$kolom?> inner-spacing">

        <div class="widget widget-chart-three">
            <div class="widget-content">

                <div id="donutBahan<?php echo $row_pemel_3['id_jenis_bahan'] ?>"
                    style="padding-left: 150px; padding-top: 40px; height: 365px;">
                </div>
            </div>
        </div>
    </div>
    <?php
}
?>
</div>