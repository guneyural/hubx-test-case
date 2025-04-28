import React from "react";
import { Image, View } from "react-native";
import { CustomText } from "../ui/CustomText";
import { LinearGradient } from "expo-linear-gradient";

function OnboardingStep2() {
  return (
    <>
      <View className="mt-3 mb-24 ml-6 mr-[74px] relative">
        <CustomText
          font="rubik"
          weight="medium"
          className="text-[28px] !tracking-[-1px]"
          style={{
            textShadowColor: "#00000040",
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 4,
          }}
        >
          Get plant{" "}
          <CustomText
            font="rubik"
            weight="extrabold"
            className="!tracking-[-1px]"
          >
            care guides
          </CustomText>{" "}
        </CustomText>

        <Image
          source={require("../../../assets/images/Onboarding/Brush.png")}
          className="w-[152px] h-[13px] absolute left-[120px] top-11"
          resizeMode="contain"
        />
      </View>

      <Image
        source={require("../../../assets/images/Onboarding/PlantBackground.png")}
        className="w-[411px] h-[325.4px] rotate-[73.6deg] absolute top-[25%]"
        blurRadius={15}
      />

      <View className="flex-1 relative">
        <Image
          source={require("../../../assets/images/Onboarding/Artwork.png")}
          className="absolute -top-20 w-full h-[170px] z-[2] right-0"
          resizeMode="contain"
        />

        <Image
          source={require("../../../assets/images/Onboarding/FlatIphone.png")}
          className="w-full h-full flex-1 -mb-[56px]"
          resizeMode="contain"
        />

        <LinearGradient
          colors={["rgba(255,255,255,0)", "#FFFFFF"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0.002, 0.6723]}
          style={{
            position: "absolute",
            bottom: -40,
            width: 300,
            height: 90,
            zIndex: 0,
            left: "50%",
            transform: [{ translateX: -163.5 }],
          }}
        />
      </View>
    </>
  );
}

export default OnboardingStep2;
