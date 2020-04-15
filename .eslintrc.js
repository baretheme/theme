module.exports = {
  root: true,
  extends: ["airbnb", "plugin:cypress/recommended"],
  parser: "babel-eslint",
  plugins: ["cypress"],
  env: {
    browser: true,
    jest: true,
    "cypress/globals": true
  },
  rules: {
    "no-shadow": 0,
    "max-len": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 2,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    "consistent-return": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "no-underscore-dangle": 0,
    "func-names": 2,
  }
};
