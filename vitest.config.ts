import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

const bambooTestConfig = mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
			environment: 'jsdom',
			exclude: [...configDefaults.exclude],
		},
	}),
)

export default bambooTestConfig
