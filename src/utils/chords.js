import { allNotes } from "./constants/index.js";

export const createChordsForNoteInKeyNotes = (rootNote, keyNotes, pattern) => {
    const chordIndex = keyNotes.indexOf(rootNote);
    let chordNotes = [rootNote];

    pattern.forEach((step) => {
        let idx = chordIndex + step - 1;
        idx = idx % keyNotes.length;
        const nextNote = keyNotes[idx];
        chordNotes.push(nextNote);
    });

    return chordNotes;
};

export const isMajor = (notes) => {
    const firstNote = allNotes.indexOf(notes[0]);
    const thirdNote = allNotes.indexOf(notes[1]);

    let diffInIndexes = thirdNote - firstNote + 1;
    if (diffInIndexes < 0) {
        diffInIndexes += 12;
    }

    return diffInIndexes === 5;
};

export const getChordName = (chord, suffix = "") => {
    // If the gap between the 1st and 3rd notes is 5 steps then
    const firstNote = allNotes.indexOf(chord[0]);
    const thirdNote = allNotes.indexOf(chord[1]);
    const fifthNote = allNotes.indexOf(chord[2]);

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
