import { BoButtonVariant } from '@/components';
import { BoButtonGroup, type BoButtonGroupItem } from '@/components/BoButton';
import { BoSize } from '@/constants';
import { stringEnumFormatter } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const items: BoButtonGroupItem[] = [
	{
		id: '1',
		label: 'Label 1',
	},
	{
		id: '2',
		label: 'Label 2',
	},
	{
		id: '3',
		label: 'Label 3',
	},
];

const meta = {
	title: 'Button/bo-button-group',
	component: BoButtonGroup,
	tags: ['autodocs'],
	argTypes: {
		items: {
			description: 'The items to be displayed',
			table: {
				category: 'props',
				subcategory: 'required',
			},
			control: {
				type: 'object',
			},
		},
		variant: {
			options: Object.values(BoButtonVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonVariant',
					detail: stringEnumFormatter(BoButtonVariant, 'BoButtonVariant'),
				},
			},
			defaultValue: BoButtonVariant.primary,
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
			options: Object.values(BoSize),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSize',
					detail: stringEnumFormatter(BoSize, 'BoSize'),
				},
			},
			defaultValue: BoSize.default,
		},
	},
	args: {
		items,
		variant: BoButtonVariant.primary,
		size: BoSize.default,
		disabled: false,
	},
} satisfies Meta<typeof BoButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		items,
		variant: BoButtonVariant.primary,
		size: BoSize.default,
		disabled: false,
	},
};
