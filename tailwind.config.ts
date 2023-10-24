import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      dark: '#101010',
      red: '#FF6060',
      white: '#FFF',
      gray: '#656262'
    }
  },
  plugins: []
}
export default config
