import { fontFamily, getFontFamily } from "../src/Font";

it("returns the font-family string", () => {
  const fontFamily = getFontFamily("sans");

  expect(typeof fontFamily).toBe("string");
});

it("returns the right font-family", () => {
  const generatedFontFamily = getFontFamily("mono");

  expect(generatedFontFamily).toBe(fontFamily["mono"].toString());
});
