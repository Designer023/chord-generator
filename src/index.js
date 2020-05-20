import { createNotesForKey } from "./utils/create-notes.js";
import { getChordName, isMajor } from "./utils/chords.js";
import { getChordNotesForKeyAndChordSequence } from "./utils/constants/index.js";

import filterUnique from "./utils/filters/filter-unique.js";

const allChordsForKeyNotes = (keyNotes, keyRoot) => {
    const chords = {};
    keyNotes.map((key, index) => {
        const uniqueNotes = keyNotes.filter(filterUnique);
        const rootChord = getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [1, 3, 5]);
        const rootChordSeventh = getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [
            1,
            3,
            5,
            7
        ]);
        const majorChord = isMajor(rootChord);
        const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "I"];
        const romanNumeral = numerals[index];
        chords[index + 1] = {
            root: keyRoot,
            sequence: majorChord ? romanNumeral : romanNumeral.toLowerCase(),
            major: majorChord,
            triads: {
                root: {
                    notes: rootChord,
                    inversions: 0,
                    major: majorChord,
                    type: "triad"
                },
                firstInversion: {
                    notes: getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [3, 5, 8]),
                    inversions: 1,
                    major: majorChord,
                    type: "triad"
                },
                secondInversion: {
                    notes: getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [5, 8, 10]),
                    inversions: 2,
                    major: majorChord,
                    type: "triad"
                }
            },
            sevenths: {
                root: {
                    notes: rootChordSeventh,
                    name: `${key} ${getChordName(rootChordSeventh)} 7th`,
                    inversions: 0,
                    major: majorChord,
                    type: "triad"
                },
                firstInversion: {
                    notes: getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [
                        3,
                        5,
                        7,
                        8
                    ]),
                    name: `${key} ${getChordName(rootChord)} first inversion 7th`,
                    inversions: 1,
                    major: majorChord,
                    type: "triad"
                },
                secondInversion: {
                    notes: getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [
                        5,
                        7,
                        8,
                        10
                    ]),
                    name: `${key} ${getChordName(rootChord)} second inversion 7th`,
                    inversions: 2,
                    major: majorChord,
                    type: "triad"
                },
                thirdInversion: {
                    notes: getChordNotesForKeyAndChordSequence(uniqueNotes, 1 + index, [
                        7,
                        8,
                        10,
                        12
                    ]),
                    name: `${key} ${getChordName(rootChord)} third inversion 7th`,
                    inversions: 3,
                    major: majorChord,
                    type: "triad"
                }
            }
        };
    });

    return chords;
};

const generateChordsForKey = (key = "C") => {
    const notesForKey = createNotesForKey(key);

    const generatedChords = allChordsForKeyNotes(notesForKey, "C");

    return generatedChords;
};

export default generateChordsForKey;
