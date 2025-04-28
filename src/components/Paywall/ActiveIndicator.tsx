import { View } from "react-native";
import { cn } from "../../lib/utils";

function ActiveIndicator({ isActive }: { isActive: boolean }) {
  return (
    <View
      className={cn(
        "items-center justify-center w-6 h-6 rounded-full",
        isActive ? "bg-main" : "bg-[#FFFFFF26]"
      )}
    >
      {isActive && <View className="w-2 h-2 bg-white rounded-full" />}
    </View>
  );
}

export default ActiveIndicator;
