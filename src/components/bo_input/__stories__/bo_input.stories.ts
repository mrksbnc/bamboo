import { Icon } from '@/components/bo_icon';
import { BoInput, BoInputSize, BoInputState } from '@/components/bo_input';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';
import type { InputTypeHTMLAttribute } from 'vue';

const meta = {
	title: 'Components/bo-input',
	component: BoInput,
	argTypes: {
		modelValue: {
			description: 'The value of the input',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'required',
			},
		},
		label: {
			description: 'The label of the input',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		description: {
			description: 'The description of the input',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		type: {
			description: 'The type of the input',
			control: { type: 'select' },
			options: [
				'button',
				'checkbox',
				'color',
				'date',
				'datetime-local',
				'email',
				'file',
				'hidden',
				'image',
				'month',
				'number',
				'password',
				'radio',
				'range',
				'reset',
				'search',
				'submit',
				'tel',
				'text',
				'time',
				'url',
				'week',
			] as InputTypeHTMLAttribute[],
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'InputTypeHTMLAttribute',
				},
			},
			defaultValue: 'text',
		},
		size: {
			description: 'The size of the input',
			control: { type: 'select' },
			options: Object.values(BoInputSize),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoInputSize',
					detail: StorybookUtils.stringEnumFormatter(
						BoInputSize,
						'BoInputSize',
					),
				},
			},
			defaultValue: BoInputSize.default,
		},
		state: {
			description: 'The state of the input',
			control: { type: 'select' },
			options: Object.values(BoInputState),
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'BoInputState',
					detail: StorybookUtils.stringEnumFormatter(
						BoInputState,
						'BoInputState',
					),
				},
			},
			defaultValue: BoInputState.none,
		},
		disabled: {
			description: 'Whether the input is disabled',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		isLoading: {
			description: 'Whether the input is loading',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		placeholder: {
			description: 'The placeholder of the input',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		readonly: {
			description: 'Whether the input is readonly',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
		errorMessage: {
			description: 'The error message to be displayed',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: null,
		},
		prefixIcon: {
			description: 'The icon to be displayed before the input',
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
			description: 'The icon to be displayed after the input',
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
	},
} satisfies Meta<typeof BoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		size: BoInputSize.default,
		state: BoInputState.none,
		disabled: false,
		isLoading: false,
		readonly: false,
		placeholder: 'Enter your name',
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			const sizes = Object.values(BoInputSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="size in sizes" :key="size" class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<BoInput :modelValue="value" :label="label" :description="description" :size="size"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};

export const States: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			const states = Object.values(BoInputState);
			return { states, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="state in states" :key="state" class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<BoInput :modelValue="value" :label="label" :description="description" :state="state"/>
					<span class="text-small text-gray-500 font-medium">{{ state }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};

export const Loading: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <BoInput :modelValue="value" :label="label" :description="description" :isLoading="isLoading"/>
            </div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		isLoading: true,
	},
};

export const Required: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <BoInput :modelValue="value" :label="label" :description="description" :state="state" :required="required"/>
            </div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		state: BoInputState.invalid,
		required: true,
	},
};

export const Error: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <BoInput :modelValue="value" :label="label" :description="description" :state="state" :error-message="errorMessage"/>
            </div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		state: BoInputState.invalid,
		errorMessage: 'This field is required',
	},
};

export const Icons: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			const sizes = Object.values(BoInputSize);
			return { sizes, ...args };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<BoInput :modelValue="value" :label="label" :description="description" :prefix-icon="prefixIcon"/>
					<span class="text-small text-gray-500 font-medium">default</span>
				</span>
				<span v-for="size in sizes" :key="size" class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<BoInput :modelValue="value" :label="label" :description="description" :size="size" :prefix-icon="prefixIcon" :isLoading="isLoading"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
			<div class="flex flex-col gap-4 mt-4">
				<span v-for="size in sizes" :key="size" class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<BoInput :modelValue="value" :label="label" :description="description" :size="size" :suffix-icon="prefixIcon" :suffix-icon="suffixIcon" :isLoading="isLoading"/>
					<span class="text-small text-gray-500 font-medium">{{ size }}</span>
				</span>
			</div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		prefixIcon: Icon.alert_circle,
		suffixIcon: Icon.alert_circle,
		isLoading: true,
	},
};
