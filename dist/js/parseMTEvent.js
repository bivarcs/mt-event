/*! @bivarcs/mt-event 0.0.2 | MIT | https://github.com/bivarcs/mt-event */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.parseMTEvent = factory());
})(this, function () {
  'use strict';

  function parse(event) {
    var type;
    if ("TouchEvent" in self && event instanceof TouchEvent) {
      if (event.changedTouches.length) {
        var {
          clientX,
          clientY,
          pageX,
          pageY,
          screenX,
          screenY
        } = event.changedTouches[0];
        type = 2;
      } else {
        return null;
      }
    } else {
      var {
        clientX,
        clientY,
        pageX,
        pageY,
        screenX,
        screenY
      } = event;
      type = 1;
    }
    return {
      clientX,
      clientY,
      event,
      pageX,
      pageY,
      screenX,
      screenY,
      type
    };
  }
  return parse;
});
