<script setup>
import { BoColor } from '@/shared/bo-color';
import { BoBadge, BoBadgeVariant } from '@/components/badge';
</script>

# Color System

The color system provides a comprehensive set of predefined colors aligned with the Tailwind CSS color palette. It enables consistent color usage throughout the application and ensures accessibility and visual harmony.

## Basic Usage

Colors are defined in the `BoColor` enum and can be imported and used in your components:

```typescript
import { BoColor } from '@/shared/bo-color';

// Using a specific color
const primaryColor = BoColor.blue_600;
const errorColor = BoColor.red_600;
```

## Component Color Variants

Most components use semantic color variants rather than direct color values. These variants provide consistent theming across the application:

### Standard Variants

All major components support these semantic color variants:

- **Primary** (`primary`) - Main brand color (blue)
- **Secondary** (`secondary`) - Neutral/gray colors
- **Danger** (`danger`) - Error states (red)
- **Warning** (`warning`) - Warning states (yellow)
- **Success** (`success`) - Success states (green)
- **Light** (`light`) - Light theme color (white)
- **Dark** (`dark`) - Dark theme color (black)

<div class="flex gap-2 items-center my-4">
	<bo-badge :variant="BoBadgeVariant.primary" label="Primary" />
	<bo-badge :variant="BoBadgeVariant.secondary" label="Secondary" />
	<bo-badge :variant="BoBadgeVariant.danger" label="Danger" />
	<bo-badge :variant="BoBadgeVariant.warning" label="Warning" />
	<bo-badge :variant="BoBadgeVariant.success" label="Success" />
	<bo-badge :variant="BoBadgeVariant.light" label="Light" />
	<bo-badge :variant="BoBadgeVariant.dark" label="Dark" />
</div>

```vue
<bo-badge :variant="BoBadgeVariant.primary" label="Primary" />
<bo-badge :variant="BoBadgeVariant.secondary" label="Secondary" />
<bo-badge :variant="BoBadgeVariant.danger" label="Danger" />
<bo-badge :variant="BoBadgeVariant.warning" label="Warning" />
<bo-badge :variant="BoBadgeVariant.success" label="Success" />
<bo-badge :variant="BoBadgeVariant.light" label="Light" />
<bo-badge :variant="BoBadgeVariant.dark" label="Dark" />
```

## Complete Color Palette

The color system includes all Tailwind CSS colors, organized by color family. Each color has multiple shades ranging from 50 (lightest) to 950 (darkest).

### Base Colors

<div class="flex flex-wrap gap-2 mb-6">
	<div class="flex flex-col items-center">
		<div class="w-16 h-16 rounded bg-black"></div>
		<span class="text-xs mt-1">black</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-16 h-16 rounded bg-white border border-gray-200"></div>
		<span class="text-xs mt-1">white</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-16 h-16 rounded bg-transparent border border-gray-200"></div>
		<span class="text-xs mt-1">transparent</span>
	</div>
</div>

### Neutral Color Families

#### Slate

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f8fafc;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f1f5f9;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e2e8f0;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #cbd5e1;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #94a3b8;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #64748b;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #475569;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #334155;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1e293b;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0f172a;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #020617;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Gray

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f9fafb;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f3f4f6;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e5e7eb;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d1d5db;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #9ca3af;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #6b7280;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4b5563;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #374151;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1f2937;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #111827;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #030712;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Zinc

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f4f4f5;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e4e4e7;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d4d4d8;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a1a1aa;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #71717a;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #52525b;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #3f3f46;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #27272a;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #18181b;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #09090b;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Neutral

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fafafa;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f5f5f5;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e5e5e5;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d4d4d4;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a3a3a3;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #737373;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #525252;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #404040;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #262626;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #171717;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0a0a0a;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Stone

<div class="flex flex-wrap gap-1 mb-6">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fafaf9;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f5f5f4;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e7e5e4;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d6d3d1;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a8a29e;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #78716c;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #57534e;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #44403c;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #292524;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1c1917;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0c0a09;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

### Warm Color Families

#### Red

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fef2f2;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fee2e2;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fecaca;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fca5a5;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f87171;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ef4444;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #dc2626;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #b91c1c;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #991b1b;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #7f1d1d;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #450a0a;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Orange

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fff7ed;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ffedd5;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fed7aa;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fdba74;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fb923c;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f97316;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ea580c;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #c2410c;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #9a3412;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #7c2d12;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #431407;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Amber

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fffbeb;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fef3c7;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fde68a;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fcd34d;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fbbf24;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f59e0b;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d97706;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #b45309;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #92400e;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #78350f;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #451a03;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Yellow

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fefce8;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fef9c3;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fef08a;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fde047;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #facc15;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #eab308;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ca8a04;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a16207;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #854d0e;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #713f12;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #422006;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Pink

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fdf2f8;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fce7f3;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fbcfe8;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f9a8d4;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f472b6;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ec4899;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #db2777;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #be185d;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #9d174d;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #831843;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #500724;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Rose

<div class="flex flex-wrap gap-1 mb-6">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fff1f2;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ffe4e6;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fecdd3;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fda4af;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #fb7185;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f43f5e;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e11d48;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #be123c;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #9f1239;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #881337;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4c0519;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

### Cool Color Families

#### Lime

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f7fee7;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ecfccb;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d9f99d;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #bef264;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a3e635;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #84cc16;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #65a30d;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4d7c0f;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #3f6212;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #365314;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1a2e05;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Green

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f0fdf4;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #dcfce7;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #bbf7d0;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #86efac;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4ade80;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #22c55e;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #16a34a;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #15803d;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #166534;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #14532d;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #052e16;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Emerald

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ecfdf5;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d1fae5;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a7f3d0;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #6ee7b7;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #34d399;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #10b981;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #059669;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #047857;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #065f46;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #064e3b;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #022c22;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Teal

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f0fdfa;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ccfbf1;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #99f6e4;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #5eead4;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #2dd4bf;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #14b8a6;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0d9488;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0f766e;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #115e59;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #134e4a;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #042f2e;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Cyan

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ecfeff;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #cffafe;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a5f3fc;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #67e8f9;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #22d3ee;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #06b6d4;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0891b2;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0e7490;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #155e75;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #164e63;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #083344;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Sky

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f0f9ff;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e0f2fe;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #bae6fd;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #7dd3fc;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #38bdf8;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0ea5e9;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0284c7;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0369a1;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #075985;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #0c4a6e;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #082f49;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Blue

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #eff6ff;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #dbeafe;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #bfdbfe;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #93c5fd;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #60a5fa;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #3b82f6;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #2563eb;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1d4ed8;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1e40af;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1e3a8a;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #172554;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Indigo

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #eef2ff;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e0e7ff;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #c7d2fe;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a5b4fc;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #818cf8;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #6366f1;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4f46e5;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4338ca;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #3730a3;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #312e81;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #1e1b4b;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Violet

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f5f3ff;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ede9fe;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #ddd6fe;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #c4b5fd;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a78bfa;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #8b5cf6;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #7c3aed;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #6d28d9;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #5b21b6;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4c1d95;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #2e1065;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Purple

<div class="flex flex-wrap gap-1 mb-4">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #faf5ff;"></div>
		<span class="text-xs mt-1">50</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #f3e8ff;"></div>
		<span class="text-xs mt-1">100</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #e9d5ff;"></div>
		<span class="text-xs mt-1">200</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d8b4fe;"></div>
		<span class="text-xs mt-1">300</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #c084fc;"></div>
		<span class="text-xs mt-1">400</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a855f7;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #9333ea;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #7e22ce;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #6b21a8;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #581c87;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #3b0764;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

#### Fuchsia

<div class="flex flex-wrap gap-1 mb-6">
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #d946ef;"></div>
		<span class="text-xs mt-1">500</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #c026d3;"></div>
		<span class="text-xs mt-1">600</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #a21caf;"></div>
		<span class="text-xs mt-1">700</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #86198f;"></div>
		<span class="text-xs mt-1">800</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #701a75;"></div>
		<span class="text-xs mt-1">900</span>
	</div>
	<div class="flex flex-col items-center">
		<div class="w-12 h-12 rounded" style="background-color: #4a044e;"></div>
		<span class="text-xs mt-1">950</span>
	</div>
</div>

## Complete Color Enum

The `BoColor` enum provides comprehensive color options:

```typescript
export enum BoColor {
	// Base colors
	inherit = 'inherit',
	current = 'currentColor',
	transparent = 'transparent',
	black = '#000',
	white = '#fff',

	// Slate family (11 shades)
	slate_50 = '#f8fafc',
	slate_100 = '#f1f5f9',
	slate_200 = '#e2e8f0',
	// ... through slate_950

	// Gray family (11 shades)
	gray_50 = '#f9fafb',
	gray_100 = '#f3f4f6',
	gray_200 = '#e5e7eb',
	// ... through gray_950

	// Zinc family (10 shades - missing 50)
	zinc_100 = '#f4f4f5',
	zinc_200 = '#e4e4e7',
	// ... through zinc_950

	// Neutral family (11 shades)
	neutral_50 = '#fafafa',
	neutral_100 = '#f5f5f5',
	// ... through neutral_950

	// Stone family (11 shades)
	stone_50 = '#fafaf9',
	stone_100 = '#f5f5f4',
	// ... through stone_950

	// Red family (11 shades)
	red_50 = '#fef2f2',
	red_600 = '#dc2626', // Danger color
	red_700 = '#b91c1c',
	// ... through red_950

	// Orange family (11 shades)
	orange_50 = '#fff7ed',
	orange_500 = '#f97316',
	// ... through orange_950

	// Amber family (11 shades)
	amber_50 = '#fffbeb',
	amber_500 = '#f59e0b',
	// ... through amber_950

	// Yellow family (11 shades)
	yellow_50 = '#fefce8',
	yellow_500 = '#eab308', // Warning color
	yellow_600 = '#ca8a04',
	// ... through yellow_950

	// Lime family (11 shades)
	lime_50 = '#f7fee7',
	lime_500 = '#84cc16',
	// ... through lime_950

	// Green family (11 shades)
	green_50 = '#f0fdf4',
	green_600 = '#16a34a', // Success color
	green_700 = '#15803d',
	// ... through green_950

	// Emerald family (11 shades)
	emerald_50 = '#ecfdf5',
	emerald_500 = '#10b981',
	// ... through emerald_950

	// Teal family (11 shades)
	teal_50 = '#f0fdfa',
	teal_500 = '#14b8a6',
	// ... through teal_950

	// Cyan family (11 shades)
	cyan_50 = '#ecfeff',
	cyan_500 = '#06b6d4',
	// ... through cyan_950

	// Sky family (11 shades)
	sky_50 = '#f0f9ff',
	sky_500 = '#0ea5e9',
	// ... through sky_950

	// Blue family (11 shades)
	blue_50 = '#eff6ff',
	blue_600 = '#2563eb', // Primary color
	blue_700 = '#1d4ed8',
	// ... through blue_950

	// Indigo family (11 shades)
	indigo_50 = '#eef2ff',
	indigo_500 = '#6366f1',
	// ... through indigo_950

	// Violet family (11 shades)
	violet_50 = '#f5f3ff',
	violet_500 = '#8b5cf6',
	// ... through violet_950

	// Purple family (11 shades)
	purple_50 = '#faf5ff',
	purple_500 = '#a855f7',
	// ... through purple_950

	// Fuchsia family (6 shades - partial)
	fuchsia_500 = '#d946ef',
	fuchsia_600 = '#c026d3',
	// ... through fuchsia_950

	// Pink family (11 shades)
	pink_50 = '#fdf2f8',
	pink_500 = '#ec4899',
	// ... through pink_950

	// Rose family (11 shades)
	rose_50 = '#fff1f2',
	rose_500 = '#f43f5e',
	// ... through rose_950
}
```

## Color Usage Guidelines

### For Component Variants

Components use these standard color mappings:

- **Primary**: `blue_600` / `blue_700` (dark mode)
- **Secondary**: `neutral_600` / `neutral_700` (dark mode)
- **Danger**: `red_600` / `red_700` (dark mode)
- **Warning**: `yellow_500` / `yellow_600` (dark mode)
- **Success**: `green_600` / `green_700` (dark mode)
- **Light**: `neutral_100` / `neutral_200` (dark mode)
- **Dark**: `neutral_800` / `black` (dark mode)

### For Accessibility

When using colors:

1. **Contrast**: Ensure sufficient contrast between text and background colors (minimum 4.5:1 for normal text, 3:1 for large text)
2. **Don't rely on color alone**: Always pair color indicators with text, icons, or patterns
3. **Consistency**: Use colors consistently across the application

### Dark Mode Considerations

The color system automatically handles dark mode variations:

- Light backgrounds (`gray_50` to `gray_200`) become dark backgrounds (`gray_800` to `gray_950`)
- Dark text colors become light text colors
- Accent colors are adjusted for better contrast on dark backgrounds

## Integration with Tailwind

The color system integrates seamlessly with Tailwind CSS classes:

```html
<!-- Using Tailwind classes that correspond to our color system -->
<div class="bg-blue-600 text-white">Primary color background</div>
<div class="text-red-600">Danger color text</div>
<div class="border-green-600">Success color border</div>
```

## Component Support

The following components support color variants:

- **Badge**: All 7 standard variants
- **Button**: All 7 standard variants
- **Avatar**: 6 variants (no light variant)
- **Progress Bar**: 8 variants (includes info variant)
- **Loading Components**: 7 variants (includes white variant)

## Using Custom Colors

While the `BoColor` enum provides a comprehensive set of colors, there may be cases where you need to use custom colors:

```typescript
// Custom color not in the enum
const brandColor = '#FF5733';

// Using CSS variables for theme colors
const themePrimary = 'var(--color-primary)';
```

However, it's recommended to use the predefined colors and component variants whenever possible to maintain consistency across the application.
