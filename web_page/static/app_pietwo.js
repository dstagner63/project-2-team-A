sonomaData = []
d3.json("/api/sonoma", function(sonoma) { 
  console.log(sonoma);
  var labels = sonoma.map(type => type.outcome_type);
  var outcome = sonoma.map(type => type.count);
  sonomaData = [{
    values: outcome,
    labels: labels,
    type: "pie"
  }];
  make_sonoma_plot();
})


// Display the plot
function make_sonoma_plot() {
  console.log("hi")

  var layout = {
    height: 500,
    width: 500
  
  };

  Plotly.newPlot("sonoma_pie", sonomaData, layout);
}
