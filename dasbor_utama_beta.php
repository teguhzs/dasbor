<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes">
    <title>PT. Perkebunan Nusantara VI </title>
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
    <link rel="stylesheet" type="text/css" href="assets/css/highchart.css">
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

    .widget-one {
        height: 236px;
        margin: 2px;
        margin-left: 20px;
    }
    </style>

</head>

<body class="alt-menu sidebar-noneoverflow">
    <script src="plugins/highchart/highcharts.js"></script>
    <script src="plugins/highchart/highcharts-more.js"></script>
    <script src="plugins/highchart/modules/exporting.js"></script>
    <script src="plugins/highchart/modules/export-data.js"></script>
    <script src="plugins/highchart/modules/accessibility.js"></script>
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
                        <h4>Smart Global Production & Comodity Information System - PT. Perkebunan Nusantara VI</h4>
                        <h6 class="font-italic">Indeks Produksi Global <?php echo date("d M Y"); ?></h6>
                    </div>
                </div>

                <div class="row layout-top-spacing">

                    <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <figure class="highcharts-figure">
                            <div id="gaugeOilPalm" class="gauge"></div>
                        </figure>
                    </div>
                    <div class="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <figure class="highcharts-figure">
                            <div id="gaugeTea" class="gauge" style="margin-left: -50px;"></div>
                        </figure>
                    </div>
                    <div class="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <figure class="highcharts-figure">
                            <div id="gaugeCoffee" class="gauge" style="margin-left: -60px;"></div>
                        </figure>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include "widget/dasbor_keseluruhan/grafik_line_capaian_rkap.php";?>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div class="row widget-statistic" style="padding-left: 40px;">
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeRimsa" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeOph" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeDrl" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeRimdu" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeBunut" class="gauge" style="height:200px; padding: 10px;">
                                    </div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">

                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeSsl" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeBhr" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugePlk" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeBkc" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeTlb" class="gauge" style="height:200px; padding: 10px;    "></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">

                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeDar" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeAro" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeBk" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeMai" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <figure class="highcharts-figure">
                                    <div id="gaugeAln" class="gauge" style="height:200px; padding: 10px;"></div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing mt-1">
                        <div class="row widget-statistic mr-1">
                            <div class="col-xl-12 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing">
                                <?php include "widget/dasbor_keseluruhan/grafik_donut_komoditi.php";?>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-md-4 col-sm-4 col-12 layout-spacing mt-1">
                                <?php include "widget/dasbor_keseluruhan/grafik_kolom_produksi_unit_usaha.php";?>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="footer-wrapper">
                    <div class="footer-section f-section-1">
                        <h4><?php echo date("d M Y"); ?>&nbsp;&nbsp;<?php //echo date("d M Y", strtotime("2020-03-15"));?>
                        </h4>
                    </div>
                    <div class="footer-section f-section-2">
                        <h4>Last Updated : <?php echo date("d M Y H:i:s"); ?></h4>
                    </div>
                </div>

            </div>
        </div>
        <!--  END CONTENT PART  -->

    </div>
    <!-- END MAIN CONTAINER -->
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
    var tanggal = new Date();
    var tahun = tanggal.getFullYear();
    </script>
    <script src="assets/js/custom.js"></script>
    <!-- END GLOBAL MANDATORY SCRIPTS -->

    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->
    <script src="plugins/apex/apexcharts.min.js"></script>

    <script src="widget/js/grafik_line_capaian_rkap.js"></script>

    <script src="widget/js/grafik_bar_inspeksi_panen_all.js"></script>

    <script src="widget/js/grafik_kolom_produksi_unit_usaha.js"></script>

    <script src="widget/js/grafik_donut_komoditi.js"></script>

    <script src="widget/js/panel_gauge_oil_palm.js"></script>
    <script src="widget/js/panel_gauge_tea.js"></script>
    <script src="widget/js/panel_gauge_coffee.js"></script>
    <script src="widget/js/panel_gauge_drl.js"></script>
    <script src="widget/js/panel_gauge_oph.js"></script>
    <script src="widget/js/panel_gauge_rimsa.js"></script>
    <script src="widget/js/panel_gauge_rimdu.js"></script>
    <script src="widget/js/panel_gauge_bunut.js"></script>
    <script src="widget/js/panel_gauge_ssl.js"></script>
    <script src="widget/js/panel_gauge_bhr.js"></script>
    <script src="widget/js/panel_gauge_plk.js"></script>
    <script src="widget/js/panel_gauge_bkc.js"></script>
    <script src="widget/js/panel_gauge_tlb.js"></script>
    <script src="widget/js/panel_gauge_dar.js"></script>
    <script src="widget/js/panel_gauge_aro.js"></script>
    <script src="widget/js/panel_gauge_bk.js"></script>
    <script src="widget/js/panel_gauge_mai.js"></script>
    <script src="widget/js/panel_gauge_aln.js"></script>

    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->
    <script src="ajax/ajax_all_dasbor_utama.js"></script>
    <script src="ajax/ajax_poll_dasbor_utama.js"></script>

</body>

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

</html>