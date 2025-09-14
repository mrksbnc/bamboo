<script setup lang="ts">
import { BoIcon, Icon, BoIconVariant } from "@/components/bo-icon/index";
import { BoSize } from "@/lib/bo-size";

const iconList = Object.values(Icon);
</script>

# bo-icon

An icon is a graphical representation of a concept or object. It can be used to represent a product, service, or idea or to simply provide visual cues.

The icon component is a wrapper around the [Feather Icons](https://feathericons.com/) library.

### Basic Usage

```vue
<bo-icon :icon="Icon.heart" />
```

## Props

| Name             | Type            | Default                 | Description                                 |
| ---------------- | --------------- | ----------------------- | ------------------------------------------- |
| `id`             | `string`        | `auto-generated`        | Unique identifier for the icon element      |
| `data-testid`    | `string`        | `auto-generated`        | Unique data-test-id of the icon             |
| `icon`           | `Icon`          | `required`              | The icon to display                         |
| `size`           | `BoSize`        | `BoSize.default`        | The size of the icon                        |
| `variant`        | `BoIconVariant` | `BoIconVariant.default` | The color of the icon                       |
| `customColor`    | `string`        | `undefined`             | Custom color of the icon                    |
| `customCssClass` | `string`        | `undefined`             | Custom css class passed to the root element |
| `cursor`         | `string`        | `undefined`             | Cursor type of the element.                 |
| `title`          | `string`        | `undefined`             | The accessible title of the icon.           |
| `role`           | `string`        | `img`                   | The accessibility role of the icon.         |
| `decorative`     | `boolean`       | `true`                  | Whether the icon is decorative.             |

## Sizes

The icon component supports different sizes with the `size` prop. The default size is `24px`.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-icon :icon="Icon.heart" :size="16" />
  <bo-icon :icon="Icon.heart" :size="32" />
  <bo-icon :icon="Icon.heart" :size="64" />
</div>

## Variants

The icon support any color but also provides predefined ones for convenience.
The available variants are the following:

- `default`
- `primary`
- `secondary`
- `success`
- `warning`
- `danger`
- `light`
- `dark`

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; ">
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column;  padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.default" />
	<span style="font-weight: bold; font-size: 0.875rem;">default</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column;  padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.primary" />
	<span style="font-weight: bold; font-size: 0.875rem;">primary</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column; padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.secondary" />
	<span style="font-weight: bold; font-size: 0.875rem;">secondary</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column; padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.success" />
	<span style="font-weight: bold; font-size: 0.875rem;">success</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column; padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.warning" />
	<span style="font-weight: bold; font-size: 0.875rem;">warning</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column; padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.danger" />
	<span style="font-weight: bold; font-size: 0.875rem;">danger</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column; padding: 0.5rem; background-color: #000;">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.light" />
	<span style="font-weight: bold; font-size: 0.875rem; color: #fff;">light</span>
  </span>
  <span style="display: flex; gap: 1rem; align-items: center; flex-direction: column; background-color: #fff; padding: 0.5rem">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.dark" />
	<span style="font-weight: bold; font-size: 0.875rem; color: #000;">dark</span>
  </span>
</div>

## Custom Colors

You can customize the color of the icon by passing a valid CSS color value to the `customColor` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-icon :icon="Icon.heart" custom-color="--teal-500" />
  <bo-icon :icon="Icon.check" custom-color="345678" />
  <bo-icon :icon="Icon.alert_circle" custom-color="var(--orange-500)" />
  <bo-icon :icon="Icon.x" custom-color="#FF0000" />
  <bo-icon :icon="Icon.star" custom-color="oklch(0.591 0.293 322.896)" />
</div>

```vue
<!-- If the lenght of the color is 7 characters, it will be interpreted as a CSS variable -->
<bo-icon :icon="Icon.heart" custom-color="--teal-500" />
<!-- If the lenght of the color is 6 characters, it will be interpreted as a hex color -->
<bo-icon :icon="Icon.check" custom-color="345678" />
<bo-icon :icon="Icon.alert_circle" custom-color="var(--orange-500)" />
<bo-icon :icon="Icon.x" custom-color="#FF0000" />
<bo-icon :icon="Icon.star" custom-color="oklch(0.591 0.293 322.896)" />
```

## All available icons

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr)); gap: 1rem; margin-top: 2rem;">
  <div v-for="(value, key) in Icon" :key="key" style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center; padding: 1rem; border: 1px solid #ccc; border-radius: 0.25rem;">
    <bo-icon :icon="value" />
	<span style="font-weight: bold; font-size: 0.875rem;">{{ key }}</span>
  </div>
</div>

### Interfaces and constants
