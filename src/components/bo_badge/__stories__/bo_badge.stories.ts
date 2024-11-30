import {
	BoBadge,
	BoBadgeShape,
	BoBadgeType,
	BoBadgeVariant,
} from '@/components/bo_badge';
import { Icon } from '@/components/bo_icon';
import { BoSize } from '@/data/bo_size.constant';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

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
			defaultValue: BoSize.default,
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
	render: (args) => ({
		components: { BoBadge },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-row gap-1">
                <span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 m-1">
                    <bo-badge :label="label" :size="size"/>
                    <span class="text-small text-gray-500 font-medium">{{ size }}</span>
                </span>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const SizesWithIcons: Story = {
	render: (args) => ({
		components: { BoBadge },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-row gap-1">
                <span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 m-1">
                    <bo-badge :label="label" :size="size" :prefix-icon="prefixIcon"/>
                    <span class="text-small text-gray-500 font-medium">{{ size }}</span>
                </span>
			</div>
            <div class="flex flex-row gap-1">
                <span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 m-1">
                    <bo-badge :label="label" :size="size" :suffix-icon="suffixIcon"/>
                    <span class="text-small text-gray-500 font-medium">{{ size }}</span>
                </span>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
		prefixIcon: Icon.alert_circle,
		suffixIcon: Icon.alert_circle,
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoBadge },
		template: `
			<div class="flex flex-row gap-1">
				<bo-badge label="Primary" variant="${BoBadgeVariant.primary}"/>
				<bo-badge label="Secondary" variant="${BoBadgeVariant.secondary}"/>
				<bo-badge label="Danger" variant="${BoBadgeVariant.danger}"/>
				<bo-badge label="Warning" variant="${BoBadgeVariant.warning}"/>
				<bo-badge label="Success" variant="${BoBadgeVariant.success}"/>
				<bo-badge label="Dark" variant="${BoBadgeVariant.dark}"/>
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
			<div class="flex flex-row gap-1">
				<bo-badge label="Default" shape="${BoBadgeShape.default}"/>
				<bo-badge label="Pill" shape="${BoBadgeShape.pill}"/>
				<bo-badge label="Flat" shape="${BoBadgeShape.flat}"/>
				<bo-badge prefixIcon="${Icon.alert_circle}" shape="${BoBadgeShape.circle}"/>
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
			<div class="flex flex-row gap-1">
				<bo-badge label="Default" type="${BoBadgeType.default}"/>
				<bo-badge label="Outline" type="${BoBadgeType.outline}"/>
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
			<div class="flex flex-row gap-1">
				<bo-badge label="Default" prefixIcon="${Icon.alert_circle}"/>
				<bo-badge label="Outline" suffixIcon="${Icon.alert_circle}" type="${BoBadgeType.outline}"/>
			</div>
		`,
	}),
	args: {
		label: 'Badge',
	},
};

export const IconOnly: Story = {
	render: (args) => ({
		components: { BoBadge },
		setup() {
			return { ...args };
		},
		template: `
			<div class="flex flex-row gap-1">
				<bo-badge :prefix-icon="prefixIcon" :type="type"/>
				<bo-badge :prefix-icon="prefixIcon" :type="type" :size="size" shape="${BoBadgeShape.circle}"/>
			</div>
		`,
	}),
	args: {
		prefixIcon: Icon.alert_circle,
		type: BoBadgeType.default,
	},
};
