import { i as IdentityService, r as ColorService } from "./services-B0Dtb--X.js";
import { S as __plugin_vue_export_helper_default, _ as BoTextWhiteSpace, a as bo_button_default, b as Icon, c as bo_loading_ring_default, d as BoFontFamily, f as BoFontSize, g as BoTextVariant, h as BoTextTransform, i as BoLinkBehavior, l as bo_badge_default, m as BoTextAlign, n as bo_tooltip_default, o as BoButtonType, p as BoFontWeight, r as bo_link_default, s as bo_loading_spinner_default, t as bo_tooltip_container_default, u as bo_text_default, v as bo_icon_default, x as svgPromiseRecord, y as BoIconVariant } from "./bo-tooltip-container-CVpQbOvW.js";
import { a as BoVariant, i as BoSize, n as BoLoaderTextPosition, o as AriaLive } from "./shared-CUg-8DyK.js";
import { Fragment, Teleport, Transition, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, inject, mergeModels, nextTick, normalizeClass, normalizeStyle, onMounted, onUnmounted, openBlock, provide, ref, renderList, renderSlot, toDisplayString, unref, useModel, vModelCheckbox, vModelDynamic, vModelRadio, watch, withCtx, withDirectives, withKeys, withModifiers } from "vue";
let BoAccordionShape = /* @__PURE__ */ function(r) {
	return r.rounded = "rounded", r.square = "square", r;
}({});
var _hoisted_1$25 = ["id", "data-testid"], bo_accordion_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-accordion",
	props: {
		id: { default: () => IdentityService.instance.getComponentId() },
		dataTestId: { default: () => IdentityService.instance.getDataTestId("bo-accordion") },
		modelValue: {},
		multiple: { type: Boolean },
		shape: { default: BoAccordionShape.rounded },
		borderColor: {},
		backgroundColor: {},
		customCssClass: {}
	},
	emits: ["update:modelValue"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = computed(() => Array.isArray(N.modelValue) ? N.modelValue : N.modelValue ? [N.modelValue] : []), I = computed(() => ({
			"bo-accordion": !0,
			[`bo-accordion--${N.shape}`]: !0
		}));
		function L(r) {
			if (N.multiple) {
				let M = Array.isArray(N.modelValue) ? N.modelValue : [];
				P("update:modelValue", M.includes(r) ? M.filter((M) => M !== r) : [...M, r]);
				return;
			}
			P("update:modelValue", N.modelValue === r ? "" : r);
		}
		return provide("accordion", {
			id: N.id,
			openItems: F,
			multiple: N.multiple,
			onToggleItem: L
		}), (M, N) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass([I.value, r.customCssClass]),
			"data-testid": r.dataTestId
		}, [renderSlot(M.$slots, "default", {}, void 0, !0)], 10, _hoisted_1$25));
	}
}), [["__scopeId", "data-v-70680c4a"]]), _hoisted_1$24 = [
	"id",
	"disabled",
	"aria-expanded",
	"aria-controls"
], _hoisted_2$21 = [
	"id",
	"aria-labelledby",
	"aria-hidden"
], _hoisted_3$14 = { class: "bo-accordion-item__body" }, bo_accordion_item_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-accordion-item",
	props: {
		id: {},
		dataTestId: {},
		title: {},
		subtitle: {},
		value: {},
		disabled: { type: Boolean },
		icon: {}
	},
	setup(r) {
		let M = r, N = inject("accordion", {
			id: "",
			multiple: !1,
			openItems: ref([]),
			onToggleItem: () => {}
		}), P = computed(() => N.openItems.value.includes(M.value)), F = computed(() => `${N.id}-header-${M.value}`), L = computed(() => `${N.id}-content-${M.value}`), R = computed(() => `${N.id}-content-${M.value}`), B = computed(() => `${N.id}-header-${M.value}`), V = computed(() => ({
			"bo-accordion-item": !0,
			"bo-accordion-item--open": P.value
		})), H = computed(() => ({
			"bo-accordion-item__content": !0,
			"bo-accordion-item__content--open": P.value
		})), U = computed(() => P.value ? "bo-accordion-item__chevron bo-accordion-item__chevron--open" : "bo-accordion-item__chevron");
		function W() {
			M.disabled || N.onToggleItem(M.value);
		}
		return (M, N) => (openBlock(), createElementBlock("div", { class: normalizeClass(V.value) }, [createElementVNode("button", {
			id: F.value,
			type: "button",
			class: "bo-accordion-item__header",
			disabled: r.disabled,
			"aria-expanded": P.value,
			"aria-controls": L.value,
			onClick: W
		}, [
			r.icon ? (openBlock(), createBlock(bo_icon_default, {
				key: 0,
				icon: r.icon,
				size: 16,
				class: "bo-accordion-item__leading-icon"
			}, null, 8, ["icon"])) : createCommentVNode("", !0),
			createVNode(unref(bo_text_default), {
				value: r.title,
				"font-size": unref(BoFontSize).sm,
				variant: unref(BoTextVariant).inherit,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-accordion-item__title"
			}, null, 8, [
				"value",
				"font-size",
				"variant",
				"font-weight"
			]),
			createVNode(bo_icon_default, {
				icon: unref(Icon).chevron_down,
				size: 16,
				"custom-css-class": U.value
			}, null, 8, ["icon", "custom-css-class"])
		], 8, _hoisted_1$24), createElementVNode("div", {
			id: R.value,
			class: normalizeClass(H.value),
			role: "region",
			"aria-labelledby": B.value,
			"aria-hidden": !P.value
		}, [createElementVNode("div", _hoisted_3$14, [renderSlot(M.$slots, "default", {}, void 0, !0)])], 10, _hoisted_2$21)], 2));
	}
}), [["__scopeId", "data-v-21449dab"]]), _hoisted_1$23 = [
	"id",
	"role",
	"aria-live",
	"aria-atomic",
	"aria-label",
	"data-testid"
], _hoisted_2$20 = {
	key: 0,
	class: "bo-alert__icon-wrapper"
}, _hoisted_3$13 = { class: "bo-alert__body" }, _hoisted_4$7 = {
	key: 1,
	class: "bo-alert__action"
}, _hoisted_5$4 = ["aria-label"], bo_alert_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-alert",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-alert") },
		variant: { default: BoVariant.primary },
		title: {},
		message: {},
		dismissible: { type: Boolean },
		showIcon: {
			type: Boolean,
			default: !0
		},
		customCssClass: {},
		ariaLabel: {},
		role: { default: "alert" },
		ariaLive: { default: "assertive" },
		ariaAtomic: {
			type: Boolean,
			default: !0
		},
		closeAriaLabel: { default: "Dismiss this notification" }
	},
	emits: ["dismiss"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = ref(!0), L = computed(() => [
			"bo-alert",
			`bo-alert--variant-${N.variant}`,
			N.customCssClass
		].filter(Boolean).join(" ")), R = computed(() => {
			switch (N.variant) {
				case BoVariant.success: return Icon.check_circle;
				case BoVariant.warning: return Icon.alert_triangle;
				case BoVariant.danger: return Icon.alert_octagon;
				case BoVariant.primary:
				case BoVariant.secondary:
				case BoVariant.light:
				case BoVariant.dark:
				default: return Icon.info;
			}
		});
		function B() {
			F.value = !1, P("dismiss");
		}
		return (M, N) => F.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			id: r.id,
			popover: "manual",
			class: normalizeClass(L.value),
			role: r.role,
			"aria-live": r.ariaLive,
			"aria-atomic": r.ariaAtomic,
			"aria-label": r.ariaLabel,
			"data-testid": r.dataTestId
		}, [
			r.showIcon ? (openBlock(), createElementBlock("div", _hoisted_2$20, [createVNode(bo_icon_default, {
				icon: R.value,
				size: 20,
				variant: unref(BoIconVariant).inherit,
				"custom-css-class": "bo-alert__icon"
			}, null, 8, ["icon", "variant"])])) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_3$13, [
				r.title ? (openBlock(), createBlock(unref(bo_text_default), {
					key: 0,
					value: r.title,
					"font-size": unref(BoFontSize).default,
					"font-weight": unref(BoFontWeight).semibold,
					variant: unref(BoTextVariant).inherit,
					"custom-css-class": "bo-alert__header"
				}, null, 8, [
					"value",
					"font-size",
					"font-weight",
					"variant"
				])) : createCommentVNode("", !0),
				r.message ? (openBlock(), createBlock(unref(bo_text_default), {
					key: 1,
					value: r.message,
					"font-size": unref(BoFontSize).sm,
					variant: unref(BoTextVariant).inherit,
					"custom-css-class": "bo-alert__text"
				}, null, 8, [
					"value",
					"font-size",
					"variant"
				])) : createCommentVNode("", !0),
				renderSlot(M.$slots, "default", {}, void 0, !0)
			]),
			r.dismissible ? (openBlock(), createElementBlock("div", _hoisted_4$7, [createElementVNode("button", {
				type: "button",
				class: "bo-alert__close",
				"aria-label": r.closeAriaLabel,
				onClick: B
			}, [createVNode(bo_icon_default, {
				icon: unref(Icon).x,
				size: 16
			}, null, 8, ["icon"])], 8, _hoisted_5$4)])) : createCommentVNode("", !0)
		], 10, _hoisted_1$23)) : createCommentVNode("", !0);
	}
}), [["__scopeId", "data-v-ae7ba0e4"]]);
let BoAvatarShape = /* @__PURE__ */ function(r) {
	return r.circle = "circle", r.rounded = "rounded", r.square = "square", r;
}({}), BoAvatarIndicatorPosition = /* @__PURE__ */ function(r) {
	return r.top_right = "top-right", r.top_left = "top-left", r.bottom_right = "bottom-right", r.bottom_left = "bottom-left", r;
}({});
var _hoisted_1$22 = [
	"id",
	"data-testid",
	"aria-label"
], _hoisted_2$19 = ["src", "alt"], bo_avatar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-avatar",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-avatar") },
		src: {},
		alt: {},
		size: { default: BoSize.md },
		shape: { default: BoAvatarShape.circle },
		text: {},
		showIndicator: { type: Boolean },
		indicatorVariant: { default: BoVariant.secondary },
		customBackgroundColor: {},
		customBorderColor: {},
		customTextColor: {},
		customCssClass: {},
		ariaLabel: {}
	},
	setup(r) {
		let N = r, P = computed(() => {
			switch (N.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.lg;
				case BoSize.xl: return BoFontSize.xl;
				case BoSize.md:
				default: return BoFontSize.default;
			}
		}), F = computed(() => N.text ? N.text.substring(0, 2).toUpperCase() : ""), I = computed(() => {
			let r = {};
			return N.customBorderColor && (r = {
				...r,
				borderColor: ColorService.instance.getValidCssColor(N.customBorderColor)
			}), N.customBackgroundColor && (r = {
				...r,
				backgroundColor: ColorService.instance.getValidCssColor(N.customBackgroundColor)
			}), N.customTextColor && (r = {
				...r,
				color: ColorService.instance.getValidCssColor(N.customTextColor)
			}), r;
		}), L = computed(() => ({
			"bo-avatar__image": !0,
			[`bo-avatar__image--shape-${N.shape}`]: !0
		})), R = computed(() => ({
			"bo-avatar__indicator": !0,
			[`bo-avatar__indicator--${N.indicatorVariant}`]: !0,
			[`bo-avatar__indicator--shape-${N.shape}`]: !0
		})), B = computed(() => ({
			"bo-avatar": !0,
			[`bo-avatar--size-${N.size}`]: !0,
			[`bo-avatar--shape-${N.shape}`]: !0,
			"bo-avatar--with-indicator": N.showIndicator
		})), V = computed(() => N.ariaLabel || N.alt || N.text || "Avatar");
		function H(r) {
			console.error("Avatar image failed to load:", r);
		}
		return onMounted(() => {
			!N.src && !N.text && console.warn("[BoAvatar]: Missing both \"src\" and \"text\" props. Please provide at least one to display the avatar content.");
		}), (M, N) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass([B.value, r.customCssClass]),
			style: normalizeStyle(I.value),
			"data-testid": r.dataTestId,
			role: "img",
			"aria-label": V.value
		}, [r.src ? (openBlock(), createElementBlock("img", {
			key: 0,
			src: r.src,
			alt: r.alt,
			"aria-hidden": "true",
			class: normalizeClass(L.value),
			onError: H
		}, null, 42, _hoisted_2$19)) : r.text ? (openBlock(), createBlock(unref(bo_text_default), {
			key: 1,
			value: F.value,
			"font-size": P.value,
			variant: unref(BoTextVariant).inherit,
			"font-weight": unref(BoFontWeight).semibold,
			class: "bo-avatar__text"
		}, null, 8, [
			"value",
			"font-size",
			"variant",
			"font-weight"
		])) : createCommentVNode("", !0), r.showIndicator ? (openBlock(), createElementBlock("span", {
			key: 2,
			class: normalizeClass([R.value, "bo-avatar__indicator"])
		}, null, 2)) : createCommentVNode("", !0)], 14, _hoisted_1$22));
	}
}), [["__scopeId", "data-v-cf3697fc"]]), _hoisted_1$21 = ["id", "data-testid"], _hoisted_2$18 = {
	key: 0,
	class: "bo-card__image"
}, _hoisted_3$12 = { class: "bo-card__content" }, _hoisted_4$6 = {
	key: 0,
	class: "bo-card__header"
}, _hoisted_5$3 = { class: "bo-card__body" }, _hoisted_6$2 = {
	key: 1,
	class: "bo-card__actions"
}, bo_card_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-card",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-card") },
		title: {},
		subtitle: {},
		hoverable: {
			type: Boolean,
			default: !1
		},
		clickable: {
			type: Boolean,
			default: !1
		},
		compact: {
			type: Boolean,
			default: !1
		},
		side: {
			type: Boolean,
			default: !1
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		glass: {
			type: Boolean,
			default: !1
		},
		customCssClass: {}
	},
	emits: ["click"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = computed(() => [
			"bo-card",
			N.hoverable && "bo-card--hoverable",
			N.clickable && "bo-card--clickable",
			N.compact && "bo-card--compact",
			N.side && "bo-card--side",
			N.bordered && "bo-card--bordered",
			N.glass && "bo-card--glass",
			N.customCssClass
		].filter(Boolean).join(" "));
		function I(r) {
			N.clickable && P("click", r);
		}
		return (M, N) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass(F.value),
			"data-testid": r.dataTestId,
			onClick: I
		}, [M.$slots.image ? (openBlock(), createElementBlock("figure", _hoisted_2$18, [renderSlot(M.$slots, "image", {}, void 0, !0)])) : createCommentVNode("", !0), createElementVNode("div", _hoisted_3$12, [
			r.title || r.subtitle || M.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_4$6, [renderSlot(M.$slots, "header", {}, () => [r.title ? (openBlock(), createBlock(unref(bo_text_default), {
				key: 0,
				value: r.title,
				"font-size": unref(BoFontSize).xl,
				"font-weight": unref(BoFontWeight).semibold,
				variant: unref(BoTextVariant).inherit,
				"custom-css-class": "bo-card__title"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight",
				"variant"
			])) : createCommentVNode("", !0), r.subtitle ? (openBlock(), createBlock(unref(bo_text_default), {
				key: 1,
				value: r.subtitle,
				"font-size": unref(BoFontSize).sm,
				variant: unref(BoTextVariant).inherit,
				"custom-css-class": "bo-card__subtitle"
			}, null, 8, [
				"value",
				"font-size",
				"variant"
			])) : createCommentVNode("", !0)], !0)])) : createCommentVNode("", !0),
			createElementVNode("div", _hoisted_5$3, [renderSlot(M.$slots, "default", {}, void 0, !0)]),
			M.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_6$2, [renderSlot(M.$slots, "actions", {}, void 0, !0)])) : createCommentVNode("", !0)
		])], 10, _hoisted_1$21));
	}
}), [["__scopeId", "data-v-6b6cc24a"]]);
let BoCheckboxSize = /* @__PURE__ */ function(r) {
	return r.sm = "sm", r.md = "md", r.lg = "lg", r;
}({});
var _hoisted_1$20 = [
	"id",
	"name",
	"value",
	"disabled",
	"indeterminate",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"tabindex",
	"data-testid"
], _hoisted_2$17 = { class: "bo-checkbox__box" }, _hoisted_3$11 = {
	key: 0,
	class: "bo-checkbox__icon",
	viewBox: "0 0 16 16",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_4$5 = {
	key: 1,
	class: "bo-checkbox__icon",
	viewBox: "0 0 16 16",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_5$2 = {
	key: 0,
	class: "bo-checkbox__label"
}, _hoisted_6$1 = {
	key: 0,
	class: "bo-checkbox__helper"
}, bo_checkbox_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-checkbox",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-checkbox") },
		name: {},
		value: {},
		size: { default: BoCheckboxSize.md },
		disabled: { type: Boolean },
		indeterminate: { type: Boolean },
		label: {},
		helperText: {},
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	}, {
		modelValue: {
			type: [Boolean, Array],
			default: !1
		},
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
	setup(r, { expose: M, emit: N }) {
		let P = r, F = useModel(r, "modelValue"), I = N, L = ref(null), R = computed(() => Array.isArray(F.value) ? P.value !== void 0 && F.value.includes(P.value) : F.value === !0), z = computed(() => {
			if (P.ariaLabel) return P.ariaLabel;
			if (P.label) return P.label;
		}), B = computed(() => {
			if (P.ariaDescribedBy) return P.ariaDescribedBy;
			if (P.helperText) return `${P.id}-helper`;
		}), V = computed(() => [
			"bo-checkbox",
			`bo-checkbox--size-${P.size}`,
			P.disabled && "bo-checkbox--disabled",
			R.value && "bo-checkbox--checked",
			P.indeterminate && "bo-checkbox--indeterminate"
		].filter(Boolean).join(" "));
		function H() {
			I("change", F.value);
		}
		return watch(() => P.indeterminate, (r) => {
			L.value && (L.value.indeterminate = r ?? !1);
		}, { immediate: !0 }), M({
			focus: () => L.value?.focus(),
			blur: () => L.value?.blur()
		}), (M, N) => (openBlock(), createElementBlock("div", { class: normalizeClass(["bo-checkbox__wrapper", r.customCssClass]) }, [createElementVNode("label", { class: normalizeClass(V.value) }, [
			withDirectives(createElementVNode("input", {
				id: r.id,
				ref_key: "checkboxRef",
				ref: L,
				"onUpdate:modelValue": N[0] ||= (r) => F.value = r,
				type: "checkbox",
				name: r.name,
				value: r.value,
				disabled: r.disabled,
				indeterminate: r.indeterminate,
				"aria-label": z.value,
				"aria-labelledby": r.ariaLabelledBy,
				"aria-describedby": B.value,
				"aria-live": r.ariaLive,
				tabindex: r.tabIndex,
				"data-testid": r.dataTestId,
				class: "bo-checkbox__input",
				onChange: H
			}, null, 40, _hoisted_1$20), [[vModelCheckbox, F.value]]),
			createElementVNode("span", _hoisted_2$17, [R.value && !r.indeterminate ? (openBlock(), createElementBlock("svg", _hoisted_3$11, [...N[1] ||= [createElementVNode("path", {
				d: "M13.3334 4L6.00002 11.3333L2.66669 8",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}, null, -1)]])) : r.indeterminate ? (openBlock(), createElementBlock("svg", _hoisted_4$5, [...N[2] ||= [createElementVNode("path", {
				d: "M4 8H12",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round"
			}, null, -1)]])) : createCommentVNode("", !0)]),
			r.label ? (openBlock(), createElementBlock("span", _hoisted_5$2, [createVNode(bo_text_default, {
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-color": "var(--checkbox-label)"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])])) : createCommentVNode("", !0)
		], 2), r.helperText ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createVNode(bo_text_default, {
			value: r.helperText,
			"font-size": unref(BoFontSize).xs,
			"custom-color": "var(--checkbox-helper)"
		}, null, 8, ["value", "font-size"])])) : createCommentVNode("", !0)], 2));
	}
}), [["__scopeId", "data-v-ae8fd01d"]]), _hoisted_1$19 = [
	"aria-labelledby",
	"aria-describedby",
	"aria-label"
], _hoisted_2$16 = {
	key: 0,
	class: "bo-checkbox-group__label"
}, bo_checkbox_group_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-checkbox-group",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-checkbox-group") },
		name: {},
		size: { default: BoCheckboxSize.md },
		disabled: { type: Boolean },
		label: {},
		helperText: {},
		errorText: {},
		hasError: { type: Boolean },
		required: { type: Boolean },
		direction: { default: "vertical" },
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {}
	}, {
		modelValue: { default: () => [] },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
	setup(r, { emit: M }) {
		let N = r, P = useModel(r, "modelValue"), F = M;
		provide("checkboxGroup", {
			name: N.name,
			size: N.size,
			disabled: N.disabled,
			modelValue: P,
			onChange: (r) => {
				P.value = r, F("change", r);
			}
		});
		let I = computed(() => {
			if (N.ariaLabel) return N.ariaLabel;
			if (N.label) return N.label;
		}), L = computed(() => {
			if (N.ariaDescribedBy) return N.ariaDescribedBy;
			if (R.value) return `${N.id}-message`;
		}), R = computed(() => N.hasError && N.errorText ? N.errorText : N.helperText), z = computed(() => {
			let r = ["bo-checkbox-group__message"];
			return N.hasError && r.push("bo-checkbox-group__message--error"), r.join(" ");
		}), B = computed(() => ({
			"bo-checkbox-group": !0,
			[`bo-checkbox-group--${N.direction}`]: !0,
			"bo-checkbox-group--error": N.hasError,
			"bo-checkbox-group--disabled": N.disabled
		}));
		return (M, N) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(["bo-checkbox-group__wrapper", r.customCssClass]),
			role: "group",
			"aria-labelledby": r.ariaLabelledBy,
			"aria-describedby": L.value,
			"aria-label": I.value
		}, [
			r.label ? (openBlock(), createElementBlock("div", _hoisted_2$16, [createVNode(bo_text_default, {
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			]), r.required ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: "*",
				"font-size": unref(BoFontSize).sm,
				"custom-css-class": "bo-checkbox-group__required"
			}, null, 8, ["font-size"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(B.value) }, [renderSlot(M.$slots, "default", {}, void 0, !0)], 2),
			R.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(z.value)
			}, [createVNode(bo_text_default, {
				value: R.value,
				"font-size": unref(BoFontSize).xs
			}, null, 8, ["value", "font-size"])], 2)) : createCommentVNode("", !0)
		], 10, _hoisted_1$19));
	}
}), [["__scopeId", "data-v-db9ff94c"]]), _hoisted_1$18 = [
	"id",
	"data-testid",
	"aria-orientation"
], _hoisted_2$15 = {
	key: 1,
	class: "bo-divider__text"
}, bo_divider_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-divider",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-divider") },
		orientation: { default: "horizontal" },
		text: {},
		customCssClass: {}
	},
	setup(r) {
		let M = r, N = computed(() => [
			"bo-divider",
			`bo-divider--${M.orientation}`,
			(M.text || M.customCssClass) && "bo-divider--with-text",
			M.customCssClass
		].filter(Boolean).join(" "));
		return (M, P) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass(N.value),
			"data-testid": r.dataTestId,
			role: "separator",
			"aria-orientation": r.orientation
		}, [r.text && !M.$slots.default ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: r.text,
			"font-size": unref(BoFontSize).sm,
			"custom-css-class": "bo-divider__text"
		}, null, 8, ["value", "font-size"])) : createCommentVNode("", !0), M.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2$15, [renderSlot(M.$slots, "default", {}, void 0, !0)])) : createCommentVNode("", !0)], 10, _hoisted_1$18));
	}
}), [["__scopeId", "data-v-6c237242"]]);
let BoDropzoneSize = /* @__PURE__ */ function(r) {
	return r.sm = "sm", r.md = "md", r.lg = "lg", r;
}({});
var _hoisted_1$17 = ["data-testid"], _hoisted_2$14 = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"aria-invalid",
	"tabindex",
	"onKeydown"
], _hoisted_3$10 = [
	"id",
	"name",
	"disabled",
	"multiple",
	"accept"
], _hoisted_4$4 = { class: "bo-dropzone__content" }, _hoisted_5$1 = {
	key: 1,
	class: "bo-dropzone__files"
}, _hoisted_6 = ["aria-label", "onClick"], bo_dropzone_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-dropzone",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-dropzone") },
		name: {},
		size: { default: BoDropzoneSize.md },
		disabled: { type: Boolean },
		multiple: { type: Boolean },
		accept: {},
		maxSize: {},
		maxFiles: {},
		label: {},
		helperText: {},
		errorText: {},
		hasError: { type: Boolean },
		dropzoneText: { default: "Click to upload or drag and drop" },
		hintText: { default: "Supported formats: All files" },
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	},
	emits: ["change", "error"],
	setup(r, { expose: M, emit: N }) {
		let P = r, F = N, L = ref(null), R = ref([]), z = ref(!1), B = computed(() => {
			switch (P.size) {
				case BoDropzoneSize.sm: return 24;
				case BoDropzoneSize.lg: return 40;
				case BoDropzoneSize.md:
				default: return 32;
			}
		}), V = computed(() => P.ariaLabel ? P.ariaLabel : P.label ? P.label : "File dropzone"), H = computed(() => {
			if (P.ariaDescribedBy) return P.ariaDescribedBy;
			if (U.value) return `${P.id}-message`;
		}), U = computed(() => P.hasError && P.errorText ? P.errorText : P.helperText), W = computed(() => {
			let r = ["bo-dropzone__message"];
			return P.hasError && r.push("bo-dropzone__message--error"), r.join(" ");
		}), G = computed(() => ({
			"bo-dropzone": !0,
			[`bo-dropzone--size-${P.size}`]: !0,
			"bo-dropzone--disabled": P.disabled,
			"bo-dropzone--error": P.hasError,
			"bo-dropzone--dragging": z.value,
			"bo-dropzone--has-files": R.value.length > 0
		}));
		function K() {
			P.disabled || L.value?.click();
		}
		function q(r) {
			P.disabled || (z.value = !0, r.dataTransfer && (r.dataTransfer.dropEffect = "copy"));
		}
		function J() {
			z.value = !1;
		}
		function Y(r) {
			z.value = !1, !P.disabled && Z(Array.from(r.dataTransfer?.files || []));
		}
		function X(r) {
			let M = r.target;
			Z(Array.from(M.files || []));
		}
		function Z(r) {
			if (P.maxFiles && r.length > P.maxFiles) {
				F("error", `Maximum ${P.maxFiles} files allowed`);
				return;
			}
			if (P.maxSize && r.filter((r) => r.size > P.maxSize).length > 0) {
				F("error", `File size exceeds maximum allowed size of ${$(P.maxSize)}`);
				return;
			}
			if (P.accept) {
				let M = P.accept.split(",").map((r) => r.trim());
				if (r.filter((r) => !M.some((M) => {
					if (M.startsWith(".")) return r.name.endsWith(M);
					if (M.endsWith("/*")) {
						let N = M.split("/")[0];
						return r.type.startsWith(N + "/");
					}
					return r.type === M;
				})).length > 0) {
					F("error", `Invalid file type. Accepted: ${P.accept}`);
					return;
				}
			}
			R.value = r, F("change", r);
		}
		function Q(r) {
			R.value.splice(r, 1), F("change", R.value);
		}
		function $(r) {
			if (r === 0) return "0 Bytes";
			let M = 1024, N = [
				"Bytes",
				"KB",
				"MB",
				"GB"
			], P = Math.floor(Math.log(r) / Math.log(M));
			return Math.round(r / M ** +P * 100) / 100 + " " + N[P];
		}
		return M({
			focus: () => L.value?.focus(),
			blur: () => L.value?.blur(),
			clear: () => {
				R.value = [], L.value && (L.value.value = "");
			}
		}), (M, N) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(["bo-dropzone__wrapper", r.customCssClass]),
			"data-testid": r.dataTestId
		}, [
			r.label ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-dropzone__label"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])) : createCommentVNode("", !0),
			createElementVNode("div", {
				class: normalizeClass(G.value),
				"aria-label": V.value,
				"aria-labelledby": r.ariaLabelledBy,
				"aria-describedby": H.value,
				"aria-live": r.ariaLive,
				"aria-invalid": r.hasError,
				tabindex: r.disabled ? -1 : r.tabIndex ?? 0,
				role: "button",
				onClick: K,
				onDragover: withModifiers(q, ["prevent"]),
				onDragleave: withModifiers(J, ["prevent"]),
				onDrop: withModifiers(Y, ["prevent"]),
				onKeydown: [withKeys(withModifiers(K, ["prevent"]), ["enter"]), withKeys(withModifiers(K, ["prevent"]), ["space"])]
			}, [createElementVNode("input", {
				id: r.id,
				ref_key: "fileInputRef",
				ref: L,
				type: "file",
				name: r.name,
				disabled: r.disabled,
				multiple: r.multiple,
				accept: r.accept,
				class: "bo-dropzone__input",
				onChange: X
			}, null, 40, _hoisted_3$10), createElementVNode("div", _hoisted_4$4, [
				createVNode(bo_icon_default, {
					icon: unref(Icon).upload,
					size: B.value,
					class: "bo-dropzone__icon"
				}, null, 8, ["icon", "size"]),
				createVNode(bo_text_default, {
					value: r.dropzoneText,
					"font-size": unref(BoFontSize).sm,
					"font-weight": unref(BoFontWeight).medium,
					"custom-css-class": "bo-dropzone__text"
				}, null, 8, [
					"value",
					"font-size",
					"font-weight"
				]),
				r.hintText ? (openBlock(), createBlock(bo_text_default, {
					key: 0,
					value: r.hintText,
					"font-size": unref(BoFontSize).xs,
					"custom-css-class": "bo-dropzone__hint"
				}, null, 8, ["value", "font-size"])) : createCommentVNode("", !0),
				R.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [(openBlock(!0), createElementBlock(Fragment, null, renderList(R.value, (r, M) => (openBlock(), createElementBlock("div", {
					key: M,
					class: "bo-dropzone__file"
				}, [
					createVNode(bo_icon_default, {
						icon: unref(Icon).file,
						size: 16
					}, null, 8, ["icon"]),
					createVNode(bo_text_default, {
						value: r.name,
						"font-size": unref(BoFontSize).xs,
						"custom-css-class": "bo-dropzone__file-name"
					}, null, 8, ["value", "font-size"]),
					createElementVNode("button", {
						type: "button",
						class: "bo-dropzone__file-remove",
						"aria-label": `Remove ${r.name}`,
						onClick: withModifiers((r) => Q(M), ["stop"])
					}, [createVNode(bo_icon_default, {
						icon: unref(Icon).x,
						size: 14
					}, null, 8, ["icon"])], 8, _hoisted_6)
				]))), 128))])) : createCommentVNode("", !0)
			])], 42, _hoisted_2$14),
			U.value ? (openBlock(), createBlock(bo_text_default, {
				key: 1,
				value: U.value,
				"font-size": unref(BoFontSize).xs,
				"custom-css-class": W.value
			}, null, 8, [
				"value",
				"font-size",
				"custom-css-class"
			])) : createCommentVNode("", !0)
		], 10, _hoisted_1$17));
	}
}), [["__scopeId", "data-v-13ba5c66"]]);
let BoInputType = /* @__PURE__ */ function(r) {
	return r.text = "text", r.email = "email", r.password = "password", r.number = "number", r.tel = "tel", r.url = "url", r.search = "search", r;
}({}), BoInputSize = /* @__PURE__ */ function(r) {
	return r.sm = "sm", r.md = "md", r.lg = "lg", r;
}({}), BoInputState = /* @__PURE__ */ function(r) {
	return r.default = "default", r.error = "error", r.success = "success", r;
}({});
var _hoisted_1$16 = {
	key: 0,
	class: "bo-input-wrapper__required"
}, _hoisted_2$13 = [
	"id",
	"type",
	"name",
	"placeholder",
	"disabled",
	"required",
	"readonly",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"aria-invalid",
	"tabindex",
	"autocomplete",
	"maxlength",
	"minlength",
	"pattern",
	"data-testid"
], _hoisted_3$9 = ["disabled"], bo_input_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-input",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-input") },
		name: {},
		type: { default: BoInputType.text },
		size: { default: BoInputSize.md },
		state: { default: BoInputState.default },
		placeholder: {},
		disabled: { type: Boolean },
		required: { type: Boolean },
		readonly: { type: Boolean },
		label: {},
		helperText: {},
		errorText: {},
		successText: {},
		prefixIcon: {},
		suffixIcon: {},
		actionText: {},
		actionDisabled: { type: Boolean },
		clearable: { type: Boolean },
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {},
		autocomplete: {},
		maxlength: {},
		minlength: {},
		pattern: {}
	}, {
		modelValue: { default: "" },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"blur",
		"focus",
		"clear",
		"action"
	], ["update:modelValue"]),
	setup(r, { expose: M, emit: N }) {
		let P = r, F = useModel(r, "modelValue"), L = N, R = ref(null), z = ref(!1), B = computed(() => {
			switch (P.size) {
				case BoInputSize.sm: return 14;
				case BoInputSize.lg: return 18;
				case BoInputSize.md:
				default: return 16;
			}
		}), V = computed(() => {
			if (P.ariaLabel) return P.ariaLabel;
			if (P.label) return P.label;
		}), H = computed(() => {
			if (P.ariaDescribedBy) return P.ariaDescribedBy;
			if (W.value) return `${P.id}-message`;
		}), U = computed(() => P.clearable && !P.disabled && !P.readonly && F.value !== "" && F.value !== null && F.value !== void 0), W = computed(() => P.state === BoInputState.error && P.errorText ? P.errorText : P.state === BoInputState.success && P.successText ? P.successText : P.helperText), G = computed(() => {
			let r = ["bo-input-wrapper__message"];
			return P.state === BoInputState.error ? r.push("bo-input-wrapper__message--error") : P.state === BoInputState.success && r.push("bo-input-wrapper__message--success"), r.join(" ");
		}), K = computed(() => [
			"bo-input",
			`bo-input--size-${P.size}`,
			`bo-input--state-${P.state}`,
			P.disabled && "bo-input--disabled",
			P.readonly && "bo-input--readonly",
			z.value && "bo-input--focused",
			P.prefixIcon && "bo-input--with-prefix",
			(P.suffixIcon || U.value) && "bo-input--with-suffix",
			P.actionText && "bo-input--with-action"
		].filter(Boolean).join(" "));
		function q(r) {
			z.value = !1, L("blur", r);
		}
		function J(r) {
			z.value = !0, L("focus", r);
		}
		function Y() {
			F.value = "", L("clear"), R.value?.focus();
		}
		function X() {
			L("action");
		}
		return M({
			focus: () => R.value?.focus(),
			blur: () => R.value?.blur()
		}), (M, N) => (openBlock(), createElementBlock("div", { class: normalizeClass(["bo-input-wrapper", r.customCssClass]) }, [
			r.label ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-input-wrapper__label"
			}, {
				default: withCtx(() => [r.required ? (openBlock(), createElementBlock("span", _hoisted_1$16, "*")) : createCommentVNode("", !0)]),
				_: 1
			}, 8, [
				"value",
				"font-size",
				"font-weight"
			])) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(K.value) }, [
				r.prefixIcon ? (openBlock(), createBlock(bo_icon_default, {
					key: 0,
					icon: r.prefixIcon,
					size: B.value,
					class: "bo-input__icon bo-input__icon--prefix"
				}, null, 8, ["icon", "size"])) : createCommentVNode("", !0),
				withDirectives(createElementVNode("input", {
					id: r.id,
					ref_key: "inputRef",
					ref: R,
					"onUpdate:modelValue": N[0] ||= (r) => F.value = r,
					type: r.type,
					name: r.name,
					placeholder: r.placeholder,
					disabled: r.disabled,
					required: r.required,
					readonly: r.readonly,
					"aria-label": V.value,
					"aria-labelledby": r.ariaLabelledBy,
					"aria-describedby": H.value,
					"aria-live": r.ariaLive,
					"aria-invalid": r.state === unref(BoInputState).error,
					tabindex: r.tabIndex,
					autocomplete: r.autocomplete,
					maxlength: r.maxlength,
					minlength: r.minlength,
					pattern: r.pattern,
					"data-testid": r.dataTestId,
					class: "bo-input__field",
					onBlur: q,
					onFocus: J
				}, null, 40, _hoisted_2$13), [[vModelDynamic, F.value]]),
				r.suffixIcon && !U.value && !r.actionText ? (openBlock(), createBlock(bo_icon_default, {
					key: 1,
					icon: r.suffixIcon,
					size: B.value,
					class: "bo-input__icon bo-input__icon--suffix"
				}, null, 8, ["icon", "size"])) : createCommentVNode("", !0),
				U.value && !r.actionText ? (openBlock(), createElementBlock("button", {
					key: 2,
					type: "button",
					class: "bo-input__button bo-input__button--clear",
					"aria-label": "Clear input",
					onClick: Y
				}, [createVNode(bo_icon_default, {
					icon: unref(Icon).x,
					size: 14
				}, null, 8, ["icon"])])) : createCommentVNode("", !0),
				r.actionText ? (openBlock(), createElementBlock("button", {
					key: 3,
					type: "button",
					class: "bo-input__button bo-input__button--action",
					disabled: r.actionDisabled,
					onClick: X
				}, toDisplayString(r.actionText), 9, _hoisted_3$9)) : createCommentVNode("", !0)
			], 2),
			W.value ? (openBlock(), createBlock(bo_text_default, {
				key: 1,
				value: W.value,
				"font-size": unref(BoFontSize).xs,
				"custom-css-class": G.value
			}, null, 8, [
				"value",
				"font-size",
				"custom-css-class"
			])) : createCommentVNode("", !0)
		], 2));
	}
}), [["__scopeId", "data-v-d17799e2"]]), _hoisted_1$15 = [
	"id",
	"data-testid",
	"aria-live",
	"aria-label",
	"aria-busy"
], bo_loading_dots_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-loading-dots",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-loading-dots") },
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		loaderText: {},
		textPosition: { default: BoLoaderTextPosition.after },
		customColor: {},
		ariaLive: {},
		ariaLabel: {},
		ariaBusy: { type: Boolean },
		customContainerCssClass: {},
		customDotsCssClass: {}
	},
	setup(r) {
		let M = r, N = computed(() => {
			switch (M.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.xl;
				case BoSize.xl: return BoFontSize["2xl"];
				case BoSize.md:
				default: return BoFontSize.lg;
			}
		}), P = computed(() => ({
			"bo-loader": !0,
			[`bo-loader--${M.textPosition}`]: !0
		})), F = computed(() => ({
			"bo-loader__dots": !0,
			[`bo-loader__dots--${M.size}`]: !0,
			[`bo-loader__dots--${M.variant}`]: !0
		})), I = computed(() => M.customColor ? {
			"--custom-dot-color": M.customColor,
			background: M.customColor
		} : {});
		return (M, L) => (openBlock(), createElementBlock("div", {
			id: r.id,
			"data-testid": r.dataTestId,
			class: normalizeClass([P.value, r.customContainerCssClass]),
			"aria-live": r.ariaLive,
			"aria-label": r.ariaLabel,
			"aria-busy": r.ariaBusy
		}, [createElementVNode("span", {
			class: normalizeClass([F.value, r.customDotsCssClass]),
			style: normalizeStyle(I.value)
		}, null, 6), renderSlot(M.$slots, "default", {}, () => [r.loaderText ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: r.loaderText,
			"font-size": N.value,
			variant: unref(BoTextVariant).secondary
		}, null, 8, [
			"value",
			"font-size",
			"variant"
		])) : createCommentVNode("", !0)], !0)], 10, _hoisted_1$15));
	}
}), [["__scopeId", "data-v-65141ec0"]]);
let BoModalSize = /* @__PURE__ */ function(r) {
	return r.sm = "sm", r.md = "md", r.lg = "lg", r.xl = "xl", r.full = "full", r;
}({});
var _hoisted_1$14 = [
	"id",
	"aria-label",
	"data-testid"
], _hoisted_2$12 = ["disabled"], _hoisted_3$8 = [
	"disabled",
	"aria-label",
	"aria-current",
	"onClick"
], _hoisted_4$3 = ["disabled"], bo_pagination_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-pagination",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-pagination") },
		currentPage: {},
		totalPages: {},
		size: { default: BoSize.md },
		showSimple: {
			type: Boolean,
			default: !1
		},
		maxVisiblePages: { default: 7 },
		customCssClass: {},
		ariaLabel: {}
	},
	emits: ["pageChange"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = computed(() => {
			switch (N.size) {
				case BoSize.xs: return 12;
				case BoSize.sm: return 14;
				case BoSize.lg: return 18;
				case BoSize.xl: return 20;
				case BoSize.md:
				default: return 16;
			}
		}), L = computed(() => {
			switch (N.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.lg;
				case BoSize.xl: return BoFontSize.xl;
				case BoSize.md:
				default: return BoFontSize.default;
			}
		}), R = computed(() => {
			let r = [], { currentPage: M, totalPages: P, maxVisiblePages: F } = N;
			if (P <= F) {
				for (let M = 1; M <= P; M++) r.push(M);
				return r;
			}
			let I = Math.floor(F / 2), L = Math.max(1, M - I), R = Math.min(P, M + I);
			M <= I ? R = F - 1 : M >= P - I && (L = P - F + 2), r.push(1), L > 2 && r.push("...");
			for (let M = L; M <= R; M++) M !== 1 && M !== P && r.push(M);
			return R < P - 1 && r.push("..."), P > 1 && r.push(P), r;
		}), z = computed(() => [
			"bo-pagination",
			N.showSimple && "bo-pagination--simple",
			`bo-pagination--size-${N.size}`,
			N.customCssClass
		].filter(Boolean).join(" "));
		function B(r) {
			return r === "..." ? "bo-pagination__ellipsis" : ["bo-pagination__page", r === N.currentPage && "bo-pagination__page--active"].filter(Boolean).join(" ");
		}
		function V(r) {
			r >= 1 && r <= N.totalPages && r !== N.currentPage && P("pageChange", r);
		}
		return (M, N) => (openBlock(), createElementBlock("nav", {
			id: r.id,
			class: normalizeClass(z.value),
			"aria-label": r.ariaLabel || "Pagination",
			"data-testid": r.dataTestId
		}, [
			createElementVNode("button", {
				type: "button",
				class: "bo-pagination__prev",
				disabled: r.currentPage === 1,
				"aria-label": "Go to previous page",
				onClick: N[0] ||= (M) => V(r.currentPage - 1)
			}, [createVNode(bo_icon_default, {
				icon: unref(Icon).chevron_left,
				size: F.value
			}, null, 8, ["icon", "size"])], 8, _hoisted_2$12),
			r.showSimple ? (openBlock(), createBlock(unref(bo_text_default), {
				key: 0,
				value: `${r.currentPage} / ${r.totalPages}`,
				"font-size": L.value,
				"font-weight": unref(BoFontWeight).medium,
				class: "bo-pagination__info"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])) : (openBlock(!0), createElementBlock(Fragment, { key: 1 }, renderList(R.value, (M) => (openBlock(), createElementBlock("button", {
				key: M,
				type: "button",
				class: normalizeClass(B(M)),
				disabled: M === "...",
				"aria-label": M === "..." ? void 0 : `Go to page ${M}`,
				"aria-current": M === r.currentPage ? "page" : void 0,
				onClick: (r) => M !== "..." && V(M)
			}, toDisplayString(M), 11, _hoisted_3$8))), 128)),
			createElementVNode("button", {
				type: "button",
				class: "bo-pagination__next",
				disabled: r.currentPage === r.totalPages,
				"aria-label": "Go to next page",
				onClick: N[1] ||= (M) => V(r.currentPage + 1)
			}, [createVNode(bo_icon_default, {
				icon: unref(Icon).chevron_right,
				size: F.value
			}, null, 8, ["icon", "size"])], 8, _hoisted_4$3)
		], 10, _hoisted_1$14));
	}
}), [["__scopeId", "data-v-6785a3a0"]]), _hoisted_1$13 = ["id", "data-testid"], _hoisted_2$11 = { class: "bo-popover__content" }, bo_popover_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-popover",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-popover") },
		placement: { default: "top" },
		trigger: { default: "click" },
		title: {},
		content: {},
		modelValue: {
			type: Boolean,
			default: !1
		},
		customCssClass: {}
	},
	emits: ["update:modelValue"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = ref(N.modelValue), I = ref(null), L = ref(null), R = ref({});
		watch(() => N.modelValue, async (r) => {
			F.value = r, r && (await nextTick(), G());
		}), watch(F, (r) => {
			P("update:modelValue", r), r && nextTick(() => G());
		});
		function B() {
			N.trigger === "click" && (F.value = !F.value);
		}
		function V() {
			N.trigger === "hover" && (F.value = !0);
		}
		function H() {
			N.trigger === "hover" && (F.value = !1);
		}
		function U() {
			N.trigger === "focus" && (F.value = !0);
		}
		function W() {
			N.trigger === "focus" && (F.value = !1);
		}
		function G() {
			if (!I.value || !F.value) return;
			let r = I.value.getBoundingClientRect(), M = 0, P = 0;
			switch (N.placement) {
				case "top":
					M = r.top - 8, P = r.left + r.width / 2;
					break;
				case "bottom":
					M = r.bottom + 8, P = r.left + r.width / 2;
					break;
				case "left":
					M = r.top + r.height / 2, P = r.left - 8;
					break;
				case "right":
					M = r.top + r.height / 2, P = r.right + 8;
					break;
			}
			R.value = {
				position: "fixed",
				top: `${M}px`,
				left: `${P}px`,
				zIndex: 9999
			};
		}
		function K(r) {
			F.value && I.value && L.value && !I.value.contains(r.target) && !L.value.contains(r.target) && (F.value = !1);
		}
		return onMounted(() => {
			document.addEventListener("click", K), window.addEventListener("scroll", G), window.addEventListener("resize", G);
		}), onUnmounted(() => {
			document.removeEventListener("click", K), window.removeEventListener("scroll", G), window.removeEventListener("resize", G);
		}), (M, N) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: "bo-popover__wrapper",
			"data-testid": r.dataTestId
		}, [createElementVNode("div", {
			ref_key: "triggerRef",
			ref: I,
			class: "bo-popover__trigger",
			onClick: B,
			onMouseenter: V,
			onMouseleave: H,
			onFocus: U,
			onBlur: W
		}, [renderSlot(M.$slots, "trigger", {}, void 0, !0)], 544), (openBlock(), createBlock(Teleport, { to: "body" }, [F.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			ref_key: "popoverRef",
			ref: L,
			class: normalizeClass([
				"bo-popover",
				`bo-popover--${r.placement}`,
				r.customCssClass
			]),
			style: normalizeStyle(R.value)
		}, [r.title ? (openBlock(), createBlock(unref(bo_text_default), {
			key: 0,
			value: r.title,
			"font-size": unref(BoFontSize).sm,
			"font-weight": unref(BoFontWeight).semibold,
			variant: unref(BoTextVariant).inherit,
			"custom-css-class": "bo-popover__title"
		}, null, 8, [
			"value",
			"font-size",
			"font-weight",
			"variant"
		])) : createCommentVNode("", !0), createElementVNode("div", _hoisted_2$11, [renderSlot(M.$slots, "default", {}, () => [r.content ? (openBlock(), createBlock(unref(bo_text_default), {
			key: 0,
			value: r.content,
			"font-size": unref(BoFontSize).sm,
			variant: unref(BoTextVariant).inherit
		}, null, 8, [
			"value",
			"font-size",
			"variant"
		])) : createCommentVNode("", !0)], !0)])], 6)) : createCommentVNode("", !0)]))], 8, _hoisted_1$13));
	}
}), [["__scopeId", "data-v-17c4c0f0"]]), _hoisted_1$12 = ["id", "data-testid"], _hoisted_2$10 = {
	key: 0,
	class: "bo-progress__header"
}, _hoisted_3$7 = [
	"aria-valuenow",
	"aria-valuemax",
	"aria-label"
], _hoisted_4$2 = ["aria-label"], bo_progress_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-progress",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-progress") },
		value: { default: 0 },
		max: { default: 100 },
		label: {},
		showValue: { type: Boolean },
		showValueInside: { type: Boolean },
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		indeterminate: {
			type: Boolean,
			default: !1
		},
		customCssClass: {},
		ariaLabel: {}
	},
	setup(r) {
		let M = r, N = computed(() => {
			let r = M.value / M.max * 100;
			return Math.min(Math.max(r, 0), 100);
		}), P = computed(() => M.max === 100 ? `${Math.round(N.value)}%` : `${M.value}/${M.max}`);
		return (M, F) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass(["bo-progress", r.customCssClass]),
			"data-testid": r.dataTestId
		}, [r.label || r.showValue ? (openBlock(), createElementBlock("div", _hoisted_2$10, [r.label ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: r.label,
			"font-size": unref(BoFontSize).sm,
			"font-weight": unref(BoFontWeight).medium,
			"custom-css-class": "bo-progress__label"
		}, null, 8, [
			"value",
			"font-size",
			"font-weight"
		])) : createCommentVNode("", !0), r.showValue ? (openBlock(), createBlock(bo_text_default, {
			key: 1,
			value: P.value,
			"font-size": unref(BoFontSize).xs,
			"font-weight": unref(BoFontWeight).semibold,
			"custom-css-class": "bo-progress__value"
		}, null, 8, [
			"value",
			"font-size",
			"font-weight"
		])) : createCommentVNode("", !0)])) : createCommentVNode("", !0), createElementVNode("div", { class: normalizeClass([
			"bo-progress__track",
			`bo-progress__track--size-${r.size}`,
			`bo-progress__track--variant-${r.variant}`
		]) }, [r.indeterminate ? (openBlock(), createElementBlock("div", {
			key: 1,
			class: normalizeClass([
				"bo-progress__bar",
				"bo-progress__bar--indeterminate",
				`bo-progress__bar--variant-${r.variant}`
			]),
			role: "progressbar",
			"aria-label": r.ariaLabel || r.label || "Loading",
			"aria-valuemin": "0",
			"aria-valuemax": "100"
		}, null, 10, _hoisted_4$2)) : (openBlock(), createElementBlock("div", {
			key: 0,
			class: normalizeClass(["bo-progress__bar", `bo-progress__bar--variant-${r.variant}`]),
			style: normalizeStyle({ width: `${N.value}%` }),
			role: "progressbar",
			"aria-valuenow": r.value,
			"aria-valuemin": 0,
			"aria-valuemax": r.max,
			"aria-label": r.ariaLabel || r.label
		}, [r.showValueInside ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: P.value,
			"font-size": unref(BoFontSize).xs,
			"font-weight": unref(BoFontWeight).semibold,
			"custom-css-class": "bo-progress__value-inside"
		}, null, 8, [
			"value",
			"font-size",
			"font-weight"
		])) : createCommentVNode("", !0)], 14, _hoisted_3$7))], 2)], 10, _hoisted_1$12));
	}
}), [["__scopeId", "data-v-b4141147"]]), _hoisted_1$11 = [
	"id",
	"role",
	"aria-valuenow",
	"aria-label",
	"data-testid"
], _hoisted_2$9 = { class: "bo-radial-progress__text" }, bo_radial_progress_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-radial-progress",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-radial-progress") },
		value: {},
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		customColor: {},
		thickness: { default: 4 },
		showValue: {
			type: Boolean,
			default: !0
		},
		customText: {},
		customCssClass: {},
		role: {},
		ariaLabel: {}
	},
	setup(r) {
		let N = r, P = computed(() => N.ariaLabel ? N.ariaLabel : `Progress: ${N.value}%`), F = computed(() => N.customText ? N.customText : `${Math.round(N.value)}%`), I = computed(() => {
			switch (N.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.lg;
				case BoSize.xl: return BoFontSize.xl;
				case BoSize.md:
				default: return BoFontSize.default;
			}
		}), L = computed(() => {
			if (N.customColor) {
				let r = ColorService.instance.getValidCssColor(N.customColor);
				return { "--progress-color": r };
			}
			return {};
		}), R = computed(() => {
			let r = Math.max(0, Math.min(100, N.value));
			return {
				"--value": r,
				"--thickness": `${N.thickness}px`,
				...L.value
			};
		}), B = computed(() => [
			"bo-radial-progress",
			`bo-radial-progress--size-${N.size}`,
			`bo-radial-progress--variant-${N.variant}`
		].filter(Boolean).join(" "));
		return (M, N) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass([B.value, r.customCssClass]),
			style: normalizeStyle(R.value),
			role: r.role || "progressbar",
			"aria-valuenow": r.value,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-label": P.value,
			"data-testid": r.dataTestId
		}, [createElementVNode("div", _hoisted_2$9, [renderSlot(M.$slots, "default", {}, () => [r.showValue || r.customText ? (openBlock(), createBlock(unref(bo_text_default), {
			key: 0,
			value: F.value,
			"font-size": I.value,
			"font-weight": unref(BoFontWeight).semibold,
			variant: unref(BoTextVariant).inherit
		}, null, 8, [
			"value",
			"font-size",
			"font-weight",
			"variant"
		])) : createCommentVNode("", !0)], !0)])], 14, _hoisted_1$11));
	}
}), [["__scopeId", "data-v-23756504"]]);
let BoRadioSize = /* @__PURE__ */ function(r) {
	return r.sm = "sm", r.md = "md", r.lg = "lg", r;
}({});
var _hoisted_1$10 = [
	"id",
	"name",
	"value",
	"disabled",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"tabindex",
	"data-testid"
], _hoisted_2$8 = { class: "bo-radio__circle" }, _hoisted_3$6 = {
	key: 0,
	class: "bo-radio__dot"
}, bo_radio_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-radio",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-radio") },
		name: {},
		value: {},
		size: { default: BoRadioSize.md },
		disabled: { type: Boolean },
		label: {},
		helperText: {},
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
	setup(r, { expose: M, emit: N }) {
		let P = r, F = useModel(r, "modelValue"), I = N, L = ref(null), R = computed(() => F.value === P.value), z = computed(() => {
			if (P.ariaLabel) return P.ariaLabel;
			if (P.label) return P.label;
		}), B = computed(() => {
			if (P.ariaDescribedBy) return P.ariaDescribedBy;
			if (P.helperText) return `${P.id}-helper`;
		}), V = computed(() => {
			let r = ["bo-radio"];
			return P.customCssClass && r.push(P.customCssClass), r;
		}), H = computed(() => ({
			"bo-radio__container": !0,
			[`bo-radio__container--size-${P.size}`]: !0,
			"bo-radio__container--disabled": P.disabled,
			"bo-radio__container--checked": R.value
		}));
		function U() {
			I("change", P.value);
		}
		return M({
			focus: () => L.value?.focus(),
			blur: () => L.value?.blur()
		}), (M, N) => (openBlock(), createElementBlock("div", { class: normalizeClass(V.value) }, [createElementVNode("label", { class: normalizeClass(H.value) }, [
			withDirectives(createElementVNode("input", {
				id: r.id,
				ref_key: "radioRef",
				ref: L,
				"onUpdate:modelValue": N[0] ||= (r) => F.value = r,
				type: "radio",
				name: r.name,
				value: r.value,
				disabled: r.disabled,
				"aria-label": z.value,
				"aria-labelledby": r.ariaLabelledBy,
				"aria-describedby": B.value,
				"aria-live": r.ariaLive,
				tabindex: r.tabIndex,
				"data-testid": r.dataTestId,
				class: "bo-radio__input",
				onChange: U
			}, null, 40, _hoisted_1$10), [[vModelRadio, F.value]]),
			createElementVNode("span", _hoisted_2$8, [R.value ? (openBlock(), createElementBlock("span", _hoisted_3$6)) : createCommentVNode("", !0)]),
			r.label ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-radio__label"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])) : createCommentVNode("", !0)
		], 2), r.helperText ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: r.helperText,
			"font-size": unref(BoFontSize).xs,
			"custom-css-class": "bo-radio__helper"
		}, null, 8, ["value", "font-size"])) : createCommentVNode("", !0)], 2));
	}
}), [["__scopeId", "data-v-67161025"]]), _hoisted_1$9 = [
	"aria-labelledby",
	"aria-describedby",
	"aria-label"
], _hoisted_2$7 = {
	key: 0,
	class: "bo-radio-group__required"
}, bo_radio_group_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-radio-group",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-radio-group") },
		name: {},
		size: { default: BoRadioSize.md },
		disabled: { type: Boolean },
		label: {},
		helperText: {},
		errorText: {},
		hasError: { type: Boolean },
		required: { type: Boolean },
		direction: { default: "vertical" },
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {}
	}, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
	setup(r, { emit: M }) {
		let N = r, P = useModel(r, "modelValue"), F = M;
		provide("radioGroup", {
			name: N.name,
			size: N.size,
			disabled: N.disabled,
			modelValue: P,
			onChange: (r) => {
				P.value = r, F("change", r);
			}
		});
		let I = computed(() => {
			if (N.ariaLabel) return N.ariaLabel;
			if (N.label) return N.label;
		}), L = computed(() => {
			if (N.ariaDescribedBy) return N.ariaDescribedBy;
			if (R.value) return `${N.id}-message`;
		}), R = computed(() => N.hasError && N.errorText ? N.errorText : N.helperText), z = computed(() => {
			let r = ["bo-radio-group"];
			return N.customCssClass && r.push(N.customCssClass), r;
		}), B = computed(() => {
			let r = ["bo-radio-group__message"];
			return N.hasError && r.push("bo-radio-group__message--error"), r.join(" ");
		}), V = computed(() => ({
			"bo-radio-group__container": !0,
			[`bo-radio-group__container--${N.direction}`]: !0,
			"bo-radio-group__container--error": N.hasError
		}));
		return (M, N) => (openBlock(), createElementBlock("div", {
			class: normalizeClass(z.value),
			role: "radiogroup",
			"aria-labelledby": r.ariaLabelledBy,
			"aria-describedby": L.value,
			"aria-label": I.value
		}, [
			r.label ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-radio-group__label"
			}, {
				default: withCtx(() => [r.required ? (openBlock(), createElementBlock("span", _hoisted_2$7, "*")) : createCommentVNode("", !0)]),
				_: 1
			}, 8, [
				"value",
				"font-size",
				"font-weight"
			])) : createCommentVNode("", !0),
			createElementVNode("div", { class: normalizeClass(V.value) }, [renderSlot(M.$slots, "default", {}, void 0, !0)], 2),
			R.value ? (openBlock(), createBlock(bo_text_default, {
				key: 1,
				value: R.value,
				"font-size": unref(BoFontSize).xs,
				"custom-css-class": B.value
			}, null, 8, [
				"value",
				"font-size",
				"custom-css-class"
			])) : createCommentVNode("", !0)
		], 10, _hoisted_1$9));
	}
}), [["__scopeId", "data-v-0a854402"]]), bo_search_input_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-search-input",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-search-input") },
		placeholder: { default: "Search..." },
		size: { default: BoInputSize.md },
		disabled: { type: Boolean },
		actionText: { default: "Search" },
		actionDisabled: { type: Boolean },
		customCssClass: {}
	}, {
		modelValue: { default: "" },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels(["search", "submit"], ["update:modelValue"]),
	setup(r, { emit: M }) {
		let N = r, P = useModel(r, "modelValue"), F = M, L = computed(() => ({
			"bo-search-input": !0,
			"bo-search-input--disabled": N.disabled,
			[`bo-search-input--size-${N.size}`]: !0,
			[N.customCssClass || ""]: !!N.customCssClass
		}));
		watch(P, (r) => {
			F("search", r);
		});
		function R() {
			F("submit", P.value);
		}
		return (M, N) => (openBlock(), createElementBlock("form", {
			class: normalizeClass(L.value),
			onSubmit: withModifiers(R, ["prevent"])
		}, [createVNode(bo_input_default, {
			modelValue: P.value,
			"onUpdate:modelValue": N[0] ||= (r) => P.value = r,
			id: r.id,
			"data-testid": r.dataTestId,
			type: unref(BoInputType).search,
			size: r.size,
			placeholder: r.placeholder,
			disabled: r.disabled,
			"prefix-icon": unref(Icon).search,
			"action-text": r.actionText,
			"action-disabled": r.actionDisabled,
			clearable: !0,
			"custom-css-class": "bo-search-input__input",
			onAction: R
		}, null, 8, [
			"modelValue",
			"id",
			"data-testid",
			"type",
			"size",
			"placeholder",
			"disabled",
			"prefix-icon",
			"action-text",
			"action-disabled"
		])], 34));
	}
}), [["__scopeId", "data-v-967c5a96"]]);
let BoSidePanelShape = /* @__PURE__ */ function(r) {
	return r.Rounded = "rounded", r.Square = "square", r;
}({});
var _hoisted_1$8 = ["id", "data-testid"], _hoisted_2$6 = { class: "bo-side-panel__header" }, _hoisted_3$5 = { class: "bo-side-panel__body" }, bo_side_panel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-side-panel",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-side-panel") },
		modelValue: { type: Boolean },
		position: { default: "right" },
		width: { default: "24rem" },
		title: {},
		shape: { default: BoSidePanelShape.Square },
		customCssClass: {}
	},
	emits: ["update:modelValue"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = Icon.x, L = computed(() => ({
			"bo-side-panel": !0,
			[`bo-side-panel--${N.position}`]: !0,
			[`bo-side-panel--${N.shape}`]: !0,
			[N.customCssClass || ""]: !!N.customCssClass
		})), R = computed(() => ({ width: typeof N.width == "number" ? `${N.width}px` : N.width }));
		function B() {
			P("update:modelValue", !1);
		}
		return (M, N) => (openBlock(), createBlock(Teleport, { to: "body" }, [r.modelValue ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: "bo-side-panel__overlay",
			onClick: B
		}, [createElementVNode("aside", {
			id: r.id,
			class: normalizeClass(L.value),
			style: normalizeStyle(R.value),
			"data-testid": r.dataTestId,
			onClick: N[0] ||= withModifiers(() => {}, ["stop"])
		}, [createElementVNode("div", _hoisted_2$6, [r.title ? (openBlock(), createBlock(unref(bo_text_default), {
			key: 0,
			value: r.title,
			"font-size": unref(BoFontSize).lg,
			"font-weight": unref(BoFontWeight).semibold,
			variant: unref(BoTextVariant).inherit,
			"custom-css-class": "bo-side-panel__title"
		}, null, 8, [
			"value",
			"font-size",
			"font-weight",
			"variant"
		])) : createCommentVNode("", !0), createElementVNode("button", {
			type: "button",
			class: "bo-side-panel__close",
			"aria-label": "Close",
			onClick: B
		}, [createVNode(bo_icon_default, {
			icon: unref(F),
			size: 20
		}, null, 8, ["icon"])])]), createElementVNode("div", _hoisted_3$5, [renderSlot(M.$slots, "default", {}, void 0, !0)])], 14, _hoisted_1$8)])) : createCommentVNode("", !0)]));
	}
}), [["__scopeId", "data-v-f731d021"]]), _hoisted_1$7 = ["id", "data-testid"], _hoisted_2$5 = {
	key: 0,
	class: "bo-skeleton__item-wave"
}, bo_skeleton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-skeleton",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-skeleton") },
		variant: { default: "text" },
		width: {},
		height: {},
		lines: { default: 1 },
		animation: { default: "pulse" },
		customCssClass: {}
	},
	setup(r) {
		let M = r, N = computed(() => M.variant === "text" ? M.lines : 1), P = computed(() => ({
			"bo-skeleton__item": !0,
			[`bo-skeleton__item--${M.variant}`]: !0,
			[`bo-skeleton__item--animation-${M.animation}`]: !0
		})), F = computed(() => {
			let r = {};
			return M.width && (r.width = typeof M.width == "number" ? `${M.width}px` : M.width), M.height && (r.height = typeof M.height == "number" ? `${M.height}px` : M.height), r;
		});
		return (M, I) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass(["bo-skeleton", r.customCssClass]),
			"data-testid": r.dataTestId
		}, [(openBlock(!0), createElementBlock(Fragment, null, renderList(N.value, (M) => (openBlock(), createElementBlock("div", {
			key: M,
			class: normalizeClass(P.value),
			style: normalizeStyle(F.value)
		}, [r.animation === "wave" ? (openBlock(), createElementBlock("div", _hoisted_2$5)) : createCommentVNode("", !0)], 6))), 128))], 10, _hoisted_1$7));
	}
}), [["__scopeId", "data-v-82d56efb"]]), _hoisted_1$6 = ["id", "data-testid"], _hoisted_2$4 = [
	"disabled",
	"aria-selected",
	"aria-controls",
	"onClick"
], _hoisted_3$4 = { class: "bo-tabs__content" }, bo_tabs_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-tabs",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-tabs") },
		modelValue: {},
		tabs: {},
		variant: { default: "underline" },
		customCssClass: {}
	},
	emits: ["update:modelValue", "change"],
	setup(r, { emit: N }) {
		let P = r, F = N;
		provide("activeTab", P.modelValue), provide("tabsId", P.id);
		function I(r) {
			if (r.customColor && P.modelValue === r.value) {
				let N = ColorService.instance.getValidCssColor(r.customColor);
				return {
					color: N,
					borderColor: N
				};
			}
			return {};
		}
		function L(r) {
			F("update:modelValue", r), F("change", r);
		}
		return (M, N) => (openBlock(), createElementBlock("div", {
			id: r.id,
			class: normalizeClass(["bo-tabs", r.customCssClass]),
			"data-testid": r.dataTestId
		}, [createElementVNode("div", {
			class: normalizeClass(["bo-tabs__header", `bo-tabs__header--${r.variant}`]),
			role: "tablist"
		}, [(openBlock(!0), createElementBlock(Fragment, null, renderList(r.tabs, (M) => (openBlock(), createElementBlock("button", {
			key: M.value,
			class: normalizeClass(["bo-tabs__tab", { "bo-tabs__tab--active": r.modelValue === M.value }]),
			style: normalizeStyle(I(M)),
			disabled: M.disabled,
			"aria-selected": r.modelValue === M.value,
			"aria-controls": `${r.id}-panel-${M.value}`,
			role: "tab",
			type: "button",
			onClick: (r) => L(M.value)
		}, [
			M.icon ? (openBlock(), createBlock(bo_icon_default, {
				key: 0,
				icon: M.icon,
				size: 16,
				"custom-css-class": "bo-tabs__icon"
			}, null, 8, ["icon"])) : createCommentVNode("", !0),
			createVNode(bo_text_default, {
				value: M.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				variant: unref(BoTextVariant).inherit,
				"custom-css-class": "bo-tabs__label"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight",
				"variant"
			]),
			M.badge ? (openBlock(), createBlock(bo_badge_default, {
				key: 1,
				label: typeof M.badge == "number" ? String(M.badge) : M.badge,
				size: unref(BoSize).sm
			}, null, 8, ["label", "size"])) : createCommentVNode("", !0)
		], 14, _hoisted_2$4))), 128))], 2), createElementVNode("div", _hoisted_3$4, [renderSlot(M.$slots, "default", {}, void 0, !0)])], 10, _hoisted_1$6));
	}
}), [["__scopeId", "data-v-07697747"]]), _hoisted_1$5 = ["id", "aria-labelledby"], bo_tab_panel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-tab-panel",
	props: { value: {} },
	setup(r) {
		let M = r, N = inject("activeTab", ""), P = inject("tabsId", ""), F = computed(() => M.value === N);
		return (M, N) => F.value ? (openBlock(), createElementBlock("div", {
			key: 0,
			id: `${unref(P)}-panel-${r.value}`,
			class: "bo-tabs__panel",
			role: "tabpanel",
			"aria-labelledby": `${unref(P)}-tab-${r.value}`
		}, [renderSlot(M.$slots, "default", {}, void 0, !0)], 8, _hoisted_1$5)) : createCommentVNode("", !0);
	}
}), [["__scopeId", "data-v-2e29994a"]]), _hoisted_1$4 = ["for"], _hoisted_2$3 = [
	"id",
	"name",
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"rows",
	"maxlength",
	"minlength",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"aria-invalid",
	"data-testid",
	"tabindex"
], _hoisted_3$3 = {
	key: 1,
	class: "bo-textarea__footer"
}, bo_textarea_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-textarea",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-textarea") },
		name: {},
		modelValue: {},
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		required: { type: Boolean },
		rows: { default: 3 },
		maxLength: {},
		minLength: {},
		size: { default: BoSize.md },
		showCount: { type: Boolean },
		autoResize: { type: Boolean },
		error: {},
		helperText: {},
		label: {},
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	},
	emits: ["update:modelValue", "blur"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = ref(null), I = computed(() => N.modelValue?.length || 0), L = computed(() => N.ariaLabel || N.label || void 0), R = computed(() => {
			let r = [];
			return N.ariaDescribedBy && r.push(N.ariaDescribedBy), N.error && r.push(`${N.id}-error`), N.helperText && r.push(`${N.id}-helper`), r.length > 0 ? r.join(" ") : void 0;
		}), z = computed(() => [
			"bo-textarea__field",
			`bo-textarea__field--size-${N.size}`,
			N.disabled && "bo-textarea__field--disabled",
			N.readonly && "bo-textarea__field--readonly",
			N.error && "bo-textarea__field--error"
		].filter(Boolean).join(" "));
		function B(r) {
			let M = r.target;
			P("update:modelValue", M.value), N.autoResize && H(M);
		}
		function V(r) {
			P("blur", r);
		}
		function H(r) {
			r.style.height = "auto", r.style.height = `${r.scrollHeight}px`;
		}
		return watch(() => N.modelValue, async () => {
			N.autoResize && F.value && (await nextTick(), H(F.value));
		}), (M, N) => (openBlock(), createElementBlock("div", { class: normalizeClass(["bo-textarea", r.customCssClass]) }, [
			r.label ? (openBlock(), createElementBlock("label", {
				key: 0,
				for: r.id,
				class: "bo-textarea__label-wrapper"
			}, [createVNode(bo_text_default, {
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-textarea__label-text"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			]), r.required ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: "*",
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-textarea__required"
			}, null, 8, ["font-size", "font-weight"])) : createCommentVNode("", !0)], 8, _hoisted_1$4)) : createCommentVNode("", !0),
			createElementVNode("textarea", {
				id: r.id,
				name: r.name,
				value: r.modelValue,
				placeholder: r.placeholder,
				disabled: r.disabled,
				readonly: r.readonly,
				required: r.required,
				rows: r.rows,
				maxlength: r.maxLength,
				minlength: r.minLength,
				class: normalizeClass(z.value),
				"aria-label": L.value,
				"aria-labelledby": r.ariaLabelledBy,
				"aria-describedby": R.value,
				"aria-live": r.ariaLive,
				"aria-invalid": !!r.error,
				"data-testid": r.dataTestId,
				tabindex: r.tabIndex,
				onInput: B,
				onBlur: V
			}, null, 42, _hoisted_2$3),
			r.helperText || r.error || r.showCount ? (openBlock(), createElementBlock("div", _hoisted_3$3, [r.error ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: r.error,
				"font-size": unref(BoFontSize).xs,
				"custom-css-class": "bo-textarea__message bo-textarea__message--error"
			}, null, 8, ["value", "font-size"])) : r.helperText ? (openBlock(), createBlock(bo_text_default, {
				key: 1,
				value: r.helperText,
				"font-size": unref(BoFontSize).xs,
				"custom-css-class": "bo-textarea__message bo-textarea__message--default"
			}, null, 8, ["value", "font-size"])) : createCommentVNode("", !0), r.showCount && r.maxLength ? (openBlock(), createBlock(bo_text_default, {
				key: 2,
				value: `${I.value}/${r.maxLength}`,
				"font-size": unref(BoFontSize).xs,
				"custom-css-class": "bo-textarea__count"
			}, null, 8, ["value", "font-size"])) : createCommentVNode("", !0)])) : createCommentVNode("", !0)
		], 2));
	}
}), [["__scopeId", "data-v-0453dbd2"]]), _hoisted_1$3 = ["id", "data-testid"], bo_timeline_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-timeline",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-timeline") },
		orientation: { default: "vertical" },
		position: { default: "start" },
		showLine: {
			type: Boolean,
			default: !0
		},
		customCssClass: {}
	},
	setup(r) {
		let M = r, N = computed(() => [
			"bo-timeline",
			`bo-timeline--${M.orientation}`,
			`bo-timeline--position-${M.position}`,
			!M.showLine && "bo-timeline--no-line",
			M.customCssClass
		].filter(Boolean).join(" "));
		return (M, P) => (openBlock(), createElementBlock("ul", {
			id: r.id,
			class: normalizeClass(N.value),
			"data-testid": r.dataTestId,
			role: "list",
			"aria-label": "Timeline"
		}, [renderSlot(M.$slots, "default", {}, void 0, !0)], 10, _hoisted_1$3));
	}
}), [["__scopeId", "data-v-8ca5d4cc"]]), _hoisted_1$2 = {
	key: 1,
	class: "bo-timeline-item__marker-dot bo-timeline-item__marker-dot--start"
}, _hoisted_2$2 = {
	key: 2,
	class: "bo-timeline-item__marker-dot bo-timeline-item__marker-dot--end"
}, _hoisted_3$2 = {
	key: 3,
	class: "bo-timeline-item__marker-dot"
}, _hoisted_4$1 = { class: "bo-timeline-item__content" }, _hoisted_5 = ["datetime"], bo_timeline_item_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-timeline-item",
	props: {
		title: {},
		description: {},
		timestamp: {},
		icon: {},
		variant: { default: BoVariant.primary },
		customColor: {},
		isStart: {
			type: Boolean,
			default: !1
		},
		isEnd: {
			type: Boolean,
			default: !1
		}
	},
	setup(r) {
		let N = r, P = computed(() => [
			"bo-timeline-item",
			`bo-timeline-item--variant-${N.variant}`,
			N.isStart && "bo-timeline-item--start",
			N.isEnd && "bo-timeline-item--end"
		].filter(Boolean).join(" ")), F = computed(() => {
			if (N.customColor) {
				let r = ColorService.instance.getValidCssColor(N.customColor);
				return { "--marker-color": r };
			}
			return {};
		}), I = computed(() => ({ ...F.value }));
		return (M, N) => (openBlock(), createElementBlock("li", {
			class: normalizeClass(P.value),
			role: "listitem"
		}, [createElementVNode("div", {
			class: "bo-timeline-item__marker",
			style: normalizeStyle(I.value)
		}, [r.icon ? (openBlock(), createBlock(bo_icon_default, {
			key: 0,
			icon: r.icon,
			size: 14
		}, null, 8, ["icon"])) : r.isStart ? (openBlock(), createElementBlock("span", _hoisted_1$2)) : r.isEnd ? (openBlock(), createElementBlock("span", _hoisted_2$2)) : (openBlock(), createElementBlock("span", _hoisted_3$2))], 4), createElementVNode("div", _hoisted_4$1, [
			r.timestamp ? (openBlock(), createElementBlock("time", {
				key: 0,
				class: "bo-timeline-item__timestamp",
				datetime: r.timestamp
			}, [createVNode(unref(bo_text_default), {
				value: r.timestamp,
				"font-size": unref(BoFontSize).xs,
				"font-weight": unref(BoFontWeight).medium,
				variant: unref(BoTextVariant).inherit
			}, null, 8, [
				"value",
				"font-size",
				"font-weight",
				"variant"
			])], 8, _hoisted_5)) : createCommentVNode("", !0),
			r.title ? (openBlock(), createBlock(unref(bo_text_default), {
				key: 1,
				value: r.title,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).semibold,
				variant: unref(BoTextVariant).inherit,
				"custom-css-class": "bo-timeline-item__title"
			}, null, 8, [
				"value",
				"font-size",
				"font-weight",
				"variant"
			])) : createCommentVNode("", !0),
			r.description ? (openBlock(), createBlock(unref(bo_text_default), {
				key: 2,
				value: r.description,
				"font-size": unref(BoFontSize).sm,
				variant: unref(BoTextVariant).inherit,
				"custom-css-class": "bo-timeline-item__description"
			}, null, 8, [
				"value",
				"font-size",
				"variant"
			])) : createCommentVNode("", !0),
			renderSlot(M.$slots, "default", {}, void 0, !0)
		])], 2));
	}
}), [["__scopeId", "data-v-6c145758"]]);
let BoToastPosition = /* @__PURE__ */ function(r) {
	return r.topLeft = "top-left", r.topCenter = "top-center", r.topRight = "top-right", r.bottomLeft = "bottom-left", r.bottomCenter = "bottom-center", r.bottomRight = "bottom-right", r;
}({});
var _hoisted_1$1 = [
	"id",
	"role",
	"aria-label",
	"data-testid"
], _hoisted_2$1 = { class: "bo-toast__content" }, _hoisted_3$1 = { class: "bo-toast__body" }, bo_toast_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-toast",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-toast") },
		variant: { default: BoVariant.primary },
		title: {},
		message: {},
		dismissible: {
			type: Boolean,
			default: !0
		},
		icon: {},
		showIcon: {
			type: Boolean,
			default: !0
		},
		duration: { default: 5e3 },
		position: { default: BoToastPosition.topRight },
		customCssClass: {},
		ariaLabel: {},
		role: { default: "alert" }
	},
	emits: ["dismiss"],
	setup(r, { emit: M }) {
		let N = r, P = M, F = BoTextVariant, L = BoFontSize, R = BoFontWeight, B = ref(!0), V = null, H = computed(() => {
			if (N.icon) return N.icon;
			switch (N.variant) {
				case BoVariant.success: return Icon.check_circle;
				case BoVariant.warning: return Icon.alert_triangle;
				case BoVariant.danger: return Icon.alert_circle;
				default: return Icon.info;
			}
		}), U = computed(() => [
			"bo-toast",
			`bo-toast--variant-${N.variant}`,
			`bo-toast--position-${N.position}`,
			N.customCssClass
		].filter(Boolean).join(" "));
		function W() {
			B.value = !1, V && clearTimeout(V), P("dismiss");
		}
		return onMounted(() => {
			N.duration > 0 && (V = setTimeout(() => {
				W();
			}, N.duration));
		}), onUnmounted(() => {
			V && clearTimeout(V);
		}), (M, N) => (openBlock(), createBlock(Teleport, { to: "body" }, [createVNode(Transition, { name: "bo-toast-fade" }, {
			default: withCtx(() => [B.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				id: r.id,
				class: normalizeClass(U.value),
				role: r.role,
				"aria-label": r.ariaLabel,
				"data-testid": r.dataTestId
			}, [createElementVNode("div", _hoisted_2$1, [r.showIcon || r.icon ? (openBlock(), createBlock(bo_icon_default, {
				key: 0,
				icon: H.value,
				class: "bo-toast__icon"
			}, null, 8, ["icon"])) : createCommentVNode("", !0), createElementVNode("div", _hoisted_3$1, [
				r.title ? (openBlock(), createBlock(unref(bo_text_default), {
					key: 0,
					value: r.title,
					"font-size": unref(L).sm,
					"font-weight": unref(R).semibold,
					variant: unref(F).inherit,
					class: "bo-toast__title"
				}, null, 8, [
					"value",
					"font-size",
					"font-weight",
					"variant"
				])) : createCommentVNode("", !0),
				createVNode(unref(bo_text_default), {
					value: r.message,
					"font-size": unref(L).sm,
					variant: unref(F).inherit,
					class: "bo-toast__message"
				}, null, 8, [
					"value",
					"font-size",
					"variant"
				]),
				renderSlot(M.$slots, "default", {}, void 0, !0)
			])]), r.dismissible ? (openBlock(), createElementBlock("button", {
				key: 0,
				type: "button",
				class: "bo-toast__close",
				"aria-label": "Close",
				onClick: W
			}, [createVNode(bo_icon_default, {
				icon: unref(Icon).x,
				size: 16
			}, null, 8, ["icon"])])) : createCommentVNode("", !0)], 10, _hoisted_1$1)) : createCommentVNode("", !0)]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-0b566cfa"]]);
let BoToggleSize = /* @__PURE__ */ function(r) {
	return r.sm = "sm", r.md = "md", r.lg = "lg", r;
}({});
var _hoisted_1 = {
	key: 0,
	class: "bo-toggle__label bo-toggle__label--left"
}, _hoisted_2 = [
	"id",
	"name",
	"disabled",
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-live",
	"tabindex",
	"data-testid"
], _hoisted_3 = {
	key: 1,
	class: "bo-toggle__label bo-toggle__label--right"
}, _hoisted_4 = {
	key: 0,
	class: "bo-toggle__helper"
}, bo_toggle_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-toggle",
	props: /* @__PURE__ */ mergeModels({
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-toggle") },
		name: {},
		size: { default: BoToggleSize.md },
		disabled: { type: Boolean },
		label: {},
		helperText: {},
		labelPosition: { default: "right" },
		customCssClass: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	}, {
		modelValue: {
			type: Boolean,
			default: !1
		},
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
	setup(r, { expose: M, emit: N }) {
		let P = r, F = useModel(r, "modelValue"), I = N, L = ref(null), R = computed(() => {
			if (P.ariaLabel) return P.ariaLabel;
			if (P.label) return P.label;
		}), z = computed(() => {
			if (P.ariaDescribedBy) return P.ariaDescribedBy;
			if (P.helperText) return `${P.id}-helper`;
		}), B = computed(() => [
			"bo-toggle",
			`bo-toggle--size-${P.size}`,
			P.disabled && "bo-toggle--disabled",
			F.value && "bo-toggle--checked"
		].filter(Boolean).join(" ")), V = computed(() => ["bo-toggle__switch", F.value && "bo-toggle__switch--checked"].filter(Boolean).join(" "));
		function H() {
			I("change", F.value);
		}
		return M({
			focus: () => L.value?.focus(),
			blur: () => L.value?.blur()
		}), (M, N) => (openBlock(), createElementBlock("div", { class: normalizeClass(["bo-toggle__wrapper", r.customCssClass]) }, [createElementVNode("label", { class: normalizeClass(B.value) }, [
			r.label && r.labelPosition === "left" ? (openBlock(), createElementBlock("span", _hoisted_1, [createVNode(bo_text_default, {
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])])) : createCommentVNode("", !0),
			withDirectives(createElementVNode("input", {
				id: r.id,
				ref_key: "toggleRef",
				ref: L,
				"onUpdate:modelValue": N[0] ||= (r) => F.value = r,
				type: "checkbox",
				name: r.name,
				disabled: r.disabled,
				"aria-label": R.value,
				"aria-labelledby": r.ariaLabelledBy,
				"aria-describedby": z.value,
				"aria-live": r.ariaLive,
				tabindex: r.tabIndex,
				"data-testid": r.dataTestId,
				class: "bo-toggle__input",
				onChange: H
			}, null, 40, _hoisted_2), [[vModelCheckbox, F.value]]),
			createElementVNode("span", { class: normalizeClass(V.value) }, [...N[1] ||= [createElementVNode("span", { class: "bo-toggle__thumb" }, null, -1)]], 2),
			r.label && r.labelPosition === "right" ? (openBlock(), createElementBlock("span", _hoisted_3, [createVNode(bo_text_default, {
				value: r.label,
				"font-size": unref(BoFontSize).sm,
				"font-weight": unref(BoFontWeight).medium
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])])) : createCommentVNode("", !0)
		], 2), r.helperText ? (openBlock(), createElementBlock("span", _hoisted_4, [createVNode(bo_text_default, {
			value: r.helperText,
			"font-size": unref(BoFontSize).xs
		}, null, 8, ["value", "font-size"])])) : createCommentVNode("", !0)], 2));
	}
}), [["__scopeId", "data-v-90c18cc5"]]);
export { bo_accordion_default as BoAccordion, bo_accordion_item_default as BoAccordionItem, BoAccordionShape, bo_alert_default as BoAlert, bo_avatar_default as BoAvatar, BoAvatarIndicatorPosition, BoAvatarShape, bo_badge_default as BoBadge, bo_button_default as BoButton, BoButtonType, bo_card_default as BoCard, bo_checkbox_default as BoCheckbox, bo_checkbox_group_default as BoCheckboxGroup, BoCheckboxSize, bo_divider_default as BoDivider, bo_dropzone_default as BoDropzone, BoDropzoneSize, BoFontFamily, BoFontSize, BoFontWeight, bo_icon_default as BoIcon, BoIconVariant, bo_input_default as BoInput, BoInputSize, BoInputState, BoInputType, bo_link_default as BoLink, BoLinkBehavior, bo_loading_dots_default as BoLoadingDots, bo_loading_ring_default as BoLoadingRing, bo_loading_spinner_default as BoLoadingSpinner, BoModalSize, bo_pagination_default as BoPagination, bo_popover_default as BoPopover, bo_progress_default as BoProgress, bo_radial_progress_default as BoRadialProgress, bo_radio_default as BoRadio, bo_radio_group_default as BoRadioGroup, BoRadioSize, bo_search_input_default as BoSearchInput, bo_side_panel_default as BoSidePanel, BoSidePanelShape, bo_skeleton_default as BoSkeleton, bo_tab_panel_default as BoTabPanel, bo_tabs_default as BoTabs, bo_text_default as BoText, BoTextAlign, BoTextTransform, BoTextVariant, BoTextWhiteSpace, bo_textarea_default as BoTextarea, bo_timeline_default as BoTimeline, bo_timeline_item_default as BoTimelineItem, bo_toast_default as BoToast, BoToastPosition, bo_toggle_default as BoToggle, BoToggleSize, bo_tooltip_default as BoTooltip, bo_tooltip_container_default as BoTooltipContainer, Icon, svgPromiseRecord };
