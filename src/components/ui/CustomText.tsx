import { Platform, Text, TextProps, View } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

type FontWeight =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "extrabold"
  | "bold";
type FontFamily = "rubik" | "sf" | "visby";

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
    semibold: "SF-Pro-Text-Semibold",
  },
  visby: {
    extrabold: "Visbycf-heavy",
    light: "",
    regular: "",
    medium: "",
    bold: "",
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

interface StartEndType {
  x: number;
  y: number;
}

interface GradientTextProps {
  children: React.ReactNode;
  colors: string[];
  height: number;
  start: StartEndType;
  end: StartEndType;
}

export const GradientText = ({
  children,
  colors,
  height,
  end,
  start,
}: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {children}
        </View>
      }
      style={{ height }}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
};

export default GradientText;
