import { createKeyStepsFromPattern, majorPattern } from "./index";

test("adds 1 + 2 to equal 3", () => {
    expect(createKeyStepsFromPattern([1, 3, 5], majorPattern)).toStrictEqual([
        { steps: 0 },
        { steps: 4 },
        { steps: 7 }
    ]);
});
