import type { MenubarManifest } from '../definitions/bo-menubar.js';

export const MENUBAR_MANIFEST = {
	meta: { name: 'Menubar', version: '1.0.0' },
	styles: {
		base: 'bo-menubar',
		start: 'bo-menubar__start',
		end: 'bo-menubar__end',
		main: 'bo-menubar__main',
		placement: { top: 'bo-menubar--top', bottom: 'bo-menubar--bottom' },
		menu: 'bo-menubar__menu',
		trigger: { base: 'bo-menubar__trigger', active: 'bo-menubar__trigger--active' },
		content: 'bo-menubar__content',
		item: { base: 'bo-menubar__item', shortcut: 'bo-menubar__item-shortcut' },
		separator: 'bo-menubar__separator',
		label: 'bo-menubar__label',
		subTrigger: 'bo-menubar__sub-trigger',
		subContent: 'bo-menubar__sub-content',
	},
	defaults: { placement: 'top' },
} as const satisfies MenubarManifest;
