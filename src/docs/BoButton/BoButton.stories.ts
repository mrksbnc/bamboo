import { BoButtonVariant } from '@/components';
import { BoButton, BoButtonType } from '@/components/BoButton';
import { BoSize } from '@/enums';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Button/BoButton',
	component: BoButton,
	tags: ['autodocs'],
	argTypes: {
		label: {
			type: 'string',
			description: 'The label of the button',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		variant: {
			type: 'string',
			options: Object.values(BoButtonVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: BoButtonVariant.primary,
		},
		type: {
			type: 'string',
			description: 'The type of the button',
			control: { type: 'select', options: Object.values(BoButtonType) },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: BoButtonType.default,
		},
		disabled: {
			type: 'boolean',
			description: 'Whether the button is disabled',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		size: {
			type: 'string',
			description: 'The size of the button',
			control: { type: 'select', options: Object.values(BoSize) },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: BoSize.default,
		},
		prefixIcon: {
			type: 'string',
			description: 'The icon to be displayed before the label',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		suffixIcon: {
			type: 'string',
			description: 'The icon to be displayed after the label',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
	},
} satisfies Meta<typeof BoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: BoButtonVariant.primary,
		label: 'Primary',
	},
};
