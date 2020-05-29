import filterUnique from "./filter-unique.js";

describe("Check filter returns unique values", function () {
    test("Removes duplicates", () => {
        expect(["A", "A", "A"].filter(filterUnique)).toStrictEqual(["A"]);
    });
});
