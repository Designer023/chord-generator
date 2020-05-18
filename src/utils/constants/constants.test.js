import {
    createKeyStepsFromPattern,
    majorPattern,
    getNotesForSteps,
    getChordNotesForKeyAndChordSequence
} from "./index";

// test("Major triad", () => {
//     expect(createKeyStepsFromPattern([1, 3, 5], majorPattern)).toStrictEqual([
//         { steps: 0 },
//         { steps: 4 },
//         { steps: 7 }
//     ]);
// });

// test("Negative test triad", () => {
//     expect(createKeyStepsFromPattern([1, 10], majorPattern)).toStrictEqual([
//         { steps: 0 },
//         { steps: 14 }
//     ]);
// });

// test("C", () => {
//     expect(getNotesForSteps("C", "C",[{ steps: 0 }, { steps: 4 }, { steps: 7 }])).toStrictEqual([
//         "C",
//         "E",
//         "G"
//     ]);
// });

// test("C 7", () => {
//     expect(
//         getNotesForSteps("C", "C", [{ steps: 0 }, { steps: 4 }, { steps: 7 }, { steps: 11 }])
//     ).toStrictEqual(["C", "E", "G", "B"]);
// });

// test("C 7 third inversion", () => {
//     expect(
//         getNotesForSteps("C", "C",[{ steps: 11 }, { steps: 12 }, { steps: 16 }, { steps: 19 }])
//     ).toStrictEqual(["B", "C", "E", "G"]);
// });

// test("Checking step around", () => {
//     expect(
//         getNotesForSteps("G", "C", [
//             { steps: 0 },
//             { steps: 1 },
//             { steps: 2 },
//             { steps: 3 },
//             { steps: 4 }
//         ])
//     ).toStrictEqual(["G", "G♯", "A", "A♯", "B"]);
// });

// test("Checking flow around 2", () => {
//     expect(
//         getNotesForSteps("A", "C",[
//             { steps: 0 },
//             { steps: -1 },
//             { steps: -2 },
//             { steps: -3 },
//             { steps: -4 }
//         ])
//     ).toStrictEqual(["A", "G♯", "G", "F♯", "F"]);
// });

test("C I Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [1, 3, 5])
    ).toStrictEqual(["C", "E", "G"]);
});

test("C II Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 2, [1, 3, 5])
    ).toStrictEqual(["D", "F", "A"]);
});

test("C III Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 3, [1, 3, 5])
    ).toStrictEqual(["E", "G", "B"]);
});

test("C VII Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 7, [1, 3, 5])
    ).toStrictEqual(["B", "D", "F"]);
});

test("C I Chord triad 1st Inversion", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [3, 5, 8])
    ).toStrictEqual(["E", "G", "C"]);
});

test("C I Chord triad 1st Inversion shifted", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [-4, -2, 1])
    ).toStrictEqual(["E", "G", "C"]);
});
