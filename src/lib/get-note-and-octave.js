import { findFirstIndexInOcatve } from "./find-first-index-in-octave.js";
import { trackNotePosition } from "./track-note-position.js";

export const getNoteAndOctave = (originalNotes, pattern, startShift = 0) => {
    // find out where A is in the list of notes provided for the chord ["C", "D", "E", "F", "G", "A", "B"]
    const indexOfA = findFirstIndexInOcatve(originalNotes);

    // Loop through the patten provided [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const notes = pattern.map((item) => {
        let notePosition = {
            cursor: item - 1, // Zero the index for the cursor
            currentOctave: startShift, // Set the octave to be 0
            positionChange: item
        };

        const newNotePosition = trackNotePosition(notePosition, indexOfA);

        const note = originalNotes[newNotePosition.cursor];

        return {
            note,
            relativeOctave: newNotePosition.currentOctave
        };
    });

    return notes;
};
