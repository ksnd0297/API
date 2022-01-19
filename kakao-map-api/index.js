var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 7
};

var map = new kakao.maps.Map(container, options);

var moveLatLon = new kakao.maps.LatLng(33.50580,126.574942);

map.panTo(moveLatLon);