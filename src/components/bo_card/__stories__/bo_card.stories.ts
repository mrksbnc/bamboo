import { BoBadge, BoBadgeVariant } from '@/components/bo_badge'
import { BoCard } from '@/components/bo_card'
import {
	BoFontFamily,
	BoFontSize,
	BoText,
	BoTextColor,
} from '@/components/bo_text'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
	title: 'Components/bo-card',
	component: BoCard,
	argTypes: {
		content: {
			description: 'The main slot of the card',
			table: {
				category: 'slots',
				subcategory: 'optional',
			},
		},
		title: {
			description: 'The title of the card',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		description: {
			description: 'The description of the card',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		clickable: {
			description: 'Whether the card is clickable',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		widthInPx: {
			description: 'The width of the card in pixels',
			control: { type: 'number' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		widthInPercent: {
			description: 'The width of the card in percent',
			control: { type: 'number' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		widthAsTailwindClass: {
			description: 'The width of the card as a tailwind class',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		padding: {
			description: 'The padding of the card',
			control: { type: 'object' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: {
				top: true,
				right: true,
				bottom: true,
				left: true,
			},
		},
	},
} satisfies Meta<typeof BoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	render: () => ({
		components: { BoCard, BoBadge },
		template: `
			<bo-card>
				<template #content>
					<div class="flex gap-2 items-center">
						<div class="flex gap-2">
							<img
								src="https://cataas.com/cat"
								alt="cat"
								class="w-20 h-20 rounded-lg"
							/>
						</div>
						<div class="flex gap-2">
							<img
								src="https://cataas.com/cat"
								alt="cat"
								class="w-20 h-20 rounded-lg"
							/>
						</div>
						<div class="flex gap-2">
							<img
								src="https://cataas.com/cat"
								alt="cat"
								class="w-20 h-20 rounded-lg"
							/>
						</div>
					</div>
					<div class="flex gap-4 pt-4 items-center justify-center">
						<bo-badge label="Badge 1" variant="${BoBadgeVariant.danger}" />
						<bo-badge label="Badge 2" variant="${BoBadgeVariant.warning}" />
						<bo-badge label="Badge 3" variant="${BoBadgeVariant.success}" />
					</div>
				</template>
			</bo-card>
		`,
	}),
}

export const TitleAndDescription: Story = {
	render: () => ({
		components: { BoCard },
		template: `
			<bo-card
				title="Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
			/>
		`,
	}),
}

export const Clickable: Story = {
	render: () => ({
		components: { BoCard },
		template: `
			<bo-card
				title="Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
				clickable
			/>
		`,
	}),
}

export const NoPadding: Story = {
	render: () => ({
		components: { BoCard, BoText },
		template: `
			<bo-card
				:padding="{ top: false, right: false, bottom: false, left: false }"
			>
				<template #content>
					<div class="flex items-center">
						<div class="flex gap-2 items-center h-[100px] w-[400px] pr-4">
							<img
								src="https://cataas.com/cat"
								alt="cat"
								class="w-full h-full rounded-l-lg"
							/>
						</div>
						<div class="flex gap-2 items-center pr-4">
							<bo-text
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
								size="${BoFontSize.sm}"
								color="${BoTextColor.secondary}"
								font-family="${BoFontFamily.sans}"
							/>
						</div>
					</div>
				</template>
			</bo-card>
		`,
	}),
}

export const WidthInPx: Story = {
	render: () => ({
		components: { BoCard },
		template: `
			<bo-card
				title="Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
				:width-in-px="300"
			/>
		`,
	}),
}

export const WidthInPercent: Story = {
	render: () => ({
		components: { BoCard },
		template: `
			<bo-card
				title="Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
				:width-in-percent="50"
			/>
		`,
	}),
}

export const WidthAsTailwindClass: Story = {
	render: () => ({
		components: { BoCard },
		template: `
			<bo-card
				title="Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
				width-as-tailwind-class="w-1/2"
			/>
		`,
	}),
}
