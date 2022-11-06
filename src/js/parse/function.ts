import { OriginalEvent, Type, Event } from "../types"

/**
 * Returns common data for click and touches.  
 * In the case of touch, the target is the first finger.  
 * Returns null if data retrieval fails.  
 * Parse MouseEvent or TouchEvent data and return only the necessary data.
 */
export function parse(event: OriginalEvent): null | Event {
  var type: Type;

  if ("TouchEvent" in self && event instanceof TouchEvent) {
    if (event.changedTouches.length) {
      var { clientX, clientY, pageX, pageY, screenX, screenY } = event.changedTouches[0];
      type = 2;

    } else {
      return null;

    }
  } else {
    var { clientX, clientY, pageX, pageY, screenX, screenY } = event as MouseEvent;
    type = 1;
  }

  return { clientX, clientY, event, pageX, pageY, screenX, screenY, type };
}