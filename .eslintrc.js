module.exports = {
    root: true,
    env: {
      es6: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "google",
      "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: [ "tsconfig.json", "tsconfig.dev.json" ],
      tsconfigRootDir: __dirname,
      sourceType: "module"
    },
    ignorePatterns: [
      "/lib/**/*", // Ignore built files.
      "/node_modules/**/*"
    ],
    plugins: [ "@typescript-eslint", "import" ],
    rules: {
      "quote-props": [ "error", "consistent-as-needed" ],
      "quotes": [ "error", "double" ],
      "object-curly-spacing": [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      "indent": [ "error", 2 ],
      "max-len": [ "error", { code: 120 } ],
      "semi": [ "error", "always" ],
      "comma-dangle": [ "error", "never" ],
      "comma-spacing": [ "error", { before: false, after: true } ],
      "arrow-parens": [ "error", "always" ],
      "arrow-body-style": [ "error", "as-needed",
        { requireReturnForObjectLiteral: true } ],
      "linebreak-style": 0
    },
    settings: {
      "import/resolver": {
        typescript: {} // this loads <rootdir>/tsconfig.json to eslint
      }
    }
  };
  