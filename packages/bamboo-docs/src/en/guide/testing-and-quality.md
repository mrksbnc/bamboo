---
title: Testing and Quality
description: Run the checks that protect behavior, accessibility, documentation, and release quality.
order: 6
---

# Testing and Quality

Use the same checks locally and in CI. A successful unit test run is necessary but not sufficient: library changes also need type-checking, production builds, documentation rendering, lint, spelling, formatting, and accessibility review.

## Local verification sequence

```bash
pnpm install
pnpm fmt:check
pnpm type-check
pnpm test
pnpm lint:spell
pnpm docs:build
pnpm build
pnpm size
```

Run the focused package checks while iterating:

```bash
pnpm --filter @mrksbnc/bamboo-vue type-check
pnpm --filter @mrksbnc/bamboo-vue exec vitest run src/components/bo-input/bo-input.test.ts
pnpm --filter @workspace/bamboo-docs build
```

## What each check protects

| Check        | Protects                                                   |
| ------------ | ---------------------------------------------------------- |
| `fmt:check`  | Stable formatting and reviewable diffs                     |
| `type-check` | Public prop, event, composable, and template contracts     |
| `test`       | Component behavior, SSR, hydration, and composable state   |
| `lint:spell` | Documentation and API naming quality                       |
| `docs:build` | Route resolution, examples, frontmatter, and SSR rendering |
| `build`      | Package bundling, CSS generation, and declaration output   |
| `size`       | Bundle and CSS budgets                                     |

## Component test matrix

For a new or changed component, cover:

- Default rendering and generated identity.
- Controlled and uncontrolled state where both are supported.
- Keyboard behavior and focus movement.
- Disabled, read-only, invalid, loading, and empty states.
- Accessible names and relationships.
- Slots and important layout variants.
- SSR rendering when the component uses browser APIs, Teleport, timers, or global listeners.

## Documentation review

Every component page should answer:

1. What problem does this component solve?
2. What is the smallest useful example?
3. What are the meaningful variants and states?
4. How does it behave on keyboard and screen readers?
5. What props, events, slots, and exposed methods are available?
6. What should not be done with it?

Examples should use real labels, accessible names, responsive wrappers, and content long enough to reveal overflow behavior.

## Audit notes

Warnings in tests are findings to review, not automatic failures. Missing provider warnings usually mean a viewport test should install its state provider. Missing required-prop warnings usually mean an SSR fixture should use the smallest valid props. Browser-only warnings should be separated from real component regressions.
