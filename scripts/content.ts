function getSpans(): HTMLCollectionOf<Element> {
  const chordsClassName: string = "fciXY _Oy28";
  return document.getElementsByClassName(chordsClassName);
}

function printChords() {
  var spans = getSpans();
  // prints out all the chord names
  for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting === "hello") {
    printChords();
    sendResponse({ farewell: "goodbye" });
  }
});
