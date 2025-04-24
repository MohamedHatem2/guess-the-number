let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
document.querySelector(".score span").textContent = score;
let highScore = 0;
document.querySelector(".highscore span").textContent = highScore;
document.querySelector(".check").addEventListener("click", function () {
  let input = Number(document.querySelector(".guess").value);
  if (!input || isNaN(input)) {
    document.querySelector(".status span").textContent = "⛔ No Number!";
    score--;
  } else if (input === secretNumber) {
    document.querySelector(".status span").textContent = "🎉 Correct Number!";
    document.querySelector(".secNum").textContent = secretNumber;
    document.querySelector(".check").disabled = true;
    document.querySelector("#winSound").play();
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore span").textContent = highScore;
    }
  } else if (input > 20 || input < 0) {
    document.querySelector(".status span").textContent =
      "Number is out of range!";
    score--;
  } else if (input > secretNumber) {
    document.querySelector(".status span").textContent = "📈 Too High!";
    score--;
  } else if (input < secretNumber) {
    document.querySelector(".status span").textContent = "📉 Too Low!";
    score--;
  }

  document.querySelector(".score span").textContent = score;

  if (score <= 0) {
    document.querySelector(".status span").textContent =
      "😭 You lost the game!";
    document.querySelector(".score span").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score span").textContent = score;
  document.querySelector(".status span").textContent = "Start guessing...";
  document.querySelector(".secNum").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
  document.querySelector("#winSound").pause();
  document.querySelector("#winSound").currentTime = 0;
});
