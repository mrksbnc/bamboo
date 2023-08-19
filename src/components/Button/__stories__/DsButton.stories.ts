import { DsIcon, Icon } from '@/components/Icon';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ButtonForm, ButtonSize, ButtonType, DsButton } from '..';

const meta = {
	id: 'DsButton',
	title: 'Button/ds-button',
	component: DsButton,
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
					summary: ButtonType.primary,
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
					summary: ButtonSize.base,
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
		prefix: {
			description: 'Content of the prefix slot',
			table: {
				category: 'slots',
				subcategory: 'optional',
				type: {
					summary: 'unkown',
				},
				defaultValue: {
					summary: '-',
				},
			},
			control: {
				type: '-',
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
					summary: '-',
				},
			},
			control: {
				type: '-',
			},
		},
		onClick: {
			description: 'The click handler',
			action: 'clicked',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: null,
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: undefined,
			},
		},
		form: {
			description: 'The form of the button',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'ButtonForm',
					detail: `enum ButtonForm {\n${
						Object.keys(ButtonForm)
							.map((m: string) => `\t${m} = "${ButtonForm[m as keyof typeof ButtonForm]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.keys(ButtonForm).map((m: string) => ButtonForm[m as keyof typeof ButtonForm]),
		},
	},
} satisfies Meta<typeof DsButton>;

export default meta;

type Story = StoryObj<typeof DsButton>;

export const Example: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Primary',
		type: ButtonType.primary,
	},
};

export const Primary: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Primary',
		type: ButtonType.primary,
	},
};

export const Secondary: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Secondary',
		type: ButtonType.secondary,
	},
};

export const Danger: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Danger',
		type: ButtonType.danger,
	},
};

export const Warning: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Warning',
		type: ButtonType.warning,
	},
};

export const Success: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Success',
		type: ButtonType.success,
	},
};

export const Light: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Light',
		type: ButtonType.light,
	},
};

export const Dark: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Dark',
		type: ButtonType.dark,
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

export const Prefix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButton, DsIcon },
		template: `
			<Ds-button v-bind="args">
				<template #prefix>
					<Ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</Ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
	},
};

export const Suffix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButton, DsIcon },
		template: `
			<Ds-button v-bind="args">
				<template #suffix>
					<Ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</Ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
	},
};
