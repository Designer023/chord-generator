import { stepPatterns, getNotesForSteps } from "./utils/constants/index.js";

import { createNotesForKey } from "./utils/create-notes.js";
import { createChordsForNoteInKeyNotes, getChordName, isMajor } from "./utils/chords.js";
import { getChordNotesForKeyAndChordSequence } from "./utils/constants";

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

        chords[key] = {
            root: key,
            major: majorChord,
            triads: {
                root: {
                    notes: rootChord,
                    inversions: 0,
                    major: majorChord,
                    type: "triad"
                },
                firstInversion: {
                    notes: getNotesForSteps(key, keyRoot, stepPatterns.triads.firstInversion),
                    inversions: 1,
                    major: majorChord,
                    type: "triad"
                },
                secondInversion: {
                    notes: getNotesForSteps(key, keyRoot, stepPatterns.triads.secondInversion),
                    inversions: 2,
                    major: majorChord,
                    type: "triad"
                }
            },
            sevenths: {
                root: {
                    notes: getNotesForSteps(key, keyRoot, stepPatterns.sevenths.root),
                    name: `${key} ${getChordName(rootChordSeventh)} 7th`,
                    inversions: 2,
                    major: majorChord,
                    type: "triad"
                },
                firstInversion: {
                    notes: getNotesForSteps(key, keyRoot, stepPatterns.sevenths.firstInversion),
                    name: `${key} ${getChordName(rootChord)} first inversion 7th`,
                    inversions: 2,
                    major: majorChord,
                    type: "triad"
                },
                secondInversion: {
                    notes: getNotesForSteps(key, keyRoot, stepPatterns.sevenths.secondInversion),
                    name: `${key} ${getChordName(rootChord)} second inversion 7th`,
                    inversions: 2,
                    major: majorChord,
                    type: "triad"
                },
                thirdInversion: {
                    notes: getNotesForSteps(key, keyRoot, stepPatterns.sevenths.thirdInversion),
                    name: `${key} ${getChordName(rootChord)} third inversion 7th`,
                    inversions: 2,
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

console.log(JSON.stringify(generateChordsForKey("C"), null, 4));

export default generateChordsForKey;
