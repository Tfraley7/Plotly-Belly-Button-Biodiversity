
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}], {title: "My First Plot"});

var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout ={
    title: "Luncheon Survey",
    xaxis:{title:"Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotAreaB", trace, layout);

///Beverages note: without labels for x and values for y this will not work, because this is a pie chart.
var ruffles = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [ruffles];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotAreaC", data, layout);

 