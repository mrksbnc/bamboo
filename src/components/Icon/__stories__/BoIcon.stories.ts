import { BoIcon, Icon, IconSize } from '@/components/Icon'
import type { Meta, StoryObj } from '@storybook/vue3'
import { stringEnumFormatter } from '@utils/index'

const meta = {
	title: 'Icon/bo-icon',
	component: BoIcon,
	tags: ['autodocs'],
	argTypes: {
		name: {
			description: 'The name of the icon',
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'Icon',
					detail: stringEnumFormatter(Icon, 'Icon'),
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(Icon),
		},
		size: {
			description: 'The size of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'IconSize',
					detail: stringEnumFormatter(IconSize, 'IconSize'),
				},
				defaultValue: {
					summary: IconSize.M,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(IconSize),
		},
		color: {
			description: 'The color of the icon in `--var()` or in `hex` format',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: null,
				},
			},
			control: { type: 'color' },
		},
	},
} satisfies Meta<typeof BoIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		name: Icon.activity,
		size: IconSize.M,
	},
}
