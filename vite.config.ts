import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json',
		}),
		svgLoader(),
		vueDevTools(),
	],
	build: {
		lib: {
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			name: 'bamboo',
			fileName: 'bamboo',
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
