import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), dts()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		minify: true,
		lib: {
			name: 'gecko-ui',
			entry: 'src/index.ts',
			formats: ['es', 'cjs', 'umd'],
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
});
