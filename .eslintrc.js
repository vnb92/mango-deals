module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'filenames'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],

  parserOptions: {
    sourceType: 'module'
  },
  ignorePatterns: ['/src/client/src/chart/vendors/*'],

  rules: {
    'filenames/match-regex': [1, '^[a-z0-9\\.\\-]+$'], // kebab-case

    'no-duplicate-imports': 'error',
    'import/no-self-import': 2,
    'import/order': ['warn', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    'import/newline-after-import': ['warn', { count: 1 }],

    'react/prop-types': 0,
    'react/display-name': 0,

    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-inf': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
      }
    },
  ]
}
