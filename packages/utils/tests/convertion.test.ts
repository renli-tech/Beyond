import { convertHex, convertHsl, convertRgb } from "../src";

it("coverts hex string to rgba", () => {
  const res = convertHex("#ffffff", 20);

  expect(res).toBe("rgba(255,255,255,0.2)");
});

it("coverts 3 digits hex string to rgba", () => {
  const res = convertHex("#fff", 20);

  expect(res).toBe("rgba(255,255,255,0.2)");
});

it("coverts rgb color string to rgba", () => {
  const res = convertRgb("rgb(255,255,255)", 20);

  expect(res).toBe("rgba(255,255,255,0.2)");
});

it("coverts hsl color string to rgba", () => {
  const res = convertHsl("hsl(360,100%,100%)", 20);

  expect(res).toBe("rgba(255,255,255,0.2)");
});
