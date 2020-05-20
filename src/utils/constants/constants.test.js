import { getChordNotesForKeyAndChordSequence } from "./index";

test("C I Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [1, 3, 5])
    ).toStrictEqual([
        {
            notes: "C",
            relativeOctave: 0
        },
        {
            notes: "E",
            relativeOctave: 0
        },
        {
            notes: "G",
            relativeOctave: 0
        }
    ]);
});

test("C II Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 2, [1, 3, 5])
    ).toStrictEqual([
        {
            notes: "D",
            relativeOctave: 0
        },
        {
            notes: "F",
            relativeOctave: 0
        },
        {
            notes: "A",
            relativeOctave: 0
        }
    ]);
});

test("C III Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 3, [1, 3, 5])
    ).toStrictEqual([
        {
            notes: "E",
            relativeOctave: 0
        },
        {
            notes: "G",
            relativeOctave: 0
        },
        {
            notes: "B",
            relativeOctave: 0
        }
    ]);
});

test("C VII Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 7, [1, 3, 5])
    ).toStrictEqual([
        {
            notes: "B",
            relativeOctave: 0
        },
        {
            notes: "D",
            relativeOctave: 1
        },
        {
            notes: "F",
            relativeOctave: 1
        }
    ]);
});

test("C I Chord triad 1st Inversion", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [3, 5, 8])
    ).toStrictEqual([
        {
            notes: "E",
            relativeOctave: 0
        },
        {
            notes: "G",
            relativeOctave: 0
        },
        {
            notes: "C",
            relativeOctave: 1
        }
    ]);
});

test("C I Chord triad 1st Inversion shifted", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [-4, -2, 1])
    ).toStrictEqual([
        {
            notes: "E",
            relativeOctave: -1
        },
        {
            notes: "G",
            relativeOctave: -1
        },
        {
            notes: "C",
            relativeOctave: 0
        }
    ]);
});
