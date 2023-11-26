import { BoShape } from '@/components/Loader';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Loader/bo-shape',
	component: BoShape,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof BoShape>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		text: undefined,
	},
};

export const WithText: Story = {
	args: {
		text: 'Loading...',
	},
};
