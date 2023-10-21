class Chronometer {
  // Iteration 1
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // Iteration 2
  start(printTimeCallback) {
    // assign intervalId to be able to clear it later when we need to stop the timer
    this.intervalId = setInterval(() => {
      // increment by 1 second the current time
      this.currentTime += 1;

      // check if the callback exists before invoking it
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
    return this.currentTime;
  }

  // Iteration 3
  getMinutes() {
    // calculate the minutes
    this.currentTimeInMinutes = this.currentTime / 60;
    // return the numbers that have passed as integer
    return Math.floor(this.currentTimeInMinutes);
  }

  // Iteration 4
  getSeconds() {
    // calculate the remaining seconds
    this.currentRemainingSeconds = this.currentTime % 60;
    return this.currentRemainingSeconds;
  }

  // Iteration 5
  computeTwoDigitNumber(value) {
    // convert any number into a two-digits string representation
    if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }

  // Iteration 6
  stop() {
    // clear the existing interval timer
    clearInterval(this.intervalId);
  }

  // Iteration 7
  reset() {
    this.currentTime = 0;
  }

  // Iteration 8 - BONUS
  split() {
    // split time: a string showing the minutes and seconds in the "mm:ss" format
  }
}
