import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import { AppStackParamList } from "./types";

const Stack = createStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
