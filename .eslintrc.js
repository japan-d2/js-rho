module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'standard',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', {
      'ignores': [
        'modules',
      ],
    }],
    'node/no-missing-import': ['off'],
  },
  overrides: [
    {
      files: ['**/tools/**/*.ts', '**/tests/**/*.ts'],
      rules: {
        // allow console logs in tools and tests
        'no-console': ['off'],
      },
    },
  ]
};
