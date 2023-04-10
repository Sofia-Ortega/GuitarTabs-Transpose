
const NOTES_SHARPS  : string[] = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const NOTES_FLATS : string [] = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
const TOTAL_NOTES_COUNT : number = 12;

const SHARP_MODE : boolean = false;
const FLAT_MODE : boolean = true;

// makes sure that index is in range
function boundIndex(index : number) : number {
    if (index >= TOTAL_NOTES_COUNT) {
        return index % TOTAL_NOTES_COUNT;
    } else if(index < 0) {
        return TOTAL_NOTES_COUNT + index;
    }

    return index;
    
}

// note: string, increase: bool, flatMode: bool
function halfStep(note : string, increase : boolean, flatMode? : boolean)  : string {
    
    if(flatMode == undefined) flatMode = false;

    // parse note
    var base : string = note[0];
    var sharp : boolean = note.includes("#");
    var flat : boolean = note.includes("b");

    // find new note
    var newNote : string = "x"; 

    if(flat || flatMode) {
        // flat case
        var str : string = base + (flat ? "b" : "");
        var index : number = NOTES_FLATS.indexOf(str);

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

function addFrillings(newBaseNote : string, oldNote : string) : string {

    var frillings : string;

    if (oldNote.includes("#") || oldNote.includes("b")) {
        // remove characters
        frillings = oldNote.substring(2)
    } else {
        frillings = oldNote.substring(1)
    }

    var newNote : string = newBaseNote + frillings;


    return newNote; 
}

function increaseHalfStep(note : string) : string {
    if(note.includes("/")) {
        var index = note.indexOf("/");
        var firstNote : string = increaseHalfStep(note.substring(0, index));
        var secondNote : string = increaseHalfStep(note.substring(index+1));

        return firstNote + "/" + secondNote;
    }

    var newBaseNote : string = halfStep(note, true, SHARP_MODE);
    return addFrillings(newBaseNote, note);
}

function decreaseHalfStep(note : string) : string {
    if(note.includes("/")) {
        var index = note.indexOf("/");
        var firstNote : string = decreaseHalfStep(note.substring(0, index));
        var secondNote : string = decreaseHalfStep(note.substring(index+1));

        return firstNote + "/" + secondNote;
    }

    var newBaseNote : string = halfStep(note, false, SHARP_MODE);
    return addFrillings(newBaseNote, note); 
}


// -------------- TESTING -------------------
var INCREASING : boolean = true;

// for(var i = 0; i < NOTES_SHARPS.length; i++) {
//     console.log(increaseHalfStep(NOTES_SHARPS[i]))
// }

// for(var i = 0; i < NOTES_SHARPS.length; i++) {
//     console.log(decreaseHalfStep(NOTES_SHARPS[i]))
// }


var testNotes = ['D', 'G', 'Bm', 'A', 'Bm', 'A/C#', 'D', 'G', 'Bm', 'A', 'D', 
    'A', 'Bm', 'A', 'G', 'D/F#', 'A', 'Bm', 'A', 'G', 'D', 'G', 'Bm', 'A', 'Bm',
    'A/C#', 'D', 'G', 'Bm', 'A', 'D', 'A', 'Bm', 'A', 'G', 'D/F#', 'A', 'Bm', 'A', 
    'G', 'Bm', 'A', 'G', 'G', 'A', 'Bm7', 'F#m', 'G', 'A', 'Bm7', 'A', 'G', 'A', 'Bm7',
     'F#m7', 'G', 'A', 'Bm7', 'A', 'G', 'A', 'Bm7', 'F#m7', 'G', 'A', 'Bm7', 'A',
      'D', 'A', 'Bm7', 'A', 'G', 'D/F#', 'A', 'Bm7', 'A', 'G', 'D', 'A', 'Bm', 'A',
       'G', 'D/F#', 'A', 'Bm7', 'A', 'G', 'G', 'A', 'Bm7', 'F#m7', 'G', 'A', 'Bm7', 'A', 'D',
        'A', 'Bm', 'A', 'G'];

for(var i = 0; i < testNotes.length; i++) {
    console.log(increaseHalfStep(testNotes[i]))
}

/*
var chordsClassName = "fciXY _Oy28";
var spans = document.getElementsByClassName(chordsClassName);

// prints out all the chord names
for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML); 
}



*/