import { test } from "../src/main";

describe("test", () => {
  it("Should return one test", () => {
    expect(test()).toBeTruthy();
  });
});
