const eslintConfig = require('@liene-putnina/eslint-config-lintmyride');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ...eslintConfig.parserOptions,
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [...eslintConfig.extends, 'plugin:storybook/recommended'],
  rules: {
    ...eslintConfig.rules,
  },
  overrides: [
    {
      files: ['*.+(spec|test|stories).*'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
