export enum BoIconButtonType {
	default = 'default',
	outline = 'outline',
	link = 'link',
}

export enum BoIconButtonShape {
	default = 'default',
	flat = 'flat',
	circle = 'circle',
}

export enum BoIconButtonSizeClasses {
	small = /*tw*/ 'h-6 w-6',
	default = /*tw*/ 'h-8 w-8',
	large = /*tw*/ 'h-10 w-10',
}

export enum BoIconButtonBorderRadiusClasses {
	default = /*tw*/ 'rounded-lg',
	flat = /*tw*/ 'rounded-none',
	circle = /*tw*/ 'rounded-full',
}

export enum BoIconButtonLightShadowClasses {
	primary = /*tw*/ 'shadow-sm shadow-blue-500/10',
	secondary = /*tw*/ 'shadow-sm shadow-neutral-500/10',
	danger = /*tw*/ 'shadow-sm shadow-red-500/10',
	warning = /*tw*/ 'shadow-sm shadow-yellow-500/10',
	success = /*tw*/ 'shadow-sm shadow-green-500/10',
	dark = /*tw*/ 'shadow-sm shadow-black-500/10',
	light = /*tw*/ 'shadow-sm shadow-neutral-900/10',
	purple = /*tw*/ 'shadow-sm shadow-purple-500/10',
	teal = /*tw*/ 'shadow-sm shadow-teal-500/10',
}

export enum BoIconButtonLightColorClasses {
	primary = /*tw*/ 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white',
	secondary = /*tw*/ 'bg-neutral-100 hover:bg-neutral-200 focus:ring-neutral-100 text-neutral-900',
	danger = /*tw*/ 'bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white',
	warning = /*tw*/ 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-600 text-white',
	success = /*tw*/ 'bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white',
	dark = /*tw*/ 'bg-black hover:bg-black/50 focus:ring-black text-white',
	light = /*tw*/ 'bg-white hover:bg-neutral-100 focus:ring-neutral-300 text-blue-400',
	purple = /*tw*/ 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-600 text-white',
	teal = /*tw*/ 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-600 text-white',
}

export enum BoIconButtonDarkColorClasses {
	primary = /*tw*/ 'dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:text-white',
	secondary = /*tw*/ 'dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:focus:ring-neutral-100 dark:text-neutral-900',
	danger = /*tw*/ 'dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-500 dark:text-white',
	warning = /*tw*/ 'dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-500 dark:text-white',
	success = /*tw*/ 'dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-500 dark:text-white',
	dark = /*tw*/ 'dark:bg-black dark:hover:bg-black/50 dark:focus:ring-black dark:text-white',
	light = /*tw*/ 'dark:bg-white dark:hover:bg-neutral-100 dark:focus:ring-neutral-300 dark:text-blue-400',
	purple = /*tw*/ 'dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-500 dark:text-white',
	teal = /*tw*/ 'dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-500 dark:text-white',
}

export enum BoIconButtonLightOutlineColorClasses {
	primary = /*tw*/ 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600 text-blue-600 hover:text-white',
	secondary = /*tw*/ 'border border-neutral-300 hover:bg-neutral-600 focus:ring-neutral-300 text-neutral-800 hover:text-white',
	danger = /*tw*/ 'border border-red-600 hover:bg-red-600 focus:ring-red-600 text-red-600 hover:text-white',
	warning = /*tw*/ 'border border-yellow-600 hover:bg-yellow-600 focus:ring-yellow-600 text-yellow-600 hover:text-white',
	success = /*tw*/ 'border border-green-600 hover:bg-green-600 focus:ring-green-600 text-green-600 hover:text-white',
	dark = /*tw*/ 'border border-black hover:bg-black focus:ring-black text-black hover:text-white',
	light = /*tw*/ 'border border-neutral-50 hover:bg-neutral-100 focus:ring-neutral-300 text-blue-400 hover:text-blue-500',
	purple = /*tw*/ 'border border-purple-600 hover:bg-purple-600 focus:ring-purple-600 text-purple-600 hover:text-white',
	teal = /*tw*/ 'border border-teal-600 hover:bg-teal-600 focus:ring-teal-600 text-teal-600 hover:text-white',
}

export enum BoIconButtonDarkOutlineColorClasses {
	primary = /*tw*/ 'dark:border dark:border-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600 dark:text-blue-600 dark:hover:text-white',
	secondary = /*tw*/ 'dark:border dark:border-neutral-400 dark:hover:bg-neutral-400 dark:focus:ring-neutral-400 dark:text-neutral-300 dark:hover:text-white',
	danger = /*tw*/ 'dark:border dark:border-red-600 dark:hover:bg-red-600 dark:focus:ring-red-600 dark:text-red-600 dark:hover:text-white',
	warning = /*tw*/ 'dark:border dark:border-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600 dark:text-yellow-600 dark:hover:text-white',
	success = /*tw*/ 'dark:border dark:border-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600 dark:text-green-600 dark:hover:text-white',
	dark = /*tw*/ 'dark:border dark:border-black dark:hover:bg-black dark:focus:ring-black dark:text-black dark:hover:text-white',
	light = /*tw*/ 'dark:border dark:border-neutral-50 dark:hover:bg-neutral-100 dark:focus:ring-neutral-300 dark:text-blue-400 dark:hover:text-blue-500',
	purple = /*tw*/ 'dark:border dark:border-purple-600 dark:hover:bg-purple-600 dark:focus:ring-purple-600 dark:text-purple-600 dark:hover:text-white',
	teal = /*tw*/ 'dark:border dark:border-teal-600 dark:hover:bg-teal-600 dark:focus:ring-teal-600 dark:text-teal-600 dark:hover:text-white',
}

export enum BoIconButtonLightLinkColorClasses {
	primary = /*tw*/ 'text-blue-600 hover:text-blue-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	secondary = /*tw*/ 'text-neutral-800 hover:text-neutral-600 bg-transparent hover:bg-transparent focus:ring-transparent',
	danger = /*tw*/ 'text-red-600 hover:text-red-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	warning = /*tw*/ 'text-yellow-600 hover:text-yellow-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	success = /*tw*/ 'text-green-600 hover:text-green-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	dark = /*tw*/ 'text-black hover:text-black/50 bg-transparent hover:bg-transparent focus:ring-transparent',
	light = /*tw*/ 'text-blue-400 hover:text-blue-500 bg-transparent hover:bg-transparent focus:ring-transparent',
	purple = /*tw*/ 'text-purple-600 hover:text-purple-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	teal = /*tw*/ 'text-teal-600 hover:text-teal-700 bg-transparent hover:bg-transparent focus:ring-transparent',
}

export enum BoIconButtonDarkLinkColorClasses {
	primary = /*tw*/ 'dark:text-blue-600 dark:hover:text-blue-700 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	secondary = /*tw*/ 'dark:text-neutral-800 dark:hover:text-neutral-900 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	danger = /*tw*/ 'dark:text-red-600 dark:hover:text-red-700 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	warning = /*tw*/ 'dark:text-yellow-600 dark:hover:text-yellow-700 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	success = /*tw*/ 'dark:text-green-600 dark:hover:text-green-700 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	dark = /*tw*/ 'dark:text-black dark:hover:text-black/50 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	light = /*tw*/ 'dark:text-blue-400 dark:hover:text-blue-500 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	purple = /*tw*/ 'dark:text-purple-600 dark:hover:text-purple-700 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
	teal = /*tw*/ 'dark:text-teal-600 dark:hover:text-teal-700 bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent',
}
