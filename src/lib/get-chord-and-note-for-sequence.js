import { getNotesOrderedForChord } from "./get-notes-ordered-for-chord.js";
import { startingShifter } from "./get-starting-shifter.js";
import { getNoteAndOctave } from "./get-note-and-octave.js";

export const getChordNotesForKeyAndChordSequence = (chordKeys, chordID, chordSequence) => {
    const reOrderedChords = getNotesOrderedForChord(chordKeys, chordID);

    const startingShift = startingShifter(chordKeys, chordID);

    return getNoteAndOctave(reOrderedChords, chordSequence, startingShift);
};
