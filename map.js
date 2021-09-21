var map = new L.map('map').setView([0, 0], 1);
var mapSW = [0, 2048], // set bounds in variables
    mapNE = [2048, 0];

L.tileLayer('CFD-tiles/{z}/{x}/{y}.png', {
    center: [0, 0],
    minZoom: 2,
    maxZoom: 3,
    noWrap: true,
    cursor: true,
    crs: L.CRS.Simple, // converts to points
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom())
));

// Markers and Popups
var marker = L.marker([0, 0], {
    draggable: true,
}).addTo(map);
marker.on('click', function(ev) {
    alert(ev.latlng); // ev is an event object (MouseEvent in this case)
});  

var marker1 = L.marker([1, 100]).addTo(map);
marker1.bindPopup('<h6 class="text-success">My Favorite Spot</h6>').openPopup();

var marker2 = L.marker(map.unproject([900, 1500],map.getMaxZoom())).addTo(map);
marker2.bindPopup('<h6 class="text-info">Horses & Shit</h6>').openPopup();

var marker3 = L.marker(map.unproject([1650, 1650], map.getMaxZoom())).addTo(map).bindPopup('<h6>Our Heroes</h6>').openPopup();



