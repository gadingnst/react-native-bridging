/* eslint-disable comma-dangle */

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        semi: ['error', 'always'],
        indent: ['error', 2, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'never'],
        'space-before-blocks': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': 'error',
        'keyword-spacing': 'error',
        'arrow-spacing': 'error',
        'space-infix-ops': 'error',
        'no-console': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'no-useless-catch': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'space-before-function-paren': ['error', 'never'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/space-before-blocks': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true
            },
            singleline: {
              delimiter: 'semi',
              requireLast: true
            },
            multilineDetection: 'brackets'
          }
        ],
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true
          }
        ]
      }
    }
  ]
};
