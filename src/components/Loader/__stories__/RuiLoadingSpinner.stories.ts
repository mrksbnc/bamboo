import type { Meta, StoryObj } from '@storybook/vue3';
import { RuiLoadingSpinner, LoadingSpinnerColor, LoadingSpinnerSize } from '..';

const meta = {
	id: 'RuiLoadingSpinner',
	title: 'Loader/rui-loading-spinner',
	component: RuiLoadingSpinner,
	tags: ['autodocs'],
	argTypes: {
		color: {
			description: 'The color of the spinner',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'LoadingSpinnerColor',
					detail: `enum LoadingSpinnerColor {\n${
						Object.keys(LoadingSpinnerColor)
							.map(
								(m: string) =>
									`\t${m} = "${LoadingSpinnerColor[m as keyof typeof LoadingSpinnerColor]}",`,
							)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: LoadingSpinnerColor.blue,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.keys(LoadingSpinnerColor).map(
				(m: string) => LoadingSpinnerColor[m as keyof typeof LoadingSpinnerColor],
			),
		},
		label: {
			description: 'The label of the spinner',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: 'Loading...',
				},
			},
			control: {
				type: 'text',
			},
		},
		showLabel: {
			description: 'The visibility of the label',
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
		size: {
			description: 'The size of the spinner',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'LoadingSpinnerSize',
					detail: `enum LoadingSpinnerSize {\n${
						Object.keys(LoadingSpinnerSize)
							.map(
								(m: string) =>
									`\t${m} = "${LoadingSpinnerSize[m as keyof typeof LoadingSpinnerSize]}",`,
							)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: LoadingSpinnerSize.small,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.keys(LoadingSpinnerSize).map(
				(m: string) => LoadingSpinnerSize[m as keyof typeof LoadingSpinnerSize],
			),
		},
	},
} satisfies Meta<typeof RuiLoadingSpinner>;

export default meta;

type Story = StoryObj<typeof RuiLoadingSpinner>;

export const Blue: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.blue,
	},
};

export const Black: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.black,
	},
};

export const White: Story = {
	parameters: {
		backgrounds: { default: 'black' },
	},
	args: {
		color: LoadingSpinnerColor.white,
	},
};

export const Green: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.green,
	},
};

export const Red: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.red,
	},
};

export const Yellow: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.yellow,
	},
};

export const Purple: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.purple,
	},
};

export const Gray: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.gray,
	},
};

export const WithLabel: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		showLabel: true,
		color: LoadingSpinnerColor.blue,
	},
};
