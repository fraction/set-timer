Meantime
========

Abstraction for Javascript timers: setTimeout, setInterval, clearTimeout, and clearInterval.

## Installation

You're currently out of luck, but in the future you'll be able to install Meantime with NPM.

```sh
npm install --save meantime
```

## Usage

### `mt.set(cb, options)`

```javascript
mt.set(function () {
  // Prints "1/Infinity", "2/Infinity", ... 
  console.log(this.calls + "/" + this.options.limit);
}, {
  type: 'interval' // Run repeatedly as an interval (default: timeout)
});
```

### `mt.setTimeout(cb, options)`

```javascript
mt.setTimeout(function () {
  // Prints "1/1"
  console.log(this.calls + "/" + this.options.limit);
}, {
  delay: 100 // Wait 100ms before calling (default: 1000)
});
```

### `mt.setInterval(cb, options)`

```javascript
mt.setInterval(function () {
  // Prints "1/1", "1/2", ..., "1/10"
  console.log(this.calls + "/" + this.options.limit);
}, {
  limit: 10,  // Only call callback 10 times (default: Infinity)
  delay: 100 // Wait 100ms before calling (default: 1000)
});
```

## Support

Please [open an issue](https://github.com/christianbundy/meantime/issues/new) for questions and concerns.

## Contributing

Fork the project, commit your changes, and [open a pull request](https://github.com/christianbundy/meantime/compare/).
