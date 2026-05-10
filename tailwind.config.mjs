/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,js,md,mdx}'],
  theme: {
    // Lock the project to the strict DICKIES palette only.
    // Tailwind's default palette is intentionally NOT extended, so utilities
    // like `bg-red-500` simply do not exist and cannot leak into the design.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkGreen: '#004b00',
      forestMoss: '#006600',
      freshLime: '#00ff00',
      eggshell: '#efebdd',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        display: ['Chantal', 'serif'],
        sans: ['Pacaembu', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.04em',
      },
      maxWidth: {
        prose: '60ch',
        shell: '78rem',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(0, 75, 0, 0.06), 0 8px 24px -16px rgba(0, 75, 0, 0.18)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
};
