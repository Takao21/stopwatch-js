function Stopwatch() {
  let duration = 0;
  let activeState = false;
  let timer = function() {};
  const counter = function() {
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
