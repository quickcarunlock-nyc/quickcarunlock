import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'trust-blue': 'var(--trust-blue)',
        'trust-blue-dark': 'var(--trust-blue-dark)',
        'trust-blue-light': 'var(--trust-blue-light)',
        'action-orange': 'var(--action-orange)',
        'action-orange-hover': 'var(--action-orange-hover)',
        'action-orange-light': 'var(--action-orange-light)',
        'safety-green': 'var(--safety-green)',
        'clean-white': 'var(--clean-white)',
        'slate-gray': 'var(--slate-gray)',
        'slate-light': 'var(--slate-light)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
