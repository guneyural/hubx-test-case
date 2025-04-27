import React, { ReactNode } from "react";
import {
  View,
  StatusBar,
  ImageBackground,
  ImageSourcePropType,
  Platform,
} from "react-native";

interface BackgroundWrapperProps {
  children: ReactNode;
  source: ImageSourcePropType;
}

export default function BackgroundWrapper({
  children,
  source,
}: BackgroundWrapperProps) {
  const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 0;

  return (
    <View className="flex-1 relative">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ImageBackground source={source} resizeMode="cover" className="flex-1">
        <View className="flex-1" style={{ paddingTop }}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}
