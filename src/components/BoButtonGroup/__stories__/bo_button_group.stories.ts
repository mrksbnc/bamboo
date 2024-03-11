import { BoButtonGroupVariant, Icon } from '@/components';
import {
	BoButtonGroup,
	BoButtonGroupSize,
	type BoButtonGroupItem,
} from '@/components/BoButton';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const items: BoButtonGroupItem[] = [
	{
		id: '1',
		label: 'Label 1',
	},
	{
		id: '2',
		label: 'Label 2',
	},
	{
		id: '3',
		label: 'Label 3',
	},
];

const meta = {
	title: 'Button/bo-button-group',
	component: BoButtonGroup,
	tags: ['autodocs'],
	argTypes: {
		items: {
			description: 'The items to be displayed',
			table: {
				category: 'props',
				subcategory: 'required',
			},
			control: {
				type: 'object',
			},
		},
		variant: {
			options: Object.values(BoButtonGroupVariant),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonGroupVariant',
					detail: StorybookUtils.stringEnumFormatter(
						BoButtonGroupVariant,
						'BoButtonGroupVariant',
					),
				},
			},
			defaultValue: BoButtonGroupVariant.default,
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
			options: Object.values(BoButtonGroupSize),
			description: 'The variant of the button',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonGroupSize',
					detail: StorybookUtils.stringEnumFormatter(
						BoButtonGroupSize,
						'BoButtonGroupSize',
					),
				},
			},
			defaultValue: BoButtonGroupSize.default,
		},
	},
	args: {
		items,
		variant: BoButtonGroupVariant.default,
		size: BoButtonGroupSize.default,
		disabled: false,
	},
} satisfies Meta<typeof BoButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		items,
		variant: BoButtonGroupVariant.default,
		size: BoButtonGroupSize.default,
		disabled: false,
	},
};

export const Disabled: Story = {
	args: {
		items,
		variant: BoButtonGroupVariant.default,
		size: BoButtonGroupSize.default,
		disabled: true,
	},
};

export const Variants: Story = {
	render: () => ({
		components: { BoButtonGroup },
		template: `
			<div class="flex flex-col">
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${BoButtonGroupVariant.default}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${BoButtonGroupVariant.info}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${BoButtonGroupVariant.danger}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${BoButtonGroupVariant.warning}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${BoButtonGroupVariant.success}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${BoButtonGroupVariant.dark}" class="m-1"/>
			</div>
		`,
	}),
};

export const Sizes: Story = {
	render: () => ({
		components: { BoButtonGroup },
		template: `
			<div class="flex flex-col">
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="${BoButtonGroupSize.small}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="${BoButtonGroupSize.default}" class="m-1"/>
				<BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="${BoButtonGroupSize.large}" class="m-1"/>
			</div>
		`,
	}),
};

export const WithPrefixIcons: Story = {
	args: {
		variant: BoButtonGroupVariant.default,
		size: BoButtonGroupSize.default,
		disabled: false,
		items: [
			{
				id: '1',
				label: 'Label 1',
				prefixIcon: Icon.alert_circle,
			},
			{
				id: '2',
				label: 'Label 2',
				prefixIcon: Icon.alert_triangle,
			},
			{
				id: '3',
				label: 'Label 3',
				prefixIcon: Icon.alert_octagon,
			},
		],
	},
};

export const WithSuffixIcons: Story = {
	args: {
		variant: BoButtonGroupVariant.default,
		size: BoButtonGroupSize.default,
		disabled: false,
		items: [
			{
				id: '1',
				label: 'Label 1',
				suffixIcon: Icon.alert_circle,
			},
			{
				id: '2',
				label: 'Label 2',
				suffixIcon: Icon.alert_triangle,
			},
			{
				id: '3',
				label: 'Label 3',
				suffixIcon: Icon.alert_octagon,
			},
		],
	},
};
