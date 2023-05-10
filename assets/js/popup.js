var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ------------------------ DOM Elements --------------------------
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counter = document.getElementById("counter");
increaseBtn === null || increaseBtn === void 0 ? void 0 : increaseBtn.addEventListener("click", increaseHalfStepPage);
decreaseBtn === null || decreaseBtn === void 0 ? void 0 : decreaseBtn.addEventListener("click", decreaseHalfStepPage);
const TRANSPOSE_UP_HALF_STEP = { transpose: 1 };
const TRANSPOSE_DOWN_HALF_STEP = { transpose: -1 };
// ------------------ Helper Function -------------------
function sendMessageToContent(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("attempting to send msg: ", msg);
        const [tab] = yield chrome.tabs.query({
            active: true,
            lastFocusedWindow: true,
        });
        const response = yield chrome.tabs.sendMessage(tab.id, msg);
        console.log(response);
        return response;
    });
}
// -------------------- Button Functions -------------------
function increaseHalfStepPage() {
    var currentValue = parseInt(counter.innerHTML);
    counter.innerHTML = (currentValue + 1).toString();
    console.log("increase:");
    sendMessageToContent(TRANSPOSE_UP_HALF_STEP);
}
function decreaseHalfStepPage() {
    var currentValue = parseInt(counter.innerHTML);
    counter.innerHTML = (currentValue - 1).toString();
    console.log("decrease:");
    sendMessageToContent(TRANSPOSE_DOWN_HALF_STEP);
}
