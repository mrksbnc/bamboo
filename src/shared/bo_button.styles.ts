/**
 * @description Shared classes for the different button components
 */

export enum BoButtonColorClasses {
	primary = /*tw*/ 'bg-primary hover:bg-primary/70 focus:ring-primary text-white',
	secondary = /*tw*/ 'bg-secondary hover:bg-neutral-200 focus:ring-secondary text-neutral-600',
	danger = /*tw*/ 'bg-danger hover:bg-danger/70 focus:ring-danger text-white',
	warning = /*tw*/ 'bg-warning hover:bg-warning/70 focus:ring-warning text-white',
	success = /*tw*/ 'bg-success hover:bg-success/70 focus:ring-success text-white',
	dark = /*tw*/ 'bg-dark hover:bg-dark/70 focus:ring-dark text-white',
	light = /*tw*/ 'bg-light hover:bg-light/70 focus:ring-light text-blue-500',
	purple = /*tw*/ 'bg-purple-600 hover:bg-purple-600/70 focus:ring-purple-600 text-white',
	teal = /*tw*/ 'bg-teal-600 hover:bg-teal-600/70 focus:ring-teal-600 text-white',
}

export enum BoButtonOutlineColorClasses {
	primary = /*tw*/ 'border border-blue-600 hover:bg-blue-600 focus:ring-blue-600 text-blue-600 hover:text-white',
	secondary = /*tw*/ 'border border-neutral-300 hover:bg-neutral-600 focus:ring-neutral-300 text-neutral-800 hover:text-white',
	danger = /*tw*/ 'border border-red-600 hover:bg-red-600 focus:ring-red-600 text-red-600 hover:text-white',
	warning = /*tw*/ 'border border-yellow-600 hover:bg-yellow-600 focus:ring-yellow-600 text-yellow-600 hover:text-white',
	success = /*tw*/ 'border border-green-600 hover:bg-green-600 focus:ring-green-600 text-green-600 hover:text-white',
	dark = /*tw*/ 'border border-black hover:bg-black focus:ring-black text-black hover:text-white',
	light = /*tw*/ 'border border-neutral-50 hover:bg-neutral-100 focus:ring-neutral-300 text-blue-500 hover:text-blue-600',
	purple = /*tw*/ 'border border-purple-600 hover:bg-purple-600 focus:ring-purple-600 text-purple-600 hover:text-white',
	teal = /*tw*/ 'border border-teal-600 hover:bg-teal-600 focus:ring-teal-600 text-teal-600 hover:text-white',
}

export enum BoButtonLinkColorClasses {
	primary = /*tw*/ 'text-blue-600 hover:text-blue-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	secondary = /*tw*/ 'text-neutral-800 hover:text-neutral-600 bg-transparent hover:bg-transparent focus:ring-transparent',
	danger = /*tw*/ 'text-red-600 hover:text-red-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	warning = /*tw*/ 'text-yellow-600 hover:text-yellow-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	success = /*tw*/ 'text-green-600 hover:text-green-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	dark = /*tw*/ 'text-black hover:text-black/50 bg-transparent hover:bg-transparent focus:ring-transparent',
	light = /*tw*/ 'text-blue-400 hover:text-blue-500 bg-transparent hover:bg-transparent focus:ring-transparent',
	purple = /*tw*/ 'text-purple-600 text-hover:text-purple-700 bg-transparent hover:bg-transparent focus:ring-transparent',
	teal = /*tw*/ 'text-teal-600 hover:text-teal-700 bg-transparent hover:bg-transparent focus:ring-transparent',
}
