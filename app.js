function Stopwatch() {
  let duration = 0;
  let activeState = false;
  let timer = () => {};
  const counter = () => {
    if (!activeState) {
      clearInterval(timer);
    } else {
      duration += 0.01;
    }
  };

  this.start = () => {
    if (activeState) {
      throw new Error("The stopwatch has already started.")
    } else {
      activeState = true;
      timer = setInterval(counter, 10);
    }
  };
  this.stop = () => {
    if (activeState) {
      activeState = false;
    } else {
      throw new Error("The stopwatch has not started yet.")
    }
  };
  this.reset = () => {
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
let sw = new Stopwatch();
let display = document.getElementById("stopwatch-display");
let milli = document.getElementById("milli-display");
const formatTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  };
  return i;
};
const updateTimer = () => {
  let t = setTimeout(updateTimer, 10);
  let s = Math.floor(sw.duration);
  let hours = Math.floor(s / 3600) || 0;
  let minutes = Math.floor((s % 3600) / 60) || 0;
  let seconds = (s % 3600) % 60 || 0;
  let decimals = (sw.duration - s).toFixed(2).slice(2);
  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);
  display.textContent = hours + " : " + minutes + " : " + seconds;
  milli.textContent = " . " + decimals;
}
window.onload = updateTimer();
