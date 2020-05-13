import { createKeyStepsFromPattern, majorPattern, getNotesForSteps } from "./index";

test("Major triad", () => {
    expect(createKeyStepsFromPattern([1, 3, 5], majorPattern)).toStrictEqual([
        { steps: 0 },
        { steps: 4 },
        { steps: 7 }
    ]);
});

test("Negative test triad", () => {
    expect(createKeyStepsFromPattern([1, 10], majorPattern)).toStrictEqual([
        { steps: 0 },
        { steps: 14 }
    ]);
});

test("C", () => {
    expect(getNotesForSteps("C", [{ steps: 0 }, { steps: 4 }, { steps: 7 }])).toStrictEqual([
        "C",
        "E",
        "G"
    ]);
});

test("C 7", () => {
    expect(
        getNotesForSteps("C", [{ steps: 0 }, { steps: 4 }, { steps: 7 }, { steps: 11 }])
    ).toStrictEqual(["C", "E", "G", "B"]);
});

test("C 7 third inversion", () => {
    expect(
        getNotesForSteps("C", [{ steps: 11 }, { steps: 12 }, { steps: 16 }, { steps: 19 }])
    ).toStrictEqual(["B", "C", "E", "G"]);
});

test("Checking step around", () => {
    expect(
        getNotesForSteps("G", [
            { steps: 0 },
            { steps: 1 },
            { steps: 2 },
            { steps: 3 },
            { steps: 4 }
        ])
    ).toStrictEqual(["G", "G♯", "A", "A♯", "B"]);
});

test("Checking flow around 2", () => {
    expect(
        getNotesForSteps("A", [
            { steps: 0 },
            { steps: -1 },
            { steps: -2 },
            { steps: -3 },
            { steps: -4 }
        ])
    ).toStrictEqual(["A", "G♯", "G", "F♯", "F"]);
});
