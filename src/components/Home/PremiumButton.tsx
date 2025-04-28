import { Image, TouchableOpacity, View } from "react-native";
import GradientText, { CustomText } from "../ui/CustomText";

function PremiumButton() {
  return (
    <TouchableOpacity className="rounded-[12px] bg-[#24201A] h-16 my-6 px-5 flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        <Image
          source={require("../../../assets/images/Home/UnreadIcon.png")}
          className="w-[36px] h-[30px]"
        />

        <View style={{ flex: 0.9 }}>
          <GradientText
            colors={["#E6C990", "#E4B046"]}
            height={21}
            start={{ x: 0.4935, y: 0 }}
            end={{ x: 1.3092, y: 0 }}
          >
            <CustomText
              font="sf"
              className="text-[16px] leading-[21px] !tracking-[-0.32px] text-white"
              weight="bold"
              style={{
                textShadowColor: "#00000052",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}
            >
              FREE{" "}
              <CustomText
                font="sf"
                weight="semibold"
                className="!tracking-[-0.32px] text-white leading-[21px] text-[16px]"
              >
                Premium Available
              </CustomText>
            </CustomText>
          </GradientText>

          <GradientText
            colors={["rgba(255, 222, 156, 0.8)", "rgba(245, 194, 91, 0.8)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0.02 }}
            height={16}
          >
            <CustomText
              font="sf"
              weight="regular"
              className="text-[13px] leading-[16px] text-white"
            >
              Tap to upgrade your account!
            </CustomText>
          </GradientText>
        </View>
      </View>

      <Image
        source={require("../../../assets/images/Home/BoldRightArrow.png")}
        className="w-6 h-6"
      />
    </TouchableOpacity>
  );
}

export default PremiumButton;
