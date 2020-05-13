import { createChordsForNoteInKeyNotes, getChordName } from "./chords.js";

import { triad } from "./constants/index.js";

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
});
