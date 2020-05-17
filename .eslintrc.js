module.exports = {
  env: {
    browser: true,
    es6: true,
    webextensions: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    /** @see https://github.com/prettier/eslint-config-prettier#installation */
    "prettier/standard",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "jest",
    "typescript-sort-keys",
    "sort-keys-fix",
    // CircleCI で warn も検知可能にするため、全て error にする
    "only-error",
  ],
  rules: {
    "import/no-default-export": "error",
    "jest/prefer-strict-equal": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "document",
        message: "Use getDocument().",
      },
      {
        name: "Map",
        message: "Use standard object.",
      },
    ],
    "no-restricted-properties": [
      "error",
      {
        property: "innerText",
        message:
          "Use 'textContent' instead. Because 'innerText' is (almost) not recommended.",
      },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message:
          "Do not declare enums. Use `Plain Object` or `Literal Types` instead.",
      },
    ],
    "prefer-template": "error",
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "error",

    // constructor のショートハンド（メンバーの省略記法）を使いたいため
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",

    // ホイスティングの許可
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    // ts と eslint の相性不良周りを解消するための設定
    "import/no-unresolved": "off",

    // for-of-awaitを使用するため
    "no-await-in-loop": "off",

    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",

    // constructor のショートハンド（メンバーの省略記法）を許可
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-parameter-properties": "off",

    // React Component のボイラープレートコードを減らすため
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    // バグの温床になりやすいコードを防ぐため
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // 有用なケースがあるため
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    // Other
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/prefer-readonly": "error",

    // note you must disable the base rule as it can report incorrect errors
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
  },
}
