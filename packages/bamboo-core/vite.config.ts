import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
			tsconfigPath: './tsconfig.json',
			exclude: ['**/*.test.ts', '**/*.spec.ts'],
		}),
	],
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
});
