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
			name: 'complib',
			entry: 'src/index.ts',
			formats: ['es', 'cjs', 'umd'],
			fileName: (format) => `lib.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
			treeshake: true,
			input: {
				main: resolve(__dirname, 'src/index.ts'),
			},
			output: {
				exports: 'named',
				sourcemap: true,
				globals: {
					vue: 'Vue',
				},
				assetFileNames: 'assets/[name].[ext]',
				chunkFileNames: 'chunks/[name].js',
			},
		},
	},
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json-summary', 'json'],
		},
		environment: 'jsdom',
		globals: false,
		globalSetup: [],
		setupFiles: [],
	},
});
