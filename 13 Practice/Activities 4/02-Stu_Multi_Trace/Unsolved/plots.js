console.log(data);

// Trace1 for the Greek Data
var trace1 = {
    x: data.map(greek => greek.pair),
    y: data.map(search => search.greekSearchResults),
    type: "bar"
}


// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(greek => roman.pair),
    y: data.map(search => search1.romanSearchResults),
    type:"bar"
}

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
    title: "Greek gods search results vs. Roman gods search results",
    xaxiis: {title: "Greek and Romain Pair"},
    yais: {title: "Search Results"},
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
plot = Plotly.newPlot("plot", data, layout);