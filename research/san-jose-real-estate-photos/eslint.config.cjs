// Focused ESLint 9 validation without changing the repository's legacy config.
module.exports = [
  ...require('eslint-config-next/core-web-vitals'),
  ...require('eslint-config-next/typescript'),
];
