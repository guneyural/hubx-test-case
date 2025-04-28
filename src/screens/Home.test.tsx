import { render } from "@testing-library/react-native";
import HomeScreen from "./Home";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SafeAreaProvider } from "react-native-safe-area-context";

jest.useFakeTimers();
jest.mock("expo-navigation-bar", () => ({
  setBackgroundColorAsync: jest.fn(),
  setButtonStyleAsync: jest.fn(),
}));

const mockStore = configureStore();

describe("HomeScreen", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      home: {
        questions: [],
        categories: [],
      },
    });
  });

  const setup = () =>
    render(
      <Provider store={store}>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </Provider>
    );

  it("renders the HomeScreen without crashing", () => {
    const { toJSON } = setup();
    expect(toJSON()).toBeTruthy();
  });
});
