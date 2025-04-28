if (typeof process === "undefined") {
  global.process = require("process");
}

process.env.EXPO_OS = "ios";
