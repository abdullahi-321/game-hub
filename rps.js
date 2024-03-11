const options = document.querySelectorAll(".option");
const playerEl = document.querySelector("#playerEl");
const computerEl = document.querySelector("#computerEl");
const winEl = document.querySelector("h3");

let computerOption = "";
let playerOption = "";

options.forEach((option) => {
  option.addEventListener("click", () => {
    const num = Math.floor(Math.random() * 3 + 1);
    if (num == 1) {
      computerOption = "rock";
    } else if (num == 2) {
      computerOption = "paper";
    } else if (num == 3) {
      computerOption = "scissors";
    }
    console.log(computerOption);
    if (option.classList.contains("rock")) {
      playerOption = "rock";
    } else if (option.classList.contains("paper")) {
      playerOption = "paper";
    } else if (option.classList.contains("scissors")) {
      playerOption = "scissors";
    }
    if (computerOption == playerOption) {
      winEl.innerHTML = "draw";
    } else if (
      (computerOption == "paper" && playerOption == "scissors") ||
      (computerOption == "rock" && playerOption == "paper") ||
      (computerOption == "scissors" && playerOption == "rock")
    ) {
      winEl.innerHTML = "win";
    } else {
      winEl.innerHTML = "lose";
    }

    playerEl.innerHTML = `
        <img src="assets/rpspics/${playerOption}.jpg" alt=""><h2>Player</h2>
        `;
    computerEl.innerHTML = `
        <img src="assets/rpspics/${computerOption}.jpg" alt=""><h2>Computer</h2>
        `;
    document.querySelector("main").style.display = "none";
    document.querySelector("section").style.display = "flex";

    setTimeout(()=>{window.addEventListener('click', ()=>{
        location.reload()
    })}, 100)
  });
});
