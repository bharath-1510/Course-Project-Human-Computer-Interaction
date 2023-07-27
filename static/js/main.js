var first = [
  [22, "William Anderson", "DEF Industries", 9.5, "Male"],
  [13, "Emily Kim", "DEF Industries", 9.4, "Female"],
  [7, "Isabella Wilson", "MNO Enterprises", 9.3, "Female"],
  [19, "Sofia Johnson", "ABC Corporation", 9.2, "Female"],
  [4, "William Brown", "DEF Industries", 9.1, "Male"],
  [25, "Mia Davis", "MNO Enterprises", 9.1, "Female"],
  [10, "Michael Anderson", "ABC Corporation", 9.0, "Male"],
  [1, "Olivia Johnson", "ABC Corporation", 8.9, "Female"],
  [14, "Alexander Davis", "GHI Solutions", 8.8, "Male"],
  [23, "Victoria Hernandez", "GHI Solutions", 8.7, "Female"],
  [9, "Sophia Perez", "UVW Solutions", 8.6, "Female"],
  [16, "Benjamin Wilson", "MNO Enterprises", 8.5, "Male"],
  [5, "Ava Garcia", "GHI Solutions", 8.4, "Female"],
  [20, "Daniel Perez", "XYZ Enterprises", 8.3, "Male"],
  [11, "Abigail Thompson", "XYZ Enterprises", 8.2, "Female"],
  [17, "Elizabeth Lee", "RST Industries", 8.1, "Female"],
  [2, "Noah Martinez", "XYZ Enterprises", 7.8, "Male"],
  [8, "Ethan Lee", "RST Industries", 7.7, "Male"],
  [21, "Chloe Thompson", "PQR Inc.", 7.6, "Female"],
  [15, "Madison Brown", "JKL Corporation", 7.5, "Female"],
  [18, "Jacob Garcia", "UVW Solutions", 7.4, "Male"],
  [12, "Daniel Hernandez", "PQR Inc.", 7.3, "Male"],
  [3, "Emma Davis", "PQR Inc.", 7.2, "Female"],
  [6, "James Rodriguez", "JKL Corporation", 6.9, "Male"],
  [24, "David Rodriguez", "JKL Corporation", 6.8, "Male"],
];
var second = [
  [4, "Daniel Lee", "DEF Industries", 10.0, "Male"],
  [14, "Benjamin Hernandez", "GHI Solutions", 10.0, "Male"],
  [22, "Christopher Wilson", "DEF Industries", 9.7, "Male"],
  [10, "James Wilson", "ABC Corporation", 9.5, "Male"],
  [25, "Victoria Kim", "MNO Enterprises", 9.4, "Female"],
  [13, "Avery Thompson", "DEF Industries", 9.3, "Female"],
  [1, "Emma Martinez", "ABC Corporation", 9.2, "Female"],
  [19, "Madison Perez", "ABC Corporation", 9.1, "Female"],
  [7, "Sophia Johnson", "MNO Enterprises", 9.0, "Female"],
  [28, "David Wilson", "ABC Corporation", 9.0, "Male"],
  [16, "Michael Davis", "MNO Enterprises", 8.9, "Male"],
  [5, "Isabella Davis", "GHI Solutions", 8.8, "Female"],
  [23, "Hailey Davis", "GHI Solutions", 8.6, "Female"],
  [9, "Ava Davis", "UVW Solutions", 8.5, "Female"],
  [27, "Natalie Davis", "UVW Solutions", 8.4, "Female"],
  [29, "Aaliyah Rodriguez", "XYZ Enterprises", 8.4, "Female"],
  [20, "Andrew Lee", "XYZ Enterprises", 8.3, "Male"],
  [11, "Mia Kim", "XYZ Enterprises", 8.2, "Female"],
  [17, "Grace Wilson", "RST Industries", 8.1, "Female"],
  [2, "Adam Taylor", "XYZ Enterprises", 8.0, "Male"],
  [26, "Alexander Johnson", "RST Industries", 7.9, "Male"],
  [8, "William Rodriguez", "RST Industries", 7.8, "Male"],
  [15, "Chloe Lee", "JKL Corporation", 7.7, "Female"],
  [3, "Ella Anderson", "PQR Inc.", 7.5, "Female"],
  [12, "Joshua Garcia", "PQR Inc.", 7.4, "Male"],
  [21, "Lily Brown", "PQR Inc.", 7.3, "Female"],
  [18, "Ethan Johnson", "UVW Solutions", 7.2, "Male"],
  [30, "Joseph Lee", "PQR Inc.", 7.1, "Male"],
];
var third = [
  [5, "David Wilson", "GHI Solutions", 10.0, "Male"],
  [14, "Andrew Davis", "GHI Solutions", 9.8, "Male"],
  [18, "Thomas Wilson", "UVW Solutions", 9.8, "Male"],
  [23, "Kimberly Lee", "GHI Solutions", 9.6, "Female"],
  [9, "Kevin Brown", "UVW Solutions", 9.5, "Male"],
  [32, "Brian Thompson", "GHI Solutions", 9.4, "Male"],
  [27, "Vanessa Garcia", "UVW Solutions", 9.3, "Female"],
  [13, "Melissa Perez", "DEF Industries", 9.2, "Female"],
  [4, "Amanda Rodriguez", "DEF Industries", 9.1, "Female"],
  [22, "Nicholas Johnson", "DEF Industries", 8.9, "Male"],
  [35, "Olivia Davis", "RST Industries", 8.8, "Female"],
  [31, "Samantha Johnson", "DEF Industries", 8.7, "Female"],
  [28, "William Davis", "ABC Corporation", 8.6, "Male"],
  [1, "John Smith", "ABC Corporation", 8.5, "Male"],
  [17, "Stephanie Lee", "RST Industries", 8.4, "Female"],
  [19, "Ashley Hernandez", "ABC Corporation", 8.3, "Female"],
  [8, "Michelle Chen", "RST Industries", 8.2, "Female"],
  [26, "Daniel Wilson", "RST Industries", 8.1, "Male"],
  [10, "Emily Davis", "ABC Corporation", 8.0, "Female"],
  [33, "Lauren Chen", "JKL Corporation", 7.9, "Female"],
  [24, "Christopher Brown", "JKL Corporation", 7.8, "Male"],
  [15, "Megan Johnson", "JKL Corporation", 7.7, "Female"],
  [6, "Rachel Kim", "JKL Corporation", 7.5, "Female"],
  [29, "Gabriela Hernandez", "XYZ Enterprises", 7.4, "Female"],
  [20, "Jason Kim", "XYZ Enterprises", 7.3, "Male"],
  [2, "Jessica Davis", "XYZ Enterprises", 7.2, "Female"],
  [11, "Sarah Lee", "XYZ Enterprises", 7.1, "Female"],
  [3, "Mike Johnson", "PQR Inc.", 6.8, "Male"],
  [12, "Joshua Garcia", "PQR Inc.", 6.7, "Male"],
  [25, "Natalie Perez", "MNO Enterprises", 6.7, "Female"],
  [21, "Erica Davis", "PQR Inc.", 6.5, "Female"],
  [30, "Robert Kim", "PQR Inc.", 6.4, "Male"],
  [7, "Mark Thompson", "MNO Enterprises", 6.3, "Male"],
  [16, "Justin Brown", "MNO Enterprises", 6.2, "Male"],
  [34, "Eric Brown", "MNO Enterprises", 6.1, "Male"],
];
var gender = ["ALL", "Male", "Female"];
var gen = ["Male", "Female"];
barColors = ["green", "blue"];
check2();
function check() {
  var h = document.getElementById("stat-heading");

  h.innerHTML = "ALL";

  var table = document.getElementById("myTable");
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
  for (var i = 0; i < first.length; i++) {
    var row = table.insertRow();

    var cell = row.insertCell();
    cell.innerHTML = i + 1;
    var cell = row.insertCell();
    cell.innerHTML = first[i][1];
    var cell = row.insertCell();
    cell.innerHTML = first[i][2];
    var cell = row.insertCell();
    cell.innerHTML = first[i][3];
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
  Chart.register(ChartDataLabels);
  Chart.defaults.color = "black";
  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  const myChart = new Chart("myChart", {
    type: "bar",
    data: {
      labels: gen,
      datasets: [
        {
          hoverOffset: 4,
          backgroundColor: barColors,
          data: [12, 13],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },

      plugins: {
        title: {
          display: true,
          text: "STATISTICS 2019-2020",
          font: {
            size: 24,
          },
        },
        legend: {
          display: false,
        },

        datalabels: {
          align: "end",
          anchor: "end",
          formatter: Math.round,
          font: {
            weight: "bold",
            size: 16,
          },
        },
      },

      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 50,
        },
      },
    },
  });
}
function check1() {
  var h = document.getElementById("stat-heading");

  h.innerHTML = "ALL";

  var table = document.getElementById("myTable");
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
  for (var i = 0; i < second.length; i++) {
    var row = table.insertRow();

    var cell = row.insertCell();
    cell.innerHTML = i + 1;
    var cell = row.insertCell();
    cell.innerHTML = second[i][1];
    var cell = row.insertCell();
    cell.innerHTML = second[i][2];
    var cell = row.insertCell();
    cell.innerHTML = second[i][3];
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
  Chart.register(ChartDataLabels);
  Chart.defaults.color = "black";
  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  const myChart = new Chart("myChart", {
    type: "bar",
    data: {
      labels: gen,
      datasets: [
        {
          hoverOffset: 4,
          backgroundColor: barColors,
          data: [13, 15],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },

      plugins: {
        title: {
          display: true,
          text: "STATISTICS 2020-2021",
          font: {
            size: 24,
          },
        },
        legend: {
          display: false,
        },

        datalabels: {
          align: "end",
          anchor: "end",
          formatter: Math.round,
          font: {
            weight: "bold",
            size: 16,
          },
        },
      },

      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 50,
        },
      },
    },
  });
}
function check2() {
  var h = document.getElementById("stat-heading");

  h.innerHTML = "ALL";
  var table = document.getElementById("myTable");
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
  for (var i = 0; i < third.length; i++) {
    var row = table.insertRow();

    var cell = row.insertCell();
    cell.innerHTML = i + 1;
    var cell = row.insertCell();
    cell.innerHTML = third[i][1];
    var cell = row.insertCell();
    cell.innerHTML = third[i][2];
    var cell = row.insertCell();
    cell.innerHTML = third[i][3];
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
  Chart.register(ChartDataLabels);
  Chart.defaults.color = "black";
  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  const myChart = new Chart("myChart", {
    type: "bar",
    data: {
      labels: gen,
      datasets: [
        {
          hoverOffset: 4,
          backgroundColor: barColors,
          data: [17, 18],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },

      plugins: {
        title: {
          display: true,
          text: "STATISTICS 2021-2022",
          font: {
            size: 24,
          },
        },
        legend: {
          display: false,
        },

        datalabels: {
          align: "end",
          anchor: "end",
          formatter: Math.round,
          font: {
            weight: "bold",
            size: 16,
          },
        },
      },

      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 50,
        },
      },
    },
  });
}
var currentPage = 1;
var totalRows = document.getElementById("myTable").rows.length - 1;

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

updateTable(totalRows);

prevButton.addEventListener("click", goToPrevPage);
nextButton.addEventListener("click", goToNextPage);
function updateTable(totalRows) {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  const startIndex = (currentPage - 1) * 15;
  let endIndex = startIndex + 15;

  if (endIndex > totalRows) {
    endIndex = totalRows;
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  if (startIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  for (let i = 1; i <= totalRows; i++) {
    const row = document.getElementById("myTable").rows[i];

    if (i > startIndex && i <= endIndex) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  }
}

function goToPrevPage() {
  totalRows = document.getElementById("myTable").rows.length - 1;
  currentPage--;
  updateTable(totalRows);
}

function goToNextPage() {
  totalRows = document.getElementById("myTable").rows.length - 1;
  currentPage++;
  updateTable(totalRows);
}
const button1 = document.getElementById("first");
const button2 = document.getElementById("second");
const button3 = document.getElementById("third");
button1.addEventListener("click", handleClick);
button2.addEventListener("click", handleClick);
button3.addEventListener("click", handleClick);
var currentstate = "2021-2022";
function handleClick(event) {
  const clickedButton = event.target;
  currentstate = clickedButton.textContent.trim();
}
function print(n) {
  var f;
  if (currentstate == "2021-2022") {
    mine(n, third);
  } else if (currentstate == "2020-2021") {
    mine1(n, second);
  } else {
    mine2(n, first);
  }
}
function mine(n, f) {
  var table = document.getElementById("myTable");
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
  for (var i = 0; i < third.length; i++) {
    var row = table.insertRow();

    var cell = row.insertCell();
    cell.innerHTML = i + 1;
    var cell = row.insertCell();
    cell.innerHTML = third[i][1];
    var cell = row.insertCell();
    cell.innerHTML = third[i][2];
    var cell = row.insertCell();
    cell.innerHTML = third[i][3];
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
  var h = document.getElementById("stat-heading");
  h.innerHTML = gender[n];
  if (n == 0) return;
  var table = document.getElementById("myTable");
  var rows = table.rows.length;

  var k = 0;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;
    var string = f[i - 1][4];

    if (string !== gender[n]) {
      for (var j = cells - 1; j >= 0; j--) {
        table.rows[i].deleteCell(j);
      }

      table.deleteRow(i);
      continue;
    }

    k++;
  }
  for (var i = 1; i <= k; i++) {
    var cells = table.rows[i].cells.length;
    var row = table.rows[i];
    row.cells[0].innerHTML = i;
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
}
function mine1(n, f) {
  var table = document.getElementById("myTable");
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
  for (var i = 0; i < second.length; i++) {
    var row = table.insertRow();

    var cell = row.insertCell();
    cell.innerHTML = i + 1;
    var cell = row.insertCell();
    cell.innerHTML = second[i][1];
    var cell = row.insertCell();
    cell.innerHTML = second[i][2];
    var cell = row.insertCell();
    cell.innerHTML = second[i][3];
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
  var h = document.getElementById("stat-heading");
  h.innerHTML = gender[n];
  if (n == 0) return;
  var table = document.getElementById("myTable");
  var rows = table.rows.length;

  var k = 0;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;
    var string = f[i - 1][4];

    if (string !== gender[n]) {
      for (var j = cells - 1; j >= 0; j--) {
        table.rows[i].deleteCell(j);
      }

      table.deleteRow(i);
      continue;
    }

    k++;
  }
  for (var i = 1; i <= k; i++) {
    var cells = table.rows[i].cells.length;
    var row = table.rows[i];
    row.cells[0].innerHTML = i;
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
}
function mine2(n, f) {
  var table = document.getElementById("myTable");
  var rows = table.rows.length;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;

    for (var j = cells - 1; j >= 0; j--) {
      table.rows[i].deleteCell(j);
    }

    table.deleteRow(i);
  }
  for (var i = 0; i < first.length; i++) {
    var row = table.insertRow();

    var cell = row.insertCell();
    cell.innerHTML = i + 1;
    var cell = row.insertCell();
    cell.innerHTML = first[i][1];
    var cell = row.insertCell();
    cell.innerHTML = first[i][2];
    var cell = row.insertCell();
    cell.innerHTML = first[i][3];
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
  var h = document.getElementById("stat-heading");
  h.innerHTML = gender[n];
  if (n == 0) return;
  var table = document.getElementById("myTable");
  var rows = table.rows.length;

  var k = 0;
  for (var i = rows - 1; i >= 1; i--) {
    var cells = table.rows[i].cells.length;
    var string = f[i - 1][4];

    if (string !== gender[n]) {
      for (var j = cells - 1; j >= 0; j--) {
        table.rows[i].deleteCell(j);
      }

      table.deleteRow(i);
      continue;
    }

    k++;
  }
  for (var i = 1; i <= k; i++) {
    var cells = table.rows[i].cells.length;
    var row = table.rows[i];
    row.cells[0].innerHTML = i;
  }
  currentPage = 1;
  totalRows = document.getElementById("myTable").rows.length - 1;
  updateTable(totalRows);
}
