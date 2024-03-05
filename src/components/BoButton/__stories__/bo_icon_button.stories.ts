import { BoIconButton, BoIconButtonVariant } from '@/components/BoButton';
import { Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import { stringEnumFormatter } from '@/utils';
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
					detail: stringEnumFormatter(Icon, 'Icon'),
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
					detail: stringEnumFormatter(BoSize, 'BoSize'),
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
			options: Object.values(BoIconButtonVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoIconButtonVariant',
					detail: stringEnumFormatter(
						BoIconButtonVariant,
						'BoIconButtonVariant',
					),
				},
			},
			defaultValue: BoIconButtonVariant.primary,
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

export const Sizes: Story = {
	render: () => ({
		components: { BoIconButton },
		template: `
			<div style="display: flex; align-items: center;">
				<BoIconButton icon="${Icon.box}" size="${BoSize.extra_small}" variant="${BoIconButtonVariant.teal}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.small}" variant="${BoIconButtonVariant.teal}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.default}" variant="${BoIconButtonVariant.teal}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.large}" variant="${BoIconButtonVariant.teal}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" size="${BoSize.extra_large}" variant="${BoIconButtonVariant.teal}" />
			</div>
		`,
	}),
};

export const Variants: Story = {
	render: () => ({
		components: { BoIconButton },
		template: `
			<div style="display: flex; align-items: center;">
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.primary}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.secondary}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.alternative}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.danger}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.warning}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.success}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.dark}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.light}" style="margin: 5px;" />
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.purple}" style="margin: 5px;"/>
				<BoIconButton icon="${Icon.box}" variant="${BoIconButtonVariant.teal}" />
			</div>
		`,
	}),
};
