<script setup>
import BoTimeline from '@/components/timeline/bo-timeline.vue';
import { BoTimelineVariant, BoTimelineAlign, BoTimelineIconColor } from '@/components/timeline/bo-timeline';
import { Icon } from '@/components/icon/bo-icon';
import { BoSize } from '@/shared/bo-size';
</script>

# Timeline

A vertical display of chronological events, activities, or historical points with customizable appearance and alignment options.

```js
import { BoTimeline } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-timeline :items="timelineItems" />
</template>

<script setup>
import { BoTimeline } from '@mrksbnc/bamboo';

const timelineItems = [
	{
		title: 'Application submitted',
		content: 'Your application has been submitted successfully.',
		time: 'January 13, 2023',
	},
	{
		title: 'Application review',
		content: 'Your application is currently under review by our team.',
		time: 'January 14, 2023',
	},
	{
		title: 'Application approved',
		content: 'Congratulations! Your application has been approved.',
		time: 'January 15, 2023',
	},
];
</script>
```

<hr />
<div class="my-4">
	<bo-timeline :items="[
		{
			title: 'Application submitted',
			content: 'Your application has been submitted successfully.',
			time: 'January 13, 2023'
		},
		{
			title: 'Application review',
			content: 'Your application is currently under review by our team.',
			time: 'January 14, 2023'
		},
		{
			title: 'Application approved',
			content: 'Congratulations! Your application has been approved.',
			time: 'January 15, 2023'
		}
	]" />
</div>

## Props

| Name            | Type                | Default   | Description                        |
| --------------- | ------------------- | --------- | ---------------------------------- |
| `items`         | `BoTimelineItem[]`  | required  | Array of timeline items to display |
| `variant`       | `BoTimelineVariant` | `default` | Timeline appearance variant        |
| `size`          | `BoSize`            | `default` | Size of the timeline indicators    |
| `showConnector` | `boolean`           | `true`    | Whether to show connecting lines   |
| `align`         | `BoTimelineAlign`   | `left`    | Alignment of the timeline          |

## Types

```ts
export interface BoTimelineItem {
	title: string;
	content: string;
	time?: string;
	icon?: Icon;
	avatar?: string;
	iconColor?: BoTimelineIconColor;
}

export enum BoTimelineVariant {
	default = 'default',
	icon = 'icon',
	avatar = 'avatar',
}

export enum BoTimelineAlign {
	left = 'left',
	right = 'right',
	center = 'center',
}

export enum BoTimelineIconColor {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	info = 'info',
	light = 'light',
	dark = 'dark',
}
```

## Variants

<div class="my-6 flex flex-col gap-8">
  <!-- Default variant -->
  <div>
    <h3 class="text-sm font-semibold mb-2">Default</h3>
    <bo-timeline :variant="BoTimelineVariant.default" :items="[
      {
        title: 'Account created',
        content: 'Your account has been created.',
        time: '2 hours ago'
      },
      {
        title: 'Profile completed',
        content: 'You completed your profile information.',
        time: '1 hour ago'
      }
    ]" />
  </div>
  
  <!-- Icon variant -->
  <div>
    <h3 class="text-sm font-semibold mb-2">Icon</h3>
    <bo-timeline :variant="BoTimelineVariant.icon" :items="[
      {
        title: 'Document uploaded',
        content: 'You uploaded a new document.',
        time: '2 hours ago',
        icon: Icon.file_text,
        iconColor: BoTimelineIconColor.primary
      },
      {
        title: 'Document shared',
        content: 'You shared the document with your team.',
        time: '1 hour ago',
        icon: Icon.share,
        iconColor: BoTimelineIconColor.success
      }
    ]" />
  </div>
  
  <!-- Avatar variant -->
  <div>
    <h3 class="text-sm font-semibold mb-2">Avatar</h3>
    <bo-timeline :variant="BoTimelineVariant.avatar" :items="[
      {
        title: 'Comment from Jane',
        content: 'Jane left a comment on your post.',
        time: '3 hours ago',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      {
        title: 'Message from Alex',
        content: 'Alex sent you a direct message.',
        time: '1 hour ago',
        avatar: 'https://i.pravatar.cc/150?img=2'
      }
    ]" />
  </div>
</div>

```vue
<!-- Default variant -->
<bo-timeline :variant="BoTimelineVariant.default" :items="timelineItems" />

<!-- Icon variant -->
<bo-timeline
	:variant="BoTimelineVariant.icon"
	:items="[
		{
			title: 'Document uploaded',
			content: 'You uploaded a new document.',
			time: '2 hours ago',
			icon: Icon.file_text,
			iconColor: BoTimelineIconColor.primary,
		},
		{
			title: 'Document shared',
			content: 'You shared the document with your team.',
			time: '1 hour ago',
			icon: Icon.share,
			iconColor: BoTimelineIconColor.success,
		},
	]"
/>

<!-- Avatar variant -->
<bo-timeline
	:variant="BoTimelineVariant.avatar"
	:items="[
		{
			title: 'Comment from Jane',
			content: 'Jane left a comment on your post.',
			time: '3 hours ago',
			avatar: 'https://i.pravatar.cc/150?img=1',
		},
		{
			title: 'Message from Alex',
			content: 'Alex sent you a direct message.',
			time: '1 hour ago',
			avatar: 'https://i.pravatar.cc/150?img=2',
		},
	]"
/>
```

## Sizes

<div class="my-6 flex flex-col gap-8">
  <div>
    <h3 class="text-sm font-semibold mb-2">Small</h3>
    <bo-timeline 
      :size="BoSize.small" 
      :variant="BoTimelineVariant.icon"
      :items="[
        {
          title: 'Step 1',
          content: 'First step completed',
          icon: Icon.check,
          iconColor: BoTimelineIconColor.success
        },
        {
          title: 'Step 2',
          content: 'Second step in progress',
          icon: Icon.loader,
          iconColor: BoTimelineIconColor.warning
        }
      ]" 
    />
  </div>
  
  <div>
    <h3 class="text-sm font-semibold mb-2">Default</h3>
    <bo-timeline 
      :size="BoSize.default" 
      :variant="BoTimelineVariant.icon"
      :items="[
        {
          title: 'Step 1',
          content: 'First step completed',
          icon: Icon.check,
          iconColor: BoTimelineIconColor.success
        },
        {
          title: 'Step 2',
          content: 'Second step in progress',
          icon: Icon.loader,
          iconColor: BoTimelineIconColor.warning
        }
      ]" 
    />
  </div>
  
  <div>
    <h3 class="text-sm font-semibold mb-2">Large</h3>
    <bo-timeline 
      :size="BoSize.large" 
      :variant="BoTimelineVariant.icon"
      :items="[
        {
          title: 'Step 1',
          content: 'First step completed',
          icon: Icon.check,
          iconColor: BoTimelineIconColor.success
        },
        {
          title: 'Step 2',
          content: 'Second step in progress',
          icon: Icon.loader,
          iconColor: BoTimelineIconColor.warning
        }
      ]" 
    />
  </div>
</div>

```vue
<bo-timeline :size="BoSize.small" :variant="BoTimelineVariant.icon" :items="items" />
<bo-timeline :size="BoSize.default" :variant="BoTimelineVariant.icon" :items="items" />
<bo-timeline :size="BoSize.large" :variant="BoTimelineVariant.icon" :items="items" />
```

## Alignment

<div class="my-6 flex flex-col gap-8">
  <div>
    <h3 class="text-sm font-semibold mb-2">Left Aligned (Default)</h3>
    <bo-timeline 
      :align="BoTimelineAlign.left" 
      :variant="BoTimelineVariant.icon"
      :items="[
        {
          title: 'Left aligned item 1',
          content: 'This timeline is aligned to the left',
          icon: Icon.arrow_left,
          iconColor: BoTimelineIconColor.primary
        },
        {
          title: 'Left aligned item 2',
          content: 'Content continues to the right of indicators',
          icon: Icon.arrow_left,
          iconColor: BoTimelineIconColor.primary
        }
      ]" 
    />
  </div>
  
  <div>
    <h3 class="text-sm font-semibold mb-2">Center Aligned</h3>
    <bo-timeline 
      :align="BoTimelineAlign.center" 
      :variant="BoTimelineVariant.icon"
      :items="[
        {
          title: 'Center aligned item 1',
          content: 'This timeline is centered',
          icon: Icon.arrow_up,
          iconColor: BoTimelineIconColor.primary
        },
        {
          title: 'Center aligned item 2',
          content: 'Content is displayed below indicators',
          icon: Icon.arrow_down,
          iconColor: BoTimelineIconColor.primary
        }
      ]" 
    />
  </div>
  
  <div>
    <h3 class="text-sm font-semibold mb-2">Right Aligned</h3>
    <bo-timeline 
      :align="BoTimelineAlign.right" 
      :variant="BoTimelineVariant.icon"
      :items="[
        {
          title: 'Right aligned item 1',
          content: 'This timeline is aligned to the right',
          icon: Icon.arrow_right,
          iconColor: BoTimelineIconColor.primary
        },
        {
          title: 'Right aligned item 2',
          content: 'Content appears to the left of indicators',
          icon: Icon.arrow_right,
          iconColor: BoTimelineIconColor.primary
        }
      ]" 
    />
  </div>
</div>

```vue
<bo-timeline :align="BoTimelineAlign.left" :items="leftItems" />
<bo-timeline :align="BoTimelineAlign.center" :items="centerItems" />
<bo-timeline :align="BoTimelineAlign.right" :items="rightItems" />
```

## Without Connector

<div class="my-4">
  <bo-timeline 
    :show-connector="false" 
    :variant="BoTimelineVariant.icon"
    :items="[
      {
        title: 'First item',
        content: 'First item description',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.primary
      },
      {
        title: 'Second item',
        content: 'Second item description',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.primary
      },
      {
        title: 'Third item',
        content: 'Third item description',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.primary
      }
    ]" 
  />
</div>

```vue
<bo-timeline :show-connector="false" :variant="BoTimelineVariant.icon" :items="timelineItems" />
```

## Icon Colors

<div class="my-6">
  <bo-timeline 
    :variant="BoTimelineVariant.icon"
    :items="[
      {
        title: 'Primary',
        content: 'Primary color icon',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.primary
      },
      {
        title: 'Secondary',
        content: 'Secondary color icon',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.secondary
      },
      {
        title: 'Success',
        content: 'Success color icon',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.success
      },
      {
        title: 'Danger',
        content: 'Danger color icon',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.danger
      },
      {
        title: 'Warning',
        content: 'Warning color icon',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.warning
      },
      {
        title: 'Info',
        content: 'Info color icon',
        icon: Icon.circle,
        iconColor: BoTimelineIconColor.info
      }
    ]" 
  />
</div>

```vue
<bo-timeline
	:variant="BoTimelineVariant.icon"
	:items="[
		{
			title: 'Primary',
			content: 'Primary color icon',
			icon: Icon.circle,
			iconColor: BoTimelineIconColor.primary,
		},
		{
			title: 'Secondary',
			content: 'Secondary color icon',
			icon: Icon.circle,
			iconColor: BoTimelineIconColor.secondary,
		},
		// Additional items with different colors...
	]"
/>
```

## Usage Examples

### Order Status Timeline

```vue
<template>
	<div class="rounded-lg border p-4">
		<h3 class="mb-4 text-lg font-bold">Your Order Status</h3>
		<bo-timeline
			:variant="BoTimelineVariant.icon"
			:items="orderStatus"
		/>
	</div>
</template>

<script setup>
import { BoTimeline, BoTimelineVariant, BoTimelineIconColor } from '@mrksbnc/bamboo';
import { Icon } from '@mrksbnc/bamboo';

const orderStatus = [
	{
		title: 'Order Placed',
		content: 'Your order #12345 has been placed successfully.',
		time: 'January 15, 2023 at 9:30 AM',
		icon: Icon.check_circle,
		iconColor: BoTimelineIconColor.success,
	},
	{
		title: 'Payment Confirmed',
		content: 'Payment has been confirmed and processed.',
		time: 'January 15, 2023 at 9:35 AM',
		icon: Icon.credit_card,
		iconColor: BoTimelineIconColor.success,
	},
	{
		title: 'Processing',
		content: 'Your order is being processed and prepared for shipping.',
		time: 'January 15, 2023 at 11:20 AM',
		icon: Icon.package,
		iconColor: BoTimelineIconColor.success,
	},
	{
		title: 'Shipped',
		content: 'Your order has been shipped via Express Delivery.',
		time: 'January 16, 2023 at 2:15 PM',
		icon: Icon.truck,
		iconColor: BoTimelineIconColor.info,
	},
	{
		title: 'Out for Delivery',
		content: 'Your package is out for delivery today.',
		time: 'January 17, 2023 at 8:45 AM',
		icon: Icon.map_pin,
		iconColor: BoTimelineIconColor.warning,
	},
	{
		title: 'Delivered',
		content: 'Expected to be delivered by end of day.',
		time: 'January 17, 2023',
		icon: Icon.clock,
		iconColor: BoTimelineIconColor.secondary,
	},
];
</script>
```

### User Activity Feed

```vue
<template>
	<div class="p-4">
		<h3 class="mb-4 text-lg font-bold">Recent Activity</h3>
		<bo-timeline
			:variant="BoTimelineVariant.avatar"
			:align="BoTimelineAlign.left"
			:items="userActivity"
		/>
	</div>
</template>

<script setup>
import { BoTimeline, BoTimelineVariant, BoTimelineAlign } from '@mrksbnc/bamboo';

const userActivity = [
	{
		title: 'Jane Smith commented on your post',
		content: '"Great insights! Thanks for sharing this information."',
		time: '2 hours ago',
		avatar: 'https://i.pravatar.cc/150?img=5',
	},
	{
		title: 'Tom Wilson shared your document',
		content: 'Tom shared your document "Q4 Marketing Plan" with the marketing team.',
		time: 'Yesterday at 4:30 PM',
		avatar: 'https://i.pravatar.cc/150?img=8',
	},
	{
		title: 'Sarah Johnson mentioned you',
		content: 'Sarah mentioned you in a comment on the "Website Redesign" project.',
		time: '3 days ago',
		avatar: 'https://i.pravatar.cc/150?img=6',
	},
];
</script>
```
