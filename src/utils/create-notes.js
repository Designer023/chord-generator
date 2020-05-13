import { allNotes, majorPattern } from "./constants/index.js";

export const createNotesForKey = (rootNote) => {
    const chordIndex = allNotes.indexOf(rootNote);
    let notes = [];
    let idx = chordIndex;

    majorPattern.forEach((step) => {
        idx += step;
        idx = idx % 12;
        const nextNote = allNotes[idx];
        notes.push(`${nextNote}`);
    });
    return notes;
};
