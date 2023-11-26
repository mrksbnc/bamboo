import {
	AvatarSize,
	AvatarType,
	AvatarVariant,
	BoAvatar,
} from '@/components/Avatar';
import type { Meta, StoryObj } from '@storybook/vue3';
import { stringEnumFormatter } from '@utils/index';

const meta = {
	title: 'Avatar/bo-avatar',
	component: BoAvatar,
	tags: ['autodocs'],
	argTypes: {
		src: {
			description:
				'The path to the img displayed in avatar in case the type is `Image`. If the type is `Image` but no `src` was provided a placeholder will be used',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			control: {
				type: 'text',
			},
		},
		initial: {
			description: 'The text to display in the avatar if the type is `Initial`',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			control: {
				type: 'text',
			},
		},
		type: {
			description: 'The type of the avatar (Image or initial)',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarType',
					detail: stringEnumFormatter(AvatarType, 'AvatarType'),
				},
				defaultValue: {
					summary: AvatarType.Image,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(AvatarType),
		},
		variant: {
			description: 'The variant of the avatar (rounded, base or flat)',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarVariant',
					detail: stringEnumFormatter(AvatarVariant, 'AvatarVariant'),
				},
				defaultValue: {
					summary: AvatarVariant.Rounded,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(AvatarVariant),
		},
		size: {
			description: 'The size of the avatar',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarSize',
					detail: stringEnumFormatter(AvatarSize, 'AvatarSize'),
				},
				defaultValue: {
					summary: AvatarSize.MD,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(AvatarSize),
		},
		indicatorProps: {
			description: 'Color and position of the indicator',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarIndicatorProps',
					detail: '{ color: string; position: AvatarIndicatorPosition; }',
				},
				defaultValue: {
					summary: null,
				},
			},
			control: {
				type: 'object',
			},
		},
		initialProps: {
			description: 'background and font color for the initial version',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'AvatarIndicatorProps',
					detail: '{ color: string; position: AvatarIndicatorPosition; }',
				},
				defaultValue: {
					summary: null,
				},
			},
			control: {
				type: 'object',
			},
		},
	},
} satisfies Meta<typeof BoAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {},
};

export const Rounded: Story = {
	args: {},
	render: () => ({
		components: { BoAvatar },
		template: `
		<div style="display: flex; flex-direction: row; gap: 10px;">
			<BoAvatar />
			<BoAvatar :indicator-props="{color:'var(--green-500)',position:'top'}" />
			<BoAvatar :indicator-props="{color:'var(--green-500)',position:'bottom'}" />
			<BoAvatar type="initial" initial="JK" />
			<BoAvatar
				initial="JK"
				type="initial"
				:indicator-props="{color:'var(--green-500)',position:'top'}"
			/>
			<BoAvatar
				initial="JK"
				type="initial"
				:indicator-props="{color:'var(--green-500)',position:'bottom'}"
			/>
		</div>
	`,
	}),
};

export const Base: Story = {
	args: {},
	render: () => ({
		components: { BoAvatar },
		template: `
		<div style="display: flex; flex-direction: row; gap: 10px;">
			<BoAvatar variant="base" />
			<BoAvatar
				variant="base"
				:indicator-props="{color:'var(--green-500)',position:'top'}"
			/>
			<BoAvatar
				variant="base"
				:indicator-props="{color:'var(--green-500)',position:'bottom'}"
			/>
			<BoAvatar variant="base" type="initial" initial="JK" />
			<BoAvatar
				variant="base"
				type="initial"
				initial="JK"
				:indicator-props="{color:'var(--green-500)',position:'top'}"
			/>
			<BoAvatar
				variant="base"
				type="initial"
				initial="JK"
				:indicator-props="{color:'var(--green-500)',position:'bottom'}"
			/>
		</div>
	`,
	}),
};

export const Flat: Story = {
	args: {},
	render: () => ({
		components: { BoAvatar },
		template: `
		<div style="display: flex; flex-direction: row; gap: 10px;">
			<BoAvatar variant="flat" />
			<BoAvatar
				variant="flat"
				:indicator-props="{color:'var(--green-500)',position:'top'}"
			/>
			<BoAvatar
				variant="flat"
				:indicator-props="{color:'var(--green-500)',position:'bottom'}"
			/>
			<BoAvatar variant="flat" type="initial" initial="JK" />
			<BoAvatar
				variant="flat"
				type="initial"
				initial="JK"
				:indicator-props="{color:'var(--green-500)',position:'top'}"
			/>
			<BoAvatar
				variant="flat"
				type="initial"
				initial="JK"
				:indicator-props="{color:'var(--green-500)',position:'bottom'}"
			/>
		</div>
	`,
	}),
};

export const MultiSize: Story = {
	args: {},
	render: () => ({
		components: { BoAvatar },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoAvatar size="xs" />
			<BoAvatar size="sm" />
			<BoAvatar size="md" />
			<BoAvatar size="lg" />
			<BoAvatar size="xl" />
		</div>
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
			<BoAvatar size="xs" variant="base"/>
			<BoAvatar size="sm" variant="base"/>
			<BoAvatar size="md" variant="base"/>
			<BoAvatar size="lg" variant="base"/>
			<BoAvatar size="xl" variant="base"/>
		</div>
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
		<BoAvatar size="xs" variant="flat"/>
		<BoAvatar size="sm" variant="flat"/>
		<BoAvatar size="md" variant="flat"/>
		<BoAvatar size="lg" variant="flat"/>
		<BoAvatar size="xl" variant="flat"/>
	</div>
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
			<BoAvatar size="xs" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="sm" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="md" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="lg" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="xl" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
		</div>
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
			<BoAvatar size="xs" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="sm" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="md" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="lg" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
			<BoAvatar size="xl" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
		</div>
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
		<BoAvatar size="xs" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
		<BoAvatar size="sm" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
		<BoAvatar size="md" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
		<BoAvatar size="lg" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
		<BoAvatar size="xl" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
	</div>
	`,
	}),
};

export const InitialsWithColor: Story = {
	args: {
		initial: 'JK',
		type: AvatarType.Initial,
		initialProps: {
			backgroundColor: 'var(--teal-600)',
			fontColor: 'var(--white)',
		},
	},
	render: () => ({
		components: { BoAvatar },
		template: `
		<div style="display: flex; flex-direction: row; gap: 10px;">
			<BoAvatar
    		initial="JK"
    		type="initial"
    		:initial-props="{backgroundColor:'var(--teal-600)',fontColor:'var(--white)'}"
  		/>
			<BoAvatar
				initial="JK"
				type="initial"
				variant="base"
				:initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
			/>
			<BoAvatar
			initial="JK"
			type="initial"
			variant="base"
			:initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
		/>
		</div>
		`,
	}),
};
