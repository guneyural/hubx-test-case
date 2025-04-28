import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { CustomText } from "../components/ui/CustomText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import FeaturesContainer from "../components/Paywall/FeaturesContainer";
import PrimaryButton from "../components/ui/Button/PrimaryButton";
import PremiumOptions from "../components/Paywall/PremiumOptions";
import { useAppDispatch } from "../store/store";
import { setOnboardingCompleted } from "../features/initials/initialsSlice";

function PaywallScreen() {
  const dispatch = useAppDispatch();

  const insets = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setBackgroundColorAsync("#1b241d");
        await NavigationBar.setButtonStyleAsync("light");
      }
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#1b241e]">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Image
        source={require("../../assets/images/Paywall/Background.png")}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      <View
        style={{
          top: insets.top + 8,
          position: "absolute",
          right: 19,
          zIndex: 60,
        }}
        testID="paywall-close-button-wrapper"
      >
        <Pressable
          onPress={() => {
            dispatch(setOnboardingCompleted(true));
          }}
          className="items-center justify-center w-6 h-6 bg-[#00000066] rounded-full"
          accessibilityRole="button"
        >
          <Image
            source={require("../../assets/images/Paywall/CloseIcon.png")}
          />
        </Pressable>
      </View>

      <View className="flex-1 relative z-50">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 26 }}
        >
          <View className="mt-[264px] ml-6" testID="paywall-title-section">
            <CustomText
              font="visby"
              weight="extrabold"
              className="text-white text-[30px]"
            >
              PlantApp
              <CustomText font="rubik" weight="bold" className="text-[24px]">
                {" "}
              </CustomText>
              <CustomText
                font="rubik"
                weight="light"
                className="text-[27px] text-white"
              >
                Premium
              </CustomText>
            </CustomText>

            <CustomText
              font="rubik"
              weight="light"
              className="leading-[24px] !tracking-[0.38px] text-[17px] !text-[#FFFFFFB2]"
            >
              Access All Features
            </CustomText>
          </View>

          <View className="mt-5">
            <FeaturesContainer />
          </View>

          <PremiumOptions />
        </ScrollView>
      </View>

      <View className="relative z-50 items-center">
        <PrimaryButton
          text="Try free for 3 days"
          testID="paywall-primary-button"
        />

        <CustomText
          weight="light"
          className="!text-[#FFFFFF85] text-center leading-[132%] text-[9px] px-6 mt-2"
        >
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </CustomText>

        <CustomText className="mt-2.5 text-[11px] !text-[#FFFFFF80] text-center mx-6">
          Terms • Privacy • Restore
        </CustomText>
      </View>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "#0d2119"]}
        locations={[0.5, 1]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
    </SafeAreaView>
  );
}

export default PaywallScreen;
