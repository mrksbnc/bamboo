import { BoBadge, BoBadgeType } from '@/components/bo_badge';
import { Icon } from '@/components/bo_icon';
import { BoSize, BoVariant } from '@/global';
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
			defaultValue: BoVariant.primary,
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
		setup() {
			const variants = Object.values(BoVariant);
			return { variants, BoVariant };
		},
		template: `
			<div class="flex flex-row">
				<BoBadge v-for="variant in variants" :label="variant" :variant="variant" class="m-1"/>
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
		setup() {
			const shapes = Object.values(BoBadgeShape);
			const icon = Icon.alert_circle;
			return { shapes, BoBadgeShape, icon };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoBadge v-if="shape !== BoBadgeShape.circle" :label="shape" :shape="shape" class="m-1"/>
					<BoBadge v-else :prefix-icon="icon" :shape="shape" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ shape }}</span>
				</span>
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
			<div class="flex flex-row">
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
			<div class="flex flex-row">
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
			<div class="flex flex-row">
				<BoBadge prefixIcon="${Icon.alert_circle}" class="m-1"/>
			</div>
		`,
	}),
	args: {},
};
