import {
	BoButtonVariant,
	BoIconButton,
	BoIconButtonType,
} from '@/components/BoButton';
import { Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Button/bo-icon-button',
	component: BoIconButton,
	tags: ['autodocs'],
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
		variant: {
			options: Object.values(BoButtonVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoButtonVariant,
						'BoButtonVariant',
					),
				},
			},
			defaultValue: BoButtonVariant.primary,
		},
		type: {
			options: Object.values(BoIconButtonType),
			description: 'The type of the button',
			control: { type: 'select' },
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
			defaultValue: BoIconButtonType.default,
		},
	},
	args: {
		icon: Icon.airplay,
	},
} satisfies Meta<typeof BoIconButton>;

export default meta;
type Story = StoryObj<typeof BoIconButton>;

export const Example: Story = {
	args: {
		icon: Icon.airplay,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Sizes: Story = {
	render: () => ({
		components: { BoIconButton },
		template: `
			<div style="display: flex; align-items: center;">
				<BoIconButton icon="${Icon.box}" size="${BoSize.extra_small}" variant="${BoButtonVariant.teal}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.small}" variant="${BoButtonVariant.teal}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.default}" variant="${BoButtonVariant.teal}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.large}" variant="${BoButtonVariant.teal}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.extra_large}" variant="${BoButtonVariant.teal}" />
			</div>
		`,
	}),
};

export const Variants: Story = {
	render: () => ({
		components: { BoIconButton },
		template: `
			<h1 class="my-2 dark:text-white">Default</h1>
			<div style="display: flex; align-items: center;">
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.primary}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.secondary}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.danger}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.warning}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.success}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.dark}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.purple}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.teal}" />
			</div>
			<h1 class="my-2 dark:text-white">Round</h1>
			<div style="display: flex; align-items: center;">
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.primary}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.secondary}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.danger}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.warning}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.success}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.dark}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.purple}" type="${BoIconButtonType.round}" class="m-1"/>
				<BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.teal}" type="${BoIconButtonType.round}" />
			</div>
		`,
	}),
};
