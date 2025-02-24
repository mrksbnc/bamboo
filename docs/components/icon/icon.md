<script setup>
import { BoIcon, Icon, icons } from '@/components/bo_icon';
import { BoSize } from '@/shared';
</script>

# bo-icon

An icon is a graphical representation of an object or action.

## Basic usage

The component to use is called `bo-icon`.

```js
<bo-icon icon="activity" />
```

## Props

| Prop name | Type     | Default value | Description                                     |
| --------- | -------- | ------------- | ----------------------------------------------- |
| `id`      | `string` | `undefined`   | The id of the icon.                             |
| `icon`    | `Icon`   | `undefined`   | The icon to display, member of the `Icon` enum. |
| `color`   | `string` | `undefined`   | The color of the icon.                          |

## Icons

To use an icon, you can use the `icon` prop.

<div class="flex flex-wrap gap-2">
    <bo-icon :icon="Icon.activity" />
</div>

## Icon sizes

The `<bo-icon>` component supports different sizes.

Available sizes are:

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<div class="flex gap-2">
  <bo-icon :icon="Icon.activity" :size="BoSize.extra_small" />
  <bo-icon :icon="Icon.activity" :size="BoSize.small" />
  <bo-icon :icon="Icon.activity" :size="BoSize.default" />
  <bo-icon :icon="Icon.activity" :size="BoSize.large" />
  <bo-icon :icon="Icon.activity" :size="BoSize.extra_large" />
</div>

::: details Toggle code

```js
<bo-icon :icon="Icon.activity" :size="BoSize.extra_small" />
<bo-icon :icon="Icon.activity" :size="BoSize.small" />
<bo-icon :icon="Icon.activity" :size="BoSize.default" />
<bo-icon :icon="Icon.activity" :size="BoSize.large" />
<bo-icon :icon="Icon.activity" :size="BoSize.extra_large" />
```

:::

## Icon colors

To change the color of the icon, you can use the `color` prop. This accepts any valid `hex` value.

<div class="flex gap-2">
  <bo-icon :icon="Icon.activity" color="#41b883" />
  <bo-icon :icon="Icon.activity" color="#ff0000" />
  <bo-icon :icon="Icon.activity" color="#777777" />
</div>

::: details Toggle code

```js
<bo-icon :icon="Icon.activity" color="#41b883" />
<bo-icon :icon="Icon.activity" color="#ff0000" />
<bo-icon :icon="Icon.activity" color="#777777" />
```

:::

## All available icons

<div class="flex gap-2 flex-wrap">
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.activity" />
    <label class="text-sm">activity</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.airplay" />
    <label class="text-sm">airplay</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.alert_circle" />
    <label class="text-sm">alert_circle</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.alert_octagon" />
    <label class="text-sm">alert_octagon</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.alert_triangle" />
    <label class="text-sm">alert_triangle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.align_center" />
    <label class="text-sm">align_center</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.align_justify" />
    <label class="text-sm">align_justify</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.align_left" />
    <label class="text-sm">align_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.align_right" />
    <label class="text-sm">align_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.anchor" />
    <label class="text-sm">anchor</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.aperture" />
    <label class="text-sm">aperture</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.archive" />
    <label class="text-sm">archive</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_down_circle" />
    <label class="text-sm">arrow_down_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_down_left" />
    <label class="text-sm">arrow_down_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_down_right" />
    <label class="text-sm">arrow_down_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_down" />
    <label class="text-sm">arrow_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_left_circle" />
    <label class="text-sm">arrow_left_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_left" />
    <label class="text-sm">arrow_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_right_circle" />
    <label class="text-sm">arrow_right_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_right" />
    <label class="text-sm">arrow_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_up_circle" />
    <label class="text-sm">arrow_up_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_up_left" />
    <label class="text-sm">arrow_up_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_up_right" />
    <label class="text-sm">arrow_up_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.arrow_up" />
    <label class="text-sm">arrow_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.at_sign" />
    <label class="text-sm">at_sign</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.award" />
    <label class="text-sm">award</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bar_chart_2" />
    <label class="text-sm">bar_chart_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bar_chart" />
    <label class="text-sm">bar_chart</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.battery_charging" />
    <label class="text-sm">battery_charging</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.battery" />
    <label class="text-sm">battery</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bell_off" />
    <label class="text-sm">bell_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bell" />
    <label class="text-sm">bell</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bluetooth" />
    <label class="text-sm">bluetooth</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bold" />
    <label class="text-sm">bold</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.book_open" />
    <label class="text-sm">book_open</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.book" />
    <label class="text-sm">book</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.bookmark" />
    <label class="text-sm">bookmark</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.box" />
    <label class="text-sm">box</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.briefcase" />
    <label class="text-sm">briefcase</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.calendar" />
    <label class="text-sm">calendar</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.camera_off" />
    <label class="text-sm">camera_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.camera" />
    <label class="text-sm">camera</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cast" />
    <label class="text-sm">cast</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.check_circle" />
    <label class="text-sm">check_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.check_square" />
    <label class="text-sm">check_square</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.check" />
    <label class="text-sm">check</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevron_down" />
    <label class="text-sm">chevron_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevron_left" />
    <label class="text-sm">chevron_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevron_right" />
    <label class="text-sm">chevron_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevron_up" />
    <label class="text-sm">chevron_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevrons_down" />
    <label class="text-sm">chevrons_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevrons_left" />
    <label class="text-sm">chevrons_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevrons_right" />
    <label class="text-sm">chevrons_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chevrons_up" />
    <label class="text-sm">chevrons_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.chrome" />
    <label class="text-sm">chrome</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.circle" />
    <label class="text-sm">circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.clipboard" />
    <label class="text-sm">clipboard</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.clock" />
    <label class="text-sm">clock</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cloud_drizzle" />
    <label class="text-sm">cloud_drizzle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cloud_lightning" />
    <label class="text-sm">cloud_lightning</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cloud_off" />
    <label class="text-sm">cloud_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cloud_rain" />
    <label class="text-sm">cloud_rain</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cloud_snow" />
    <label class="text-sm">cloud_snow</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cloud" />
    <label class="text-sm">cloud</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.code" />
    <label class="text-sm">code</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.codepen" />
    <label class="text-sm">codepen</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.codesandbox" />
    <label class="text-sm">codesandbox</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.coffee" />
    <label class="text-sm">coffee</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.columns" />
    <label class="text-sm">columns</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.command" />
    <label class="text-sm">command</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.compass" />
    <label class="text-sm">compass</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.copy" />
    <label class="text-sm">copy</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_down_left" />
    <label class="text-sm">corner_down_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_down_right" />
    <label class="text-sm">corner_down_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_left_down" />
    <label class="text-sm">corner_left_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_left_up" />
    <label class="text-sm">corner_left_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_right_down" />
    <label class="text-sm">corner_right_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_right_up" />
    <label class="text-sm">corner_right_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_up_left" />
    <label class="text-sm">corner_up_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.corner_up_right" />
    <label class="text-sm">corner_up_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.cpu" />
    <label class="text-sm">cpu</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.credit_card" />
    <label class="text-sm">credit_card</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.crop" />
    <label class="text-sm">crop</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.crosshair" />
    <label class="text-sm">crosshair</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.database" />
    <label class="text-sm">database</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.delete" />
    <label class="text-sm">delete</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.disc" />
    <label class="text-sm">disc</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.dollar_sign" />
    <label class="text-sm">dollar_sign</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.download_cloud" />
    <label class="text-sm">download_cloud</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.download" />
    <label class="text-sm">download</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.droplet" />
    <label class="text-sm">droplet</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.edit_2" />
    <label class="text-sm">edit_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.edit_3" />
    <label class="text-sm">edit_3</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.edit" />
    <label class="text-sm">edit</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.external_link" />
    <label class="text-sm">external_link</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.eye_off" />
    <label class="text-sm">eye_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.eye" />
    <label class="text-sm">eye</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.facebook" />
    <label class="text-sm">facebook</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.fast_forward" />
    <label class="text-sm">fast_forward</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.feather" />
    <label class="text-sm">feather</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.figma" />
    <label class="text-sm">figma</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.file_minus" />
    <label class="text-sm">file_minus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.file_plus" />
    <label class="text-sm">file_plus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.file_text" />
    <label class="text-sm">file_text</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.file" />
    <label class="text-sm">file</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.film" />
    <label class="text-sm">film</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.filter" />
    <label class="text-sm">filter</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.flag" />
    <label class="text-sm">flag</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.folder_minus" />
    <label class="text-sm">folder_minus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.folder_plus" />
    <label class="text-sm">folder_plus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.folder" />
    <label class="text-sm">folder</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.framer" />
    <label class="text-sm">framer</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.frown" />
    <label class="text-sm">frown</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.gift" />
    <label class="text-sm">gift</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.git_branch" />
    <label class="text-sm">git_branch</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.git_commit" />
    <label class="text-sm">git_commit</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.git_merge" />
    <label class="text-sm">git_merge</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.git_pull_request" />
    <label class="text-sm">git_pull_request</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.github" />
    <label class="text-sm">github</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.gitlab" />
    <label class="text-sm">gitlab</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.globe" />
    <label class="text-sm">globe</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.grid" />
    <label class="text-sm">grid</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.hard_drive" />
    <label class="text-sm">hard_drive</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.hash" />
    <label class="text-sm">hash</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.headphones" />
    <label class="text-sm">headphones</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.heart" />
    <label class="text-sm">heart</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.help_circle" />
    <label class="text-sm">help_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.hexagon" />
    <label class="text-sm">hexagon</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.home" />
    <label class="text-sm">home</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.image" />
    <label class="text-sm">image</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.inbox" />
    <label class="text-sm">inbox</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.info" />
    <label class="text-sm">info</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.instagram" />
    <label class="text-sm">instagram</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.italic" />
    <label class="text-sm">italic</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.key" />
    <label class="text-sm">key</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.layers" />
    <label class="text-sm">layers</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.layout" />
    <label class="text-sm">layout</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.life_buoy" />
    <label class="text-sm">life_buoy</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.link_2" />
    <label class="text-sm">link_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.link" />
    <label class="text-sm">link</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.linkedin" />
    <label class="text-sm">linkedin</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.list" />
    <label class="text-sm">list</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.loader" />
    <label class="text-sm">loader</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.lock" />
    <label class="text-sm">lock</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.log_in" />
    <label class="text-sm">log_in</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.log_out" />
    <label class="text-sm">log_out</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.mail" />
    <label class="text-sm">mail</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.map_pin" />
    <label class="text-sm">map_pin</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.map" />
    <label class="text-sm">map</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.maximize_2" />
    <label class="text-sm">maximize_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.maximize" />
    <label class="text-sm">maximize</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.meh" />
    <label class="text-sm">meh</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.menu" />
    <label class="text-sm">menu</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.message_circle" />
    <label class="text-sm">message_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.message_square" />
    <label class="text-sm">message_square</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.mic_off" />
    <label class="text-sm">mic_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.mic" />
    <label class="text-sm">mic</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.minimize_2" />
    <label class="text-sm">minimize_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.minimize" />
    <label class="text-sm">minimize</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.minus_circle" />
    <label class="text-sm">minus_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.minus_square" />
    <label class="text-sm">minus_square</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.minus" />
    <label class="text-sm">minus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.monitor" />
    <label class="text-sm">monitor</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.moon" />
    <label class="text-sm">moon</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.more_horizontal" />
    <label class="text-sm">more_horizontal</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.more_vertical" />
    <label class="text-sm">more_vertical</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.mouse_pointer" />
    <label class="text-sm">mouse_pointer</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.move" />
    <label class="text-sm">move</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.music" />
    <label class="text-sm">music</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.navigation_2" />
    <label class="text-sm">navigation_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.navigation" />
    <label class="text-sm">navigation</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.octagon" />
    <label class="text-sm">octagon</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.package" />
    <label class="text-sm">package</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.paperclip" />
    <label class="text-sm">paperclip</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.pause_circle" />
    <label class="text-sm">pause_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.pause" />
    <label class="text-sm">pause</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.pen_tool" />
    <label class="text-sm">pen_tool</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.percent" />
    <label class="text-sm">percent</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone_call" />
    <label class="text-sm">phone_call</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone_forwarded" />
    <label class="text-sm">phone_forwarded</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone_incoming" />
    <label class="text-sm">phone_incoming</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone_missed" />
    <label class="text-sm">phone_missed</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone_off" />
    <label class="text-sm">phone_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone_outgoing" />
    <label class="text-sm">phone_outgoing</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.phone" />
    <label class="text-sm">phone</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.pie_chart" />
    <label class="text-sm">pie_chart</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.play_circle" />
    <label class="text-sm">play_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.play" />
    <label class="text-sm">play</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.plus_circle" />
    <label class="text-sm">plus_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.plus_square" />
    <label class="text-sm">plus_square</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.plus" />
    <label class="text-sm">plus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.pocket" />
    <label class="text-sm">pocket</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.power" />
    <label class="text-sm">power</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.printer" />
    <label class="text-sm">printer</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.radio" />
    <label class="text-sm">radio</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.refresh_ccw" />
    <label class="text-sm">refresh_ccw</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.refresh_cw" />
    <label class="text-sm">refresh_cw</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.repeat" />
    <label class="text-sm">repeat</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.rewind" />
    <label class="text-sm">rewind</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.rotate_ccw" />
    <label class="text-sm">rotate_ccw</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.rotate_cw" />
    <label class="text-sm">rotate_cw</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.rss" />
    <label class="text-sm">rss</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.save" />
    <label class="text-sm">save</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.scissors" />
    <label class="text-sm">scissors</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.search" />
    <label class="text-sm">search</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.send" />
    <label class="text-sm">send</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.server" />
    <label class="text-sm">server</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.settings" />
    <label class="text-sm">settings</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.share_2" />
    <label class="text-sm">share_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.share" />
    <label class="text-sm">share</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.shield_off" />
    <label class="text-sm">shield_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.shield" />
    <label class="text-sm">shield</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.shopping_bag" />
    <label class="text-sm">shopping_bag</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.shopping_cart" />
    <label class="text-sm">shopping_cart</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.shuffle" />
    <label class="text-sm">shuffle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.sidebar" />
    <label class="text-sm">sidebar</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.skip_back" />
    <label class="text-sm">skip_back</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.skip_forward" />
    <label class="text-sm">skip_forward</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.slack" />
    <label class="text-sm">slack</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.slash" />
    <label class="text-sm">slash</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.sliders" />
    <label class="text-sm">sliders</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.smartphone" />
    <label class="text-sm">smartphone</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.smile" />
    <label class="text-sm">smile</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.speaker" />
    <label class="text-sm">speaker</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.square" />
    <label class="text-sm">square</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.star" />
    <label class="text-sm">star</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.stop_circle" />
    <label class="text-sm">stop_circle</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.sun" />
    <label class="text-sm">sun</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.sunrise" />
    <label class="text-sm">sunrise</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.sunset" />
    <label class="text-sm">sunset</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.tablet" />
    <label class="text-sm">tablet</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.tag" />
    <label class="text-sm">tag</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.target" />
    <label class="text-sm">target</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.terminal" />
    <label class="text-sm">terminal</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.thermometer" />
    <label class="text-sm">thermometer</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.thumbs_down" />
    <label class="text-sm">thumbs_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.thumbs_up" />
    <label class="text-sm">thumbs_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.toggle_left" />
    <label class="text-sm">toggle_left</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.toggle_right" />
    <label class="text-sm">toggle_right</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.tool" />
    <label class="text-sm">tool</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.trash_2" />
    <label class="text-sm">trash_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.trash" />
    <label class="text-sm">trash</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.trello" />
    <label class="text-sm">trello</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.trending_down" />
    <label class="text-sm">trending_down</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.trending_up" />
    <label class="text-sm">trending_up</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.triangle" />
    <label class="text-sm">triangle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.truck" />
    <label class="text-sm">truck</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.tv" />
    <label class="text-sm">tv</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.twitch" />
    <label class="text-sm">twitch</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.twitter" />
    <label class="text-sm">twitter</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.type" />
    <label class="text-sm">type</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.umbrella" />
    <label class="text-sm">umbrella</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.underline" />
    <label class="text-sm">underline</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.unlock" />
    <label class="text-sm">unlock</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.upload_cloud" />
    <label class="text-sm">upload_cloud</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.upload" />
    <label class="text-sm">upload</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.user_check" />
    <label class="text-sm">user_check</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.user_minus" />
    <label class="text-sm">user_minus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.user_plus" />
    <label class="text-sm">user_plus</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.user" />
    <label class="text-sm">user</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.users" />
    <label class="text-sm">users</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.video_off" />
    <label class="text-sm">video_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.video" />
    <label class="text-sm">video</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.voicemail" />
    <label class="text-sm">voicemail</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.volume_1" />
    <label class="text-sm">volume_1</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.volume_2" />
    <label class="text-sm">volume_2</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.volume_x" />
    <label class="text-sm">volume_x</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.volume" />
    <label class="text-sm">volume</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.watch" />
    <label class="text-sm">watch</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.wifi_off" />
    <label class="text-sm">wifi_off</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.wifi" />
    <label class="text-sm">wifi</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.wind" />
    <label class="text-sm">wind</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.x_circle" />
    <label class="text-sm">x_circle</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.x_octagon" />
    <label class="text-sm">x_octagon</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.x_square" />
    <label class="text-sm">x_square</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.x" />
    <label class="text-sm">x</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.youtube" />
    <label class="text-sm">youtube</label>    
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.zap-off" />
    <label class="text-sm">zap-off</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.zap" />
    <label class="text-sm">zap</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.zoom_in" />
    <label class="text-sm">zoom_in</label>
  </span>
  <span class="p-2 flex flex-col gap-2 items-center border rounded-lg"> 
    <bo-icon :icon="Icon.zoom_out" />
    <label class="text-sm">zoom_out</label>
  </span>
</div>
