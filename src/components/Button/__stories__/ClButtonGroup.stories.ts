import { ClButtonGroup, type ButtonGroupItem, ButtonType } from '..';
import type { Meta, StoryObj } from '@storybook/vue3';

const items: ButtonGroupItem[] = [
	{
		id: '1',
		label: 'Button 1',
	},
	{
		id: '2',
		label: 'Button 2',
	},
	{
		id: '3',
		label: 'Button 3',
	},
];

const meta: Meta = {
	title: 'Button/cl-button-group',
	component: ClButtonGroup,
	tags: ['autodocs'],
	argTypes: {
		items: {
			description: 'The items of the button group',
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'ButtonGroupItem[]',
					detail:
						'id: string; label: string; prefix?: Icon; suffix?: Icon; iconColor?: Color | string;',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: 'object',
			},
			defaultValue: items,
		},
		type: {
			description: 'The type of the button group',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'ButtonType',
					detail: `enum ButtonType {\n${
						Object.keys(ButtonType)
							.map((m: string) => `\t${m} = "${ButtonType[m as keyof typeof ButtonType]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: ButtonType.primary,
				},

				control: {
					type: 'select',
				},
			},
			options: Object.keys(ButtonType).map((m: string) => ButtonType[m as keyof typeof ButtonType]),
		},
		fillBackground: {
			description: 'The fill background state of the button group',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: false,
				},
			},
			control: {
				type: 'boolean',
			},
		},
	},
} satisfies Meta<typeof ClButtonGroup>;

export default meta;

type Story = StoryObj<typeof ClButtonGroup>;

export const Example: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
	},
};

export const Primary: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		type: ButtonType.primary,
	},
};

export const Secondary: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		type: ButtonType.secondary,
	},
};

export const Danger: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		type: ButtonType.danger,
	},
};

export const Warning: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		type: ButtonType.warning,
	},
};

export const Success: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		type: ButtonType.success,
	},
};

export const Light: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		type: ButtonType.light,
	},
};

export const Dark: Story = {
	parameters: {
		backgrounds: { default: 'black' },
	},
	args: {
		items,
		type: ButtonType.dark,
	},
};

export const FillBackground: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		items,
		fillBackground: true,
		type: ButtonType.primary,
	},
};
