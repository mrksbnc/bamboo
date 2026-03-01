# VitePress Sidebar Generator

Automatic sidebar generation for VitePress based on file structure.

## Usage

In your locale file (e.g., `.vitepress/locales/en.ts`):

```typescript
import { generateSidebar } from '../internal/sidebar';

function sidebar(): DefaultTheme.SidebarItem[] {
	return generateSidebar({
		locale: 'en',
		srcDir: 'src',
		collapsed: true,
		ignoreList: [],
		useFrontmatterTitle: true,
	});
}

export const en: LocaleSpecificConfig<DefaultTheme.Config> = {
	themeConfig: {
		sidebar: {
			'/en/': sidebar(),
		},
	},
};
```

## Options

- `locale` (required): The locale code (e.g., 'en', 'es', 'fr')
- `srcDir` (optional): Source directory, defaults to 'src'
- `collapsed` (optional): Whether sections are collapsed by default, defaults to true
- `ignoreList` (optional): Array of file/folder names to ignore
- `useFrontmatterTitle` (optional): Extract titles from frontmatter/H1, defaults to true

## File Structure

```
src/
  en/
    about/
      index.md          → Creates "About" section with link
      team.md           → Creates "Team" item under "About"
    product/
      index.md          → Creates "Product" section with link
      features/
        index.md        → Creates "Features" subsection
        pricing.md      → Creates "Pricing" item
```

## Features

- Automatically creates collapsible sections for directories
- Links to `index.md` files when present
- Extracts titles from frontmatter `title:` field or first H1
- Formats folder/file names (removes prefixes, capitalizes)
- Supports nested directory structures
- Ignores hidden files (starting with `.` or `_`)
- Sorts directories before files, alphabetically
