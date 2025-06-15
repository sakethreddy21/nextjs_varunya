// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        light: 'var(--light)',
        'secondary-dark': 'var(--secondary-dark)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
