import {
	BoButton,
	BoButtonType,
	BoButtonVariant,
} from '@/components/bo_button';
import { Icon } from '@/components/bo_icon';
import { BoSize } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-button',
	component: BoButton,
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
			options: Object.values(BoButtonVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoButtonVariant,
						'BoButtonVariant',
					),
				},
			},
			defaultValue: BoButtonVariant.primary,
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
		variant: BoButtonVariant.primary,
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
		template: `
			<div class="items-center flex">
				<BoButton label="Extra small" size="${BoSize.extra_small}" class="m-1" />
				<BoButton label="Small" size="${BoSize.small}" class="m-1" />
				<BoButton label="Default" size="${BoSize.default}" class="m-1" />
				<BoButton label="Large" size="${BoSize.large}" class="m-1" />
				<BoButton label="Extra large" size="${BoSize.extra_large}" />
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
		template: `
			<h1 class="my-2 dark:text-white">Default</h1>
			<div class="flex flex-1">
				<BoButton label="Primary" variant="${BoButtonVariant.primary}" class="m-1" />
				<BoButton label="Secondary" variant="${BoButtonVariant.secondary}" class="m-1" />
				<BoButton label="Danger" variant="${BoButtonVariant.danger}" class="m-1" />
				<BoButton label="Warning" variant="${BoButtonVariant.warning}" class="m-1" />
				<BoButton label="Success" variant="${BoButtonVariant.success}" class="m-1" />
				<BoButton label="Dark" variant="${BoButtonVariant.dark}" class="m-1" />
				<BoButton label="Purple" variant="${BoButtonVariant.purple}" class="m-1" />
				<BoButton label="Teal" variant="${BoButtonVariant.teal}" class="m-1" />
			</div>
			<h1 class="my-2 dark:text-white">Pill</h1>
			<div class="flex flex-1">
				<BoButton label="Primary" variant="${BoButtonVariant.primary}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Danger" variant="${BoButtonVariant.danger}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Warning" variant="${BoButtonVariant.warning}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Success" variant="${BoButtonVariant.success}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Dark" variant="${BoButtonVariant.dark}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Purple" variant="${BoButtonVariant.purple}" type="${BoButtonType.pill}" class="m-1" />	
				<BoButton label="Teal" variant="${BoButtonVariant.teal}" type="${BoButtonType.pill}" class="m-1" />	
			</div>
			<h1 class="my-2 dark:text-white">Outline</h1>
			<div class="flex flex-1">	
				<BoButton label="Primary" variant="${BoButtonVariant.primary}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Danger" variant="${BoButtonVariant.danger}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Warning" variant="${BoButtonVariant.warning}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Success" variant="${BoButtonVariant.success}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Dark" variant="${BoButtonVariant.dark}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Purple" variant="${BoButtonVariant.purple}" type="${BoButtonType.outline}" class="m-1" />	
				<BoButton label="Teal" variant="${BoButtonVariant.teal}" type="${BoButtonType.outline}" class="m-1" />	
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
