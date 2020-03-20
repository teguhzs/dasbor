<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes">
    <title>CORK Admin - Multipurpose Bootstrap Dashboard Template </title>
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
    <!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES -->

    <style>
    html,
    body {
        /* padding: 0px;
        margin: 0px; */
        height: 100%;
    }

    #content {
        height: 100%;
        min-height: 100%;
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
    </style>

</head>

<body class="alt-menu sidebar-noneoverflow">
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
    <div class="main-container container-fluid" id="container">

        <div class="overlay"></div>
        <div class="search-overlay"></div>

        <!--  BEGIN CONTENT PART  -->
        <div id="content" class="main-content container-fluid">
            <div class="layout-px-spacing">

                <div class="page-header">
                    <div class="page-title">
                        <h4>Indikator Harian PT. Perkebunan Nusantara VI</h4>
                        <h6 class="font-italic">UNIT USAHA : DURIAN LUNCUK</h6>
                    </div>
                    <!-- <div class="dropdown filter custom-dropdown-icon">
                        <a class="dropdown-toggle btn" href="#" role="button" id="filterDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="text"><span>Show</span> : Daily Analytics</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="filterDropdown">
                            <a class="dropdown-item" data-value="<span>Show</span> : Daily Analytics" href="javascript:void(0);">Daily Analytics</a>
                            <a class="dropdown-item" data-value="<span>Show</span> : Weekly Analytics" href="javascript:void(0);">Weekly Analytics</a>
                            <a class="dropdown-item" data-value="<span>Show</span> : Monthly Analytics" href="javascript:void(0);">Monthly Analytics</a>
                            <a class="dropdown-item" data-value="Download All" href="javascript:void(0);">Download All</a>
                            <a class="dropdown-item" data-value="Share Statistics" href="javascript:void(0);">Share Statistics</a>
                        </div>
                    </div> -->
                </div>

                <div class="row layout-top-spacing">

                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_bar_tbs.php';?>
                    </div>

                    <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div class="row widget-statistic">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <?php include "widget/panel_produksi.php";?>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <?php include "widget/panel_tbs.php";?>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <?php include "widget/panel_restan.php";?>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 mt-3">
                                <?php include "widget/panel_curah_hujan.php";?>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-3">
                                <?php include "widget/panel_rbt.php";?>
                            </div>

                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_bar_produksi.php';?>
                    </div>
                    <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <?php include 'widget/grafik_gelombang_produksi.php'; ?>
                    </div>


                </div>

                <div class="footer-wrapper">
                    <div class="footer-section f-section-1">
                        <h4><?php echo date("d M Y");?>&nbsp;&nbsp;<?php //echo date("d M Y", strtotime("2020-03-15"));?>
                        </h4>
                    </div>
                    <div class="footer-section f-section-2">
                        <h4>Last Updated : <?php echo date("d M Y H:i:s");?></h4>
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

    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->
    <script src="plugins/apex/apexcharts.min.js"></script>
    <script src="widget/js/grafik_bar_tbs.js"></script>
    <script src="widget/js/grafik_bar_produksi.js"></script>
    <script src="widget/js/grafik_gelombang_produksi.js"></script>
    <!-- <script src="assets/js/dashboard/dash_2.js"></script> -->
    <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->

</body>

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

</html>