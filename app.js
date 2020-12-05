// API key
const API_KEY = "pk.eyJ1IjoibWFycmlvdHQiLCJhIjoiY2tobmlvODhwMDBmNjJ5cDZ4a3p0NXM1eSJ9.VI10ZBv3wdgLH5wpLoSTCA";

d3.json("/api/cities", function(cities) { 
  console.log(cities);

  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  cities.forEach(city => {
    L.marker([city.latitude, city.longitude])
      .bindPopup("<h1>" + city.name + "</h1>")
      .addTo(myMap);
  });
});
