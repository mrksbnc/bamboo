import { BoSize } from '../../shared/size';
import { BoPaginationProps } from './bo-pagination';
declare const _default: import('vue').DefineComponent<BoPaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    pageChange: (page: number) => any;
}, string, import('vue').PublicProps, Readonly<BoPaginationProps> & Readonly<{
    onPageChange?: ((page: number) => any) | undefined;
}>, {
    id: string;
    dataTestId: string;
    size: BoSize;
    showSimple: boolean;
    maxVisiblePages: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
