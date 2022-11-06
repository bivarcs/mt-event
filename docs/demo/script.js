// click / mousedown / touchstart
var pointerdownTargetE = document.getElementsByClassName("a1")[0];

pointerdownTargetE.addEventListener("click", (event) => {
  const mtEvent = parseMTEvent(event);
  log(event, mtEvent);
});

pointerdownTargetE.addEventListener("mousedown", (event) => {
  const mtEvent = parseMTEvent(event);
  log(event, mtEvent);
});

pointerdownTargetE.addEventListener("touchstart", (event) => {
  const mtEvent = parseMTEvent(event);
  log(event, mtEvent);
});

// mousemove / touchmove
var pointermoveTargetE = document.getElementsByClassName("a1")[1];

pointermoveTargetE.addEventListener("mousemove", (event) => {
  const mtEvent = parseMTEvent(event);
  log(event, mtEvent);
});

pointermoveTargetE.addEventListener("touchmove", (event) => {
  const mtEvent = parseMTEvent(event);
  log(event, mtEvent);
});

// output log
var textareaE = document.getElementsByTagName("textarea")[0];

function log(event, mtEvent) {
  console.log(event.type, mtEvent);
  textareaE.value = [`# ${event.type}\n`, ...Object.keys(mtEvent).map((key) => `${key}: ${mtEvent[key]}`)].join("\n");
}