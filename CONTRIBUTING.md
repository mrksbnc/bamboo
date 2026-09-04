# Contributing to Bamboo

Thanks for helping out. Bamboo is a manifest-driven Vue 3 component library:
every component reads its styles and defaults from a typed manifest in
`@workspace/bamboo-core`, so a change in one place updates every consumer.

## Setup

```sh
corepack enable
pnpm install
pnpm build        # builds core + vue + docs
```

Node >= 18 and pnpm >= 10 are required (see `.nvmrc`).

## Repository layout

| Path                   | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `packages/bamboo-core` | Definitions (`Bo*Props`), manifests (`*_MANIFEST`), shared style maps |
| `packages/bamboo-vue`  | Vue SFCs consuming the manifests                                      |
| `packages/bamboo-docs` | VitePress documentation                                               |

## Adding a component

1. Definition: `packages/bamboo-core/src/definitions/bo-<name>.ts` — `Bo*Props`
   interface (JSDoc on every prop), exported `Bo*StyleManifest` interface,
   `type <Name>Manifest = ComponentManifest<...>`.
2. Manifest: `packages/bamboo-core/src/manifests/<name>.manifest.ts` —
   `export const <NAME>_MANIFEST = { meta, styles, defaults } as const satisfies <Name>Manifest;`
   Every Tailwind class string is prefixed with a `/*tw*/` comment. Shared
   variant colors come from `VARIANT` in `manifests/shared.ts` — never
   duplicate a variant color inline.
3. Component: `packages/bamboo-vue/src/components/bo-<name>/bo-<name>.vue` +
   `index.ts` + `bo-<name>.test.ts`. Methods are `function` declarations,
   template refs use `useTemplateRef`, two-way state uses `defineModel`.
4. Exports: add to `bamboo-core` `definitions/index.ts`, `manifests/index.ts`,
   root `index.ts`, and to `bamboo-vue` `components/index.ts`, `index.ts`,
   `plugin.ts`.
5. Docs page: `packages/bamboo-docs/src/en/components/<name>.md`.

## Quality gates

```sh
pnpm type-check && pnpm lint && pnpm test && pnpm build && pnpm fmt:check
```

- Tests run under vitest with coverage thresholds (see `vitest.config.ts`).
- `pnpm test` includes an SSR smoke suite — every component must render
  server-side.
- Manifest tests forbid semantic token classes, so the concrete color system
  cannot silently regress.
- cspell runs on all sources — add new words to `config/cspell/` dictionaries.

## Commits

Use conventional commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
Husky runs the lint/format hooks before commit. Releases are automated with
Release Please — the changelog is generated, never hand-edited.

## Breaking changes

Deprecate before removing: keep the old prop working, log a dev-mode warning
(`import.meta.env.DEV`), and remove it in the next major version.
