import {
    triad,
    seventh,
    chordPositions,
    technicalNames,
    stepPatterns,
    getNotesForSteps
} from "./utils/constants/index.js";

import { createNotesForKey } from "./utils/create-notes.js";
import { createChordsForNoteInKeyNotes, getChordName } from "./utils/chords.js";

const generateChordsForKey = (key = "C") => {
    const notesForKey = createNotesForKey(key);

    return {
        key: key,
        notes: notesForKey,
        chords: {
            C: {
                triads: {
                    root: {
                        notes: getNotesForSteps(key, stepPatterns.triads.root),
                        name: "C Major"
                    },
                    firstInversion: {
                        notes: getNotesForSteps(key, stepPatterns.triads.firstInversion),
                        name: "C Major first inversion"
                    },
                    secondInversion: {
                        notes: getNotesForSteps(key, stepPatterns.triads.secondInversion),
                        name: "C Major second inversion"
                    }
                },
                sevenths: {
                    root: {
                        notes: getNotesForSteps(key, stepPatterns.sevenths.root),
                        name: "C Major 7th"
                    },
                    firstInversion: {
                        notes: getNotesForSteps(key, stepPatterns.sevenths.firstInversion),
                        name: "C Major first inversion 7th"
                    },
                    secondInversion: {
                        notes: getNotesForSteps(key, stepPatterns.sevenths.secondInversion),
                        name: "C Major second inversion 7th"
                    },
                    thirdInversion: {
                        notes: getNotesForSteps(key, stepPatterns.sevenths.thirdInversion),
                        name: "C Major third inversion 7th"
                    }
                }
            }
        }
    };
    // const keyChords = [];

    // notes.map((note, index) => {
    //     const chordNotesTriad = createChordsForNoteInKeyNotes(note, notes, triad);

    //     const chordNotesSeventh = createChordsForNoteInKeyNotes(note, notes, seventh);

    //     const chordType = getChordName(chordNotesTriad);
    //     let chordPositionsString = chordPositions[index];
    //     let chordTechnicalName = technicalNames[index];

    //     if (chordType !== "Major") {
    //         chordPositionsString = chordPositionsString.toLowerCase();
    //     }
    //     if (chordType === "diminished") {
    //         chordPositionsString = `${chordPositionsString}º`;
    //     }

    //     keyChords.push({
    //         rootNote: note,
    //         baseName: `${note} ${chordType}`, // Name it on the triad name for now
    //         chordPosition: chordPositionsString,
    //         technicalName: chordTechnicalName,
    //         chords: {
    //             triad: {
    //                 name: `${note} ${chordType}`,
    //                 notes: chordNotesTriad
    //             },
    //             seventh: {
    //                 name: `${note} ${chordType} seventh`,
    //                 notes: chordNotesSeventh
    //             },
    //             inversions: [
    //                 {
    //                     thirdInversions: [
    //                         // TODO: Create dynamic functions of inversions!
    //                     ]
    //                 }
    //             ]
    //         }
    //     });
    // });
    // return keyChords;
};

console.log(JSON.stringify(generateChordsForKey("C"), null, 4));

export default generateChordsForKey;
