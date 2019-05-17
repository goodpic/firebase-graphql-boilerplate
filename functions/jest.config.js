module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "testMatch": [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "ignoreCodes": [2339, 7016]
      },
      "tsConfig": {
        "jsx": "react"
      }
    }
  }
};