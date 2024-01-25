import { BoSpinner, LoaderSize, SpinnerVariant } from '@/components/Loader';
import { stringEnumFormatter } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

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
					summary: 'LoaderSize',
					detail: stringEnumFormatter(LoaderSize, 'LoaderSize'),
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(LoaderSize),
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

export const WithText: Story = {
	args: {
		text: 'Loading...',
	},
};
