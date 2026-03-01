import { withBase } from 'vitepress';

export function constructLocaleWithLocaleSegment(locale: string, path: string): string {
	return withBase(`/${locale}/${path}`.replaceAll('//', '/'));
}
