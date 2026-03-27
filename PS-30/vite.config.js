import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/PS-30-Modular-Component-Showcase-Application/",
  plugins: [react()],
})