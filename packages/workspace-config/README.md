# @workspace/config

Shared TypeScript configurations for the Bamboo monorepo.

## Available Configurations

### `tsconfig.base.json`

Base configuration with strict TypeScript settings and common compiler options.

### `tsconfig.node.json`

Configuration for Node.js environments (build tools, scripts, etc.).

### `tsconfig.vue.json`

Configuration for Vue.js applications, components, and libraries with declaration generation.

### `tsconfig.vitest.json`

Configuration for Vitest test files.

## Usage

In your package's `tsconfig.json`:

```json
{
	"extends": "@workspace/config/tsconfig.vue.json",
	"compilerOptions": {
		"outDir": "./dist"
	},
	"include": ["src/**/*"],
	"exclude": ["dist"]
}
```

Make sure to add `@workspace/config` as a devDependency in your package.json:

```json
{
	"devDependencies": {
		"@workspace/config": "workspace:*"
	}
}
```
