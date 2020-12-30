// JavaScript source code
var latCoord;
var longCoord;

navigator.geolocation.getCurrentPosition(function (position) {
    return {
        latCoord: position.coords.latitude,
        longCoord: position.coords.longitude,
    };
});

console.log(latCoord);


var map = document.getElementById("map");
var mymap = L.map('map').setView([51.509, -0.118], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


