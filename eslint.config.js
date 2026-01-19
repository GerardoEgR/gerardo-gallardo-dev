// eslint.config.js
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Configuración para archivos Astro
  ...eslintPluginAstro.configs.recommended,
  
  // Configuración general
  {
    rules: {
      // Aquí puedes personalizar tus reglas
      'no-console': 'warn',
    },
  },
  
  // Ignorar carpetas
  {
    ignores: ['dist', 'node_modules', '.astro'],
  },
];
