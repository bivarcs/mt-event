/**
 * original event. (mouse or touch)
 */
export type OriginalEvent = MouseEvent | TouchEvent;

/**
 * original event type.  
 * Defined as:  
 * 1=mouse  
 * 2=touch
 */
export type Type = 1 | 2;

/**
 * Common data for click and touches.
 */
export type Event = {
  readonly clientX: number
  readonly clientY: number
  readonly event: OriginalEvent
  readonly pageX: number
  readonly pageY: number
  readonly screenX: number
  readonly screenY: number
  readonly type: Type
}
