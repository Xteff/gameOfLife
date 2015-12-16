var size = 40;

var x = 0;
var y = 0;


var universe = new Array();
for (i = 0; i < size; i++) {
  universe[i] = new Array();
}

function drawUniverse(){
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
    universe.forEach(function(row){
      var tr = document.createElement('tr');
      row.forEach(function(column){
      var clase = column == 1 ? "alive" : "death";
      var td = document.createElement('td');
      td.setAttribute('class', clase);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  var container = document.querySelector('.tableGame');
  container.innerHTML = "";
  container.appendChild(table);
}

function initialize() {
  for (var i = 0; i < universe.length; i++) {
    for (var j = 0; j < universe.length; j++) {
      if (Math.random() > 0.6) {
        universe[i][j] = 1;
      } else {
        universe[i][j] = 0;
      }
    }
  }
}

window.onload = function(){
  initialize();
  drawUniverse();
}

function run() {
  for (var i = 0; i < universe.length; i++) {
    for (var j = 0; j < universe.length; j++) {
      rules(universe, i, j);
    }
  }
}

function close(x, y) {
  var neighbors = getValue(x, y) + getValue(x + 1, y + 1) + getValue(x+1, y) +
  getValue(x-1, y - 1) + getValue(x - 1, y + 1) + getValue(x - 1) + getValue(y - 1, x)
  + getValue(y + 1, x) + getValue(x + 1, y - 1);
  return neighbors;
}

function getValue(x, y) {
  try {
    return isNaN(universe[x][y]) ? 0 : universe[x][y];
  } catch(error) {
    return 0;
  }
}

function rules(universe, i, j){
  var neighbors = close(i, j);

    if (neighbors < 2){
      universe[i][j] = 0;
    }

    if (neighbors > 3) {
      universe[i][j] = 0;
    }

    if (neighbors == 2) {
      universe[i][j] = 1;
    }

    if (neighbors == 3) {
      universe[i][j] = 1;
    }
  }

setInterval(function(){
  run();
  drawUniverse();
}, 2000)
