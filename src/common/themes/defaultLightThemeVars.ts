import { primitiveColorTokens } from "@common/colors/primitiveColorTokens";
import * as colors from "../colors";

export const defaultLightColorVars = {
  background: {
    base: colors.mauve.mauve1,
    brand: {
      normal: colors.blue.blue9,
      hovered: colors.blue.blue10,
      selected: colors.blue.blue5,
      subtle: colors.blue.blue4,
      subtler: colors.blue.blue3,
      subtlest: colors.blue.blue2,
    },
    component: {
      hovered: colors.mauve.mauve10,
      normal: colors.mauve.mauve9,
      selected: colors.mauve.mauve5,
      subtle: colors.mauve.mauve4,
      subtler: colors.mauve.mauve3,
      subtlest: colors.mauve.mauve2,
    },
    danger: {
      hovered: colors.red.red10,
      normal: colors.red.red9,
      selected: colors.red.red5,
      subtle: colors.red.red4,
      subtler: colors.red.red3,
      subtlest: colors.red.red2,
    },
    success: {
      hovered: colors.green.green10,
      normal: colors.green.green9,
      selected: colors.green.green5,
      subtle: colors.green.green4,
      subtler: colors.green.green3,
      subtlest: colors.green.green2,
    },
    disabled: {
      normal: colors.mauveA.mauveA3,
      hovered: colors.mauveA.mauveA4,
    },
    subtle: colors.mauve.mauve2,
    warning: {
      hovered: colors.orange.orange10,
      normal: colors.orange.orange9,
      selected: colors.orange.orange5,
      subtle: colors.orange.orange4,
      subtler: colors.orange.orange3,
      subtlest: colors.orange.orange2,
    },
  },
  border: {
    brand: {
      normal: colors.blue.blue7,
      hovered: colors.blue.blue8,
      subtle: colors.blue.blue6,
    },
    component: {
      normal: colors.mauve.mauve7,
      hovered: colors.mauve.mauve8,
      subtle: colors.mauve.mauve6,
      subtler: colors.mauve.mauve4,
    },
    danger: {
      normal: colors.red.red7,
      hovered: colors.red.red8,
      subtle: colors.red.red6,
    },
    disabled: {
      normal: colors.mauveA.mauveA7,
      subtle: colors.mauveA.mauveA6,
    },
    success: {
      normal: colors.green.green7,
      hovered: colors.green.green8,
      subtle: colors.green.green6,
    },
    warning: {
      normal: colors.orange.orange7,
      hovered: colors.orange.orange8,
      subtle: colors.orange.orange6,
    },
  },
  text: {
    base: colors.mauve.mauve12,
    subtle: colors.mauve.mauve11,
    subtler: colors.mauve.mauve8,
    subtlest: colors.mauve.mauve7,
    brand: {
      normal: colors.blue.blue12,
      subtle: colors.blue.blue11,
    },
    danger: {
      normal: colors.red.red12,
      subtle: colors.red.red11,
    },
    disabled: {
      normal: colors.mauveA.mauveA12,
    },
    onBrand: colors.whiteA.whiteA12,
    success: {
      normal: colors.green.green12,
      subtle: colors.green.green11,
    },
    warning: {
      normal: colors.orange.orange12,
      subtle: colors.orange.orange11,
    },
  },
  elevation: {
    shadow: {
      overflow: {
        normal: colors.mauveA.mauveA4,
        hovered: colors.mauveA.mauveA3,
      },
      raised: {
        hovered: colors.blackA.blackA2,
        normal: colors.blackA.blackA3,
      },
      spread: {
        danger: colors.tomatoA.tomatoA3,
        success: colors.greenA.greenA3,
      },
    },
  },
};

const lightTheme = {
  color: {
    shadow: {
      brand: {
        active: "#204B7A",
        default: "#30679F",
        hover: "#4084C3",
      },
      primary: {
        default: "#A1A1AA",
        active: "#73737B",
        hover: "#C1C1C8",
      },
      secondary: {
        default: "#D4D4D8",
        active: "#A9A9B0",
        hover: "#E4E4E8",
      },
      tertiary: {
        default: "#D4D4D8",
        active: "#A9A9B0",
        hover: "#E4E4E8",
      },
      quaternary: {
        default: "#E5E5E5",
        active: "#B8B8B8",
        hover: "#F5F5F5",
      },
    },
    background: {
      brand: {
        default: "#30679F",
        active: "#204B7A",
        hover: "#4084C3",
        dim: "#F6FAFF",
      },
      primary: {
        default: primitiveColorTokens["neutral/neutral"][50],
        active: primitiveColorTokens["single/white"],
        hover: primitiveColorTokens["neutral/neutral"][50],
      },
      secondary: {
        default: primitiveColorTokens["neutral/neutral"][100],
        active: primitiveColorTokens["neutral/neutral"][200],
        hover: primitiveColorTokens["neutral/neutral"][50],
      },
      tertiary: {
        default: primitiveColorTokens["neutral/neutral"][200],
        active: primitiveColorTokens["neutral/neutral"][300],
        hover: primitiveColorTokens["neutral/neutral"][100],
      },
      quarternary: {
        default: primitiveColorTokens["neutral/neutral"][300],
        active: primitiveColorTokens["neutral/neutral"][400],
        hover: primitiveColorTokens["neutral/neutral"][200],
      },
      negative: {
        active: primitiveColorTokens["gradient/red"][600],
        default: primitiveColorTokens["gradient/red"][500],
        hover: primitiveColorTokens["gradient/red"][400],
      },
      positive: {
        active: primitiveColorTokens["gradient/green"][600],
        default: primitiveColorTokens["gradient/green"][500],
        hover: primitiveColorTokens["gradient/green"][400],
      },
      disabled: {
        default: primitiveColorTokens["neutral/neutral"][400],
        hover: primitiveColorTokens["neutral/neutral"][300],
      },
    },
    text: {
      brand: {
        default: "#30679F",
        active: "#204B7A",
        hover: "#4084C3",
      },
      primary: {
        default: primitiveColorTokens["neutral/neutral"][900],
        active: primitiveColorTokens["single/black"],
        hover: primitiveColorTokens["single/black"],
      },
      secondary: {
        default: primitiveColorTokens["neutral/neutral"][700],
        active: primitiveColorTokens["neutral/neutral"][800],
        hover: primitiveColorTokens["neutral/neutral"][900],
      },
      tertiary: {
        default: primitiveColorTokens["neutral/neutral"][500],
        hover: primitiveColorTokens["neutral/neutral"][600],
        active: primitiveColorTokens["neutral/neutral"][700],
      },
      quarternary: {
        default: primitiveColorTokens["neutral/neutral"][400],
        hover: primitiveColorTokens["neutral/neutral"][500],
        active: primitiveColorTokens["neutral/neutral"][600],
      },
      placeholder: {
        default: primitiveColorTokens["neutral/neutral"][300],
        active: primitiveColorTokens["neutral/neutral"][400],
        hover: primitiveColorTokens["neutral/neutral"][500],
      },
      disabled: {
        default: primitiveColorTokens["neutral/neutral"][300],
        hover: primitiveColorTokens["neutral/neutral"][400],
      },
      info: {
        active: primitiveColorTokens["gradient/blue"][600],
        default: primitiveColorTokens["gradient/blue"][500],
        hover: primitiveColorTokens["gradient/blue"][400],
      },
      negative: {
        active: primitiveColorTokens["gradient/red"][600],
        default: primitiveColorTokens["gradient/red"][500],
        hover: primitiveColorTokens["gradient/red"][400],
      },
      positive: {
        active: primitiveColorTokens["gradient/green"][600],
        default: primitiveColorTokens["gradient/green"][500],
        hover: primitiveColorTokens["gradient/green"][400],
      },
      onNegative: {
        default: primitiveColorTokens["single/white"],
        active: primitiveColorTokens["single/white"],
        hover: primitiveColorTokens["single/white"],
      },
      onPositive: {
        default: primitiveColorTokens["single/white"],
        active: primitiveColorTokens["single/white"],
        hover: primitiveColorTokens["single/white"],
      },
      onBrand: {
        default: primitiveColorTokens["single/white"],
        active: primitiveColorTokens["single/white"],
        hover: primitiveColorTokens["single/white"],
      },
      onDisabled: {
        default: primitiveColorTokens["single/white"],
        active: primitiveColorTokens["single/white"],
        hover: primitiveColorTokens["single/white"],
      },
    },
    border: {
      negative: {
        active: primitiveColorTokens["gradient/red"][600],
        default: primitiveColorTokens["gradient/red"][500],
        hover: primitiveColorTokens["gradient/red"][400],
      },
      positive: {
        active: primitiveColorTokens["gradient/green"][600],
        default: primitiveColorTokens["gradient/green"][500],
        hover: primitiveColorTokens["gradient/green"][400],
      },
      brand: {
        default: "#30679F",
        active: "#204B7A",
        hover: "#4084C3",
      },
      primary: {
        active: primitiveColorTokens["neutral/neutral"][700],
        default: primitiveColorTokens["neutral/neutral"][600],
        hover: primitiveColorTokens["neutral/neutral"][500],
      },
      secondary: {
        active: primitiveColorTokens["neutral/neutral"][600],
        default: primitiveColorTokens["neutral/neutral"][500],
        hover: primitiveColorTokens["neutral/neutral"][400],
      },
      tertiary: {
        active: primitiveColorTokens["neutral/neutral"][400],
        default: primitiveColorTokens["neutral/neutral"][300],
        hover: primitiveColorTokens["neutral/neutral"][200],
      },
      quarternary: {
        active: primitiveColorTokens["neutral/neutral"][300],
        default: primitiveColorTokens["neutral/neutral"][200],
        hover: primitiveColorTokens["neutral/neutral"][100],
      },
      disabled: {
        default: primitiveColorTokens["neutral/neutral"][300],
        hover: primitiveColorTokens["neutral/neutral"][200],
      },
    },
  },
};
