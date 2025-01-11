import { BoButtonVariant } from '@/components/bo_button';
import { BoAlertModal, BoAlertModalAlignment, BoAlertModalVariant } from '@/components/bo_modal';
import { HtmlButtonType } from '@/shared/html_button';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Components/bo-alert-modal',
	component: BoAlertModal,
	argTypes: {},
} satisfies Meta<typeof BoAlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup: () => {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Info',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const WithCancelButton: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Info',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		cancelButtonProps: {
			props: {
				label: 'Cancel',
				variant: BoButtonVariant.secondary,
				type: HtmlButtonType.reset,
			},
			onCLick: () => {
				alert('cancel clicked');
			},
		},
		showCancelButton: true,
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.primary,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const WithCloseButton: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Info',
		showCloseButton: true,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.primary,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const Success: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `<bo-alert-modal v-bind="args" />`,
	}),
	args: {
		title: 'Success',
		variant: BoAlertModalVariant.success,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.success,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const Warning: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Warning',
		variant: BoAlertModalVariant.warning,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.warning,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const Error: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Error',
		variant: BoAlertModalVariant.error,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.danger,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const InfoCentered: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Info',
		alignment: BoAlertModalAlignment.centered,
		variant: BoAlertModalVariant.info,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.primary,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const WarningCentered: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Warning',
		alignment: BoAlertModalAlignment.centered,
		variant: BoAlertModalVariant.warning,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.warning,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const ErrorCentered: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Error',
		variant: BoAlertModalVariant.error,
		alignment: BoAlertModalAlignment.centered,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.danger,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const SuccessCentered: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Success',
		variant: BoAlertModalVariant.success,
		alignment: BoAlertModalAlignment.centered,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.success,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};

export const WithoutIcon: Story = {
	render: (args) => ({
		components: { BoAlertModal },
		setup() {
			return { args };
		},
		template: `
			<bo-alert-modal v-bind="args" />
		`,
	}),
	args: {
		title: 'Info',
		withIcon: false,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc diam interdum nunc, eu tincidunt nisi nisl sit amet nunc.',
		confirmButtonProps: {
			props: {
				label: 'Ok',
				variant: BoButtonVariant.primary,
				type: HtmlButtonType.submit,
			},
			onCLick: () => {
				alert('confirm clicked');
			},
		},
	},
};
