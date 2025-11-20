---
title: Alert
description: Display important messages and notifications with different variants and dismissible options.
outline: deep
---

<script setup lang="ts">
import { BoAlert } from '@/components/bo-alert';
import { BoVariant } from '@/shared/variant';
</script>

# Alert

Display important messages and notifications with support for different variants, icons, and dismissible functionality.

## Basic Usage

```vue
<bo-alert message="This is an informational alert" />
```

<div style="margin-top: 1rem;">
  <bo-alert message="This is an informational alert" />
</div>

## With Title

```vue
<bo-alert
	title="Success!"
	message="Your changes have been saved successfully."
	:variant="BoVariant.success"
/>
```

<div style="margin-top: 1rem;">
  <bo-alert title="Success!" message="Your changes have been saved successfully." :variant="BoVariant.success" />
</div>

## Variants

```vue
<bo-alert title="Primary" message="This is a primary alert" :variant="BoVariant.primary" />
<bo-alert title="Success" message="Operation completed successfully" :variant="BoVariant.success" />
<bo-alert title="Warning" message="Please review your input" :variant="BoVariant.warning" />
<bo-alert title="Danger" message="An error occurred" :variant="BoVariant.danger" />
```

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
  <bo-alert title="Primary" message="This is a primary alert" :variant="BoVariant.primary" />
  <bo-alert title="Success" message="Operation completed successfully" :variant="BoVariant.success" />
  <bo-alert title="Warning" message="Please review your input" :variant="BoVariant.warning" />
  <bo-alert title="Danger" message="An error occurred" :variant="BoVariant.danger" />
</div>

## Dismissible

```vue
<bo-alert message="This alert can be dismissed" :dismissible="true" />
```

<div style="margin-top: 1rem;">
  <bo-alert message="This alert can be dismissed" :dismissible="true" />
</div>

## Without Icon

```vue
<bo-alert message="Alert without icon" :show-icon="false" />
```

<div style="margin-top: 1rem;">
  <bo-alert message="Alert without icon" :show-icon="false" />
</div>

## API Reference

### Props

| Name          | Type        | Default     | Description                        |
| ------------- | ----------- | ----------- | ---------------------------------- |
| `variant`     | `BoVariant` | `'primary'` | Visual variant of the alert        |
| `title`       | `string`    | -           | Title of the alert                 |
| `message`     | `string`    | -           | Message content                    |
| `dismissible` | `boolean`   | `false`     | Whether the alert can be dismissed |
| `showIcon`    | `boolean`   | `true`      | Whether to show the icon           |

### Events

| Event     | Payload | Description                         |
| --------- | ------- | ----------------------------------- |
| `dismiss` | -       | Emitted when the alert is dismissed |
