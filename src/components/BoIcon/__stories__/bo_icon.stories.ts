import { BoIcon, Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { stringEnumFormatter } from '@/utils/index';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Icon/bo-icon',
	component: BoIcon,
	tags: ['autodocs'],
	argTypes: {
		icon: {
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
					summary: 'BoSize',
					detail: stringEnumFormatter(BoSize, 'BoSize'),
				},
				defaultValue: {
					summary: BoSize.default,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(BoSize),
		},
		color: {
			description: 'The color of the icon in `hex` format',
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
} satisfies Meta<typeof BoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		icon: Icon.airplay,
		size: BoSize.default,
	},
};
