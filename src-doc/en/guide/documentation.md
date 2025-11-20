---
title: Documentation Guide
---

# Documentation Guide

This guide explains how to write and maintain documentation for Bamboo components following VitePress best practices.

## Documentation Structure

```
src-doc/
├── en/
│   ├── components/     # Component documentation
│   ├── guide/          # Getting started guides
│   ├── services/       # Service documentation
│   └── styles/         # Style system documentation
├── public/             # Static assets
└── index.md            # Homepage
```

## Writing Component Documentation

### Page Structure

Every component documentation page should follow this structure:

````markdown
---
title: Component Name
description: Brief description of the component
outline: deep
---

<script setup lang="ts">
// Import component and related types
import { BoComponent } from '@/components/bo-component';
</script>

# Component Name

Brief introduction explaining what the component does.

## Basic Usage

::: tip
Helpful tip about the component
:::

\`\`\`vue
<bo-component />
\`\`\`

<div style="margin-top: 1rem;">
  <bo-component />
</div>

## API Reference

### Props

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `prop` | `string` | Description |

## Feature Section 1

Description of the feature.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-component />
</div>

\`\`\`vue
<bo-component />
\`\`\`

## Feature Section 2

Description of the feature.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-component />
</div>

\`\`\`vue
<bo-component />
\`\`\`

## Type Definitions

::: code-group

```ts [component.ts]
// Type definitions
```
````

:::

```

### Key Structure Elements

1. **Frontmatter** - Title, description, and outline configuration
2. **Script Setup** - Import component and related types
3. **Title and Introduction** - Brief explanation of the component
4. **Basic Usage** - Simple example with tip and live demo
5. **API Reference** - Props table (no default values column)
6. **Feature Sections** - Each feature gets its own section with:
   - Description
   - Live example in a styled div
   - Code example immediately after
7. **Type Definitions** - TypeScript definitions in code groups

```

### Frontmatter

Always include frontmatter with:

- `title`: The component name
- `description`: A brief description for SEO
- `outline: deep`: Enables deep outline navigation

### Live Examples

Include live, interactive examples using the actual components. Each feature section should follow this pattern:

1. **Feature heading** - Clear section title (e.g., "Font Sizes", "Variants")
2. **Description** - Brief explanation of the feature
3. **Live demo** - Interactive example in a styled container
4. **Code example** - The exact code used in the demo

Example structure:

\`\`\`markdown

## Font Sizes

The text component supports different font sizes with the \`fontSize\` prop. The default size is \`16px\`.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Small Text" :font-size="BoFontSize.sm" />
  <bo-text value="Base Text" :font-size="BoFontSize.base" />
  <bo-text value="Large Text" :font-size="BoFontSize.lg" />
</div>

\\\`\\\`\\\`vue
<bo-text value="Small Text" :font-size="BoFontSize.sm" />
<bo-text value="Base Text" :font-size="BoFontSize.base" />
<bo-text value="Large Text" :font-size="BoFontSize.lg" />
\\\`\\\`\\\`
\`\`\`

**Important:** Always show the live demo first, then the code example immediately after.

### Container Styling

Use consistent container styling for live examples:

- **Vertical layouts:** `<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">`
- **Horizontal layouts:** `<div style="display: flex; gap: 1rem; margin-top: 2rem;">`
- **With borders:** Add `border: 1px solid #ccc; padding: 1rem;` for examples that need visual boundaries
- **Fixed width:** Add `max-width: 300px;` for examples demonstrating text truncation or wrapping

### API Tables

Use consistent table formats for props, events, and slots:

**Props Table:**

```markdown
| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `prop` | `string` | Description |
```

Note: Do not include a "Default" column in the props table. Keep it simple with just Name, Type, and Description.

**Events Table:**

```markdown
| Event   | Payload      | Description |
| ------- | ------------ | ----------- |
| `click` | `MouseEvent` | Description |
```

**Slots Table:**

```markdown
| Name      | Description |
| --------- | ----------- |
| `default` | Description |
```

## Dark Mode Support

All components automatically support dark mode through the `data-theme` attribute. The documentation site syncs VitePress's built-in dark mode with our component system.

### Testing Dark Mode

Toggle the dark mode switch in the navigation bar to see components in both themes.

## Code Examples

### Inline Code

Use backticks for inline code: \`BoSize.md\`

### Code Blocks

Use fenced code blocks with language specification:

\`\`\`vue
<bo-button label="Example" />
\`\`\`

### Code Groups

For showing multiple related code snippets:

\`\`\`markdown
::: code-group
\`\`\`ts [component.ts]
// TypeScript code
\`\`\`

\`\`\`vue [example.vue]

<!-- Vue example -->

\`\`\`
:::
\`\`\`

## Custom Containers

VitePress provides custom containers for callouts:

```markdown
::: tip
Helpful tip
:::

::: warning
Important warning
:::

::: danger
Critical information
:::

::: info
Additional information
:::

::: details Click to expand
Hidden content
:::
```

## Best Practices

### 1. Be Concise

Keep descriptions clear and to the point. Users should quickly understand what a component does.

### 2. Show, Don't Tell

Include live examples for every feature. Visual examples are more effective than text descriptions. Always pair live demos with code examples in the same section.

### 3. Accessibility First

Always document accessibility features and best practices for each component.

### 4. Type Safety

Include TypeScript type definitions in code groups for better developer experience.

### 5. Consistent Formatting

- Use sentence case for headings (e.g., "Font sizes" not "Font Sizes")
- Use backticks for code references (e.g., `fontSize` prop)
- Use tables for structured data (API Reference)
- Use lists for sequential information
- Always show live demo before code example
- Use consistent container styling for examples
- Group related examples in the same section

### 6. Cross-Reference

Link to related components, guides, and services when relevant:

```markdown
See also: [Button](/en/components/button), [Icon](/en/components/icon)
```

### 7. Keep Examples Simple

Start with basic examples and progressively show more complex use cases.

### 8. Feature-Based Organization

Organize documentation by features rather than by props. Each major prop or feature should have its own section with:

- A descriptive heading
- Brief explanation
- Live demo showing all variations
- Code example matching the demo

For example, instead of documenting each size prop value separately, create a "Font Sizes" section showing all size options together.

## Building Documentation

### Development

```bash
npm run docs:dev
```

### Production Build

```bash
npm run docs:build
```

### Preview Production Build

```bash
npm run docs:preview
```

## Search

The documentation includes local search powered by VitePress. Ensure your content is well-structured with proper headings for better search results.

## Contributing

When adding new components:

1. Create a new markdown file in `src-doc/en/components/`
2. Follow the component documentation structure
3. Add the component to the sidebar in `.vitepress/config.ts`
4. Include live examples and API documentation
5. Test in both light and dark modes
6. Verify search functionality

## Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Extensions](https://vitepress.dev/guide/markdown)
- [Default Theme Config](https://vitepress.dev/reference/default-theme-config)

```

```
