import type { Meta, StoryObj } from '@storybook/vue3';
import { CbLoadingSpinner, LoadingSpinnerColor, LoadingSpinnerSize } from '..';

const meta = {
	title: 'Loader/CbLoadingSpinner',
	component: CbLoadingSpinner,
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
					summary: LoadingSpinnerColor.BLUE,
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
					summary: LoadingSpinnerSize.SMALL,
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
} satisfies Meta<typeof CbLoadingSpinner>;

export default meta;

type Story = StoryObj<typeof CbLoadingSpinner>;

export const Blue: Story = {
	parameters: {
		backgrounds: {
			default: 'white',
		},
	},
	args: {
		color: LoadingSpinnerColor.BLUE,
	},
};

export const Black: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.BLACK,
	},
};

export const White: Story = {
	parameters: {
		backgrounds: { default: 'black' },
	},
	args: {
		color: LoadingSpinnerColor.WHITE,
	},
};

export const Green: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.GREEN,
	},
};

export const Red: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.RED,
	},
};

export const Yellow: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.YELLOW,
	},
};

export const Purple: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.PURPLE,
	},
};

export const Gray: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		color: LoadingSpinnerColor.GRAY,
	},
};

export const CustomLabel: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Not the default label',
		color: LoadingSpinnerColor.BLUE,
	},
};

export const NoLabel: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		showLabel: false,
		color: LoadingSpinnerColor.BLUE,
	},
};

export const ExtraSmall: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		size: LoadingSpinnerSize.EXTRA_SMALL,
		color: LoadingSpinnerColor.BLUE,
	},
};

export const Small: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		size: LoadingSpinnerSize.SMALL,
		color: LoadingSpinnerColor.BLUE,
	},
};

export const Medium: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		size: LoadingSpinnerSize.MEDIUM,
		color: LoadingSpinnerColor.BLUE,
	},
};

export const Large: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		size: LoadingSpinnerSize.LARGE,
		color: LoadingSpinnerColor.BLUE,
	},
};
