// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
const musiclabels = Object.keys(data.us);

// Display the default plot
function init() {
    var data = [{
        type: "pie",
        values: us,
        labels: musiclabels
    }];

    var layout = {
        height: 600,
        width: 800
    };

    Plotly.newPlot("plot", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("setDataSet").on("change", getData)

// Function called by DOM changes
function getdata(){
  var dropdownMenu = d3.select("dropdownMenu");
  var dataset = dropdownMenu.property("value");

  // Assign the value of the dropdown menu option to a variable
  var xData = [];
  if (dataset === 'us'){
    data = 'us';
  }
  // Initialize an empty array for the country's data
  else if (dataset === 'canada'){
    data = 'canada';
  }

  else (dataset === 'uk'){
    data = 'uk';
  }
// Update the restyled plot's values
updatePlotly[data];

};


function updatePlotly(newData){
  Plotly.restyle("pie","values", [newData]);
}