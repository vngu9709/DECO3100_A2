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
        type: "scatter",
        mode: "lines",
        name: 'AAPL High',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Mortality'),
        line: { color: lineColors.green }
    }

    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'AAPL Low',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Mortality'),
        line: { color: lineColors.red }
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'AAPL Volume',
        x: unpack(rows, 'Year'),
        y: unpack(rows, 'Mortality'),
        line: { color: '#17BECF' }
    }

    var data1 = [trace0, trace1];


    var layout1 = {
        title: 'Apple (AAPL) Stock Price',
        xaxis: {
            autorange: true,
            rangeselector: {
                buttons: [{
                        count: 50,
                        label: 'Years',
                        step: '50y',
                        stepmode: 'forward'
                    },
                    {
                        count: 0,
                        label: 'Child mortality',
                        step: '20imr',
                        stepmode: 'forward'
                    },
                    { step: 'all' }
                ]
            },
            type: 'date',
        }
    };
   


    Plotly.newPlot(plot1Div, data1, layout1, config);
});

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}