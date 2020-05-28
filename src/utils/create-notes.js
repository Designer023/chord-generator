import { allNotes, majorPattern, minorPattern } from "./constants/index.js";

export const makePattern = (pattern, chordIndex) => {
    let notes = [];
    let idx = chordIndex;
    pattern.forEach((step) => {
        idx += step;
        idx = idx % 12;
        const nextNote = allNotes[idx];
        notes.push(`${nextNote}`);
    });
    return notes;
};
export const createNotesForKey = (rootNote, pattern = "major") => {
    const chordIndex = allNotes.indexOf(rootNote);
    let notes;

    if (pattern === "major") {
        notes = makePattern(majorPattern, chordIndex);
    } else if (pattern === "minor") {
        notes = makePattern(minorPattern, chordIndex);
    }

    return notes;
};
