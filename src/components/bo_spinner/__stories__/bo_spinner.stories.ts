import { BoSize, BoVariant } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BoSpinner } from '..';

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
			options: Object.values(BoVariant),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoVariant',
					detail: StorybookUtils.stringEnumFormatter(BoVariant, 'BoVariant'),
				},
			},
			defaultValue: BoVariant.primary,
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
		variant: BoVariant.primary,
	},
};

export const Sizes: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
			<div class="flex gap-2">
				<BoSpinner size="${BoSize.small}" variant="${BoVariant.primary}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.primary}" class="m-1"/>
				<BoSpinner size="${BoSize.large}" variant="${BoVariant.primary}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoVariant.primary,
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
			<div class="flex flex-row gap-4">
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.primary}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.secondary}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.danger}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.warning}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.success}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.dark}" class="m-1"/>				
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.purple}" class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.teal}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoVariant.primary,
	},
};

export const WithLoaderText: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
		<div class="flex flex-col gap-4">
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.primary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.secondary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.danger}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.warning}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.success}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.dark}" loaderText="Loading..." class="m-1"/>				
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.purple}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.teal}" loaderText="Loading..." class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoVariant.primary,
	},
};

export const SizesWithLoaderText: Story = {
	render: () => ({
		components: { BoSpinner },
		template: `
			<div class="flex flex-col gap-4">
				<BoSpinner size="${BoSize.small}" variant="${BoVariant.primary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.default}" variant="${BoVariant.primary}" loaderText="Loading..." class="m-1"/>
				<BoSpinner size="${BoSize.large}" variant="${BoVariant.primary}" loaderText="Loading..." class="m-1"/>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoVariant.primary,
	},
};
