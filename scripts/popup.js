const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const helloBtn = document.getElementById("helloBtn");
increaseBtn === null || increaseBtn === void 0 ? void 0 : increaseBtn.addEventListener("click", increaseHalfStepPage);
decreaseBtn === null || decreaseBtn === void 0 ? void 0 : decreaseBtn.addEventListener("click", decreaseHalfStepPage);
helloBtn === null || helloBtn === void 0 ? void 0 : helloBtn.addEventListener("click", printHello);
function increaseHalfStepPage() {
    console.log("increase:");
    // for (var i = 0; i < spans.length; i++) {
    //   let note: string = spans[i].innerHTML;
    //   console.log(note);
    // spans[i].innerHTML = increaseHalfStep(note);
    // }
}
function decreaseHalfStepPage() {
    console.log("decrease:");
    // for (var i = 0; i < spans.length; i++) {
    //   let note: string = spans[i].innerHTML;
    //   console.log(note);
    // spans[i].innerHTML = decreaseHalfStep(note);
    // }
}
function printHello() {
    console.log("howdyyyyyyyyy!");
}
