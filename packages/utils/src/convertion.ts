import { hsl as HSLConverter } from "color-convert";

/***
 * A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. All values must be between 00 and FF.
 * For example, the #0000ff value is rendered as blue, because the blue component is set to its highest value (ff) and the others are set to 00.
 */
export const convertHex = (color: string, opacity: number): string => {
  let hex = color.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);

  return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
};

/***
 *
 * @param color
 * @param opacity
 * @returns
 *
 * @description HSL stands for hue, saturation, and lightness - and represents a cylindrical-coordinate representation of colors.
 * An HSL color value is specified with the hsl() function, which has the following syntax:
 * hsl(hue, saturation, lightness)
 * Hue is a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue. Saturation is a percentage value; 0% means a shade of gray and 100% is the full color. Lightness is also a percentage; 0% is black, 100% is white.
 */
export const convertHsl = (color: string, opacity: number): string => {
  // input should look like this : hsl(120, 100%, 50%)
  let hsl = color.replace("hsl", "");
  hsl = hsl.replace("(", "");
  hsl = hsl.replace(")", "");

  // we should now have : 120,100%,50%
  hsl = hsl.replace("%", "");
  // then this : 120,100,50

  const colorHslArray = hsl.split(",");

  const h = parseInt(colorHslArray[0]),
    s = parseInt(colorHslArray[1]),
    l = parseInt(colorHslArray[2]);

  const res = HSLConverter.rgb([h, s, l]);

  const r = res[0],
    g = res[1],
    b = res[2];

  return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
};

/**
 *
 * @param color
 * @param opacity
 * @returns
 *
 * An RGB color value is specified with the ```rgb()``` function, which has the following syntax:
 * ```rgb(red, green, blue)```
 * Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%).
 * For example, the ```rgb(0,0,255)``` value is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.
 * Also, the following values define equal color: ```rgb(0,0,255)``` and ```rgb(0%,0%,100%)```.
 */

export const convertRgb = (color: string, opacity: number): string => {
  // input should look like this : rgb(255, 0, 0)
  let rgb = color.replace("rgb", "");
  rgb = rgb.replace("(", "");
  rgb = rgb.replace(")", "");

  // then this : 255,0,0

  const colorRgbArray = rgb.split(",");

  const r = parseInt(colorRgbArray[0]),
    g = parseInt(colorRgbArray[1]),
    b = parseInt(colorRgbArray[2]);

  return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
};

export function convertColorToRgba(color: string, opacity: number): string {
  if (color.includes("#")) {
    return convertHex(color, opacity);
  }

  if (color.includes("rgb")) {
    return convertRgb(color, opacity);
  }

  if (color.includes("hsl")) {
    return convertHsl(color, opacity);
  }
  return color;
}
