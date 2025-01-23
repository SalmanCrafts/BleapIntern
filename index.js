function toggleAnswer(button) {
  const answer = button.parentElement.nextElementSibling;
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    button.textContent = "-";
  } else {
    answer.style.display = "none";
    button.textContent = `+`;
  }
}

const Resultout = document.getElementById("time_show");
const SignupButton = document.getElementById("timeout_Register_btn");
const duration = 120;
let remainingTime = duration;
const messageElement = document.getElementById("message");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

const countdown = setInterval(() => {
  Resultout.textContent = formatTime(remainingTime);

  if (remainingTime <= 0) {
    clearInterval(countdown);
    Resultout.textContent = "00:00";
    messageElement.textContent = "Time's up!";
    SignupButton.style.display = "none";
  } else {
    remainingTime--;
  }
}, 1000);
