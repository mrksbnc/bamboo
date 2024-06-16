export enum BoIconButtonStyle {
	default = 'default',
	outline = 'outline',
}

export enum BoIconButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
	purple = 'purple',
	teal = 'teal',
	link = 'link',
	link_secondary = 'link_secondary',
	link_danger = 'link_danger',
	link_warning = 'link_warning',
	link_success = 'link_success',
	link_dark = 'link_dark',
	link_purple = 'link_purple',
	link_teal = 'link_teal',
}

export enum BoIconButtonShape {
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}

export enum BoIconButtonPaddingClasses {
	small = /*tw*/ 'p-2',
	default = /*tw*/ 'p-3',
	large = /*tw*/ 'p-4',
}

export enum BoIconButtonBorderRadiusClasses {
	default = /*tw*/ 'rounded-lg',
	flat = /*tw*/ 'rounded-none',
	circle = /*tw*/ 'rounded-full',
}

export enum BoIconButtonShadowClasses {
	primary = /*tw*/ 'shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80',
	secondary = /*tw*/ 'shadow-sm shadow-gray-500/50 dark:shadow-sm dark:shadow-gray-800/80',
	danger = /*tw*/ 'shadow-sm shadow-red-500/50 dark:shadow-sm dark:shadow-red-800/80',
	warning = /*tw*/ 'shadow-sm shadow-yellow-500/50 dark:shadow-sm dark:shadow-yellow-800/80',
	success = /*tw*/ 'shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80',
	dark = /*tw*/ 'shadow-sm shadow-black-500/50 dark:shadow-sm dark:shadow-black-800/80',
	purple = /*tw*/ 'shadow-sm shadow-purple-500/50 dark:shadow-sm dark:shadow-purple-800/80',
	teal = /*tw*/ 'shadow-sm shadow-teal-500/50 dark:shadow-sm dark:shadow-teal-800/80',
	link = /*tw*/ 'shadow-none',
	link_secondary = /*tw*/ 'shadow-none',
	link_danger = /*tw*/ 'shadow-none',
	link_warning = /*tw*/ 'shadow-none',
	link_success = /*tw*/ 'shadow-none',
	link_dark = /*tw*/ 'shadow-none',
	link_purple = /*tw*/ 'shadow-none',
	link_teal = /*tw*/ 'shadow-none',
}

export enum BoIconButtonColorClasses {
	primary = /*tw*/ 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white',
	secondary = /*tw*/ 'bg-neutral-300 hover:bg-neutral-400 focus:ring-neutral-300 text-neutral-800',
	danger = /*tw*/ 'bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white',
	warning = /*tw*/ 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-600 text-white',
	success = /*tw*/ 'bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white',
	dark = /*tw*/ 'bg-black hover:bg-black/50 focus:ring-black text-white',
	purple = /*tw*/ 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-600 text-white',
	teal = /*tw*/ 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-600 text-white',
	link = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600',
	link_secondary = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600',
	link_danger = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 hover:text-red-700 focus:ring-red-600',
	link_warning = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-600 hover:text-yellow-700 focus:ring-yellow-600',
	link_success = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 hover:text-green-700 focus:ring-green-600',
	link_dark = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-black hover:text-black/50 focus:ring-black',
	link_purple = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-purple-600 hover:text-purple-700 focus:ring-purple-600',
	link_teal = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-teal-600 hover:text-teal-700 focus:ring-teal-600',
}

export enum BoIconButtonOutlineColorClasses {
	primary = /*tw*/ 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600 text-blue-600 hover:text-white',
	secondary = /*tw*/ 'border border-neutral-600 hover:bg-neutral-300 focus:ring-neutral-600 text-neutral-800 hover:text-white',
	danger = /*tw*/ 'border border-red-600 hover:bg-red-600 focus:ring-red-600 text-red-600 hover:text-white',
	warning = /*tw*/ 'border border-yellow-600 hover:bg-yellow-600 focus:ring-yellow-600 text-yellow-600 hover:text-white',
	success = /*tw*/ 'border border-green-600 hover:bg-green-600 focus:ring-green-600 text-green-600 hover:text-white',
	dark = /*tw*/ 'border border-black hover:bg-black focus:ring-black text-black hover:text-white',
	purple = /*tw*/ 'border border-purple-600 hover:bg-purple-600 focus:ring-purple-600 text-purple-600 hover:text-white',
	teal = /*tw*/ 'border border-teal-600 hover:bg-teal-600 focus:ring-teal-600 text-teal-600 hover:text-white',
	link = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600',
	link_secondary = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-600',
	link_danger = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 hover:text-red-700 focus:ring-red-600',
	link_warning = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-600 hover:text-yellow-700 focus:ring-yellow-600',
	link_success = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 hover:text-green-700 focus:ring-green-600',
	link_dark = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-black hover:text-black/50 focus:ring-black',
	link_purple = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-purple-600 hover:text-purple-700 focus:ring-purple-600',
	link_teal = /*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-teal-600 hover:text-teal-700 focus:ring-teal-600',
}
