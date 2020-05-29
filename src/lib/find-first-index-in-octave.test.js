import { findFirstIndexInOcatve } from "./find-first-index-in-octave.js";

describe("Find the lowest note index in an array of notes", function () {
    test("Find 'A' where it is the first item", () => {
        expect(findFirstIndexInOcatve(["A", "B", "C"])).toStrictEqual(0);
    });

    test("Find 'A' where it is not the first item", () => {
        expect(findFirstIndexInOcatve(["B", "A", "C"])).toStrictEqual(1);
    });

    test("Find 'A' where it is the last item", () => {
        expect(findFirstIndexInOcatve(["B", "C", "A"])).toStrictEqual(2);
    });

    test("Find 'B' where a is missing as the first item", () => {
        expect(findFirstIndexInOcatve(["B", "C", "D"])).toStrictEqual(0);
    });

    test("Find 'B' where a is missing and it is not the first item", () => {
        expect(findFirstIndexInOcatve(["C", "D", "B"])).toStrictEqual(2);
    });

    test("Find nothing in empty array of notes", () => {
        expect(findFirstIndexInOcatve([])).toStrictEqual(-1);
    });

    test("Find nothing in different array of notes", () => {
        expect(findFirstIndexInOcatve(["X", "Y", "Z"])).toStrictEqual(-1);
    });
});
