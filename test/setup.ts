import { config } from '@vue/test-utils';
import { afterEach } from 'vitest';

// Configure global test utilities
config.global.stubs = {
	transition: false,
	'transition-group': false,
};

// Clean up after tests if needed
afterEach(() => {
	// Any cleanup needed between tests
});

// Add any other global test configuration here
