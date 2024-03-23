import {
	BoBadge,
	BoBadgeSize,
	BoBadgeType,
	BoBadgeVariant,
} from '@/components/BoBadge';
import { Icon } from '@/components/BoIcon';
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
			options: Object.values(BoBadgeVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoBadgeVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoBadgeVariant,
						'BoBadgeVariant',
					),
				},
			},
			defaultValue: BoBadgeVariant.blue,
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
				type: 'object',
			},
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
				<BoBadge label="Primary" variant="${BoBadgeVariant.blue}" class="m-1"/>
				<BoBadge label="Secondary" variant="${BoBadgeVariant.gray}" class="m-1"/>
				<BoBadge label="Danger" variant="${BoBadgeVariant.red}" class="m-1"/>
				<BoBadge label="Warning" variant="${BoBadgeVariant.yellow}" class="m-1"/>
				<BoBadge label="Success" variant="${BoBadgeVariant.green}" class="m-1"/>
				<BoBadge label="Dark" variant="${BoBadgeVariant.black}" class="m-1"/>
				<BoBadge label="Purple" variant="${BoBadgeVariant.purple}" class="m-1"/>
				<BoBadge label="Teal" variant="${BoBadgeVariant.teal}" class="m-1"/>
			</div>
			<h1 class="my-2 dark:text-white">Pill</h1>
			<div class="flex flex-1">
				<BoBadge label="Primary" variant="${BoBadgeVariant.blue}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Secondary" variant="${BoBadgeVariant.gray}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Danger" variant="${BoBadgeVariant.red}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Warning" variant="${BoBadgeVariant.yellow}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Success" variant="${BoBadgeVariant.green}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Dark" variant="${BoBadgeVariant.black}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Purple" variant="${BoBadgeVariant.purple}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge label="Teal" variant="${BoBadgeVariant.teal}" type=${BoBadgeType.pill} class="m-1"/>
			</div>
			<h1 class="my-2 dark:text-white">Outline</h1>
			<div class="flex flex-1">
				<BoBadge label="Primary" variant="${BoBadgeVariant.blue}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Secondary" variant="${BoBadgeVariant.gray}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Danger" variant="${BoBadgeVariant.red}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Warning" variant="${BoBadgeVariant.yellow}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Success" variant="${BoBadgeVariant.green}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Dark" variant="${BoBadgeVariant.black}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Purple" variant="${BoBadgeVariant.purple}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge label="Teal" variant="${BoBadgeVariant.teal}" type=${BoBadgeType.outline} class="m-1"/>
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
			icon: Icon.check,
			prefix: true,
			suffix: false,
			circle: false,
		},
	},
};

export const WithSuffixIcon: Story = {
	args: {
		label: 'Badge',
		icon: {
			icon: Icon.check,
			suffix: true,
			prefix: false,
			circle: false,
		},
	},
};

export const IconOnly: Story = {
	args: {
		icon: {
			icon: Icon.check,
			prefix: false,
			suffix: false,
			circle: false,
		},
	},
};

export const IconOnlyCircle: Story = {
	args: {
		label: undefined,
		icon: {
			circle: true,
			icon: Icon.check,
			prefix: false,
			suffix: false,
		},
	},
};
