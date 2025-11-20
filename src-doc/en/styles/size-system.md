---
title: Size System
description: A comprehensive guide to the size system used across all components in the library.
outline: deep
---

<script setup lang="ts">
import { BoSize } from '@/shared/size';
import { BoBadge } from '@/components/bo-badge';
import { BoButton } from '@/components/bo-button';
import * as BoInput from '@/components/bo-input';
</script>

# Size System

The library uses a consistent size system across components to ensure visual harmony and predictable scaling. Most components use the standard `BoSize` enum with five sizes, while some components have specialized size scales tailored to their specific use cases.

## Standard Size Scale

The `BoSize` enum provides five standardized sizes used by most components:

| Size | Value  | Description      | Common Use Cases                            |
| ---- | ------ | ---------------- | ------------------------------------------- |
| `xs` | `'xs'` | Extra Small      | Compact UI, tight spaces, inline badges     |
| `sm` | `'sm'` | Small            | Secondary actions, dense layouts            |
| `md` | `'md'` | Medium (Default) | Standard UI elements, most common size      |
| `lg` | `'lg'` | Large            | Primary actions, emphasis                   |
| `xl` | `'xl'` | Extra Large      | Hero sections, landing pages, high emphasis |

**Components using BoSize:** Button, Badge, Link, Loading Spinner, Loading Ring

## Component-Specific Size Scales

Some components use specialized size enums to better fit their use cases:

### Input Sizes (BoInputSize)

Inputs use a 3-tier size system focused on form layouts:

| Size | Value  | Description      | Use Case        |
| ---- | ------ | ---------------- | --------------- |
| `sm` | `'sm'` | Small            | Dense layouts   |
| `md` | `'md'` | Medium (Default) | Default forms   |
| `lg` | `'lg'` | Large            | Prominent forms |

### Modal Sizes (BoModalSize)

Modals have a specialized size scale including a full-screen option:

| Size   | Value    | Description      | Use Case                  |
| ------ | -------- | ---------------- | ------------------------- |
| `sm`   | `'sm'`   | Small            | Confirmations, alerts     |
| `md`   | `'md'`   | Medium (Default) | Standard dialogs          |
| `lg`   | `'lg'`   | Large            | Forms, detailed content   |
| `xl`   | `'xl'`   | Extra Large      | Complex forms, dashboards |
| `full` | `'full'` | Full Screen      | Immersive experiences     |

### Avatar Sizes (BoAvatarSize)

Avatars include an extra-extra-large size for profile pages:

| Size  | Value   | Description       | Use Case                |
| ----- | ------- | ----------------- | ----------------------- |
| `xs`  | `'xs'`  | Extra Small       | Inline mentions         |
| `sm`  | `'sm'`  | Small             | Lists, compact views    |
| `md`  | `'md'`  | Medium (Default)  | Standard avatars        |
| `lg`  | `'lg'`  | Large             | Prominent user displays |
| `xl`  | `'xl'`  | Extra Large       | Profile headers         |
| `xxl` | `'xxl'` | Extra Extra Large | Hero sections           |

## Usage

Import the appropriate size enum for your component:

```ts
import { BoSize } from '@/shared/size';
import { BoInputSize } from '@/components/bo-input';
import { BoModalSize } from '@/components/bo-modal';
import { BoAvatarSize } from '@/components/bo-avatar';
```

Then use it with the corresponding component:

```vue
<!-- Standard BoSize components -->
<bo-button label="Button" :size="BoSize.md" />
<bo-badge label="Badge" :size="BoSize.sm" />
<bo-link label="Link" :size="BoSize.lg" />

<!-- Component-specific sizes -->
<bo-input :size="BoInputSize.md" />
<bo-modal :size="BoModalSize.lg" />
<bo-avatar :size="BoAvatarSize.xl" />
```

## Size Specifications

Each component size is defined using CSS custom properties that control various aspects like padding, font size, icon size, and border radius. This ensures consistency across the library.

### Button Sizes

| Size | Height | Padding X | Font Size | Icon Size | Use Case                      |
| ---- | ------ | --------- | --------- | --------- | ----------------------------- |
| `xs` | 24px   | 8px       | 12px      | 12px      | Compact actions, tight spaces |
| `sm` | 32px   | 12px      | 14px      | 14px      | Secondary actions             |
| `md` | 40px   | 16px      | 14px      | 16px      | Default, most common          |
| `lg` | 48px   | 20px      | 16px      | 20px      | Primary actions, emphasis     |
| `xl` | 56px   | 24px      | 18px      | 24px      | Hero actions, landing pages   |

### Input Sizes

Note: Inputs only support `sm`, `md`, and `lg` sizes.

| Size | Height | Padding X | Font Size | Icon Size | Use Case        |
| ---- | ------ | --------- | --------- | --------- | --------------- |
| `sm` | 32px   | 12px      | 14px      | 14px      | Dense layouts   |
| `md` | 40px   | 16px      | 14px      | 16px      | Default forms   |
| `lg` | 48px   | 20px      | 16px      | 20px      | Prominent forms |

### Badge Sizes

| Size | Padding X | Padding Y | Font Size | Icon Size | Use Case                           |
| ---- | --------- | --------- | --------- | --------- | ---------------------------------- |
| `xs` | 6px       | 0px       | 12px      | 12px      | Inline text, minimal badges        |
| `sm` | 8px       | 2px       | 12px      | 12px      | Notification counts, compact tags  |
| `md` | 8px       | 4px       | 14px      | 14px      | Standard labels, status indicators |
| `lg` | 10px      | 4px       | 14px      | 14px      | Prominent tags                     |
| `xl` | 12px      | 6px       | 16px      | 16px      | Large status indicators            |

### Link Sizes

| Size | Font Size | Line Height | Use Case                    |
| ---- | --------- | ----------- | --------------------------- |
| `xs` | 12px      | 16px        | Compact inline links        |
| `sm` | 14px      | 20px        | Body text links             |
| `md` | 14px      | 20px        | Default links (most common) |
| `lg` | 16px      | 24px        | Prominent navigation links  |
| `xl` | 18px      | 28px        | Hero section links          |

## Visual Examples

### Buttons

<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-button label="XS" :size="BoSize.xs" />
  <bo-button label="SM" :size="BoSize.sm" />
  <bo-button label="MD" :size="BoSize.md" />
  <bo-button label="LG" :size="BoSize.lg" />
  <bo-button label="XL" :size="BoSize.xl" />
</div>

```vue
<bo-button label="XS" :size="BoSize.xs" />
<bo-button label="SM" :size="BoSize.sm" />
<bo-button label="MD" :size="BoSize.md" />
<bo-button label="LG" :size="BoSize.lg" />
<bo-button label="XL" :size="BoSize.xl" />
```

### Badges

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; margin-top: 2rem;">
  <bo-badge label="XS" :size="BoSize.xs" />
  <bo-badge label="SM" :size="BoSize.sm" />
  <bo-badge label="MD" :size="BoSize.md" />
  <bo-badge label="LG" :size="BoSize.lg" />
  <bo-badge label="XL" :size="BoSize.xl" />
</div>

```vue
<bo-badge label="XS" :size="BoSize.xs" />
<bo-badge label="SM" :size="BoSize.sm" />
<bo-badge label="MD" :size="BoSize.md" />
<bo-badge label="LG" :size="BoSize.lg" />
<bo-badge label="XL" :size="BoSize.xl" />
```

### Inputs

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; max-width: 400px;">
  <bo-input placeholder="Small" :size="BoInput.BoInputSize.sm" />
  <bo-input placeholder="Medium" :size="BoInput.BoInputSize.md" />
  <bo-input placeholder="Large" :size="BoInput.BoInputSize.lg" />
</div>

```vue
<bo-input placeholder="Small" :size="BoInputSize.sm" />
<bo-input placeholder="Medium" :size="BoInputSize.md" />
<bo-input placeholder="Large" :size="BoInputSize.lg" />
```

## Size Comparison Diagram

Visual representation of how different component sizes relate to each other:

```
XS  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (24px height)
SM  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (32px height)
MD  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (40px height)
LG  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (48px height)
XL  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (56px height)
```

### Spacing Relationship

All component sizes follow the 8px grid system:

```
Base Unit: 8px

XS: 24px = 8px × 3
SM: 32px = 8px × 4
MD: 40px = 8px × 5  ← Default
LG: 48px = 8px × 6
XL: 56px = 8px × 7
```

## Design Principles

The size system follows these key principles:

1. **Consistency**: All components use the same size scale for predictable behavior
2. **Accessibility**: Minimum touch target sizes follow WCAG guidelines (44x44px for interactive elements)
3. **Scalability**: Sizes scale proportionally across all properties (padding, font, icons)
4. **Flexibility**: CSS custom properties allow for easy customization when needed
5. **8px Grid**: All sizes are multiples of 8px for visual harmony

## Components and Their Size Support

Here's a quick reference for which size scale each component uses:

| Component       | Size Enum    | Supported Sizes                 |
| --------------- | ------------ | ------------------------------- |
| Button          | BoSize       | xs, sm, md, lg, xl              |
| Badge           | BoSize       | xs, sm, md, lg, xl              |
| Link            | BoSize       | xs, sm, md, lg, xl              |
| Loading Spinner | BoSize       | xs, sm, md, lg, xl              |
| Loading Ring    | BoSize       | xs, sm, md, lg, xl              |
| Input           | BoInputSize  | sm, md, lg                      |
| Modal           | BoModalSize  | sm, md, lg, xl, full            |
| Avatar          | BoAvatarSize | xs, sm, md, lg, xl, xxl         |
| Dropdown        | N/A          | No size prop (uses fixed sizes) |
| Icon            | number (px)  | Any pixel value                 |
| Text            | BoFontSize   | xs, sm, md, lg, xl, xxl         |

## Customization

You can customize component sizes by overriding the CSS custom properties in your stylesheet:

```css
:root {
	/* Customize button medium size */
	--button-md-height: 3rem;
	--button-md-padding-x: 1.5rem;
	--button-md-font-size: 1rem;

	/* Customize badge small size */
	--badge-sm-padding-x: 0.75rem;
	--badge-sm-font-size: 0.75rem;
}
```

## Type Definitions

### Standard Size (BoSize)

```ts
export enum BoSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
}
```

### Input Size (BoInputSize)

```ts
export enum BoInputSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}
```

### Modal Size (BoModalSize)

```ts
export enum BoModalSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	full = 'full',
}
```

### Avatar Size (BoAvatarSize)

```ts
export enum BoAvatarSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}
```

## Related Documentation

- [Button Component](/components/button) - Uses BoSize (xs, sm, md, lg, xl)
- [Badge Component](/components/badge) - Uses BoSize (xs, sm, md, lg, xl)
- [Input Component](/components/input) - Uses BoInputSize (sm, md, lg)
- [Modal Component](/components/modal) - Uses BoModalSize (sm, md, lg, xl, full)
- [Avatar Component](/components/avatar) - Uses BoAvatarSize (xs, sm, md, lg, xl, xxl)
- [Link Component](/components/link) - Uses BoSize (xs, sm, md, lg, xl)
- [Typography](/styles/typography) - Text uses BoFontSize
