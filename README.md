# Bamboo

A modern, flexible, and type-safe Vue 3 component library built with Composition API and Tailwind CSS.

## Documentation

[Documentation - Bamboo](https://mrksbnc.github.io/bamboo)

## Quick Start

### Installation

Install Bamboo using your preferred package manager:

```bash
# npm
npm install @mrksbnc/bamboo

# yarn
yarn add @mrksbnc/bamboo

# pnpm
pnpm add @mrksbnc/bamboo
```

### Basic Usage

```vue
<template>
	<div>
		<bo-button
			label="Primary Button"
			@click="handleClick"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton } from '@mrksbnc/bamboo';

import '@mrksbnc/bamboo/lib.css';

const handleClick = () => {
	console.log('Button clicked!');
};
</script>
```

## Development

### Prerequisites

- Node.js 16.x or higher
- pnpm (recommended), npm, or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/mrksbnc/bamboo.git
cd bamboo

# Install dependencies
pnpm install

# Start development server for docs
pnpm docs:dev
```

### Available Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm test`         | Run test suite with coverage           |
| `pnpm type-check`   | Run TypeScript type checking           |
| `pnpm lint`         | Lint and fix code issues               |
| `pnpm format`       | Format code with Prettier              |
| `pnpm build`        | Build library for production           |
| `pnpm docs:dev`     | Start documentation development server |
| `pnpm docs:build`   | Build documentation for production     |
| `pnpm docs:preview` | Preview built documentation            |

### Testing

Bamboo uses Vitest for testing with comprehensive coverage:

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Generate coverage report
pnpm test --coverage
```

### Building

Build the library and documentation:

```bash
# Build library
pnpm build

# Build documentation
pnpm docs:build
```

## Browser Support

Bamboo supports modern browsers that support ES2015+:

- Chrome ≥ 87
- Firefox ≥ 78
- Safari ≥ 14
- Edge ≥ 88

## Contributing

Contributions are welcome! Please read our contribution guidelines before getting started.

### Development Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes with tests
4. Run tests: `pnpm test`
5. Lint your code: `pnpm lint`
6. Submit a pull request

### Component Guidelines

When creating new components:

- Follow the existing naming convention (Bo prefix)
- Include comprehensive TypeScript types
- Add unit tests with good coverage
- Update documentation
- Follow accessibility best practices
- Include dark mode support

## License

Bamboo is MIT licensed.

## Support

- [Documentation](https://mrksbnc.github.io/bamboo)
- [Report Issues](https://github.com/mrksbnc/bamboo/issues)
- [Discussions](https://github.com/mrksbnc/bamboo/discussions)

---

Built by [Bence Márkus](https://github.com/mrksbnc)
