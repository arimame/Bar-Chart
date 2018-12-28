$(document).ready(function(){
  function drawBarChart(data) {
    const width = data.length;
    for (var i = 0; i < width; i++) {
      let height = data[i] * 10
      $('#container').append(`<div style="background-color: blue; width: 50px; height: ${height}px; margin-right: 10px"></div>`)
    }
  }
  drawBarChart([1,2,4, 10, 50, 100]);
});
