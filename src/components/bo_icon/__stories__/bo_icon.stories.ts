import { BoIcon, Icon } from '@/components/bo_icon';
import { BoColor } from '@/shared';
import { BoSize } from '@/shared/bo_size';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-icon',
	component: BoIcon,
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
			control: {
				type: 'select',
			},
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
				defaultValue: {
					summary: BoSize.default,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(BoSize),
		},
		color: {
			description: 'The color of the icon in `hex` format',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			control: { type: 'color' },
		},
	},
} satisfies Meta<typeof BoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		icon: Icon.airplay,
		size: BoSize.default,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoIcon },
		setup() {
			const sizes = Object.values(BoSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-icon :icon="icon" :size="size" class="m-1"/>
					<span class="text-sm text-gray-500 font-medium">{{ size }}</span>

				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const Colors: Story = {
	render: (args) => ({
		components: { BoIcon },
		setup() {
			const colors = [];

			const getRandomColor = (): BoColor => {
				const colors = Object.values(BoColor);
				return colors[Math.floor(Math.random() * colors.length)];
			};

			for (let i = 0; i < 10; i++) {
				colors.push(getRandomColor());
			}

			return { colors, ...args };
		},
		template: `
			<div class="flex flex-row gap-2">
				<span v-for="color in colors" :key="color" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-icon :icon="icon" :color="color" class="m-1"/>
					<span class="text-sm text-gray-500 font-medium">{{ color }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const AllIcons: Story = {
	render: () => ({
		components: { BoIcon },
		setup() {
			const icons = Object.values(Icon);
			return { icons, Icon };
		},
		template: `
			<div class="grid grid-cols-6 gap-2">
				<span v-for="icon in icons" :key="icon" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-icon :icon="icon" size="${BoSize.large}" class="m-1"/>
						<span class="text-sm text-gray-500 font-medium">{{ icon }}</span>
					</span>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};
