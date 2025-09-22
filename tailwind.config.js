/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // M2S Tech Solutions Design System
        m2s: {
          // Cores primárias baseadas na logo
          primary: {
            orange: '#ff8c00',
            light: '#d6d6d6',
            dark: '#545454',
            bg: '#1d1d1c'
          },
          // Variações para diferentes contextos
          text: {
            primary: '#d6d6d6',    // Texto principal
            secondary: '#545454',  // Texto secundário
            accent: '#ff8c00'      // Texto de destaque
          },
          background: {
            primary: '#1d1d1c',    // Fundo principal
            secondary: '#2a2a28',  // Fundo secundário (derivado)
            accent: '#ff8c00'      // Fundo de destaque
          },
          border: {
            default: '#545454',    // Bordas padrão
            light: '#6b6b6b',      // Bordas mais claras
            accent: '#ff8c00'      // Bordas de destaque
          },
          // Variações para hover e estados
          hover: {
            orange: '#e67c00',     // Orange mais escuro para hover
            light: '#e6e6e6',      // Light mais claro para hover
            dark: '#6b6b6b'        // Dark mais claro para hover
          }
        }
      },
      // Fontes personalizadas (se necessário)
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      // Tamanhos de texto customizados
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Espaçamentos customizados
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Animações personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-orange': 'pulseOrange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseOrange: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(255, 140, 0, 0.7)' 
          },
          '70%': { 
            boxShadow: '0 0 0 10px rgba(255, 140, 0, 0)' 
          },
        },
      },
      // Box shadows personalizados
      boxShadow: {
        'orange': '0 4px 14px 0 rgba(255, 140, 0, 0.25)',
        'orange-lg': '0 10px 25px -3px rgba(255, 140, 0, 0.3), 0 4px 6px -2px rgba(255, 140, 0, 0.1)',
        'dark': '0 4px 14px 0 rgba(29, 29, 28, 0.8)',
      }
    },
  },
  plugins: [],
}