export const chords = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

export const triad = [3, 5];
export const seventh = [3, 5, 7];

export const chordPositions = ["I", "II", "III", "IV", "V", "VI", "VII"];

export const technicalNames = [
    "Tonic",
    "Supertonic",
    "Mediant",
    "Subdominant",
    "Dominant",
    "Submediant",
    "Leading note"
];

export const majorPattern = [0, 2, 2, 1, 2, 2, 2, 1];

export const createKeyStepsFromPattern = (pattern, keyPattern = majorPattern) => {
    let steps = [];
    pattern.map((item) => {
        const additional = Math.floor(item / majorPattern.length);

        item = item % majorPattern.length;

        if (item < 0) {
            item = majorPattern.length + item;
        }

        const additionalSteps = keyPattern.reduce((a, b) => a + b) * additional;

        const stepsNeededForItem = keyPattern.reduce((a, b, i) => (i < item ? a + b : a));
        steps.push({
            steps: stepsNeededForItem + additionalSteps
        });
    });

    return steps;
};

export const stepPatterns = {
    triads: {
        root: createKeyStepsFromPattern([1, 3, 5]),
        firstInversion: createKeyStepsFromPattern([3, 5, 8]),
        secondInversion: createKeyStepsFromPattern([5, 8, 10])
    },
    sevenths: {
        root: createKeyStepsFromPattern([1, 3, 5, 7]),
        firstInversion: createKeyStepsFromPattern([3, 5, 7, 8]),
        secondInversion: createKeyStepsFromPattern([5, 7, 8, 10]),
        thirdInversion: createKeyStepsFromPattern([7, 8, 10, 12])
    }
};