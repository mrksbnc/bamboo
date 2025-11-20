import { beforeEach, describe, expect, it, vi } from 'vitest';
import { IdentityService } from './identity-service';

describe('IdentityService', () => {
	let service: IdentityService;

	beforeEach(() => {
		service = IdentityService.instance;
		vi.clearAllMocks();
	});

	describe('singleton pattern', () => {
		it('returns the same instance', () => {
			const instance1 = IdentityService.instance;
			const instance2 = IdentityService.instance;
			expect(instance1).toBe(instance2);
		});
	});

	describe('getComponentId', () => {
		it('returns id with timestamp when id is provided', () => {
			const result = service.getComponentId('test-id');
			expect(result).toMatch(/^id-\d+$/);
		});

		it('returns uuid with timestamp when no id is provided', () => {
			const result = service.getComponentId();
			expect(result).toMatch(/^[a-f0-9-]+-\d+$/);
		});

		it('generates unique ids on multiple calls', () => {
			const id1 = service.getComponentId();
			const id2 = service.getComponentId();
			expect(id1).not.toBe(id2);
		});
	});

	describe('getDataTestId', () => {
		it('returns test id with descriptor and uuid', () => {
			const result = service.getDataTestId('button');
			expect(result).toMatch(/^test-button-[a-f0-9-]+$/);
		});

		it('returns test id with uuid when no descriptor', () => {
			const result = service.getDataTestId();
			expect(result).toMatch(/^test-[a-f0-9-]+$/);
		});

		it('generates unique test ids on multiple calls', () => {
			const id1 = service.getDataTestId('component');
			const id2 = service.getDataTestId('component');
			expect(id1).not.toBe(id2);
		});

		it('handles empty string descriptor', () => {
			const result = service.getDataTestId('');
			expect(result).toMatch(/^test-[a-f0-9-]+$/);
		});
	});
});
