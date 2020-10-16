module.exports = {
  "extends": ["standard", "standard-react"],
  "rules": {
    "no-redeclare:": ["off"],
    "no-var": 1,
    "handle-callback-err": 0,
    "no-case-declarations": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-closing-tag-location": 0,
    "comma-dangle": ["error", "only-multiline"],
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "eqeqeq": ["warn", "always", {
      "null": "ignore"
    }],
    "no-undef": 0,
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ]
  },
  "globals": {
    "FormData": false,
    "ddToken": false
  }
}
