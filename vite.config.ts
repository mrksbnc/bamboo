import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
	appType: 'custom',
	plugins: [
		vue(),
		dts(),
		svgLoader(),
		viteCompression({ algorithm: 'gzip', ext: '.gz' }),
		viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
	],
	optimizeDeps: {
		include: ['vue'],
	},
	build: {
		minify: true,
		emptyOutDir: true,
		cssMinify: true,
		cssCodeSplit: true,
		lib: {
			name: 'bamboo',
			entry: resolve(__dirname, 'src/index.ts'),
		},
		rollupOptions: {
			treeshake: true,
			external: ['vue'],
			output: {
				exports: 'named',
				globals: { vue: 'Vue' },
			},
			input: {
				main: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
