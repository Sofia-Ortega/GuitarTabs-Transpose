// ------------------------ DOM Elements --------------------------
const increaseBtn: HTMLElement | null = document.getElementById("increaseBtn");
const decreaseBtn: HTMLElement | null = document.getElementById("decreaseBtn");
const counter: HTMLElement | null = document.getElementById("counter");

increaseBtn?.addEventListener("click", increaseHalfStepPage);
decreaseBtn?.addEventListener("click", decreaseHalfStepPage);

// ----------------------- Constants -------------------------------
interface Message {
  transpose: number;
}

const TRANSPOSE_UP_HALF_STEP: Message = { transpose: 1 };
const TRANSPOSE_DOWN_HALF_STEP: Message = { transpose: -1 };

// ------------------ Helper Function -------------------
async function sendMessageToContent(msg: Message) {
  console.log("attempting to send msg: ", msg);
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  const response = await chrome.tabs.sendMessage(tab.id, msg);

  console.log(response);
  return response;
}

// -------------------- Button Functions -------------------
function increaseHalfStepPage(): void {
  var currentValue = parseInt(counter.innerHTML);
  counter.innerHTML = (currentValue + 1).toString();

  console.log("increase:");
  sendMessageToContent(TRANSPOSE_UP_HALF_STEP);
}

function decreaseHalfStepPage(): void {
  var currentValue = parseInt(counter.innerHTML);
  counter.innerHTML = (currentValue - 1).toString();

  console.log("decrease:");
  sendMessageToContent(TRANSPOSE_DOWN_HALF_STEP);
}
