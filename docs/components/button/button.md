<script setup>
import { BoButton } from '@/components/bo_button'
import BoButtonVariantsExample from './examples/BoButtonVariantsExample.vue'
import BoButtonShapesExample from './examples/BoButtonShapesExample.vue'
import BoButtonSizeExample from './examples/BoButtonSizeExample.vue'
import BoButtonIconVariants from './examples/BoButtonIconVariants.vue'
import BoButtonIconOnlyVariant from './examples/BoButtonIconOnlyVariant.vue'
</script>

# Button

A button is a control that allows the user to perform an action. The library supports different variants, shapes and types of buttons.

## Basic usage

The component to use is called `bo-button`.

<bo-button label="Button" />

## Props

| Prop name               | Type              | Default value             |
| ----------------------- | ----------------- | ------------------------- |
| `label`                 | `string`          | `undefined`               |
| `variant`               | `BoButtonVariant` | `BoButtonVariant.primary` |
| `shape`                 | `BoButtonShape`   | `BoButtonShape.default`   |
| `type`                  | `HtmlButtonType`  | `button`                  |
| `disabled`              | `boolean`         | `false`                   |
| `isLoading`             | `boolean`         | `false`                   |
| `size`                  | `BoSize`          | `BoSize.default`          |
| `linkVariantWithShadow` | `boolean`         | `false`                   |
| `prefixIcon`            | `Icon`            | `Icon.none`               |
| `suffixIcon`            | `Icon`            | `Icon.none`               |

::: warning Note
To make the button work properly, either the `label` or the `prefixIcon` prop must be provided.
:::

::: tip Icon only button
To create an icon only button, you can use the `prefixIcon` prop without the `label` prop.
If the label is not provided, the padding and the general size of the button will be aligned
to match the icon correctly.
:::

## Disabled

The `disabled` prop can be used to disable the button. When the button is disabled, it will not respond to user interactions and will appear in a disabled state.

<div class="flex flex-row gap-4 w">
	<bo-button label="Disabled" disabled />
</div>

## Loading

The `isLoading` prop can be used to show a loading spinner. When the spinner is shown, the button will be disabled and will not respond to user interactions.

<div class="flex flex-row gap-4 w">
	<bo-button label="Loading" :isLoading="true" />
</div>

## Button variants

To change the color of the component, you can use the predifened `BoButtonVariant` enum.

The available values for the `BoButtonVariant` enum are:

- `primary`
- `secondary`
- `danger`
- `warning`
- `success`
- `dark`
- `link`
- `link_secondary`
- `link_danger`
- `link_warning`
- `link_success`
- `link_dark`

<bo-button-variants-example />

## Button shapes

To change the shape of the component, you can use the predifened `BoButtonShape` enum. The `BoButtonShape` enum includes the following shapes:

- `default`
- `pill`
- `outline`

<bo-button-shapes-example />

## Button sizes

The `size` prop can be used to change the size of the button. The `size` prop should be a member of the `BoSize` enum.

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<bo-button-size-example />

## Button types

To change the type of the component, you can use the predifened `type` prop. The `type` prop should be a string that represents the type of the button. The `type` prop can take the values of the `button`, `submit`, and `reset`.

## With icon

The `prefixIcon` and `suffixIcon` props can be used to display an icon before and after the label of the button.
Both of these props should be a member of the `Icon` enum.

<bo-button-icon-variants />

## Icon only

To create an icon only button, you can use the `prefixIcon` prop without the `label`. If the label is not provided, the padding and the general size of the button will be aligned

<bo-button-icon-only-variant />
