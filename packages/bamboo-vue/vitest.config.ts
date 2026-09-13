import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		resolve: {
			alias: {
				'@workspace/bamboo-core/manifests': fileURLToPath(
					new URL('../bamboo-core/src/manifests', import.meta.url),
				),
				'@workspace/bamboo-core': fileURLToPath(
					new URL('../bamboo-core/src/index.ts', import.meta.url),
				),
			},
		},
		test: {
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json-summary', 'json'],
				reportOnFailure: true,
			},
			environment: 'jsdom',
			exclude: [...configDefaults.exclude],
			root: fileURLToPath(new URL('./', import.meta.url)),
		},
	}),
);
