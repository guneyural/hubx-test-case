import React from "react";
import { ScrollView, View } from "react-native";
import { QuestionType } from "../../features/home/types";
import { CustomText } from "../ui/CustomText";
import QuestionItem from "./QuestionItem";

interface Props {
  questions: QuestionType[];
}

function QuestionsSection({ questions }: Props) {
  return (
    <>
      <CustomText
        weight="medium"
        className="text-[15px] mb-4 !tracking-[-0.24px] leading-[20px]"
      >
        Get Started
      </CustomText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24 }}
      >
        {questions.map((item, index) => (
          <QuestionItem key={index} item={item} />
        ))}
      </ScrollView>
    </>
  );
}

export default QuestionsSection;
