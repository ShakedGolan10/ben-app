/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
import { getAllSpacing, nums } from './tailwind-config.service'

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-large': '100px 1fr 100px',
        'grid-medium': '50px 1fr 50px',
        'grid-small': '1fr',
      },

      gridColumn: {
        'column-large': '2/3',
        'column-medium': '2/-1',
        'column-small|full': '1/-1',
      },
      screens: {
        'mobile': { 'max': '640px' },
        'smMobile': { 'max': '420px' },
        '1100px': { 'max': '1100px' }
        // => @media (max-width: 639px) { ... }
      },

      backgroundImage: {
        'bgc-footer-buttons': 'linear-gradient(270.08deg, #B4D4FF 0.08%, #65A7FF 165.84%)',
        'bgc-app-footer': 'linear-gradient(270.08deg, #B4D4FF 0.08%, #65A7FF 165.84%)',
        'bgc-stories-section': 'radial-gradient(circle, rgba(255,255,255,1) 37%, rgba(101,167,255,1) 78%)',
        'bgc-buttons': 'radial-gradient(circle, rgba(255,255,255,1) 11%, rgba(101,167,255,1) 57%)',
        'bgc-white': 'radial-gradient(circle, rgba(101,167,255,1) 0%, rgba(255,255,255,1) 0%)',
        'bg-ben-storypage-hero': 'url(../assets/imgs/my-story-hero-img.png)'
      },
      height: {
        'navbar-height': '90px',
        'logo-img-h': '75px',
        '1/2vh': '50vh',
        '1/3vh': '33.333333vh',
        '2/3vh': '66.666667vh',
        '1/4vh': '25vh',
        '2/4vh': '50vh',
        '3/4vh': '75vh',
        '1/5vh': '20vh',
        '2/5vh': '40vh',
        '3/5vh': '60vh',
        '4/5vh': '80vh',
        '1/6vh': '16.666667vh',
        '2/6vh': '33.333333vh',
        '3/6vh': '50vh',
        '4/6vh': '66.666667vh',
        '5/6vh': '83.333333vh',
        'fullvh': '100vh'
      },
      width: {
        'logo-img-w': '100px',
        '1/2vw': '50vw',
        '1/3vw': '33.333333vw',
        '2/3vw': '66.666667vw',
        '1/4vw': '25vw',
        '2/4vw': '50vw',
        '3/4vw': '75vw',
        '1/5vw': '20vw',
        '2/5vw': '40vw',
        '3/5vw': '60vw',
        '4/5vw': '80vw',
        '1/6vw': '16.666667vw',
        '2/6vw': '33.333333vw',
        '3/6vw': '50vw',
        '4/6vw': '66.666667vw',
        '5/6vw': '83.333333vw',
        'fullvw': '100vw'
      },
      zIndex: {
        ...nums(0, 50),
      },
      padding: {
        'right-padding-nav': '10%'
      },
      gap: {
        'nav-gap': '15vw',
        'nav-links-gap': '5vw'
      },
      colors: {
        'bgc-nav-bar-upper': '#B4D4FF',
        'headline-font-color': '#0F2167',
        'send-btn-footer': '#1676A0',
        'app-red': '#f2b0bc',
        'app-blue': '#b0d1f2',

      },

      spacing: {
        ...getAllSpacing('vh'),
        ...getAllSpacing('vw')
      },
      objectPosition: {
        'heroImg': '0vw -20vw',
        'heroImgSetZero': '0vw 0vw',
      },
      keyframes: {
        scrollMessages: {
          '0%': { transform: 'translateY(0)' },
          // '25%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(-100%)' },
          // '75%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      animation: {
        scrollMsg: 'scrollMessages 10s linear infinite'
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {} // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            foreground: '#FFFFFF', // forground is default text color
          } // dark theme colors,
        },
      }
    })
  ],
}
export default config

