var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    return __awaiter(this, void 0, void 0, function* () {
        console.log("howdyyyyyyyyy!");
        const [tab] = yield chrome.tabs.query({
            active: true,
            lastFocusedWindow: true,
        });
        const response = yield chrome.tabs.sendMessage(tab.id, { greeting: "hello" });
        console.log(response);
    });
}
