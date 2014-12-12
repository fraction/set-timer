var meantime = function (cb, options) {
  options          = options          || {};
  options.cb       = cb               || function () {};
  options.timeout  = options.timeout  || 0;
  options.interval = options.interval || 0;
  options.limit    = options.limit    || 1;

  var timer = {
    calls: 0,
    options: options,
    timeout: null,
    interval: null,
    clear: function () {
      if (typeof this.timeout !== 'null') {
        clearTimeout(this.timeout);
      }
      if (typeof this.interval !== 'null') {
        clearInterval(this.interval);
      }
    },
  };

  timer.timeout = setTimeout(function () {
    timer.interval = setInterval(function() {
      timer.calls++;
      options.cb.call(timer);
      if (options.limit - timer.calls <= 0) {
        timer.clear();
      }
    }, options.interval);
  }, options.timeout);

  return timer;
};

