/** Configuración de Tailwind (se compila en los workflows de GitHub Actions) */
module.exports = {
  content: ['./porta_cuadernos_de_identidad_baionesa.html'],
  theme: {
    extend: {
      colors: {
        'azul-atlantico': '#06478d',
        'granito': '#7c7c7c',
        'arena': '#d7af5f',
        'papel': '#faf9f6',
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
