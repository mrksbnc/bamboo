#!/usr/bin/env node

/**
 * Icon Updater Script
 *
 * This script automatically updates the bo-icon.ts file when new SVG files are added
 * to the src/assets/icons/ directory. It:
 * 1. Scans the icons directory for all SVG files
 * 2. Generates the necessary imports, enum entries, and component mappings
 * 3. Updates the bo-icon.ts file with the new content
 *
 * Usage: node scripts/update-icons.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const ICONS_DIR = path.join(__dirname, '../src/assets/icons')
const BO_ICON_FILE = path.join(__dirname, '../src/components/bo-icon/bo-icon.ts')

// Helper function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('')
}

// Helper function to convert kebab-case to snake_case for enum keys
function kebabToSnakeCase(str) {
	return str.replace(/-/g, '_')
}

// Helper function to get all SVG files from the icons directory
function getSvgFiles() {
	try {
		const files = fs.readdirSync(ICONS_DIR)
		return files
			.filter((file) => file.endsWith('.svg'))
			.map((file) => file.replace('.svg', ''))
			.sort()
	} catch (error) {
		console.error('Error reading icons directory:', error.message)
		process.exit(1)
	}
}

// Generate import statements
function generateImports(iconNames) {
	return iconNames
		.map((name) => {
			const componentName = kebabToPascalCase(name) + 'Icon'
			return `import ${componentName} from '@/assets/icons/${name}.svg?component'`
		})
		.join('\n')
}

// Generate enum entries
function generateEnumEntries(iconNames) {
	return iconNames
		.filter((name) => name !== 'none') // Exclude 'none' as it's added separately
		.map((name) => {
			const enumKey = kebabToSnakeCase(name)
			return `\t${enumKey} = '${name}',`
		})
		.join('\n')
}

// Generate component mappings
function generateComponentMappings(iconNames) {
	return iconNames
		.filter((name) => name !== 'none') // Exclude 'none' as it's added separately
		.map((name) => {
			const componentName = kebabToPascalCase(name) + 'Icon'
			const keyName = name.includes('-') ? `'${name}'` : name
			return `\t${keyName}: ${componentName},`
		})
		.join('\n')
}

// Read the current bo-icon.ts file and extract the template parts
function readBoIconTemplate() {
	try {
		const content = fs.readFileSync(BO_ICON_FILE, 'utf8')

		// Extract the header comment (without imports)
		const headerMatch = content.match(
			/^(\/\/ Feather Icons - TypeScript Import File[\s\S]*?Auto-generated imports for all Feather icons from @\/assets\/icons\/\*\.svg)/m,
		)
		if (!headerMatch) {
			throw new Error('Could not find header section in bo-icon.ts')
		}

		// Extract the NoneIconComponent export
		const noneIconMatch = content.match(
			/(export const NoneIconComponent: FunctionalComponent<SVGAttributes> = \(\) => null)/,
		)
		if (!noneIconMatch) {
			throw new Error('Could not find NoneIconComponent in bo-icon.ts')
		}

		// Extract the BoIconVariant enum
		const variantEnumMatch = content.match(/(export enum BoIconVariant \{[\s\S]*?\})/)
		if (!variantEnumMatch) {
			throw new Error('Could not find BoIconVariant enum in bo-icon.ts')
		}

		// Extract the BoIconProps interface
		const propsInterfaceMatch = content.match(/(export interface BoIconProps \{[\s\S]*?\})/)
		if (!propsInterfaceMatch) {
			throw new Error('Could not find BoIconProps interface in bo-icon.ts')
		}

		return {
			header: headerMatch[1],
			noneIconComponent: noneIconMatch[1],
			variantEnum: variantEnumMatch[1],
			propsInterface: propsInterfaceMatch[1],
		}
	} catch (error) {
		console.error('Error reading bo-icon.ts template:', error.message)
		process.exit(1)
	}
}

// Generate the complete bo-icon.ts content
function generateBoIconContent(iconNames) {
	const imports = generateImports(iconNames)
	const enumEntries = generateEnumEntries(iconNames)
	const componentMappings = generateComponentMappings(iconNames)

	return `// TypeScript Import File
// Auto-generated imports for all SVG icons from @/assets/icons/*.svg

${imports}
import type { FunctionalComponent, SVGAttributes } from 'vue'

export const NoneIconComponent: FunctionalComponent<SVGAttributes> = () => null

export enum Icon {
${enumEntries}
	none = 'none',
}

export const IconToComponentConstruct: Record<Icon, FunctionalComponent<SVGAttributes>> = {
${componentMappings}
	none: NoneIconComponent,
} as const

export enum BoIconVariant {
	/** currentColor */
	default = 'default',
	/** --blue-500 */
	primary = 'primary',
	/** --neutral-500 */
	secondary = 'secondary',
	/** --green-500 */
	success = 'success',
	/** --orange-500 */
	warning = 'warning',
	/** --red-500 */
	danger = 'danger',
	/** --neutral-100 */
	light = 'light',
	/** --neutral-950 */
	dark = 'dark',
}

export interface BoIconProps {
	/** The unique ID for the icon */
	id?: string
	/** The data-test-id of the icon */
	dataTestId?: string
	/** The icon to display */
	icon: Icon
	/** The size of the icon */
	size?: number
	/** The color of the icon defined by the enum BoIconColor */
	variant?: BoIconVariant
	/** The color of the icon */
	customColor?: string
	/** Custom css class passed to the root element */
	customCssClass?: string
	/** cursor type of the element. This must be a valid cursor value. */
	cursor?: string
	/** The accessible title of the icon. */
	title?: string
	/** The accessibility role of the icon. */
	role?: string
	/**
	 * Whether the icon is decorative which means that the icon is not
	 * a part of the UI and is only used to convey information.
	 */
	decorative?: boolean
}
`
}

// Main function
function updateIcons() {
	console.log('🔍 Scanning for SVG files...')

	const iconNames = getSvgFiles()
	console.log(`📁 Found ${iconNames.length} SVG files`)

	if (iconNames.length === 0) {
		console.log('⚠️  No SVG files found in icons directory')
		return
	}

	console.log('🔄 Generating bo-icon.ts content...')

	const newContent = generateBoIconContent(iconNames)

	console.log('💾 Writing updated bo-icon.ts...')

	try {
		fs.writeFileSync(BO_ICON_FILE, newContent, 'utf8')
		console.log('✅ Successfully updated bo-icon.ts')
		console.log(`📊 Updated with ${iconNames.length} icons`)

		// Show some statistics
		const newIcons = iconNames.filter((name) => name !== 'none')
		if (newIcons.length > 0) {
			console.log('🎨 Icons included:')
			newIcons.slice(0, 10).forEach((name) => console.log(`   - ${name}`))
			if (newIcons.length > 10) {
				console.log(`   ... and ${newIcons.length - 10} more`)
			}
		}
	} catch (error) {
		console.error(`Error whilest writing bo-icon.ts: ${error.message}`)
		throw error
	}
}

function generate() {
	try {
		updateIcons()
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

generate()
