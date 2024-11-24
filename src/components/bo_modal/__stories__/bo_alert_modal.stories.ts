import type { Meta, StoryObj } from '@storybook/vue3';
import BoModal from '../BoAlertModal.vue';

const meta = {
	title: 'Components/bo-alert-modal',
	component: BoModal,
	argTypes: {},
} satisfies Meta<typeof BoModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => ({
		components: { BoModal },
		template: `
			<BoModal />
		`,
	}),
};
