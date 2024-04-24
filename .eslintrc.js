module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '12',
    sourceType: 'module'
  },
  plugins: ['import', '@typescript-eslint', 'unicorn'],
  rules: {
    // allow any
    '@typescript-eslint/no-explicit-any': 'off',
    // 允許未使用變數
    '@typescript-eslint/no-unused-vars': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'space-in-parens': ['error', 'never'],
    'no-promise-executor-return': 'error',
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'space-unary-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'keyword-spacing': ['error', { before: true }],
    'prefer-arrow-callback': 'error',
    'no-sequences': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-multi-spaces': 'error',
    'padded-blocks': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'key-spacing': ['error', { beforeColon: false }],
    'no-await-in-loop': 'error',
    'no-spaced-func': 'error',
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'unicorn/filename-case': ['error', { case: 'camelCase' }]
  },
  ignorePatterns: ['node_modules/']
};
