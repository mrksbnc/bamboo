export function generateComponentId(descriptor?: string): string {
	return `${descriptor ? descriptor : 'bo-component'}-${Math.random().toString(36).slice(2, 11)}`;
}

export function generateDataTestId(descriptor?: string): string {
	return `data-testid-${descriptor ? descriptor : 'bo-component'}-${Math.random().toString(36).slice(2, 11)}`;
}
