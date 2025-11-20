---
title: Link
description: An accessible link component with support for different sizes, variants, and behaviors.
outline: deep
---

<script setup lang="ts">
import { BoLink } from '@/components/bo-link';
import { BoLinkBehavior } from '@/components/bo-link';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';
</script>

# Link

An accessible link component with support for different sizes, variants, and behaviors. Includes automatic security attributes for external links and proper ARIA labels.

## Basic Usage

```vue
<bo-link href="https://example.com" label="Visit Example" />
```

<div style="margin-top: 1rem;">
  <bo-link href="https://example.com" label="Visit Example" />
</div>

## API Reference

### Props

| Name              | Type             | Default        | Description                                  |
| ----------------- | ---------------- | -------------- | -------------------------------------------- |
| `id`              | `string`         | auto-generated | Unique identifier for the link element       |
| `dataTestId`      | `string`         | `'bo-link'`    | Data test ID for testing                     |
| `behavior`        | `BoLinkBehavior` | `'default'`    | Behavior of the link                         |
| `href`            | `string`         | -              | URL the link points to                       |
| `target`          | `string`         | `'_self'`      | Where to open the link                       |
| `rel`             | `string`         | -              | Relationship attribute                       |
| `size`            | `BoSize`         | `'default'`    | Size of the link text                        |
| `variant`         | `BoVariant`      | `'primary'`    | Visual variant of the link                   |
| `label`           | `string`         | -              | Text content of the link                     |
| `disabled`        | `boolean`        | `false`        | Whether the link is disabled                 |
| `customCssClass`  | `string`         | -              | Custom CSS class for styling                 |
| `role`            | `string`         | -              | ARIA role attribute                          |
| `ariaLabel`       | `string`         | -              | Accessible label for screen readers          |
| `ariaLabelledBy`  | `string`         | -              | Reference to element that labels the link    |
| `ariaDescribedBy` | `string`         | -              | Reference to element that describes the link |
| `ariaLive`        | `AriaLive`       | `'polite'`     | ARIA live region behavior                    |
| `tabIndex`        | `number`         | -              | Tab index of the element                     |

### Events

| Name    | Payload      | Description                  |
| ------- | ------------ | ---------------------------- |
| `click` | `MouseEvent` | Emitted when link is clicked |

### Slots

| Name      | Description                         |
| --------- | ----------------------------------- |
| `default` | Custom content to replace the label |

## Variants

The link component supports different color variants.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-link href="#" label="Primary" :variant="BoVariant.primary" />
  <bo-link href="#" label="Secondary" :variant="BoVariant.secondary" />
  <bo-link href="#" label="Success" :variant="BoVariant.success" />
  <bo-link href="#" label="Warning" :variant="BoVariant.warning" />
  <bo-link href="#" label="Danger" :variant="BoVariant.danger" />
  <bo-link href="#" label="Light" :variant="BoVariant.light" />
  <bo-link href="#" label="Dark" :variant="BoVariant.dark" />
</div>

```vue
<bo-link href="#" label="Primary" :variant="BoVariant.primary" />
<bo-link href="#" label="Secondary" :variant="BoVariant.secondary" />
<bo-link href="#" label="Success" :variant="BoVariant.success" />
<bo-link href="#" label="Warning" :variant="BoVariant.warning" />
<bo-link href="#" label="Danger" :variant="BoVariant.danger" />
<bo-link href="#" label="Light" :variant="BoVariant.light" />
<bo-link href="#" label="Dark" :variant="BoVariant.dark" />
```

## Sizes

The link component supports different text sizes.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-link href="#" label="Extra Small" :size="BoSize.xs" />
  <bo-link href="#" label="Small" :size="BoSize.sm" />
  <bo-link href="#" label="Default" :size="BoSize.md" />
  <bo-link href="#" label="Large" :size="BoSize.lg" />
  <bo-link href="#" label="Extra Large" :size="BoSize.xl" />
</div>

```vue
<bo-link href="#" label="Extra Small" :size="BoSize.xs" />
<bo-link href="#" label="Small" :size="BoSize.sm" />
<bo-link href="#" label="Default" :size="BoSize.md" />
<bo-link href="#" label="Large" :size="BoSize.lg" />
<bo-link href="#" label="Extra Large" :size="BoSize.xl" />
```

## External Links

Links with `target="_blank"` automatically get security attributes and accessibility announcements.

<div style="margin-top: 2rem;">
  <bo-link href="https://example.com" label="Open in new tab" target="_blank" />
</div>

```vue
<bo-link href="https://example.com" label="Open in new tab" target="_blank" />
```

::: tip
External links automatically receive `rel="noopener noreferrer"` for security and announce "(opens in new window)" to screen readers.
:::

## Button Behavior

Use `behavior="button"` to make the link behave like a button (no href, role="button").

<div style="margin-top: 2rem;">
  <bo-link label="Button Link" :behavior="BoLinkBehavior.button" @click="() => alert('Clicked!')" />
</div>

```vue
<bo-link label="Button Link" :behavior="BoLinkBehavior.button" @click="handleClick" />
```

## Disabled State

Disabled links cannot be clicked and have reduced opacity.

<div style="margin-top: 2rem;">
  <bo-link href="#" label="Disabled Link" :disabled="true" />
</div>

```vue
<bo-link href="#" label="Disabled Link" :disabled="true" />
```

## Using Slots

You can use slots to customize the link content.

<div style="margin-top: 2rem;">
  <bo-link href="#">
    <strong>Bold</strong> and <em>italic</em> text
  </bo-link>
</div>

```vue
<bo-link href="#">
  <strong>Bold</strong> and <em>italic</em> text
</bo-link>
```

## Handling Clicks

Listen to the `click` event to handle link clicks.

```vue
<script setup>
	function handleClick(event) {
		console.log('Link clicked:', event);
	}
</script>

<bo-link href="#" label="Click me" @click="handleClick" />
```

## Accessibility

The link component includes comprehensive accessibility features:

- Automatic `rel="noopener noreferrer"` for external links
- Announces "(opens in new window)" for `target="_blank"` links
- Proper ARIA attributes support
- Keyboard navigation support
- Focus visible states
- Disabled state with `aria-disabled`

```vue
<bo-link
	href="https://example.com"
	label="External Link"
	target="_blank"
	aria-describedby="link-help"
/>
<span id="link-help">This link opens in a new window</span>
```

## Type Definitions

::: code-group

```ts [bo-link.ts]
enum BoLinkBehavior {
	/** Default link behavior */
	default = 'default',
	/** Button-like link behavior */
	button = 'button',
}

interface BoLinkProps {
	id?: string;
	dataTestId?: string;
	behavior?: BoLinkBehavior;
	href?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	rel?: string;
	size?: BoSize;
	variant?: BoVariant;
	label?: string;
	disabled?: boolean;
	customCssClass?: string;
	role?: string;
	ariaLabel?: string;
	ariaLabelledBy?: string;
	ariaDescribedBy?: string;
	ariaLive?: AriaLive;
	tabIndex?: number;
}
```

:::
