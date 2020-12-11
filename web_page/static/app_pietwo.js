sonomaData = []
d3.json("/api/sonoma", function(sonoma) { 
  console.log(sonoma);
  var labels = sonoma.map(type => type.OutcomeType);
  var outcome = sonoma.map(type => type.count);
  sonomaData = [{
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

  Plotly.newPlot("sonoma_pie", sonomaData, layout);
}
