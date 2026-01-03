import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, suite } from 'vitest';
import BoButton from './bo-button.vue';
import BoIcon from '@/components/bo-icon/bo-icon.vue';
import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
import { BoText } from '@/components/bo-text';
import { AriaLive } from '@/core/constants/accessibility';
import { BoLoaderType } from '@/core/constants/loader';
import { BoSize } from '@/core/constants/size';
import { BoVariant } from '@/core/constants/variant';
import { BoButtonType } from './bo-button';
import { Icon } from '@/components/bo-icon/bo-icon';

vi.mock('@/core/services/identity-service', () => ({
	IdentityService: {
		instance: {
			getComponentId: () => 'test-id',
			getDataTestId: () => 'test-data-id',
		},
	},
}));

vi.mock('@/core/services/color-service', () => ({
	ColorService: {
		instance: {
			getValidCssColor: (color: string) => color,
		},
	},
}));

describe('bo-button', () => {
	suite('rendering', () => {
		it('should render button element', () => {
			const wrapper = mount(BoButton);
			expect(wrapper.find('button').exists()).toBe(true);
		});

		it('should render with default props', () => {
			const wrapper = mount(BoButton);
			const button = wrapper.find('button');

			expect(button.attributes('id')).toBe('test-id');
			expect(button.attributes('data-testid')).toBe('test-data-id');
			expect(button.attributes('type')).toBe(BoButtonType.button);
			expect(button.classes()).toContain('bo-button--size-default');
			expect(button.classes()).toContain('bo-button--variant-primary');
		});

		it('should render label text', () => {
			const wrapper = mount(BoButton, {
				props: { label: 'Click Me' },
			});

			expect(wrapper.findComponent(BoText).props('value')).toBe('Click Me');
		});

		it('should render with custom slot content', () => {
			const wrapper = mount(BoButton, {
				slots: {
					default: '<span class="custom-content">Custom</span>',
				},
			});

			expect(wrapper.find('.custom-content').exists()).toBe(true);
			expect(wrapper.find('.custom-content').text()).toBe('Custom');
		});
	});

	suite('props', () => {
		it('should apply custom id', () => {
			const wrapper = mount(BoButton, {
				props: { id: 'custom-id' },
			});

			expect(wrapper.find('button').attributes('id')).toBe('custom-id');
		});

		it('should apply custom data-testid', () => {
			const wrapper = mount(BoButton, {
				props: { dataTestId: 'custom-testid' },
			});

			expect(wrapper.find('button').attributes('data-testid')).toBe('custom-testid');
		});

		it.each([BoSize.extra_small, BoSize.small, BoSize.default, BoSize.large, BoSize.extra_large])(
			'should apply size class for %s',
			(size) => {
				const wrapper = mount(BoButton, {
					props: { size },
				});

				expect(wrapper.find('button').classes()).toContain(`bo-button--size-${size}`);
			},
		);

		it.each([
			BoVariant.primary,
			BoVariant.secondary,
			BoVariant.success,
			BoVariant.warning,
			BoVariant.danger,
			BoVariant.white,
			BoVariant.black,
		])('should apply variant class for %s', (variant) => {
			const wrapper = mount(BoButton, {
				props: { variant },
			});

			expect(wrapper.find('button').classes()).toContain(`bo-button--variant-${variant}`);
		});

		it.each([BoButtonType.button, BoButtonType.submit, BoButtonType.reset])(
			'should apply button type %s',
			(type) => {
				const wrapper = mount(BoButton, {
					props: { type },
				});

				expect(wrapper.find('button').attributes('type')).toBe(type);
			},
		);

		it('should apply disabled attribute', () => {
			const wrapper = mount(BoButton, {
				props: { disabled: true },
			});

			expect(wrapper.find('button').attributes('disabled')).toBeDefined();
			expect(wrapper.find('button').classes()).toContain('bo-button--disabled');
		});

		it('should apply full width class', () => {
			const wrapper = mount(BoButton, {
				props: { fullWidth: true },
			});

			expect(wrapper.find('button').classes()).toContain('bo-button--full-width');
		});

		it('should apply custom CSS class', () => {
			const wrapper = mount(BoButton, {
				props: { customCssClass: 'custom-class another-class' },
			});

			expect(wrapper.find('button').classes()).toContain('custom-class');
			expect(wrapper.find('button').classes()).toContain('another-class');
		});

		it('should apply custom color as inline style', () => {
			const wrapper = mount(BoButton, {
				props: { customColor: '#ff0000' },
			});

			const button = wrapper.find('button');
			expect(button.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
			expect(button.attributes('style')).toContain('border-color: rgb(255, 0, 0)');
		});
	});

	suite('icons', () => {
		it('should render prefix icon', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Button',
					prefixIcon: Icon.user,
				},
			});

			const icons = wrapper.findAllComponents(BoIcon);
			expect(icons.length).toBeGreaterThan(0);
			expect(icons?.[0]?.classes()).toContain('bo-button__icon--prefix');
			expect(icons?.[0]?.props('icon')).toBe('user');
		});

		it('should render suffix icon', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Button',
					suffixIcon: Icon.arrow_right,
				},
			});

			const icons = wrapper.findAllComponents(BoIcon);
			const suffixIcon = icons.find((icon) => icon.classes().includes('bo-button__icon--suffix'));
			expect(suffixIcon).toBeDefined();
			expect(suffixIcon?.props('icon')).toBe('arrow_right');
		});

		it('should render both prefix and suffix icons', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Button',
					prefixIcon: Icon.user,
					suffixIcon: Icon.arrow_right,
				},
			});

			const icons = wrapper.findAllComponents(BoIcon);
			expect(icons.length).toBe(2);
		});

		it('should not render prefix icon when loading', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Button',
					isLoading: true,
					prefixIcon: Icon.user,
				},
			});

			const prefixIcon = wrapper
				.findAllComponents(BoIcon)
				.find((icon) => icon.classes().includes('bo-button__icon--prefix'));
			expect(prefixIcon).toBeUndefined();
		});
	});

	suite('loading state', () => {
		it('should show loading spinner by default', () => {
			const wrapper = mount(BoButton, {
				props: { isLoading: true },
			});

			expect(wrapper.findComponent(BoLoadingSpinner).exists()).toBe(true);
			expect(wrapper.find('button').classes()).toContain('bo-button--loading');
		});

		it('should show loading ring when loaderType is ring', () => {
			const wrapper = mount(BoButton, {
				props: {
					isLoading: true,
					loaderType: BoLoaderType.ring,
				},
			});

			expect(wrapper.findComponent(BoLoadingRing).exists()).toBe(true);
		});

		it('should set tabindex to -1 when loading', () => {
			const wrapper = mount(BoButton, {
				props: { isLoading: true },
			});

			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});

		it('should apply loading opacity', () => {
			const wrapper = mount(BoButton, {
				props: { isLoading: true },
			});

			expect(wrapper.find('button').classes()).toContain('bo-button--loading');
		});
	});

	suite('accessibility', () => {
		it('should use label as aria-label when no aria-label provided', () => {
			const wrapper = mount(BoButton, {
				props: { label: 'Submit Form' },
			});

			expect(wrapper.find('button').attributes('aria-label')).toBe('Submit Form');
		});

		it('should use custom aria-label when provided', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Submit',
					ariaLabel: 'Submit the registration form',
				},
			});

			expect(wrapper.find('button').attributes('aria-label')).toBe('Submit the registration form');
		});

		it('should not set aria-label when ariaLabelledBy is provided', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Submit',
					ariaLabelledBy: 'external-label',
				},
			});

			expect(wrapper.find('button').attributes('aria-label')).toBeUndefined();
			expect(wrapper.find('button').attributes('aria-labelledby')).toBe('external-label');
		});

		it('should apply aria-describedby', () => {
			const wrapper = mount(BoButton, {
				props: { ariaDescribedBy: 'description-id' },
			});

			expect(wrapper.find('button').attributes('aria-describedby')).toBe('description-id');
		});

		it('should apply aria-live attribute', () => {
			const wrapper = mount(BoButton, {
				props: { ariaLive: AriaLive.assertive },
			});

			expect(wrapper.find('button').attributes('aria-live')).toBe(AriaLive.assertive);
		});

		it('should set default aria-live to polite', () => {
			const wrapper = mount(BoButton);

			expect(wrapper.find('button').attributes('aria-live')).toBe(AriaLive.polite);
		});

		it('should apply custom role', () => {
			const wrapper = mount(BoButton, {
				props: { role: 'tab' },
			});

			expect(wrapper.find('button').attributes('role')).toBe('tab');
		});

		it('should set tabindex to -1 when disabled', () => {
			const wrapper = mount(BoButton, {
				props: { disabled: true },
			});

			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});

		it('should use custom tabindex when provided and not disabled', () => {
			const wrapper = mount(BoButton, {
				props: { tabIndex: 5 },
			});

			expect(wrapper.find('button').attributes('tabindex')).toBe('5');
		});

		it('should override custom tabindex when disabled', () => {
			const wrapper = mount(BoButton, {
				props: {
					tabIndex: 5,
					disabled: true,
				},
			});

			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});
	});

	suite('computed properties', () => {
		describe('cursor', () => {
			it('should be not-allowed when disabled', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						disabled: true,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('cursor')).toBe('not-allowed');
			});

			it('should be wait when loading', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						isLoading: true,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('cursor')).toBe('wait');
			});

			it('should be pointer by default', () => {
				const wrapper = mount(BoButton, {
					props: { label: 'Button' },
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('cursor')).toBe('pointer');
			});
		});

		describe('fontSize', () => {
			it('should use xs font size for extra_small button', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						size: BoSize.extra_small,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('fontSize')).toBe('xs');
			});

			it('should use sm font size for small button', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						size: BoSize.small,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('fontSize')).toBe('sm');
			});

			it('should use default font size for default button', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						size: BoSize.default,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('fontSize')).toBe('default');
			});

			it('should use lg font size for large button', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						size: BoSize.large,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('fontSize')).toBe('lg');
			});

			it('should use xl font size for extra_large button', () => {
				const wrapper = mount(BoButton, {
					props: {
						label: 'Button',
						size: BoSize.extra_large,
					},
				});

				const textComponent = wrapper.findComponent(BoText);
				expect(textComponent.props('fontSize')).toBe('xl');
			});
		});

		describe('loadingSpinnerSize', () => {
			it('should be extra_small for extra_small button', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						size: BoSize.extra_small,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('size')).toBe(BoSize.extra_small);
			});

			it('should be small for small button', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						size: BoSize.small,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('size')).toBe(BoSize.small);
			});

			it('should be small for default button', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						size: BoSize.default,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('size')).toBe(BoSize.small);
			});

			it('should be default for large button', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						size: BoSize.large,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('size')).toBe(BoSize.default);
			});
		});

		describe('loadingSpinnerVariant', () => {
			it('should be white for primary variant', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						variant: BoVariant.primary,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('variant')).toBe(BoVariant.white);
			});

			it('should be secondary for secondary variant', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						variant: BoVariant.secondary,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('variant')).toBe(BoVariant.secondary);
			});

			it('should be white for white variant', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						variant: BoVariant.white,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('variant')).toBe(BoVariant.white);
			});

			it('should be white for danger variant', () => {
				const wrapper = mount(BoButton, {
					props: {
						isLoading: true,
						variant: BoVariant.danger,
					},
				});

				const spinner = wrapper.findComponent(BoLoadingSpinner);
				expect(spinner.props('variant')).toBe(BoVariant.white);
			});
		});
	});

	suite('edge cases', () => {
		it('should handle both disabled and loading states', () => {
			const wrapper = mount(BoButton, {
				props: {
					disabled: true,
					isLoading: true,
				},
			});

			expect(wrapper.find('button').classes()).toContain('bo-button--disabled');
			expect(wrapper.find('button').classes()).toContain('bo-button--loading');
			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});

		it('should render without label', () => {
			const wrapper = mount(BoButton, {
				props: { prefixIcon: Icon.user },
			});

			expect(wrapper.findComponent(BoText).exists()).toBe(false);
			expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
		});

		it('should handle empty custom CSS class', () => {
			const wrapper = mount(BoButton, {
				props: { customCssClass: '' },
			});

			expect(wrapper.find('button').exists()).toBe(true);
		});

		it('should not render icons when only label is provided', () => {
			const wrapper = mount(BoButton, {
				props: { label: 'Button' },
			});

			expect(wrapper.findAllComponents(BoIcon).length).toBe(0);
		});
	});

	suite('component integration', () => {
		it('should pass correct props to BoText', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Submit',
					size: BoSize.large,
				},
			});

			const textComponent = wrapper.findComponent(BoText);
			expect(textComponent.props('value')).toBe('Submit');
			expect(textComponent.props('fontSize')).toBe('lg');
			expect(textComponent.props('variant')).toBeDefined();
			expect(textComponent.props('fontWeight')).toBeDefined();
		});

		it('should pass correct props to BoIcon', () => {
			const wrapper = mount(BoButton, {
				props: {
					prefixIcon: Icon.user,
					size: BoSize.small,
				},
			});

			const iconComponent = wrapper.findComponent(BoIcon);
			expect(iconComponent.props('icon')).toBe(Icon.user);
			expect(iconComponent.props('size')).toBe(BoSize.small);
			expect(iconComponent.props('cursor')).toBe('pointer');
		});

		it('should pass correct props to loading spinner', () => {
			const wrapper = mount(BoButton, {
				props: {
					isLoading: true,
					variant: BoVariant.primary,
					size: BoSize.default,
				},
			});

			const spinner = wrapper.findComponent(BoLoadingSpinner);
			expect(spinner.props('size')).toBe(BoSize.small);
			expect(spinner.props('variant')).toBe(BoVariant.white);
			expect(spinner.props('customContainerCssClass')).toBe('bo-button__loader');
		});
	});
});
