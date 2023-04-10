
const NOTES_SHARPS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const NOTES_FLATS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

function increaseHalfStep(note, flatMode=false) {

    const NOTES = NOTES_SHARPS;
    if(note.includes("b")) notes = NOTES_FLATS;

    // parse note
    var base = note[0];
    var sharp = note.includes("#");
    var flat = note.includes("b");

    // find new note
    var newNote = "x"; 

    if(flat || flatMode) {
        // flat case
        var str = base + flat ? "b" : "" 
        var index = NOTES_FLATS.findIndex(str) % NOTES_FLATS.length;
        newNote = NOTES_FLATS[index+1];
    } else {
        // sharp case
        var str = base + (sharp ? "#" : "");
        var index = NOTES_SHARPS.findIndex(str) % NOTES_SHARPS.length;
        newNote = NOTES_SHARPS[index + 1]
    }

    return newNote;

}





/*
var chordsClassName = "fciXY _Oy28";
var spans = document.getElementsByClassName(chordsClassName);

// prints out all the chord names
for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML); 
}



*/