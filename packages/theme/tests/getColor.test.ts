import { getColor, colors } from "../src/Color";

test("it returns the right color", () => {
  const color = getColor("sky", "700");

  expect(color).toBe(colors.sky[700]);
});
