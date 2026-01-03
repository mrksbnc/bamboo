import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'bamboo-core',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			external: [],
			output: {
				preserveModules: false,
			},
		},
		sourcemap: true,
		minify: false,
	},
	plugins: [
		dts({
			insertTypesEntry: true,
			exclude: ['**/*.test.ts', '**/*.spec.ts'],
		}),
	],
});
