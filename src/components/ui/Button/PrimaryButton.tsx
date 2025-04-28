import React from "react";
import { Pressable } from "react-native";
import { CustomText } from "../CustomText";

interface Props {
  text: string;
  onPress?: () => void;
}

function PrimaryButton({ text, onPress }: Props) {
  return (
    <Pressable
      className="bg-main px-4 rounded-[14px] h-[52px] w-[327px] gap-2 items-center justify-center"
      onPress={onPress}
    >
      <CustomText
        className="text-white text-center !tracking-[-0.24px] text-[16px] leading-[24px]"
        font="rubik"
        weight="medium"
      >
        {text}
      </CustomText>
    </Pressable>
  );
}

export default PrimaryButton;
