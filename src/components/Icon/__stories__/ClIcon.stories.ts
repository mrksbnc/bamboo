import { Color } from '@/data';
import { ClIcon, Icon } from '..';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
	title: 'Icon/cl-icon',
	component: ClIcon,
	tags: ['autodocs'],
	argTypes: {
		icon: {
			description: 'The name of the icon from the Icon enum',
			control: {
				type: 'select',
			},
			table: {
				category: 'props',
				subcategory: 'required',
				type: {
					summary: 'Icon',
					detail: `enum Icon {\n${
						Object.keys(Icon)
							.map((m: string) => `\t${m} = "${Icon[m as keyof typeof Icon]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
			},
			options: Object.keys(Icon).map((m: string) => Icon[m as keyof typeof Icon]),
		},
		size: {
			description: 'Size of the Icon in pixels',
			control: {
				type: 'number',
			},
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Number',
					detail: 'The size of the icon in pixels',
				},
				defaultValue: {
					summary: 24,
				},
			},
		},
		color: {
			description: 'Color of the Icon',
			table: {
				category: 'props',
				subcategory: 'optional',
				type: {
					summary: 'Color | string',
					detail: `enum Color {\n${
						Object.keys(Color)
							.map((m: string) => `\t${m} = "${Color[m as keyof typeof Color]}",`)
							.join('\r\n') + '\r\n}'
					}`,
				},
				defaultValue: {
					summary: Color.black,
				},
			},
			control: {
				type: 'color',
			},
		},
	},
} satisfies Meta<typeof ClIcon>;

export default meta;

type Story = StoryObj<typeof ClIcon>;

const icons: string[] = [...new Set(Object.values(Icon))];

const stories: Story[] = icons.map((m: string) => {
	return {
		parameters: {
			backgrounds: { default: 'white' },
		},
		render: (args, { argTypes }) => ({
			components: { ClIcon },
			props: Object.keys(argTypes),
			setup() {
				return { args };
			},
			template: '<cl-icon :icon="args.icon" :size="args.size" :color="args.color" />',
		}),
		args: {
			icon: m as Icon,
			size: 24,
			color: '#000000',
		},
	};
});

export const Default: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	args: {
		size: 24,
		icon: Icon.none,
		color: Color.black,
	},
};

export const All: Story = {
	parameters: {
		backgrounds: { default: 'white' },
	},
	render: (args, { argTypes }) => ({
		components: { ClIcon },
		props: Object.keys(argTypes),
		setup() {
			return { args, icons };
		},
		template: `
			<div class="w-max h-full grid grid-cols-18 gap-4">
				<span v-for="icon in icons" :key="icon" class="m-1">
					<cl-icon :icon="icon" :size=24 color="#000000" />
				</span>
			</div>
		`,
	}),
};

export const Activity: Story = stories[0];
export const Airplay: Story = stories[1];
export const AlertCircle: Story = stories[2];
export const AlertOctagon: Story = stories[3];
export const AlertTriangle: Story = stories[4];
export const AlignCenter: Story = stories[5];
export const AlignJustify: Story = stories[6];
export const AlignLeft: Story = stories[7];
export const AlignRight: Story = stories[8];
export const Anchor: Story = stories[9];
export const Aperture: Story = stories[10];
export const Archive: Story = stories[11];
export const ArrowDownCircle: Story = stories[12];
export const ArrowDownLeft: Story = stories[13];
export const ArrowDownRight: Story = stories[14];
export const ArrowDown: Story = stories[15];
export const ArrowLeftCircle: Story = stories[16];
export const ArrowLeft: Story = stories[17];
export const ArrowRightCircle: Story = stories[18];
export const ArrowRight: Story = stories[19];
export const ArrowUpCircle: Story = stories[20];
export const ArrowUpLeft: Story = stories[21];
export const ArrowUpRight: Story = stories[22];
export const ArrowUp: Story = stories[23];
export const AtSign: Story = stories[24];
export const Award: Story = stories[25];
export const BarChart2: Story = stories[26];
export const BarChart: Story = stories[27];
export const BatteryCharging: Story = stories[28];
export const Battery: Story = stories[29];
export const BellOff: Story = stories[30];
export const Bell: Story = stories[31];
export const Bluetooth: Story = stories[32];
export const Bold: Story = stories[33];
export const BookOpen: Story = stories[34];
export const Book: Story = stories[35];
export const Bookmark: Story = stories[36];
export const Box: Story = stories[37];
export const Briefcase: Story = stories[38];
export const Calendar: Story = stories[39];
export const CameraOff: Story = stories[40];
export const Camera: Story = stories[41];
export const Cast: Story = stories[42];
export const CheckCircle: Story = stories[43];
export const CheckSquare: Story = stories[44];
export const Check: Story = stories[45];
export const ChevronDown: Story = stories[46];
export const ChevronLeft: Story = stories[47];
export const ChevronRight: Story = stories[48];
export const ChevronUp: Story = stories[49];
export const ChevronsDown: Story = stories[50];
export const ChevronsLeft: Story = stories[51];
export const ChevronsRight: Story = stories[52];
export const ChevronsUp: Story = stories[53];
export const Chrome: Story = stories[54];
export const Circle: Story = stories[55];
export const Clipboard: Story = stories[56];
export const Clock: Story = stories[57];
export const CloudDrizzle: Story = stories[58];
export const CloudLightning: Story = stories[59];
export const CloudOff: Story = stories[60];
export const CloudRain: Story = stories[61];
export const CloudSnow: Story = stories[62];
export const Cloud: Story = stories[63];
export const Code: Story = stories[64];
export const Codepen: Story = stories[65];
export const Codesandbox: Story = stories[66];
export const Coffee: Story = stories[67];
export const Columns: Story = stories[68];
export const Command: Story = stories[69];
export const Compass: Story = stories[70];
export const Copy: Story = stories[71];
export const CornerDownLeft: Story = stories[72];
export const CornerDownRight: Story = stories[73];
export const CornerLeftDown: Story = stories[74];
export const CornerLeftUp: Story = stories[75];
export const CornerRightDown: Story = stories[76];
export const CornerRightUp: Story = stories[77];
export const CornerUpLeft: Story = stories[78];
export const CornerUpRight: Story = stories[79];
export const Cpu: Story = stories[80];
export const CreditCard: Story = stories[81];
export const Crop: Story = stories[82];
export const Crosshair: Story = stories[83];
export const Database: Story = stories[84];
export const Delete: Story = stories[85];
export const Disc: Story = stories[86];
export const DivideCircle: Story = stories[87];
export const DivideSquare: Story = stories[88];
export const Divide: Story = stories[89];
export const DollarSign: Story = stories[90];
export const DownloadCloud: Story = stories[91];
export const Download: Story = stories[92];
export const Dribbble: Story = stories[93];
export const Droplet: Story = stories[94];
export const Edit2: Story = stories[95];
export const Edit3: Story = stories[96];
export const Edit: Story = stories[97];
export const ExternalLink: Story = stories[98];
export const EyeOff: Story = stories[99];
export const Eye: Story = stories[100];
export const Facebook: Story = stories[101];
export const FastForward: Story = stories[102];
