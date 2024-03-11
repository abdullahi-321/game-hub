let player1Turn = true;
let player2Turn = false;
const X = "X";
const O = "O";
const span = document.querySelector("span");
const divs = document.querySelectorAll("div");
const playerEl = document.querySelector('.playerEl');

const div1 = document.querySelector(".div1"),
  div2 = document.querySelector(".div2"),
  div3 = document.querySelector(".div3"),
  div4 = document.querySelector(".div4"),
  div5 = document.querySelector(".div5"),
  div6 = document.querySelector(".div6"),
  div7 = document.querySelector(".div7"),
  div8 = document.querySelector(".div8"),
  div9 = document.querySelector(".div9");

divs.forEach((div) => {
  div.addEventListener("mousedown", () => {
    if (div.innerHTML == "") {
      if (player1Turn) {
        div.innerHTML = X;
      } else if (player2Turn) {
        div.innerHTML = O;
      }

      const T1 = div1.innerHTML == X,
        T2 = div2.innerHTML == X,
        T3 = div3.innerHTML == X,
        T4 = div4.innerHTML == X,
        T5 = div5.innerHTML == X,
        T6 = div6.innerHTML == X,
        T7 = div7.innerHTML == X,
        T8 = div8.innerHTML == X,
        T9 = div9.innerHTML == X;
      const F1 = div1.innerHTML == O,
        F2 = div2.innerHTML == O,
        F3 = div3.innerHTML == O,
        F4 = div4.innerHTML == O,
        F5 = div5.innerHTML == O,
        F6 = div6.innerHTML == O,
        F7 = div7.innerHTML == O,
        F8 = div8.innerHTML == O,
        F9 = div9.innerHTML == O;

      if ((T1&&T2&&T3)||(T4&&T5&&T6)||(T7&&T8&&T9)||(T1&&T4&&T7)||(T2&&T5&&T8)||(T3&&T6&&T9)||(T1&&T5&&T9)||(T3&&T5&&T7)) {
        span.innerHTML = `<p>Player 1 wins</p>
        <a class="a" href="tictactoe.html">New Game</a>`;
      } else if ((F1&&F2&&F3)||(F4&&F5&&F6)||(F7&&F8&&F9)||(F1&&F4&&F7)||(F2&&F5&&F8)||(F3&&F6&&F9)||(F1&&F5&&F9)||(F3&&F5&&F7)) {
        span.innerHTML = `<p>Player 2 wins</p>`;
      }

      player1Turn = !player1Turn;
      player2Turn = !player2Turn;

      playerEl.innerHTML = player1Turn ? "Player 1's Turn" : "Player 2's Turn"
    }
  });
});
