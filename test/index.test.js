const { add, greet } = require("../src");

describe("Application tests", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("generates greeting", () => {
    expect(greet("Karthik")).toBe("Hello, Karthik!");
  });
});
