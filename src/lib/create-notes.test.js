import { createNotesForKey } from "./create-notes.js";

describe("Major whites notes", function () {
    test("Scale of C", () => {
        expect(createNotesForKey("C")).toStrictEqual(["C", "D", "E", "F", "G", "A", "B", "C"]);
    });

    test("Scale of D", () => {
        expect(createNotesForKey("D")).toStrictEqual(["D", "E", "F♯", "G", "A", "B", "C♯", "D"]);
    });

    test("Scale of E", () => {
        expect(createNotesForKey("E")).toStrictEqual(["E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E"]);
    });

    test("Scale of F", () => {
        expect(createNotesForKey("F")).toStrictEqual(["F", "G", "A", "A♯", "C", "D", "E", "F"]);
    });

    test("Scale of G", () => {
        expect(createNotesForKey("G")).toStrictEqual(["G", "A", "B", "C", "D", "E", "F♯", "G"]);
    });

    test("Scale of A", () => {
        expect(createNotesForKey("A")).toStrictEqual(["A", "B", "C♯", "D", "E", "F♯", "G♯", "A"]);
    });

    test("Scale of B", () => {
        expect(createNotesForKey("B")).toStrictEqual(["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯", "B"]);
    });
});
