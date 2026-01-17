# Badge

The Badge component displays small status indicators, labels, or counts with various styles and configurations.

## Basic Usage

```vue
<template>
	<div class="flex gap-4">
		<bo-badge label="New" />
		<bo-badge label="Featured" variant="success" />
		<bo-badge label="Sale" variant="danger" />
	</div>
</template>
```

## Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`

```vue
<template>
	<div class="flex items-center gap-4">
		<bo-badge size="xs" label="XS" />
		<bo-badge size="sm" label="Small" />
		<bo-badge size="default" label="Default" />
		<bo-badge size="lg" label="Large" />
		<bo-badge size="xl" label="Extra Large" />
	</div>
</template>
```

## Variants

Available variants: `primary`, `secondary`, `danger`, `warning`, `success`, `light`, `dark`

```vue
<template>
	<div class="flex gap-4">
		<bo-badge variant="primary" label="Primary" />
		<bo-badge variant="secondary" label="Secondary" />
		<bo-badge variant="danger" label="Danger" />
		<bo-badge variant="warning" label="Warning" />
		<bo-badge variant="success" label="Success" />
		<bo-badge variant="light" label="Light" />
		<bo-badge variant="dark" label="Dark" />
	</div>
</template>
```

## Types

Available types: `default` (filled), `outline`

```vue
<template>
	<div class="flex gap-4">
		<bo-badge type="default" label="Filled" />
		<bo-badge type="outline" label="Outline" />
		<bo-badge type="outline" variant="success" label="Success Outline" />
	</div>
</template>
```

## Shapes

Available shapes: `default`, `pill`, `flat`, `circle`

```vue
<template>
	<div class="flex gap-4">
		<bo-badge shape="default" label="Default" />
		<bo-badge shape="pill" label="Pill" />
		<bo-badge shape="flat" label="Flat" />
		<bo-badge shape="circle" label="5" />
	</div>
</template>
```

## With Icons

Add prefix or suffix icons to badges:

```vue
<template>
	<div class="flex gap-4">
		<!-- Prefix Icon -->
		<bo-badge label="New Feature" :icon="{ prefix: 'star' }" />

		<!-- Suffix Icon -->
		<bo-badge label="Download" :icon="{ suffix: 'download' }" />

		<!-- Both Icons -->
		<bo-badge label="Premium" :icon="{ prefix: 'crown', suffix: 'arrow-right' }" />
	</div>
</template>
```

## Icon Only Badges

Use circle shape for icon-only badges:

```vue
<template>
	<div class="flex gap-4">
		<bo-badge shape="circle" :icon="{ prefix: 'bell' }" aria-label="Notifications" />
		<bo-badge shape="circle" variant="danger" :icon="{ prefix: 'x' }" aria-label="Close" />
	</div>
</template>
```

## Notification Badges

Perfect for showing counts or status:

```vue
<template>
	<div class="flex gap-4">
		<!-- Count Badge -->
		<div class="relative">
			<button class="p-2 bg-gray-100 rounded">
				<icon name="bell" />
			</button>
			<bo-badge
				shape="circle"
				size="xs"
				variant="danger"
				label="3"
				class="absolute -top-1 -right-1"
			/>
		</div>

		<!-- Status Badge -->
		<div class="relative">
			<button class="p-2 bg-gray-100 rounded">
				<icon name="message" />
			</button>
			<bo-badge
				shape="circle"
				size="xs"
				variant="success"
				class="absolute -top-1 -right-1"
				aria-label="New messages"
			/>
		</div>
	</div>
</template>
```

## Props

| Prop         | Type                               | Default     | Description                                   |
| ------------ | ---------------------------------- | ----------- | --------------------------------------------- |
| `id`         | `string`                           | -           | Element ID (auto-generated if not provided)   |
| `dataTestId` | `string`                           | -           | Data test ID (auto-generated if not provided) |
| `label`      | `string`                           | -           | Text to display on the badge                  |
| `type`       | `'default' \| 'outline'`           | `'default'` | Badge type (filled or outline)                |
| `size`       | `BoBadgeSize`                      | `'default'` | Size of the badge                             |
| `shape`      | `BoBadgeShape`                     | `'default'` | Shape of the badge                            |
| `variant`    | `BoBadgeVariant`                   | `'primary'` | Color variant of the badge                    |
| `icon`       | `{ prefix?: Icon; suffix?: Icon }` | -           | Icon configuration                            |
| `role`       | `string`                           | -           | ARIA role attribute                           |
| `ariaLabel`  | `string`                           | -           | ARIA label attribute                          |

## Types

```typescript
type BoBadgeVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'light' | 'dark';

type BoBadgeType = 'default' | 'outline';

type BoBadgeShape = 'default' | 'pill' | 'flat' | 'circle';

type BoBadgeSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
```

## Accessibility

- Uses semantic HTML elements
- Supports ARIA labels for screen readers
- Proper color contrast ratios
- Keyboard accessible when interactive
- Icon-only badges should include `aria-label` for accessibility
