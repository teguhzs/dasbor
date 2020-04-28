<?php
include '../admin/include/koneksi/koneksi.php';
?>

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

    .layout-px-spacing {
        padding: 0px !important;
    }

    #map {
        width: 100vh;
        height: 50vh;
    }

    #map1 {
        width: 100vh;
        height: 50vh;
    }

    #map2 {
        width: 100vh;
        height: 50vh;
    }

    #map3 {
        width: 100vh;
        height: 50vh;
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

                <div class="row">
                    <div class="col-xl-6">
                        <div id="map"></div>
                    </div>
                    <div class="col-xl-6">
                        <div id="map1"></div>
                    </div>
                    <div class="col-xl-6">
                        <div id="map2"></div>
                    </div>
                    <div class="col-xl-6">
                        <div id="map3"></div>
                    </div>
                    <div class="col-xl-6">

                    </div>

                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <button type="button" name="" id="atur-map" class="btn btn-primary" btn-lg btn-block"> <i
                                class="fa fa-cogs" aria-hidden="true"></i> Pengaturan Map</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <!-- Modal -->
                        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Pengaturan Map</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class='modal-body'>
                                        <div class="form-horizontal">
                                            <div class="form-group">
                                                <label for="">Map 1 : </label>
                                                <select class="form-control form-control-sm" name=""
                                                    id="sel-unit-usaha-1">
                                                    <option>Pilih Unit Usaha</option>
                                                    <?php
$q_unit_usaha = mysql_query("SELECT * FROM data_unit_usaha");
while ($row = mysql_fetch_array($q_unit_usaha)) {
    ?>
                                                    <option value="<?php echo $row['id_unit_usaha']; ?>">
                                                        <?php echo $row['nama_unit_usaha']; ?></option>
                                                    <?php
}
?>
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Map 2 : </label>
                                                <select class="form-control form-control-sm" name=""
                                                    id="sel-unit-usaha-2">
                                                    <option>Pilih Unit Usaha</option>
                                                    <?php
$q_unit_usaha = mysql_query("SELECT * FROM data_unit_usaha");
while ($row = mysql_fetch_array($q_unit_usaha)) {
    ?>
                                                    <option value="<?php echo $row['id_unit_usaha']; ?>">
                                                        <?php echo $row['nama_unit_usaha']; ?></option>
                                                    <?php
}
?>
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Map 3 : </label>
                                                <select class="form-control form-control-sm" name=""
                                                    id="sel-unit-usaha-3">
                                                    <option>Pilih Unit Usaha</option>
                                                    <?php
$q_unit_usaha = mysql_query("SELECT * FROM data_unit_usaha");
while ($row = mysql_fetch_array($q_unit_usaha)) {
    ?>
                                                    <option value="<?php echo $row['id_unit_usaha']; ?>">
                                                        <?php echo $row['nama_unit_usaha']; ?></option>
                                                    <?php
}
?>
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Map 4 : </label>
                                                <select class="form-control form-control-sm" name=""
                                                    id="sel-unit-usaha-4">
                                                    <option>Pilih Unit Usaha</option>
                                                    <?php
$q_unit_usaha = mysql_query("SELECT * FROM data_unit_usaha");
while ($row = mysql_fetch_array($q_unit_usaha)) {
    ?>
                                                    <option value="<?php echo $row['id_unit_usaha']; ?>">
                                                        <?php echo $row['nama_unit_usaha']; ?></option>
                                                    <?php
}
?>
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="footer-wrapper">

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
    <script src="plugins/geoxml3-master/kmz/geoxml3.js"></script>
    <script src="plugins/geoxml3-master/kmz/ZipFile.complete.js"></script>
    <script src="plugins/geoxml3-master/kmz/geoxml3_gxParse_kmz.js"></script>
    <script src="widget/dasbor_tracking/load_map.js"></script>

    <script>
    document.getElementById("sel-unit-usaha-1").onchange = function() {
        reloadMap1();
    };

    document.getElementById("sel-unit-usaha-2").onchange = function() {
        reloadMap2();
    };

    document.getElementById("sel-unit-usaha-3").onchange = function() {
        reloadMap3();
    };

    document.getElementById("sel-unit-usaha-4").onchange = function() {
        reloadMap4();
    };

    $("#atur-map").click(function(e) {
        e.preventDefault();
        $('#modelId').modal('show');
    });
    $(document).keydown(function(evt) {
        if (evt.keyCode == 113) {
            evt.preventDefault();
            $('#modelId').modal('show');
        }
    });
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqhJ6sg9DMHKhLvWrzUs96NDMemaDXriw&callback=myMap&libraries=geometry">
    </script>


</body>

<!-- Mirrored from designreset.com/cork/ltr/demo8/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 18 Mar 2020 09:45:14 GMT -->

</html>