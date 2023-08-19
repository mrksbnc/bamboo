# Vue Component Library

![Version](https://img.shields.io/github/package-json/v/mrksbnc/complib)

A reusable Component collection built with [Vite](https://vitejs.dev/) and [Vue 3](https://vuejs.org/). The components are using [TailwindCSS](https://tailwindcss.com/) for styling and the documentation is built with [Storybook](https://storybook.js.org/).

## Project setup

As a prerequisite, you need to have node and npm installed on your machine. You can download and install them from [here](https://nodejs.org/en/).

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

This will build the Storybook documentation and generate the static files in the `docs` folder.
The directory is used by GitHub Pages to host the documentation.

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

## License

[MIT](LICENSE)
