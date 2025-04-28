import { Image, TouchableOpacity, View, Linking } from "react-native";
import { QuestionType } from "../../features/home/types";
import { QuestionText } from "./QuestionText";

interface Props {
  item: QuestionType;
}

function QuestionItem({ item }: Props) {
  const handlePress = () => {
    if (item.uri) {
      Linking.openURL(item.uri);
    }
  };

  return (
    <TouchableOpacity className="relative" onPress={handlePress}>
      <Image
        src={item.image_uri}
        className="rounded-xl border w-[240px] h-[164px] border-[#FFFFFF1A] mr-2.5"
      />

      <View className="absolute left-3.5 bottom-[13px] right-[26px]">
        <QuestionText item={item} />
      </View>
    </TouchableOpacity>
  );
}

export default QuestionItem;
