import { beforeEach, describe, expect, it, vi } from 'vitest';
import { IdentityService } from './identity-service';

describe('IdentityService', () => {
	let service: IdentityService;

	beforeEach(() => {
		service = IdentityService.instance;
	});

	it('should be a singleton', () => {
		const instance1 = IdentityService.instance;
		const instance2 = IdentityService.instance;
		expect(instance1).toBe(instance2);
	});

	describe('getId', () => {
		it('should generate a unique identifier', () => {
			const id1 = service.getId();
			const id2 = service.getId();
			expect(id1).not.toBe(id2);
		});

		it('should include prefix in ID when provided', () => {
			const prefix = 'test';
			const id = service.getId(prefix);
			expect(id).toContain(prefix);
		});

		it('should use crypto.randomUUID when no prefix is provided', () => {
			const mockUUID = 'mock-uuid';
			const mockRandomUUID = vi.fn().mockReturnValue(mockUUID);
			const originalCrypto = global.crypto;

			// Mock crypto.randomUUID
			vi.stubGlobal('crypto', {
				...originalCrypto,
				randomUUID: mockRandomUUID,
			});

			service.getId();

			expect(mockRandomUUID).toHaveBeenCalled();

			vi.unstubAllGlobals();
		});
	});
});
