import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import { useFileSelection } from './use-file-selection.js';

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
