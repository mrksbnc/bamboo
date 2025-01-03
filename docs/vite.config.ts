import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgLoader()],
	resolve: {
		alias: {
			'@': resolve(__dirname, '../src'), // to resolve @ inside docs
		},
	},
})
