# Bamboo

Main monorepo for the Bamboo project.

## Packages

| Package                                           | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- |
| [`@workspace/bamboo-core`](/packages/bamboo-core) | Shared constants, definitions and style manifests |
| [`@mrksbnc/bamboo-docs`](/packages/bamboo-docs)   | Documentation site for the bamboo packages        |
| [`@mrksbnc/bamboo-vue`](/packages/bamboo-vue)     | Vue components for the bamboo project             |

## Release Process

Releases are automated with [semantic-release](https://semantic-release.gitbook.io/semantic-release/) on every push to `main`. The Vue library is published to GitHub Packages, and the documentation site is deployed to GitHub Pages.
