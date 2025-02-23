<script setup>
import { BoCard } from '@/components/bo_card';
import DefaultSlotExample from './examples/DefaultSlotExample.vue'
</script>

# bo-card

A card is a container that holds related content and actions with a predifined style.

## Basic usage

The component to use is called `bo-card`.

### Example

```js
<bo-card>
  <template #header>
    //
  </template>
  <template #content>
    //
  </template>
  <template #actions>
    //
  </template>
</bo-card>

```

## Slots

To render you content, you can use the following slots.

| Slot name |
| --------- |
| `header`  |
| `content` |
| `actions` |

<DefaultSlotExample />

::: details Toggle code

```js
<bo-card>
  <template #header>
    <div class="flex flex-row gap-2 items-center text-neutral-900">
      <bo-icon :icon="Icon.globe" color="currentColor" :size="BoSize.default" />
      <bo-text text="Lorem ipsum" :size="BoFontSize['1xl']" :color="BoTextColor.secondary" />
    </div>
  </template>
  <template #content>
    <div class="flex flex-col gap-2 mt-2">
      <bo-text
        :size="BoFontSize.sm"
        :color="BoTextColor.disabled"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,   semper congue, euismod non, mi."
      />
    </div>
  </template>
  <template #actions>
    <div class="flex gap-2 mt-2">
      <bo-button label="Read more" :size="BoSize.small" :variant="BoButtonVariant.dark" />
	</div>
  </template>
</bo-card>
```

:::
