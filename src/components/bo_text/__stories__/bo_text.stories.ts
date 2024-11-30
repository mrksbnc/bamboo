import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoText,
	BoTextColor,
	BoTextWhiteSpace,
} from '@/components/bo_text';
import { BoColor } from '@/data';
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
		cssClass: {
			description: 'The CSS class to be applied to the text',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		fontFamily: {
			description: 'The font family of the text',
			control: { type: 'select' },
			options: Object.values(BoFontFamily),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoFontFamily',
					detail: StorybookUtils.stringEnumFormatter(
						BoFontFamily,
						'BoFontFamily',
					),
				},
			},
			defaultValue: BoFontFamily.inter,
		},
		whiteSpace: {
			description: 'The white space of the text',
			control: { type: 'select' },
			options: Object.values(BoTextWhiteSpace),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoTextWhiteSpace',
					detail: StorybookUtils.stringEnumFormatter(
						BoTextWhiteSpace,
						'BoTextWhiteSpace',
					),
				},
			},
			defaultValue: BoTextWhiteSpace.nowrap,
		},
		color: {
			description: 'The color of the text',
			control: { type: 'select' },
			options: Object.values(BoTextColor),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoTextColor',
					detail: StorybookUtils.stringEnumFormatter(
						BoTextColor,
						'BoTextColor',
					),
				},
			},
			defaultValue: BoTextColor.current,
		},
		customColor: {
			description: 'The custom color of the text',
			control: { type: 'color' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		clickable: {
			description: 'Whether the text is clickable',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
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
			const sizes = Object.values(BoFontSize);
			const sizeNames = Object.keys(BoFontSize);
			const sizeStr = [
				'10px - 0.625rem',
				'12px - 0.75rem',
				'14px - 0.875rem',
				'16px - 1rem',
				'24px - 1.5rem',
				'32px - 2rem',
				'40px - 2.5rem',
				'48px - 3rem',
				'56px - 3.5rem',
				'64px - 4rem',
				'72px - 4.5rem',
				'96px - 6rem',
			];

			return { sizes, sizeStr, sizeNames, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="(size, index) in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-text :text="text" :size="size" class="m-1"/>
					<span class="text-overline text-small text-gray-500 font-medium">{{ sizeStr[index] }} - {{ sizeNames[index] }}</span>
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
					<bo-text :text="text" :weight="weight[0]" class="m-1"/>
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
					<bo-text :text="text" :fontFamily="fontFamily[0]" class="m-1"/>
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
					<bo-text :text="text" :whiteSpace="whiteSpace[0]" class="m-1 w-[150px]"/> 
					<span class="text-overline text-gray-500 font-medium text-small">{{ whiteSpace[0] }} - {{ whiteSpace[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};

export const Colors: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			const colors = [
				[BoTextColor.current, 'current'],
				[BoTextColor.inherit, 'inherit'],
				[BoTextColor.success, 'success'],
				[BoTextColor.warning, 'warning'],
				[BoTextColor.danger, 'danger'],
				[BoTextColor.disabled, 'disabled'],
				[BoTextColor.info, 'info'],
			];

			return { colors, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="color in colors" :key="color" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-text :text="text" :color="color[0]" class="m-1"/>
					<span class="text-overline text-gray-500 font-medium text-small">{{ color[0] }} - {{ color[1] }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};

export const CustomColor: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			return { ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<bo-text :text="text" :custom-color="customColor" class="m-1"/>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		customColor: BoColor.purple_400,
	},
};

export const Clickable: Story = {
	render: (args) => ({
		components: { BoText },
		setup() {
			return { ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<bo-text :text="text" :clickable="clickable" class="m-1"/>
			</div>
		`,
	}),
	args: {
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		clickable: true,
	},
};
