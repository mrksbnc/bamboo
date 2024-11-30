import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import BoAvatar from '../BoAvatar.vue';
import {
	BoAvatarShape,
	BoAvatarSize,
	BoAvatarType,
} from '../bo_avatar.contant';
import ImageAvatar from './img_avatar.png';

const meta = {
	title: 'Components/bo-avatar',
	component: BoAvatar,
	argTypes: {
		initialsData: {
			description: 'The data for the avatar with a property for the initials',
			control: { type: 'object' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		imageData: {
			description: 'The data for the avatar with a property for the image',
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
					detail: StorybookUtils.stringEnumFormatter(
						BoAvatarType,
						'BoAvatarType',
					),
				},
			},
			defaultValue: BoAvatarType.unknown,
		},
		size: {
			description: 'The size of the avatar',
			control: { type: 'select' },
			options: Object.values(BoAvatarSize),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoAvatarSize',
					detail: StorybookUtils.stringEnumFormatter(
						BoAvatarSize,
						'BoAvatarSize',
					),
				},
			},
			defaultValue: BoAvatarSize.default,
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
					detail: StorybookUtils.stringEnumFormatter(
						BoAvatarShape,
						'BoAvatarShape',
					),
				},
			},
			defaultValue: BoAvatarShape.rounded,
		},
		colorHex: {
			description:
				'A hex color string used to set the background color of the avatar',
			control: { type: 'color' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		fontColorHex: {
			description:
				'The color of the font in hex format if it requires a customisation',
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
} satisfies Meta<typeof BoAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		type: BoAvatarType.initials,
		initialsData: {
			initials: 'BO',
		},
	},
};

export const Image: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-avatar :type="type" :image-data="imageData"/>
             </div>
		`,
	}),
	args: {
		type: BoAvatarType.image,
		imageData: {
			src: ImageAvatar,
			alt: 'avatar',
		},
	},
};

export const Initials: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
				<bo-avatar :type="type" :initials-data="initialsData"/>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		initialsData: {
			initials: 'BO',
		},
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			const sizes = Object.values(BoAvatarSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex gap-4"> 
				<span v-for="size in sizes" :key="size" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-avatar :type="type" :initials-data="initialsData" :size="size"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		initialsData: {
			initials: 'BO',
		},
	},
};

export const Shapes: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			const shapes = Object.values(BoAvatarShape);
			return { shapes, ...args };
		},
		template: `
			<div class="flex gap-4"> 
				<span v-for="shape in shapes" :key="shape" class="flex flex-col justify-center items-center gap-2 border border-gray-300 rounded-lg p-2">
					<bo-avatar :type="type" :initials-data="initialsData" :shape="shape"/>
					<span class="text-small text-gray-500 font-medium">{{ shape }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		initialsData: {
			initials: 'BO',
		},
	},
};

export const Clickable: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
				<bo-avatar :type="type" :initials-data="initialsData" :clickable="clickable"/>
			</div>
		`,
	}),
	args: {
		type: BoAvatarType.initials,
		initialsData: {
			initials: 'BO',
		},
		clickable: true,
	},
};

export const WithDefaultImage: Story = {
	render: (args) => ({
		components: { BoAvatar },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-avatar :with-default-image="withDefaultImage"/>
             </div>
		`,
	}),
	args: {
		withDefaultImage: true,
	},
};
