var map = L.map('map').setView([0, 0], 1);

// L.imageOverlay('2021-CFD-MAP.png').addTo(map);

L.tileLayer('CFD-tiles/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 3,
    continuousWorld: false,
    noWrap: true,
}).addTo(map);

var marker = L.marker([1, 100]).addTo(map);
marker.bindPopup('popupContent').openPopup();

var marker2 = L.marker([-50,-40]).addTo(map);
marker2.bindPopup('popupContent').openPopup();