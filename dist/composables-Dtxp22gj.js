import { t as BoLocalStorageKey } from "./shared-CUg-8DyK.js";
import { ref } from "vue";
let BoTheme = /* @__PURE__ */ function(e) {
	return e.light = "light", e.dark = "dark", e;
}({});
function useTheme() {
	let r = ref(BoTheme.light);
	function i(n) {
		r.value !== n && (r.value = n, document.documentElement.setAttribute("data-theme", r.value), localStorage.setItem(BoLocalStorageKey.data_theme, r.value));
	}
	function a() {
		i(r.value === BoTheme.light ? BoTheme.dark : BoTheme.light);
	}
	function o() {
		let n = localStorage.getItem(BoLocalStorageKey.data_theme);
		if (n) {
			i(n);
			return;
		}
		let r = window.matchMedia("(prefers-color-scheme: dark)").matches;
		i(r ? BoTheme.dark : BoTheme.light);
	}
	return {
		activeTheme: r,
		setTheme: i,
		onThemeToggle: a,
		initTheme: o
	};
}
export { useTheme as n, BoTheme as t };
