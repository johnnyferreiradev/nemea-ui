/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.purple,
        tertiary: colors.cyan,
        grayscale: colors.slate,
        success: colors.green,
        failure: colors.red,
        warning: colors.yellow,
        dark: '#020617',
        light: '#ffffff',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeInDown: {
        '0%': {
          opacity: 0,
          translate: '0px -20px',
        },
        '100%': {
          opacity: 1,
        },
      },
      fadeOut: {
        '0%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
        },
      },
      slideIn: {
        from: {
          transform: 'translateX(calc(100% + 32px))',
        },
        to: {
          transform: 'translateX(0)',
        },
      },
      slideInRight: {
        from: {
          transform: 'translateX(calc(100% + 32px))',
        },
        to: {
          transform: 'translateX(0)',
        },
      },
      slideInLeft: {
        from: {
          transform: 'translateX(calc(-100% - 32px))',
        },
        to: {
          transform: 'translateX(0)',
        },
      },
      slideInUp: {
        from: {
          transform: 'translateY(calc(-100% - 32px))',
        },
        to: {
          transform: 'translateY(0)',
        },
      },
      slideInDown: {
        from: {
          transform: 'translateY(calc(100% + 32px))',
        },
        to: {
          transform: 'translateX(0)',
        },
      },
      swipeOutRight: {
        from: {
          transform: 'translateX(var(--radix-toast-swipe-end-x))',
        },
        to: {
          transform: 'translateX(calc(100% + 32px))',
        },
      },
      swipeOutLeft: {
        from: {
          transform: 'translateX(var(--radix-toast-swipe-end-x))',
        },
        to: {
          transform: 'translateX(calc(-100% - 32px))',
        },
      },
      swipeOutUp: {
        from: {
          transform: 'translateY(var(--radix-toast-swipe-end-y))',
        },
        to: {
          transform: 'translateY(calc(-100% - 32px))',
        },
      },
      swipeOutDown: {
        from: {
          transform: 'translateY(var(--radix-toast-swipe-end-y))',
        },
        to: {
          transform: 'translateY(calc(100% + 32px))',
        },
      },
      spin: {
        '100%': {
          transform: 'rotate(1turn)',
        },
      },
      spinDot: {
        '100%': {
          transform: 'rotate(0.5turn)',
        },
      },
      dot: {
        '20%': {
          backgroundPosition: '0% 0%, 50% 50%, 100% 50%',
        },
        '40%': {
          backgroundPosition: '0% 100%, 50% 0%, 100% 50%',
        },
        '60%': {
          backgroundPosition: '0% 50%, 50% 100%, 100% 0%',
        },
        '80%': {
          backgroundPosition: '0% 50%, 50% 50%, 100% 100%',
        },
      },
      line1: {
        '0%': {
          backgroundSize: '0 4px, 4px 0, 0 4px, 4px 0',
        },
        '12.5%': {
          backgroundSize: '100% 4px, 4px 0, 0 4px, 4px 0',
        },
        '25%': {
          backgroundSize: '100% 4px, 4px 100%, 0 4px, 4px 0',
        },
        '37.5%': {
          backgroundSize: '100% 4px, 4px 100%, 100% 4px, 4px 0',
        },
        '45%, 55%': {
          backgroundSize: '100% 4px, 4px 100%, 100% 4px, 4px 100%',
        },
        '62.5%': {
          backgroundSize: '0 4px, 4px 100%, 100% 4px, 4px 100%',
        },
        '75%': {
          backgroundSize: '0 4px, 4px 0, 100% 4px, 4px 100%',
        },
        '87.5%': {
          backgroundSize: '0 4px, 4px 0, 0 4px, 4px 100%',
        },
        '100%': {
          backgroundSize: '0 4px, 4px 0, 0 4px, 4px 0',
        },
      },
      line2: {
        '0%, 49%': {
          backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
        },
        '50%, 100%': {
          backgroundPosition: '100% 0, 100% 100%, 0 100%, 0 0',
        },
      },
      shape: {
        '33%': {
          borderRadius: 0,
          background: 'var(--secondary-color-200)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        '66%': {
          borderRadius: 0,
          background: 'var(--tertiary-color-200)',
          clipPath: 'polygon(50% 0, 50% 0, 100% 100%, 0 100%)',
        },
      },
      contentShow: {
        from: {
          opacity: 0,
          transform: 'translateX(-50%) scale(0.94)',
        },
        to: {
          opacity: 1,
          transform: 'translateX(-50%) scale(1)',
        },
      },
      slideDown: {
        from: {
          height: 0,
        },
        to: {
          height: 'var(--radix-accordion-content-height)',
        },
      },
      slideUp: {
        from: {
          height: 'var(--radix-accordion-content-height)',
        },
        to: {
          height: 0,
        },
      },
      collapsibleSlideDown: {
        from: {
          height: 0,
        },
        to: {
          height: 'var(--radix-collapsible-content-height)',
        },
      },
      collapsibleSlideUp: {
        from: {
          height: 'var(--radix-collapsible-content-height)',
        },
        to: {
          height: 0,
        },
      },
      pulse: {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0.5,
        },
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.1s linear forwards',
      'fade-in-down': 'fadeInDown 0.1s linear forwards',
      'logo-fade-in': 'fadeIn 1s forwards',
      'logo-fade-out': 'fadeOut 1s forwards',
      'fade-out': 'fadeOut 0.1s linear forwards',
      'slide-in': 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-in-right': 'slideInRight 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-in-left': 'slideInLeft 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-in-up': 'slideInUp 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-in-down': 'slideInDown 150ms cubic-bezier(0.16, 1, 0.3, 1)',

      'swipe-out': 'swipeOut 100ms ease-out',
      'swipe-out-right': 'swipeOutRight 100ms ease-out',
      'swipe-out-left': 'swipeOutLeft 100ms ease-out',
      'swipe-out-up': 'swipeOutUp 100ms ease-out',
      'swipe-out-down': 'swipeOutDown 100ms ease-out',
      spin: 'spin 1s infinite',
      'spin-linear': 'spin 1s infinite linear',
      'spin-dot': 'spinDot 1s infinite',
      dot: 'dot 1s infinite linear',
      line: 'line1 2s infinite, line2 2s infinite',
      shape: 'shape 2s infinite cubic-bezier(0.3, 1, 0, 1)',
      'content-show': 'contentShow 400ms cubic-bezier(0.16, 1, 0.3, 1)',

      'slide-up': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',

      'collapsible-slide-up': 'collapsibleSlideUp 300ms ease-out',
      'collapsible-slide-down': 'collapsibleSlideDown 300ms ease-out',

      pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  darkMode: 'class',
  plugins: [],
};
