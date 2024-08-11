let board = [];
let rows = 8;
let columns = 8;
let minesCount = 10;
let minesLocation = [];
let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

window.onload = function () {
  startGame();
};

function setMines() {
  let minesLeft = minesCount;
  while (minesLeft > 0) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);
    let id = r.toString() + "-" + c.toString();

    if (!minesLocation.includes(id)) {
      minesLocation.push(id);
      minesLeft = minesLeft - 1;
    }
  }

  // manually
  //   minesLocation.push("2-2");
  //   minesLocation.push("2-3");
  //   minesLocation.push("5-6");
  //   minesLocation.push("3-4");
  //   minesLocation.push("1-1");
}
function refreshPage() {
  window.location.reload();
}

function startGame() {
  document.getElementById("mines-quantity").innerText = minesCount;
  document
    .getElementById("flag-button")
    .addEventListener("contextmenu", setFlag);
  setMines();
  // populating the board
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.addEventListener("click", clickTile);
      tile.addEventListener("contextmenu", setFlag);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
}

function setFlag(e) {
  e.preventDefault();
  if (gameOver || this.classList.contains("tile-clicked")) {
    return;
  }
  let tile = this;
  if (flagEnabled) {
    if (tile.innerText == "") {
      tile.innerText = "🚩";
    } else if (tile.innerText == "🚩") {
      tile.innerText = "";
    }
    return;
  }
  if (flagEnabled) {
    flagEnabled = false;
  } else {
    flagEnabled = true;
  }
}

function revealMines() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = board[r][c];
      if (minesLocation.includes(tile.id)) {
        tile.innerText = "💣";
        tile.style.backgroundColor = "red";
      }
    }
  }
}

function clickTile() {
  if (gameOver || this.classList.contains("tile-clicked")) {
    return;
  }
  let tile = this;
  if (minesLocation.includes(tile.id)) {
    alert("Game Over");
    gameOver = true;
    revealMines();
    return;
  }

  let coords = tile.id.split("-"); // '1-1' -> ['1', '1']
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  checkMine(r, c);
}

function checkMine(r, c) {
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return;
  }
  if (board[r][c].classList.contains("tile-clicked")) {
    return;
  }

  board[r][c].classList.add("tile-clicked");
  tilesClicked += 1;

  let minesFound = 0;
  // top 3
  minesFound += checkTile(r - 1, c - 1); // top left
  minesFound += checkTile(r - 1, c); // top
  minesFound += checkTile(r - 1, c + 1); // top right

  // left and right

  minesFound += checkTile(r, c - 1);
  minesFound += checkTile(r, c + 1);

  // bottom 3

  minesFound += checkTile(r + 1, c + 1);
  minesFound += checkTile(r + 1, c);
  minesFound += checkTile(r + 1, c - 1);

  if (minesFound > 0) {
    board[r][c].innerText = minesFound;
    board[r][c].classList.add("x" + minesFound.toString());
  } else {
    checkMine(r - 1, c - 1); // top left
    checkMine(r - 1, c); // top
    checkMine(r - 1, c + 1); //top right

    // left and right
    checkMine(r, c - 1); // left
    checkMine(r, c + 1); // right

    // bottom 3
    checkMine(r + 1, c - 1); // bottom left
    checkMine(r + 1, c); //bottom
    checkMine(r + 1, c + 1); // bottom right
  }
  if (tilesClicked == rows * columns - minesCount) {
    document.getElementById("mines-quantity").innerText = "Cleared";
    gameOver = true;
  }
}

function checkTile(r, c) {
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return 0;
  }
  if (minesLocation.includes(r.toString() + "-" + c.toString())) {
    return 1;
  }
  return 0;
}
