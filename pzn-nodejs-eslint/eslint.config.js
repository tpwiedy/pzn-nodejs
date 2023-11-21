export default [
  {
    files: ["src/**/*.js"],
    ignores: ["src/person.js"],
    rules: {
      semi: "error",
      "prefer-const": "warn",
      "require-await": "error",
    },
  },
];
