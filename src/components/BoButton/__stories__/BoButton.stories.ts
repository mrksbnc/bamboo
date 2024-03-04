import { BoButtonVariant } from '@/components';
import { BoButton, BoButtonType } from '@/components/BoButton';
import { BoSize } from '@/enums';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Button/BoButton',
	component: BoButton,
	tags: ['autodocs'],
	argTypes: {
		label: {
			type: 'string',
			description: 'The label of the button',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		variant: {
			type: 'string',
			options: Object.values(BoButtonVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: BoButtonVariant.primary,
		},
		type: {
			type: 'string',
			options: Object.values(BoButtonType),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: BoButtonType.default,
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
		size: {
			type: 'string',
			options: Object.values(BoSize),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: BoSize.default,
		},
		prefixIcon: {
			type: 'string',
			description: 'The icon to be displayed before the label',
			control: { type: 'text' },
			defaultValue: null,
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		suffixIcon: {
			type: 'string',
			description: 'The icon to be displayed after the label',
			control: { type: 'text' },
			defaultValue: null,
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
	},
	args: {
		variant: BoButtonVariant.primary,
		label: 'Label',
		size: BoSize.default,
		disabled: false,
		type: BoButtonType.default,
	},
} satisfies Meta<typeof BoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		variant: BoButtonVariant.primary,
		label: 'Label',
		size: BoSize.default,
		disabled: false,
		type: BoButtonType.default,
	},
};

export const Sizes = {
	render: () => ({
		components: { BoButton },
		template: `
			<div>
				<BoButton label="Extra small" size="${BoSize.extra_small}" style="margin: 5px;"/>
				<BoButton label="Small" size="${BoSize.small}" style="margin: 5px;"/>
				<BoButton label="Default" size="${BoSize.default}" style="margin: 5px;"/>
				<BoButton label="Large" size="${BoSize.large}" style="margin: 5px;"/>
				<BoButton label="Extra large" size="${BoSize.extra_large}" />
			</div>
		`,
	}),
};

export const Variants = {
	render: () => ({
		components: { BoButton },
		template: `
			<div>
				<BoButton label="Primary" variant="${BoButtonVariant.primary}" style="margin: 5px;"/>
				<BoButton label="Secondary" variant="${BoButtonVariant.secondary}" style="margin: 5px;"/>
				<BoButton label="Alternative" variant="${BoButtonVariant.alternative}" style="margin: 5px;"/>
				<BoButton label="Danger" variant="${BoButtonVariant.danger}" style="margin: 5px;"/>
				<BoButton label="Warning" variant="${BoButtonVariant.warning}" style="margin: 5px;"/>
				<BoButton label="Success" variant="${BoButtonVariant.success}" style="margin: 5px;"/>
				<BoButton label="Light" variant="${BoButtonVariant.light}" style="margin: 5px;"/>
				<BoButton label="Dark" variant="${BoButtonVariant.dark}" style="margin: 5px;"/>
				<BoButton label="Link" variant="${BoButtonVariant.link}" style="margin: 5px;"/>
			</div>
			<div>
				<BoButton label="Primary" variant="${BoButtonVariant.primary}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Alternative" variant="${BoButtonVariant.alternative}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Danger" variant="${BoButtonVariant.danger}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Warning" variant="${BoButtonVariant.warning}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Success" variant="${BoButtonVariant.success}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Light" variant="${BoButtonVariant.light}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Dark" variant="${BoButtonVariant.dark}" type=${BoButtonType.pill} style="margin: 5px;"/>
				<BoButton label="Link" variant="${BoButtonVariant.link}" type=${BoButtonType.pill} style="margin: 5px;"/>
			</div>
			<div>
				<BoButton label="Primary" variant="${BoButtonVariant.primary}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Alternative" variant="${BoButtonVariant.alternative}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Danger" variant="${BoButtonVariant.danger}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Warning" variant="${BoButtonVariant.warning}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Success" variant="${BoButtonVariant.success}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Light" variant="${BoButtonVariant.light}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Dark" variant="${BoButtonVariant.dark}" type=${BoButtonType.outline} style="margin: 5px;"/>
				<BoButton label="Link" variant="${BoButtonVariant.link}" type=${BoButtonType.outline} style="margin: 5px;"/>
			</div>
		`,
	}),
};
