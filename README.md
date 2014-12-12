setTimer
========

A lightweight abstraction for the JavaScript Timer API.

## Installation

Install setTimer as an [NPM package](https://www.npmjs.org/package/set-timer).

```sh
npm install set-timer
```

## Usage

The `setTimer` function takes a callback function and an optional options object as arguments.

```javascript
var setTimer = require('set-timer');

setTimer(function() {
  console.log("I'm called immediately!");
});
```

The options are:

* **Timeout:** Number of milliseconds to wait before the first call (default: `0`).
* **Limit:** Number of times to call callback (default: `1`). Use `Infinity` to call indefinitely.
* **Interval:** Number of milliseconds to wait between calls (default: `0`). Ignored unless `limit > 1`.
* **onClear:** Function to call after timer has been cleared (default: `Function.prototype`).

```javascript
var setTimer = require('set-timer');

var timer = setTimer(function () {
  console.log("I've been called " + this.calls + " times!");
}, {
  timeout:  5000,         // Wait 5 seconds before first call.
  limit: 10,              // Call callback 10 times.
  interval: 1000,         // Wait 1 second between calls.
  onClear: function () {  // Call after timer is cleared.
    console.log("Cleared!");
  }
});
```

Timers are automatically cleared after their call count reaches `options.limit`, but you can clear the timer manually `this.clear()` from inside of scope the callback or `timer.clear()` in the scope of the timer.

## Support

Please [open an issue](https://github.com/fraction/set-timer/issues/new) for questions and concerns.

## Contributing

Fork the project, commit your changes, and [open a pull request](https://github.com/fraction/set-timer/compare/).
