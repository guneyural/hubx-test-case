import { Platform, Text, TextProps } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";

type FontWeight =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "extrabold"
  | "bold";
type FontFamily = "rubik" | "sf";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  className?: string;
  font?: FontFamily;
  weight?: FontWeight;
}

const fontMap: Record<FontFamily, Record<FontWeight, string>> = {
  rubik: {
    light: "Rubik-Light",
    regular: "Rubik-Regular",
    medium: "Rubik-Medium",
    semibold: "Rubik-SemiBold",
    bold: "Rubik-Bold",
    extrabold: "Rubik-ExtraBold",
  },
  sf: {
    light: "",
    regular: "SF-Pro-Text-Regular",
    medium: "",
    extrabold: "",
    bold: "SF-Pro-Text-Bold",
    semibold: "",
  },
};

export const CustomText = ({
  children,
  className,
  font = "rubik",
  weight = "regular",
  ...props
}: CustomTextProps) => {
  font = Platform.OS == "ios" ? font : "rubik";
  const fontFamily = fontMap[font][weight] || fontMap[font]["regular"];

  return (
    <Text
      {...props}
      style={[{ fontFamily }, props.style]}
      className={cn(
        `text-mainTextColor tracking-[0.07px] leading-[100%] ${className}`
      )}
    >
      {children}
    </Text>
  );
};
