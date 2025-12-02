const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let hrs = 0, min = 0, sec = 0, ms = 0;
let StartTimer = null;

btnStart.addEventListener("click", () => {
  if (StartTimer !== null) return; // prevent multiple starts

  StartTimer = setInterval(() => {
    ms++;
    if (ms === 100) {
      sec++;
      ms = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hrs++;
      min = 0;
    }
    updateDisplay();
  }, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(StartTimer);
  StartTimer = null;
});

btnReset.addEventListener("click", () => {
  clearInterval(StartTimer);
  StartTimer = null;
  hrs = min = sec = ms = 0;
  updateDisplay();
});

function updateDisplay() {
  const phrs = hrs < 10 ? "0" + hrs : hrs;
  const pmin = min < 10 ? "0" + min : min;
  const psec = sec < 10 ? "0" + sec : sec;
  const pms  = ms < 10 ? "0" + ms : ms;

  document.querySelector(".hrs").innerText = phrs;
  document.querySelector(".min").innerText = pmin;
  document.querySelector(".sec").innerText = psec;
  document.querySelector(".ms").innerText = pms; // ✅ FIXED
}
