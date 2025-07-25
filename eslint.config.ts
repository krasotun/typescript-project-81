import globals from 'globals';
// import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
// import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

// import { Linter } from 'eslint'

export default [
// stylistic.configs.recommended,
// pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,ts}'],
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForOfStatement',
          message:
            'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      semi: ['error', 'always'],
      'eol-last': ['error', 'always'],
      quotes: ['error', 'single'],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'import/prefer-default-export': 'error',
      indent: ['error', 2],
      'no-confusing-arrow': 'error',
      'arrow-parens': ['error', 'always'],
      'no-multi-spaces': 'error',
      'arrow-body-style': 'error',
    },
  },
]; // satisfies Linter.Config[]
