import { TouchableOpacity, View } from "react-native";
import { CustomText } from "../ui/CustomText";

function PremiumOptions() {
  return (
    <View className="mt-[19px] items-center">
      <TouchableOpacity className="w-[327px] h-[60px] border-[1.5px] rounded-[14px]">
        <CustomText>1 Month</CustomText>
      </TouchableOpacity>
      <TouchableOpacity className="w-[327px] h-[60px] border-[1.5px] rounded-[14px] mt-4">
        <CustomText>1 Year</CustomText>
      </TouchableOpacity>
    </View>
  );
}

export default PremiumOptions;
