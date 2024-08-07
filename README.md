# Bamboo

[![npm version](https://badge.fury.io/js/@mrksbnc%2Fbamboo.svg)](https://badge.fury.io/js/@mrksbnc%2Fbamboo)
[![Storybook to GitHub Pages](https://github.com/mrksbnc/bamboo/actions/workflows/deploy.yml/badge.svg)](https://github.com/mrksbnc/bamboo/actions/workflows/deploy.yml)
[![Test](https://github.com/mrksbnc/bamboo/actions/workflows/test.yml/badge.svg)](https://github.com/mrksbnc/bamboo/actions/workflows/test.yml)

Lightweight and flexible (hence the name) UI Library built with [Vite](https://vitejs.dev/) and [Vue 3](https://vuejs.org/). The documentation is created with [Storybook](https://storybook.js.org/).

### Project setup

You need to have node and npm installed on your machine as a prerequisite. You can download and install them from [here](https://nodejs.org/en/).

### Install dependencies

To install the dependencies, run the following command:

```bash
npm install
```

### Run documentation

To start the development server, run the following command:

```bash
npm run storybook
```

This will start the Storybook server and open the browser at [http://localhost:6006](http://localhost:6006).
Here you can see the documentation for the components and play around with them.

### Build for production

To build the components for production, run the following command:

```bash
npm run build
```

This will build the components and generate the static files in the `dist` folder.

### Build storybook for production

To build the Storybook documentation for production, run the following command:

```bash
npm run build-storybook
```

This will build the Storybook documentation and generate the static files in the `static` folder.
GitHub Pages uses the directory to host the documentation.

### Run your unit tests

The project uses [Vitest](https://vitest.dev) for unit and snapshot testing. To run the tests, run the following command:

```bash
npm run test
```

### Lints and fixes files

The project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting. To run the linter, run the following command:

```bash
npm run lint
```

### License

[MIT](LICENSE)
