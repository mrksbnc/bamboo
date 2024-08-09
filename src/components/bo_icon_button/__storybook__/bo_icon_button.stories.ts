import { Icon } from '@/components/bo_icon';
import {
	BoIconButton,
	BoIconButtonShape,
	BoIconButtonType,
} from '@/components/bo_icon_button';
import { BoSize, BoVariant } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-icon-button',
	component: BoIconButton,
	argTypes: {
		icon: {
			description: 'The name of the icon',
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'Icon',
					detail: StorybookUtils.stringEnumFormatter(Icon, 'Icon'),
				},
			},
			control: { type: 'select' },
			options: Object.values(Icon),
		},
		size: {
			description: 'The size of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSize',
					detail: StorybookUtils.stringEnumFormatter(BoSize, 'BoSize'),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoSize),
		},
		variant: {
			description: 'The variant of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoVariant',
					detail: StorybookUtils.stringEnumFormatter(BoVariant, 'BoVariant'),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoVariant),
		},
		shape: {
			description: 'The shape of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoIconButtonShape',
					detail: StorybookUtils.stringEnumFormatter(
						BoIconButtonShape,
						'BoIconButtonShape',
					),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoIconButtonShape),
		},
		type: {
			description: 'The style of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoIconButtonType',
					detail: StorybookUtils.stringEnumFormatter(
						BoIconButtonType,
						'BoIconButtonType',
					),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoIconButtonType),
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
		isLoading: {
			description: 'Whether the button is loading',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
	},
} satisfies Meta<typeof BoIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		icon: Icon.activity,
		size: BoSize.default,
		variant: BoVariant.primary,
		shape: BoIconButtonShape.default,
		style: BoIconButtonType.default,
		disabled: false,
		isLoading: false,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoIconButton :icon="icon" :size="size" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const Variants: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const variants = Object.values(BoVariant);
			return { variants, ...args, BoIconButtonType };
		},
		template: `
			<div class="flex flex-col gap-4">	
				<h1>Default</h1>
				<div class="flex flex-row gap-2">
					<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<BoIconButton :icon="icon" :variant="variant" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }}</span>	
					</span>
				</div>
				<h1>Outline</h1>
				<div class="flex flex-row gap-2">
					<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<BoIconButton :icon="icon" :variant="variant" :type="BoIconButtonType.outline" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }}</span>	
					</span>
				</div>
				<h1>Link</h1>
				<div class="flex flex-row gap-2">
					<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<BoIconButton :icon="icon" :variant="variant" :type="BoIconButtonType.link" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }}</span>	
					</span>
				</div>

			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const Shapes: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const shapes = Object.values(BoIconButtonShape);
			return { shapes, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoIconButton :icon="icon" :shape="shape" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ shape }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const Types: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const types = Object.values(BoIconButtonType);
			return { types, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="style in types" :key="style" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoIconButton :icon="icon" :style="style" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ style }}</span>
					
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const Disabled: Story = {
	render: (args) => {
		const disabled = true;
		return {
			components: { BoIconButton },
			setup() {
				return { disabled, ...args };
			},
			template: `
				<div class="flex flex-row gap-2">
					<span  class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<BoIconButton :icon="icon" :disabled="disabled" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">disabled</span>
					</span>
				</div>
			`,
		};
	},
	args: {
		disabled: true,
		icon: Icon.activity,
	},
};

export const IsLoading: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const isLoading = true;
			return { isLoading, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span  class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoIconButton :icon="icon" :isLoading="isLoading" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">loading</span>
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const AllVariantAndShapes: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const variants = Object.values(BoVariant);
			const shapes = Object.values(BoIconButtonShape);
			return { variants, shapes, ...args };
		},
		template: `
			<h3 class="my-4">All variants and shapes</h3>
			<div class="flex flex-row gap-2">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 dark:border-gray-700">
					<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 dark:border-gray-700">
						<BoIconButton :icon="icon" :variant="variant" :shape="shape" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }} {{ shape }}</span>
					</span>
				</span>
			</div>
			<h3 class="my-4">All variants and shapes with loading</h3>
			<div class="flex flex-row gap-2">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 dark:border-gray-700">
					<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 dark:border-gray-700">
						<BoIconButton :icon="icon" :variant="variant" :shape="shape" :isLoading="true" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }} {{ shape }}</span>
					</span>
				</span>
			</div>
			<h3 class="my-4">All variants and shapes with loading</h3>
			<div class="flex flex-row gap-2">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<BoIconButton :icon="icon" :variant="variant" :shape="shape" :isLoading="true" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }} {{ shape }}</span>
					</span>
				</span>
			</div>
			<h3 class="my-4">All variants and shapes with disabled</h3>
			<div class="flex flex-row gap-2">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<BoIconButton :icon="icon" :variant="variant" :shape="shape" :disabled="true" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }} {{ shape }}</span>
					</span>
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};
