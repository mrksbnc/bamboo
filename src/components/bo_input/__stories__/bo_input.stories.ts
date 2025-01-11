import { Icon } from '@/components/bo_icon';
import { BoInput, BoInputSize, BoInputState } from '@/components/bo_input';
import { HtmlInputType } from '@/shared';
import { StorybookUtils } from '@/utils';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-input',
	component: BoInput,
	argTypes: {
		id: {
			description: 'The id of the input',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
		},
		required: {
			description: 'Whether the input is required',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: false,
		},
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
		type: {
			description: 'The type of the input',
			control: { type: 'select' },
			options: [
				HtmlInputType.tel,
				HtmlInputType.url,
				HtmlInputType.date,
				HtmlInputType.time,
				HtmlInputType.week,
				HtmlInputType.text,
				HtmlInputType.month,
				HtmlInputType.email,
				HtmlInputType.number,
				HtmlInputType.password,
				HtmlInputType.datetime_local,
			],
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'InputTypeHTMLAttribute',
				},
			},
			defaultValue: 'text',
		},
		description: {
			description: 'The description of the input',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
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
					detail: StorybookUtils.stringEnumFormatter(BoInputSize, 'BoInputSize'),
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
					detail: StorybookUtils.stringEnumFormatter(BoInputState, 'BoInputState'),
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
		loaderVariant: {
			description: 'The variant of the loader',
			control: { type: 'select' },
			options: ['spinner', 'pulse'],
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			defaultValue: 'pulse',
		},
	},
} satisfies Meta<typeof BoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function generateRandomId(): string {
	return Symbol(Math.random().toString(36).substring(2, 15) + Date.now()).toString();
}

export const Example: Story = {
	args: {
		modelValue: 'Hello world!',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		size: BoInputSize.default,
		state: BoInputState.none,
		disabled: false,
		isLoading: false,
		readonly: false,
		placeholder: 'Enter your name',
		type: HtmlInputType.text,
	},
};

export const Sizes: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			const sizes = Object.values(BoInputSize);
			return { sizes, ...args, generateRandomId };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="size in sizes" :key="generateRandomId()" class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2 w-full">
					<bo-input v-model="modelValue" :label="label" :description="description" :size="size"/>
					<span class="text-sm text-gray-500 font-medium text-center">{{ size }}</span>
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

export const Disabled: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-input v-model="modelValue" :label="label" :description="description" :disabled="disabled"/>
            </div>
		`,
	}),
	args: {
		modelValue: 'Hello world!',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		disabled: true,
	},
};

export const Readonly: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			return { ...args };
		},
		template: `
            <div class="flex flex-col gap-4">
                <bo-input v-model="modelValue" :label="label" :description="description" :readonly="readonly"/>
            </div>
		`,
	}),
	args: {
		modelValue: 'Hello world!',
		label: 'Name',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		readonly: true,
	},
};

export const States: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			const states = Object.values(BoInputState);
			return { states, ...args, generateRandomId };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span v-for="state in states" :key="generateRandomId" class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<bo-input v-model="modelValue" :label="label" :description="description" :state="state"/>
					<span class="text-sm text-gray-500 font-medium">{{ state }}</span>
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
                <bo-input v-model="modelValue" :label="label" :description="description" :isLoading="isLoading"/>
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

export const WithLoaderVariantSpinner: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			return { args };
		},
		template: `
            <div class="flex flex-col gap-4">
				<div class="flex flex-col gap-4">
                	<bo-input v-bind="args" loader-variant="spinner"/>
            	</div>
				<div class="flex flex-col gap-4">
                	<bo-input v-bind="args" loader-variant="pulse"/>
            	</div>
			</div>
		`,
	}),
	args: {
		modelValue: '',
		label: 'Name',
		isLoading: true,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
                <bo-input v-model="modelValue" :label="label" :description="description" :state="state" :required="required"/>
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
                <bo-input v-model="modelValue" :label="label" :description="description" :state="state" :error-message="errorMessage"/>
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

			return { sizes, ...args, generateRandomId };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2">
					<bo-input v-model="modelValue" :label="label" :description="description" :prefix-icon="prefixIcon"/>
					<span class="text-sm text-gray-500 font-medium">default</span>
				</span>
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2 w-full">
					<bo-input v-model="modelValue" :label="label" :description="description" :suffix-icon="suffixIcon"/>
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

export const IconsWithLoader: Story = {
	render: (args) => ({
		components: { BoInput },
		setup() {
			const sizes = Object.values(BoInputSize);

			return { sizes, ...args, generateRandomId };
		},
		template: `
			<div class="flex flex-col gap-4">
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2 w-full">
					<bo-input v-model="modelValue" :label="label" :description="description" :prefix-icon="prefixIcon" :isLoading="isLoading"/>
					<span class="text-sm text-gray-500 font-medium">default</span>
				</span>
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2 w-full">
					<bo-input v-model="modelValue" :label="label" :description="description" :suffix-icon="suffixIcon" :isLoading="isLoading"/>
					<span class="text-sm text-gray-500 font-medium">default</span>
				</span>
			</div>
			<div class="flex flex-col gap-4">
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2 w-full">
					<bo-input v-model="modelValue" :label="label" :description="description" :prefix-icon="prefixIcon" :isLoading="isLoading" loader-variant="spinner"/>
					<span class="text-sm text-gray-500 font-medium">default</span>
				</span>
				<span class="flex flex-col gap-2 border border-gray-300 rounded-lg p-2 w-full">
					<bo-input v-model="modelValue" :label="label" :description="description" :suffix-icon="suffixIcon" :isLoading="isLoading" loader-variant="spinner"/>
					<span class="text-sm text-gray-500 font-medium">default</span>
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
