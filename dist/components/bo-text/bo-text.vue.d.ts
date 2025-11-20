import { AriaLive } from '../../shared/accessibility';
import { BoFontFamily, BoFontSize, BoFontWeight, BoTextProps, BoTextTransform, BoTextVariant, BoTextWhiteSpace } from './bo-text';
declare const _default: import('vue').DefineComponent<BoTextProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<BoTextProps> & Readonly<{}>, {
    id: string;
    dataTestId: string;
    variant: BoTextVariant;
    fontFamily: BoFontFamily;
    fontSize: BoFontSize;
    fontWeight: BoFontWeight;
    maxLines: "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "none" | (number & {}) | (string & {});
    textTransform: BoTextTransform;
    whiteSpace: BoTextWhiteSpace;
    ariaLive: AriaLive;
    lang: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLParagraphElement>;
export default _default;
