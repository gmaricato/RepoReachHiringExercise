module.exports = {
  "preset": "jest-expo",
  globals: {
    Uint8Array: Uint8Array,
    ArrayBuffer: ArrayBuffer
  },
  setupFilesAfterEnv: [
    "./jestSetup.ts",
    "@testing-library/jest-native/extend-expect"
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}
