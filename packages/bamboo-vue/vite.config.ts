import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	appType: 'custom',
	plugins: [
		vue(),
		tailwindcss(),
		dts({
			exclude: ['**/*.test.ts'],
			tsconfigPath: './tsconfig.app.json',
		}),
	],
	build: {
		minify: true,
		cssMinify: true,
		emptyOutDir: true,
		reportCompressedSize: true,
		lib: {
			name: 'bamboo',
			cssFileName: 'lib',
			fileName: (format) => `index.${format}.js`,
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
		},
		rolldownOptions: {
			external: ['vue'],
			platform: 'neutral',
			input: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			optimization: {
				inlineConst: {
					mode: 'smart',
				},
			},
		},
	},
});
