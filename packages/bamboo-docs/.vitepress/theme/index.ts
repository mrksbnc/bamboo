// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import "@/lib.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  // oxlint-disable-next-line no-unused-vars
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== "undefined") {
      app.mixin({
        setup() {
          const { isDark } = useData();

          const updateTheme = () => {
            const html = document.documentElement;
            if (isDark.value) {
              html.setAttribute("data-theme", "dark");
            } else {
              html.setAttribute("data-theme", "light");
            }
          };

          onMounted(() => {
            updateTheme();
            watch(isDark, updateTheme);
          });
        },
      });
    }
  },
} satisfies Theme;
