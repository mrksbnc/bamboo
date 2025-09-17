import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueDevTools()],
	build: {
		minify: true,
		cssMinify: true,
		emptyOutDir: true,
		lib: {
			name: 'bamboo',
			cssFileName: 'lib',
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
		},
	},
	mode: 'production',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
