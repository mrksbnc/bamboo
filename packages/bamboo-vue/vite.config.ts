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
			fileName: (format) => `index.${format === 'es' ? 'es.js' : 'umd.cjs'}`,
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			external: ['vue', '@vueuse/core'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
					'@vueuse/core': 'VueUse',
				},
				// Preserve modules for better tree-shaking
				preserveModules: false,
				// Optimize chunk size
				chunkFileNames: '[name]-[hash].js',
			},
		},
	},
});
