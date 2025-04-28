import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomText } from "./CustomText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { cn } from "../../lib/utils";

interface NavbarItemProps {
  source: ImageSourcePropType;
  label: string;
  isActive?: boolean;
}

function NavbarItem({ source, label, isActive = false }: NavbarItemProps) {
  return (
    <TouchableOpacity
      className="flex-1 h-[49px] items-center justify-center"
      onPress={() => console.log("Navigasyon mantığı")}
    >
      <Image source={source} className="w-[25px] h-[25px]" />

      <CustomText
        className={cn(
          "text-[10px] !tracking-[-0.24px]",
          isActive && "text-main"
        )}
      >
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}

function BottomNavbar() {
  const insets = useSafeAreaInsets();
  const route = useRoute(); // route.name ile mevcut rota anlaşılabilir ve buna göre ikonlarda güncelleme yapılabilir

  const navigation = useNavigation();

  return (
    <View
      className="h-[49px] border-t-[0.5px] bg-[#FFFFFFEB] border-[#13231B1A] flex-row"
      style={{ marginBottom: insets.bottom }}
    >
      <NavbarItem
        source={require("../../../assets/images/BottomNavbar/HomeIcon.png")}
        label="Home"
        isActive={route.name == "Home"}
      />
      <NavbarItem
        source={require("../../../assets/images/BottomNavbar/DiagnoseIcon.png")}
        label="Diagnose"
        isActive={route.name == "Diagnose"}
      />

      <View className="flex-1 h-[49px] items-center justify-center">
        <TouchableOpacity className="bg-main w-16 h-16 rounded-full items-center justify-center relative top-[-23px] border-4 border-[#FFFFFF3D] overflow-hidden">
          <View className="w-[60px] h-[60px] items-center justify-center">
            <LinearGradient
              colors={["#28AF6E", "#2CCC80"]}
              start={{ x: 0.55, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 999,
              }}
            />

            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 999,
                backgroundColor: "#00000003",
              }}
              pointerEvents="none"
            />

            <Image
              source={require("../../../assets/images/BottomNavbar/ScanIcon.png")}
              className="w-[25px] h-[25px]"
            />
          </View>
        </TouchableOpacity>
      </View>

      <NavbarItem
        source={require("../../../assets/images/BottomNavbar/GardenIcon.png")}
        label="My Garden"
        isActive={route.name == "MyGarden"}
      />

      <NavbarItem
        source={require("../../../assets/images/BottomNavbar/ProfileIcon.png")}
        label="Profile"
        isActive={route.name == "Profile"}
      />
    </View>
  );
}

export default BottomNavbar;
