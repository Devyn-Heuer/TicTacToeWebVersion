function placeMarker() {
  var cell = document.querySelectorAll("td");

  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", function (evt) {
      if (this.innerHTML == "X") {
        this.innerHTML = "O";
      } else if (this.innerHTML == "O") {
        this.innerHTML = "";
      } else if (this.innerHTML == "") {
        this.innerHTML = "X";
      }
    });
  }
}

function clearBoard() {
  var cell = document.querySelectorAll("td");

  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
    cell[i].style.backgroundColor = "white";
  }

  console.clear();
}
function checkWin() {
  checkHor();
  checkVert();
  checkDia();
}
function checkDia() {

  var row = document.querySelectorAll("tr");

  var block;
  var blockB;
  var counterA = 1;
  var counterB = 0;
  var collectionA = [];
  var collectionB =[]

  for (let i = 0; i < row[0].children.length; i++) {

    if (i == 0) {
      block = row[i].children[i].innerHTML;
    } else if (row[i].children[i].innerHTML == block) {
      counterB++;
    }

    collectionA.push(row[i].children[i]);

    if (i == 0) {
      blockB = row[row.length - 1 - i].children[i].innerHTML;
    } else if (row[row.length - 1 - i].children[i].innerHTML == blockB) {
      counterA++;
    }
    
    collectionB.push(row[row.length - 1 - i].children[i]);
    console.log(collectionB)

    if ((counterB == 2 && block != "")) {
      collectionA.forEach(function (item) {
        item.style.backgroundColor = "green";
      });
      setTimeout(function () {
        alert("'" + block + "'" + " has won!");

        clearBoard();
      }, 500);

      break;
    } else if (counterA == 3 && blockB != ""){
      collectionB.forEach(function (item) {
        item.style.backgroundColor = "green";
      });
      setTimeout(function () {
        alert("'" + blockB + "'" + " has won!");

        clearBoard();
      }, 500);

      break;
    }
  }
}

function checkVert() {
  var row = document.querySelectorAll("tr");

  for (let i = 0; i < row[0].children.length; i++) {
    var block;
    var counter = 0;
    var collection = [];
    for (let j = 0; j < row.length; j++) {
      if (j == 0) {
        block = row[j].children[i].innerHTML;
      } else if (row[j].children[i].innerHTML == block) {
        counter++;
      }
      collection.push(row[j].children[i]);
    }
    if (counter == 2 && block !== "") {
      collection.forEach(function (item) {
        item.style.backgroundColor = "green";
      });
      setTimeout(function () {
        alert("'" + block + "'" + " has won!");

        clearBoard();
      }, 500);

      break;
    }
  }
}

function checkHor() {
  var row = document.querySelectorAll("tr");

  for (let i = 0; i < row.length; i++) {
    var block;
    var counter = 0;
    var collection = [];
    for (let j = 0; j < row[i].children.length; j++) {
      if (j == 0) {
        block = row[i].children[j].innerHTML;
      } else if (row[i].children[j].innerHTML == block) {
        counter++;
      }
      collection.push(row[i].children[j]);
    }
    if (counter == 2 && block !== "") {
      collection.forEach(function (item) {
        item.style.backgroundColor = "green";
      });
      setTimeout(function () {
        alert("'" + block + "'" + " has won!");

        clearBoard();
      }, 500);

      break;
    }
  }
}

placeMarker();
