import { createNotesForKey } from "./lib/create-notes.js";
import { allChordsForKeyNotes } from "./lib/chord-for-key-notes.js";

const generateChordsForKey = (key = "C", pattern = "major") => {
    const notesForKey = createNotesForKey(key, pattern);

    const generatedChords = allChordsForKeyNotes(notesForKey, "C");

    return generatedChords;
};

export default generateChordsForKey;
