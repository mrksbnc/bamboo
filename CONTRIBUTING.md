# Contributing to Bamboo

Thank you for your interest in contributing to Bamboo! This guide will help you get started with development and understand our contribution process.

## Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Submitting Changes](#submitting-changes)
- [Component Development](#component-development)

## Development Setup

### Prerequisites

- Node.js 20.x or 22.x
- pnpm 10.20.0 (recommended) or npm/yarn/bun
- Git

### Getting Started

1. Fork and clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/bamboo.git
cd bamboo
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the documentation development server:

```bash
pnpm docs:dev
```

The documentation site will be available at `http://localhost:5173`.

## Project Structure

```
bamboo/
├── src/
│   ├── components/       # Vue components (bo-button, bo-input, etc.)
│   ├── composables/      # Vue composables (useTheme, etc.)
│   ├── plugins/          # Vue plugins (BambooPlugin, BambooProvider)
│   ├── services/         # Utility services (color, identity, tooltip)
│   ├── shared/           # Shared utilities and types
│   ├── styles/           # Global CSS (colors, tokens, components)
│   └── lib.css           # Main library CSS entry point
├── src-doc/              # VitePress documentation
│   ├── en/
│   │   ├── components/   # Component documentation
│   │   ├── guide/        # User guides
│   │   ├── services/     # Service documentation
│   │   └── styles/       # Style system documentation
│   └── public/           # Static assets
└── docs/                 # Project documentation (architecture, testing)
```

See [docs/PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) for detailed architecture information.

## Development Workflow

### Building the Library

```bash
pnpm build
```

This builds the library for production using Vite/Rolldown.

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test --coverage

# Run tests in watch mode (for development)
pnpm test --watch
```

### Linting and Formatting

```bash
# Run all linters
pnpm lint

# Run specific linters
pnpm lint:eslint
pnpm lint:oxlint
pnpm lint:spell
pnpm lint:style

# Format code with Prettier
pnpm format
```

### Type Checking

```bash
pnpm type-check
```

## Code Style Guidelines

### General Principles

- Write clear, readable, and maintainable code
- Follow TypeScript best practices
- Prioritize accessibility in all components
- Keep components small and focused
- Use composition over inheritance

### TypeScript

- Use explicit types for function parameters and return values
- Avoid `any` types - use `unknown` or proper types
- Export types and interfaces for public APIs
- Use enums for fixed sets of values (e.g., `BoSize`, `BoVariant`)

### Vue Components

- Use `<script setup lang="ts">` syntax
- Define props with `defineProps<T>()` using TypeScript interfaces
- Use `defineEmits<T>()` for type-safe events
- Keep template logic simple - extract complex logic to composables
- Use CSS modules or scoped styles

### Naming Conventions

- Components: PascalCase with `Bo` prefix (e.g., `BoButton.vue`)
- Files: kebab-case (e.g., `bo-button.vue`, `use-theme.ts`)
- Props: camelCase (e.g., `fontSize`, `customColor`)
- Events: kebab-case in templates, camelCase in code (e.g., `@click`, `onClick`)
- CSS classes: kebab-case with `bo-` prefix (e.g., `bo-button`, `bo-button--primary`)

### CSS

- Use CSS custom properties (variables) for theming
- Follow the CSS Layers architecture (see [docs/CSS_LAYERS.md](./docs/CSS_LAYERS.md))
- Keep specificity low
- Use logical properties when possible (e.g., `margin-inline` instead of `margin-left/right`)
- Support both light and dark themes

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes when needed
- Ensure keyboard navigation works
- Test with screen readers when possible
- Maintain sufficient color contrast
- Provide focus indicators

## Testing

### Testing Strategy

We use Vitest and Vue Test Utils for testing. See [docs/TESTING.md](./docs/TESTING.md) for detailed testing patterns.

### What to Test

- Component rendering with different props
- User interactions (clicks, keyboard events)
- Emitted events
- Accessibility features
- Edge cases and error handling
- Service functions and utilities

### Test File Location

- Place test files next to the code they test
- Use `.test.ts` or `.spec.ts` extension
- Example: `bo-button.vue` → `bo-button.test.ts`

### Writing Tests

```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoButton from './bo-button.vue';

describe('BoButton', () => {
	it('renders with label', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		expect(wrapper.text()).toBe('Click me');
	});

	it('emits click event', async () => {
		const wrapper = mount(BoButton);
		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeTruthy();
	});
});
```

## Documentation

### Component Documentation

When adding or modifying components, update the documentation:

1. Create/update the component page in `src-doc/en/components/`
2. Follow the documentation structure guide in `src-doc/en/guide/documentation.md`
3. Include:
   - Basic usage example
   - Live interactive demos
   - API reference (props, events, slots)
   - Type definitions
   - Accessibility notes

### Code Comments

- Add JSDoc comments for public APIs
- Include `@param`, `@returns`, and `@example` tags
- Explain "why" not "what" in inline comments
- Document complex algorithms or business logic

Example:

````typescript
/**
 * Generates a unique identifier with optional prefix.
 *
 * @param prefix - Optional prefix for the ID
 * @returns A unique identifier string
 *
 * @example
 * ```ts
 * const id = generateId('button'); // "button-1234567890"
 * ```
 */
export function generateId(prefix?: string): string {
	// Implementation
}
````

## Submitting Changes

### Before Submitting

1. Ensure all tests pass: `pnpm test`
2. Run linters: `pnpm lint`
3. Format code: `pnpm format`
4. Type check: `pnpm type-check`
5. Build successfully: `pnpm build`
6. Update documentation if needed
7. Add tests for new features

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:

```
feat(button): add loading state prop
fix(input): correct focus behavior on disabled state
docs(components): update button API reference
```

### Pull Request Process

1. Create a feature branch from `main`:

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes and commit them with clear messages

3. Push to your fork:

   ```bash
   git push origin feat/your-feature-name
   ```

4. Open a Pull Request with:
   - Clear title describing the change
   - Description of what changed and why
   - Screenshots/GIFs for UI changes
   - Link to related issues

5. Wait for review and address feedback

6. Once approved, your PR will be merged

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Accessibility tested
- [ ] Works in light and dark themes
- [ ] Commit messages follow convention

## Component Development

### Creating a New Component

1. Create component directory:

   ```bash
   mkdir src/components/bo-your-component
   ```

2. Create component files:

   ```
   src/components/bo-your-component/
   ├── bo-your-component.vue
   ├── bo-your-component.test.ts
   └── types.ts (if needed)
   ```

3. Export from `src/components/index.ts`:

   ```typescript
   export { default as BoYourComponent } from './bo-your-component/bo-your-component.vue';
   ```

4. Create documentation in `src-doc/en/components/your-component.md`

5. Add to sidebar in `.vitepress/config.ts`

### Component Template

```vue
<script setup lang="ts">
	import { computed } from 'vue';

	interface Props {
		label?: string;
		disabled?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		label: '',
		disabled: false,
	});

	const emit = defineEmits<{
		click: [event: MouseEvent];
	}>();

	const handleClick = (event: MouseEvent) => {
		if (!props.disabled) {
			emit('click', event);
		}
	};
</script>

<template>
	<button class="bo-your-component" :disabled="disabled" @click="handleClick">
		{{ label }}
	</button>
</template>

<style scoped>
	.bo-your-component {
		/* Component styles */
	}
</style>
```

## Questions or Issues?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Check existing issues before creating new ones

Thank you for contributing to Bamboo! 🎋
