import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import { useFormField } from './use-form-field.js';

describe('useFormField', () => {
	it('builds described-by ids from reactive content', () => {
		const description = ref('Description');
		const error = ref('');
		const field = useFormField({ id: 'email', description, error });

		expect(field.describedBy.value).toBe('email-description');
		error.value = 'Required';
		expect(field.describedBy.value).toBe('email-description email-error');
	});
});
