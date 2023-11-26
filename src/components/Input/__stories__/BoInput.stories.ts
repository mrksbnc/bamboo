import {
	BoInput,
	HTMLAutocompleteAttribute,
	HTMLInputType,
	InputSize,
} from '@/components/Input';
import type { Meta, StoryObj } from '@storybook/vue3';
import { stringEnumFormatter } from '@utils/index';

const meta = {
	title: 'Input/bo-input',
	component: BoInput,
	tags: ['autodocs'],
	argTypes: {
		id: {
			description: 'The id of the field',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
					defaultValue: {
						summary: 'bo-input__no-id',
					},
				},
			},
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'The label of the input field',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: '',
				},
			},
			control: {
				type: 'text',
			},
		},
		modelValue: {
			description: 'The value of the input field',
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'string',
				},
			},
			defaultValue: {
				summary: undefined,
			},
			type: 'string',
			control: {
				type: 'text',
			},
		},
		type: {
			description: 'The type of the input field',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'HTMLInputType',
					detail: stringEnumFormatter(HTMLInputType, 'HTMLInputType'),
				},
				defaultValue: {
					summary: HTMLInputType.Text,
				},
			},
			control: {
				type: 'select',
			},
			options: Object.values(HTMLInputType),
		},
		disabled: {
			description: 'Whether the field is disabled or not',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'boolean',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'boolean',
			control: {
				type: 'boolean',
			},
		},
		placeholder: {
			description: 'The placeholder for the field',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			defaultValue: {
				summary: undefined,
			},
			type: 'string',
			control: {
				type: 'text',
			},
		},
		hint: {
			description: 'The text below the input field',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'string',
			control: {
				type: 'text',
			},
		},
		isValid: {
			description: 'Whether the field is valid or not',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'boolean',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'boolean',
			control: {
				type: 'boolean',
			},
		},
		errorMsg: {
			description: 'The error message to display',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'string',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'string',
			control: {
				type: 'text',
			},
		},
		isLoading: {
			description: 'Whether the field is loading or not',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'boolean',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'boolean',
			control: {
				type: 'boolean',
			},
		},
		size: {
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'InputSize',
					detail: stringEnumFormatter(InputSize, 'InputSize'),
				},
				defaultValue: {
					summary: InputSize.MD,
				},
			},
			defaultValue: {
				summary: InputSize.MD,
			},
			type: 'string',
			control: {
				type: 'select',
			},
			options: Object.values(InputSize),
		},
		autocomplete: {
			description: 'The autocomplete setting of the input',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'HTMLInputType',
					detail: stringEnumFormatter(HTMLInputType, 'HTMLInputType'),
				},
			},
			defaultValue: {
				summary: undefined,
			},
			control: {
				type: 'select',
			},
			options: Object.values(HTMLInputType),
		},
		readonly: {
			description: 'Whether the field is readonly',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'boolean',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'boolean',
			control: {
				type: 'boolean',
			},
		},
		clearable: {
			description: 'Whether the clear icon is shown',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'boolean',
				},
			},
			defaultValue: {
				summary: false,
			},
			type: 'boolean',
		},
	},
} satisfies Meta<typeof BoInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		id: 'input',
		errorMsg: '',
		modelValue: '',
		label: 'Label',
		disabled: false,
		readonly: false,
		clearable: false,
		isLoading: false,
		size: InputSize.MD,
		type: HTMLInputType.Text,
		placeholder: 'placeholder text',
		autocomplete: HTMLAutocompleteAttribute.Off,
		hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
};
