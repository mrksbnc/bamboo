import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json-summary', 'json'],
			},
			environment: 'jsdom',
			exclude: [...configDefaults.exclude],
			root: fileURLToPath(new URL('./', import.meta.url)),
		},
	}),
)

export default bambooTestConfig
