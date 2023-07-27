var first = [
  ["DEF Industries", 2, 9.3],
  ["MNO Enterprises", 2, 9.2],
  ["ABC Corporation", 3, 8.7],
  ["GHI Solutions", 3, 8.6],
  ["UVW Solutions", 1, 8.6],
  ["XYZ Enterprises", 3, 8.0],
  ["RST Industries", 1, 7.7],
  ["PQR Inc.", 2, 7.25],
  ["JKL Corporation", 3, 7.0],
];
var second = [
  ["ABC Corporation", 4, 9.0],
  ["MNO Enterprises", 5, 8.8],
  ["DEF Industries", 3, 8.3],
  ["GHI Solutions", 3, 8.2],
  ["UVW Solutions", 3, 8.2],
  ["XYZ Enterprises", 3, 8.0],
  ["PQR Inc.", 2, 7.7],
  ["RST Industries", 1, 7.7],
  ["JKL Corporation", 4, 7.425],
];
var third = [
  ["GHI Solutions", 4, 9.2],
  ["UVW Solutions", 4, 9.025],
  ["DEF Industries", 4, 8.775],
  ["ABC Corporation", 4, 8.35],
  ["RST Industries", 3, 8.3],
  ["JKL Corporation", 4, 7.975],
  ["XYZ Enterprises", 4, 7.5],
  ["MNO Enterprises", 4, 6.975],
  ["PQR Inc.", 4, 6.6],
];
var sal = [" Salary 6 to 8 lakhs", " Salary 8 to 10 lakhs"];
var barColors = ["green", "blue"];
check2();
function check() {
  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  Chart.register(ChartDataLabels);
  Chart.defaults.color = "black";

  const myChart = new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: sal,
      datasets: [
        {
          backgroundColor: barColors,

          hoverOffset: 4,
          data: [3, 6],
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "COMPANIES 2019-2020",
          font: {
            size: 24,
          },
        },
        subtitle: {
          display: true,
          text: "TOTAL : 9",
          font: {
            size: 22,
          },
        },
        legend: true,
        datalabels: {
          text: "%l %p",
          color: "white",
          stretch: 45,
          font: {
            weight: "bold",
            size: 16,
          },
        },
      },
    },
  });
  var f = 0,
    k = 0;
  var table1 = document.getElementById("myTable");
  var table2 = document.getElementById("myTable1");
  rem(table1);
  rem(table2);
  for (var i = 0; i < first.length; i++) {
    a = first[i][0];
    b = first[i][1];
    c = first[i][2];
    if (c >= 6 && c < 8) {
      if (f == 0) {
        k = 0;
        f = 1;
      }
      add(table2, k, a, b);
      k++;
    } else {
      f = 0;
      add(table1, k, a, b);
      k++;
    }
  }
}
function check1() {
  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  Chart.register(ChartDataLabels);
  Chart.defaults.color = "black";
  const myChart = new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: sal,
      datasets: [
        {
          backgroundColor: barColors,

          hoverOffset: 4,
          data: [4, 5],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "COMPANIES 2020-2021",
          font: {
            size: 24,
          },
        },
        subtitle: {
          display: true,
          text: "TOTAL : 9",
          font: {
            size: 22,
          },
        },
        legend: true,
        datalabels: {
          text: "%l %p",
          color: "white",
          stretch: 45,
          font: {
            resizable: true,
            weight: "bold",
            size: 24,
          },
        },
      },
    },
  });
  var f = 0,
    k = 0;
  var table1 = document.getElementById("myTable");
  var table2 = document.getElementById("myTable1");
  rem(table1);
  rem(table2);
  for (var i = 0; i < second.length; i++) {
    a = second[i][0];
    b = second[i][1];
    c = second[i][2];
    if (c >= 6 && c <= 8) {
      if (f == 1) {
        k = 0;
        f = 0;
      }
      add(table2, k, a, b);
      k++;
    } else {
      add(table1, i, a, b);
      k++;
      f = 1;
    }
  }
}

function check2() {
  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  Chart.register(ChartDataLabels);
  Chart.defaults.color = "black";
  var data = [4, 5];
  const myChart = new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: sal,
      datasets: [
        {
          backgroundColor: barColors,
          hoverOffset: 4,
          data: data,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "COMPANIES 2021-2022",
          font: {
            size: 24,
          },
        },
        subtitle: {
          display: true,
          text: "TOTAL : 9",
          font: {
            size: 22,
          },
        },

        legend: true,
        datalabels: {
          text: "%l %p",
          color: "white",
          stretch: 45,
          font: {
            resizable: true,
            weight: "bold",
            size: 24,
          },
        },
      },
    },
  });
  var f = 0,
    k = 0;
  var table1 = document.getElementById("myTable");
  var table2 = document.getElementById("myTable1");
  rem(table1);
  rem(table2);
  for (var i = 0; i < third.length; i++) {
    a = third[i][0];
    b = third[i][1];
    c = third[i][2];
    if (c >= 6 && c <= 8) {
      if (f == 1) {
        k = 0;
        f = 0;
      }
      add(table2, k, a, b);
      k++;
    } else {
      add(table1, i, a, b);
      k++;
      f = 1;
    }
  }
}
function add(table, k, a, b) {
  var row = table.insertRow();

  var cell = row.insertCell();
  cell.innerHTML = k + 1;

  var cell = row.insertCell();
  cell.innerHTML = a + "(<b>" + b + "</b>)";
}
function rem(table) {
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
}
