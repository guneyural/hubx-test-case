import React, { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import BackgroundWrapper from "../components/ui/BackgroundWrapper";
import MainIconButton from "../components/ui/Button/MainIconButton";
import PaginationDots from "../components/Onboarding/PaginationDots";
import { CustomText } from "../components/ui/CustomText";
import { StackNavigationProp } from "@react-navigation/stack";
import { OnboardingStackParamList } from "../navigation/types";
import OnboardingStep1 from "../components/Onboarding/OnboardingStep1";
import OnboardingStep2 from "../components/Onboarding/OnboardingStep2";

interface Props {
  navigation: StackNavigationProp<OnboardingStackParamList, "GetStarted">;
}

function OnboardingScreen({ navigation }: Props) {
  const [step, setStep] = useState(0);

  const handleContinue = () => {
    if (step < 1) {
      setStep(step + 1);
    } else {
      console.log("End of onboarding. Paywall screen navigation");
    }
  };

  return (
    <BackgroundWrapper
      source={require("../../assets/images/Onboarding/Background.png")}
    >
      <SafeAreaView className="flex-1">
        {step == 0 && <OnboardingStep1 />}
        {step == 1 && <OnboardingStep2 />}

        <View className="items-center px-6 mb-6 z-9 relative">
          <MainIconButton text={"Continue"} onPress={handleContinue} />
          <PaginationDots currentIndex={step} totalDots={3} />
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
}

export default OnboardingScreen;
