import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import eslintConfigPrettier from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  {
    plugins: {
      'unused-imports': unusedImports,
    },
  },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Basic ESLint recommendations and Vue essential rules
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  // Prettier integration to handle formatting conflicts
  skipFormatting,

  {
    rules: {
      // Vue-specific rules
      'vue/multi-word-component-names': 'off', // Allows single-word component names

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn'], // Warn for unused variables
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Disables need for return types

      // Unused imports removal
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // General ESLint rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Allow console logs in development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Warn on debugger statements in production
    },
  },
  eslintConfigPrettier,
]
