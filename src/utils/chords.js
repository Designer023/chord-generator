export const createChordsForNoteInKeyNotes = (rootNote, keyNotes, pattern) => {
    const chordIndex = keyNotes.indexOf(rootNote);
    let chordNotes = [rootNote];

    pattern.forEach((step) => {
        let idx = chordIndex + step - 1;
        idx = idx % keyNotes.length;
        const nextNote = keyNotes[idx];
        chordNotes.push(nextNote);
    });

    return chordNotes;
};
