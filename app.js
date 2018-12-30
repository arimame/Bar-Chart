$(document).ready(function(){

const colors= ['aqua', 'blue', 'fuchsia', 'green',
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
'silver', 'teal', 'yellow'];

  function scaling(data) {
      const digits = data.toString().length;
      const pixels = Math.pow(10, (3 - digits));
      return pixels;
  }

  function yaxis(data) {
    let zero = "";
    for (var i = 0; i < (data - 1); i++) {
      zero += "0";
    }
    for (var i = 10; i >= 1; i--) {
      $('#y-axis').append(`<div class="number">${i + zero}</div>`)
    }
  }

  function xaxis(data) {
    for (var i = 0; i < data.length; i++) {
      $('#x-axis').append(`<div style="width: 50px; margin-right: 10px; text-align: center">${data[i].label}</div>`)
    }

  }

  function drawBarChart(data) {
    const width = data.length;
    for (var i = 0; i < width; i++) {
      let height = data[i].value * (scaling(data[i].value))/2;
      console.log(height);
      $('#container').append(`<div style="background-color: ${colors[i]}; width: 50px; height: ${height}px; margin-right: 10px"></div>`)
    }
  }

  const chartData = [{value: 1000, label: "cats"}, {value: 2000, label: "dogs"}, {value: 4000, label: "birds"}, {value: 7500, label: "sharks"}];
  yaxis(4);
  xaxis(chartData)
  drawBarChart(chartData);
});
