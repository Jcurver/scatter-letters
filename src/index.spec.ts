import { add, flatten } from "./index";

describe("add", () => {
  it("add to num", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should add to nums with negative", () => {
    expect(add(1, -2)).toBe(-1);
  });
});
describe("flatten", () => {
  it("should flatten", () => {
    expect(
      flatten([
        [1, 1],
        [3, 3],
        [6, 4, 5],
      ])
    ).toBe([1, 1, 3, 3, 6, 4, 5]);
  });
});
