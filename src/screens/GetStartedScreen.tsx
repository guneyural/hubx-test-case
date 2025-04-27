import { SafeAreaView, Image, View, ScrollView } from "react-native";
import { CustomText } from "../components/ui/CustomText";
import BackgroundWrapper from "../components/ui/BackgroundWrapper";
import MainIconButton from "../components/ui/Button/MainIconButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { OnboardingStackParamList } from "../navigation/types";

interface Props {
  navigation: StackNavigationProp<OnboardingStackParamList, "GetStarted">;
}

function GetStartedScreen({ navigation }: Props) {
  return (
    <BackgroundWrapper
      source={require("../../assets/images/GetStarted/Background.png")}
    >
      <SafeAreaView className="flex-1">
        <View className="mt-3 mb-6 ml-6 pr-3.5 mr-[51px]">
          <CustomText
            font="rubik"
            weight="regular"
            className="text-[28px] mb-2"
          >
            Welcome
            <CustomText font="rubik" weight="light">
              {" "}
            </CustomText>
            to
            <CustomText font="rubik" weight="light">
              {" "}
            </CustomText>
            <CustomText font="rubik" weight="semibold">
              PlantApp
            </CustomText>
          </CustomText>

          <CustomText className="text-[16px] leading-[22px] text-[#13231BB2]">
            Identify more than 3000+ plants and 88% accuracy.
          </CustomText>
        </View>

        <Image
          className={`w-full flex-1`}
          resizeMode="contain"
          source={require("../../assets/images/GetStarted/PlantImage.png")}
        />

        <View className="items-center px-6 -mt-6">
          <MainIconButton
            text="Get Started"
            onPress={() => navigation.push("OnboardingScreen")}
          />
        </View>

        <CustomText className="text-[11px] leading-[15px] text-[#597165B2] px-[73px] text-center mb-2 mt-[17px]">
          By tapping next, you are agreeing to PlantID{" "}
          <CustomText className="underline text-[#597165B2]">
            Terms of Use
          </CustomText>{" "}
          &
          <CustomText className="underline text-[#597165B2]">
            {" "}
            Privacy Policy
          </CustomText>
          .
        </CustomText>
      </SafeAreaView>
    </BackgroundWrapper>
  );
}

export default GetStartedScreen;
