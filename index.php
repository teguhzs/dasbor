<?php
if (!isset($_GET['u'])) {
    # code...
    echo "Halaman tidak ditemukan";
    die();
} else {
    $id_unit_usaha = htmlspecialchars($_GET['u']);
}
include '../admin/include/koneksi/koneksi.php';

?>

<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes">
    <title> PT. Perkebunan Nusantara VI </title>
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
    <link href="assets/css/loader.css" rel="stylesheet" type="text/css" />
    <script src="assets/js/loader.js"></script>

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&amp;display=swap" rel="stylesheet">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
    <!-- END GLOBAL MANDATORY STYLES -->

    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES -->
    <link href="plugins/apex/apexcharts.css" rel="stylesheet" type="text/css">
    <link href="assets/css/dashboard/dash_2.css" rel="stylesheet" type="text/css" />
    <!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES -->
    <link rel="stylesheet" href="plugins/font-icons/font-awesome/css/all.css">
    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES -->
    <link rel="stylesheet" type="text/css" href="assets/css/widgets/modules-widgets.css">
    <link rel="stylesheet" type="text/css" href="assets/css/gradient.css">
    <!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES -->

    <style>
    html,
    body {
        /* padding: 0px;
        margin: 0px; */
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }

    #content {
        height: 100%;
        width: 100%;
        min-height: 100%;
        padding: 0px;
        margin: 0px;
    }

    .idx-label {
        font-size: 25px;
    }

    .label-berubah {
        font-size: 25px;
    }

    .icon-hujan {
        font-size: 120px;
    }

    .widget {
        margin-right: 2px;
        margin-top: 2px;
    }

    .inner-spacing {
        padding: 0px;

    }
    </style>

</head>

<body class="alt-menu sidebar-noneoverflow">

    <input type="hidden" value="<?=$id_unit_usaha?>" id="id_unit_usaha">
    <!-- BEGIN LOADER -->
    <div id="load_screen">
        <div class="loader">
            <div class="loader-content">
                <div class="spinner-grow align-self-center"></div>
            </div>
        </div>
    </div>
    <!--  END LOADER -->

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container container-fluid" id="container" style="height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;">

        <div class="overlay"></div>
        <div class="search-overlay"></div>

        <!--  BEGIN CONTENT PART  -->
        <div id="content" class="main-content container-fluid" style="height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;">
            <div class="layout-px-spacing">

                <div class="page-header">
                    <div class="page-title">
                        <h4>Indikator Produksi - PT. Perkebunan Nusantara VI</h4>
                        <h6 class="font-italic">UNIT USAHA : DURIAN LUNCUK (<?=date('M Y')?>)</h6>
                    </div>
                </div>

                <div class="row layout-top-spacing">
                    <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/grafik_pie_ketuntasan_ancak.php";?>
                    </div>

                    <div class="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div class="row widget-statistic layout-spacing" style="margin-left: 2px;margin-right: 1px;">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                <?php include "widget/panel_rkap.php";?>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                <?php include "widget/panel_realisasi.php";?>
                            </div>
                            <!-- <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <?php //include "widget/panel_restan.php";?>
                            </div> -->
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                <?php include "widget/panel_curah_hujan.php";?>
                            </div>
                            <div class="col-xl-12 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
                                style="margin-top: 2px;">
                                <?php include "widget/grafik_line_curah_hujan.php";?>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_bar_tbs.php';?>
                    </div>


                    <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_kolom_tenaga_panen.php';?>
                    </div>
                    <div class="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_line_perbandingan.php';?>
                    </div>
                    <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_kolom_restan.php';?>
                    </div>
                </div>

                <div class="row top-spacing">
                    <!-- <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/panel_luas_pemeliharaan.php";?>
                    </div> -->
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/grafik_line_luas_pemeliharaan.php";?>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/grafik_donut_pemeliharaan_grup.php";?>
                    </div>

                </div>

                <div class="row top-spacing">
                    <!-- <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/panel_herbisida.php";?>
                    </div> -->
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/grafik_line_bahan_herbisida.php";?>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/grafik_donut_bahan_pupuk_grup.php";?>
                    </div>
                </div>

                <div class="row top-spacing">
                    <!-- <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/panel_pemupukan.php";?>
                    </div> -->
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/grafik_line_tenaga_pemeliharaan.php";?>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_pemeliharaan/grafik_donut_tenaga_pemeliharaan_grup.php";?>

                    </div>
                </div>

                <div class="footer-wrapper">
                    <div class="footer-section f-section-1">
                        <h4><?php echo date("d M Y"); ?>&nbsp;&nbsp;<?php //echo date("d M Y", strtotime("2020-03-15"));?>
                        </h4>
                    </div>
                    <div class="footer-section f-section-2">
                        <h4 id="last-update">Last Updated : <?php echo date("d M Y H:i:s"); ?></h4>
                    </div>
                </div>

            </div>
        </div>
        <!--  END CONTENT PART  -->

    </div>
    <!-- END MAIN CONTAINER -->

    <!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
    <script src="assets/js/libs/jquery-3.1.1.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script>
    $(document).ready(function() {
        App.init();
    });
    </script>
    <script src="assets/js/custom.js"></script>
    <!-- END GLOBAL MANDATORY SCRIPTS -->

    <!-- PRODUKSI -->
    <script src="plugins/apex/apexcharts.min.js"></script>
    <script src="widget/js/grafik_bar_tbs.js"></script>
    <script src="widget/js/grafik_line_perbandingan.js"></script>
    <script src="widget/js/grafik_line_perbandingan_sd.js"></script>
    <script src="widget/js/grafik_pie_ketuntasan_ancak.js"></script>
    <script src="widget/js/grafik_kolom_tenaga_panen.js"></script>
    <script src="widget/js/grafik_line_curah_hujan.js"></script>
    <script src="widget/js/grafik_kolom_restan.js"></script>

    <!-- PEMELIHARAAN -->

    <script src="widget/js/grafik_line_luas_pemeliharaan.js"></script>
    <script src="widget/js/grafik_line_bahan_herbisida.js"></script>
    <script src="widget/js/grafik_line_tenaga_pemeliharaan.js"></script>

    <script src="widget/js/grafik_pie_luas_pemeliharaan.js"></script>
    <script src="widget/js/grafik_donut_pemeliharaan_grup.js"></script>
    <script src="widget/js/grafik_donut_tenaga_pemeliharaan_grup.js"></script>
    <script src="widget/js/grafik_donut_bahan_grup.js"></script>


    <!-- <script src="assets/js/dashboard/dash_2.js"></script> -->
    <!-- ajax load -->
    <script src="ajax/ajax_all_dasbor_pemeliharaan.js"></script>
    <script src="ajax/ajax_all_dasbor_unit_usaha.js"></script>
    <script src="ajax/ajax_poll_dasbor_unit_usaha.js"></script>
    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->

</body>

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

</html>