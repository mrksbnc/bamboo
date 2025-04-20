import { describe, expect, it } from 'vitest';
import { IdentityService } from './identity-service';

describe('IdentityService', () => {
	const service = IdentityService.instance;

	describe('getId', () => {
		it('should generate a unique identifier', () => {
			const id1 = service.getId();
			const id2 = service.getId();

			expect(id1).toBeTruthy();
			expect(id2).toBeTruthy();
			expect(id1).not.toBe(id2);
		});

		it('should include the descriptor in the ID when provided', () => {
			const descriptor = 'test';
			const id = service.getId(descriptor);

			expect(id).toContain(descriptor);
		});

		it('should generate a unique ID when descriptor is undefined', () => {
			const id1 = service.getId();
			const id2 = service.getId();

			expect(id1).toBeTruthy();
			expect(id2).toBeTruthy();
			expect(id1).not.toBe(id2);
		});

		it('should generate different IDs for the same descriptor', () => {
			const descriptor = 'button';

			const id1 = service.getId(descriptor);
			const id2 = service.getId(descriptor);

			expect(id1).not.toBe(id2);
		});
	});
});
