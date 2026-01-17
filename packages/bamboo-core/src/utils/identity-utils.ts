export function generateComponentId(descriptor?: string): string {
	return `id__bo-${descriptor}-${Date.now()}`;
}

export function generateDataTestId(descriptor?: string): string {
	return `data-testid__bo-${descriptor}-${Date.now()}`;
}
