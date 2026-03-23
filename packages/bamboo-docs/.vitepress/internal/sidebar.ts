import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { DefaultTheme } from 'vitepress';

interface SectionSortConfig {
	[sectionPath: string]: {
		sortBy?: 'name' | 'created_at' | 'order';
		sortOrder?: 'asc' | 'desc';
	};
}

interface SidebarOptions {
	locale: string;
	srcDir?: string;
	rootPath?: string;
	collapsed?: boolean;
	ignoreList?: string[];
	useFrontmatterTitle?: boolean;
	sortBy?: 'name' | 'created_at' | 'order';
	sortOrder?: 'asc' | 'desc';
	sectionSort?: SectionSortConfig;
	wrapInGroup?: boolean;
}

interface FrontmatterData {
	title?: string;
	order?: number;
	created_at?: string;
}

interface FileInfo {
	name: string;
	path: string;
	isDirectory: boolean;
	hasIndexMdFile: boolean;
	frontmatter?: FrontmatterData;
}

function extractFrontmatter(filePath: string): FrontmatterData | null {
	if (!existsSync(filePath)) {
		return null;
	}

	try {
		const content = readFileSync(filePath, 'utf-8');
		const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

		if (!frontmatterMatch) {
			return null;
		}

		const frontmatterText = frontmatterMatch[1];
		const data: FrontmatterData = {};

		// Extract title
		const titleMatch = frontmatterText.match(/^title:\s*(.+)$/m);
		if (titleMatch) {
			data.title = titleMatch[1].replace(/^['"]|['"]$/g, '').trim();
		}

		// Extract order
		const orderMatch = frontmatterText.match(/^order:\s*(\d+)$/m);
		if (orderMatch) {
			data.order = Number.parseInt(orderMatch[1], 10);
		}

		// Extract created_at
		const createdAtMatch = frontmatterText.match(/^created_at:\s*(.+)$/m);
		if (createdAtMatch) {
			data.created_at = createdAtMatch[1].replace(/^['"]|['"]$/g, '').trim();
		}

		return data;
	} catch (error) {
		console.error(`Error parsing frontmatter for ${filePath}:`, error);
		return null;
	}
}

function extractTitle(filePath: string): string | null {
	const frontmatter = extractFrontmatter(filePath);

	if (frontmatter?.title) {
		return frontmatter.title;
	}

	// Fallback to H1 if no frontmatter title
	try {
		const content = readFileSync(filePath, 'utf-8');
		const h1Match = content.match(/^#\s+(.+)$/m);

		if (h1Match) {
			return h1Match[1].trim();
		}
	} catch (error) {
		console.error(`Error extracting title from ${filePath}:`, error);
	}

	return null;
}

function formatName(name: string): string {
	return (
		name
			// Remove number prefixes like "01-"
			.replace(/^\d+-/, '')
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (char) => char.toUpperCase())
	);
}

function getFileInfo(dirPath: string, ignoreList: string[]): FileInfo[] {
	const items: string[] = readdirSync(dirPath);

	const filteredItems = items.filter((item) => {
		return ignoreList.includes(item) || item.startsWith('.') || item.startsWith('_') ? false : true;
	});

	const convertedFileItems: FileInfo[] = filteredItems.map((item) => {
		const fullPath: string = join(dirPath, item);
		const isDirectory: boolean = statSync(fullPath).isDirectory();
		const hasIndexMdFile: boolean =
			isDirectory &&
			(existsSync(join(fullPath, 'index.md')) || existsSync(join(fullPath, 'index.MD')));

		let frontmatter: FrontmatterData | undefined;

		// Extract frontmatter for markdown files
		if (!isDirectory && item.endsWith('.md')) {
			frontmatter = extractFrontmatter(fullPath) ?? undefined;
		} else if (hasIndexMdFile) {
			const indexPath = join(fullPath, 'index.md');
			frontmatter = extractFrontmatter(indexPath) ?? undefined;
		}

		const fileInfo: FileInfo = {
			name: item,
			isDirectory,
			path: fullPath,
			hasIndexMdFile,
			frontmatter,
		};

		return fileInfo;
	});

	const sortedFileInfo: FileInfo[] = convertedFileItems.sort((a, b) => {
		if (a.isDirectory && !b.isDirectory) {
			return -1;
		}

		if (!a.isDirectory && b.isDirectory) {
			return 1;
		}

		return a.name.localeCompare(b.name);
	});

	return sortedFileInfo;
}

function sortFileInfos(
	fileInfos: FileInfo[],
	sortBy?: 'name' | 'created_at' | 'order',
	sortOrder: 'asc' | 'desc' = 'asc',
): FileInfo[] {
	if (!sortBy || sortBy === 'name') {
		return fileInfos;
	}

	const sorted = [...fileInfos].sort((a, b) => {
		// Always keep directories first
		if (a.isDirectory && !b.isDirectory) {
			return -1;
		}
		if (!a.isDirectory && b.isDirectory) {
			return 1;
		}

		let comparison = 0;

		if (sortBy === 'order') {
			const orderA = a.frontmatter?.order ?? Number.MAX_SAFE_INTEGER;
			const orderB = b.frontmatter?.order ?? Number.MAX_SAFE_INTEGER;
			comparison = orderA - orderB;
		} else if (sortBy === 'created_at') {
			const dateA = a.frontmatter?.created_at ? new Date(a.frontmatter.created_at).getTime() : 0;
			const dateB = b.frontmatter?.created_at ? new Date(b.frontmatter.created_at).getTime() : 0;
			comparison = dateA - dateB; // Ascending by date; sortOrder controls final direction
		}

		// Fallback to name if values are equal
		if (comparison === 0) {
			comparison = a.name.localeCompare(b.name);
		}

		return sortOrder === 'desc' ? -comparison : comparison;
	});

	return sorted;
}

function buildSidebarItems(
	dirPath: string,
	basePath: string,
	options: SidebarOptions,
): DefaultTheme.SidebarItem[] {
	const items: DefaultTheme.SidebarItem[] = [];
	let fileInfos = getFileInfo(dirPath, options.ignoreList ?? []);

	// Determine which sorting to apply
	const relativePath = dirPath.replace(basePath, '').replace(/\\/g, '/');
	const sectionConfig = options.sectionSort?.[relativePath];

	const sortBy = sectionConfig?.sortBy ?? options.sortBy;
	const sortOrder = sectionConfig?.sortOrder ?? options.sortOrder;

	// Apply sorting if specified
	if (sortBy) {
		fileInfos = sortFileInfos(fileInfos, sortBy, sortOrder);
	}

	for (const info of fileInfos) {
		if (info.isDirectory) {
			const relativePath = info.path.replace(basePath, '').replace(/\\/g, '/');
			const indexPath = join(info.path, 'index.md');
			const hasIndexMdFile = existsSync(indexPath);

			const text =
				hasIndexMdFile && options.useFrontmatterTitle
					? extractTitle(indexPath)
					: formatName(info.name);

			if (!text) {
				continue;
			}

			const childItems = buildSidebarItems(info.path, basePath, options);

			// If directory only has index.md and no child items, add as direct link
			if (hasIndexMdFile && childItems.length === 0) {
				items.push({
					text,
					link: `${relativePath}/`,
				});
				continue;
			}

			// Otherwise, create a collapsible group
			const sidebarItem: DefaultTheme.SidebarItem = {
				text,
				collapsed: options.collapsed ?? false,
			};

			if (hasIndexMdFile) {
				sidebarItem.link = `${relativePath}/`;
			}

			if (childItems.length > 0) {
				sidebarItem.items = childItems;
			}

			if (hasIndexMdFile || childItems.length > 0) {
				items.push(sidebarItem);
			}
		} else if (info.name.endsWith('.md') && info.name.toLowerCase() !== 'index.md') {
			// Handle markdown file (skip index.md as it's handled by parent)
			const fileName = info.name.replace(/\.md$/i, '');
			const relativePath = info.path
				.replace(basePath, '')
				.replace(/\\/g, '/')
				.replace(/\.md$/i, '');

			const text =
				(options.useFrontmatterTitle ? extractTitle(info.path) : formatName(fileName)) ??
				formatName(fileName);

			if (!text) {
				continue;
			}

			items.push({
				text,
				link: relativePath,
			});
		}
	}

	return items;
}

export function generateSidebar(options: SidebarOptions): DefaultTheme.SidebarItem[] {
	const { locale, srcDir = 'src', rootPath, wrapInGroup = false } = options;
	const localeDir = join(process.cwd(), srcDir, locale);

	if (!existsSync(localeDir)) {
		console.warn(`Locale directory not found: ${localeDir}`);
		return [];
	}

	// If rootPath is specified, start from that subdirectory
	const startDir = rootPath ? join(localeDir, rootPath) : localeDir;

	if (!existsSync(startDir)) {
		console.warn(`Root path directory not found: ${startDir}`);
		return [];
	}

	const items = buildSidebarItems(startDir, localeDir, options);

	// If wrapInGroup is true and rootPath is specified, wrap items in a parent group
	if (wrapInGroup && rootPath) {
		const indexPath = join(startDir, 'index.md');
		const hasIndexMdFile = existsSync(indexPath);

		const text =
			hasIndexMdFile && options.useFrontmatterTitle
				? extractTitle(indexPath)
				: formatName(rootPath.split('/').pop() || rootPath);

		if (!text) {
			return items;
		}

		const sidebarItem: DefaultTheme.SidebarItem = {
			text,
			collapsed: options.collapsed ?? false,
		};

		if (hasIndexMdFile) {
			sidebarItem.link = `/${rootPath}/`;
		}

		if (items.length > 0) {
			sidebarItem.items = items;
		}

		return [sidebarItem];
	}

	return items;
}
