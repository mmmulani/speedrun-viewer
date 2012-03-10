google.load('visualization', '1.0', { packages: ['corechart'] });
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Time');
  data.addColumn('number', 'Speedrun 1');
  data.addColumn('number', 'Speedrun 2');

  var speedrun_1 = [
    10,
    20,
    40,
    80
  ];

  var speedrun_2 = [
    4,
    15,
    17,
    90
  ];

  var speedruns = [speedrun_1, speedrun_2];

  for (var i = 0; i < speedruns.length; i++) {
    var speedrun = speedruns[i];
    for (var j = 0; j < speedrun.length; j++) {
      var row = new Array(speedruns.length + 1);

      // Set the time.
      row[0] = speedrun[j];

      // Set the star count.
      row[i + 1] = j + 1;
      data.addRow(row);
    }
  }

  var chart = new google.visualization.LineChart(
    document.getElementById('chart_div')
  );
  chart.draw(data, {});
}
