import { FontSizeType, FontWeightType, SizeType } from "./types";

export type ColorMixinType = {
  element: "background" | "text" | "border";
  color: string;
  usedIn: string;
  brightness: number | undefined;
};

export const colorMixin = ({
  element,
  color,
  usedIn,
  brightness,
}: ColorMixinType): string => {
  const colorsWithBrightness = ["gray", "red", "blue"];
  const context = usedIn.replace(/([A-Z])/g, " $1").trim();
  const stylingFor = {
    background: "bg",
    text: "text",
    border: "border",
  };

  if (colorsWithBrightness.includes(color) && !brightness) {
    throw new Error(
      `[${context}] Brightness has to be specified with the color ${color}`,
    );
  }
  if (!color) {
    throw new Error(`[${context}] Color has to be specified`);
  }
  if (colorsWithBrightness.includes(color)) {
    return `${
      stylingFor[element] === "border"
        ? `border text-${color}-${brightness}`
        : ""
    } ${stylingFor[element]}-${color}-${brightness}`;
  }

  return `${stylingFor[element] === "border" ? `border text-${color}` : ""} ${
    stylingFor[element]
  }-${color}`;
};

/**
 * Underline
 */
export type UnderlineMixinType = {
  underline: boolean | undefined;
};

export const underlineMixin = ({ underline }: UnderlineMixinType): string => {
  return underline ? "underline" : "";
};

/**
 * Font Size
 */
export type FontSizeMixinType = {
  fontSize: FontSizeType;
};

export const fontSizeMixin = ({ fontSize }: FontSizeMixinType): string => {
  return `text-${fontSize}`;
};

/**
 * Font Weight
 */
export type FontWeightMixinType = {
  fontWeight: FontWeightType;
};

export const fontWeightMixin = ({
  fontWeight,
}: FontWeightMixinType): string => {
  return `text-${fontWeight}`;
};

/**
 * Width
 */
export type WidthMixinType = {
  table: { [x in SizeType]: string };
  size: SizeType | undefined;
  stretch: boolean | undefined;
  centered: boolean;
};

export const widthMixin = ({
  table,
  size,
  stretch,
  centered,
}: WidthMixinType): string => {
  if (stretch) {
    return `w-full ${centered ? "flex justify-center" : ""}`;
  }
  if (size) {
    return table[size];
  }
  throw new Error(
    "Must provide either size or stretch for Primary Button component",
  );
};
