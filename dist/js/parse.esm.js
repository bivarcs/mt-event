/*! @bivarcs/mt-event 0.0.1 | MIT | https://github.com/bivarcs/mt-event */
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
export { parse as default };
