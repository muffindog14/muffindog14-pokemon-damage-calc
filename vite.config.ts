import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/muffindog14-pokemon-damage-calc/',  // Change this to your repo name
  plugins: [react()]
})
