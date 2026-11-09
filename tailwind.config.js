/** Configuración de Tailwind (se compila en los workflows de GitHub Actions) */
module.exports = {
  content: ['./*.html', './gl/*.html'],
  theme: {
    extend: {
      colors: {
        'azul-atlantico': '#06478d',
        'granito': '#7c7c7c',
        'arena': '#d7af5f',
        'papel': '#faf9f6',
        // Variantes mas oscuras solo para texto (contraste AA sobre papel/blanco)
        'granito-texto': '#5c5c5c',
        'arena-oscuro': '#8a6a1f',
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
};
