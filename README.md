setTimer
========

A lightweight abstraction for the JavaScript Timer API.

## Installation

Install setTimer as an [NPM package](https://www.npmjs.org/package/set-timer).

```sh
npm install set-timer
```

## Usage

The `set-timer` function takes a callback function and an options object as arguments. The options are:

* **Timeout:** Number of milliseconds to wait before the first call, default 0.
* **Interval:** Number of milliseconds to wait between calls, default 0.
* **Limit:** Number of times to call callback, default 1. Use `Infinity` to call indefinitely.

```javascript
var setTimer = require('set-timer');

// Prints "1", "2", "3", ..., "10", "I've been cleared!"
var timer = setTimer(function () {
  console.log(this.calls);
}, {
  timeout:  5000,         // Wait 5 seconds before first call.
  interval: 1000,         // Wait 1 second between calls.
  limit: 10,              // Call callback 10 times.
  onClear: function () {  // Call after timer is cleared.
    console.log("I've been cleared!");
  }
});
```

Timers are automatically cleared after their call count reaches `options.limit`, but you can clear the timer manually `this.clear()` from inside of scope the callback or `timer.clear()` in the scope of the timer.

## Support

Please [open an issue](https://github.com/christianbundy/set-timer/issues/new) for questions and concerns.

## Contributing

Fork the project, commit your changes, and [open a pull request](https://github.com/christianbundy/set-timer/compare/).
