import { render, fireEvent } from "@testing-library/react-native";
import GetStartedScreen from "./GetStartedScreen";

describe("GetStartedScreen", () => {
  const mockNavigate = jest.fn();

  const setup = () =>
    render(<GetStartedScreen navigation={{ push: mockNavigate } as any} />);

  it("renders the welcome text", () => {
    const { getByText } = setup();
    expect(getByText("Welcome to PlantApp")).toBeTruthy();
  });

  it("renders the description text", () => {
    const { getByText } = setup();
    expect(
      getByText("Identify more than 3000+ plants and 88% accuracy.")
    ).toBeTruthy();
  });

  it("renders the Get Started button", () => {
    const { getByText } = setup();
    expect(getByText("Get Started")).toBeTruthy();
  });

  it("renders the terms and privacy policy text", () => {
    const { getByText } = setup();
    expect(
      getByText(/By tapping next, you are agreeing to PlantID/i)
    ).toBeTruthy();
  });

  it("navigates to OnboardingScreen when Get Started button is pressed", () => {
    const { getByText } = setup();
    const button = getByText("Get Started");
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith("OnboardingScreen");
  });
});
