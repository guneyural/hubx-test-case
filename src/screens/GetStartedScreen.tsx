import { SafeAreaView, Text, View } from "react-native";
import { useAppSelector } from "../store/store";

function GetStartedScreen() {
  const onboardingCompleted = useAppSelector(
    (state) => state.initials.onboardingCompleted
  );

  return (
    <SafeAreaView>
      <Text>
        Get Started Screen {onboardingCompleted ? "TAMAMLANDI" : "TAMAMLANMADI"}
      </Text>
    </SafeAreaView>
  );
}
export default GetStartedScreen;
