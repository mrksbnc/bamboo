import { AriaLive } from '../../shared/accessibility';
import { BoDropdownProps } from './bo-dropdown';
declare const _default: import('vue').DefineComponent<BoDropdownProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[]) => any;
    change: (value: string | string[]) => any;
}, string, import('vue').PublicProps, Readonly<BoDropdownProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[]) => any) | undefined;
    onChange?: ((value: string | string[]) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    ariaLive: AriaLive;
    placeholder: string;
    multiselect: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdownRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
