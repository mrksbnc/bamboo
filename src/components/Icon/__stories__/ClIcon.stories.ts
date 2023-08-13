import { Color } from '@/data';
import { ClIcon, Icon } from '..';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Icon/cl-icon',
	component: ClIcon,
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: {
				type: 'select',
			},
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'Icon',
					detail: `enum Icon {\n${
						Object.keys(Icon)
							.map((m: string) => `\t${m} = "${Icon[m as keyof typeof Icon]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
			},
			options: Object.keys(Icon).map((m: string) => Icon[m as keyof typeof Icon]),
		},
		size: {
			description: 'Size of the Icon in pixels',
			control: {
				type: 'number',
			},
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Number',
					detail: 'The size of the icon in pixels',
				},
				defaultValue: {
					summary: 24,
				},
			},
		},
		color: {
			description: 'Color of the Icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Color',
					detail: `enum Color {\n${
						Object.keys(Color)
							.map((m: string) => `\t${m} = "${Color[m as keyof typeof Color]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: Color.black,
				},
			},
			control: {
				type: 'color',
			},
		},
	},
} satisfies Meta<typeof ClIcon>;

export default meta;

type Story = StoryObj<typeof ClIcon>;

export const Activity: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		icon: Icon.ACTIVITY,
	},
};
