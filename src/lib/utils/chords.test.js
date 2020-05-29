import { createChordsForNoteInKeyNotes, getChordName } from "./chords.js";

import { triad } from "../constants/index.js";

describe("Major whites notes", function () {
    test("Scale of C", () => {
        expect(
            createChordsForNoteInKeyNotes("C", ["C", "D", "E", "F", "G", "A", "B", "C"], triad)
        ).toStrictEqual(["C", "E", "G"]);
    });
});

describe("Name that chord", function () {
    test("C Major", () => {
        expect(getChordName(["C", "E", "G"])).toStrictEqual("Major");
    });

    test("D Minor", () => {
        expect(getChordName(["D", "F", "A"])).toStrictEqual("minor");
    });

    test("B dim", () => {
        expect(getChordName(["B", "D", "F"])).toStrictEqual("diminished");
    });

    test("C augmented", () => {
        expect(getChordName(["C", "E", "G♯"])).toStrictEqual("augmented");
    });

    test("G Major (check notes loop over)", () => {
        expect(getChordName(["G", "B", "D"])).toStrictEqual("Major");
    });
});
