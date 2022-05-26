module.exports = {
  // the root of the source code
  roots: ["<rootDir>/src"],

  // Jest transformations -- adds support for TypeScript
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  // setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each", "@testing-library/jest-dom/extend-expect"],

  // Test spec file resolution pattern
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
