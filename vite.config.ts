import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        hmr: {
            port: 5173,
            clientPort: 5173,
        },
        host: true,
        port: 5173,
        watch: {
            usePolling: true
        }
    },
})
