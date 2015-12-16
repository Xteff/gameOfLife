var size = 20;

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
      var td = document.createElement('td');
      td.id = 'tdId';
      td.appendChild(document.createTextNode(column));
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  document.body.innerHTML = "";
  document.body.appendChild(table);
}
window.onload = function(){
  drawUniverse();
}

function run() {
  for (i = 0; i < universe.length; i++) {
    for (j = 0; j < universe.length; j++) {
      if (Math.random() > 0.6) {
        universe[i][j] = 1;
      } else {
        universe[i][j] = "";
      }
      close(i, j);
    }
  }
}

function close() {
  var neighbors = (x, y) + (x + 1, y + 1) + (x+1, y) + (x-1, y - 1) + (x - 1, y + 1)
  + (x - 1) + (y - 1, x) + (y + 1, x) + (x + 1, y - 1);
  return neighbors;
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
