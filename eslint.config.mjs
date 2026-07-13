import nextPlugin from 'eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];
