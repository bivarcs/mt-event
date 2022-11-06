# mt-event
![](https://img.shields.io/npm/types/@bivarcs/mt-event)
![](https://img.shields.io/node/v/@bivarcs/mt-event)
![](https://img.shields.io/github/license/bivarcs/mt-event)

A minimal function to get common values from mouse and touch events.

## Demo
https://bivarcs.github.io/mt-event/demo/

## Installation
### Package Manager
npm: `npm i @bivarcs/emitter`  
yarn: `yarn add @bivarcs/emitter`  

### CDN
```js
<script src="https://unpkg.com/@bivarcs/mt-event/dist/js/parseMTEvent.min.js"></script>
```

## Document
- [API Documentation](https://bivarcs.github.io/mt-event/docs/) (via: [Typedoc](https://github.com/TypeStrong/typedoc))

## Usage
```typescript
addEventListener((event: MouseEvent | TouchEvent) => {
  const parsedEvent = parseMTEvent(event);

  console.log(parsedEvent);
});

/*
You can get.
{
  clientX: 0,
  clientY: 0,
  event: Object,  // original event
  pageX: 0,
  pageY: 0,
  type: 1,  // 1=mouse, 2=touch
  screenX: 0,
  screenY: 0,
}
*/
```

Usually used like this:

```typescript
import { parse as parseMTEvent } from "src/js/parse"

addEventListener((event: MouseEvent | TouchEvent) => {
  const parsedEvent = parseMTEvent(event);
  console.log(parsedEvent);
});
```

## License
MTEvent is available under the [MIT license](LICENSE.md).

The license is MIT for convenience.
Anyone can write the code, so write it yourself. (In that case, the license is free.)