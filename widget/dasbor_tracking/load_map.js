var map = [];

function myMap() {
  var mapProp = {
    center: {
      lat: -1.746125,
      lng: 102.963924,
    },
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    // mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControl: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    zoomControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    scaleControl: false,
    streetViewControl: false,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    fullscreenControl: false,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
  };

  map[1] = new google.maps.Map(document.getElementById("map"), mapProp);
  map[2] = new google.maps.Map(document.getElementById("map1"), mapProp);
  map[3] = new google.maps.Map(document.getElementById("map2"), mapProp);
  map[4] = new google.maps.Map(document.getElementById("map3"), mapProp);

  loadKmz(map[1]);
  loadMarker(map[1]);
  loadKmz(map[2]);
  loadMarker(map[2]);
  loadKmz(map[3]);
  loadMarker(map[3]);
  loadKmz(map[4]);
  loadMarker(map[4]);
}

function reloadMap1() {
  var select = document.getElementById("sel-unit-usaha-1");
  var id_unit_usaha = select.options[select.selectedIndex].value;
  loadKmz(map[1], id_unit_usaha);
  loadMarker(map[1]);
}

function reloadMap2() {
  var select = document.getElementById("sel-unit-usaha-2");
  var id_unit_usaha = select.options[select.selectedIndex].value;
  loadKmz(map[2], id_unit_usaha);
  loadMarker(map[2]);
}

function reloadMap3() {
  var select = document.getElementById("sel-unit-usaha-3");
  var id_unit_usaha = select.options[select.selectedIndex].value;
  loadKmz(map[3], id_unit_usaha);
  loadMarker(map[4]);
}

function reloadMap4() {
  var select = document.getElementById("sel-unit-usaha-4");
  var id_unit_usaha = select.options[select.selectedIndex].value;
  loadKmz(map[4], id_unit_usaha);
  loadMarker(map[4]);
}

function loadKmz(map, id_unit_usaha) {
  $.ajax({
    type: "POST",
    url: "api/file_unit_usaha.php",
    data: { id_unit_usaha: id_unit_usaha },
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      var myParser = new geoXML3.parser({
        map: map,
      });
      myParser.parse("../admin/upload/" + data["file"][0]);
    },
  });
}

function loadMarker(map) {
  // body...
  var currentInfoWindow = null;

  var markers = [];

  $.ajax({
    url: "ajax_realtime.php",
    type: "POST",
    dataType: "json",
    async: false,
    success: function (proses) {
      for (var i = 0; i < proses.length; i++) {
        // console.log(proses[i]['lat']);
        var icon = {
          url: "mygeodata/mark_3.png", // url
          scaledSize: new google.maps.Size(40, 40), // scaled size
          labelOrigin: new google.maps.Point(20, 50),
        };

        var point = new google.maps.LatLng(
          parseFloat(proses[i]["lat"]),
          parseFloat(proses[i]["lng"])
        );

        var content =
          "<b><a target='blank' href='../data_absensi_tracking/index.php?input=detail&pg=" +
          proses[i]["id_pegawai"] +
          "'><i class='fa fa-user'> </i> " +
          proses[i]["nama"] +
          "</b>" +
          "<br>" +
          "<i class='fa fa-calendar'> </i> " +
          proses[i]["waktu"] +
          "</b>" +
          " </a><br><br>" +
          " lat : " +
          proses[i]["lat"] +
          "</b>" +
          "<br>" +
          " lng : " +
          proses[i]["lng"] +
          "</b>" +
          "<br><hr>" +
          "<button class='btn btn-sm btn-primary' data-toggle='modal' data-target='#exampleModal'> Detail Track</button>";

        var infowindow = new google.maps.InfoWindow();

        var marker = new google.maps.Marker({
          position: point,
          map: map,
          animation: google.maps.Animation.DROP,
          label: {
            text: proses[i]["nama"],
            // text: resultText,
            fontSize: "9px",
            color: "#f9f9f9",
            fontWeight: "normal",
            fontFamily:
              "Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif",
          },
          icon: icon,
          title: proses[i]["nama"],
        });
        markers.push(marker);
        // marker.setPosition(point);
        //marker.setMap(map);

        google.maps.event.addListener(
          marker,
          "click",
          (function (marker, content, infowindow) {
            return function () {
              if (currentInfoWindow != null) {
                currentInfoWindow.close();
              }

              infowindow.setContent(content);
              infowindow.open(map, this);
              currentInfoWindow = infowindow;
            };
          })(marker, content, infowindow)
        );
      }
    },
  });
  // Path for cluster icons to be appended (1.png, 2.png, etc.)
  // const imagePath = "markerclusterer/images/m";

  // Enable marker clustering for this map and these markers
  //   const markerClusterer = new MarkerClusterer(map, markers, {
  //     imagePath: imagePath,
  //     gridSize: 30,
  //     maxZoom: 18,
  //   });
}
