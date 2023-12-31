import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
         
      colors:{
        'primary' : '#56ccfa',
        'secundary': '#8ddcfa',
        'tertiary': '#c4ecfb',
        'custom-white': '#fcfcfc',
        'background-primary': '#09091c',

        'contraste-primary': '#14adfc',
        'contraste-secundary': '#792bf7',
        'contraste-tertiary': '#f71cb0',
      },
    },
  },
  plugins: [],
}
export default config
