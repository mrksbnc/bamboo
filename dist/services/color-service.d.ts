export declare class ColorService {
    static get instance(): ColorService;
    private readonly TEXT_REPLACE_PLACEHOLDER;
    private readonly UNKNOWN_COLOR_WARNING;
    getValidCssColor(prop: string): string;
}
