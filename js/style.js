var state = {
  Player1: 0,
  Player2: 0,
  Player1name: "Player 1",
  Player2name: "Player 2",
  whoPlay: "X",
  blockDraw: true,
  elements: ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"],
  ABC: [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"],
  ],
};
var draw = () => {
  var el = state.elements.map(
    (m) => (m = document.getElementById(m).disabled === true)
  );
  if (
    el[0] &&
    el[1] &&
    el[2] &&
    el[3] &&
    el[4] &&
    el[5] &&
    el[6] &&
    el[7] &&
    el[8] &&
    state.blockDraw === true
  ) {
    state.Player1 += 0.5;
    document.getElementById("player1").innerText = state.Player1;
    state.Player2 += 0.5;
    document.getElementById("player2").innerText = state.Player2;
    cline();
  }
};
var cline = () => {
  var e = state.elements;
  var blockDraw = (el) => (state.blockDraw = el);
  setTimeout(
    function () {
      e.forEach((el) => (document.getElementById(el).innerText = ""));
      e.forEach((el) => (document.getElementById(el).disabled = false));
      blockDraw(true);
    },
    1000,
    e,
    blockDraw()
  );
};
var addIfOfAddXOPlayer1 = () => {
  state.Player1 += 1;
  document.getElementById("player1").innerText = state.Player1;
  state.elements.forEach((e) => (document.getElementById(e).disabled = true));
  state.blockDraw = false;
  cline();
};
var addIfOfAddXOPlayer2 = () => {
  state.Player2 += 1;
  document.getElementById("player2").innerText = state.Player2;
  state.elements.forEach((e) => (document.getElementById(e).disabled = true));
  state.blockDraw = false;
  cline();
};
var addXO = (el) => {
  document.getElementById(el).innerText = document.getElementById(
    "whoPlay"
  ).innerText;
  document.getElementById("whoPlay").innerText === "X"
    ? (document.getElementById("whoPlay").innerText = "O")
    : (document.getElementById("whoPlay").innerText = "X");
  document.getElementById(el).disabled = true;
  for (let i = 0; i < state.ABC.length; i++) {
    if (
      document.getElementById(state.ABC[i][0]).innerText === "X" &&
      document.getElementById(state.ABC[i][1]).innerText === "X" &&
      document.getElementById(state.ABC[i][2]).innerText === "X"
    ) {
      addIfOfAddXOPlayer1();
    }
  }
  for (let i = 0; i < state.ABC.length; i++) {
    if (
      document.getElementById(state.ABC[i][0]).innerText === "O" &&
      document.getElementById(state.ABC[i][1]).innerText === "O" &&
      document.getElementById(state.ABC[i][2]).innerText === "O"
    ) {
      addIfOfAddXOPlayer2();
    }
  }
  draw();
  whoWiner();
};
var setStatePlayers = (el) => {
  state.Player1 = 0;
  document.getElementById("player1").innerText = state.Player1;
  state.Player2 = 0;
  document.getElementById("player2").innerText = state.Player2;
  state.whoPlay = 0;
  document.getElementById("whoPlay").innerText = state.whoPlay;
};
var whoWiner = () => {
  if (state.Player1 === 3 && state.Player2 === 3) {
    document.getElementById("winer").innerText = "Draw";
    setStatePlayers("X");
  } else if (state.Player1 >= 3) {
    document.getElementById("winer").innerText = document.getElementById(
      "player1name"
    ).innerText;
    setStatePlayers("O");
  } else if (state.Player2 >= 3) {
    document.getElementById("winer").innerText = document.getElementById(
      "player2name"
    ).innerText;
    setStatePlayers("X");
  }
};
var resetGame = () => {
  document.getElementById("winer").innerHTML = "</br>";
  setStatePlayers("X");
  cline();
};
var changeName = (el, el2) => {
  document.getElementById(el).className = "hiden";
  document.getElementById(el2).value = document.getElementById(el).innerText;
  document.getElementById(el2).className = "";
  document.getElementById(el2).focus();
};
var changeNewName = (el, el2) => {
  if (el === "player1name") {
    state.Player1name = document.getElementById(el2).value;
    document.getElementById(el).innerText = state.Player1name;
  }
  if (el === "player2name") {
    state.Player2name = document.getElementById(el2).value;
    document.getElementById(el).innerText = state.Player2name;
  }
  document.getElementById(el2).className = "hiden";
  document.getElementById(el).className = "";
};
