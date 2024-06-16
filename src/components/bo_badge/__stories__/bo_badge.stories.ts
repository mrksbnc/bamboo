import { BoBadge, BoBadgeType, BoBadgeVariant } from '@/components/bo_badge';
import { Icon } from '@/components/bo_icon';
import { BoSize } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import { BoBadgeShape } from '../bo_badge';

const meta = {
	title: 'Components/bo-badge',
	component: BoBadge,
	argTypes: {
		label: {
			description: 'The label of the badge',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		type: {
			description: 'The type of the badge',
			control: { type: 'select' },
			options: Object.values(BoBadgeType),
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
			defaultValue: BoBadgeType.default,
		},
		size: {
			description: 'The size of the badge',
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
			defaultValue: BoBadgeVariant.primary,
		},
		shape: {
			description: 'The shape of the badge',
			control: { type: 'select' },
			options: Object.values(BoBadgeShape),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoBadgeShape',
					detail: StorybookUtils.stringEnumFormatter(
						BoBadgeShape,
						'BoBadgeShape',
					),
				},
			},
			defaultValue: BoBadgeShape.default,
		},
		variant: {
			description: 'The variant of the badge',
			control: { type: 'select' },
			options: Object.values(BoBadgeVariant),
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
			defaultValue: BoBadgeVariant.primary,
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
			<div class="flex flex-row">
				<BoBadge label="Small" size="${BoSize.small}" class="m-1"/>
				<BoBadge label="Default" size="${BoSize.default}" class="m-1"/>
				<BoBadge label="Large" size="${BoSize.large}" class="m-1"/>
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
			<div class="flex flex-row dark:bg-gray-800 p-2">
				<BoBadge label="Primary" variant="${BoBadgeVariant.primary}" class="m-1"/>
				<BoBadge label="Secondary" variant="${BoBadgeVariant.secondary}" class="m-1"/>
				<BoBadge label="Danger" variant="${BoBadgeVariant.danger}" class="m-1"/>
				<BoBadge label="Warning" variant="${BoBadgeVariant.warning}" class="m-1"/>
				<BoBadge label="Success" variant="${BoBadgeVariant.success}" class="m-1"/>
				<BoBadge label="Dark" variant="${BoBadgeVariant.dark}" class="m-1"/>
				<BoBadge label="Purple" variant="${BoBadgeVariant.purple}" class="m-1"/>
				<BoBadge label="Teal" variant="${BoBadgeVariant.teal}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const Shapes: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="flex flex-row dark:bg-gray-800 p-2">
				<BoBadge label="Default" shape="${BoBadgeShape.default}" class="m-1"/>
				<BoBadge label="Pill" shape="${BoBadgeShape.pill}" class="m-1"/>
				<BoBadge label="Flat" shape="${BoBadgeShape.flat}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const Types: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="flex flex-row dark:bg-gray-800 p-2">
				<BoBadge label="Default" type="${BoBadgeType.default}" class="m-1"/>
				<BoBadge label="Outline" type="${BoBadgeType.outline}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const Icons: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="flex flex-row dark:bg-gray-800 p-2">
				<BoBadge label="Default" prefixIcon="${Icon.alert_circle}" class="m-1"/>
				<BoBadge label="Outline" suffixIcon="${Icon.alert_circle}" class="m-1"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const IconOnly: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="flex flex-row dark:bg-gray-800 p-2">
				<BoBadge prefixIcon="${Icon.alert_circle}" class="m-1"/>
			</div>
		`,
	}),
	args: {},
};
