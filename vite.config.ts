import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import viteCompression from 'vite-plugin-compression';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';
import { defineConfig, type ViteUserConfig } from 'vitest/config';

/**
 * @see https://vitejs.dev/config/
 */
const bambooLibConfig: ViteUserConfig = defineConfig({
	plugins: [
		vue(),
		dts(),
		svgLoader(),
		viteCompression({ algorithm: 'gzip', ext: '.gz' }),
		viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
	],
	build: {
		minify: true,
		emptyOutDir: true,
		cssMinify: true,
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

export default bambooLibConfig;
