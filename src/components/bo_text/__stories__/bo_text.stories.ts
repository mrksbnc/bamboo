import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoText,
	BoTextWhiteSpace,
} from '@/components/bo_text';
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
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		size: BoFontSize.default,
		weight: BoFontWeight.regular,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			const sizes = [
				[BoFontSize.extra_small, '10px'],
				[BoFontSize.small, '12px'],
				[BoFontSize.default, '14px'],
				[BoFontSize.body, '16px'],
				[BoFontSize.title, '32px'],
				[BoFontSize.h6, '40px'],
				[BoFontSize.h5, '48px'],
				[BoFontSize.h4, '56px'],
				[BoFontSize.h3, '64px'],
				[BoFontSize.h2, '72px'],
				[BoFontSize.h1, '96px'],
			];

			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoText :text="text" :size="size[0]" class="m-1"/>
					<span class="text-overline text-small text-gray-500 font-medium">{{ size[0] }} - {{ size[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum',
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
				[BoFontWeight.semibold, 'semibold'],
				[BoFontWeight.bold, 'bold'],
			];

			return { weights, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="weight in weights" :key="weight" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoText :text="text" :weight="weight[0]" class="m-1"/>
					<span class="text-overline text-gray-500 font-medium text-small">{{ weight[0] }} - {{ weight[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};

export const FontFamilies: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			const fontFamilies = [
				[BoFontFamily.inter, 'Inter'],
				[BoFontFamily.graphik, 'Graphik'],
				[BoFontFamily.sans, 'Sans'],
				[BoFontFamily.mono, 'Mono'],
				[BoFontFamily.serif, 'Serif'],
			];

			return { fontFamilies, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="fontFamily in fontFamilies" :key="fontFamily" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoText :text="text" :fontFamily="fontFamily[0]" class="m-1"/>
					<span class="text-overline text-gray-500 font-medium text-small">{{ fontFamily[0] }} - {{ fontFamily[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};

export const WhiteSpace: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			const whiteSpaces = [
				[BoTextWhiteSpace.normal, 'normal'],
				[BoTextWhiteSpace.nowrap, 'nowrap'],
				[BoTextWhiteSpace.pre, 'pre'],
				[BoTextWhiteSpace.pre_line, 'pre-line'],
				[BoTextWhiteSpace.pre_wrap, 'pre-wrap'],
				[BoTextWhiteSpace.break_spaces, 'break-spaces'],
			];

			return { whiteSpaces, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="whiteSpace in whiteSpaces" :key="whiteSpace" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<BoText :text="text" :whiteSpace="whiteSpace[0]" class="m-1 w-[150px]"/> 
					<span class="text-overline text-gray-500 font-medium text-small">{{ whiteSpace[0] }} - {{ whiteSpace[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};
