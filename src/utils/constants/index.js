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

export const getNoteAndOctave = (originalNotes, pattern, startingIndex = 0) => {
    const indexOfA = findFirstIndexInOcatve(originalNotes);
    const amtToShift = 7 - indexOfA;
    const normalisedNotes = shiftToA(originalNotes);

    const notes = pattern.map((item) => {
        let cursor = item - 1;

        if (item < 0) {
            cursor += 1;
        }

        let newIndex = item - 1 + amtToShift;
        while (cursor >= 7) {
            cursor -= 7;
        }

        while (cursor < 0) {
            cursor += 7;
        }
        const currentNote = originalNotes[cursor];

        let octaveChanges = 0;

        while (newIndex >= 7) {
            newIndex -= 7;
            octaveChanges += 1;
        }

        while (newIndex < 0) {
            newIndex += 7;
            octaveChanges -= 1;
        }

        const originalIndexInNewArray = normalisedNotes.indexOf(originalNotes[0]);

        let octave = startingIndex;

        if (newIndex <= originalIndexInNewArray) {
            if (item > 1) {
                octave += octaveChanges;
            }
        }
        if (newIndex > originalIndexInNewArray) {
            if (item > 1) {
                octave += octaveChanges;
            }
        }

        if (newIndex > originalIndexInNewArray) {
            if (item < 1) {
                octave += octaveChanges;
            }
        }

        if (newIndex <= originalIndexInNewArray) {
            if (item < 1) {
                octave += octaveChanges;
            }
        }

        const note = currentNote;

        return {
            note,
            relativeOctave: octave
        };
    });

    return notes;
};

export const startingShifter = (chordKeys, chordID) => {
    const startingNoteIdx = chordID - 1;

    const aIndex = findFirstIndexInOcatve(chordKeys);

    return startingNoteIdx >= aIndex ? 1 : 0;
};

export const getChordNotesForKeyAndChordSequence = (chordKeys, chordID, chordSequence) => {
    const reOrderedChords = getNotesOrderedForChord(chordKeys, chordID);

    const startingShift = startingShifter(chordKeys, chordID);

    return getNoteAndOctave(reOrderedChords, chordSequence, startingShift);
};
