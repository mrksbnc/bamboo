<script setup>
import { BoButton, BoButtonVariant, BoButtonShape } from '@/components/bo_button'
import { BoSize } from '@/shared'
import { Icon } from '@/components/bo_icon'
import SlotButton from './examples/SlotButton.vue'
</script>

# bo-button

A button is a control that allows the user to perform an action. The library supports different variants, shapes and types of buttons.

<bo-button label="Button" />

## Basic usage

```js
<bo-button label="Button" />
```

## Props

| Prop name        | Type              | Default value             | Description                                                        |
| ---------------- | ----------------- | ------------------------- | ------------------------------------------------------------------ |
| `label`          | `string`          | `undefined`               | The label of the button.                                           |
| `variant`        | `BoButtonVariant` | `BoButtonVariant.primary` | The variant of the button.                                         |
| `shape`          | `BoButtonShape`   | `BoButtonShape.default`   | The shape of the button.                                           |
| `type`           | `HtmlButtonType`  | `button`                  | The type of the button.                                            |
| `disabled`       | `boolean`         | `false`                   | Whether the button is disabled.                                    |
| `is-loading`     | `boolean`         | `false`                   | Whether the button is loading.                                     |
| `size`           | `BoSize`          | `BoSize.default`          | The size of the button.                                            |
| `prefix-icon`    | `Icon`            | `Icon.none`               | The prefix icon of the button.                                     |
| `suffix-icon`    | `Icon`            | `Icon.none`               | The suffix icon of the button.                                     |
| `autofocus`      | `boolean`         | `false`                   | Whether the button should be focused when the page loads.          |
| `form`           | `string`          | `undefined`               | The form of the button.                                            |
| `formaction`     | `string`          | `undefined`               | The form action of the button.                                     |
| `formenctype`    | `string`          | `undefined`               | The form enctype of the button.                                    |
| `formmethod`     | `string`          | `undefined`               | The form method of the button.                                     |
| `formnovalidate` | `boolean`         | `false`                   | Whether the form should be validated.                              |
| `formtarget`     | `string`          | `undefined`               | The form target of the button.                                     |
| `name`           | `string`          | `undefined`               | The name of the button.                                            |
| `value`          | `string`          | `undefined`               | The value of the button.                                           |
| `full-width`     | `boolean`         | `false`                   | Whether the button should take up the full width of the container. |

::: warning NOTE
Though non of the props are required, either the `label` or the `prefix-icon` prop must be provided.
:::

## Slots

| Slot name | Description                                |
| --------- | ------------------------------------------ |
| `content` | slot for custom content in the button body |

::: warning Note
Note: To enable the `content` slot, you must set the `use-slot` prop.
:::

## Disabled state

To indicate that the button is disabled, use the `disabled` prop.

<bo-button label="Button" :disabled="true" />

::: details Toggle code

```js
<bo-button label="Button" :disabled="true" />
```

:::

## Loading state

To indicate progress or loading, use the `is-loading` prop to set the button to a loading state.

::: details Toggle code

```js
<bo-button label="Button" :is-loading="true" />
```

:::

#### Animation types

The button can either render a spinner or a pulse type animation.

<div class="flex gap-2">
  <bo-button label="Button" :is-loading="true" loader-type="spinner" />
  <bo-button label="Button" :is-loading="true" loader-type="pulse" />
</div>

## Sizes

To change the size of the button, use the `size` prop. The prop value should be a member of the `BoSize` enum.

Available values for the `size` prop are:

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<div class="flex gap-2">
  <bo-button label="Extra small" :size="BoSize.extra_small" />
  <bo-button label="Small" :size="BoSize.small" />
  <bo-button label="Default" :size="BoSize.default" />
  <bo-button label="Large" :size="BoSize.large" />
  <bo-button label="Extra large" :size="BoSize.extra_large" />
</div>

::: details Toggle code

```js
<div class="flex gap-2">
  <bo-button label="Extra small" :size="BoSize.extra_small" />
  <bo-button label="Small" :size="BoSize.small" />
  <bo-button label="Default" :size="BoSize.default" />
  <bo-button label="Large" :size="BoSize.large" />
  <bo-button label="Extra large" :size="BoSize.extra_large" />
</div>
```

:::

## Full width

In some cases you may want to make the button take up the full width of the container. To achieve this, use the `full-width` prop.

<div class="flex gap-2">
  <bo-button label="Button" full-width />
</div>

::: details Toggle code

```js
<div class="flex gap-2">
	<bo-button label="Button" full-width />
</div>
```

:::

## Variants

To change the color of the button, use the `variant` prop. The `variant` prop should be a member of the `BoButtonVariant` enum.

Available values for the `variant` prop are:

- `primary`
- `secondary`
- `danger`
- `warning`
- `success`
- `light`
- `dark`

<div class="flex gap-2">
  <bo-button label="Primary" :variant="BoButtonVariant.primary" />
  <bo-button label="Secondary" :variant="BoButtonVariant.secondary" />
  <bo-button label="Danger" :variant="BoButtonVariant.danger" />
  <bo-button label="Warning" :variant="BoButtonVariant.warning" />
  <bo-button label="Success" :variant="BoButtonVariant.success" />
  <bo-button label="Light" :variant="BoButtonVariant.light" />
  <bo-button label="Dark" :variant="BoButtonVariant.dark" />
</div>
<div class="flex gap-2 mt-4">
  <bo-button label="Button" :variant="BoButtonVariant.primary" :shape="BoButtonShape.link" />
  <bo-button label="Button" :variant="BoButtonVariant.secondary" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.danger" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.warning" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.success" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.light" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.dark" :shape="BoButtonShape.link"/>
</div>

::: details Toggle code

```js
<div class="flex gap-2">
  <bo-button label="Primary" :variant="BoButtonVariant.primary" />
  <bo-button label="Secondary" :variant="BoButtonVariant.secondary" />
  <bo-button label="Danger" :variant="BoButtonVariant.danger" />
  <bo-button label="Warning" :variant="BoButtonVariant.warning" />
  <bo-button label="Success" :variant="BoButtonVariant.success" />
  <bo-button label="Light" :variant="BoButtonVariant.light" />
  <bo-button label="Dark" :variant="BoButtonVariant.dark" />
  {/* Link variants */}
  <bo-button label="Link" :variant="BoButtonVariant.link" />
  <bo-button label="Link secondary" :variant="BoButtonVariant.link_secondary" />
  <bo-button label="Link danger" :variant="BoButtonVariant.link_danger" />
  <bo-button label="Link warning" :variant="BoButtonVariant.link_warning" />
  <bo-button label="Link success" :variant="BoButtonVariant.link_success" />
  <bo-button label="Link light" :variant="BoButtonVariant.link_light" />
  <bo-button label="Link dark" :variant="BoButtonVariant.link_dark" />
</div>
```

:::

## Shapes

To adapt the shape of the button, use the `shape` prop. This will enable you to change the button to a pill or outlined shape.

Available values for the `shape` prop are:

- `default`
- `pill`
- `outline`

<div class="flex gap-2">
  <bo-button label="Default" :shape="BoButtonShape.default" />
  <bo-button label="Pill" :shape="BoButtonShape.pill" />
  <bo-button label="Outline" :shape="BoButtonShape.outline" />
</div>

::: details Toggle code

```js
<bo-button label="Default" :shape="BoButtonShape.default" />
<bo-button label="Pill" :shape="BoButtonShape.pill" />
<bo-button label="Outline" :shape="BoButtonShape.outline" />
```

:::

## Icons

To display an icon before or after the label of the button, use the `prefix-icon` or `suffix-icon` prop.

<div class="flex gap-2">
  <bo-button label="Button" :prefix-icon="Icon.user" />
  <bo-button label="Button" :suffix-icon="Icon.user" />
</div>

::: details Toggle code

```js
<bo-button label="Button" :prefix-icon="Icon.user" />
<bo-button label="Button" :suffix-icon="Icon.user" />
```

:::

## Icon only

To create an icon only button, use the `prefix-icon` or `suffix-icon` prop without the `label`.
Note that in case both the `prefix-icon` and `suffix-icon` props are provided, only the `prefix-icon` will taken into account.

<div class="flex gap-2">
  <bo-button :prefix-icon="Icon.user" />
  <bo-button :prefix-icon="Icon.user" :shape="BoButtonShape.outline" />
  <bo-button :prefix-icon="Icon.user" :shape="BoButtonShape.pill" />
</div>

::: details Toggle code

```js
<bo-button :prefix-icon="Icon.user" />
<bo-button :prefix-icon="Icon.user" :shape="BoButtonShape.pill" />
<bo-button :prefix-icon="Icon.user" :shape="BoButtonShape.outline" />
```

:::

## Slots

To render content not supported by the default props of the button, you can use the `content` slot.

<SlotButton />

::: details Toggle code

```js
<bo-button>
  <template #content>
    <bo-icon :icon="Icon.user" />
  </template>
</bo-button>
```

:::

## All variants & shapes

### Default

<div class="flex gap-2 mt-4">
  <bo-button label="Button" :variant="BoButtonVariant.primary" />
  <bo-button label="Button" :variant="BoButtonVariant.secondary" />
  <bo-button label="Button" :variant="BoButtonVariant.danger" />
  <bo-button label="Button" :variant="BoButtonVariant.warning" />
  <bo-button label="Button" :variant="BoButtonVariant.success" />
  <bo-button label="Button" :variant="BoButtonVariant.light" />
  <bo-button label="Button" :variant="BoButtonVariant.dark" />
</div>

::: details Toggle code

```js
<bo-button label="Button" :variant="BoButtonVariant.primary" />
<bo-button label="Button" :variant="BoButtonVariant.secondary" />
<bo-button label="Button" :variant="BoButtonVariant.danger" />
<bo-button label="Button" :variant="BoButtonVariant.warning" />
<bo-button label="Button" :variant="BoButtonVariant.success" />
<bo-button label="Button" :variant="BoButtonVariant.light" />
<bo-button label="Button" :variant="BoButtonVariant.dark" />
```

:::

### Outline

<div class="flex gap-2 mt-4">
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.primary" />
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.secondary" />
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.danger" />
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.warning" />
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.success" />
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.light" />
  <bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.dark" />
</div>

::: details Toggle code

```js

<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.primary" />
<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.secondary" />
<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.danger" />
<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.warning" />
<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.success" />
<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.light" />
<bo-button label="Button" :shape="BoButtonShape.outline" :variant="BoButtonVariant.dark" />
```

:::

### Pill

<div class="flex gap-2 mt-4">
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.primary" />
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.secondary" />
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.danger" />
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.warning" />
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.success" />
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.light" />
  <bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.dark" />
</div>

::: details Toggle code

```js
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.primary" />
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.secondary" />
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.danger" />
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.warning" />
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.success" />
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.light" />
<bo-button label="Button" :shape="BoButtonShape.pill" :variant="BoButtonVariant.dark" />
```

:::

### Link

<div class="flex gap-2 mt-4">
  <bo-button label="Button" :variant="BoButtonVariant.primary" :shape="BoButtonShape.link" />
  <bo-button label="Button" :variant="BoButtonVariant.secondary" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.danger" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.warning" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.success" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.light" :shape="BoButtonShape.link"/>
  <bo-button label="Button" :variant="BoButtonVariant.dark" :shape="BoButtonShape.link"/>
</div>

::: details Toggle code

```js
<bo-button label="Button" :variant="BoButtonVariant.primary" :shape="BoButtonShape.link" />
<bo-button label="Button" :variant="BoButtonVariant.secondary" :shape="BoButtonShape.link"/>
<bo-button label="Button" :variant="BoButtonVariant.danger" :shape="BoButtonShape.link"/>
<bo-button label="Button" :variant="BoButtonVariant.warning" :shape="BoButtonShape.link"/>
<bo-button label="Button" :variant="BoButtonVariant.success" :shape="BoButtonShape.link"/>
<bo-button label="Button" :variant="BoButtonVariant.light" :shape="BoButtonShape.link"/>
<bo-button label="Button" :variant="BoButtonVariant.dark" :shape="BoButtonShape.link"/>
```

:::
