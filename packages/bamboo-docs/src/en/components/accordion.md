---
title: Accordion
description: Vertically stacked collapsible sections with single or multiple open states.
category: navigation
tags:
  - accordion
  - disclosure
  - collapsible
  - navigation
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoAccordion, BoAccordionItem } from '@mrksbnc/bamboo-vue';

const openItems = ref(['one', 'two']);

const basicExample = `<bo-accordion default-value="one">
  <bo-accordion-item value="one">
    <template #trigger>What is Bamboo?</template>
    <template #content>A manifest-driven Vue component library.</template>
  </bo-accordion-item>
  <bo-accordion-item value="two">
    <template #trigger>Is it themeable?</template>
    <template #content>Yes. Bamboo uses CSS tokens for theming.</template>
  </bo-accordion-item>
  <bo-accordion-item value="three">
    <template #trigger>Can I nest content?</template>
    <template #content>Any content can be placed inside the content slot.</template>
  </bo-accordion-item>
</bo-accordion>`;

const multipleExample = `<bo-accordion v-model="openItems" multiple>
  <bo-accordion-item value="one">
    <template #trigger>Notification settings</template>
    <template #content>Manage email and push notifications.</template>
  </bo-accordion-item>
  <bo-accordion-item value="two">
    <template #trigger>Privacy and security</template>
    <template #content>Review account privacy and security settings.</template>
  </bo-accordion-item>
  <bo-accordion-item value="three">
    <template #trigger>Billing</template>
    <template #content>Manage billing details and invoices.</template>
  </bo-accordion-item>
</bo-accordion>`;

const disabledExample = `<bo-accordion default-value="one">
  <bo-accordion-item value="one">
    <template #trigger>Available section</template>
    <template #content>This section remains interactive.</template>
  </bo-accordion-item>
  <bo-accordion-item value="two" disabled>
    <template #trigger>Disabled section</template>
    <template #content>This section cannot be opened.</template>
  </bo-accordion-item>
</bo-accordion>`;

const slotsExample = `<bo-accordion default-value="one">
  <bo-accordion-item value="one">
    Default slot as trigger
    <template #content>Content supplied through the content slot.</template>
  </bo-accordion-item>
  <bo-accordion-item value="two">
    <template #trigger>
      <span class="font-semibold">Plans</span>
      <span class="ms-auto rounded bg-neutral-600 px-1.5 py-0.5 text-xs">Pro</span>
    </template>
    <template #content>Any markup can be placed in the content slot.</template>
  </bo-accordion-item>
</bo-accordion>`;
</script>

# Accordion

The `bo-accordion` component renders vertically stacked collapsible sections. It supports one or multiple open items, controlled or uncontrolled state, collapsible sections, and disabled items.

## Basic Usage

Use `bo-accordion` with one or more `bo-accordion-item` components. Set `default-value` to open an item initially without using `v-model`:

<ExampleFrame :code="basicExample">
  <bo-accordion default-value="one">
    <bo-accordion-item value="one">
      <template #trigger>What is Bamboo?</template>
      <template #content>A manifest-driven Vue component library.</template>
    </bo-accordion-item>
    <bo-accordion-item value="two">
      <template #trigger>Is it themeable?</template>
      <template #content>Yes. Bamboo uses CSS tokens for theming.</template>
    </bo-accordion-item>
    <bo-accordion-item value="three">
      <template #trigger>Can I nest content?</template>
      <template #content>Any content can be placed inside the content slot.</template>
    </bo-accordion-item>
  </bo-accordion>
</ExampleFrame>

## Multiple Opened Items

Set `multiple` to allow more than one item to remain open. With `multiple`, the model value is an array:

<ExampleFrame :code="multipleExample">
  <div class="w-full">
    <bo-accordion v-model="openItems" multiple>
      <bo-accordion-item value="one">
        <template #trigger>Notification settings</template>
        <template #content>Manage email and push notifications.</template>
      </bo-accordion-item>
      <bo-accordion-item value="two">
        <template #trigger>Privacy and security</template>
        <template #content>Review account privacy and security settings.</template>
      </bo-accordion-item>
      <bo-accordion-item value="three">
        <template #trigger>Billing</template>
        <template #content>Manage billing details and invoices.</template>
      </bo-accordion-item>
    </bo-accordion>
    <p class="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
      Open values: {{ openItems.join(', ') }}
    </p>
  </div>
</ExampleFrame>

Set `collapsible` to `false` to prevent the last open item from closing. It defaults to `true`.

## Disabled Items

Set `disabled` on the accordion to disable every item, or set it on an individual item:

<ExampleFrame :code="disabledExample">
  <bo-accordion default-value="one">
    <bo-accordion-item value="one">
      <template #trigger>Available section</template>
      <template #content>This section remains interactive.</template>
    </bo-accordion-item>
    <bo-accordion-item value="two" disabled>
      <template #trigger>Disabled section</template>
      <template #content>This section cannot be opened.</template>
    </bo-accordion-item>
  </bo-accordion>
</ExampleFrame>

## Items and Slots

The `value` prop identifies an item and accepts a string or number. Use the `trigger` slot for the clickable heading and the `content` slot for the collapsible body. The default slot is used as trigger content when `trigger` is not provided:

<ExampleFrame :code="slotsExample">
  <bo-accordion default-value="one">
    <bo-accordion-item value="one">
      Default slot as trigger
      <template #content>Content supplied through the content slot.</template>
    </bo-accordion-item>
    <bo-accordion-item value="two">
      <template #trigger>
        <span class="font-semibold">Plans</span>
        <span class="ms-auto rounded bg-neutral-600 px-1.5 py-0.5 text-xs">Pro</span>
      </template>
      <template #content>Any markup can be placed in the content slot.</template>
    </bo-accordion-item>
  </bo-accordion>
</ExampleFrame>

```vue
<bo-accordion-item :value="1">
  <span>Account details</span>
  <template #content>
    <p>Content can contain arbitrary markup and components.</p>
  </template>
</bo-accordion-item>
```

## API Reference

### Props (bo-accordion)

| Prop           | Type                                       | Default         | Description                                 |
| -------------- | ------------------------------------------ | --------------- | ------------------------------------------- |
| `id`           | `string`                                   | `Autogenerated` | The id of the element.                      |
| `dataTestId`   | `string`                                   | `Autogenerated` | The data test id of the element.            |
| `modelValue`   | `string \| number \| (string \| number)[]` | -               | The active item value or values.            |
| `defaultValue` | `string \| number \| (string \| number)[]` | -               | The initially open item value or values.    |
| `multiple`     | `boolean`                                  | `false`         | Whether multiple items can be open at once. |
| `collapsible`  | `boolean`                                  | `true`          | Whether the last open item can be closed.   |
| `disabled`     | `boolean`                                  | `false`         | Whether the accordion is disabled.          |

### Props (bo-accordion-item)

| Prop         | Type                     | Default         | Description                      |
| ------------ | ------------------------ | --------------- | -------------------------------- |
| `id`         | `string`                 | `Autogenerated` | The id of the element.           |
| `dataTestId` | `string`                 | `Autogenerated` | The data test id of the element. |
| `value`      | `string \| number`       | -               | The value of the item.           |
| `disabled`   | `boolean`                | `false`         | Whether the item is disabled.    |
| `role`       | `HTMLAttributes['role']` | -               | The role of the content region.  |

### Events

| Event               | Payload                                    | Description                      |
| ------------------- | ------------------------------------------ | -------------------------------- |
| `update:modelValue` | `string \| number \| (string \| number)[]` | Emitted when an item is toggled. |

### Slots

| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `default` | `bo-accordion`: the accordion items.                                  |
| `default` | `bo-accordion-item`: trigger content when no `trigger` slot is given. |
| `trigger` | `bo-accordion-item`: custom trigger content.                          |
| `content` | `bo-accordion-item`: the collapsible body.                            |
