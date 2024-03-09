import { BoBadge, BoBadgeSize, BoBadgeType } from '@/components/BoBadge';
import { Icon } from '@/components/BoIcon';
import { BoVariant } from '@/constants';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Badge/bo-badge',
	component: BoBadge,
	tags: ['autodocs'],
	argTypes: {
		label: {
			description: 'The label of the badge',
			table: {
				category: 'props',
				subcategory: 'required',
			},
			control: {
				type: 'text',
			},
		},
		variant: {
			options: Object.values(BoVariant),
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
			defaultValue: BoVariant.default,
		},
		size: {
			type: 'string',
			options: Object.values(BoBadgeSize),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoBadgeSize',
					detail: StorybookUtils.stringEnumFormatter(
						BoBadgeSize,
						'BoBadgeSize',
					),
				},
			},
			defaultValue: BoBadgeSize.default,
		},
		type: {
			type: 'string',
			options: Object.values(BoBadgeType),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoBadgeType',
					detail: StorybookUtils.stringEnumFormatter(
						BoBadgeType,
						'BoBadgeType',
					),
				},
			},
			defaultValue: BoBadgeSize.default,
		},
		icon: {
			description: 'The icon object for the badge',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoBadgeIcon',
					detail: `{
						iconOnly?: boolean;
						icon?: Icon;
						prefix?: Icon;
						suffix?: Icon;
					}`,
				},
			},
			control: {
				type: 'text',
			},
		},
	},
	args: {
		label: 'Badge',
		variant: BoVariant.default,
		size: BoBadgeSize.default,
		type: BoBadgeType.default,
		icon: {
			iconOnly: false,
			icon: Icon.check,
			prefix: undefined,
			suffix: undefined,
		},
	},
} satisfies Meta<typeof BoBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		label: 'Badge',
	},
};

export const Sizes: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="items-center flex">
				<BoBadge label="Default" size="${BoBadgeSize.default}" class="m-1"/>
				<BoBadge label="Large" size="${BoBadgeSize.large}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<h1 class="my-2 dark:text-white">Default</h1>
			<div class="flex flex-1">
				<BoBadge label="Primary" variant="${BoVariant.primary}" class="m-1"/>
				<BoBadge label="Secondary" variant="${BoVariant.secondary}" class="m-1"/>
				<BoBadge label="Danger" variant="${BoVariant.danger}" class="m-1"/>
				<BoBadge label="Warning" variant="${BoVariant.warning}" class="m-1"/>
				<BoBadge label="Success" variant="${BoVariant.success}" class="m-1"/>
				<BoBadge label="Dark" variant="${BoVariant.dark}" class="m-1"/>
				<BoBadge label="Purple" variant="${BoVariant.purple}" class="m-1"/>
				<BoBadge label="Teal" variant="${BoVariant.teal}" class="m-1"/>
			</div>
			<h1 class="my-2 dark:text-white">Pill</h1>
			<div class="flex flex-1">
				<BoBadge label="Primary" variant="${BoVariant.primary}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Secondary" variant="${BoVariant.secondary}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Danger" variant="${BoVariant.danger}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Warning" variant="${BoVariant.warning}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Success" variant="${BoVariant.success}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Dark" variant="${BoVariant.dark}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Purple" variant="${BoVariant.purple}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Teal" variant="${BoVariant.teal}" type=${BoBadgeType.pill} class="m-1"/>
			</div>
			<h1 class="my-2 dark:text-white">Outline</h1>
			<div class="flex flex-1">
				<BoBadge label="Primary" variant="${BoVariant.primary}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Secondary" variant="${BoVariant.secondary}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Danger" variant="${BoVariant.danger}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Warning" variant="${BoVariant.warning}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Success" variant="${BoVariant.success}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Dark" variant="${BoVariant.dark}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Purple" variant="${BoVariant.purple}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Teal" variant="${BoVariant.teal}" type=${BoBadgeType.outline} class="m-1"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const WithPrefixIcon: Story = {
	args: {
		label: 'Badge',
		icon: {
			prefix: Icon.check,
		},
	},
};

export const WithSuffixIcon: Story = {
	args: {
		label: 'Badge',
		icon: {
			suffix: Icon.check,
		},
	},
};

export const IconOnly: Story = {
	args: {
		label: 'Badge',
		icon: {
			iconOnly: true,
			icon: Icon.check,
		},
	},
};

export const IconOnlyCircle: Story = {
	args: {
		label: 'Badge',
		icon: {
			circle: true,
			iconOnly: true,
			icon: Icon.check,
		},
	},
};
