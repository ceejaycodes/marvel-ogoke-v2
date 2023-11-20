import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem,1fr))"
      
    },
    colors: {
      'backdark' : '#282C33'
    }
    },
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark"],
  },
}
export default config
