import { TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ActiveIndicator from "./ActiveIndicator";
import { CustomText } from "../ui/CustomText";
import { cn } from "../../lib/utils";
import Badge from "./Badge";

interface Props {
  title: string;
  description: React.ReactNode;
  isSelected: boolean;
  handleSelection: () => void;
}

function PremiumOptionItem({
  title,
  description,
  isSelected,
  handleSelection,
}: Props) {
  return (
    <TouchableOpacity
      onPress={handleSelection}
      activeOpacity={0.8}
      className={cn(
        "w-[327px] h-[60px] rounded-[14px] overflow-hidden",
        isSelected
          ? "border-[1.5px] border-main"
          : "border-[0.5px] border-[#FFFFFF4D]"
      )}
    >
      {title == "1 Year" && <Badge />}
      {isSelected ? (
        <LinearGradient
          colors={["rgba(40,175,110,0.168)", "rgba(40,175,110,0)"]}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          style={{ height: 60, justifyContent: "center" }}
        >
          <OptionContent
            isSelected={isSelected}
            title={title}
            description={description}
          />
        </LinearGradient>
      ) : (
        <View className="w-full h-full justify-center">
          <OptionContent
            isSelected={isSelected}
            title={title}
            description={description}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

function OptionContent({
  title,
  description,
  isSelected,
}: {
  title: string;
  description: React.ReactNode;
  isSelected: boolean;
}) {
  return (
    <View className="flex-row items-center gap-3 px-4 relative">
      <ActiveIndicator isActive={isSelected} />

      <View>
        <CustomText className="text-white text-[16px]" weight="medium">
          {title}
        </CustomText>
        {description}
      </View>
    </View>
  );
}

export default PremiumOptionItem;
