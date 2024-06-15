import { BoIcon, Icon } from '@/components/bo_icon';
import { BoSize } from '@/global';
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
	render: () => ({
		components: { BoIcon },
		template: `
			<div class="flex flex-row gap-2">
				<BoIcon icon="activity" size="${BoSize.extra_small}" class="m-1"/>
				<BoIcon icon="activity" size="${BoSize.small}" class="m-1"/>
				<BoIcon icon="activity" size="${BoSize.default}" class="m-1"/>
				<BoIcon icon="activity" size="${BoSize.large}" class="m-1"/>
				<BoIcon icon="activity" size="${BoSize.extra_large}" />
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};

export const Colors: Story = {
	render: () => ({
		components: { BoIcon },
		template: `
			<div class="flex flex-row gap-2">
				<BoIcon icon="activity" color="#000000" class="m-1"/>
				<BoIcon icon="activity" color="#234323" class="m-1"/>
				<BoIcon icon="activity" color="#ff0000" class="m-1"/>
				<BoIcon icon="activity" color="#00ff00" class="m-1"/>
				<BoIcon icon="activity" color="#0000ff" class="m-1"/>
			</div>
		`,
	}),
	args: {
		icon: Icon.activity,
	},
};
