import generateChordsForKey from "./index.js";
import { exampleKeyC } from "./testData.js";

describe("Test whole thing!", function () {
    test("Default Key of C", () => {
        expect(generateChordsForKey()["C"]).toStrictEqual(exampleKeyC);
    });

    test("Key of C", () => {
        expect(generateChordsForKey("C")["C"]).toStrictEqual(exampleKeyC);
    });
});
