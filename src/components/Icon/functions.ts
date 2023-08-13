import { iconCollection, type Icon, type IconObj } from '.';

export function getIcon(key: Icon): IconObj | null {
	return iconCollection.get(key) ?? null;
}
