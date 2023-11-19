import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import dts from 'vite-plugin-dts';
import { defineConfig, type UserConfig } from 'vitest/config';
import { version } from './package.json';

/** https://vitejs.dev/config/ */
const bambooLibConfig: UserConfig = defineConfig({
	plugins: [vue(), dts()],
	build: {
		sourcemap: true,
		minify: true,
		cssCodeSplit: true,
		lib: {
			name: 'bamboo',
			formats: ['es', 'cjs'],
			entry: [
				'src/index.ts',
				'src/styles/colors.ts',
				'src/styles/animation.ts',
				'src/styles/fonts/inter.ts',
				'src/styles/fonts/assistant.ts',
			],
			fileName: (format, entry) => {
				if (entry === 'main') return `index.${format}.js`;
				return `${entry}.${format}.js`;
			},
		},
		rollupOptions: {
			treeshake: {
				preset: 'recommended',
			},
			external: ['vue'],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo?.name?.endsWith('.css')) {
						if (assetInfo.name === 'main.css') {
							return 'styles/index.css';
						} else {
							return `styles/${assetInfo.name}`;
						}
					}
					return `assets/${assetInfo.name}`;
				},
				exports: 'named',
				globals: { vue: 'Vue' },
				banner: '/* bamboo version ' + version + ' */',
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
