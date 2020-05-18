import { getChordNotesForKeyAndChordSequence } from "./index";

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
