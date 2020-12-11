// API key
//const API_KEY = "pk.eyJ1Ijoic2FidWRvdSIsImEiOiJja2hwa2RnOHYwOHU1MnpwMnFzeTZ3MnZpIn0.K-Ers9gKI6Orjmd7w4TEuw";
austinData = []
d3.json("/api/austin", function(austin) { 
  console.log(austin);
  var labels = austin.map(type => type.outcome_type);
  var outcome = austin.map(type => type.count);
  austinData = [{
    values: outcome,
    labels: labels,
    type: "pie"
  }];
  init();
})


// Display the plot
function init() {
  console.log("hi")

  var layout = {
    height: 500,
    width: 500
  
  };

  Plotly.newPlot("austin_pie", austinData, layout);
}



// // Create an array of each animal's numbers
// var dog = Object.values(austin.dog);
// var cat = Object.values(austin.cat);
// var other = Object.values(austin.other);

// // Create an array of music provider labels
// var labels = Object.keys(austin.dog);

// // Display the default plot
// function init() {
//   var austin = [{
//     values: dog,
//     labels: labels,
//     type: "pie"
//   }];

//   var layout = {
//     height: 600,
//     width: 800
//   };

//   Plotly.newPlot("pie", austin, layout);
// }

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   var data = [];

//   if (dataset == 'us') {
//       data = us;
//   }
//   else if (dataset == 'uk') {
//       data = uk;
//   }
//   else if (dataset == 'canada') {
//       data = canada;
//   }
//   // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();
