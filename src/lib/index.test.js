import { getChordNotesForKeyAndChordSequence } from "./get-chord-and-note-for-sequence.js";
import { getNotesOrderedForChord } from "./get-notes-ordered-for-chord.js";
import { getNoteAndOctave } from "./get-note-and-octave.js";
import { startingShifter } from "./get-starting-shifter.js";

const notesOfC = ["C", "D", "E", "F", "G", "A", "B"];
const notesOfCSharp = ["C♯", "D♯", "F", "F♯", "G♯", "A♯", "C"];
const notesOfD = ["D", "E", "F♯", "G", "A", "B", "C♯"];
const notesOfDSharp = ["D♯", "F", "G", "G♯", "A♯", "C", "D"];

const notesOfA = ["A", "B", "C♯", "D", "E", "F♯", "G♯"];

describe("Scales", function () {
    test("C major", () => {
        expect(
            getChordNotesForKeyAndChordSequence(notesOfC, 1, [1, 2, 3, 4, 5, 6, 7, 8])
        ).toStrictEqual([
            {
                note: "C",
                relativeOctave: 0
            },
            {
                note: "D",
                relativeOctave: 0
            },
            {
                note: "E",
                relativeOctave: 0
            },
            {
                note: "F",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: 0
            },
            {
                note: "A",
                relativeOctave: 1
            },
            {
                note: "B",
                relativeOctave: 1
            },
            {
                note: "C",
                relativeOctave: 1
            }
        ]);
    });

    test("C♯ major", () => {
        expect(
            getChordNotesForKeyAndChordSequence(notesOfCSharp, 1, [1, 2, 3, 4, 5, 6, 7, 8])
        ).toStrictEqual([
            {
                note: "C♯",
                relativeOctave: 0
            },
            {
                note: "D♯",
                relativeOctave: 0
            },
            {
                note: "F",
                relativeOctave: 0
            },
            {
                note: "F♯",
                relativeOctave: 0
            },
            {
                note: "G♯",
                relativeOctave: 0
            },
            {
                note: "A♯",
                relativeOctave: 1
            },
            {
                note: "C",
                relativeOctave: 1
            },
            {
                note: "C♯",
                relativeOctave: 1
            }
        ]);
    });

    test("D major", () => {
        expect(
            getChordNotesForKeyAndChordSequence(notesOfD, 1, [1, 2, 3, 4, 5, 6, 7, 8])
        ).toStrictEqual([
            {
                note: "D",
                relativeOctave: 0
            },
            {
                note: "E",
                relativeOctave: 0
            },
            {
                note: "F♯",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: 0
            },
            {
                note: "A",
                relativeOctave: 1
            },
            {
                note: "B",
                relativeOctave: 1
            },
            {
                note: "C♯",
                relativeOctave: 1
            },
            {
                note: "D",
                relativeOctave: 1
            }
        ]);
    });

    test("D♯ major", () => {
        expect(
            getChordNotesForKeyAndChordSequence(notesOfDSharp, 1, [1, 2, 3, 4, 5, 6, 7, 8])
        ).toStrictEqual([
            {
                note: "D♯",
                relativeOctave: 0
            },
            {
                note: "F",
                relativeOctave: 0
            },
            {
                note: "G",
                relativeOctave: 0
            },
            {
                note: "G♯",
                relativeOctave: 0
            },
            {
                note: "A♯",
                relativeOctave: 1
            },
            {
                note: "C",
                relativeOctave: 1
            },
            {
                note: "D",
                relativeOctave: 1
            },
            {
                note: "D♯",
                relativeOctave: 1
            }
        ]);
    });

    test("A major", () => {
        expect(
            getChordNotesForKeyAndChordSequence(notesOfA, 1, [1, 2, 3, 4, 5, 6, 7, 8])
        ).toStrictEqual([
            {
                note: "A",
                relativeOctave: 0
            },
            {
                note: "B",
                relativeOctave: 0
            },
            {
                note: "C♯",
                relativeOctave: 0
            },
            {
                note: "D",
                relativeOctave: 0
            },
            {
                note: "E",
                relativeOctave: 0
            },
            {
                note: "F♯",
                relativeOctave: 0
            },
            {
                note: "G♯",
                relativeOctave: 0
            },
            {
                note: "A",
                relativeOctave: 1
            }
        ]);
    });
});

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

test("C VI Chord Triad ", () => {
    expect(
        getChordNotesForKeyAndChordSequence(["C", "D", "E", "F", "G", "A", "B"], 6, [1, 3, 5])
    ).toStrictEqual([
        {
            note: "A",
            relativeOctave: 1
        },
        {
            note: "C",
            relativeOctave: 1
        },
        {
            note: "E",
            relativeOctave: 1
        }
    ]);
});

describe("Get notes for chord in order", function () {
    test("C Notes I chord", () => {
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

    test("C Notes II chord ", () => {
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

    test("C Notes III chord", () => {
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

    test("C Notes 1-1", () => {
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

    test("C Notes 135", () => {
        expect(getNoteAndOctave(["B", "C", "D", "E", "F", "G", "A"], [1, 3, 5], 0)).toStrictEqual([
            {
                note: "B",
                relativeOctave: 0
            },
            {
                note: "D",
                relativeOctave: 0
            },
            {
                note: "F",
                relativeOctave: 0
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
