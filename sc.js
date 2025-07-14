let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;

let intervalId = setInterval(function () {
  countdown--;
  timerEl.textContent = countdown;
  if (countdown === 0) {
    timerEl.textContent = "💥 BOOM!";
    clearInterval(intervalId);
  }
}, 1000);

defuserEl.addEventListener("keydown", function (event) {
  if (
    event.key === "Enter" &&
    defuserEl.value.trim().toLowerCase() === "defuse" &&
    countdown > 0
  ) {
    timerEl.textContent = "✅ You did it!";
    clearInterval(intervalId);
  }
});
