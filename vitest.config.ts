import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			include: ['./src/**/*.test.ts'],
			setupFiles: ['./vitest.setup.ts'],
			exclude: [...configDefaults.exclude],
			root: fileURLToPath(new URL('./', import.meta.url)),
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
		},
	}),
);

export default bambooTestConfig;
