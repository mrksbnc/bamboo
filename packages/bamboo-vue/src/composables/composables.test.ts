import { describe, expect, it, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import { useDrawer, useFileSelection, useForm, useFormField, useModal, useToast } from './index.js';

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

describe('useFileSelection', () => {
	it('matches extensions, MIME types, wildcards, and selection limits', () => {
		const selection = useFileSelection({
			accept: '.txt,image/*',
			multiple: true,
			maxFiles: 2,
			maxSize: 4,
		});
		const text = new File(['123'], 'notes.TXT', { type: 'text/plain' });
		const image = new File(['12'], 'photo.png', { type: 'image/png' });
		const large = new File(['12345'], 'large.txt', { type: 'text/plain' });

		expect(selection.selectFiles([text, image])).toEqual([text, image]);
		expect(selection.hasFiles.value).toBe(true);
		expect(selection.selectFiles([large])).toEqual([text, image]);
		expect(selection.error.value).toBe('One or more files exceed the maximum size.');
		expect(
			selection.selectFiles([new File(['x'], 'data.pdf', { type: 'application/pdf' })]),
		).toEqual([text, image]);
		expect(selection.error.value).toBe('One or more files are not an accepted type.');

		selection.removeFile(0);
		expect(selection.files.value).toEqual([image]);
		selection.reset();
		expect(selection.hasFiles.value).toBe(false);
		expect(selection.error.value).toBeUndefined();
	});

	it('reacts to option refs and clears drag state after drops', () => {
		const options = ref({ multiple: false });
		const selection = useFileSelection(options);
		const first = new File(['a'], 'first.txt', { type: 'text/plain' });
		const second = new File(['b'], 'second.txt', { type: 'text/plain' });

		selection.isDragging.value = true;
		selection.onDrop({ dataTransfer: { files: [first, second] } } as unknown as DragEvent);
		expect(selection.files.value).toEqual([first]);
		expect(selection.isDragging.value).toBe(false);

		options.value = { multiple: true };
		selection.selectFiles([first, second]);
		expect(selection.files.value).toEqual([first, second]);
	});
});

describe('useToast', () => {
	it('assigns positions, dismisses timed toasts, and clears persistent toasts', () => {
		vi.useFakeTimers();
		const toast = useToast();
		toast.clear();

		const timed = toast.show({ title: 'Saved', duration: 100 });
		const persistent = toast.show({ title: 'Pinned', duration: 0, position: 'bottom-left' });
		expect(toast.toasts.value).toEqual([
			expect.objectContaining({ id: timed, title: 'Saved', position: 'top-right' }),
			expect.objectContaining({ id: persistent, title: 'Pinned', position: 'bottom-left' }),
		]);

		vi.advanceTimersByTime(100);
		expect(toast.toasts.value.map(({ id }) => id)).toEqual([persistent]);
		toast.clear();
		expect(toast.toasts.value).toHaveLength(0);
		vi.useRealTimers();
	});
});
