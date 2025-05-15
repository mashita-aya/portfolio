module.exports = {
  extends: ["stylelint-config-recess-order", "stylelint-config-recommended-scss", "stylelint-prettier/recommended"],
  ignoreFiles: ["**/*.js"],
  rules: {
    "unit-disallowed-list": [
      "px",
      {
        ignoreMediaFeatureNames: {
          px: ["min-width", "max-width"],
        },
        ignoreProperties: {
          px: [/^\$?border(?!-radius)/],
        },
      },
    ],
    "selector-pseudo-element-colon-notation": "double",
    "scss/selector-no-union-class-name": true,
  },
};