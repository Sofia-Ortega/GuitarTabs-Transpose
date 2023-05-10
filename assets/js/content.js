// -------------------- Constants -----------------------
const NOTES_SHARPS = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
];
const NOTES_FLATS = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
];
const TOTAL_NOTES_COUNT = 12;
const SHARP_MODE = false;
const FLAT_MODE = true;
// -------------------- Transpose Logic -------------------
// makes sure that index is in range
function boundIndex(index) {
    if (index >= TOTAL_NOTES_COUNT) {
        return index % TOTAL_NOTES_COUNT;
    }
    else if (index < 0) {
        return TOTAL_NOTES_COUNT + index;
    }
    return index;
}
// note: string, increase: bool, flatMode: bool
function halfStep(note, increase, flatMode) {
    if (flatMode == undefined)
        flatMode = false;
    // parse note
    var base = note[0];
    var sharp = note.includes("#");
    var flat = note.includes("b");
    // find new note
    var newNote = "x";
    if (flat || flatMode) {
        // flat case
        var str = base + (flat ? "b" : "");
        var index = NOTES_FLATS.indexOf(str);
        if (index == -1)
            throw new Error("in half step, note not found");
        increase ? index++ : index--;
        index = boundIndex(index);
        newNote = NOTES_FLATS[index];
    }
    else {
        // sharp case
        var str = base + (sharp ? "#" : "");
        var index = NOTES_SHARPS.indexOf(str);
        if (index == -1)
            throw new Error("in half step, note not found");
        increase ? index++ : index--;
        index = boundIndex(index);
        newNote = NOTES_SHARPS[index];
    }
    return newNote;
}
function addFrillings(newBaseNote, oldNote) {
    var frillings;
    if (oldNote.includes("#") || oldNote.includes("b")) {
        // remove characters
        frillings = oldNote.substring(2);
    }
    else {
        frillings = oldNote.substring(1);
    }
    var newNote = newBaseNote + frillings;
    return newNote;
}
function increaseHalfStep(note) {
    if (note.includes("/")) {
        var index = note.indexOf("/");
        var firstNote = increaseHalfStep(note.substring(0, index));
        var secondNote = increaseHalfStep(note.substring(index + 1));
        return firstNote + "/" + secondNote;
    }
    var newBaseNote = halfStep(note, true, SHARP_MODE);
    return addFrillings(newBaseNote, note);
}
function decreaseHalfStep(note) {
    if (note.includes("/")) {
        var index = note.indexOf("/");
        var firstNote = decreaseHalfStep(note.substring(0, index));
        var secondNote = decreaseHalfStep(note.substring(index + 1));
        return firstNote + "/" + secondNote;
    }
    var newBaseNote = halfStep(note, false, SHARP_MODE);
    return addFrillings(newBaseNote, note);
}
// ------------------- DOM ------------------------------
function getSpans() {
    const chordsClassName = "fciXY _Oy28";
    return document.getElementsByClassName(chordsClassName);
}
function printChords() {
    var spans = getSpans();
    // prints out all the chord names
    for (var i = 0; i < spans.length; i++) {
        console.log(spans[i].innerHTML);
    }
}
function transposePageUp() {
    console.log("Transposing Up:");
    // printChords();
    var spans = getSpans();
    for (var i = 0; i < spans.length; i++) {
        spans[i].innerHTML = increaseHalfStep(spans[i].innerHTML);
    }
}
function transposePageDown() {
    console.log("Transposing Down:");
    var spans = getSpans();
    for (var i = 0; i < spans.length; i++) {
        spans[i].innerHTML = decreaseHalfStep(spans[i].innerHTML);
    }
}
// ------------------------ Communication ----------------------
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.greeting === "hello") {
        console.log("howdy");
        sendResponse({ farewell: "goodbye" });
    }
    if (request.transpose === 1) {
        transposePageUp();
        sendResponse({ status: "success" });
    }
    else if (request.transpose === -1) {
        transposePageDown();
        sendResponse({ status: "success" });
    }
});
