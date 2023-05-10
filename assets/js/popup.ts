const increaseBtn: HTMLElement | null = document.getElementById("increaseBtn");
const decreaseBtn: HTMLElement | null = document.getElementById("decreaseBtn");
const helloBtn: HTMLElement | null = document.getElementById("helloBtn");

increaseBtn?.addEventListener("click", increaseHalfStepPage);
decreaseBtn?.addEventListener("click", decreaseHalfStepPage);
helloBtn?.addEventListener("click", printHello);

interface Message {
  transpose: number;
}

const TRANSPOSE_UP_HALF_STEP: Message = { transpose: 1 };
const TRANSPOSE_DOWN_HALF_STEP: Message = { transpose: -1 };

async function sendMessage(msg: Message) {
  console.log("attempting to send msg: ", msg);
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  const response = await chrome.tabs.sendMessage(tab.id, msg);

  console.log(response);
  return response;
}

function increaseHalfStepPage(): void {
  console.log("increase:");
  sendMessage(TRANSPOSE_UP_HALF_STEP);
}

function decreaseHalfStepPage(): void {
  console.log("decrease:");
  sendMessage(TRANSPOSE_DOWN_HALF_STEP);
}

async function printHello() {
  console.log("howdyyyyyyyyy!");
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" });

  console.log(response);
}
