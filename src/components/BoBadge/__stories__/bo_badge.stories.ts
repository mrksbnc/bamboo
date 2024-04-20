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
	// tags: ['autodocs'],
	argTypes: {
		value: {
			description: 'The value of the badge',
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
		prefix: {
			description: 'The prefix slot for the badge',
			table: {
				category: 'slots',
				type: {
					summary: 'VNode',
				},
			},
			control: {
				type: 'text',
			},
			defaultValue: undefined,
		},
		suffix: {
			description: 'The suffix slot for the badge',
			table: {
				category: 'slots',
				type: {
					summary: 'VNode',
				},
			},
			defaultValue: undefined,
		},
	},
} satisfies Meta<typeof BoBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 'Success',
		type: BoBadgeType.default,
		variant: BoBadgeVariant.green,
	},
};

export const Sizes: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="items-center flex">
				<BoBadge value="Default" size="${BoBadgeSize.default}" class="m-1"/>
				<BoBadge value="Large" size="${BoBadgeSize.large}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		value: 'Badge',
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<h1 class="my-2 dark:text-white">Default</h1>
			<div class="flex flex-1">
				<BoBadge value="Primary" variant="${BoBadgeVariant.blue}" class="m-1"/>
				<BoBadge value="Secondary" variant="${BoBadgeVariant.gray}" class="m-1"/>
				<BoBadge value="Danger" variant="${BoBadgeVariant.red}" class="m-1"/>
				<BoBadge value="Warning" variant="${BoBadgeVariant.yellow}" class="m-1"/>
				<BoBadge value="Success" variant="${BoBadgeVariant.green}" class="m-1"/>
				<BoBadge value="Dark" variant="${BoBadgeVariant.black}" class="m-1"/>
				<BoBadge value="Purple" variant="${BoBadgeVariant.purple}" class="m-1"/>
				<BoBadge value="Teal" variant="${BoBadgeVariant.teal}" class="m-1"/>
			</div>
			<h1 class="my-2 dark:text-white">Pill</h1>
			<div class="flex flex-1">
				<BoBadge value="Primary" variant="${BoBadgeVariant.blue}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Secondary" variant="${BoBadgeVariant.gray}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Danger" variant="${BoBadgeVariant.red}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Warning" variant="${BoBadgeVariant.yellow}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Success" variant="${BoBadgeVariant.green}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Dark" variant="${BoBadgeVariant.black}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Purple" variant="${BoBadgeVariant.purple}" type=${BoBadgeType.pill} class="m-1"/>
				<BoBadge value="Teal" variant="${BoBadgeVariant.teal}" type=${BoBadgeType.pill} class="m-1"/>
			</div>
			<h1 class="my-2 dark:text-white">Outline</h1>
			<div class="flex flex-1">
				<BoBadge value="Primary" variant="${BoBadgeVariant.blue}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Secondary" variant="${BoBadgeVariant.gray}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Danger" variant="${BoBadgeVariant.red}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Warning" variant="${BoBadgeVariant.yellow}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Success" variant="${BoBadgeVariant.green}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Dark" variant="${BoBadgeVariant.black}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Purple" variant="${BoBadgeVariant.purple}" type=${BoBadgeType.outline} class="m-1"/>
				<BoBadge value="Teal" variant="${BoBadgeVariant.teal}" type=${BoBadgeType.outline} class="m-1"/>
			</div>
		`,
	}),
	args: {
		value: 'Badge',
	},
};

export const WithPrefixIcon: Story = {
	args: {
		value: 'Badge',
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
		value: 'Badge',
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
		value: undefined,
		icon: {
			circle: true,
			icon: Icon.check,
			prefix: false,
			suffix: false,
		},
	},
};
