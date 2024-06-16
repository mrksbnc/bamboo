import { Icon } from '@/components/bo_icon';
import {
	BoIconButton,
	BoIconButtonShape,
	BoIconButtonStyle,
	BoIconButtonVariant,
} from '@/components/bo_icon_button';
import { BoSize } from '@/global';
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
					summary: 'BoIconButtonVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoIconButtonVariant,
						'BoIconButtonVariant',
					),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoIconButtonVariant),
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
		style: {
			description: 'The style of the icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoIconButtonStyle',
					detail: StorybookUtils.stringEnumFormatter(
						BoIconButtonStyle,
						'BoIconButtonStyle',
					),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoIconButtonStyle),
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
		variant: BoIconButtonVariant.primary,
		shape: BoIconButtonShape.default,
		style: BoIconButtonStyle.default,
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
			const variants = Object.values(BoIconButtonVariant);
			return { variants, ...args };
		},
		template: `
			<div class="grid grid-cols-8 gap-2">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoIconButton :icon="icon" :variant="variant" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ variant }}</span>
					
				</span>
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

export const Styles: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const styles = Object.values(BoIconButtonStyle);
			return { styles, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="style in styles" :key="style" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
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
			const variants = Object.values(BoIconButtonVariant);
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

export const Links: Story = {
	render: (args) => ({
		components: { BoIconButton },
		setup() {
			const variants = Object.values(BoIconButtonVariant).filter((v) =>
				v.includes('link'),
			);

			return { variants, ...args };
		},
		template: `
			<h3 class="my-4">Links</h3>
			<div class="flex flex-row gap-2">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2 dark:border-gray-700">
					<BoIconButton :icon="icon" :variant="variant" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ variant }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};
