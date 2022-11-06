/**
 * original event. (mouse or touch)
 */
declare type OriginalEvent = MouseEvent | TouchEvent;
/**
 * original event type.
 * Defined as:
 * 1=mouse
 * 2=touch
 */
declare type Type = 1 | 2;
/**
 * Common data for click and touches.
 */
declare type Event = {
    readonly clientX: number;
    readonly clientY: number;
    readonly event: OriginalEvent;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly type: Type;
};

/**
 * Returns common data for click and touches.
 * In the case of touch, the target is the first finger.
 * Returns null if data retrieval fails.
 * Parse MouseEvent or TouchEvent data and return only the necessary data.
 */
declare function parse(event: OriginalEvent): null | Event;

export { parse };
