var mt = {
  // Array of timers.
  timers: [],

  // Main setter function.
  set: function (options) {
    var self = this;

    options.cb    = options.cb    || function () {} ;
    options.type  = options.type  || 'timeout'      ;
    options.delay = options.delay || 0              ;
    options.limit = options.limit || Infinity       ;

    var setter;
    if (options.type === 'timeout') {
      setter = setTimeout;
    } else if (options.type === 'interval') {
      setter = setInterval;
    } else {
      return false;
    }

    var id = self.timers.length;

    var timer = setter(function () {
      if (options.limit - self.timers[id].calls++) {
        options.cb.call(timer);
      } else {
        self.clear(timer);
      }
    }, options.delay);

    timer.calls   =       0;
    timer.options = options;
    timer.clear   = function () { self.clear(timer) };

    self.timers.push(timer);
    return self.timers[self.timers.length - 1];
  },

  // Set timeout specifically.
  setTimeout: function (options) {
    var self = this;
    options.type = 'timeout';
    return self.set(options);
  },

  // Set interval speciically.
  setInterval: function (options) {
    var self = this;
    options.type = 'interval';
    return self.set(options);
  },

  // Main clear function.
  clear: function (timer) {
    var type = timer.options.type;

    if (type === 'timeout') {
      clearTimeout(timer);
    } else if (type === 'interval') {
      clearInterval(timer);
    }
  }
};

module.exports = mt;
