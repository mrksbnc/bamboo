import { ButtonSize, ButtonType, ClButton } from '..';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Button/cl-button',
	component: ClButton,
	tags: ['autodocs'],
	argTypes: {
		label: {
			description: 'The label of the button',
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'string',
				},
			},
			control: {
				type: 'text',
			},
			defaultValue: {
				summary: undefined,
			},
		},
		type: {
			description: 'The type of the button',
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
					summary: ButtonType.PRIMARY,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.keys(ButtonType).map((m: string) => ButtonType[m as keyof typeof ButtonType]),
		},
		disabled: {
			description: 'The disabled state of the button',
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
			description: 'The size of the button',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'ButtonSize',
					detail: `enum ButtonSize {\n${
						Object.keys(ButtonSize)
							.map((m: string) => `\t${m} = "${ButtonSize[m as keyof typeof ButtonSize]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: ButtonSize.BASE,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.keys(ButtonSize).map((m: string) => ButtonSize[m as keyof typeof ButtonSize]),
		},
		isLoading: {
			description: 'The loading state of the button',
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
		onClick: {
			description: 'The click event handler',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: '() => void',
				},
			},
			control: {
				type: null,
			},
			action: 'clicked',
		},
		prefix: {
			description: 'Content of the prefix slot',
			table: {
				category: 'slots',
				subcategory: 'optional',
				type: {
					summary: 'unkown',
				},
				defaultValue: {
					summary: undefined,
				},
			},
		},
		suffix: {
			description: 'Content of the suffix slot',
			table: {
				category: 'slots',
				subcategory: 'optional',
				type: {
					summary: 'unkown',
				},
				defaultValue: {
					summary: undefined,
				},
			},
		},
	},
} satisfies Meta<typeof ClButton>;

export default meta;

type Story = StoryObj<typeof ClButton>;

export const Primary: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Primary',
		type: ButtonType.PRIMARY,
	},
};

export const Secondary: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Secondary',
		type: ButtonType.SECONDARY,
	},
};

export const Danger: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Danger',
		type: ButtonType.DANGER,
	},
};

export const Warning: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Warning',
		type: ButtonType.WARNING,
	},
};

export const Success: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Success',
		type: ButtonType.SUCCESS,
	},
};

export const Light: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Light',
		type: ButtonType.LIGHT,
	},
};

export const Dark: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Dark',
		type: ButtonType.DARK,
	},
};

export const Disabled: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Disabled',
		disabled: true,
	},
};

export const Loading: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Is Loading',
		isLoading: true,
	},
};
