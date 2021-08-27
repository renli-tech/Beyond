import { runIfFn } from "../src";

it("resolves function", () => {
  const s = runIfFn(() => "Hello");

  expect(s).toBe("Hello");
});

it("resolves fuction with passed args", () => {
  const s = runIfFn(theme => theme, "Hello");

  expect(s).toBe("Hello");
});
