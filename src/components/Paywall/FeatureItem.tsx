import { Image, ImageSourcePropType, View } from "react-native";
import { BlurView } from "expo-blur";
import { CustomText } from "../ui/CustomText";

interface Props {
  icon: ImageSourcePropType;
  title: string;
  subtitle: string;
  index: number;
}

function FeatureItem({ icon, title, subtitle, index }: Props) {
  return (
    <View
      className="pl-2"
      style={{
        borderRadius: 14,
        overflow: "visible",
        height: 135,
        ...(index === 1
          ? {
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 4,
            }
          : {}),
      }}
    >
      <BlurView
        intensity={16}
        className="rounded-[14px] overflow-hidden h-[130px] w-[156px]"
      >
        <View className="rounded-[14px] p-4">
          <Image source={icon} className="w-[36px] h-[35.68px]" />

          <View className="mt-4">
            <CustomText
              font="rubik"
              weight="medium"
              className="!tracking-[0.38px] leading-[24px] text-[20px] text-white"
            >
              {title}
            </CustomText>

            <CustomText
              font="rubik"
              weight="regular"
              className="!text-[#FFFFFFB2] !tracking-[0.08px] text-[13px] leading-[18px]"
            >
              {subtitle}
            </CustomText>
          </View>
        </View>
      </BlurView>
    </View>
  );
}

export default FeatureItem;
