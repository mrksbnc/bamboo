import { describe, expect, it, vi } from 'vitest';
import { useForm } from './use-form.js';

describe('useForm', () => {
	it('validates, submits, and resets values', async () => {
		const onSubmit = vi.fn<(values: { email: string }) => void>();
		const form = useForm({
			initialValues: { email: '' },
			validate: (values) => (values.email ? {} : { email: 'Required' }),
			onSubmit,
		});

		expect(await form.submit()).toBe(false);
		form.values.email = 'user@example.com';
		expect(await form.submit()).toBe(true);
		expect(onSubmit).toHaveBeenCalledWith({ email: 'user@example.com' });
		form.reset();
		expect(form.values.email).toBe('');
	});
});
