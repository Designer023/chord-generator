export const getNotesOrderedForChord = (baseKeyNotes, chordID) => {
    return baseKeyNotes.slice(chordID - 1).concat(baseKeyNotes.slice(0, chordID - 1));
};
