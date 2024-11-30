import { BoButton } from '@/components/bo_button';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/bo_text';
import BoText from '@/components/bo_text/BoText.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import BoSlotModal from '../BoSlotModal.vue';

const meta = {
	title: 'Components/bo-slot-modal',
	component: BoSlotModal,
	argTypes: {
		showCloseButton: {
			description: 'Whether to show the close button',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: true,
		},
		borderedHeader: {
			description: 'Whether to show a bordered header',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: true,
		},
		borderedFooter: {
			description: 'Whether to show a bordered footer',
			control: { type: 'boolean' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: true,
		},
		widthInPx: {
			description: 'The width of the modal in pixels',
			control: { type: 'number' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: 0,
		},
		widthInPercent: {
			description: 'The width of the modal in percent',
			control: { type: 'number' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: 0,
		},
		widthAsTailwindClass: {
			description: 'The width of the modal as a tailwind class',
			control: { type: 'text' },
			table: {
				category: 'props',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		header: {
			description: 'The header of the modal',
			control: { type: 'text' },
			table: {
				category: 'slots',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		body: {
			description: 'The body of the modal',
			control: { type: 'text' },
			table: {
				category: 'slots',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		footer: {
			description: 'The footer of the modal',
			control: { type: 'text' },
			table: {
				category: 'slots',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
		'onUpdate:show': {
			description: 'The event to be emitted when the modal is shown',
			control: { type: 'text' },
			table: {
				category: 'events',
				subcategory: 'optional',
			},
			defaultValue: '',
		},
	},
} satisfies Meta<typeof BoSlotModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { BoSlotModal, BoButton, BoText },

		setup() {
			return { args, BoFontSize, BoTextColor, BoFontWeight };
		},
		template: `
			<BoSlotModal :bordered-header="true" :bordered-footer="true">
				<template #header>
					<span class="flex gap-2">
						<bo-text text="Modal title" :size="BoFontSize.title" :weight="BoFontWeight.semibold" class="text-center" />
					</span>
				</template>
				<template #body>
					<bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." :color="BoTextColor.disabled" />
					<img class="pt-4 w-full h-96 object-cover" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
				</template>
				<template #footer>
					<bo-button label="Submit" class="w-full" tabindex="1" type="submit" />
				</template>
			</BoSlotModal>
		`,
	}),
};

export const WithoutCloseButton: Story = {
	render: (args) => ({
		components: { BoSlotModal, BoButton, BoText },

		setup() {
			return { args, BoFontSize, BoTextColor, BoFontWeight };
		},
		template: `
			<BoSlotModal :show-close-button="false">
				<template #header>
					<span class="flex gap-2">
						<bo-text text="Modal title" :size="BoFontSize.title" :weight="BoFontWeight.semibold" class="text-center" />
					</span>
				</template>
				<template #body>
					<bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." :color="BoTextColor.disabled" />
				</template>
				<template #footer>
					<bo-button label="Submit" class="w-full" />
				</template>
			</BoSlotModal>
		`,
	}),
	args: {
		showCloseButton: false,
	},
};

export const BorderedSlots: Story = {
	render: (args) => ({
		components: { BoSlotModal, BoButton, BoText },

		setup() {
			return { args, BoFontSize, BoTextColor, BoFontWeight };
		},
		template: `
			<BoSlotModal v-bind="args">
				<template #header>
					<span class="flex gap-2">
						<bo-text text="Modal title" :size="BoFontSize.title" :weight="BoFontWeight.semibold" class="text-center" />
					</span>
				</template>
				<template #body>
					<bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." :color="BoTextColor.disabled" />
				</template>
				<template #footer>
					<bo-button label="Submit" class="w-full" />
				</template>
			</BoSlotModal>
		`,
	}),
	args: {
		showCloseButton: false,
		borderedHeader: true,
		borderedFooter: true,
	},
};

export const CustomWidthPx: Story = {
	render: (args) => ({
		components: { BoSlotModal, BoButton, BoText },

		setup() {
			return { args, BoFontSize, BoTextColor, BoFontWeight };
		},
		template: `
			<BoSlotModal :width-in-px="420">
				<template #header>
					<span class="flex gap-2">
						<bo-text text="Modal title" :size="BoFontSize.title" :weight="BoFontWeight.semibold" class="text-center" />
					</span>
				</template>
				<template #body>
					<bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." :color="BoTextColor.disabled" />
				</template>
				<template #footer>
					<bo-button label="Submit" class="w-full" />
				</template>
			</BoSlotModal>
		`,
	}),
	args: {
		widthInPx: 200,
	},
};

export const CustomWidthPercent: Story = {
	render: (args) => ({
		components: { BoSlotModal, BoButton, BoText },

		setup() {
			return { args, BoFontSize, BoTextColor, BoFontWeight };
		},
		template: `
			<BoSlotModal :width-in-percent="args.widthInPercent">
				<template #header>
					<span class="flex gap-2">
						<bo-text text="Modal title" :size="BoFontSize.title" :weight="BoFontWeight.semibold" class="text-center" />
					</span>
				</template>
				<template #body>
					<bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." :color="BoTextColor.disabled" />
				</template>
				<template #footer>
					<bo-button label="Submit" class="w-full" />
				</template>
			</BoSlotModal>
		`,
	}),
	args: {
		widthInPercent: 50,
	},
};

export const CustomWidthAsTailwindClass: Story = {
	render: (args) => ({
		components: { BoSlotModal, BoButton, BoText },

		setup() {
			return { args, BoFontSize, BoTextColor, BoFontWeight };
		},
		template: `
			<BoSlotModal v-bind="args">
				<template #header>
					<span class="flex gap-2">
						<bo-text text="Modal title" :size="BoFontSize.title" :weight="BoFontWeight.semibold" class="text-center" />
					</span>
				</template>
				<template #body>
					<bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." :color="BoTextColor.disabled" />
				</template>
				<template #footer>
					<bo-button label="Submit" class="w-full" />
				</template>
			</BoSlotModal>
		`,
	}),
	args: {
		widthAsTailwindClass: /*tw*/ 'w-6/12',
	},
};
