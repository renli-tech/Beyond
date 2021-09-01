import { extractColor, colors } from "../src";
it("returns correct value", () => {
  const res = extractColor("violet-500", colors);

  expect(res).toBe("rgba(139,92,246,1)");
});

it("returns correct value for oapcity", () => {
  const res = extractColor("violet-500 opacity-20", colors);

  expect(res).toBe("rgba(139,92,246,0.2)");
});
