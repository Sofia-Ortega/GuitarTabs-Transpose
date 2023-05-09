export var spans: HTMLCollectionOf<Element>;

export function setSpans(s: HTMLCollectionOf<Element>) {
  spans = s;
}

export function getSpans(className: string): HTMLCollectionOf<Element> {
  return document.getElementsByClassName(className);
}
