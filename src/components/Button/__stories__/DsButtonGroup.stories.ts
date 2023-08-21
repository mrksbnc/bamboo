import { DsIcon, Icon } from '@/components/Icon';
import type { Meta, StoryObj } from '@storybook/vue3';
import { DsButtonGroup, type ButtonGroupItem } from '..';

const items: ButtonGroupItem[] = [
	{
		id: 1,
		label: 'Button 1',
	},
	{
		id: 2,
		label: 'Button 2',
	},
	{
		id: 3,
		label: 'Button 3',
	},
];

const meta: Meta = {
	id: 'DsButtonGroup',
	title: 'Button/ds-button-group',
	component: DsButtonGroup,
	tags: ['autodocs'],
	argTypes: {
		items: {
			description: 'The items of the button group',
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'ButtonGroupItem[]',
					detail:
						'id: string; label: string; prefix?: Icon; suffix?: Icon; iconColor?: Color | string;',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: undefined,
			},
			defaultValue: items,
		},
		onSelect: {
			description: 'The event emitted when a button is selected',
			table: {
				category: 'events',
				subcategory: 'optional',
				type: {
					summary: '(item: ButtonGroupItem, index: number) => void',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			action: 'onSelect',
			control: {
				type: undefined,
			},
		},
	},
} satisfies Meta<typeof DsButtonGroup>;

export default meta;

type Story = StoryObj<typeof DsButtonGroup>;

export const Example: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButtonGroup, DsIcon },
		template: '<ds-button-group v-bind="args" />',
		setup() {
			return { args };
		},
	}),
	args: {
		items: [
			{
				id: 1,
				label: 'Button 1',
			},
			{
				id: 2,
				label: 'Button 2',
			},
			{
				id: 2,
				label: 'Button 3',
			},
		],
		selected: 1,
	},
};

export const Prefix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButtonGroup, DsIcon },
		template: '<ds-button-group v-bind="args">',
		setup() {
			return { args };
		},
	}),
	args: {
		items: [
			{
				id: 1,
				label: 'Button 1',
				prefix: Icon.check,
			},
			{
				id: 2,
				label: 'Button 2',
				prefix: Icon.activity,
			},
			{
				id: 2,
				label: 'Button 3',
				prefix: Icon.anchor,
			},
		],
		selected: 1,
	},
};

export const Suffix: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		props: Object.keys(argTypes),
		components: { DsButtonGroup },
		template: '<ds-button-group v-bind="args">',
		setup() {
			return { args };
		},
	}),
	args: {
		items: [
			{
				id: 1,
				label: 'Button 1',
				suffix: Icon.check,
			},
			{
				id: 2,
				label: 'Button 2',
				suffix: Icon.activity,
			},
			{
				id: 2,
				label: 'Button 3',
				suffix: Icon.anchor,
			},
		],
		selected: 1,
	},
};
