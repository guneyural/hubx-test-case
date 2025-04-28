import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/GetStartedScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import PaywallScreen from "../screens/PaywallScreen";
import { OnboardingStackParamList } from "./types";

const Stack = createStackNavigator<OnboardingStackParamList>();

function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
