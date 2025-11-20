import { AriaLive } from '../../shared/accessibility';
import { BoDropzoneSize, BoDropzoneProps } from './bo-dropzone';
declare const _default: import('vue').DefineComponent<BoDropzoneProps, {
    focus: () => void | undefined;
    blur: () => void | undefined;
    clear: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (files: File[]) => any;
    error: (error: string) => any;
}, string, import('vue').PublicProps, Readonly<BoDropzoneProps> & Readonly<{
    onChange?: ((files: File[]) => any) | undefined;
    onError?: ((error: string) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoDropzoneSize;
    ariaLive: AriaLive;
    dropzoneText: string;
    hintText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
