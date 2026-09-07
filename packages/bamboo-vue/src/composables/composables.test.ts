import { describe, expect, it, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import { useDrawer, useForm, useFormField, useModal } from './index.js';

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

describe('useModal', () => {
	it('opens and closes modal instances', async () => {
		const modal = useModal();
		const component = {} as never;
		modal.open({ component });
		expect(modal.instances.value).toHaveLength(1);
		await modal.closeAndRestoreFocus(null);
		await nextTick();
		expect(modal.instances.value).toHaveLength(0);
	});
});

describe('useDrawer', () => {
	it('opens and dismisses shared drawer messages', () => {
		const drawer = useDrawer();
		drawer.clear();
		const id = drawer.show({ title: 'Details', side: 'left' });

		expect(drawer.drawers.value[0]).toMatchObject({
			id,
			props: { title: 'Details', side: 'left' },
		});
		drawer.dismiss(id);
		expect(drawer.drawers.value).toHaveLength(0);
	});
});
