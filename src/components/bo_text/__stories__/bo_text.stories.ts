import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-text',
	component: BoText,
	argTypes: {
		text: {
			description: 'The text to be displayed',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		size: {
			description: 'The size of the text',
			control: { type: 'select' },
			options: Object.values(BoFontSize),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoFontSize',
					detail: StorybookUtils.stringEnumFormatter(BoFontSize, 'BoFontSize'),
				},
			},
			defaultValue: BoFontSize.default,
		},
		weight: {
			description: 'The weight of the text',
			control: { type: 'select' },
			options: Object.values(BoFontWeight),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoFontWeight',
					detail: StorybookUtils.stringEnumFormatter(
						BoFontWeight,
						'BoFontWeight',
					),
				},
			},
			defaultValue: BoFontWeight.regular,
		},
	},
} satisfies Meta<typeof BoText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		text: 'Text',
		size: BoFontSize.default,
		weight: BoFontWeight.regular,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			const sizes = [
				[BoFontSize.overline, '12px'],
				[BoFontSize.caption, '16px'],
				[BoFontSize.default, '20px'],
				[BoFontSize.body, '24px'],
				[BoFontSize.h6, '32px'],
				[BoFontSize.h5, '40px'],
				[BoFontSize.h4, '48px'],
				[BoFontSize.h3, '56px'],
				[BoFontSize.h2, '64px'],
				[BoFontSize.h1, '96px'],
			];

			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-col gap-4 dark:bg-gray-800 p-2">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoText :text="text" :size="size[0]" class="m-1"/>
					<span class="text-overline text-gray-500 font-medium">{{ size[0] }} - {{ size[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Text',
	},
};

export const Weights: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			const weights = [
				[BoFontWeight.light, 'light'],
				[BoFontWeight.regular, 'regular'],
				[BoFontWeight.medium, 'medium'],
				[BoFontWeight.bold, 'bold'],
			];

			return { weights, ...args };
		},
		template: `
			<div class="flex flex-col gap-4 dark:bg-gray-800 p-2">
				<span v-for="weight in weights" :key="weight" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoText :text="text" :weight="weight[0]" class="m-1"/>
					<span class="text-overline text-gray-500 font-medium">{{ weight[0] }} - {{ weight[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Text',
	},
};
