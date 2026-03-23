# Bamboo Core

## What is bamboo-core?

`bamboo-core` the shared module containing the shared component manifests, tailwind definitions, and other shared utilities.

The package is **NOT** distributed via npm. It is meant to be used as an internal dependency of other packages in the bamboo monorepo.

## Package structure

The package is structured as follows:

All the necessary values and types meant to be used by the package consumers should be re-exported from the `index.ts` file in the package where the library is used.
