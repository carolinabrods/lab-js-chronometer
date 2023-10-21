class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // assign intervalId to be able to clear it later when we need to stop the timer
    this.intervalId = setInterval(() => {
      //  increment time by 1 every 10 milliseconds
      this.currentTime += 1; // = centiseconds

      // check if the callback exists before invoking it
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10); // execute every 10 milliseconds / 100 times per second
    return this.currentTime;
  }

  getMinutes() {
    // calculate the minutes
    // 1 current time = 10 milliseconds
    this.currentTimeInMinutes = this.currentTime / 6000;
    // return the numbers that have passed as integer
    return Math.floor(this.currentTimeInMinutes);
  }

  getSeconds() {
    // calculate the seconds portion that remains after removing the minutes
    this.currentRemainingSeconds = Math.floor(this.currentTime / 100) % 60;
    return this.currentRemainingSeconds;
  }

  getCentiseconds() {
    this.currentRemainingCentiseconds = this.currentTime % 100;
    return this.currentRemainingCentiseconds;
  }

  computeTwoDigitNumber(value) {
    // convert any number into a two-digits string representation
    if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    // clear the existing interval timer
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
