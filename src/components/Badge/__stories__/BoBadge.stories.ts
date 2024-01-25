import {
	BadgeForm,
	BadgeSize,
	BadgeType,
	BadgeVariant,
	BoBadge,
} from '@/components/Badge';
import { BoIcon } from '@/components/Icon';
import { stringEnumFormatter } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Badge/bo-badge',
	component: BoBadge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			description: 'The variant of the badge.',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BadgeVariant',
					detail: stringEnumFormatter(BadgeVariant, 'BadgeVariant'),
				},
				defaultValue: {
					summary: BadgeVariant.Default,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(BadgeVariant),
		},
		form: {
			description: 'The form of the badge.',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BadgeForm',
					detail: stringEnumFormatter(BadgeForm, 'BadgeForm'),
				},
				defaultValue: {
					summary: BadgeForm.Base,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(BadgeForm),
		},
		type: {
			description: 'The type of the badge.',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BadgeType',
					detail: stringEnumFormatter(BadgeType, 'BadgeType'),
				},
				defaultValue: {
					summary: BadgeType.Filled,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(BadgeType),
		},
		size: {
			description: 'The size of the badge',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BadgeSize',
					detail: stringEnumFormatter(BadgeSize, 'BadgeSize'),
				},
				defaultValue: {
					summary: BadgeSize.SM,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(BadgeSize),
		},
		label: {
			description: "The label of the badge if the `body` slot wasn't used",
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: 'text',
			},
		},
		prefix: {
			description: 'The prefix slot of the badge',
			table: {
				category: 'slots',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: 'text',
			},
		},
		body: {
			description: 'The body slot of the badge',
			table: {
				category: 'slots',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: 'text',
			},
		},
		suffix: {
			description: 'The suffix slot of the badge',
			table: {
				category: 'slots',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: undefined,
				},
			},
			control: {
				type: 'text',
			},
		},
	},
} satisfies Meta<typeof BoBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		variant: BadgeVariant.Default,
		size: BadgeSize.MD,
		label: 'Label',
		form: BadgeForm.Base,
	},
};

export const Filled: Story = {
	args: {},
	render: () => ({
		components: { BoBadge },
		template: `
		<div style="display: flex; flex-direction: column; gap: 20px;">
			Pill
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="Label" type="filled"/>
				<BoBadge variant="info" size="md" label="Label" type="filled"/>
				<BoBadge variant="tertiary" size="md" label="Label" type="filled"/>
				<BoBadge variant="success" size="md" label="Label" type="filled"/>
				<BoBadge variant="danger" size="md" label="Label" type="filled"/>
				<BoBadge variant="warning" size="md" label="Label" type="filled"/>
			</div>
			Circle
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="1" type="filled" form="circle"/>
				<BoBadge variant="info" size="md" label="2" type="filled" form="circle" />
				<BoBadge variant="tertiary" size="md" label="3" type="filled" form="circle"/>
				<BoBadge variant="success" size="md" label="4" type="filled" form="circle"/>
				<BoBadge variant="danger" size="md" label="5" type="filled" form="circle"/>
				<BoBadge variant="warning" size="md" label="6" type="filled" form="circle"/>
			</div>
			Base	
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="1" type="filled" form="base"/>
				<BoBadge variant="info" size="md" label="2" type="filled" form="base" />
				<BoBadge variant="tertiary" size="md" label="3" type="filled" form="base"/>
				<BoBadge variant="success" size="md" label="4" type="filled" form="base"/>
				<BoBadge variant="danger" size="md" label="5" type="filled" form="base"/>
				<BoBadge variant="warning" size="md" label="6" type="filled" form="base"/>
			</div>
			Flate	
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="1" type="filled" form="flat"/>
				<BoBadge variant="info" size="md" label="2" type="filled" form="flat" />
				<BoBadge variant="tertiary" size="md" label="3" type="filled" form="flat"/>
				<BoBadge variant="success" size="md" label="4" type="filled" form="flat"/>
				<BoBadge variant="danger" size="md" label="5" type="filled" form="flat"/>
				<BoBadge variant="warning" size="md" label="6" type="filled" form="flat"/>
			</div>
		</div>
	`,
	}),
};

export const Outline: Story = {
	args: {},
	render: () => ({
		components: { BoBadge },
		template: `
		<div style="display: flex; flex-direction: column; gap: 20px;">
			Pill
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="Label" type="outline"/>
				<BoBadge variant="info" size="md" label="Label" type="outline"/>
				<BoBadge variant="tertiary" size="md" label="Label" type="outline"/>
				<BoBadge variant="success" size="md" label="Label" type="outline"/>
				<BoBadge variant="danger" size="md" label="Label" type="outline"/>
				<BoBadge variant="warning" size="md" label="Label" type="outline"/>
			</div>
			Circle
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="1" type="outline" form="circle"/>
				<BoBadge variant="info" size="md" label="2" type="outline" form="circle" />
				<BoBadge variant="tertiary" size="md" label="3" type="outline" form="circle"/>
				<BoBadge variant="success" size="md" label="4" type="outline" form="circle"/>
				<BoBadge variant="danger" size="md" label="5" type="outline" form="circle"/>
				<BoBadge variant="warning" size="md" label="6" type="outline" form="circle"/>
			</div>
			Base	
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="1" type="outline" form="base"/>
				<BoBadge variant="info" size="md" label="2" type="outline" form="base" />
				<BoBadge variant="tertiary" size="md" label="3" type="outline" form="base"/>
				<BoBadge variant="success" size="md" label="4" type="outline" form="base"/>
				<BoBadge variant="danger" size="md" label="5" type="outline" form="base"/>
				<BoBadge variant="warning" size="md" label="6" type="outline" form="base"/>
			</div>
			Flate	
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
				<BoBadge variant="default" size="md" label="1" type="outline" form="flat"/>
				<BoBadge variant="info" size="md" label="2" type="outline" form="flat" />
				<BoBadge variant="tertiary" size="md" label="3" type="outline" form="flat"/>
				<BoBadge variant="success" size="md" label="4" type="outline" form="flat"/>
				<BoBadge variant="danger" size="md" label="5" type="outline" form="flat"/>
				<BoBadge variant="warning" size="md" label="6" type="outline" form="flat"/>
			</div>
		</div>

	`,
	}),
};

export const Sizes: Story = {
	args: {},
	render: () => ({
		components: { BoBadge },
		template: `
		<div style="display: flex; flex-direction: column; gap: 20px;">
			Pill
			<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="xs" label="Label" />
			<BoBadge variant="default" size="md" label="Label" />
			<BoBadge variant="default" size="md" label="Label" />
			<BoBadge variant="default" size="lg" label="Label" />
			<BoBadge variant="default" size="xl" label="Label" />
		</div>
		Circle
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" form="circle" size="xs" label="1" />
			<BoBadge variant="default" form="circle" size="sm" label="2" />
			<BoBadge variant="default" form="circle" size="md" label="3" />
			<BoBadge variant="default" form="circle" size="lg" label="4" />
			<BoBadge variant="default" form="circle" size="xl" label="5" />
		</div>
		Base
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" form="base" size="xs" label="1" />
			<BoBadge variant="default" form="base" size="md" label="2" />
			<BoBadge variant="default" form="base" size="md" label="3" />
			<BoBadge variant="default" form="base" size="lg" label="4" />
			<BoBadge variant="default" form="base" size="xl" label="5" />
		</div>
		Flat
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
		<BoBadge variant="default" form="flat" size="xs" label="1" />
		<BoBadge variant="default" form="flat" size="md" label="2" />
		<BoBadge variant="default" form="flat" size="md" label="3" />
		<BoBadge variant="default" form="flat" size="lg" label="4" />
		<BoBadge variant="default" form="flat" size="xl" label="5" />
	</div>
	</div>
	`,
	}),
};

export const Prefix: Story = {
	args: {},
	render: () => ({
		components: { BoBadge, BoIcon },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="md" label="Label">
				<template #prefix>
					<span style="margin-right: 5px; display: flex; align-items: center;">
						<BoIcon name="alert-circle" color="white" size="xs"  />
					</span>
				</template>
			</BoBadge>
		</div>
	`,
	}),
};

export const Body: Story = {
	args: {},
	render: () => ({
		components: { BoBadge, BoIcon },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="md" label="Label">
				<template #body>
					<span style="display: flex; align-items: center;">
						<BoIcon name="alert-circle" color="white" size="xs"  />
					</span>
				</template>
			</BoBadge>
		</div>
	`,
	}),
};

export const Suffix: Story = {
	args: {},
	render: () => ({
		components: { BoBadge, BoIcon },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="md" label="Label">
				<template #suffix>
					<span style="margin-left: 5px; display: flex; align-items: center;">
						<BoIcon name="alert-circle" color="white" size="xs"  />
					</span>
				</template>
			</BoBadge>
		</div>
	`,
	}),
};
