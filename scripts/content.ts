var chordsClassName: string = "fciXY _Oy28";
var spans: HTMLCollectionOf<Element> =
  document.getElementsByClassName(chordsClassName);

// prints out all the chord names
for (var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}
