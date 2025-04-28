import { View } from "react-native";

interface Props {
  currentIndex: number;
  totalDots: number;
}

function PaginationDots({ currentIndex, totalDots }: Props) {
  return (
    <View className="flex flex-row justify-center items-center gap-2 mb-[12.5px] mt-[32.5px]">
      {Array.from({ length: totalDots }, (_, index) => (
        <View
          testID={`pagination-dot-${index}`}
          key={index}
          className={`rounded-full
             ${
               currentIndex === index
                 ? "bg-mainTextColor w-2.5 h-2.5"
                 : "bg-[#13231B40] w-1.5 h-1.5"
             }`}
        />
      ))}
    </View>
  );
}

export default PaginationDots;
