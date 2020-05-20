export const allNotes = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

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

export const getChordNotesForKeyAndChordSequence = (chordKeys, chordID, chordSequence) => {
    const notes = [];

    chordSequence.map((item) => {
        let cursor = chordID - 1 + item - 1;
        let relativeOctave = 0;

        while (cursor >= 7) {
            cursor -= 7;
            relativeOctave += 1;
        }

        while (cursor < 0) {
            cursor += 7;
            relativeOctave -= 1;
        }
        // let cursor = allNotes.indexOf(chordKey);
        const selectedNote = chordKeys[cursor];
        notes.push({
            notes: selectedNote,
            relativeOctave: relativeOctave
        });
    });

    return notes;
};
