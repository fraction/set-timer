setTimer
========

A lightweight abstraction for the JavaScript Timer API.

## Installation

Install setTimer as an [NPM package](https://www.npmjs.org/package/meantime).

```sh
npm install set-timer
```

## Usage

The `set-timer` function takes a callback function and an options object as arguments. The options are:

* **Timeout:** Number of milliseconds to wait before the first call (default 0).
* **Interval:** Number of milliseconds to wait between calls (default 0).
* **Limit:** Number of times to call callback (default 1).

```javascript
var setTimer = require('set-timer');

var timer = setTimer(function () {
  // Prints "1/Infinity", "2/Infinity", "3/Infinity", ...
  console.log(this.calls + "/" + this.options.limit);
}, {
  timeout:  5000, // Wait 5 seconds before first call.
  interval: 1000, // Wait 1 second between calls.
  limit: Infinity // Keep calling indefinitely.
});
```

You can clear the timer with `this.clear()` from inside of the callback, or `timer.clear()` after the timer has been set.

## Support

Please [open an issue](https://github.com/christianbundy/set-timer/issues/new) for questions and concerns.

## Contributing

Fork the project, commit your changes, and [open a pull request](https://github.com/christianbundy/set-timer/compare/).
