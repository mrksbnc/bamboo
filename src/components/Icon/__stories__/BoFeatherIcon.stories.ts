import { BoFeatherIcon, Icon, IconSize } from '@/components/Icon';
import { stringEnumFormatter } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Icons/bo-feather-icon',
	component: BoFeatherIcon,
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
					summary: IconSize.md,
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
		strokeStyle: {
			description: 'The stroke style of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'IconStrokeStyle',
					detail: stringEnumFormatter(IconSize, 'IconStrokeStyle'),
				},
				defaultValue: {
					summary: IconSize.md,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(IconSize),
		},
	},
} satisfies Meta<typeof BoFeatherIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		name: Icon.activity,
		size: IconSize.md,
	},
};
