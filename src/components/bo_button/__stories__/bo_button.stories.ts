import {
	BoButton,
	BoButtonShape,
	BoButtonVariant,
} from '@/components/bo_button'
import { Icon } from '@/components/bo_icon'
import { BoSize } from '@/data/bo_size.constant'
import { HtmlButtonType } from '@/global'
import { StorybookUtils } from '@/utils'
import type { StoryObj } from '@storybook/vue3'

const meta = {
	title: 'Components/bo-button',
	component: BoButton,
	argTypes: {
		label: {
			description: 'The label of the button',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		variant: {
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
			options: Object.values(BoButtonVariant),
			defaultValue: BoButtonVariant.primary,
		},
		disabled: {
			description: 'Whether the button is disabled',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		isLoading: {
			description: 'Whether the button is loading',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		type: {
			description: 'The type of the button (button, submit, reset)',
			control: { type: 'select' },
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			options: ['button', 'submit', 'reset'],
			defaultValue: 'button',
		},
		size: {
			description: 'The variant of the button',
			control: { type: 'select' },
			options: Object.values(BoSize),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSize',
					detail: StorybookUtils.stringEnumFormatter(BoSize, 'BoSize'),
				},
			},
			defaultValue: BoSize.default,
		},
		shape: {
			description: 'The shape of the button',
			control: { type: 'select' },
			options: Object.values(BoButtonShape),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoButtonShape',
					detail: StorybookUtils.stringEnumFormatter(
						BoButtonShape,
						'BoButtonShape',
					),
				},
			},
		},
		loaderType: {
			description: 'The type of the loader',
			control: { type: 'select' },
			options: ['spinner', 'pulse'],
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
					detail: 'The type of the loader (spinner or pulse)',
				},
			},
			defaultValue: 'spinner',
		},
		prefixIcon: {
			description: 'The icon to be displayed before the label',
			control: { type: 'text' },
			defaultValue: null,
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Icon',
					detail: StorybookUtils.stringEnumFormatter(Icon, 'Icon'),
				},
			},
			options: Object.values(Icon),
		},
		suffixIcon: {
			description: 'The icon to be displayed after the label',
			control: { type: 'text' },
			defaultValue: null,
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Icon',
					detail: StorybookUtils.stringEnumFormatter(Icon, 'Icon'),
				},
			},
			options: Object.values(Icon),
		},
		linkVariantWithShadow: {
			description: 'Whether the button should have a shadow when it is a link',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		label: 'Label',
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
		size: BoSize.default,
	},
}

export const Disabled: Story = {
	args: {
		label: 'Label',
		disabled: true,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
		size: BoSize.default,
	},
}

export const isLoading: Story = {
	args: {
		label: 'Label',
		isLoading: true,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
		size: BoSize.default,
	},
}

export const Sizes: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			const sizes = Object.values(BoSize)
			return { sizes, ...args }
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :label="label" :variant="variant" :type="type" :size="size" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const Shapes: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			const shapes = Object.values(BoButtonShape)
			return { shapes, ...args }
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :label="label" :variant="variant" :shape="shape" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ shape }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const Variants: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			const variants = Object.values(BoButtonVariant)
			return { variants, ...args }
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :label="label" :variant="variant" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ variant }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const ShapesAndVariants: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			const shapes = Object.values(BoButtonShape)
			const variants = Object.values(BoButtonVariant)
			return { shapes, variants, ...args }
		},
		template: `
			<div class="flex gap-4">
				<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
						<bo-button :label="label" :variant="variant" :shape="shape" :type="type" class="m-1"/>
						<span class="text-small text-gray-500 font-medium">{{ variant }} {{ shape }}</span>
					</span>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const WithPrefixIcon: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			return { ...args }
		},
		template: `
			<div class="flex flex-col gap-4 w">
				<span class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :label="label" :prefix-icon="prefixIcon" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">prefix-icon</span>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		prefixIcon: Icon.alert_circle,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const WithSuffixIcon: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			return { ...args }
		},
		template: `
			<div class="flex flex-col gap-4 w">
				<span class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :label="label" :suffix-icon="suffixIcon" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">suffix-icon</span>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		suffixIcon: Icon.alert_circle,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const IconOnlyButton: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			return { ...args }
		},
		template: `
			<div class="flex flex-col gap-4 w">
				<span class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :prefix-icon="prefixIcon" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">prefix-icon</span>
				</span>
			</div>
		`,
	}),
	args: {
		prefixIcon: Icon.alert_circle,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const IconOnlySizes: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			const sizes = Object.values(BoSize)
			return { sizes, ...args }
		},
		template: `
			<div class="flex flex-row gap-4">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :prefix-icon="prefixIcon" :size="size" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		prefixIcon: Icon.alert_circle,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const IconOnlyVariants: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			const variants = Object.values(BoButtonVariant)
			return { variants, ...args }
		},
		template: `
			<div class="flex flex-row gap-4">
				<span v-for="variant in variants" :key="variant" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :prefix-icon="prefixIcon" :variant="variant" :type="type" class="m-1"/>
					<span class="text-small text-gray-500 font-medium">{{ variant }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		prefixIcon: Icon.alert_circle,
		variant: BoButtonVariant.primary,
		type: HtmlButtonType.button,
	},
}

export const LinkVariantWithShadow: Story = {
	render: (args) => ({
		components: { BoButton },
		setup() {
			return { ...args }
		},
		template: `
			<div class="flex flex-col gap-4">
				<span class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-button :label="label" :variant="variant" :link-variant-with-shadow="linkVariantWithShadow" :type="type" class="m-1"/>
				</span>
			</div>
		`,
	}),
	args: {
		label: 'Label',
		linkVariantWithShadow: true,
		variant: BoButtonVariant.link,
		type: HtmlButtonType.button,
	},
}
