---
title: API Reference
description: Understand Bamboo's exports, shared composables, and type conventions.
order: 1
---

# API Reference

Bamboo's public Vue entry point exports components, application plugins, and composables. Individual component pages remain the source of truth for props, events, slots, and examples; this page explains how the pieces fit together.

## Package exports

```ts
import { BambooVue, BoButton, BoInput, BoToastViewport, useToast } from '@mrksbnc/bamboo-vue';
```

The package also exports component types through its component barrel. Prefer importing the component and its public types from the same package rather than reaching into `src` paths.

## Components

All exported component names use the `Bo` prefix. Compound components expose their pieces separately:

```ts
import {
	BoAccordion,
	BoAccordionItem,
	BoButtonGroup,
	BoButtonGroupItem,
	BoTabs,
	BoTabsContent,
	BoTabsList,
	BoTabsTrigger,
} from '@mrksbnc/bamboo-vue';
```

Use the component page linked from [Components](../components/) for the interaction contract. Compound children should remain inside their parent so keyboard and ARIA state can be coordinated.

## Application plugin

`BambooVue` registers exported components globally and provides shared state for toasts, drawers, and modals.

```ts
import { BambooVue } from '@mrksbnc/bamboo-vue';

app.use(BambooVue);
```

Global registration is convenient for a product shell. Direct imports are easier to trace in a library or a feature package.

## Composables

| Composable         | Use it for                                          | Shared state                                     |
| ------------------ | --------------------------------------------------- | ------------------------------------------------ |
| `useToast`         | Queued feedback notifications                       | `createToastState` via plugin or fallback state  |
| `useModal`         | Imperative modal messages                           | `createModalState` via plugin or fallback state  |
| `useDrawer`        | Imperative drawer messages                          | `createDrawerState` via plugin or fallback state |
| `useAlert`         | Alert messages positioned in the app                | Local/shared alert state                         |
| `useForm`          | Form-level values, validation, and submission state | Form instance                                    |
| `useFormField`     | Field-level descriptions and errors                 | Form field instance                              |
| `useFileSelection` | Normalize file input and dropzone selection         | Selection instance                               |

The `create*State` functions are useful when an application has more than one Vue app or needs to provide an isolated state container in tests.

## Identity and accessibility props

Components that render a meaningful DOM identity accept `id` and `dataTestId`. Components generate stable instance IDs when no explicit ID is supplied. Pass an explicit ID when another element must reference it, such as a custom label or description.

Common accessibility props use Vue-friendly camelCase names:

```vue
<bo-input
	id="billing-email"
	aria-label="Billing email"
	aria-describedby="billing-email-help"
	autocomplete="email"
/>
```

The rendered attributes use their native kebab-case names. See [Accessibility](../guide/accessibility) for naming and relationship rules.

## CSS entry point

```ts
import '@mrksbnc/bamboo-vue/lib.css';
```

The entry point includes Tailwind, Bamboo's dark-mode variant, shared motion behavior, and component manifests. Import it once at the application boundary.

## Core package

`@workspace/bamboo-core` is an internal workspace package used by Bamboo's Vue implementation. It contains definitions and manifests rather than a second application-facing component API. If you are contributing a component, update its definition, manifest, Vue implementation, tests, and docs together.

## Versioning expectations

Treat prop and event changes as API changes. Add a documentation example for a new supported behavior, a regression test for behavior that can be asserted, and a release note when the change is user-visible. See [Testing and Quality](../guide/testing-and-quality) for the local verification sequence.
