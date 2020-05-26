import {
    getChordNotesForKeyAndChordSequence,
    shiftToA,
    getNotesOrderedForChord,
    getNoteAndOctave,
    startingShifter,
    findFirstIndexInOcatve
} from "./index";

test("C I Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [1, 3, 5])
    ).toStrictEqual([
        {
            note: "C",
            relativeOctave: 0
        },
        {
            note: "E",
            relativeOctave: 0
        },
        {
            note: "G",
            relativeOctave: 0
        }
    ]);
});

test("C II Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 2, [1, 3, 5])
    ).toStrictEqual([
        {
            note: "D",
            relativeOctave: 0
        },
        {
            note: "F",
            relativeOctave: 0
        },
        {
            note: "A",
            relativeOctave: 1
        }
    ]);
});

test("C III Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 3, [1, 3, 5])
    ).toStrictEqual([
        {
            note: "E",
            relativeOctave: 0
        },
        {
            note: "G",
            relativeOctave: 0
        },
        {
            note: "B",
            relativeOctave: 1
        }
    ]);
});

test("C VII Chord triad", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 7, [1, 3, 5])
    ).toStrictEqual([
        {
            note: "B",
            relativeOctave: 1
        },
        {
            note: "D",
            relativeOctave: 1
        },
        {
            note: "F",
            relativeOctave: 1
        }
    ]);
});

test("C I Chord triad 1st Inversion", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [3, 5, 8])
    ).toStrictEqual([
        {
            note: "E",
            relativeOctave: 0
        },
        {
            note: "G",
            relativeOctave: 0
        },
        {
            note: "C",
            relativeOctave: 1
        }
    ]);
});

test("C I Chord triad 1st Inversion shifted", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 1, [-5, -3, 1])
    ).toStrictEqual([
        {
            note: "E",
            relativeOctave: -1
        },
        {
            note: "G",
            relativeOctave: -1
        },
        {
            note: "C",
            relativeOctave: 0
        }
    ]);
});

test("C# I Chord 7th ", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C♯", "D♯", "F", "F♯", "G♯", "A♯", "C"], 1, [
            1,
            3,
            5,
            7
        ])
    ).toStrictEqual([
        {
            note: "C♯",
            relativeOctave: 0
        },
        {
            note: "F",
            relativeOctave: 0
        },
        {
            note: "G♯",
            relativeOctave: 0
        },
        {
            note: "C",
            relativeOctave: 1
        }
    ]);
});

describe("Shift", function () {
    test("C Notes", () => {
        expect(shiftToA(["C", "D", "E", "F", "G", "A", "B"])).toStrictEqual([
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G"
        ]);
    });

    test("D Notes", () => {
        expect(shiftToA(["D", "E", "F", "G", "A", "B", "C"])).toStrictEqual([
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G"
        ]);
    });

    test("A Notes", () => {
        expect(shiftToA(["A", "B", "C", "D", "E", "F", "G"])).toStrictEqual([
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G"
        ]);
    });
});

describe("Shift Notes", function () {
    test("C Notes", () => {
        expect(getNotesOrderedForChord(["C", "D", "E", "F", "G", "A", "B"], 1)).toStrictEqual([
            "C",
            "D",
            "E",
            "F",
            "G",
            "A",
            "B"
        ]);
    });

    test("D Notes", () => {
        expect(getNotesOrderedForChord(["C", "D", "E", "F", "G", "A", "B"], 2)).toStrictEqual([
            "D",
            "E",
            "F",
            "G",
            "A",
            "B",
            "C"
        ]);
    });

    test("E Notes", () => {
        expect(getNotesOrderedForChord(["C", "D", "E", "F", "G", "A", "B"], 3)).toStrictEqual([
            "E",
            "F",
            "G",
            "A",
            "B",
            "C",
            "D"
        ]);
    });
});

describe("Get Notes", function () {
    test("C Notes 1357", () => {
        expect(getNoteAndOctave(["C", "D", "E", "F", "G", "A", "B"], [1, 3, 5, 7])).toStrictEqual([
            {
                note: "C",
                relativeOctave: 0
            },
            {
                note: "E",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: 0
            },
            {
                note: "B",
                relativeOctave: 1
            }
        ]);
    });

    test("C Notes 135 16", () => {
        expect(getNoteAndOctave(["C", "D", "E", "F", "G", "A", "B"], [1, 3, 5, 16])).toStrictEqual([
            {
                note: "C",
                relativeOctave: 0
            },
            {
                note: "E",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: 0
            },
            {
                note: "D",
                relativeOctave: 2
            }
        ]);
    });

    test("E Notes 13579", () => {
        expect(
            getNoteAndOctave(["E", "F", "G", "A", "B", "C", "D"], [1, 3, 5, 7, 9])
        ).toStrictEqual([
            {
                note: "E",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: 0
            },
            {
                note: "B",
                relativeOctave: 1
            },
            {
                note: "D",
                relativeOctave: 1
            },
            {
                note: "F",
                relativeOctave: 1
            }
        ]);
    });

    test("E Notes 1-1", () => {
        expect(
            getNoteAndOctave(["C", "D", "E", "F", "G", "A", "B"], [1, -1, -3, -5])
        ).toStrictEqual([
            {
                note: "C",
                relativeOctave: 0
            },
            {
                note: "B",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: -1
            },
            {
                note: "E",
                relativeOctave: -1
            }
        ]);
    });

    test("C Notes 1357", () => {
        expect(getNoteAndOctave(["B", "C", "D", "E", "F", "G", "A"], [1, 3, 5], 1)).toStrictEqual([
            {
                note: "B",
                relativeOctave: 1
            },
            {
                note: "D",
                relativeOctave: 1
            },
            {
                note: "F",
                relativeOctave: 1
            }
        ]);
    });

    test("C♯ Notes 1357", () => {
        expect(
            getNoteAndOctave(["C♯", "D♯", "F", "F♯", "G♯", "A♯", "C"], [1, 3, 5, 7], 0)
        ).toStrictEqual([
            {
                note: "C♯",
                relativeOctave: 0
            },
            {
                note: "F",
                relativeOctave: 0
            },
            {
                note: "G♯",
                relativeOctave: 0
            },
            {
                note: "C",
                relativeOctave: 1
            }
        ]);
    });

    test("C♯ starting Shift", () => {
        expect(startingShifter(["C♯", "D♯", "F", "F♯", "G♯", "A♯", "C"], 1)).toStrictEqual(0);
    });
});

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
