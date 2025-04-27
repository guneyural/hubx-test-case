import React from "react";
import { Image, View } from "react-native";
import { CustomText } from "../ui/CustomText";

function OnboardingStep1() {
  return (
    <>
      <View className="my-3 ml-6 mr-9 relative">
        <CustomText
          font="rubik"
          weight="medium"
          className="text-[28px] !tracking-[-1px]"
        >
          Take a photo to{" "}
          <CustomText
            font="rubik"
            weight="extrabold"
            className="!tracking-[-1px]"
          >
            identify
          </CustomText>{" "}
          the plant!
        </CustomText>

        <Image
          source={require("../../../assets/images/Onboarding/Brush.png")}
          className="w-[136px] h-[13px] absolute left-[180px] top-9"
          resizeMode="contain"
        />
      </View>

      <Image
        source={require("../../../assets/images/Onboarding/PlantScannerPreview.png")}
        className="w-full h-full flex-1"
        resizeMode="contain"
      />
    </>
  );
}

export default OnboardingStep1;
