import { convertColorsToVariables } from "@common/functions/convertColorsToVariables";
import { hexToRgb } from "@common/functions/hex-to-rgb";
import { NetworkSide } from "@common/network/sides";
import * as Networker from "monorepo-networker";
import * as colors from "../../colors";
import { defaultTheme } from "@common/themes/defaultThemeVars";

const PRIMITIVE_COLORS = "[ Primitive Colors ]";
const SEMANTIC_COLORS = "[ Semantic Colors ]";
const LIGHT_MODE = "light";
const DARK_MODE = "dark";

export class ImportTokensMessage extends Networker.MessageType<void> {
  public receivingSide(): Networker.Side {
    return NetworkSide.PLUGIN;
  }

  public handle() {
    this.importTokens();
  }

  private async importTokens() {
    if (figma.editorType === "figma") {
      const primitiveCollection = await importPrimitiveTokens();
      if (primitiveCollection) {
        const lightSemanticTokens = convertColorsToVariables(
          defaultTheme.light
        );
        const darkSemanticTokens = convertColorsToVariables(defaultTheme.dark);

        await createSemanticColorVariables(
          lightSemanticTokens,
          darkSemanticTokens,
          primitiveCollection
        );
      }
    }
  }
}

const importPrimitiveTokens = async () => {
  const variableCollections =
    await figma.variables.getLocalVariableCollectionsAsync();
  const primitiveColorCollection = variableCollections.find(
    (collection) => collection.name === PRIMITIVE_COLORS
  );

  const semanticColorCollection = variableCollections.find(
    (collection) => collection.name == SEMANTIC_COLORS
  );

  if (primitiveColorCollection) {
    figma.notify(
      `Variable Collection exists with name: ${PRIMITIVE_COLORS}. Please delete collection and retry again!`,
      { error: true }
    );
    return;
  }

  if (semanticColorCollection) {
    figma.notify(
      `Variable Collection exists with name: ${SEMANTIC_COLORS}. Please delete collection and retry again!`,
      { error: true }
    );
    return;
  }

  const variableCollection =
    figma.variables.createVariableCollection(PRIMITIVE_COLORS);
  const modeId = variableCollection.modes[0].modeId;

  const createColorVariable = (variableName: string, colorValue: string) => {
    const { r, g, b, a } = hexToRgb(colorValue);
    const colorVariable = figma.variables.createVariable(
      variableName,
      variableCollection,
      "COLOR"
    );
    const colorObject = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      ...(a !== undefined && { a: a / 255 }),
    };
    colorVariable.setValueForMode(modeId, colorObject);
  };

  for (const paletteName in colors) {
    // @ts-expect-error
    const palette = colors[paletteName];

    if (typeof palette === "object") {
      for (const shade in palette) {
        const colorValue = palette[shade];
        const variableName = `${paletteName}/${shade}`;
        createColorVariable(variableName, colorValue);
      }
    } else {
      const variableName = paletteName;
      createColorVariable(variableName, palette as string);
    }
  }

  return variableCollection;
};

const createSemanticColorVariables = async (
  lightTokens: any,
  darkTokens: any,
  primitiveCollection: VariableCollection
) => {
  console.log(lightTokens);
  console.log(darkTokens);
  const semanticCollection =
    figma.variables.createVariableCollection(SEMANTIC_COLORS);

  const lightModeId = semanticCollection.modes[0].modeId;
  semanticCollection.renameMode(lightModeId, LIGHT_MODE);
  const darkModeId = semanticCollection.addMode(DARK_MODE);

  const createColorVariable = async (
    variableName: string,
    lightValue: string,
    darkValue: string
  ) => {
    const colorVariable = figma.variables.createVariable(
      variableName,
      semanticCollection,
      "COLOR"
    );
    const lightPrimitiveAlias = await getPrimitiveColorAliasByName(
      lightValue,
      primitiveCollection
    );
    const darkPrimitiveAlias = await getPrimitiveColorAliasByName(
      darkValue,
      primitiveCollection
    );

    if (lightPrimitiveAlias) {
      console.log(
        `Setting light mode alias for ${variableName}: ${lightPrimitiveAlias}`
      );
      colorVariable.setValueForMode(lightModeId, lightPrimitiveAlias);
    } else {
      const { r, g, b, a } = hexToRgb(lightValue);
      const lightColorObject = {
        r: r / 255,
        g: g / 255,
        b: b / 255,
        ...(a !== undefined && { a: a / 255 }),
      };
      console.log(
        `Setting light mode color for ${variableName}:`,
        lightColorObject
      );
      colorVariable.setValueForMode(lightModeId, lightColorObject);
    }

    if (darkPrimitiveAlias) {
      console.log(
        `Setting dark mode alias for ${variableName}: ${darkPrimitiveAlias}`
      );
      colorVariable.setValueForMode(darkModeId, darkPrimitiveAlias);
    } else {
      const { r, g, b, a } = hexToRgb(darkValue);
      const darkColorObject = {
        r: r / 255,
        g: g / 255,
        b: b / 255,
        ...(a !== undefined && { a: a / 255 }),
      };
      console.log(
        `Setting dark mode color for ${variableName}:`,
        darkColorObject
      );
      colorVariable.setValueForMode(darkModeId, darkColorObject);
    }
  };

  const traverseTokens = async (
    lightTokens: any,
    darkTokens: any,
    prefix: string = ""
  ) => {
    for (const key in lightTokens) {
      if (lightTokens.hasOwnProperty(key) && darkTokens.hasOwnProperty(key)) {
        const lightValue = lightTokens[key];
        const darkValue = darkTokens[key];
        if (typeof lightValue === "object" && typeof darkValue === "object") {
          await traverseTokens(lightValue, darkValue, `${prefix}${key}/`);
        } else {
          console.log(
            `Creating variable ${prefix}${key} with light: ${lightValue}, dark: ${darkValue}`
          );
          await createColorVariable(`${prefix}${key}`, lightValue, darkValue);
        }
      }
    }
  };

  await traverseTokens(lightTokens.color, darkTokens.color);
};

const getPrimitiveColorAliasByName = async (
  name: string,
  primitiveCollection: VariableCollection
) => {
  const variableIds = primitiveCollection.variableIds;
  for (const variableId of variableIds) {
    const variable = await figma.variables.getVariableByIdAsync(variableId);
    if (variable?.name === name) {
      return figma.variables.createVariableAlias(variable);
    }
  }
  return null;
};
