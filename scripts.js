// Constant variable for storing color hex values
const lineColors = {
    green: "#44bb66",
    red: "#bb4466",
    blue: "#4466bb"
}

// Setup Plotly config as a const as we will reuse it for all charts
const config = {
    displayModeBar: false,
    responsive: true
}


// Variables storing the DOM elements to be used for each of the plots
const plot1Div = document.getElementById('vis1');
const plot2Div = document.getElementById('vis2');
const plot3Div = document.getElementById('vis3');


Plotly.d3.csv("https://raw.githubusercontent.com/vngu9709/plotly/main/mortality.csv", function(rows) {

    var trace0 = {
        mode: "markers",
        name: "United States of America",
        x: unpack(rows, "year"),
        y: unpack(rows, 'mortality'),
        marker: {
            size: [40, 60, 80, 100]

        }

    }

    var data1 = [trace0];

    var layout1 = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };



Plotly.newPlot (plot1Div, data1, layout1, config);
});

function unpack(rows, key) {
return rows.map(function(row) {return row[key];});



}
console.log(trace0);
