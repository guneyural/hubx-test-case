import { Image, TouchableOpacity, View } from "react-native";
import { CategoryItemType } from "../../features/home/types";
import { CustomText } from "../ui/CustomText";

interface Props {
  item: CategoryItemType;
  index: number;
  itemWidth: number;
  gapBetweenItems: number;
}

function CategoryItem({ item, index, itemWidth, gapBetweenItems = 11 }: Props) {
  return (
    <TouchableOpacity
      style={{
        width: itemWidth,
        marginBottom: 16,
        marginRight: index % 2 === 0 ? gapBetweenItems : 0,
        backgroundColor: "#F4F6F6",
        borderWidth: 0.5,
        borderColor: "#29BB892E",
        borderRadius: 12,
        padding: 12,
        height: 152,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <View className="flex-row items-center mb-2">
        <CustomText
          className="flex-shrink text-[16px] !tracking-[-0.32px] leading-[21px] relative z-10"
          weight="medium"
        >
          {item.title}
        </CustomText>
      </View>

      <Image
        src={item.image.url}
        className="h-[130px] w-[140px] absolute bottom-0 right-0 "
      />
    </TouchableOpacity>
  );
}

export default CategoryItem;
