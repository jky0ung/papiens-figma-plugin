import * as colors from "../colors";

export function convertColorsToVariables(
  obj: any,
  parentKey: string = ""
): any {
  const result: any = {};
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (typeof value === "object" && value !== null) {
          result[key] = convertColorsToVariables(
            value,
            parentKey ? `${parentKey}/${key}` : key
          );
        } else {
          // Finding the corresponding color variable name
          let found = false;
          for (const paletteName in colors) {
            if (Object.prototype.hasOwnProperty.call(colors, paletteName)) {
              // @ts-expect-error
              const palette = colors[paletteName];
              if (typeof palette === "object") {
                for (const shade in palette) {
                  if (
                    Object.prototype.hasOwnProperty.call(palette, shade) &&
                    palette[shade] === value
                  ) {
                    result[key] = `${paletteName}/${shade}`;
                    found = true;
                    break;
                  }
                }
              } else if (palette === value) {
                result[key] = paletteName;
                found = true;
              }
            }
            if (found) break;
          }
          if (!found) {
            // If no match found, keep the original value
            result[key] = value;
          }
        }
      }
    }
  }
  return result;
}
