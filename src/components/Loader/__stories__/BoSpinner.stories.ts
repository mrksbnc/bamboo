import { BoSpinner, SpinnerSize, SpinnerVariant } from '@/components/Loader';
import type { Meta, StoryObj } from '@storybook/vue3';
import { stringEnumFormatter } from '@utils/index';

const meta = {
	title: 'Loader/bo-spinner',
	component: BoSpinner,
	tags: ['autodocs'],
	argTypes: {
		size: {
			description: 'The size of the spinner',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'SpinnerSize',
					detail: stringEnumFormatter(SpinnerSize, 'SpinnerSize'),
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(SpinnerSize),
		},
		variant: {
			description: 'The variant of the spinner',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'SpinnerVariant',
					detail: stringEnumFormatter(SpinnerVariant, 'SpinnerVariant'),
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(SpinnerVariant),
		},
	},
} satisfies Meta<typeof BoSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {},
};
