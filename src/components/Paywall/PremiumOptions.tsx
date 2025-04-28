import React, { useState } from "react";
import { View } from "react-native";
import { CustomText } from "../ui/CustomText";
import { BlurView } from "expo-blur";
import PremiumOptionItem from "./PremiumOptionItem";

function PremiumOptions() {
  const [selectedPlan, setSelectedPlan] = useState<"year" | "month">("year");

  return (
    <View className="mt-[14px] items-center">
      <BlurView intensity={16} className="rounded-[14px] overflow-hidden">
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
      </BlurView>

      <BlurView intensity={16} className="rounded-[14px] overflow-hidden mt-4">
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
      </BlurView>
    </View>
  );
}

export default PremiumOptions;
