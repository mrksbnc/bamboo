import { BoButton, BoButtonType } from '@/components/bo_button';
import { Icon } from '@/components/bo_icon';
import { BoSize, BoVariant } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-button',
	component: BoButton,
	argTypes: {
		label: {
			description: 'The label of the button',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		variant: {
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoVariant',
					detail: StorybookUtils.stringEnumFormatter(BoVariant, 'BoVariant'),
				},
			},
			options: Object.values(BoVariant),
			defaultValue: BoVariant.primary,
		},
		type: {
			type: 'string',
			options: Object.values(BoButtonType),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonType',
					detail: StorybookUtils.stringEnumFormatter(
						BoButtonType,
						'BoButtonType',
					),
				},
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
			description: 'The variant of the button',
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
		isLoading: {
			description: 'Whether the button is loading',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
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
		prefixIcon: {
			description: 'The icon to be displayed before the label',
			control: { type: 'text' },
			defaultValue: null,
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Icon',
					detail: StorybookUtils.stringEnumFormatter(Icon, 'Icon'),
				},
			},
			options: Object.values(Icon),
		},
		suffixIcon: {
			description: 'The icon to be displayed after the label',
			control: { type: 'text' },
			defaultValue: null,
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Icon',
					detail: StorybookUtils.stringEnumFormatter(Icon, 'Icon'),
				},
			},
			options: Object.values(Icon),
		},
	},
} satisfies Meta<typeof BoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: 'Label',
		variant: BoVariant.primary,
		type: BoButtonType.default,
		disabled: false,
		size: BoSize.default,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Label',
		disabled: true,
	},
};

export const Sizes: Story = {
	render: () => ({
		components: { BoButton },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, BoSize };
		},
		template: `
			<div class="items-center flex">
				<BoButton v-for="size in sizes" :label="size" :size="size" class="m-1" />
			</div>
		`,
	}),
	args: {
		label: 'Label',
	},
};

export const Types: Story = {
	render: () => ({
		components: { BoButton },
		setup() {
			const types = Object.values(BoButtonType);
			return { types, BoButtonType };
		},
		template: `
			<div class="items-center flex">
				<BoButton v-for="type in types" :label="type" :type="type" class="m-1" />
			</div>
		`,
	}),
	args: {
		label: 'Label',
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoButton },
		setup() {
			const variants = Object.values(BoVariant);
			return { variants, BoVariant };
		},
		template: `
			<div class="flex flex-col gap-4 w-full h-full dark:bg-gray-700 p-2 rounded-lg">
				<h1 class="my-2 dark:text-white">Default</h1>
				<div class="flex flex-1">
					<BoButton  v-for="variant in variants" :label="variant" :variant="variant" class="m-1" />
				</div>
				<h1 class="my-2 dark:text-white">Pill</h1>
				<div class="flex flex-1">
					<BoButton  v-for="variant in variants" :label="variant" :variant="variant" type="${BoButtonType.pill}" class="m-1" />
				</div>
				<h1 class="my-2 dark:text-white">Outline</h1>
				<div class="flex flex-1">	
					<BoButton  v-for="variant in variants" :label="variant" :variant="variant" type="${BoButtonType.outline}" class="m-1" />
				</div>
				<h1 class="my-2 dark:text-white">Links</h1>
				<div class="flex flex-1">	
					<BoButton  v-for="variant in variants" :label="variant" :variant="variant" type="${BoButtonType.link}" class="m-1" />
				</div>
			</div>
		`,
	}),
	args: {
		label: 'Label',
	},
};

export const WithPrefixIcon: Story = {
	args: {
		label: 'Label',
		prefixIcon: Icon.alert_circle,
	},
};

export const WithSuffixIcon: Story = {
	args: {
		label: 'Label',
		suffixIcon: Icon.alert_circle,
	},
};

export const WithPrefixAndSuffixIcon: Story = {
	args: {
		label: 'Label',
		prefixIcon: Icon.alert_circle,
		suffixIcon: Icon.alert_circle,
	},
};
