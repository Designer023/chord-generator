import generateChordsForKey from "./index.js";
import { exampleKeyC, exampleKeyD } from "./test/data/exampleKeys.js";

describe("Test whole thing!", function () {
    test("Default Key of C", () => {
        expect(generateChordsForKey()["1"]).toStrictEqual(exampleKeyC);
    });

    test("Key of C", () => {
        expect(generateChordsForKey("C")["1"]).toStrictEqual(exampleKeyC);
    });

    test("Key of C ii", () => {
        expect(generateChordsForKey("C")["2"]).toStrictEqual(exampleKeyD);
    });
});
