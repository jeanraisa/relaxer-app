const container = document.querySelector(".container");
const text = document.getElementById("text");

const totalTime = 7500; //(totalTime = 7.5seconds= 7500 millsecond)
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breath in";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breath out";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
