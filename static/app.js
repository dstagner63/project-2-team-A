// API key
const API_KEY = "pk.eyJ1Ijoic2FidWRvdSIsImEiOiJja2hwa2RnOHYwOHU1MnpwMnFzeTZ3MnZpIn0.K-Ers9gKI6Orjmd7w4TEuw";

d3.json("/api/shelters", function(shelters) { 
  console.log(shelters);

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

  shelters.forEach(national => {
    L.marker([national.latitude, national.longitude])
      .bindPopup("<h1>" + national.city + "</h1>")
      .addTo(myMap);
  });
});
