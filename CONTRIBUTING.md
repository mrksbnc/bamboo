# Contributing to Bamboo

Thank you for your interest in contributing to Bamboo! This guide will help you get started with contributing.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Creating a New Component](#creating-a-new-component)
- [Code Quality Standards](#code-quality-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Accessibility](#accessibility)
- [Pull Request Process](#pull-request-process)
- [Getting Help](#getting-help)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 or 22 (as specified in `package.json` engines)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **pnpm**: Version 10.22.0 (required package manager)
  - Install: `npm install -g pnpm@10.22.0`
  - Verify installation: `pnpm --version`

### Setting Up Your Development Environment

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/bamboo.git
cd bamboo
```

2. Install dependencies:

```bash
pnpm install
```

3. Verify your setup by running tests:

```bash
pnpm test
```

4. Start the documentation development server:

```bash
pnpm docs:dev
```

If all commands run successfully, your environment is ready!

## Project Structure

Understanding the project structure will help you navigate the codebase:

```
bamboo/
├── src/                      # Main source code
│   ├── components/           # Vue 3 UI components
│   │   └── bo-[name]/       # Each component in its own directory like a module
│   │       ├── bo-[name].vue       # Component template
│   │       ├── bo-[name].ts        # Component constants, logic & types
│   │       ├── bo-[name].test.ts   # Component tests
│   │       └── index.ts            # Component exports
│   ├── composables/          # Reusable Vue composables
│   ├── core/                 # Core utilities and types
│   ├── services/             # Business logic services
│   ├── shared/               # Shared utilities and helpers
│   └── lib.css               # Global styles and CSS variables
├── src-docs/                 # VitePress documentation
│   ├── en/                   # English documentation
│   │   ├── components/       # Component documentation
│   │   ├── guide/            # User guides
│   │   ├── services/         # Service documentation
│   │   └── styles/           # Style documentation
│   └── public/               # Static assets for docs
├── .husky/                   # Git hooks configuration
├── config/                   # Configuration files
└── public/                   # Public assets
```

### Key Directories

- **src/components**: All UI components follow a consistent structure with Vue file, TypeScript definitions, tests, and exports
- **src/services**: Business logic like ColorService and IdentityService
- **src/composables**: Reusable composition functions for Vue 3
- **src/shared**: Shared utilities including accessibility helpers
- **src-docs**: VitePress-based documentation site

## Development Workflow

### Available Scripts

```bash
# Development
pnpm docs:dev          # Start documentation dev server (http://localhost:5173)

# Building
pnpm build             # Build the library for production
pnpm docs:build        # Build documentation site
pnpm docs:preview      # Preview built documentation

# Testing
pnpm test              # Run tests with coverage

# Code Quality
pnpm lint              # Run all linters (ESLint, Oxlint, Stylelint, CSpell)
pnpm lint:eslint       # Run ESLint only
pnpm lint:oxlint       # Run Oxlint only
pnpm lint:spell        # Run spell checker only
pnpm format            # Format code with Prettier
pnpm type-check        # Run TypeScript type checking
```

### Creating a Branch

Always create a new branch for your work.

```bash
git checkout -b feature/component-name
# or
git checkout -b fix/issue-description
```

Use descriptive branch names:

- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation updates
- `refactor/` for code refactoring

## Creating a New Component

Follow these steps to create a new component that matches the project's conventions:

### 1. Create Component Directory

```bash
mkdir src/components/bo-your-component
cd src/components/bo-your-component
```

### 2. Create Component Files

Create four files following the naming convention:

#### `bo-your-component.ts` - Types and Logic

```typescript
export enum BoYourComponentVariant {
	default = 'default',
	primary = 'primary',
}

export interface BoYourComponentProps {
	variant?: BoYourComponentVariant;
	// Add your props here
}
```

#### `bo-your-component.vue` - Template

```vue
<template>
	<div :class="classes">
		<!-- Your component template -->
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import type { ConditionalCssProperties } from '@/core/css';
	import type { BoYourComponentProps } from './bo-your-component';

	const props = withDefaults(defineProps<BoYourComponentProps>(), {
		variant: 'default',
	});

	const classes = computed<ConditionalCssProperties>(() => {
		return {
			'bo-your-component': true,
			[`bo-your-component__variant--${props.variant}`]: true,
		};
	});
</script>

<style scoped lang="scss">
	.bo-your-component {
		// Your styles here
	}
</style>
```

#### `bo-your-component.test.ts` - Tests

```typescript
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoYourComponent from './bo-your-component.vue';
import { BoYourComponentVariant } from './bo-your-component';

describe('BoYourComponent', () => {
	test('should render with default props', () => {
		const wrapper = mount(BoYourComponent);
		expect(wrapper.exists()).toBe(true);
	});

	test('should apply correct variant classes', () => {
		const wrapper = mount(BoYourComponent, {
			props: {
				variant: BoYourComponentVariant.primary,
			},
		});
		expect(wrapper.classes()).toContain('bo-your-component__variant--primary');
	});
});
```

#### `index.ts` - Exports

```typescript
export { default as BoYourComponent } from './bo-your-component.vue';
export * from './bo-your-component'; // * exports are preferred over individual ones
```

### 3. CSS Styling with BEM

Bamboo uses the **BEM (Block Element Modifier)** methodology for CSS class naming. This ensures consistent, maintainable, and scalable styles.

#### BEM Structure

- **Block**: The component itself (e.g., `bo-your-component`)
- **Element**: A part of the component (e.g., `bo-your-component__icon`)
- **Modifier**: A variation or state (e.g., `bo-your-component__variant--primary`)

#### Naming Convention

```
.block {}
.block__element {}
.block__modifier--value {}
.block__element--modifier {}
```

#### Example Component Styles

```scss
// Block
.bo-button {
	display: inline-flex;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
}

// Element
.bo-button__icon {
	margin-right: 0.5rem;
}

.bo-button__text {
	font-weight: 500;
}

// Modifiers
.bo-button__variant--primary {
	background-color: var(--blue-600);
	color: white;
}

.bo-button__variant--secondary {
	background-color: var(--gray-200);
	color: var(--gray-900);
}

.bo-button__size--small {
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
}

.bo-button__size--large {
	padding: 0.75rem 1.5rem;
	font-size: 1.125rem;
}

// State modifiers
.bo-button--disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
```

#### Applying BEM Classes in Vue

```vue
<template>
	<button :class="classes">
		<span class="bo-button__icon" v-if="icon">
			<bo-icon :icon="icon" />
		</span>
		<span class="bo-button__text">
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import type { ConditionalCssProperties } from '@/core/css';

	const props = defineProps<{
		variant?: 'primary' | 'secondary';
		size?: 'small' | 'medium' | 'large';
		disabled?: boolean;
		icon?: string;
	}>();

	const classes = computed<ConditionalCssProperties>(() => {
		return {
			'bo-button': true,
			[`bo-button__variant--${props.variant}`]: true,
			[`bo-button__size--${props.size}`]: true,
			'bo-button--disabled': props.disabled,
		};
	});
</script>
```

#### BEM Best Practices

- Keep nesting shallow - avoid deep element chains
- Use modifiers for variations, not separate blocks
- Prefix all classes with `bo-` to avoid conflicts
- Use CSS variables for theming (e.g., `var(--blue-600)`)
- Keep styles scoped to the component

### 4. Export from Main Index

Add your component to `src/components/index.ts` using wildcard exports (preferred over individual named exports):

```typescript
export * from './bo-your-component';
```

This exports all named exports from the component module, keeping the main index clean and maintainable.

### 5. Add Documentation

Create a documentation file at `src-docs/en/components/your-component.md` following this structure:

```markdown
---
title: bo-your-component
---

<script setup lang="ts">
import { BoYourComponent, BoYourComponentVariant } from '@/components/bo-your-component';
</script>

# bo-your-component

Brief description of what the component does and its purpose.

### Basic usage

\`\`\`vue
<bo-your-component variant="primary" />
\`\`\`

<bo-your-component variant="primary" />

## Props

### Required

| Name    | Type     | Description                |
| ------- | -------- | -------------------------- |
| `value` | `string` | The value of the component |

### Optional

| Name              | Type                     | Description                                 |
| ----------------- | ------------------------ | ------------------------------------------- |
| `id`              | `string`                 | Unique identifier for the element           |
| `data-testid`     | `string`                 | Unique data-test-id for testing             |
| `variant`         | `BoYourComponentVariant` | The visual variant of the component         |
| `customCssClass`  | `string`                 | Custom css class passed to the root element |
| `role`            | `string`                 | The accessibility role of the element       |
| `ariaLabel`       | `string`                 | The accessible label                        |
| `ariaLabelledBy`  | `string`                 | Reference to an element that labels this    |
| `ariaDescribedBy` | `string`                 | Identifies elements that describe this      |

## Variants

The component supports different variants with the `variant` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-your-component value="Default Variant" :variant="BoYourComponentVariant.default" />
  <bo-your-component value="Primary Variant" :variant="BoYourComponentVariant.primary" />
  <bo-your-component value="Secondary Variant" :variant="BoYourComponentVariant.secondary" />
</div>

\`\`\`vue
<bo-your-component value="Default Variant" :variant="BoYourComponentVariant.default" />
<bo-your-component value="Primary Variant" :variant="BoYourComponentVariant.primary" />
<bo-your-component value="Secondary Variant" :variant="BoYourComponentVariant.secondary" />
\`\`\`

## [Additional Feature Sections]

Add sections for each major feature or prop group (e.g., Sizes, Colors, States).
Each section should include:

- Description of the feature
- Live preview using the component
- Code example showing usage

### Interfaces and constants

::: code-group

\`\`\`ts [bo-your-component.ts]
export enum BoYourComponentVariant {
default = 'default',
primary = 'primary',
secondary = 'secondary',
}

export interface BoYourComponentProps {
/** The id of the element. \*/
id?: string;
/** The data test id of the element. _/
dataTestId?: string;
/\*\* The variant of the component. _/
variant?: BoYourComponentVariant;
/** One or multiple css classes to be used for overriding the default styles. \*/
customCssClass?: string;
/** The role of the element. _/
role?: string;
/\*\* Defines a string value that labels the current element. _/
ariaLabel?: string;
/** Reference to an element that labels the current element. \*/
ariaLabelledBy?: string;
/** Identifies the element (or elements) that describes the object. \*/
ariaDescribedBy?: string;
}
\`\`\`

:::
```

#### Documentation Structure Guidelines

1. **Frontmatter**: Include title in YAML frontmatter
2. **Script Setup**: Import component and related types for live examples
3. **Title & Description**: Clear H1 title and brief description
4. **Basic Usage**: Simple example with both code and live preview
5. **Props Tables**: Separate required and optional props
6. **Feature Sections**: One section per major feature with:
   - Visual examples in styled divs
   - Code snippets showing usage
7. **Interfaces**: Code group at the end showing TypeScript definitions

#### Live Preview Pattern

Always show live component examples followed by the code:

```markdown
<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-your-component value="Example 1" />
  <bo-your-component value="Example 2" />
</div>

\`\`\`vue
<bo-your-component value="Example 1" />
<bo-your-component value="Example 2" />
\`\`\`
```

## Code Quality Standards

Bamboo uses multiple tools to maintain code quality. All checks must pass before your PR can be merged.

### Linting Tools

1. **ESLint**: JavaScript/TypeScript linting
   - Config: `eslint.config.ts`
   - Run: `pnpm lint:eslint`

2. **Oxlint**: Fast Rust-based linter
   - Config: `.oxlintrc.json`
   - Run: `pnpm lint:oxlint`

3. **CSpell**: Spell checking
   - Config: `cspell.yaml`
   - Run: `pnpm lint:spell`
   - Add project-specific words to `config/cspell/project-words.txt`

### Code Formatting

- **Prettier**: Automatic code formatting
  - Config: `.prettierrc.json`
  - Run: `pnpm format`
  - Automatically runs on pre-commit via Husky

### TypeScript

- All code must pass TypeScript type checking
- Run: `pnpm type-check`
- Use strict typing - avoid `any` types

### Pre-commit Hooks

Husky automatically runs Prettier on commit:

- Located in `.husky/pre-commit`
- Ensures all committed code is formatted

### Running All Checks

Before submitting a PR, run:

```bash
pnpm lint          # Run all linters
pnpm type-check    # Check TypeScript types
pnpm test          # Run tests
```

## Testing

Bamboo uses Vitest for unit testing with Vue Test Utils.

### Test File Location

- Place test files next to the component: `bo-component/bo-component.test.ts`
- Use the naming convention: `[component-name].test.ts`

### Writing Tests

Follow the existing test patterns (see `src/components/bo-text/bo-text.test.ts` for examples):

```typescript
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoYourComponent from './bo-your-component.vue';

describe('BoYourComponent', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoYourComponent, {
			props: {
				// your props
			},
		});

		expect(wrapper.exists()).toBe(true);
	});

	test('should apply correct classes', () => {
		const wrapper = mount(BoYourComponent, {
			props: { variant: 'primary' },
		});

		expect(wrapper.classes()).toContain('bo-your-component__variant--primary');
	});
});
```

### Running Tests

```bash
pnpm test              # Run all tests with coverage
pnpm test -- --watch   # Run tests in watch mode (for development)
```

### Test Coverage

- Coverage reports are generated in the `coverage/` directory
- Aim for high test coverage on new components
- Test all props, variants, and edge cases

## Documentation

Documentation is built with VitePress and lives in the `src-docs/` directory.

### Adding Documentation Pages

1. Create a markdown file in the appropriate directory:
   - Components: `src-docs/en/components/`
   - Guides: `src-docs/en/guide/`
   - Services: `src-docs/en/services/`
   - Styles: `src-docs/en/styles/`

2. Update the VitePress config if adding a new section:
   - Edit `.vitepress/config.ts`

### Documentation Format

Use clear, concise markdown with code examples:

```markdown
# Component Name

Brief description.

## Installation

\`\`\`bash
pnpm add @mrksbnc/bamboo
\`\`\`

## Usage

\`\`\`vue
<template>
<bo-component />
</template>

<script setup lang="ts">
import { BoComponent } from '@mrksbnc/bamboo/components';
</script>

\`\`\`

## Props

| Prop  | Type     | Default | Description |
| ----- | -------- | ------- | ----------- |
| prop1 | `string` | `''`    | Description |
```

### Previewing Documentation

```bash
pnpm docs:dev      # Start dev server at http://localhost:5173
pnpm docs:build    # Build for production
pnpm docs:preview  # Preview production build
```

## Accessibility

Bamboo is committed to creating accessible components. Follow these guidelines:

### ARIA Attributes

- Use appropriate ARIA roles, labels, and descriptions
- Reference `src/shared/accessibility.ts` for ARIA utilities
- Available: `AriaLive` enum (polite, assertive, off)

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Support standard keyboard patterns (Tab, Enter, Space, Arrow keys)
- Test with keyboard only - no mouse

### Semantic HTML

- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Avoid `<div>` for interactive elements
- Ensure proper heading hierarchy

### Example Accessible Component

```vue
<template>
	<button
		:aria-label="ariaLabel"
		:aria-pressed="isPressed"
		@click="handleClick"
		@keydown.enter="handleClick"
		@keydown.space.prevent="handleClick"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const props = defineProps<{
		ariaLabel: string;
	}>();

	const isPressed = ref(false);

	const handleClick = () => {
		isPressed.value = !isPressed.value;
	};
</script>
```

### Testing Accessibility

- Test with screen readers (VoiceOver on macOS, NVDA on Windows)
- Verify keyboard navigation works correctly
- Check color contrast ratios meet WCAG standards

## Pull Request Process

### Before Submitting

1. Ensure all tests pass: `pnpm test`
2. Run all linters: `pnpm lint`
3. Check TypeScript types: `pnpm type-check`
4. Format your code: `pnpm format`
5. Update documentation if needed
6. Add tests for new features

### Commit Messages

Write clear, descriptive commit messages:

```
feat: add new Button component
fix: resolve icon alignment issue in BoText
docs: update contributing guide
refactor: simplify color service logic
```

Use conventional commit prefixes:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Creating a Pull Request

1. Push your branch to your fork:

```bash
git push origin feature/your-feature
```

2. Open a PR on GitHub with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference any related issues
   - Screenshots for UI changes
   - Checklist of completed items

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Checklist

- [ ] Tests pass locally
- [ ] Linters pass
- [ ] TypeScript types are correct
- [ ] Documentation updated
- [ ] Tests added for new features
- [ ] Accessibility considered

## Screenshots (if applicable)

[Add screenshots here]
```

### Review Process

- Maintainers will review your PR
- Address any feedback or requested changes
- Once approved, your PR will be merged
- Automated checks must pass before merging

## Getting Help

### Resources

- **Vue 3 Documentation**: [vuejs.org](https://vuejs.org/)
- **TypeScript Documentation**: [typescriptlang.org](https://www.typescriptlang.org/)
- **Vitest Documentation**: [vitest.dev](https://vitest.dev/)
- **VitePress Documentation**: [vitepress.dev](https://vitepress.dev/)

### Communication

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/mrksbnc/bamboo/issues)
- **Discussions**: Ask questions in [GitHub Discussions](https://github.com/mrksbnc/bamboo/discussions)

### Code of Conduct

Be respectful, inclusive, and constructive in all interactions. We're building this together!

## Recognition

All contributors are valued and appreciated. Your contributions help make Bamboo better for everyone!

---

Thank you for contributing to Bamboo! 🎋
