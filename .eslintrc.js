module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'array-bracket-newline': [
      'warn',
      {
        multiline: true,
      },
    ],
    'array-element-newline': [
      'warn',
      'always',
    ],
    'arrow-parens': [
      'warn',
      'as-needed',
    ],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    eqeqeq: [
      'error',
      'always',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'newline-per-chained-call': [
      'warn',
      { ignoreChainWithDepth: 1 },
    ],
    'no-cond-assign': [
      'error',
      'always',
    ],
    'no-console': [
      'warn',
      {
        allow: [
          'error',
          'info',
          'warn',
        ],
      },
    ],
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-shadow': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'object-shorthand': [
      'warn',
      'always',
    ],
    'one-var': [
      'error',
      'never',
    ],
    'prefer-const': 'error',
    'quote-props': [
      'warn',
      'as-needed',
    ],
    quotes: [
      'warn',
      'single',
    ],
    radix: 'error',
    'require-await': 'error',
    semi: [
      'warn',
      'always',
    ],
    'spaced-comment': [
      'warn',
      'always',
    ],
  },
};
