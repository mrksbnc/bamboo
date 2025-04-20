# Bamboo Composables

Bamboo provides a set of composables that are designed to handle common frontend tasks with a focus on accessibility, type safety, and developer experience.

## Comparison with Popular Libraries

### useAccessibility

Our `useAccessibility` composable provides essential accessibility utilities:

| Feature                     | Bamboo | VueUse | Vue A11y           | Headless UI |
| --------------------------- | ------ | ------ | ------------------ | ----------- |
| Screen reader announcements | ✅     | ❌     | ✅ (vue-announcer) | ❌          |
| Skip links                  | ✅     | ❌     | ✅ (vue-skip-to)   | ❌          |
| Focus detection             | ✅     | ✅     | ✅                 | ✅          |
| Accessible ID generation    | ✅     | ❌     | ❌                 | ✅          |

**Advantages:**

- Comprehensive accessibility features in a single composable
- Fully typed with TypeScript
- Integration with Vue 3 composition API
- Simpler API compared to specialized libraries

### useKeyboard

Our `useKeyboard` composable handles keyboard interactions and focus management:

| Feature                     | Bamboo | VueUse  | Vue A11y | Headless UI |
| --------------------------- | ------ | ------- | -------- | ----------- |
| Tab key trapping            | ✅     | ❌      | ❌       | ✅          |
| Focus trapping              | ✅     | Partial | ❌       | ✅          |
| Focus management            | ✅     | Partial | ❌       | ✅          |
| Key event handling          | ✅     | ✅      | ❌       | ✅          |
| Focusable element detection | ✅     | ❌      | ❌       | ✅          |

**Advantages:**

- Built on top of VueUse's keyboard utilities
- More comprehensive focus management
- Fine-grained control over focus behavior
- Strongly typed API

### useString

Our `useString` composable provides string manipulation utilities:

| Feature                 | Bamboo | VueUse | Lodash                         | String.js |
| ----------------------- | ------ | ------ | ------------------------------ | --------- |
| Capitalization          | ✅     | ❌     | ✅                             | ✅        |
| Empty string checking   | ✅     | ❌     | ✅                             | ✅        |
| String truncation       | ✅     | ❌     | ✅                             | ✅        |
| Slugify                 | ✅     | ❌     | ❌ (requires slugify pkg)      | ✅        |
| CamelCase to Title Case | ✅     | ❌     | ❌ (requires additional steps) | ✅        |

**Advantages:**

- Lightweight alternative to larger string libraries
- Vue-specific integration
- TypeScript support
- Zero dependencies

### useTailwind

Our `useTailwind` composable provides utilities for working with Tailwind CSS:

| Feature          | Bamboo | tailwind-merge | clsx / classnames | tv (Tailwind Variants) |
| ---------------- | ------ | -------------- | ----------------- | ---------------------- |
| Class merging    | ✅     | ✅             | ✅                | ✅                     |
| Deduplication    | ✅     | ✅             | ✅                | ✅                     |
| Reactive support | ✅     | ❌             | ❌                | ❌                     |
| Vue integration  | ✅     | ❌             | ❌                | ❌                     |

**Advantages:**

- Vue-specific integration with reactive support
- Simplified API compared to alternatives
- Small footprint
- Integration with other Bamboo composables

### useTheme

Our `useTheme` composable provides theme management with system preference detection:

| Feature                     | Bamboo | VueUse  | @vueuse/core theme | TailwindCSS Dark Mode |
| --------------------------- | ------ | ------- | ------------------ | --------------------- |
| Dark/light mode             | ✅     | ✅      | ✅                 | ✅                    |
| System preference detection | ✅     | ✅      | ✅                 | ❌ (requires JS)      |
| LocalStorage persistence    | ✅     | ✅      | ✅                 | ❌                    |
| DOM updates                 | ✅     | Partial | ✅                 | ❌ (requires JS)      |
| Meta color theme updates    | ✅     | ❌      | ❌                 | ❌                    |

**Advantages:**

- Built on top of VueUse's core utilities
- Full theme lifecycle management
- Updates both CSS and meta tags
- TypeScript support

## Best Practices

Our composables follow these best practices:

1. **Type Safety** - All composables are fully typed with TypeScript
2. **SSR Compatibility** - Safe checking for browser environment
3. **Composition API** - Built for Vue 3's composition API
4. **Accessibility** - WCAG compliance considerations built-in
5. **Minimal Dependencies** - Leveraging VueUse where appropriate
6. **Comprehensive Testing** - High test coverage for all utilities
7. **Defensive Coding** - Robust error handling and null checking
8. **Consistent API Design** - Similar patterns across all composables

## Integration with VueUse

We've integrated with VueUse where appropriate to avoid reinventing the wheel:

- Using `useMediaQuery` for system theme detection
- Using `useLocalStorage` for persisting preferences
- Using `useFocus` and `useFocusWithin` for focus management
- Using `onKeyStroke` for keyboard event handling
- Using `isDefined` for null/undefined checking
