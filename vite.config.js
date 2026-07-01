import { defineConfig } from 'vite'

// Boceto estático: servimos index.html tal cual, con la carpeta assets/.
export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    open: true,
    host: true,
  },
  // Evita que Vite intente optimizar/transformar el .mp4 y los assets:
  // se sirven directamente desde la carpeta del proyecto.
  assetsInclude: ['**/*.mp4'],
})
