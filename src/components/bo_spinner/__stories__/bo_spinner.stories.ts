import { BoSize } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BoSpinner, BoSpinnerVariant } from '..';

const meta = {
	title: 'Components/bo-spinner',
	component: BoSpinner,
	argTypes: {
		size: {
			description: 'The size of the spinner',
			control: { type: 'select' },
			options: Object.values(BoSize),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSize',
					detail: StorybookUtils.stringEnumFormatter(BoSize, 'BoSize'),
				},
			},
			defaultValue: BoSize.default,
		},
		variant: {
			description: 'The variant of the spinner',
			control: { type: 'select' },
			options: Object.values(BoSpinnerVariant),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSpinnerVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoSpinnerVariant,
						'BoSpinnerVariant',
					),
				},
			},
			defaultValue: BoSpinnerVariant.primary,
		},
		loaderText: {
			description: 'The text to be displayed in the loader',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
	},
} satisfies Meta<typeof BoSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		size: BoSize.default,
		variant: BoSpinnerVariant.primary,
	},
};

export const Sizes: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
			<div class="flex flex-col gap-4 dark:bg-gray-800 p-2">
				<BoSpinner size="${BoSize.small}" variant="${BoSpinnerVariant.primary}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.primary}" class="m-1"/>
				<BoSpinner size="${BoSize.large}" variant="${BoSpinnerVariant.primary}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoSpinnerVariant.primary,
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
			<div class="flex flex-row gap-4 dark:bg-gray-800 p-2">
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.primary}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.secondary}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.danger}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.warning}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.success}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.dark}" class="m-1"/>				
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.purple}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.teal}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoSpinnerVariant.primary,
	},
};

export const WithLoaderText: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
		<div class="flex flex-col gap-4 dark:bg-gray-800 p-2">
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.primary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.secondary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.danger}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.warning}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.success}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.dark}" loaderText="Loading..." class="m-1"/>				
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.purple}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.teal}" loaderText="Loading..." class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoSpinnerVariant.primary,
	},
};

export const SizesWithLoaderText: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
			<div class="flex flex-col gap-4 dark:bg-gray-800 p-2">
				<BoSpinner size="${BoSize.small}" variant="${BoSpinnerVariant.primary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoSpinnerVariant.primary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.large}" variant="${BoSpinnerVariant.primary}" loaderText="Loading..." class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoSpinnerVariant.primary,
	},
};
