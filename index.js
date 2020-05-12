
const chords = [
"C",
"C♯",
"D",
"D♯",
"E",
"F",
"F♯",
"G",
"G♯",
"A",
"A♯",
"B"
];

const triad = [3, 5];
const seventh = [3, 5, 7];

const chordPositions = ["I", "II", "III", "IV", "V", "VI", "VII"];
const technicalNames = [
"Tonic",
"Supertonic",
"Mediant",
"Subdominant",
"Dominant",
"Submediant",
"Leading note"
];

const pattern = [0, 2, 2, 1, 2, 2, 2];


const baseOctave = 3;

const createNotesForKey = (rootNote) => {
chordIndex = chords.indexOf(rootNote);
let notes = [];
let idx = chordIndex;
pattern.forEach((step) => {
    idx += step;
    idx = idx % 12;
    constNextNote = chords[idx];
    notes.push(`${constNextNote}`);
});
return notes;
};

const createChordsForNoteInKeyNotes = (rootNote, keyNotes, pattern) => {
chordIndex = keyNotes.indexOf(rootNote);
let chordNotes = [rootNote];

pattern.forEach((step) => {
    let idx = chordIndex + step - 1;
    idx = idx % keyNotes.length;
    const nextNote = keyNotes[idx];
    chordNotes.push(nextNote);
});

return chordNotes;
};

const getChordName = (chord, suffix = "") => {
// If the gap between the 1st and 3rd notes is 5 steps then
const firstNote = chords.indexOf(chord[0]);
const thirdNote = chords.indexOf(chord[1]);
const fifthNote = chords.indexOf(chord[2]);

let diffInIndexes = thirdNote - firstNote + 1;
if (diffInIndexes < 0) {
    diffInIndexes += 12;
}

let diffInIndexeFifth = fifthNote - thirdNote + 1;
if (diffInIndexeFifth < 0) {
    diffInIndexeFifth += 12;
}

let type = "";
// see: https://www.mymusictheory.com/for-students/grade-6/191-c6a-naming-chords
if (diffInIndexes === 5) {
    if (diffInIndexeFifth === 5) {
    type = "augmented";
    } else {
    type = "Major";
    }
} else {
    if (diffInIndexeFifth === 4) {
    type = "diminished";
    } else {
    type = "minor";
    }
}

return `${type}`;
};

const shiftArray = (arr, direction, n) => {
var times = n > arr.length ? n % arr.length : n;
return arr.concat(arr.splice(0, direction > 0 ? arr.length - times : times));
};

const generateChordsForKey = (key = "C") => {
const notes = createNotesForKey(key);

const keyChords = [];

notes.map((note, index) => {
    const chordNotesTriad = createChordsForNoteInKeyNotes(note, notes, triad);
    const chordNotesSeventh = createChordsForNoteInKeyNotes(
    note,
    notes,
    seventh
    );

    const chordType = getChordName(chordNotesTriad);
    let chordPositionsString = chordPositions[index];
    let chordTechnicalName = technicalNames[index];

    if (chordType !== "Major") {
    chordPositionsString = chordPositionsString.toLowerCase();
    }
    if (chordType === "diminished") {
    chordPositionsString = `${chordPositionsString}º`;
    }

    keyChords.push({
    rootNote: note,
    baseName: `${note} ${chordType}`, // Name it on the triad name for now
    chordPosition: chordPositionsString,
    technicalName: chordTechnicalName,
    chords: {
        triad: {
        name: `${note} ${chordType}`,
        notes: chordNotesTriad
        },
        seventh: {
        name: `${note} ${chordType} seventh`,
        notes: chordNotesSeventh
        },
        inversions: [
        {
            thirdInversions: [
            // TODO: Create dynamic functions of inversions!
            ]
        }
        ]
    }
    });
});
return keyChords;
};

console.clear();
console.log(generateChordsForKey("C"));