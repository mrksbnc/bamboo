import { BoAvatar, BoAvatarShape, BoAvatarType } from '@/components/bo_avatar'
import { BoSize } from '@/data/bo_size.constant'
import { StorybookUtils } from '@/utils'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
	title: 'Components/bo-avatar',
	component: BoAvatar,
	argTypes: {
		data: {
			description: 'The data for the avatar with a property for the initials',
			control: { type: 'object' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		type: {
			description: 'The type of the avatar (image, initials, unknown)',
			control: { type: 'select' },
			options: Object.values(BoAvatarType),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoAvatarType',
					detail: StorybookUtils.stringEnumFormatter(BoAvatarType, 'BoAvatarType'),
				},
			},
		},
		size: {
			description: 'The size of the avatar',
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
			description: 'The shape of the avatar',
			control: { type: 'select' },
			options: Object.values(BoAvatarShape),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoAvatarShape',
					detail: StorybookUtils.stringEnumFormatter(BoAvatarShape, 'BoAvatarShape'),
				},
			},
			defaultValue: BoAvatarShape.rounded,
		},
		colorHex: {
			description: 'A hex color string used to set the background color of the avatar',
			control: { type: 'color' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		fontColorHex: {
			description: 'The color of the font in hex format if it requires a customisation',
			control: { type: 'color' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		clickable: {
			description: 'Whether the avatar is clickable',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		withDefaultImage: {
			description: 'Whether to use the default image without any other props',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
	},
} satisfies Meta<typeof BoAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
	args: {
		type: BoAvatarType.initials,
		data: {
			label: 'BO',
		},
	},
}

export const Image: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args }
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-avatar :type="type" :image-data="imageData"/>
             </div>
		`,
	}),
	args: {
		type: BoAvatarType.image,
		data: {
			src: new URL('./img_avatar.png', import.meta.url).href,
			alt: 'avatar',
		},
	},
}

export const Initials: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args }
		},
		template: `
            <div class="flex flex-col gap-4">
				<bo-avatar :type="type" :initials-data="data"/>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		data: {
			label: 'BO',
		},
	},
}

export const Sizes: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			const sizes = Object.values(BoSize)
			return { sizes, ...args }
		},
		template: `
			<div class="flex gap-4">
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-avatar :type="type" :initials-data="data" :size="size"/>
					<span class="text-sm text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		data: {
			label: 'BO',
		},
	},
}

export const Shapes: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			const shapes = Object.values(BoAvatarShape)
			return { shapes, ...args }
		},
		template: `
			<div class="flex gap-4">
				<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-avatar :type="type" :initials-data="data" :shape="shape"/>
					<span class="text-sm text-gray-500 font-medium">{{ shape }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		data: {
			label: 'BO',
		},
	},
}

export const Clickable: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args }
		},
		template: `
            <div class="flex flex-col gap-4">
				<bo-avatar :type="type" :initials-data="data" :clickable="clickable"/>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		data: {
			label: 'BO',
		},
		clickable: true,
	},
}

export const WithDefaultImage: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args }
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-avatar :with-default-image="withDefaultImage"/>
             </div>
		`,
	}),
	args: {
		data: {},
		withDefaultImage: true,
	},
}
