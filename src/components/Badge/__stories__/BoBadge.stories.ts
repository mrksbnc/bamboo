import {
	BadgeForm,
	BadgeSize,
	BadgeType,
	BadgeVariant,
	BoBadge,
} from '@/components/Badge';
import { BoIcon } from '@/components/Icon';
import type { Meta, StoryObj } from '@storybook/vue3';
import { stringEnumFormatter } from '@utils/storybook';

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
					summary: BadgeForm.Pill,
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
		size: BadgeSize.SM,
		label: 'Label',
	},
};

export const Filled: Story = {
	args: {},
	render: () => ({
		components: { BoBadge },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="sm" label="Label" />
			<BoBadge variant="info" size="sm" label="Label" />
			<BoBadge variant="tertiary" size="sm" label="Label" />
			<BoBadge variant="success" size="sm" label="Label" />
			<BoBadge variant="danger" size="sm" label="Label" />
			<BoBadge variant="warning" size="sm" label="Label" />
		</div>
	`,
	}),
};

export const Outline: Story = {
	args: {},
	render: () => ({
		components: { BoBadge },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="sm" label="Label" type="outline"/>
			<BoBadge variant="info" size="sm" label="Label" type="outline"/>
			<BoBadge variant="tertiary" size="sm" label="Label" type="outline"/>
			<BoBadge variant="success" size="sm" label="Label" type="outline"/>
			<BoBadge variant="danger" size="sm" label="Label" type="outline"/>
			<BoBadge variant="warning" size="sm" label="Label" type="outline"/>
		</div>
	`,
	}),
};

export const Sizes: Story = {
	args: {},
	render: () => ({
		components: { BoBadge },
		template: `
		<div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
			<BoBadge variant="default" size="xs" label="Label" />
			<BoBadge variant="default" size="sm" label="Label" />
			<BoBadge variant="default" size="md" label="Label" />
			<BoBadge variant="default" size="lg" label="Label" />
			<BoBadge variant="default" size="xl" label="Label" />
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
