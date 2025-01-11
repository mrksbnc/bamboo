import { BoLoadingPulse } from '@/components/bo_loading_pulse';
import { BoText } from '@/components/bo_text';
import { BoSize, BoLoaderTextPosition, BoLoaderVariant } from '@/shared';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';

let globalWrapper: ReturnType<typeof mount>;

beforeEach(() => {
	globalWrapper = mount(BoLoadingPulse, {
		props: {
			size: BoSize.default,
			variant: BoLoaderVariant.primary,
		},
	});
});

describe('bo_loading_pulse.vue', () => {
	test('loading pulse should render properly', () => {
		expect(globalWrapper).toBeDefined();
	});

	test('loading pulse should have the default classes', () => {
		expect(globalWrapper.classes()).toContain('bo-loading-pulse__container');
		expect(globalWrapper.classes()).toContain('flex');
		expect(globalWrapper.classes()).toContain('h-full');
		expect(globalWrapper.classes()).toContain('w-full');
		expect(globalWrapper.classes()).toContain('content-center');
		expect(globalWrapper.classes()).toContain('items-center');
		expect(globalWrapper.classes()).toContain('justify-center');
		expect(globalWrapper.classes()).toContain('gap-2');
	});

	test('absolute outer pulse should have the default classes', () => {
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'absolute',
		);
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'inline-flex',
		);
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'h-full',
		);
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'w-full',
		);
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'animate-ping',
		);
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'rounded-full',
		);
		expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
			'opacity-75',
		);
	});

	test('relative inner pulse should have the default classes', () => {
		expect(globalWrapper.find('.bo-loading-pulse__inner-pulse-relative').classes()).toContain(
			'relative',
		);
		expect(globalWrapper.find('.bo-loading-pulse__inner-pulse-relative').classes()).toContain(
			'flex',
		);
	});

	suite('loader variant', () => {
		test('should be ablte to render a default variant', () => {
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-blue-600',
			);
		});

		test('should be ablte to render a primary variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.primary });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-blue-600',
			);
		});

		test('should be ablte to render a secondary variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.secondary });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-gray-600',
			);
		});

		test('should be ablte to render a danger variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.danger });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-red-600',
			);
		});

		test('should be ablte to render a warning variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.warning });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-yellow-600',
			);
		});

		test('should be ablte to render a success variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.success });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-green-600',
			);
		});

		test('should be ablte to render a dark variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.dark });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-black',
			);
		});

		test('should be ablte to render a white variant', async () => {
			await globalWrapper.setProps({ variant: BoLoaderVariant.white });
			expect(globalWrapper.find('.bo-loading-pulse__outer-pulse-absolute').classes()).toContain(
				'bg-white',
			);
		});
	});

	suite('loader text', () => {
		test('should be ablte to render text', async () => {
			await globalWrapper.setProps({ loaderText: 'Loading...' });
			expect(globalWrapper.findComponent(BoText).props('text')).toBe('Loading...');
		});

		test('by default the text should positioned under the text', async () => {
			await globalWrapper.setProps({ loaderText: 'Loading...' });
			expect(globalWrapper.find('.bo-loading-pulse__container').classes()).toContain('flex-col');
		});

		test('the loader text should be positioned on the side', async () => {
			await globalWrapper.setProps({ textPosition: BoLoaderTextPosition.side });
			expect(globalWrapper.find('.bo-loading-pulse__container').classes()).toContain('flex-row');
		});

		test('the loader text should be positioned on the bottom', async () => {
			await globalWrapper.setProps({
				textPosition: BoLoaderTextPosition.bottom,
			});
			expect(globalWrapper.find('.bo-loading-pulse__container').classes()).toContain('flex-col');
		});
	});
});
