import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#07050e', soft: '#0d0918' },
        surface: { DEFAULT: '#120d21', raised: '#1a1230' },
        line: '#2a1f45',
        neon: {
          pink: '#ff3d9a',
          purple: '#a855f7',
          cyan: '#2dd4ff',
          amber: '#ffb454',
        },
        mist: '#a89ec6',
      },
      boxShadow: {
        'glow-pink': '0 0 24px rgba(255, 61, 154, 0.25)',
        'glow-cyan': '0 0 24px rgba(45, 212, 255, 0.2)',
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};

export default config;
