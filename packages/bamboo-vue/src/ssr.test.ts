// @vitest-environment node

import { renderToString } from '@vue/server-renderer';
import { describe, expect, it } from 'vitest';
import { createSSRApp, h, type VNode } from 'vue';
import * as Bamboo from './index.js';

type RenderCase = readonly [name: string, render: () => VNode];

const renderCases: RenderCase[] = [
	['accordion', () => h(Bamboo.BoAccordion)],
	['aspect ratio', () => h(Bamboo.BoAspectRatio)],
	['avatar', () => h(Bamboo.BoAvatar)],
	['badge', () => h(Bamboo.BoBadge)],
	['breadcrumb', () => h(Bamboo.BoBreadcrumb)],
	['button', () => h(Bamboo.BoButton)],
	['button group', () => h(Bamboo.BoButtonGroup)],
	['card', () => h(Bamboo.BoCard)],
	['checkbox', () => h(Bamboo.BoCheckbox)],
	['dialog', () => h(Bamboo.BoDialog)],
	['open dialog', () => h(Bamboo.BoDialog, { open: true, title: 'SSR dialog' })],
	['empty', () => h(Bamboo.BoEmpty)],
	['icon', () => h(Bamboo.BoIcon)],
	['input', () => h(Bamboo.BoInput)],
	['file input', () => h(Bamboo.BoFileInput)],
	['dropzone', () => h(Bamboo.BoDropzone)],
	['loading pulse', () => h(Bamboo.BoLoadingPulse)],
	['loading spinner', () => h(Bamboo.BoLoadingSpinner)],
	['loading ring', () => h(Bamboo.BoLoadingRing)],
	['modal', () => h(Bamboo.BoModal)],
	['open modal', () => h(Bamboo.BoModal, { open: true, title: 'SSR modal' })],
	['navbar', () => h(Bamboo.BoNavbar)],
	['form', () => h(Bamboo.BoForm)],
	['calendar', () => h(Bamboo.BoCalendar)],
	['date picker', () => h(Bamboo.BoDatePicker)],
	['date range picker', () => h(Bamboo.BoDateRangePicker)],
	['range calendar', () => h(Bamboo.BoRangeCalendar)],
	['pagination', () => h(Bamboo.BoPagination)],
	['progress', () => h(Bamboo.BoProgress)],
	['radio group', () => h(Bamboo.BoRadioGroup)],
	['separator', () => h(Bamboo.BoSeparator)],
	['skeleton', () => h(Bamboo.BoSkeleton)],
	['tabs', () => h(Bamboo.BoTabs)],
	['text', () => h(Bamboo.BoText)],
	['textarea', () => h(Bamboo.BoTextarea)],
	['toast', () => h(Bamboo.BoToast)],
	['toast viewport', () => h(Bamboo.BoToastViewport)],
	['tooltip', () => h(Bamboo.BoTooltip)],
	[
		'visible manual tooltip',
		() => h(Bamboo.BoTooltip, { content: 'SSR tooltip', trigger: 'manual', visible: true }),
	],
	['visually hidden', () => h(Bamboo.BoVisuallyHidden)],
	['carousel', () => h(Bamboo.BoCarousel)],
	['slider', () => h(Bamboo.BoSlider)],
	['table', () => h(Bamboo.BoTable, { columns: [{ key: 'name', label: 'Name' }], rows: [] })],
	['collapsible', () => h(Bamboo.BoCollapsible)],
	['context menu', () => h(Bamboo.BoContextMenu)],
	[
		'open context menu',
		() =>
			h(Bamboo.BoContextMenu, { open: true }, () => [
				h(Bamboo.BoContextMenuTrigger, null, () => 'Target'),
				h(Bamboo.BoContextMenuContent, null, () => h(Bamboo.BoContextMenuItem, null, () => 'Item')),
			]),
	],
	['drawer', () => h(Bamboo.BoDrawer)],
	['open drawer', () => h(Bamboo.BoDrawer, { open: true, title: 'SSR drawer' })],
	['drawer viewport', () => h(Bamboo.BoDrawerViewport)],
	['input otp', () => h(Bamboo.BoInputOtp)],
	['menubar', () => h(Bamboo.BoMenubar)],
	['number field', () => h(Bamboo.BoNumberField)],
	['popover', () => h(Bamboo.BoPopover)],
	[
		'open popover',
		() =>
			h(
				Bamboo.BoPopover,
				{ open: true },
				{
					trigger: () => h(Bamboo.BoPopoverTrigger, null, () => 'Open'),
					default: () => h(Bamboo.BoPopoverContent, null, () => 'Content'),
				},
			),
	],
	['dropdown', () => h(Bamboo.BoDropdown)],
	[
		'open dropdown',
		() => h(Bamboo.BoDropdown, { open: true }, () => h(Bamboo.BoDropdownItem, null, () => 'Item')),
	],
	['resizable', () => h(Bamboo.BoResizable)],
	['scroll area', () => h(Bamboo.BoScrollArea)],
	['switch', () => h(Bamboo.BoSwitch)],
	['tags input', () => h(Bamboo.BoTagsInput)],
	['toggle group', () => h(Bamboo.BoToggleGroup)],
	['toggle', () => h(Bamboo.BoToggle)],
];

describe('public components SSR', () => {
	it.each(renderCases)('%s renders without browser globals', async (_name, render) => {
		const app = createSSRApp({ render });
		const html = await renderToString(app);

		expect(html).toEqual(expect.any(String));
	});
});
