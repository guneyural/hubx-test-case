import { ScrollView } from "react-native";
import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: require("../../../assets/images/Paywall/Unlimited.png"),
    title: "Unlimited",
    subtitle: "Plant Identify",
  },
  {
    icon: require("../../../assets/images/Paywall/Faster.png"),
    title: "Faster",
    subtitle: "Process",
  },
  {
    icon: require("../../../assets/images/Paywall/Faster.png"),
    title: "Detailed",
    subtitle: "Plant care",
  },
];

function FeaturesContainer() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {features.map((item, index) => {
        return <FeatureItem {...item} key={index} index={index} />;
      })}
    </ScrollView>
  );
}

export default FeaturesContainer;
