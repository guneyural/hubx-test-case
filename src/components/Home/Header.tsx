import { Image, View } from "react-native";
import { CustomText } from "../ui/CustomText";
import { BlurView } from "expo-blur";

function Header() {
  return (
    <View className="bg-[#F6F6F6] px-6 pb-3.5 pt-[3px] border-b-[0.5px] border-[#3C3C431A] relative">
      <CustomText className="text-[16px] mb-1.5">Hi, plant lover!</CustomText>
      <CustomText
        className="text-[24px] leading-[28px] !tracking-[0.35px]"
        weight="medium"
      >
        Good Afternoon! ⛅
      </CustomText>

      <Image
        source={require("../../../assets/images/Home/HeaderBG-Left.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 100,
          height: 70,
          resizeMode: "contain",
        }}
      />
      <Image
        source={require("../../../assets/images/Home/HeaderBG-Right.png")}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 89,
          height: 65,
          resizeMode: "contain",
          opacity: 0.54,
        }}
      />

      <BlurView intensity={5} className="mt-[14px]">
        <View className="border-[0.5px] rounded-xl border-[#3C3C4340] py-3 px-4 flex flex-row items-center gap-3 bg-[#FFFFFFE0]">
          <Image
            source={require("../../../assets/images/Home/SearchIcon.png")}
            className="w-5 h-5"
          />

          <CustomText className="text-[15.5px] !text-[#AFAFAF]">
            Search for plants
          </CustomText>
        </View>
      </BlurView>
    </View>
  );
}

export default Header;
