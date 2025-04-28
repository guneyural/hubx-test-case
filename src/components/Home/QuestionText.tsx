import { CustomText } from "../ui/CustomText";

interface QuestionType {
  title: string;
  boldText?: string;
}

interface Props {
  item: QuestionType;
}

export function QuestionText({ item }: Props) {
  if (!item.boldText) {
    return (
      <CustomText className="text-white !tracking-[-0.24px] leading-[20px] text-[15px]">
        {item.title}
      </CustomText>
    );
  }

  const startIndex = item.title.indexOf(item.boldText);
  const endIndex = startIndex + item.boldText.length;

  const beforeBold = item.title.slice(0, startIndex);
  const boldPart = item.title.slice(startIndex, endIndex);
  const afterBold = item.title.slice(endIndex);

  return (
    <CustomText className="text-white !tracking-[-0.24px] leading-[20px] text-[15px]">
      {beforeBold}
      <CustomText
        weight="medium"
        className="text-white !tracking-[-0.24px] leading-[20px] text-[15px]"
      >
        {boldPart}
      </CustomText>
      {afterBold}
    </CustomText>
  );
}
