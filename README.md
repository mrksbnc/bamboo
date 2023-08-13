# Vue Component Library

Reusable Component collection for Vue.js projects built with [Vite](https://vitejs.dev/). The components are using [TailwindCSS](https://tailwindcss.com/) for styling and the documentation is built with [Storybook](https://storybook.js.org/).

The project uses the following:

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Pnpm](https://pnpm.io/)

## Project setup

As a prerequisite, you need to node and npm installed on your machine. You can download and install them from [here](https://nodejs.org/en/).
Ideally, you should use [pnpm](https://pnpm.io/) as your package manager. You can install it by running the following command:

```bash
npm install -g pnpm
```

Once you have node and pnpm installed, you can install the project dependencies by running the following command:

```bash
pnpm install
```

With npm, you can run the following command:

```bash
npm install
```

### Compiles and hot-reloads for development

To start the development server, run the following command:

```bash
pnpm storybook
```

With npm, you can run the following command:

```bash
npm run storybook
```

This will start the Storybook server and open the browser at [http://localhost:6006](http://localhost:6006).
Here you can see the documentation for the components and play around with them.

### Compiles and minifies for production

To build the components for production, run the following command:

```bash
pnpm build
```

With npm, you can run the following command:

```bash
npm run build
```

This will build the components and generate the static files in the `dist` folder.

### Run your unit tests

The project uses [Vitest](https://vitest.dev) for unit and snapshot testing. To run the tests, run the following command:

```bash
pnpm test
```

With npm, you can run the following command:

```bash
npm run test
```

### Lints and fixes files

The project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting. To run the linter, run the following command:

```bash
pnpm lint
```

With npm, you can run the following command:

```bash
npm run lint
```

## License

[MIT](LICENSE)
