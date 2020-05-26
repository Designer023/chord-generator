export const allNotes = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯"];
export const allOctaves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const triad = [3, 5];
export const seventh = [3, 5, 7];

export const chordPositions = ["I", "II", "III", "IV", "V", "VI", "VII", "I"];

export const technicalNames = [
    "Tonic",
    "Supertonic",
    "Mediant",
    "Subdominant",
    "Dominant",
    "Submediant",
    "Leading note"
];

export const majorPattern = [0, 2, 2, 1, 2, 2, 2, 1];

export const findFirstIndexInOcatve = (notes) => {
    let foundIdx = -1;

    for (let i = 0; i < allNotes.length; i++) {
        const note = allNotes[i];
        for (let j = 0; j < notes.length; j++) {
            foundIdx = notes.indexOf(note);
            if (foundIdx > -1) {
                break;
            }
        }
        if (foundIdx > -1) {
            break;
        }
    }
    return foundIdx;
};

export const shiftToA = (original) => {
    const indexOfA = findFirstIndexInOcatve(original);
    return original.slice(indexOfA).concat(original.slice(0, indexOfA));
};

export const getNotesOrderedForChord = (baseKeyNotes, chordID) => {
    return baseKeyNotes.slice(chordID - 1).concat(baseKeyNotes.slice(0, chordID - 1));
};

export const getNoteAndOctave = (originalNotes, pattern, startShift = 0) => {
    // find out where A is in the list of notes provided for the chord ["C", "D", "E", "F", "G", "A", "B"]
    const indexOfA = findFirstIndexInOcatve(originalNotes);

    // Loop through the patten provided [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const notes = pattern.map((item) => {
        // Zero the index for the cursor
        let cursor = item - 1;

        // Set the octave to be 0
        let currentOctave = startShift;

        // Positive
        if (item > 0) {
            // While the cursor is out of bounds
            // loop it back and
            currentOctave += Math.floor(cursor / 7);
            cursor = cursor % 7;

            if (cursor >= indexOfA && indexOfA !== 0) {
                currentOctave += 1;
            }
        }

        // Negative
        if (item < 0) {
            // Shift the index because -ve start on -1 just as +ve starts on +1. The 0th note on a series can never exist!
            cursor += 1;

            while (cursor < 0) {
                currentOctave -= 1;
                cursor += 7;
            }

            if (cursor >= indexOfA && indexOfA !== 0) {
                currentOctave += 1;
            }
        }

        const currentNote = originalNotes[cursor];

        const note = currentNote;

        return {
            note,
            relativeOctave: currentOctave
        };
    });

    return notes;
};

export const startingShifter = (chordKeys, chordID) => {
    const startingNoteIdx = chordID - 1;

    const aIndex = findFirstIndexInOcatve(chordKeys);

    // Shift all sequences that the starting not is after the a index except where a is the first note
    return startingNoteIdx >= aIndex && aIndex !== 0 ? 1 : 0;
};

export const getChordNotesForKeyAndChordSequence = (chordKeys, chordID, chordSequence) => {
    const reOrderedChords = getNotesOrderedForChord(chordKeys, chordID);

    const startingShift = startingShifter(chordKeys, chordID);

    return getNoteAndOctave(reOrderedChords, chordSequence, startingShift);
};
