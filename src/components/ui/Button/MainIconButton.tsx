import React from "react";
import { Pressable } from "react-native";
import { CustomText } from "../CustomText";

interface Props {
  text: string;
  onPress?: () => void;
}

function MainIconButton({ text, onPress }: Props) {
  return (
    <Pressable
      className="bg-main py-[18px] px-4 rounded-xl h-[56px] w-[327px] gap-2 items-center justify-center"
      onPress={onPress}
    >
      <CustomText
        className="text-white text-center tracking-[-0.24px] text-[15px]"
        font="sf"
        weight="bold"
      >
        {text}
      </CustomText>
    </Pressable>
  );
}

export default MainIconButton;
