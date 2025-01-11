import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
			environment: 'jsdom',
			include: ['./tests/**/*.test.ts'],
			exclude: [...configDefaults.exclude],
			root: fileURLToPath(new URL('./', import.meta.url)),
		},
	}),
);

export default bambooTestConfig;
