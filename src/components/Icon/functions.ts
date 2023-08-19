import { IconCollection, type Icon, type IconObj } from '.';

export function getIcon(key: Icon): IconObj | null {
	return IconCollection.get(key) ?? null;
}
