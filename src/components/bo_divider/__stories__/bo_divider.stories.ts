import {
	BoDivider,
	BoDividerType,
	BoDividerVariant,
} from '@/components/bo_divider'
import BoText from '@/components/bo_text/BoText.vue'
import { StorybookUtils } from '@/utils'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
	title: 'Components/bo-divider',
	component: BoDivider,
	argTypes: {
		variant: {
			description: 'The variant of the divider',
			control: { type: 'select' },
			options: Object.values(BoDividerVariant),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoDividerVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoDividerVariant,
						'BoDividerVariant',
					),
				},
			},
			defaultValue: BoDividerVariant.primary,
		},
		type: {
			description: 'The type of the divider',
			control: { type: 'select' },
			options: Object.values(BoDividerType),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoDividerType',
					detail: StorybookUtils.stringEnumFormatter(
						BoDividerType,
						'BoDividerType',
					),
				},
			},
			defaultValue: BoDividerType.default,
		},
	},
} satisfies Meta<typeof BoDivider>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	render: (args) => ({
		components: { BoDivider },
		setup() {
			return { args }
		},
		template: `
			<div class="flex flex-col gap-4 bg-white p-4">
                <bo-divider v-bind="args" />
			</div>
		`,
	}),
	args: {
		variant: BoDividerVariant.primary,
		type: BoDividerType.default,
	},
}

export const Variants: Story = {
	render: (args) => ({
		components: { BoDivider },
		setup() {
			const variants = Object.values(BoDividerVariant)
			return { variants, args }
		},
		template: `
			<div class="flex flex-col gap-4 bg-white p-4">
				<bo-divider v-bind="args" />
                <span class="text-sm text-gray-500 font-medium">default</span>

				<bo-divider v-bind="args" :variant="variants[1]" />
                <span class="text-sm text-gray-500 font-medium">{{ variants[1] }}</span>

                <bo-divider v-bind="args" :variant="variants[2]" />
				<span class="text-sm text-gray-500 font-medium">{{ variants[2] }}</span>

                <bo-divider v-bind="args" :variant="variants[3]" />
                <span class="text-sm text-gray-500 font-medium">{{ variants[3] }}</span>

                <bo-divider v-bind="args" :variant="variants[4]" />
                <span class="text-sm text-gray-500 font-medium">{{ variants[4] }}</span>
			</div>
		`,
	}),
	args: {
		variant: BoDividerVariant.primary,
		type: BoDividerType.default,
	},
}

export const Types: Story = {
	render: (args) => ({
		components: { BoDivider, BoText },
		setup() {
			const types = Object.values(BoDividerType)
			return { types, ...args }
		},
		template: `
			<div class="flex flex-col gap-4 bg-white p-4">
                <span v-for="type in types" :key="type">
				    <bo-divider :type="type" />
                    <span class="text-sm text-gray-500 font-medium">{{ type }}</span>
                </span>
			</div>
		`,
	}),
	args: {},
}
