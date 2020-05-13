import generateChordsForKey from "./index.js";

const exampleKeyC = {
    key: "C",
    notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
    chords: {
        triads: {},
        sevenths: {}
    }
};

describe("Major whites notes", function () {
    test("Scale of C", () => {
        expect(generateChordsForKey(generateChordsForKey("C"))).toStrictEqual(exampleKeyC);
    });
});
