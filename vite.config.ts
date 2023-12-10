import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';
import { defineConfig, type UserConfig } from 'vitest/config';

/** https://vitejs.dev/config/ */
const bambooLibConfig: UserConfig = defineConfig({
	plugins: [vue(), dts(), svgLoader()],
	build: {
		minify: true,
		cssCodeSplit: true,
		lib: {
			name: 'bamboo',
			formats: ['es', 'cjs'],
			entry: [
				'src/index.ts',
				'src/styles/colors.ts',
				'src/styles/layout.ts',
				'src/styles/animation.ts',
				'src/styles/typography.ts',
				'src/styles/fonts/inter.ts',
			],
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
				colors: fileURLToPath(new URL('src/styles/colors.ts', import.meta.url)),
				animation: fileURLToPath(
					new URL('src/styles/animation.ts', import.meta.url),
				),
				inter: fileURLToPath(
					new URL('src/styles/fonts/inter.ts', import.meta.url),
				),
				assistant: fileURLToPath(
					new URL('src/styles/fonts/assistant.ts', import.meta.url),
				),
				typography: fileURLToPath(
					new URL('src/styles/typography.ts', import.meta.url),
				),
				layout: fileURLToPath(new URL('src/styles/layout.ts', import.meta.url)),
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

export default bambooLibConfig;
