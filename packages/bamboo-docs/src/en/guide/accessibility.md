---
title: Accessibility
description: Keyboard, focus, naming, form, motion, and live-region guidance for Bamboo interfaces.
order: 4
---

# Accessibility

Bamboo components provide accessible defaults, but no component can infer the meaning of application content. The final accessibility contract depends on names, labels, relationships, focus order, and the way components are composed.

## The minimum bar

- Every interactive control has a visible label or an explicit accessible name.
- Every form field exposes its description and error through the native control relationship.
- Every dialog, drawer, menu, tablist, and composite widget has a meaningful label.
- Every keyboard path has a visible focus indicator and no keyboard trap.
- Status changes are announced without stealing focus.
- Color is never the only state cue.
- Motion respects `prefers-reduced-motion`.

## Names and descriptions

Prefer visible content as the accessible name. Use `ariaLabel` only for icon-only controls or when the visible text is not a sufficient name.

```vue
<bo-button prefix-icon="download" aria-label="Download report" />
<bo-input
	label="Workspace name"
	description="Use a name your team will recognize."
	v-model="workspaceName"
/>
```

Do not add an `aria-label` that contradicts visible text. If a control has a visible label outside the component, connect it with `ariaLabelledBy` or a native `for`/`id` relationship.

## Form errors

Keep the value in the field after validation, identify the failed field, and announce the error through the description relationship.

```vue
<bo-input
	id="password"
	v-model="password"
	label="Password"
	type="password"
	autocomplete="current-password"
	:error="passwordError"
	aria-describedby="password-requirements"
/>
<p id="password-requirements" class="text-sm text-neutral-500">
  Use at least 12 characters.
</p>
```

Use `aria-invalid` only when the value is currently invalid. Do not mark an untouched field invalid merely because it is empty if the user has not attempted the action.

## Keyboard behavior

| Pattern                   | Expected keyboard behavior                                                      |
| ------------------------- | ------------------------------------------------------------------------------- |
| Button, toggle, switch    | `Enter` and `Space` activate; focus remains predictable                         |
| Menu and dropdown         | Arrow keys move within items; `Escape` closes; `Enter` selects                  |
| Tabs                      | Arrow keys move tabs; `Home`/`End` move to the first/last tab when supported    |
| Dialog and drawer         | `Escape` closes when allowed; focus moves into the surface and returns on close |
| Slider                    | Arrow keys adjust; `Home`/`End` reach limits when supported                     |
| Accordion and collapsible | `Enter`/`Space` toggle the trigger                                              |
| Scroll region             | Has an accessible name and can receive focus when keyboard scrolling is needed  |

Use native elements for custom application controls whenever possible. If a component exposes a keyboard model, do not wrap it in another element that intercepts the same keys.

## Focus management

Focus should tell the user where the next action will occur.

- Keep the default focus ring unless the replacement is at least as visible.
- Do not remove outlines with `outline-none` without a replacement focus style.
- Return focus to the trigger after a modal, drawer, menu, or popover closes.
- When content is added after an action, announce it or move focus only when the user needs to act immediately.
- Use `bo-visually-hidden` for supplemental screen-reader text, not for required visual instructions.

## Dialogs, drawers, menus, and popovers

Give every overlay a name. A visible title is preferable; otherwise provide `ariaLabel` or `ariaLabelledBy`. Keep destructive actions explicit and do not rely on color alone.

```vue
<bo-dialog
	v-model:open="open"
	title="Delete project"
	description="This permanently removes the project and its data."
>
  <template #footer>
    <bo-button kind="ghost" @click="open = false">Cancel</bo-button>
    <bo-button variant="destructive" @click="removeProject">Delete project</bo-button>
  </template>
</bo-dialog>
```

Menus contain actions. If the content is explanatory or form-like, use a dialog, popover, or drawer instead of forcing it into menu semantics.

## Live regions and status

Use a toast or alert for a result that is not the next required action. Use an inline error or dialog when the user must fix something before continuing.

```vue
<bo-alert variant="success" title="Profile saved">
  Your changes are now visible to your team.
</bo-alert>
```

Keep status messages concise. Avoid repeatedly announcing progress that changes many times per second. For long operations, expose a progress value and a stable label.

## Images, icons, and charts

- Decorative icons use `aria-hidden="true"` or the component's decorative option.
- Informative icons need a visible label or accessible name.
- Images need useful alternative text unless adjacent text already provides the same information.
- Charts need a concise accessible label and a nearby text summary of important values.
- Do not put essential meaning only in an SVG color or visual legend.

## Motion and reduced motion

Bamboo's CSS entry point reduces animation and transition durations for users who request reduced motion. Application code should also avoid motion that conveys required information only through movement.

```css
@media (prefers-reduced-motion: reduce) {
	.app-transition {
		transition: none;
	}
}
```

## Accessibility audit workflow

1. Run the full test suite and type-check.
2. Run automated rules such as axe against representative states, not just the initial page.
3. Navigate the page with only a keyboard.
4. Test at 200% zoom and a narrow viewport.
5. Test light and dark themes, reduced motion, and a screen reader when available.
6. Check dynamic states: validation, loading, empty, disabled, open, expanded, selected, and error.

Automated checks catch structural problems; they do not verify whether labels, instructions, and focus movement make sense to a person.

## Component audit map

| Need                     | Components to review                                        |
| ------------------------ | ----------------------------------------------------------- |
| Names and descriptions   | Input, textarea, select, tags input, slider, progress       |
| Keyboard composites      | Tabs, menu, dropdown, context menu, accordion, toggle group |
| Focus traps and return   | Dialog, modal, drawer, popover, hover card                  |
| Status and announcements | Alert, toast, loading indicators, skeleton                  |
| Data interpretation      | Table, chart, avatar, icon                                  |
