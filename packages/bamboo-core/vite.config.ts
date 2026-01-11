import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
			exclude: ['**/*.test.ts'],
			tsconfigPath: './tsconfig.json',
		}),
	],
	build: {
		minify: true,
		sourcemap: true,
		lib: {
			formats: ['es'],
			fileName: 'index',
			name: 'bamboo-core',
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
