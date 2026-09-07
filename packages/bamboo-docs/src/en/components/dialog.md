---
title: Dialog
description: A modal overlay for focused content, forms, and actions.
category: overlay
tags:
  - dialog
  - modal
  - overlay
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoDialog } from '@mrksbnc/bamboo-vue';

const open = ref(false);
const sizedOpen = ref(false);
const selectedSize = ref<'sm' | 'default' | 'lg' | 'xl' | 'full'>('default');
const customOpen = ref(false);
const behaviorOpen = ref(false);
const infoOpen = ref(false);
const warningOpen = ref(false);
const variantOpen = ref(false);
const variantResult = ref('No decision yet');

const basicExample = `<bo-button size="sm" @click="open = true">Open dialog</bo-button>
<bo-dialog v-model:open="open" title="Edit profile" description="Update your public details.">
  <p>Dialog body content.</p>
  <template #footer>
    <bo-button size="sm" variant="secondary" @click="open = false">Cancel</bo-button>
    <bo-button size="sm" @click="open = false">Save</bo-button>
  </template>
</bo-dialog>`;

const sizesExample = `<bo-button size="sm" @click="selectedSize = 'sm'; sizedOpen = true">Small</bo-button>
<bo-button size="sm" @click="selectedSize = 'default'; sizedOpen = true">Default</bo-button>
<bo-button size="sm" @click="selectedSize = 'lg'; sizedOpen = true">Large</bo-button>
<bo-button size="sm" @click="selectedSize = 'xl'; sizedOpen = true">Extra large</bo-button>
<bo-button size="sm" @click="selectedSize = 'full'; sizedOpen = true">Full</bo-button>
<bo-dialog v-model:open="sizedOpen" :size="selectedSize" title="Dialog size">
  <p>The panel size follows the selected button.</p>
</bo-dialog>`;

const slotsExample = `<bo-dialog v-model:open="customOpen" :show-close="false">
  <template #header>
    <div class="font-semibold">Custom header</div>
  </template>
  <p>Use the slots when generated title content is not enough.</p>
  <template #footer>
    <bo-button size="sm" @click="customOpen = false">Close</bo-button>
  </template>
</bo-dialog>`;

const behaviorExample = `<bo-button size="sm" kind="outline" @click="behaviorOpen = true">Review changes</bo-button>
<bo-dialog
  v-model:open="behaviorOpen"
  title="Review changes"
  :close-on-backdrop="false"
  :close-on-escape="false"
>
  <p>Close this dialog with its explicit action.</p>
  <template #footer>
    <bo-button size="sm" @click="behaviorOpen = false">Close</bo-button>
  </template>
</bo-dialog>`;

const variantExample = `<div class="grid justify-items-start gap-3">
  <div class="flex flex-wrap gap-2">
    <bo-button size="sm" kind="outline" variant="primary" @click="infoOpen = true">Info</bo-button>
    <bo-button size="sm" kind="outline" variant="warning" @click="warningOpen = true">Warning</bo-button>
    <bo-button size="sm" kind="outline" variant="destructive" @click="variantOpen = true">Destructive</bo-button>
  </div>
  <bo-dialog v-model:open="infoOpen" variant="info" title="Information">
    <p>Your profile is visible to your team.</p>
  </bo-dialog>
  <bo-dialog v-model:open="warningOpen" variant="warning" title="Review changes">
    <p>These changes affect the next deployment.</p>
  </bo-dialog>
  <bo-dialog
    v-model:open="variantOpen"
    variant="destructive"
    role="alertdialog"
    title="Delete project?"
    description="This action cannot be undone."
  >
    <p>The project and its data will be permanently removed.</p>
    <template #footer>
      <bo-button size="sm" variant="secondary" @click="variantOpen = false; variantResult = 'Deletion cancelled'">Cancel</bo-button>
      <bo-button size="sm" variant="destructive" @click="variantOpen = false; variantResult = 'Project deletion confirmed'">Delete project</bo-button>
    </template>
  </bo-dialog>
  <span class="text-sm text-neutral-500">{{ variantResult }}</span>
</div>`;
</script>

# Dialog

`bo-dialog` is a general-purpose modal surface for focused content, forms, and actions. It teleports the panel to `body`, focuses the panel when it opens, and locks page scrolling while it is open.

Use an appropriate `variant` when the modal needs semantic visual emphasis. For a consequential confirmation, set `role="alertdialog"` and provide explicit cancel and confirm actions in the `footer` slot.

## Basic Usage

Control visibility with `v-model:open`. `title` and `description` generate the standard header and description. The default slot is the body, and `footer` is intended for actions.

<ExampleFrame :code="basicExample">
  <bo-button size="sm" @click="open = true">Open dialog</bo-button>
  <bo-dialog v-model:open="open" title="Edit profile" description="Update your public details.">
    <p>Dialog body content.</p>
    <template #footer>
      <bo-button size="sm" variant="secondary" @click="open = false">Cancel</bo-button>
      <bo-button size="sm" @click="open = false">Save</bo-button>
    </template>
  </bo-dialog>
</ExampleFrame>

## Variants and Confirmation

`variant="default"` is the neutral surface treatment. `info` uses blue emphasis for contextual information, `warning` uses amber for cautionary states, and `destructive` uses red for dangerous actions. Non-default variants add a semantic icon before the title. Variants only style the panel and title; they do not create or automatically trigger actions. Use the footer slot for decision buttons and set `role="alertdialog"` when the user must explicitly confirm or cancel a consequential action.

<ExampleFrame :code="variantExample">
  <div class="grid justify-items-start gap-3">
    <div class="flex flex-wrap gap-2">
      <bo-button size="sm" kind="outline" variant="primary" @click="infoOpen = true">Info</bo-button>
      <bo-button size="sm" kind="outline" variant="warning" @click="warningOpen = true">Warning</bo-button>
      <bo-button size="sm" kind="outline" variant="destructive" @click="variantOpen = true">Destructive</bo-button>
    </div>
    <bo-dialog v-model:open="infoOpen" variant="info" title="Information">
      <p>Your profile is visible to your team.</p>
    </bo-dialog>
    <bo-dialog v-model:open="warningOpen" variant="warning" title="Review changes">
      <p>These changes affect the next deployment.</p>
    </bo-dialog>
    <bo-dialog
      v-model:open="variantOpen"
      variant="destructive"
      role="alertdialog"
      title="Delete project?"
      description="This action cannot be undone."
    >
      <p>The project and its data will be permanently removed.</p>
      <template #footer>
        <bo-button size="sm" variant="secondary" @click="variantOpen = false; variantResult = 'Deletion cancelled'">Cancel</bo-button>
        <bo-button size="sm" variant="destructive" @click="variantOpen = false; variantResult = 'Project deletion confirmed'">Delete project</bo-button>
      </template>
    </bo-dialog>
    <span class="text-sm text-neutral-500">{{ variantResult }}</span>
  </div>
</ExampleFrame>

## Sizes

`size` supports `sm`, `default`, `lg`, `xl`, and `full`.

<ExampleFrame :code="sizesExample">
  <div class="flex flex-wrap gap-2">
    <bo-button size="sm" @click="selectedSize = 'sm'; sizedOpen = true">Small</bo-button>
    <bo-button size="sm" @click="selectedSize = 'default'; sizedOpen = true">Default</bo-button>
    <bo-button size="sm" @click="selectedSize = 'lg'; sizedOpen = true">Large</bo-button>
    <bo-button size="sm" @click="selectedSize = 'xl'; sizedOpen = true">Extra large</bo-button>
    <bo-button size="sm" @click="selectedSize = 'full'; sizedOpen = true">Full</bo-button>
  </div>
  <bo-dialog v-model:open="sizedOpen" :size="selectedSize" title="Dialog size">
    <p>The panel size follows the selected button.</p>
  </bo-dialog>
</ExampleFrame>

## Header and Footer Slots

The `header` slot replaces the generated header, including the generated `title` and `description`. The `footer` slot is omitted from the DOM when it is not provided. If you hide the close button, provide another clear way to close the dialog.

<ExampleFrame :code="slotsExample">
  <bo-button size="sm" kind="outline" @click="customOpen = true">Custom slots</bo-button>
  <bo-dialog v-model:open="customOpen" :show-close="false">
    <template #header>
      <div class="font-semibold">Custom header</div>
    </template>
    <p>Use the slots when generated title content is not enough.</p>
    <template #footer>
      <bo-button size="sm" @click="customOpen = false">Close</bo-button>
    </template>
  </bo-dialog>
</ExampleFrame>

## Closing Behavior

The close button is shown by default. Backdrop clicks and Escape close the dialog by default; set `closeOnBackdrop` or `closeOnEscape` to `false` when the user must finish an explicit flow. The close button always remains available unless `showClose` is false.

<ExampleFrame :code="behaviorExample">
  <bo-button size="sm" kind="outline" @click="behaviorOpen = true">Review changes</bo-button>
  <bo-dialog
    v-model:open="behaviorOpen"
    title="Review changes"
    :close-on-backdrop="false"
    :close-on-escape="false"
  >
    <p>Close this dialog with its explicit action.</p>
    <template #footer>
      <bo-button size="sm" @click="behaviorOpen = false">Close</bo-button>
    </template>
  </bo-dialog>
</ExampleFrame>

## Accessibility

The panel uses `role="dialog"` and `aria-modal="true"`. When `title` or `description` is provided, the component generates and references ids for them. If custom slots replace those values, use `ariaLabel`, `ariaLabelledBy`, or `ariaDescribedBy` to provide equivalent accessible references.

## Usage Guidance

- Use Dialog for focused work that is not inherently a confirmation step.
- Keep the primary action in the footer and make cancellation easy to find.
- Avoid disabling both backdrop and Escape dismissal unless the flow genuinely requires an explicit decision.
- Keep the dialog title short and ensure custom headers still provide an accessible name.

## API Reference

### Props

| Prop              | Type                                 | Default       | Description                                                      |
| ----------------- | ------------------------------------ | ------------- | ---------------------------------------------------------------- |
| `id`              | `string`                             | Autogenerated | The dialog panel id.                                             |
| `dataTestId`      | `string`                             | Autogenerated | The test id attribute.                                           |
| `open`            | `boolean`                            | `false`       | Visibility state used by `v-model:open`.                         |
| `title`           | `string`                             | -             | Text in the generated header.                                    |
| `description`     | `string`                             | -             | Text in the generated body description.                          |
| `size`            | `BoDialogSize`                       | `default`     | Panel size: `sm`, `default`, `lg`, `xl`, or `full`.              |
| `variant`         | `BoDialogVariant`                    | `default`     | Panel treatment: `default`, `info`, `warning`, or `destructive`. |
| `closeOnBackdrop` | `boolean`                            | `true`        | Closes when the backdrop is clicked.                             |
| `closeOnEscape`   | `boolean`                            | `true`        | Closes when Escape is pressed.                                   |
| `showClose`       | `boolean`                            | `true`        | Shows the header close button.                                   |
| `closeAriaLabel`  | `string`                             | `Close`       | Accessible label for the close button.                           |
| `role`            | `HTMLAttributes['role']`             | `dialog`      | ARIA role of the panel.                                          |
| `ariaLabel`       | `HTMLAttributes['aria-label']`       | -             | Accessible name override.                                        |
| `ariaLabelledBy`  | `HTMLAttributes['aria-labelledby']`  | -             | Id of an external labelling element.                             |
| `ariaDescribedBy` | `HTMLAttributes['aria-describedby']` | -             | Id of an external description element.                           |

### Events

| Event         | Payload   | Description                      |
| ------------- | --------- | -------------------------------- |
| `update:open` | `boolean` | Emitted when visibility changes. |
| `close`       | -         | Emitted when the dialog closes.  |

### Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `default` | Dialog body content.                    |
| `header`  | Replaces the generated header.          |
| `footer`  | Footer content, usually action buttons. |
