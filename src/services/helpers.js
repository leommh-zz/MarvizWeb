import { PixelRatio } from "react-native";

export const stringCut = (string, number, extra) => `${string.slice(0, number)}${extra ? extra : ""}`;

export const getValue = value => PixelRatio.getPixelSizeForLayoutSize(value);