import { Color } from '@/data';
import { DsIcon, Icon } from '@/components/Icon';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ButtonSize, ButtonType, DsButton } from '..';

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

export const PrimaryPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Primary Pill',
		type: ButtonType.primary_pill,
	},
};

export const PrimaryOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Primary Outline',
		type: ButtonType.primary_outline,
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

export const SecondaryPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Secondary Pill',
		type: ButtonType.secondary_pill,
	},
};

export const SecondaryOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Secondary Outline',
		type: ButtonType.secondary_outline,
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

export const DangerPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Danger Pill',
		type: ButtonType.danger_pill,
	},
};

export const DangerOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Danger Outline',
		type: ButtonType.danger_outline,
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

export const WarningPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Warning Pill',
		type: ButtonType.warning_pill,
	},
};

export const WarningOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Warning Outline',
		type: ButtonType.warning_outline,
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

export const SuccessPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Success Pill',
		type: ButtonType.success_pill,
	},
};

export const SuccessOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Success Outline',
		type: ButtonType.success_outline,
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

export const LightPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Light Pill',
		type: ButtonType.light_pill,
	},
};

export const LightOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Light Outline',
		type: ButtonType.light_outline,
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

export const DarkPill: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Dark Pill',
		type: ButtonType.dark_pill,
	},
};

export const DarkOutline: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		label: 'Dark Outline',
		type: ButtonType.dark_outline,
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
			<ds-button v-bind="args">
				<template #prefix>
					<ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
	},
};

export const PillWithPrefix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButton, DsIcon },
		template: `
			<ds-button v-bind="args">
				<template #prefix>
					<ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
		type: ButtonType.primary_pill,
	},
};

export const OutlineWithPrefix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButton, DsIcon },
		template: `
				<ds-button v-bind="args">
					<template #prefix>
						<ds-icon icon="${Icon.plus}" color="${Color['blue-400']}" :size="16"/>
					</template>
				</ds-button>
			`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
		type: ButtonType.primary_outline,
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
			<ds-button v-bind="args">
				<template #suffix>
					<ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
	},
};

export const PillWithSuffix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButton, DsIcon },
		template: `
			<ds-button v-bind="args">
				<template #suffix>
					<ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
		type: ButtonType.primary_pill,
	},
};

export const OutlineWithSuffix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButton, DsIcon },
		template: `
			<ds-button v-bind="args">
				<template #suffix>
					<ds-icon icon="${Icon.plus}" color="#fff" :size="16"/>
				</template>
			</ds-button>
		`,
		setup() {
			return { args };
		},
	}),
	args: {
		label: 'Button',
		type: ButtonType.primary_outline,
	},
};
