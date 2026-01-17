# Avatar

The Avatar component displays user profile pictures, initials, or default images in various shapes and sizes.

## Basic Usage

```vue
<template>
	<div class="flex gap-4">
		<!-- Image Avatar -->
		<bo-avatar :data="{ src: '/user.jpg', alt: 'User Avatar' }" type="image" />

		<!-- Initials Avatar -->
		<bo-avatar :data="{ label: 'John Doe' }" type="initials" />

		<!-- Default Avatar -->
		<bo-avatar :data="{}" with-default-image />
	</div>
</template>
```

## Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-avatar size="xs" :data="{ label: 'XS' }" />
		<bo-avatar size="sm" :data="{ label: 'SM' }" />
		<bo-avatar size="default" :data="{ label: 'MD' }" />
		<bo-avatar size="lg" :data="{ label: 'LG' }" />
		<bo-avatar size="xl" :data="{ label: 'XL' }" />
	</div>
</template>
```

## Shapes

Available shapes: `circle`, `rounded`, `flat`, `outline-circle`, `outline-rounded`, `outline-flat`

```vue
<template>
	<div class="flex gap-4">
		<bo-avatar shape="circle" :data="{ label: 'JD' }" />
		<bo-avatar shape="rounded" :data="{ label: 'JD' }" />
		<bo-avatar shape="flat" :data="{ label: 'JD' }" />
		<bo-avatar shape="outline-circle" :data="{ label: 'JD' }" />
		<bo-avatar shape="outline-rounded" :data="{ label: 'JD' }" />
		<bo-avatar shape="outline-flat" :data="{ label: 'JD' }" />
	</div>
</template>
```

## Variants

Available variants: `primary`, `secondary`, `danger`, `warning`, `success`, `dark`

```vue
<template>
	<div class="flex gap-4">
		<bo-avatar variant="primary" :data="{ label: 'PR' }" />
		<bo-avatar variant="secondary" :data="{ label: 'SE' }" />
		<bo-avatar variant="danger" :data="{ label: 'DA' }" />
		<bo-avatar variant="warning" :data="{ label: 'WA' }" />
		<bo-avatar variant="success" :data="{ label: 'SU' }" />
		<bo-avatar variant="dark" :data="{ label: 'DK' }" />
	</div>
</template>
```

## Status Indicators

Add status indicators to show online/offline status:

```vue
<template>
	<div class="flex gap-4">
		<bo-avatar
			:data="{ label: 'ON' }"
			:indicator="{ status: 'online', position: 'bottom-right' }"
		/>
		<bo-avatar
			:data="{ label: 'OF' }"
			:indicator="{ status: 'offline', position: 'bottom-right' }"
		/>
		<bo-avatar :data="{ label: 'BU' }" :indicator="{ status: 'busy', position: 'bottom-right' }" />
		<bo-avatar :data="{ label: 'AW' }" :indicator="{ status: 'away', position: 'bottom-right' }" />
	</div>
</template>
```

## Custom Colors

```vue
<template>
	<bo-avatar
		:data="{ label: 'CC' }"
		:color="{
			bgColor: '#ff6b6b',
			textColor: '#ffffff',
		}"
	/>
</template>
```

## Clickable Avatar

```vue
<template>
	<bo-avatar :data="{ label: 'CL' }" clickable @click="handleClick" />
</template>

<script setup>
	const handleClick = () => {
		console.log('Avatar clicked!');
	};
</script>
```

## Props

| Prop               | Type                    | Default      | Description                                   |
| ------------------ | ----------------------- | ------------ | --------------------------------------------- |
| `id`               | `string`                | -            | Element ID (auto-generated if not provided)   |
| `dataTestId`       | `string`                | -            | Data test ID (auto-generated if not provided) |
| `data`             | `BoAvatarData`          | -            | Avatar data containing src, alt, and label    |
| `type`             | `'image' \| 'initials'` | `'initials'` | Type of avatar to display                     |
| `shape`            | `BoAvatarShape`         | `'rounded'`  | Shape of the avatar                           |
| `size`             | `BoAvatarSize`          | `'default'`  | Size of the avatar                            |
| `clickable`        | `boolean`               | `false`      | Whether the avatar is clickable               |
| `withDefaultImage` | `boolean`               | `false`      | Show default image when no src or label       |
| `variant`          | `BoAvatarVariant`       | `'primary'`  | Color variant of the avatar                   |
| `color`            | `BoAvatarColor`         | -            | Custom color configuration                    |
| `indicator`        | `BoAvatarIndicator`     | -            | Status indicator configuration                |
| `role`             | `string`                | -            | ARIA role attribute                           |
| `ariaLabel`        | `string`                | -            | ARIA label attribute                          |

## Types

```typescript
interface BoAvatarData {
	alt?: string;
	src?: string;
	label?: string;
}

interface BoAvatarColor {
	bgColor?: string;
	textColor?: string;
}

interface BoAvatarIndicator {
	status?: 'online' | 'offline' | 'busy' | 'away' | 'none';
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
```

## Accessibility

- Uses appropriate ARIA attributes for screen readers
- Supports keyboard navigation when clickable
- Provides meaningful alt text for images
- Status indicators are announced to screen readers
