import { describe, it, expect, suite } from 'vitest';
import { generateComponentId, generateDataTestId } from './identity-utils.js';

describe('identity-utils', () => {
	suite('generateComponentId', () => {
		it('should generate an id with default descriptor', () => {
			const id = generateComponentId();
			expect(id).toMatch(/^bo-component-[a-z0-9]{9}$/);
		});

		it('should generate an id with custom descriptor', () => {
			const id = generateComponentId('button');
			expect(id).toMatch(/^button-[a-z0-9]{9}$/);
		});

		it('should generate unique ids on multiple calls', () => {
			const id1 = generateComponentId();
			const id2 = generateComponentId();
			expect(id1).not.toBe(id2);
		});

		it('should generate unique ids with same descriptor', () => {
			const id1 = generateComponentId('button');
			const id2 = generateComponentId('button');
			expect(id1).not.toBe(id2);
			expect(id1).toMatch(/^button-/);
			expect(id2).toMatch(/^button-/);
		});

		it('should handle empty string descriptor', () => {
			const id = generateComponentId('');
			expect(id).toMatch(/^bo-component-[a-z0-9]{9}$/);
		});

		it('should handle undefined descriptor', () => {
			const id = generateComponentId(undefined);
			expect(id).toMatch(/^bo-component-[a-z0-9]{9}$/);
		});

		it('should generate id with correct length', () => {
			const id = generateComponentId('test');
			const parts = id.split('-');
			const randomPart = parts[parts.length - 1];
			expect(randomPart.length).toBe(9);
		});

		it('should only contain alphanumeric characters in random part', () => {
			const id = generateComponentId('test');
			const randomPart = id.split('-').pop() || '';
			expect(randomPart).toMatch(/^[a-z0-9]+$/);
		});

		it('should handle descriptors with special characters', () => {
			const id = generateComponentId('my-custom-component');
			expect(id).toMatch(/^my-custom-component-[a-z0-9]{9}$/);
		});

		it('should handle descriptors with numbers', () => {
			const id = generateComponentId('component123');
			expect(id).toMatch(/^component123-[a-z0-9]{9}$/);
		});

		it('should generate multiple unique ids in sequence', () => {
			const ids = new Set();
			for (let i = 0; i < 100; i++) {
				ids.add(generateComponentId('test'));
			}
			expect(ids.size).toBe(100);
		});
	});

	suite('generateDataTestId', () => {
		it('should generate a test id with default descriptor', () => {
			const id = generateDataTestId();
			expect(id).toMatch(/^data-testid-bo-component-[a-z0-9]{9}$/);
		});

		it('should generate a test id with custom descriptor', () => {
			const id = generateDataTestId('button');
			expect(id).toMatch(/^data-testid-button-[a-z0-9]{9}$/);
		});

		it('should generate unique test ids on multiple calls', () => {
			const id1 = generateDataTestId();
			const id2 = generateDataTestId();
			expect(id1).not.toBe(id2);
		});

		it('should generate unique test ids with same descriptor', () => {
			const id1 = generateDataTestId('button');
			const id2 = generateDataTestId('button');
			expect(id1).not.toBe(id2);
			expect(id1).toMatch(/^data-testid-button-/);
			expect(id2).toMatch(/^data-testid-button-/);
		});

		it('should handle empty string descriptor', () => {
			const id = generateDataTestId('');
			expect(id).toMatch(/^data-testid-bo-component-[a-z0-9]{9}$/);
		});

		it('should handle undefined descriptor', () => {
			const id = generateDataTestId(undefined);
			expect(id).toMatch(/^data-testid-bo-component-[a-z0-9]{9}$/);
		});

		it('should always start with "data-testid-" prefix', () => {
			const id1 = generateDataTestId();
			const id2 = generateDataTestId('custom');
			expect(id1.startsWith('data-testid-')).toBe(true);
			expect(id2.startsWith('data-testid-')).toBe(true);
		});

		it('should generate test id with correct length', () => {
			const id = generateDataTestId('test');
			const parts = id.split('-');
			const randomPart = parts[parts.length - 1];
			expect(randomPart.length).toBe(9);
		});

		it('should only contain alphanumeric characters in random part', () => {
			const id = generateDataTestId('test');
			const randomPart = id.split('-').pop() || '';
			expect(randomPart).toMatch(/^[a-z0-9]+$/);
		});

		it('should handle descriptors with special characters', () => {
			const id = generateDataTestId('my-custom-component');
			expect(id).toMatch(/^data-testid-my-custom-component-[a-z0-9]{9}$/);
		});

		it('should handle descriptors with numbers', () => {
			const id = generateDataTestId('component123');
			expect(id).toMatch(/^data-testid-component123-[a-z0-9]{9}$/);
		});

		it('should generate multiple unique test ids in sequence', () => {
			const ids = new Set();
			for (let i = 0; i < 100; i++) {
				ids.add(generateDataTestId('test'));
			}
			expect(ids.size).toBe(100);
		});
	});

	suite('generateComponentId vs generateDataTestId', () => {
		it('should generate different formats', () => {
			const componentId = generateComponentId('test');
			const testId = generateDataTestId('test');

			expect(componentId).toMatch(/^test-[a-z0-9]{9}$/);
			expect(testId).toMatch(/^data-testid-test-[a-z0-9]{9}$/);
			expect(componentId).not.toBe(testId);
		});

		it('should have different prefixes for same descriptor', () => {
			const componentId = generateComponentId('button');
			const testId = generateDataTestId('button');

			expect(componentId.startsWith('button-')).toBe(true);
			expect(testId.startsWith('data-testid-button-')).toBe(true);
		});

		it('should both generate unique values', () => {
			const componentIds = new Set();
			const testIds = new Set();

			for (let i = 0; i < 50; i++) {
				componentIds.add(generateComponentId('test'));
				testIds.add(generateDataTestId('test'));
			}

			expect(componentIds.size).toBe(50);
			expect(testIds.size).toBe(50);
		});
	});

	suite('edge cases', () => {
		it('should handle very long descriptors', () => {
			const longDescriptor = 'a'.repeat(100);
			const id = generateComponentId(longDescriptor);
			expect(id).toMatch(new RegExp(`^${longDescriptor}-[a-z0-9]{9}$`));
		});

		it('should handle descriptors with spaces', () => {
			const id = generateComponentId('my component');
			expect(id).toMatch(/^my component-[a-z0-9]{9}$/);
		});

		it('should handle descriptors with unicode characters', () => {
			const id = generateComponentId('component-🎨');
			expect(id).toMatch(/^component-🎨-[a-z0-9]{9}$/);
		});

		it('should generate ids that are valid HTML id attributes', () => {
			const id = generateComponentId('test');
			// HTML ids should not start with a number and should contain valid characters
			expect(id).toMatch(/^[a-zA-Z]/);
		});

		it('should handle null descriptor as undefined', () => {
			const id = generateComponentId(null as any);
			expect(id).toMatch(/^bo-component-[a-z0-9]{9}$/);
		});
	});

	suite('randomness quality', () => {
		it('should have low collision rate', () => {
			const ids = new Set();
			const iterations = 1000;

			for (let i = 0; i < iterations; i++) {
				ids.add(generateComponentId('test'));
			}

			// Should have very few or no collisions
			expect(ids.size).toBe(iterations);
		});

		it('should generate different random parts for same descriptor', () => {
			const id1 = generateComponentId('test');
			const id2 = generateComponentId('test');

			const random1 = id1.split('-').pop();
			const random2 = id2.split('-').pop();

			expect(random1).not.toBe(random2);
		});

		it('should use base36 encoding (0-9, a-z)', () => {
			const ids = [];
			for (let i = 0; i < 100; i++) {
				ids.push(generateComponentId('test'));
			}

			ids.forEach((id) => {
				const randomPart = id.split('-').pop() || '';
				expect(randomPart).toMatch(/^[0-9a-z]+$/);
			});
		});
	});
});
