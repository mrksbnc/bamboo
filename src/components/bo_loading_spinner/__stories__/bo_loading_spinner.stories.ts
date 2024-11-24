import { BoSize } from '@/data/bo_size.constant';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BoLoadingSpinnerVariant } from '../bo_loading_spinner.constant';
import BoLoadingSpinner from '../BoLoadingSpinner.vue';

const meta = {
	title: 'Components/bo-loading-spinner',
	component: BoLoadingSpinner,
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
			options: Object.values(BoLoadingSpinnerVariant),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoLoadingSpinnerVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoLoadingSpinnerVariant,
						'BoLoadingSpinnerVariant',
					),
				},
			},
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
} satisfies Meta<typeof BoLoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		size: BoSize.default,
		variant: BoLoadingSpinnerVariant.primary,
	},
};

export const Variants: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			const variants = Object.values(BoLoadingSpinnerVariant);
			return { variants, ...args };
		},
		template: `
			<div class="flex flex-row gap-4">
                <span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
                    <BoLoadingSpinner :size="size" :variant="variant" class="m-1"/>
                    <span class="text-small text-gray-500 font-medium">{{ variant }}</span>
                </span>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoadingSpinnerVariant.primary,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex gap-2">
                <span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
                    <BoLoadingSpinner :size="size" class="m-1"/>
                    <span class="text-small text-gray-500 font-medium">{{ size }}</span>
                </span>
			</div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoadingSpinnerVariant.primary,
	},
};

export const WithLoaderText: Story = {
	render: (args) => ({
		components: { BoLoadingSpinner },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <BoLoadingSpinner :size="size" :variant="variant" :loader-text="loaderText" class="m-1"/>
            </div>
		`,
	}),
	args: {
		size: BoSize.default,
		variant: BoLoadingSpinnerVariant.primary,
		loaderText: 'Loading...',
	},
};
