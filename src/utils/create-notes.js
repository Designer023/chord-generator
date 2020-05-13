import { chords, majorPattern } from "./constants/index.js";

export const createNotesForKey = (rootNote) => {
    const chordIndex = chords.indexOf(rootNote);
    let notes = [];
    let idx = chordIndex;

    majorPattern.forEach((step) => {
        idx += step;
        idx = idx % 12;
        const nextNote = chords[idx];
        notes.push(`${nextNote}`);
    });
    return notes;
};
