import { render } from "@testing-library/react-native";
import PaywallScreen from "./PaywallScreen";
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

describe("PaywallScreen", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  const setup = () =>
    render(
      <Provider store={store}>
        <SafeAreaProvider>
          <PaywallScreen />
        </SafeAreaProvider>
      </Provider>
    );

  it("renders the PaywallScreen without crashing", () => {
    const { toJSON } = setup();
    expect(toJSON()).toBeTruthy();
  });
});
