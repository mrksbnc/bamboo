import { BoIcon, Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { StorybookUtils } from '@/utils/index';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Icon/bo-icon',
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

export const Default: Story = {
	args: {
		icon: Icon.airplay,
		size: BoSize.default,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		setup() {
			return { args };
		},
		components: { BoIcon },
		template: `
			<div style="display: flex; align-items: center;">
				<BoIcon icon="${Icon.box}" size="${BoSize.extra_small}" class="m-1"/>
				<BoIcon icon="${Icon.box}" size="${BoSize.small}" class="m-1"/>
				<BoIcon icon="${Icon.box}" size="${BoSize.default}" class="m-1"/>
				<BoIcon icon="${Icon.box}" size="${BoSize.large}" class="m-1"/>
				<BoIcon icon="${Icon.box}" size="${BoSize.extra_large}" />
			</div>
		`,
	}),
	args: {
		icon: Icon.airplay,
		size: BoSize.default,
	},
};

export const Colors: Story = {
	render: (args) => ({
		components: { BoIcon },
		setup() {
			return { args };
		},
		template: `
			<div style="display: flex; align-items: center; background-color: #777777; padding: 1rem;">
				<BoIcon :icon="args.icon" :size="args.size" color="#000000" class="m-1"/>
				<BoIcon :icon="args.icon" :size="args.size" color="#ffffff" class="m-1"/>
				<BoIcon :icon="args.icon" :size="args.size" color="#ff0000" class="m-1"/>
				<BoIcon :icon="args.icon" :size="args.size" color="#00ff00" class="m-1"/>
				<BoIcon :icon="args.icon" :size="args.size" color="#0000ff" class="m-1"/>	
			</div>
			`,
	}),
	args: {
		icon: Icon.airplay,
		size: BoSize.default,
	},
};

export const AllIcons: Story = {
	render: (args) => ({
		components: { BoIcon },
		setup() {
			const icons = Object.values(Icon).filter((icon) => icon !== Icon.none);

			return { args, icons };
		},
		template: `
			<div style="display: grid;  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
				<span v-for="icon in icons" :key="icon">
					<BoIcon :icon="icon" :size="args.size" color="#000000" class="m-1"/>
				</span>
			</div>
			`,
	}),
	args: {
		icon: Icon.airplay,
		size: BoSize.default,
	},
};
