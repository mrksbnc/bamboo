export enum BoBadgeType {
	default = 'default',
	outline = 'outline',
}

export enum BoBadgeShape {
	pill = 'pill',
	default = 'default',
	flat = 'flat',
}

export enum BoBadgeVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
	purple = 'purple',
	teal = 'teal',
}

export enum BoBadgeFilledColorClasses {
	primary = /*tw*/ 'bg-blue-600  focus:ring-blue-600 text-white',
	secondary = /*tw*/ 'bg-gray-600 focus:ring-gray-600 text-white',
	danger = /*tw*/ 'bg-red-600  focus:ring-red-600 text-white',
	warning = /*tw*/ 'bg-yellow-600  focus:ring-yellow-600 text-white',
	success = /*tw*/ 'bg-green-600  focus:ring-green-600 text-white',
	dark = /*tw*/ 'bg-black focus:ring-black text-white',
	purple = /*tw*/ 'bg-purple-600  focus:ring-purple-600 text-white',
	teal = /*tw*/ 'bg-teal-600  focus:ring-teal-600 text-white',
}

export enum BoBadgeOutlineColorClasses {
	primary = /*tw*/ 'border border-blue-600  focus:ring-blue-600 text-blue-600',
	secondary = /*tw*/ 'border border-gray-600  focus:ring-gray-600 text-gray-600',
	danger = /*tw*/ 'border border-red-600  focus:ring-red-600 text-red-600',
	warning = /*tw*/ 'border border-yellow-600  focus:ring-yellow-600 text-yellow-600',
	success = /*tw*/ 'border border-green-600  focus:ring-green-600 text-green-600',
	dark = /*tw*/ 'border border-black focus:ring-black text-black',
	purple = /*tw*/ 'border border-purple-600  focus:ring-purple-600 text-purple-600',
	teal = /*tw*/ 'border border-teal-600  focus:ring-teal-600 text-teal-600',
}

export enum BoBadgeBorderRadiusClasses {
	pill = /*tw*/ 'rounded-full',
	default = /*tw*/ 'rounded-lg',
	flat = /*tw*/ 'rounded-none',
}

export enum BoBadgePaddingClasses {
	small = /*tw*/ 'px-2.5',
	default = /*tw*/ 'px-3',
	large = /*tw*/ 'px-3.5',
}

export enum BoBadgeTextSizeClasses {
	small = /*tw*/ 'text-small leading-small',
	default = /*tw*/ 'text-default leading-default',
	large = /*tw*/ 'text-large leading-large',
}

export enum BoBadgeSizeClasses {
	small = /*tw*/ 'h-4 w-fit',
	default = /*tw*/ 'h-6 w-fit',
	large = /*tw*/ 'h-8 w-fit',
}

export enum BoBadgeShadowClasses {
	primary = /*tw*/ 'shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80',
	secondary = /*tw*/ 'shadow-sm shadow-gray-500/50 dark:shadow-sm dark:shadow-gray-800/80',
	danger = /*tw*/ 'shadow-sm shadow-red-500/50 dark:shadow-sm dark:shadow-red-800/80',
	warning = /*tw*/ 'shadow-sm shadow-yellow-500/50 dark:shadow-sm dark:shadow-yellow-800/80',
	success = /*tw*/ 'shadow-sm shadow-green-500/50 dark:shadow-sm dark:shadow-green-800/80',
	dark = /*tw*/ 'shadow-sm shadow-black-500/50 dark:shadow-sm dark:shadow-black-800/80',
	purple = /*tw*/ 'shadow-sm shadow-purple-500/50 dark:shadow-sm dark:shadow-purple-800/80',
	teal = /*tw*/ 'shadow-sm shadow-teal-500/50 dark:shadow-sm dark:shadow-teal-800/80',
}
