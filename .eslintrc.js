module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    'prettier'
  ],
  ignorePatterns: ['infra', 'old'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        modulesDirectories: ['node_modules']
      }
    }
  },
  plugins: ['react', 'import', 'react-hooks', 'dfkadyr-plugin', 'unused-imports'],
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '_'
      }
    ],
    'react/jsx-props-no-spreading': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/consistent-type-assertions': ['warn'],
    'react/display-name': 'off',
    'no-console': [
      'warn',
      {
        allow: ['info', 'error']
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          }
        ],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/no-invalid-void-type': [
      'warn',
      {
        allowInGenericTypeArguments: false
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'n/no-callback-literal': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'import/no-unresolved': 'off',
    'dfkadyr-plugin/path-checker': [
      'error',
      {
        alias: '@'
      }
    ],
    'dfkadyr-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/store-provider', '**/testing']
      }
    ],
    'dfkadyr-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/store-decorator.tsx']
      }
    ]
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'max-len': 'off'
      }
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    }
  ]
}
