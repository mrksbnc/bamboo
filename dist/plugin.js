import "./services-B0Dtb--X.js";
import { a as bo_button_default, c as bo_loading_ring_default, l as bo_badge_default, n as bo_tooltip_default, r as bo_link_default, s as bo_loading_spinner_default, t as bo_tooltip_container_default, u as bo_text_default, v as bo_icon_default } from "./bo-tooltip-container-CVpQbOvW.js";
import "./shared-CUg-8DyK.js";
import { n as useTheme } from "./composables-Dtxp22gj.js";
var BambooPlugin = { install(u) {
	u.component("BoBadge", bo_badge_default), u.component("BoButton", bo_button_default), u.component("BoIcon", bo_icon_default), u.component("BoLink", bo_link_default), u.component("BoLoadingRing", bo_loading_ring_default), u.component("BoLoadingSpinner", bo_loading_spinner_default), u.component("BoText", bo_text_default), u.component("BoTooltip", bo_tooltip_default), u.component("BoTooltipContainer", bo_tooltip_container_default);
	let { initTheme: d } = useTheme();
	d();
} };
export { BambooPlugin };
