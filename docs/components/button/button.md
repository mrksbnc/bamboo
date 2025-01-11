<script setup>
import { BoButton } from '@/components/bo_button'
import BoButtonVariantsExample from './examples/BoButtonVariantsExample.vue'
import BoButtonShapesExample from './examples/BoButtonShapesExample.vue'
import BoButtonSizeExample from './examples/BoButtonSizeExample.vue'
import BoButtonIconVariants from './examples/BoButtonIconVariants.vue'
import BoButtonIconOnlyVariant from './examples/BoButtonIconOnlyVariant.vue'
</script>

# bo-button

A button is a control that allows the user to perform an action. The library supports different variants, shapes and types of buttons.

<bo-button label="Button" />

## Basic usage

```vue
<bo-button label="Button" />
```

## Props

| Prop name     | Type              | Default value             |
| ------------- | ----------------- | ------------------------- |
| `label`       | `string`          | `undefined`               |
| `variant`     | `BoButtonVariant` | `BoButtonVariant.primary` |
| `shape`       | `BoButtonShape`   | `BoButtonShape.default`   |
| `type`        | `HtmlButtonType`  | `button`                  |
| `disabled`    | `boolean`         | `false`                   |
| `is-loading`  | `boolean`         | `false`                   |
| `size`        | `BoSize`          | `BoSize.default`          |
| `prefix-icon` | `Icon`            | `Icon.none`               |
| `suffix-icon` | `Icon`            | `Icon.none`               |

::: warning Note
Though non of the props are required, either the `label` or the `prefix-icon` prop must be provided.
:::

## Disabled

To disable the button, set the `disabled` prop to `true`. When the button is disabled, it will not respond to user interactions and will appear in a disabled state.

### Example

<div class="mt-4"> 
	<bo-button label="Disabled" :disabled="true" />
</div>

```vue
<bo-button label="Disabled" :disabled="true" />
```

## Loading

To represent a loading state, change the value of the `is-loading` prop. When the button is loading, it will be disabled and will not respond to user interactions.

<bo-button label="Loading" :is-loading="true" />

## Button variants

To change the color of the component, you can use the predifened `BoButtonVariant` enum and `variant` prop The available values for the `BoButtonVariant` enum

### Filled variants

- `primary`
- `secondary`
- `danger`
- `warning`
- `success`
- `dark`

### Link variants

- `link`
- `link_secondary`
- `link_danger`
- `link_warning`
- `link_success`
- `link_dark`

<bo-button-variants-example />

### Example

```vue
<bo-button label="Button" :variant="BoButtonVariant.primary" />
...
```

## Button shapes

To change the shape of the component, you can use the predifened `BoButtonShape` enum. The `BoButtonShape` enum includes the following shapes:

- `default`
- `pill`
- `outline`

<bo-button-shapes-example />

### Example

```vue
<bo-button label="Button" :shape="BoButtonShape.outline" />
```

## Button sizes

The `size` prop can be used to change the size of the button. The `size` prop should be a member of the `BoSize` enum.

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<bo-button-size-example />

### Example

```vue
<bo-button label="Button" :size="BoSize.default" />
```

## Button types

To change the type of the component, you can use the predifened `type` prop. The `type` prop should be a string that represents the type of the button. The `type` prop can take the values of the `button`, `submit`, and `reset`.

### Example

```vue
<bo-button label="Button" :type="HtmlButtonType.submit" />
```

## With icon

The `prefixIcon` and `suffixIcon` props can be used to display an icon before and after the label of the button.
Both of these props should be a member of the `Icon` enum.

<bo-button-icon-variants />

### Example

```vue
<bo-button label="Button" :prefix-icon="Icon.bell" />
<bo-button label="Button" :suffix-icon="Icon.bell" />
```

## Icon only

To create an icon only button, you can use the `prefixIcon` prop without the `label`. If the label is not provided, the padding and the general size of the button will be aligned

<bo-button-icon-only-variant />

### Example

```vue
<bo-button :prefix-icon="Icon.alert_circle" />
```
