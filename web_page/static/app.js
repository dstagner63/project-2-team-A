// API key
const API_KEY = "pk.eyJ1IjoibWFycmlvdHQiLCJhIjoiY2tobmlvODhwMDBmNjJ5cDZ4a3p0NXM1eSJ9.VI10ZBv3wdgLH5wpLoSTCA";

d3.json("/api/national", function(shelters) { 
  console.log(shelters);

  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });

  // Add our background or tile layer map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  shelters.forEach(shelter => {
    L.circle([shelter.latitude, shelter.longitude], {
      color: "green", 
      fillColor: "green",
      fillOpacity: 0.50,
      radius: 25
    })
    .bindPopup("<h1>" + shelter.name + "</h1> <hr> <h3>City: " + shelter.city + "</h3>")
      .addTo(myMap);
  });
});



// .bindPopup("<h1>" + shelter.name + "</h1>"))

// shelters.forEach(shelter => {
//   L.marker([shelter.latitude, shelter.longitude])
//   .bindPopup("<h1>" + shelter.name + "</h1> <hr> <h3>City: " + shelter.city + "</h3>")
//     .addTo(myMap);
// });