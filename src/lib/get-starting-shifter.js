import { findFirstIndexInOcatve } from "./find-first-index-in-octave.js";

export const startingShifter = (chordKeys, chordID) => {
    const startingNoteIdx = chordID - 1;

    const aIndex = findFirstIndexInOcatve(chordKeys);

    // Shift all sequences that the starting not is after the a index except where a is the first note
    return startingNoteIdx >= aIndex && aIndex !== 0 ? 1 : 0;
};
