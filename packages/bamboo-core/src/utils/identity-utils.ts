import { getCurrentInstance, useId } from 'vue';

function generateSuffix(): string {
	if (getCurrentInstance()) {
		return useId();
	}
	return Math.random().toString(36).slice(2, 11);
}

export function generateComponentId(descriptor?: string): string {
	return `${descriptor ? descriptor : 'bo-component'}-${generateSuffix()}`;
}

export function generateDataTestId(descriptor?: string): string {
	return `data-testid-${descriptor ? descriptor : 'bo-component'}-${generateSuffix()}`;
}
