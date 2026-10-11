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
	['chart', () => h(Bamboo.BoChart, { series: [{ name: 'Revenue', data: [10, 20] }] })],
	[
		'chart pie',
		() =>
			h(Bamboo.BoChart, {
				type: 'pie',
				labels: ['One', 'Two'],
				series: [{ name: 'Share', data: [40, 60] }],
			}),
	],
	['breadcrumb', () => h(Bamboo.BoBreadcrumb, { items: [] })],
	['button', () => h(Bamboo.BoButton)],
	['button group', () => h(Bamboo.BoButtonGroup)],
	['card', () => h(Bamboo.BoCard)],
	['checkbox', () => h(Bamboo.BoCheckbox)],
	['dialog', () => h(Bamboo.BoDialog)],
	['open dialog', () => h(Bamboo.BoDialog, { open: true, title: 'SSR dialog' })],
	['empty', () => h(Bamboo.BoEmpty)],
	['icon', () => h(Bamboo.BoIcon, { icon: 'home' })],
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
	['pagination', () => h(Bamboo.BoPagination, { total: 0 })],
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
	[
		'accordion composition',
		() =>
			h(Bamboo.BoAccordion, null, () =>
				h(Bamboo.BoAccordionItem, { value: 'one', trigger: 'One' }, { content: () => 'Content' }),
			),
	],
	[
		'button group composition',
		() =>
			h(Bamboo.BoButtonGroup, null, () =>
				h(Bamboo.BoButtonGroupItem, { value: 'one' }, () => 'One'),
			),
	],
	[
		'dropdown composition',
		() =>
			h(Bamboo.BoDropdown, { open: true }, () => [
				h(Bamboo.BoDropdownTrigger, null, () => 'More'),
				h(Bamboo.BoDropdownContent, null, () => [
					h(Bamboo.BoDropdownLabel, null, () => 'Actions'),
					h(Bamboo.BoDropdownSeparator),
					h(Bamboo.BoDropdownItem, null, () => 'Open'),
				]),
			]),
	],
	[
		'form field composition',
		() =>
			h(Bamboo.BoForm, null, () =>
				h(Bamboo.BoFormField, { label: 'Email' }, () => h('input', { type: 'email' })),
			),
	],
	[
		'radio group composition',
		() =>
			h(Bamboo.BoRadioGroup, { modelValue: 'one' }, () =>
				h(Bamboo.BoRadioGroupItem, { value: 'one' }, () => 'One'),
			),
	],
	[
		'tabs composition',
		() =>
			h(Bamboo.BoTabs, { defaultValue: 'one' }, () => [
				h(Bamboo.BoTabsList, null, () => h(Bamboo.BoTabsTrigger, { value: 'one' }, () => 'One')),
				h(Bamboo.BoTabsContent, { value: 'one' }, () => 'Content'),
			]),
	],
	[
		'context menu composition',
		() =>
			h(Bamboo.BoContextMenu, { open: true }, () => [
				h(Bamboo.BoContextMenuTrigger, null, () => 'Target'),
				h(Bamboo.BoContextMenuContent, null, () => [
					h(Bamboo.BoContextMenuLabel, null, () => 'Actions'),
					h(Bamboo.BoContextMenuSeparator),
					h(Bamboo.BoContextMenuItem, null, () => 'Open'),
					h(Bamboo.BoContextMenuCheckboxItem, { checked: true }, () => 'Grid'),
					h(Bamboo.BoContextMenuRadioGroup, { value: 'one' }, () =>
						h(Bamboo.BoContextMenuRadioItem, { value: 'one' }, () => 'One'),
					),
				]),
			]),
	],
	[
		'menubar composition',
		() =>
			h(Bamboo.BoMenubar, null, () =>
				h(Bamboo.BoMenubarTrigger, { open: true, label: 'File' }, () => [
					h(Bamboo.BoMenubarLabel, null, () => 'File actions'),
					h(Bamboo.BoMenubarSeparator),
					h(Bamboo.BoMenubarItem, { value: 'Open' }, () => 'Open'),
					h(Bamboo.BoMenubarSubTrigger, { value: 'More' }, () =>
						h(Bamboo.BoMenubarItem, { value: 'Nested' }, () => 'Nested'),
					),
				]),
			),
	],
	[
		'popover composition',
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
	[
		'resizable composition',
		() =>
			h(Bamboo.BoResizable, null, () => [
				h(Bamboo.BoResizablePanel, null, () => 'A'),
				h(Bamboo.BoResizableHandle),
				h(Bamboo.BoResizablePanel, null, () => 'B'),
			]),
	],
	[
		'toggle group composition',
		() =>
			h(Bamboo.BoToggleGroup, null, () =>
				h(Bamboo.BoToggleGroupItem, { value: 'one' }, () => 'One'),
			),
	],
];

describe('public components SSR', () => {
	it.each(renderCases)('%s renders without browser globals', async (_name, render) => {
		const app = createSSRApp({ render });
		const html = await renderToString(app);

		expect(html).toEqual(expect.any(String));
	});
});
