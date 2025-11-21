import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const serverConfig: UserConfig['server'] = {
  port: 5173,
  allowedHosts: true,      // DÜZELTME: 'true' yapılarak Cloudflare tüneline izin verildi
  strictPort: true,
  hmr: { protocol: 'ws' }  // Tünel üzerinden HMR (Canlı Yenileme) sorunsuz çalışır
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: serverConfig,
})