import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// =====================================================================
// PENTING UNTUK GITHUB PAGES:
// Ganti '/nama-repo-kamu/' di bawah dengan nama repository GitHub kamu.
// Contoh: kalau repo kamu bernama "ucapan-untuk-dinda", maka:
//   base: '/ucapan-untuk-dinda/'
// Kalau kamu deploy sebagai user/organization page (username.github.io),
// ganti base menjadi '/'
// =====================================================================
export default defineConfig({
  plugins: [react()],
  base: '/nama-repo-kamu/',
})
