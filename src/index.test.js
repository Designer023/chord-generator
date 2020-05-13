import generateChordsForKey from "./index.js";

const exampleKeyC = {
    key: "C",
    notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
    chords: {
        C: {
            triads: {
                root: {
                    notes: ["C", "E", "G"],
                    name: "C Major"
                },
                firstInversion: {
                    notes: ["E", "G", "C"],
                    name: "C Major first inversion"
                },
                secondInversion: {
                    notes: ["G", "C", "E"],
                    name: "C Major second inversion"
                }
            },
            sevenths: {
                root: {
                    notes: ["C", "E", "G", "B"],
                    name: "C Major 7th"
                },
                firstInversion: {
                    notes: ["E", "G", "B", "C"],
                    name: "C Major first inversion 7th"
                },
                secondInversion: {
                    notes: ["G", "B", "C", "E"],
                    name: "C Major second inversion 7th"
                },
                thirdInversion: {
                    notes: ["B", "C", "E", "G"],
                    name: "C Major third inversion 7th"
                }
            }
        }
    }
};

describe("Test whole thing!", function () {
    test("Default Key of C", () => {
        expect(generateChordsForKey()).toStrictEqual(exampleKeyC);
    });

    test("Key of C", () => {
        expect(generateChordsForKey("C")).toStrictEqual(exampleKeyC);
    });
});
