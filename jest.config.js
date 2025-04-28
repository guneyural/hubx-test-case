module.exports = {
  preset: "jest-expo",
  setupFiles: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?|react-clone-referenced-element|react-native-svg|native-base|@react-native-community|react-redux))",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^@react-native-async-storage/async-storage$":
      "<rootDir>/__mocks__/@react-native-async-storage/async-storage.js",
  },
};
