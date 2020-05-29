import { allNotes } from "./constants/index.js";

export const findFirstIndexInOcatve = (notes) => {
    let foundIdx = -1;

    for (let i = 0; i < allNotes.length; i++) {
        const note = allNotes[i];
        for (let j = 0; j < notes.length; j++) {
            foundIdx = notes.indexOf(note);
            if (foundIdx > -1) {
                break;
            }
        }
        if (foundIdx > -1) {
            break;
        }
    }
    return foundIdx;
};
