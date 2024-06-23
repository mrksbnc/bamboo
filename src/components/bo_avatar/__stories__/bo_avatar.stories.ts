import { BoAvatar, BoAvatarType } from '@/components/bo_avatar';
import { BoSize } from '@/global';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-avatar',
	component: BoAvatar,
	argTypes: {
		size: {
			description: 'The size of the avatar',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoSize',
					detail: StorybookUtils.stringEnumFormatter(BoSize, 'BoSize'),
				},
			},
			control: { type: 'select' },
			options: Object.values(BoSize),
		},
		type: {
			description: 'The type of the avatar',
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
			control: { type: 'select' },
			options: Object.values(BoAvatarType),
		},
		text: {
			description:
				'Object containing the text to be displayed and the alt text',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarTextArgs',
					detail: StorybookUtils.stringEnumFormatter(
						BoAvatarType,
						'AvatarTextArgs',
					),
				},
			},
			control: { type: 'object' },
		},
		image: {
			description:
				'Object containing the image to be displayed and the alt text',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarImageArgs',
					detail: StorybookUtils.stringEnumFormatter(
						BoAvatarType,
						'AvatarImageArgs',
					),
				},
			},
			control: { type: 'object' },
		},
	},
} satisfies Meta<typeof BoAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		size: BoSize.default,
		type: BoAvatarType.image,
		image: {
			src: '@/assets/avatar.svg',
			alt: 'user-avatar',
		},
	},
};
