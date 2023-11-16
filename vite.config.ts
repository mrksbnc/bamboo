import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), dts()],
	build: {
		minify: true,
		cssCodeSplit: true,
		lib: {
			name: 'bamboo',
			formats: ['es', 'cjs'],
			entry: ['src/index.ts'],
			fileName: (format, entry) => {
				if (entry === 'main') return `index.${format}.js`;
				return `${entry}.${format}.js`;
			},
		},
		rollupOptions: {
			treeshake: true,
			external: ['vue'],
			output: {
				exports: 'named',
				globals: { vue: 'Vue' },
			},
			input: {
				main: resolve(__dirname, 'src/index.ts'),
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@utils': fileURLToPath(new URL('./utils', import.meta.url)),
		},
	},
});
