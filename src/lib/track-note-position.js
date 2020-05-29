export const trackNotePosition = (notePosition, indexOfA) => {
    // Positive
    if (notePosition.positionChange > 0) {
        // While the cursor is out of bounds
        // loop it back and
        notePosition.currentOctave += Math.floor(notePosition.cursor / 7);
        notePosition.cursor = notePosition.cursor % 7;

        if (notePosition.cursor >= indexOfA && indexOfA !== 0) {
            notePosition.currentOctave += 1;
        }
    }

    // Negative
    if (notePosition.positionChange < 0) {
        // Shift the index because -ve start on -1 just as +ve starts on +1. The 0th note on a series can never exist!
        notePosition.cursor += 1;

        while (notePosition.cursor < 0) {
            notePosition.currentOctave -= 1;
            notePosition.cursor += 7;
        }

        if (notePosition.cursor >= indexOfA && indexOfA !== 0) {
            notePosition.currentOctave += 1;
        }
    }

    return notePosition;
};
