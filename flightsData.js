
/* ***** Start CustomMarker ***** */
function CustomMarker(latlng, map, marker_id, hovercard, hovercard_url, url) {
  this.latlng_ = latlng;
  this.marker_id = marker_id;
  this.hovercard_content = hovercard;
  this.hovercard_url = hovercard_url;
  this.url = url;
  this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
  var me = this;
  var div = this.div_;
  if (!div) {
	div = this.div_ = document.createElement('DIV'); 
		div.id=me.marker_id;
	var panes = this.getPanes();
	panes.overlayImage.appendChild(div);
  }
  var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
  if (point) {
	  div.className = 'map-marker show-hovercard';
	  div.style.left = (point.x-6) + 'px';
	  div.style.top = (point.y-23) + 'px';
	  $(div).attr("data-hovercard-content", me.hovercard_content);
	  $(div).attr("data-hovercard-url", me.hovercard_url);
	  $(div).attr("data-url", me.url);
  }
};

CustomMarker.prototype.remove = function() {
  if (this.div_) {
	this.div_.parentNode.removeChild(this.div_);
	this.div_ = null;
  }
};

addInfoWindow = function (map, marker, name) {
	var infowindow = new google.maps.InfoWindow({
         content: name
    });
	marker.addListener('click', function() {
          infowindow.open(map, marker);
	});
};

addNewMarker = function (map, position, name) {
	var  marker = new google.maps.Marker({
            position: pos,
            icon: "images/airport.png",
            map: map
    });
    addInfoWindow(map, marker, name);
};


CustomMarker.prototype.getPosition = function() {
 return this.latlng_;
};
/* ***** End CustomMarker ***** */

function initialize() {
  $('#target-div').load('https://my.flightradar24.com/micika #main');
  var markers = [];
  var bounds = new google.maps.LatLngBounds();
  var myOptions = {
	center: new google.maps.LatLng(20, 20), 
	zoom: 2,
	mapTypeId: google.maps.MapTypeId.TERRAIN,
	panControl: false,
	streetViewControl: false,
	zoomControlOptions: {
		style: google.maps.ZoomControlStyle.SMALL
	}
  };
  var map = new google.maps.Map(document.getElementById("flightMap"), myOptions);
  	pos = new google.maps.LatLng(63.985000, -22.605556);
	addNewMarker(map, pos, "Reykjavik / Keflavik");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(61.415278, 23.587778);
  	addNewMarker(map, pos, "Tampere / Pirkkala");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(60.3172, 24.9633);
  	addNewMarker(map, pos, "Helsinki / Vantaa");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(60.1939, 11.1004);
  	addNewMarker(map, pos, "Oslo / Gardermoen");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(59.800000, 30.265000);
  	addNewMarker(map, pos, "St Petersburg / Pulkovo");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(59.64982, 17.930365);
  	addNewMarker(map, pos, "Stockholm / Arlanda");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(55.971667, 37.415000);
  	addNewMarker(map, pos, "Moscow / Sheremetyevo");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(55.600000, 37.273333);
  	addNewMarker(map, pos, "Moscow / Vnukovo");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(53.630389, 9.988228);
  	addNewMarker(map, pos, "Hamburg / Fuhlsbuttel");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(52.378542, 13.520619);
  	addNewMarker(map, pos, "Berlin / Schonefeld");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(52.308613, 4.763889);
  	addNewMarker(map, pos, "Amsterdam / Schiphol");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(51.450000, 5.374444);
  	addNewMarker(map, pos, "Eindhoven / Eindhoven");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(50.901389, 4.484444);
  	addNewMarker(map, pos, "Brussels / Brussels");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(50.460000, 4.452778);
  	addNewMarker(map, pos, "Charleroi / Charleroi");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(50.401944, 30.451111);
  	addNewMarker(map, pos, "Kiev / Zhulyany");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(50.344722, 30.893333);
  	addNewMarker(map, pos, "Kiev / Borispol");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(49.623333, 6.204444);
  	addNewMarker(map, pos, "Luxembourg / Luxembourg");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(49.012779, 2.550000);
  	addNewMarker(map, pos, "Paris / Charles de Gaulle");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(48.689878, 9.221964);
  	addNewMarker(map, pos, "Stuttgart / Stuttgart");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(48.353783, 11.786086);
  	addNewMarker(map, pos, "Munich / Franz Josef Strauss");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(48.110278, 16.569722);
  	addNewMarker(map, pos, "Vienna / Schwechat");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(47.439328, 19.261808);
  	addNewMarker(map, pos, "Budapest / Franz Liszt International");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(45.809833, 21.337872);
  	addNewMarker(map, pos, "Timisoara / Giarmata");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(45.630000, 8.723056);
  	addNewMarker(map, pos, "Milan / Malpensa");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(44.819383, 20.307067);
  	addNewMarker(map, pos, "Belgrade / Nikola Tesla Beograd");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(43.658411, 7.215872);
  	addNewMarker(map, pos, "Nice / Nice Cote D'Azur");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(42.17639, 42.48250);
  	addNewMarker(map, pos, "Kutaisi / David the Builder");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(41.674065 , 44.958958);
  	addNewMarker(map, pos, "Tbilisi / Novo Alexeyevka");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(40.976167, 28.814094);
  	addNewMarker(map, pos, "Istanbul / Ataturk");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(40.904675, 29.309189);
  	addNewMarker(map, pos, "Istanbul / Sabiha Gokcen");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(40.472228, -3.560944);
  	addNewMarker(map, pos, "Madrid / Barajas");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(40.467500, 50.046667);
  	addNewMarker(map, pos, "Baku / Heydar Aliyev");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(39.489311, -0.481622);
  	addNewMarker(map, pos, "Valencia / Valencia");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(38.774167, -9.134167);
  	addNewMarker(map, pos, "Lisbon / Portela");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(35.764722, 140.386389);
  	addNewMarker(map, pos, "Tokyo / Narita");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(32.010556, 34.877222);
  	addNewMarker(map, pos, "Tel Aviv / Ben Gurion");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(25.252778, 55.364444);
  	addNewMarker(map, pos, "Dubai / Dubai International");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(22.308889, 113.914722);
  	addNewMarker(map, pos, "Hong Kong / Hong Kong International");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(16.833611, -25.056944);
  	addNewMarker(map, pos, "Sao Pedro (Mindelo) / Sao Vicente");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(14.945321, -23.486567);
  	addNewMarker(map, pos, "Praia / Francisco Mendes");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(13.9125, 100.606667);
  	addNewMarker(map, pos, "Bangkok / Don Mueang International");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(13.685833, 100.748889);
  	addNewMarker(map, pos, "Bangkok / Suvarnabhumi");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(4.191667, 73.529167);
	addNewMarker(map, pos, "Male / Ibrahim Nasir");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(2.743333, 101.698056);
  	addNewMarker(map, pos, "Kuala Lumpur / Kuala Lumpur International");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(1.359211, 103.989333);
  	addNewMarker(map, pos, "Singapore / Changi");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-3.776111, -38.532500);
  	addNewMarker(map, pos, "Fortaleza / Fortaleza");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-8.126389, -34.922778);
  	addNewMarker(map, pos, "Recife / Recife");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-15.869167, -47.920833);
  	addNewMarker(map, pos, "Brasilia / Brasilia");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-22.810000, -43.250556);
  	addNewMarker(map, pos, "Rio de Janeiro / Galeao");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-22.910278, -43.162778);
  	addNewMarker(map, pos, "Rio de Janeiro / Santos Dumont");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-23.435556, -46.473056);
  	addNewMarker(map, pos, "Sao Paulo / Guarulhos");
	bounds.extend(pos);
  	pos = new google.maps.LatLng(-34.81273, -58.539833);
  	addNewMarker(map, pos, "Buenos Aires / Ministro Pistarini");
	bounds.extend(pos);
    pos = new google.maps.LatLng(22.989153, -82.409086);
    addNewMarker(map, pos, "Havana / Jose Marti");
    bounds.extend(pos);
    pos = new google.maps.LatLng(18.429664, -69.668925);
    addNewMarker(map, pos, "Santo Domingo / Las Americas");
    bounds.extend(pos);
    pos = new google.maps.LatLng(-8.748169, 115.167172);
    addNewMarker(map, pos, "Bali / Ngurah Rai");
    bounds.extend(pos);
    pos = new google.maps.LatLng(-6.125567, 106.655897);
    addNewMarker(map, pos, "Jakarta / Soekarno Hatta");
    bounds.extend(pos);
    pos = new google.maps.LatLng(40.080111, 116.584556);
    addNewMarker(map, pos, "Beijing / Capital");
    bounds.extend(pos);
    pos = new google.maps.LatLng(43.352072, 77.040508);
    addNewMarker(map, pos, "Almaty / Almaty");
    bounds.extend(pos);
    pos = new google.maps.LatLng(50.865917, 7.142744);
    addNewMarker(map, pos, "Cologne / Koln Bonn");
    bounds.extend(pos);

    pos = new google.maps.LatLng(47.464722, 8.549167);
    addNewMarker(map, pos, "Zurich / Kloten");
    bounds.extend(pos);

    pos = new google.maps.LatLng(41.248055, -8.681389);
    addNewMarker(map, pos, "Porto / Porto");
    bounds.extend(pos);

    pos = new google.maps.LatLng(27.931886, -15.386586);
    addNewMarker(map, pos, "Las Palmas / Gran Canaria");
    bounds.extend(pos);

    pos = new google.maps.LatLng(52.559686, 13.287711);
    addNewMarker(map, pos, "Berlin / Tegel");
    bounds.extend(pos);




    	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(39.489311, -0.481622),new google.maps.LatLng(45.809833, 21.337872)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(52.378542, 13.520619),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(52.308613, 4.763889),new google.maps.LatLng(52.378542, 13.520619)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(44.819383, 20.307067),new google.maps.LatLng(51.450000, 5.374444)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(55.600000, 37.273333),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(49.012779, 2.550000),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(40.904675, 29.309189),new google.maps.LatLng(44.819383, 20.307067)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(45.630000, 8.723056),new google.maps.LatLng(44.819383, 20.307067)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(53.630389, 9.988228),new google.maps.LatLng(45.630000, 8.723056)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(48.689878, 9.221964),new google.maps.LatLng(53.630389, 9.988228)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(38.774167, -9.134167),new google.maps.LatLng(48.689878, 9.221964)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(45.630000, 8.723056),new google.maps.LatLng(38.774167, -9.134167)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(43.658411, 7.215872),new google.maps.LatLng(48.110278, 16.569722)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(61.415278, 23.587778),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(60.1939, 11.1004),new google.maps.LatLng(60.3172, 24.9633)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(63.985000, -22.605556),new google.maps.LatLng(60.1939, 11.1004)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(59.64982, 17.930365),new google.maps.LatLng(63.985000, -22.605556)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(44.819383, 20.307067),new google.maps.LatLng(59.64982, 17.930365)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(25.252778, 55.364444),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(13.685833, 100.748889),new google.maps.LatLng(25.252778, 55.364444)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(35.764722, 140.386389),new google.maps.LatLng(13.9125, 100.606667)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(25.252778, 55.364444),new google.maps.LatLng(35.764722, 140.386389)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(42.17639, 42.48250),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(40.976167, 28.814094),new google.maps.LatLng(41.674065 , 44.958958)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(32.010556, 34.877222),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(40.472228, -3.560944),new google.maps.LatLng(38.774167, -9.134167)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-22.810000, -43.250556),new google.maps.LatLng(-8.126389, -34.922778)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-34.81273, -58.539833),new google.maps.LatLng(-22.810000, -43.250556)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-23.435556, -46.473056),new google.maps.LatLng(-34.81273, -58.539833)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-22.910278, -43.162778),new google.maps.LatLng(-23.435556, -46.473056)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-15.869167, -47.920833),new google.maps.LatLng(-22.810000, -43.250556)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-3.776111, -38.532500),new google.maps.LatLng(-15.869167, -47.920833)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(47.439328, 19.261808),new google.maps.LatLng(40.472228, -3.560944)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(14.945321, -23.486567),new google.maps.LatLng(16.833611, -25.056944)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-8.126389, -34.922778),new google.maps.LatLng(14.945321, -23.486567)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(14.945321, -23.486567),new google.maps.LatLng(-3.776111, -38.532500)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(38.774167, -9.134167),new google.maps.LatLng(14.945321, -23.486567)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(50.460000, 4.452778),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(38.774167, -9.134167),new google.maps.LatLng(50.901389, 4.484444)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(55.971667, 37.415000),new google.maps.LatLng(44.819383, 20.307067)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(59.800000, 30.265000),new google.maps.LatLng(55.971667, 37.415000)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(4.191667, 73.529167),new google.maps.LatLng(25.252778, 55.364444)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(25.252778, 55.364444),new google.maps.LatLng(22.308889, 113.914722)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(1.359211, 103.989333),new google.maps.LatLng(4.191667, 73.529167)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(2.743333, 101.698056),new google.maps.LatLng(1.359211, 103.989333)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(22.308889, 113.914722),new google.maps.LatLng(2.743333, 101.698056)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(40.467500, 50.046667),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(47.439328, 19.261808),new google.maps.LatLng(50.401944, 30.451111)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(50.344722, 30.893333),new google.maps.LatLng(40.467500, 50.046667)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(48.353783, 11.786086),new google.maps.LatLng(47.439328, 19.261808)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
  	  var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(49.623333, 6.204444),new google.maps.LatLng(48.353783, 11.786086)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
	  flightPath.setMap(map);
		var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(43.352072, 77.040508),new google.maps.LatLng(40.976922, 28.814606)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
		flightPath.setMap(map);
    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(52.308613, 4.763889),new google.maps.LatLng(47.464722, 8.549167)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);
    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(50.901389, 4.484444),new google.maps.LatLng(18.429664, -69.668925)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);
    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(18.429664, -69.668925),new google.maps.LatLng(22.989153,-82.409086)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);
    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(27.931886, -15.386586),new google.maps.LatLng(52.308613, 4.763889)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);
    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(27.931886, -15.386586),new google.maps.LatLng(38.781311, -9.135919)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);
    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(41.248055, -8.681389),new google.maps.LatLng(52.308613, 4.763889)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);

    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(22.989153, -82.409086),new google.maps.LatLng(50.865917, 7.142744)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);

    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(48.353783, 11.786086),new google.maps.LatLng(44.818444, 20.309139)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);

    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(48.353783, 11.786086),new google.maps.LatLng(50.865917, 7.142744)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);

    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(52.559686, 13.287711),new google.maps.LatLng(44.818444, 20.309139)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);

    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(52.308613, 4.763889),new google.maps.LatLng(47.436933, 19.255592)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);


    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(43.352072, 77.0405089),new google.maps.LatLng(40.080111, 116.584556)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);


    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(2.745578, 101.709917),new google.maps.LatLng(40.080111, 116.584556)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);

    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(2.745578, 101.709917),new google.maps.LatLng( -8.748169, 115.167172)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);


    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-6.125567, 106.655897),new google.maps.LatLng( -8.748169, 115.167172)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);


    var flightPath = new google.maps.Polyline({path: [new google.maps.LatLng(-6.125567, 106.655897),new google.maps.LatLng( 40.976922 , 28.814606)], strokeColor: "#f89800", strokeOpacity: 0.7, strokeWeight: 2, geodesic: true });
    flightPath.setMap(map);


    map.fitBounds(bounds);
    google.maps.event.addListener(map, 'zoom_changed', function() {
	  if(map.getZoom()<2) {
		map.setZoom(2);	
		}
	});
}
$(document).ready(function() {
	setTimeout(function () {
		initialize();
	}, 1000);
});
