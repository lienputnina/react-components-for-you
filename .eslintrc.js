const eslintConfig = require('@liene-putnina/eslint-config-lintmyride');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ...eslintConfig.parserOptions,
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [...eslintConfig.extends, 'plugin:storybook/recommended'],
};
