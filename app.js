$(document).ready(function(){

const colors= ['aqua', 'blue', 'fuchsia', 'green',
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
'silver', 'teal', 'yellow'];

  function scaling(data) {
      const digits = data.toString().length;
      const pixels = Math.pow(10, (3 - digits));
      return pixels;
  }

  function drawBarChart(data) {
    const width = data.length;
    for (var i = 0; i < width; i++) {
      let height = data[i] * (scaling(data[i]))/2;
      console.log(height);
      $('#container').append(`<div style="background-color: ${colors[i]}; width: 50px; height: ${height}px; margin-right: 10px"></div>`)
    }
  }

  drawBarChart([10, 20, 40, 75]);
});
