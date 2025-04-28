import { View } from "react-native";
import { CustomText } from "../ui/CustomText";

function Badge() {
  return (
    <View className="absolute -top-[1px] right-0 rounded-bl-[20px] rounded-tr-[14px] bg-main h-[26px] w-[77px] items-center justify-center z-10">
      <CustomText
        weight="medium"
        className="text-[12px] leading-[18px] text-center text-white"
      >
        Save 50%
      </CustomText>
    </View>
  );
}

export default Badge;
