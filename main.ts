
const NOTES_SHARPS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const NOTES_FLATS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
const TOTAL_NOTES_COUNT = 12;

const SHARP_MODE = false;
const FLAT_MODE = true;

// makes sure that index is in range
function boundIndex(index) {
    if (index >= TOTAL_NOTES_COUNT) {
        return index % TOTAL_NOTES_COUNT;
    } else if(index < 0) {
        return TOTAL_NOTES_COUNT + index;
    }

    return index;
    
}

// note: string, increase: bool, flatMode: bool
function halfStep(note : string, increase : boolean, flatMode? : boolean)  : string{
    
    if(flatMode == undefined) flatMode = false;

    // parse note
    var base = note[0];
    var sharp = note.includes("#");
    var flat = note.includes("b");

    // find new note
    var newNote = "x"; 

    if(flat || flatMode) {
        // flat case
        var str = base + (flat ? "b" : "");
        var index = NOTES_FLATS.indexOf(str);

        if(index == -1) throw new Error("in half step, note not found")
        
        increase ? index++ : index--;
        index = boundIndex(index);

        newNote = NOTES_FLATS[index];
    } else {
        // sharp case
        var str = base + (sharp ? "#" : "");
        var index = NOTES_SHARPS.indexOf(str);

        if(index == -1) throw new Error("in half step, note not found")

        increase ? index++ : index--;
        index = boundIndex(index);

        newNote = NOTES_SHARPS[index];
    }

    return newNote;

}


function increaseHalfStep(note : string) : string {
    return halfStep(note, true, SHARP_MODE)
}

function decreaseHalfStep(note : string) : string {
    return halfStep(note, false, SHARP_MODE)
}

var INCREASING = true;

for(var i = 0; i < NOTES_SHARPS.length; i++) {
    console.log(increaseHalfStep(NOTES_SHARPS[i]))
}

console.log("---------------")

for(var i = 0; i < NOTES_SHARPS.length; i++) {
    console.log(decreaseHalfStep(NOTES_SHARPS[i]))
}



/*
var chordsClassName = "fciXY _Oy28";
var spans = document.getElementsByClassName(chordsClassName);

// prints out all the chord names
for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML); 
}



*/