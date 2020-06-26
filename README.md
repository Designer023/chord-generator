# Chord Generator

Chord generator creates chords for every note of a given key. This includes:

- The notes of a key
- The chords for all the notes of the key I, II, III, IV, V, VI, VII
- The major minor status of each of the chords
- The triads and seventh chords with the inversions (first second and third), plus relative octave for each note in that chord.

## Install

```bash
npm install @designer023/chord-generator
```

## Usage
```javascript
const generateChordsForKey = require("@designer023/chord-generator");;

const chords = generateChordsForKey("C")
```

## Output
This will output:

```javascript
{
    root: "C",
    notes: ["C", "D", "E", "F", "G", "A", "B"],
    sequence: "I",
    major: true,
    triads: {
        root: {
            notes: [
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
            ],
            inversions: 0,
            major: true,
            type: "triad"
        },
        firstInversion: {
            notes: [
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
            ],
            inversions: 1,
            major: true,
            type: "triad"
        },
        secondInversion: {
            notes: [
                {
                    note: "G",
                    relativeOctave: 0
                },
                {
                    note: "C",
                    relativeOctave: 1
                },
                {
                    note: "E",
                    relativeOctave: 1
                }
            ],
            inversions: 2,
            major: true,
            type: "triad"
        }
    },
    sevenths: {
        root: {
            notes: [
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
            ],
            name: "C minor 7th",
            inversions: 0,
            major: true,
            type: "triad"
        },
        firstInversion: {
            notes: [
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
                    note: "C",
                    relativeOctave: 1
                }
            ],
            name: "C minor first inversion 7th",
            inversions: 1,
            major: true,
            type: "triad"
        },
        secondInversion: {
            notes: [
                {
                    note: "G",
                    relativeOctave: 0
                },
                {
                    note: "B",
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
            ],
            name: "C minor second inversion 7th",
            inversions: 2,
            major: true,
            type: "triad"
        },
        thirdInversion: {
            notes: [
                {
                    note: "B",
                    relativeOctave: 1
                },
                {
                    note: "C",
                    relativeOctave: 1
                },
                {
                    note: "E",
                    relativeOctave: 1
                },
                {
                    note: "G",
                    relativeOctave: 1
                }
            ],
            name: "C minor third inversion 7th",
            inversions: 3,
            major: true,
            type: "triad"
        }
    }
}
```

