import { createKeyStepsFromPattern, majorPattern } from "./index";

test("Major triad", () => {
    expect(createKeyStepsFromPattern([1, 3, 5], majorPattern)).toStrictEqual([
        { steps: 0 },
        { steps: 4 },
        { steps: 7 }
    ]);
});
