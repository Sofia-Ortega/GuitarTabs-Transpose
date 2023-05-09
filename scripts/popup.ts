const increaseBtn: HTMLElement | null = document.getElementById("increaseBtn");
const decreaseBtn: HTMLElement | null = document.getElementById("decreaseBtn");
const helloBtn: HTMLElement | null = document.getElementById("helloBtn");

increaseBtn?.addEventListener("click", increaseHalfStepPage);
decreaseBtn?.addEventListener("click", decreaseHalfStepPage);
helloBtn?.addEventListener("click", printHello);

function increaseHalfStepPage(): void {
  console.log("increase:");
  // for (var i = 0; i < spans.length; i++) {
  //   let note: string = spans[i].innerHTML;
  //   console.log(note);
  // spans[i].innerHTML = increaseHalfStep(note);
  // }
}

function decreaseHalfStepPage(): void {
  console.log("decrease:");
  // for (var i = 0; i < spans.length; i++) {
  //   let note: string = spans[i].innerHTML;
  //   console.log(note);
  // spans[i].innerHTML = decreaseHalfStep(note);
  // }
}

function printHello(): void {
  console.log("howdyyyyyyyyy!");
}
