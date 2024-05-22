import { convertColorsToVariables } from "@common/functions/convertColorsToVariables";
import { hexToRgb } from "@common/functions/hex-to-rgb";
import { NetworkSide } from "@common/network/sides";
import * as Networker from "monorepo-networker";
import * as colors from "../../colors";
import { defaultTheme } from "@common/themes/defaultThemeVars";
import { primitiveColorTokens } from "@common/colors/primitiveColorTokens";

const PRIMITIVE_COLORS = "[ Primitive Colors ]";
const SEMANTIC_COLORS = "[ Semantic Colors ]";
const LIGHT_MODE = "light";
const DARK_MODE = "dark";

export class UploadPrimitiveColorTokensMessage extends Networker.MessageType<void> {
  public receivingSide(): Networker.Side {
    return NetworkSide.PLUGIN;
  }

  public handle() {
    this.importTokens();
  }

  private async importTokens() {
    if (figma.editorType === "figma") {
      const primitiveCollection = await this.uploadPrimitiveColorTokens();
    }
  }

  private async uploadPrimitiveColorTokens() {
    const variableCollections =
      await figma.variables.getLocalVariableCollectionsAsync();
    let primitiveColorCollection = variableCollections.find(
      (collection) => collection.name === PRIMITIVE_COLORS
    );

    if (primitiveColorCollection) {
      figma.notify(
        `Variable Collection exists with name: ${PRIMITIVE_COLORS}. Please delete collection and retry again!`,
        { error: true }
      );
      return;
    }

    primitiveColorCollection =
      figma.variables.createVariableCollection(PRIMITIVE_COLORS);
    const modeId = primitiveColorCollection.modes[0].modeId;

    for (const paletteName in primitiveColorTokens) {
      const palette = (primitiveColorTokens as any)[paletteName];
      const [groupName, subGroupName] = paletteName.split("/");

      if (typeof palette === "string") {
        // Single color (like white or black)
        const variableName = `${groupName}/${subGroupName}`;
        const variable = figma.variables.createVariable(
          variableName,
          primitiveColorCollection,
          "COLOR"
        );
        variable.setValueForMode(modeId, this.hexToRgbColor(palette));
      } else {
        // Gradient or neutral colors
        for (const shade in palette) {
          const variableName = `${groupName}/${subGroupName}/${shade}`;
          const hexValue = palette[shade];
          const variable = figma.variables.createVariable(
            variableName,
            primitiveColorCollection,
            "COLOR"
          );
          variable.setValueForMode(modeId, this.hexToRgbColor(hexValue));
        }
      }
    }

    figma.notify(`Primitive Color Tokens have been successfully imported.`);
  }

  private hexToRgbColor(hex: string): RGB {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : { r: 0, g: 0, b: 0 };
  }
}
