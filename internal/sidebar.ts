import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { DefaultTheme } from 'vitepress';

interface SidebarOptions {
	locale: string;
	srcDir?: string;
	collapsed?: boolean;
	ignoreList?: string[];
	useFrontmatterTitle?: boolean;
}

interface FileInfo {
	name: string;
	path: string;
	isDirectory: boolean;
	hasIndex: boolean;
}

/**
 * Extract title from markdown frontmatter or first H1
 */
function extractTitle(filePath: string): string | null {
	if (!existsSync(filePath)) return null;

	try {
		const content = readFileSync(filePath, 'utf-8');

		// Try frontmatter title first
		const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
		if (frontmatterMatch) {
			const titleMatch = frontmatterMatch[1].match(/title:\s*['"]?([^'">\n]+)['"]?/);
			if (titleMatch) return titleMatch[1].trim();
		}

		// Fallback to first H1
		const h1Match = content.match(/^#\s+(.+)$/m);
		if (h1Match) return h1Match[1].trim();

		return null;
	} catch {
		return null;
	}
}

/**
 * Format folder/file name to readable text
 */
function formatName(name: string): string {
	return name
		.replace(/^\d+-/, '') // Remove number prefixes like "01-"
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Get files and directories in a path
 */
function getFileInfo(dirPath: string, ignoreList: string[]): FileInfo[] {
	const items = readdirSync(dirPath);

	return items
		.filter((item) => {
			if (ignoreList.includes(item)) return false;
			if (item.startsWith('.')) return false;
			if (item.startsWith('_')) return false;
			return true;
		})
		.map((item) => {
			const fullPath = join(dirPath, item);
			const isDirectory = statSync(fullPath).isDirectory();
			const hasIndex =
				isDirectory &&
				(existsSync(join(fullPath, 'index.md')) || existsSync(join(fullPath, 'index.MD')));

			return {
				name: item,
				path: fullPath,
				isDirectory,
				hasIndex,
			};
		})
		.sort((a, b) => {
			// Directories first, then files
			if (a.isDirectory && !b.isDirectory) return -1;
			if (!a.isDirectory && b.isDirectory) return 1;
			return a.name.localeCompare(b.name);
		});
}

/**
 * Build sidebar items recursively
 */
function buildSidebarItems(
	dirPath: string,
	basePath: string,
	options: SidebarOptions,
): DefaultTheme.SidebarItem[] {
	const { locale, collapsed = true, ignoreList = [], useFrontmatterTitle = true } = options;
	const items: DefaultTheme.SidebarItem[] = [];
	const fileInfos = getFileInfo(dirPath, ignoreList);

	for (const info of fileInfos) {
		if (info.isDirectory) {
			// Handle directory
			const relativePath = info.path.replace(basePath, '').replace(/\\/g, '/');
			const indexPath = join(info.path, 'index.md');
			const hasIndex = existsSync(indexPath);

			// Get title from index.md or format folder name
			let text = formatName(info.name);
			if (hasIndex && useFrontmatterTitle) {
				const title = extractTitle(indexPath);
				if (title) text = title;
			}

			// Build child items
			const childItems = buildSidebarItems(info.path, basePath, options);

			// Create sidebar item
			const sidebarItem: DefaultTheme.SidebarItem = {
				text,
				collapsed,
			};

			// Add link if index.md exists
			if (hasIndex) {
				sidebarItem.link = `/${locale}${relativePath}/`;
			}

			// Add child items if any
			if (childItems.length > 0) {
				sidebarItem.items = childItems;
			}

			// Only add if has index or children
			if (hasIndex || childItems.length > 0) {
				items.push(sidebarItem);
			}
		} else if (info.name.endsWith('.md') && info.name.toLowerCase() !== 'index.md') {
			// Handle markdown file (skip index.md as it's handled by parent)
			const fileName = info.name.replace(/\.md$/i, '');
			const relativePath = info.path
				.replace(basePath, '')
				.replace(/\\/g, '/')
				.replace(/\.md$/i, '');

			let text = formatName(fileName);
			if (useFrontmatterTitle) {
				const title = extractTitle(info.path);
				if (title) text = title;
			}

			items.push({
				text,
				link: `/${locale}${relativePath}`,
			});
		}
	}

	return items;
}

/**
 * Generate sidebar configuration for a locale
 */
export function generateSidebar(options: SidebarOptions): DefaultTheme.SidebarItem[] {
	const { locale, srcDir = 'src' } = options;
	const localeDir = join(process.cwd(), srcDir, locale);

	if (!existsSync(localeDir)) {
		console.warn(`Locale directory not found: ${localeDir}`);
		return [];
	}

	return buildSidebarItems(localeDir, localeDir, options);
}
