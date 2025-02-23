<script setup>
import { BoIcon, Icon, icons } from '@/components/bo_icon';
</script>

# bo-icon

An icon is a graphical representation of an object or action.

## Basic usage

The component to use is called `bo-icon`.

```js
<bo-icon icon="activity" />
```

## Props

| Prop name | Type     | Default value |
| --------- | -------- | ------------- |
| `id`      | `string` | `undefined`   |
| `icon`    | `Icon`   | `undefined`   |

## Icons

To use an icon, you can use the `icon` prop.

<div class="flex flex-wrap gap-2">
    <bo-icon :icon="Icon.activity" />
</div>

## Icon sizes
