import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OnboardingScreen from "./OnboardingScreen";

describe("OnboardingScreen", () => {
  const mockNavigate = jest.fn();

  const setup = () =>
    render(<OnboardingScreen navigation={{ navigate: mockNavigate } as any} />);

  it("renders OnboardingStep1 initially", () => {
    const { getByText } = setup();
    expect(getByText("Take a photo to identify the plant!")).toBeTruthy();
  });

  it("renders Continue button", () => {
    const { getByText } = setup();
    expect(getByText("Continue")).toBeTruthy();
  });

  it("shows OnboardingStep2 after pressing Continue once", () => {
    const { getByText, queryByText } = setup();
    const continueButton = getByText("Continue");

    fireEvent.press(continueButton);

    expect(getByText("Get plant care guides")).toBeTruthy();
    expect(queryByText("Identify your plants effortlessly")).toBeNull();
  });

  it("navigates to PaywallScreen after pressing Continue twice", () => {
    const { getByText } = setup();
    const continueButton = getByText("Continue");

    fireEvent.press(continueButton);
    fireEvent.press(continueButton);

    expect(mockNavigate).toHaveBeenCalledWith("PaywallScreen");
  });

  it("updates PaginationDots correctly", () => {
    const { getByText, getByTestId } = setup();
    const continueButton = getByText("Continue");

    const firstDot = getByTestId("pagination-dot-0");
    const secondDot = getByTestId("pagination-dot-1");

    expect(firstDot.props.className).toContain("bg-mainTextColor");
    expect(secondDot.props.className).toContain("bg-[#13231B40]");

    fireEvent.press(continueButton);

    expect(firstDot.props.className).toContain("bg-[#13231B40]");
    expect(secondDot.props.className).toContain("bg-mainTextColor");
  });
});
