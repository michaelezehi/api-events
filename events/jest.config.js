module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
