import { ShallowRef } from 'vue';
export declare enum BoTheme {
    light = "light",
    dark = "dark"
}
export interface UseTheme {
    activeTheme: ShallowRef<BoTheme>;
    setTheme(theme: BoTheme): void;
    onThemeToggle(): void;
    initTheme(): void;
}
export declare function useTheme(): UseTheme;
