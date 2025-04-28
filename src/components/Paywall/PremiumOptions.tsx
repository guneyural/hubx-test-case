import React, { useState } from "react";
import { Platform, View } from "react-native";
import { CustomText } from "../ui/CustomText";
import { BlurView } from "expo-blur";
import PremiumOptionItem from "./PremiumOptionItem";

function ItemWrapper({ children }: { children: React.ReactNode }) {
  if (Platform.OS == "ios")
    return (
      <BlurView intensity={16} className="rounded-[14px] overflow-hidden">
        {children}
      </BlurView>
    );

  return (
    <View className="rounded-[14px] bg-[#262d28] overflow-hidden">
      {children}
    </View>
  );
}

function PremiumOptions() {
  const [selectedPlan, setSelectedPlan] = useState<"year" | "month">("year");

  return (
    <View className="mt-[14px] items-center flex gap-4">
      <ItemWrapper>
        <PremiumOptionItem
          title="1 Month"
          isSelected={selectedPlan === "month"}
          description={
            <>
              <CustomText
                className="!text-[#FFFFFFB2] text-[12px]"
                weight="light"
              >
                $2.99/month,{" "}
                <CustomText className="!text-[#FFFFFFB2]">
                  auto renewable
                </CustomText>
              </CustomText>
            </>
          }
          handleSelection={() => setSelectedPlan("month")}
        />
      </ItemWrapper>

      <ItemWrapper>
        <PremiumOptionItem
          title="1 Year"
          description={
            <>
              <CustomText
                className="!text-[#FFFFFFB2] text-[12px]"
                weight="light"
              >
                First 3 days free, then $529,99/year
              </CustomText>
            </>
          }
          isSelected={selectedPlan === "year"}
          handleSelection={() => setSelectedPlan("year")}
        />
      </ItemWrapper>
    </View>
  );
}

export default PremiumOptions;
