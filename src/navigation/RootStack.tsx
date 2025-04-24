import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingStack from "./OnboardingStack";
import AppStack from "./AppStack";
import { RootStackParamList } from "./types";
import { useAppSelector } from "../store/store";

const Stack = createStackNavigator<RootStackParamList>();

function RootStack() {
  const onboardingCompleted = useAppSelector(
    (state) => state.initials.onboardingCompleted
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        {onboardingCompleted ? (
          <Stack.Screen name="AppStack" component={AppStack} />
        ) : (
          <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
