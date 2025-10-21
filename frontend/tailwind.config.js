import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        pm: {
          bg: 'var(--pm-bg)',
          surface: 'var(--pm-surface)',
          surface2: 'var(--pm-surface-2)',
          text: 'var(--pm-text)',
          dim: 'var(--pm-text-dim)',
          primary: 'var(--pm-primary)',
          accent: 'var(--pm-accent)',
          danger: 'var(--pm-danger)',
          ring: 'var(--pm-ring)'
        }
      },
      borderRadius: {
        xl: '12px',
      },
    },
  },
  plugins: [typography(), forms(), containerQueries()],
}
