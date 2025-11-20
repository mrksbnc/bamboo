# Testing Approach

This document outlines the testing strategy, patterns, and best practices for the Bamboo component library.

## Overview

Bamboo uses a comprehensive testing approach to ensure component reliability, accessibility, and maintainability. We use Vitest as our test runner and Vue Test Utils for component testing.

## Testing Stack

- **Test Runner**: [Vitest](https://vitest.dev/) - Fast, Vite-native test runner
- **Component Testing**: [@vue/test-utils](https://test-utils.vuejs.org/) - Official Vue testing utilities
- **DOM Environment**: [jsdom](https://github.com/jsdom/jsdom) - JavaScript implementation of web standards
- **Coverage**: [Vitest Coverage (v8)](https://vitest.dev/guide/coverage.html) - Code coverage reporting

## Test Structure

### Test File Organization

Tests are co-located with the code they test:

```
src/
├── components/
│   └── bo-button/
│       ├── bo-button.vue
│       └── bo-button.test.ts          ← Component tests
├── composables/
│   ├── useTheme.ts
│   └── useTheme.test.ts               ← Composable tests
└── services/
    ├── color-service.ts
    └── color-service.test.ts          ← Service tests
```

### Test File Naming

- Use `.test.ts` extension (e.g., `bo-button.test.ts`)
- Match the filename of the code being tested
- Place in the same directory as the source file

## Testing Patterns

### Component Testing Pattern

```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoButton from './bo-button.vue';

describe('BoButton', () => {
	// Test rendering
	it('renders with label', () => {
		const wrapper = mount(BoButton, {
			props: { label: 'Click me' },
		});
		expect(wrapper.text()).toBe('Click me');
	});

	// Test props
	it('applies size prop', () => {
		const wrapper = mount(BoButton, {
			props: { size: 'sm' },
		});
		expect(wrapper.classes()).toContain('bo-button--sm');
	});

	// Test events
	it('emits click event', async () => {
		const wrapper = mount(BoButton);
		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeTruthy();
	});

	// Test disabled state
	it('does not emit click when disabled', async () => {
		const wrapper = mount(BoButton, {
			props: { disabled: true },
		});
		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	// Test accessibility
	it('has correct ARIA attributes', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Submit',
				ariaLabel: 'Submit form',
			},
		});
		expect(wrapper.attributes('aria-label')).toBe('Submit form');
	});
});
```

### Service Testing Pattern

```typescript
import { describe, it, expect } from 'vitest';
import { ColorService } from './color-service';

describe('ColorService', () => {
	describe('resolveColor', () => {
		it('returns CSS variable for color names', () => {
			const result = ColorService.resolveColor('blue-600');
			expect(result).toBe('var(--blue-600)');
		});

		it('adds # prefix to hex colors', () => {
			const result = ColorService.resolveColor('ff0000');
			expect(result).toBe('#ff0000');
		});

		it('returns CSS variables unchanged', () => {
			const result = ColorService.resolveColor('var(--custom-color)');
			expect(result).toBe('var(--custom-color)');
		});
	});
});
```

### Composable Testing Pattern

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { useTheme } from './useTheme';

describe('useTheme', () => {
	beforeEach(() => {
		// Reset DOM state
		document.documentElement.removeAttribute('data-theme');
		localStorage.clear();
	});

	it('initializes with system theme', () => {
		const { theme } = useTheme();
		expect(['light', 'dark', 'system']).toContain(theme.value);
	});

	it('sets theme on document element', () => {
		const { setTheme } = useTheme();
		setTheme('dark');
		expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
	});

	it('persists theme to localStorage', () => {
		const { setTheme } = useTheme();
		setTheme('dark');
		expect(localStorage.getItem('bamboo-theme')).toBe('dark');
	});
});
```

## What to Test

### Component Tests

#### 1. Rendering

- Component renders without errors
- Props are correctly applied
- Slots render content
- Conditional rendering works

```typescript
it('renders with default props', () => {
	const wrapper = mount(BoButton);
	expect(wrapper.exists()).toBe(true);
});

it('renders slot content', () => {
	const wrapper = mount(BoButton, {
		slots: { default: 'Click me' },
	});
	expect(wrapper.text()).toBe('Click me');
});
```

#### 2. Props

- Default values work
- Prop validation works
- Props affect rendering correctly

```typescript
it('applies variant prop', () => {
	const wrapper = mount(BoButton, {
		props: { variant: 'primary' },
	});
	expect(wrapper.classes()).toContain('bo-button--primary');
});
```

#### 3. Events

- Events are emitted correctly
- Event payloads are correct
- Events respect component state (e.g., disabled)

```typescript
it('emits input event with value', async () => {
	const wrapper = mount(BoInput);
	await wrapper.find('input').setValue('test');
	expect(wrapper.emitted('input')?.[0]).toEqual(['test']);
});
```

#### 4. User Interactions

- Click handlers work
- Keyboard navigation works
- Focus management works

```typescript
it('handles keyboard navigation', async () => {
	const wrapper = mount(BoDropdown);
	await wrapper.trigger('keydown', { key: 'ArrowDown' });
	expect(wrapper.vm.isOpen).toBe(true);
});
```

#### 5. State Management

- Internal state updates correctly
- Computed properties work
- Watchers trigger appropriately

```typescript
it('updates internal state on prop change', async () => {
	const wrapper = mount(BoInput, {
		props: { modelValue: 'initial' },
	});
	await wrapper.setProps({ modelValue: 'updated' });
	expect(wrapper.find('input').element.value).toBe('updated');
});
```

#### 6. Accessibility

- ARIA attributes are correct
- Keyboard navigation works
- Focus management is proper
- Screen reader text is present

```typescript
it('has accessible label', () => {
	const wrapper = mount(BoInput, {
		props: { label: 'Email', id: 'email' },
	});
	const label = wrapper.find('label');
	expect(label.attributes('for')).toBe('email');
	expect(label.text()).toBe('Email');
});
```

### Service Tests

#### 1. Function Behavior

- Functions return expected values
- Edge cases are handled
- Error cases are handled

```typescript
it('handles empty input', () => {
	expect(ColorService.resolveColor('')).toBe('');
});

it('throws on invalid input', () => {
	expect(() => ColorService.resolveColor(null)).toThrow();
});
```

#### 2. Side Effects

- DOM manipulation works
- External API calls work (with mocks)
- State changes are correct

### Composable Tests

#### 1. Reactive State

- State initializes correctly
- State updates correctly
- Computed properties react to changes

#### 2. Side Effects

- DOM updates work
- localStorage/sessionStorage work
- Event listeners are registered/cleaned up

#### 3. Lifecycle

- Setup works correctly
- Cleanup works correctly
- Re-initialization works

## Testing Best Practices

### 1. Test Behavior, Not Implementation

❌ **Bad**: Testing internal implementation details

```typescript
it('calls internal method', () => {
	const wrapper = mount(BoButton);
	expect(wrapper.vm.internalMethod).toHaveBeenCalled();
});
```

✅ **Good**: Testing observable behavior

```typescript
it('shows loading state when clicked', async () => {
	const wrapper = mount(BoButton, {
		props: { loading: true },
	});
	expect(wrapper.find('.bo-button__spinner').exists()).toBe(true);
});
```

### 2. Use Descriptive Test Names

❌ **Bad**: Vague test names

```typescript
it('works', () => {});
it('test button', () => {});
```

✅ **Good**: Clear, descriptive names

```typescript
it('emits click event when button is clicked', () => {});
it('disables button when loading prop is true', () => {});
```

### 3. Arrange-Act-Assert Pattern

```typescript
it('updates value on input', async () => {
	// Arrange
	const wrapper = mount(BoInput, {
		props: { modelValue: '' },
	});

	// Act
	await wrapper.find('input').setValue('test');

	// Assert
	expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test']);
});
```

### 4. Test One Thing at a Time

❌ **Bad**: Testing multiple things

```typescript
it('button works', () => {
	const wrapper = mount(BoButton);
	expect(wrapper.exists()).toBe(true);
	expect(wrapper.classes()).toContain('bo-button');
	expect(wrapper.text()).toBe('Click me');
	// ... many more assertions
});
```

✅ **Good**: Focused tests

```typescript
it('renders with correct class', () => {
	const wrapper = mount(BoButton);
	expect(wrapper.classes()).toContain('bo-button');
});

it('renders label text', () => {
	const wrapper = mount(BoButton, {
		props: { label: 'Click me' },
	});
	expect(wrapper.text()).toBe('Click me');
});
```

### 5. Use beforeEach for Setup

```typescript
describe('BoButton', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(BoButton, {
			props: { label: 'Test' },
		});
	});

	it('renders label', () => {
		expect(wrapper.text()).toBe('Test');
	});

	it('has button class', () => {
		expect(wrapper.classes()).toContain('bo-button');
	});
});
```

### 6. Clean Up After Tests

```typescript
import { describe, it, afterEach, vi } from 'vitest';

describe('TooltipService', () => {
	afterEach(() => {
		// Clean up DOM
		document.body.innerHTML = '';

		// Clear timers
		vi.clearAllTimers();

		// Restore mocks
		vi.restoreAllMocks();
	});
});
```

### 7. Mock External Dependencies

```typescript
import { vi } from 'vitest';

it('calls external API', async () => {
	const mockFetch = vi.fn().mockResolvedValue({ data: 'test' });
	global.fetch = mockFetch;

	await someFunction();

	expect(mockFetch).toHaveBeenCalledWith('/api/endpoint');
});
```

## Running Tests

### Run All Tests

```bash
pnpm test
```

### Run Tests in Watch Mode

```bash
pnpm test --watch
```

### Run Tests with Coverage

```bash
pnpm test --coverage
```

### Run Specific Test File

```bash
pnpm test bo-button.test.ts
```

### Run Tests Matching Pattern

```bash
pnpm test --grep "button"
```

## Coverage Goals

We aim for:

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

Coverage reports are generated in the `coverage/` directory.

## Continuous Integration

Tests run automatically on:

- Every commit (pre-commit hook via Husky)
- Pull requests
- Main branch pushes

CI must pass before merging.

## Common Testing Scenarios

### Testing v-model

```typescript
it('supports v-model', async () => {
	const wrapper = mount(BoInput, {
		props: {
			modelValue: 'initial',
			'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
		},
	});

	await wrapper.find('input').setValue('updated');
	expect(wrapper.props('modelValue')).toBe('updated');
});
```

### Testing Async Behavior

```typescript
it('shows loading state during async operation', async () => {
	const wrapper = mount(BoButton, {
		props: { onClick: async () => await delay(100) },
	});

	await wrapper.trigger('click');
	expect(wrapper.find('.bo-button--loading').exists()).toBe(true);

	await vi.waitFor(() => {
		expect(wrapper.find('.bo-button--loading').exists()).toBe(false);
	});
});
```

### Testing Slots

```typescript
it('renders default slot', () => {
	const wrapper = mount(BoCard, {
		slots: {
			default: '<p>Content</p>',
		},
	});
	expect(wrapper.html()).toContain('<p>Content</p>');
});

it('renders named slot', () => {
	const wrapper = mount(BoCard, {
		slots: {
			header: '<h2>Title</h2>',
			default: '<p>Content</p>',
		},
	});
	expect(wrapper.find('h2').text()).toBe('Title');
});
```

### Testing Teleport

```typescript
it('teleports content to body', () => {
	const wrapper = mount(BoModal, {
		props: { isOpen: true },
		attachTo: document.body,
	});

	expect(document.body.querySelector('.bo-modal')).toBeTruthy();

	wrapper.unmount();
});
```

## Debugging Tests

### Using console.log

```typescript
it('debugs component', () => {
	const wrapper = mount(BoButton);
	console.log(wrapper.html()); // Print HTML
	console.log(wrapper.vm); // Print component instance
});
```

### Using Vitest UI

```bash
pnpm test --ui
```

Opens an interactive UI for debugging tests.

### Using VS Code Debugger

Add breakpoints in your test files and use the VS Code debugger with Vitest.

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils Documentation](https://test-utils.vuejs.org/)
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/)
