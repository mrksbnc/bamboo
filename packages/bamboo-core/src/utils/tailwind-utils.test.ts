import { describe, it, expect, suite } from 'vitest';
import { mergeTwClasses } from './tailwind-utils.js';

describe('mergeTwClasses', () => {
	suite('basic functionality', () => {
		it('should return an object with mergeTwClasses function', () => {
			expect(mergeTwClasses).toBeDefined();
			expect(typeof mergeTwClasses).toBe('function');
		});

		it('should mergeTwClasses multiple class strings', () => {
			const result = mergeTwClasses('class1', 'class2', 'class3');
			expect(result).toBe('class1 class2 class3');
		});

		it('should handle empty strings', () => {
			const result = mergeTwClasses('class1', '', 'class2');
			expect(result).toBe('class1 class2');
		});

		it('should handle falsy values', () => {
			const result = mergeTwClasses(
				'class1',
				null as any,
				undefined as any,
				false as any,
				'class2',
			);
			expect(result).toBe('class1 class2');
		});

		it('should handle space-separated classes in a single string', () => {
			const result = mergeTwClasses('class1 class2 class3');
			expect(result).toBe('class1 class2 class3');
		});

		it('should deduplicate identical classes', () => {
			const result = mergeTwClasses('class1', 'class2', 'class1');
			expect(result).toBe('class1 class2');
		});
	});

	suite('padding conflicts', () => {
		it('should resolve conflicting p- classes', () => {
			const result = mergeTwClasses('p-4', 'p-8');
			expect(result).toBe('p-8');
		});

		it('should resolve conflicting px- classes', () => {
			const result = mergeTwClasses('px-4', 'px-6');
			expect(result).toBe('px-6');
		});

		it('should resolve conflicting py- classes', () => {
			const result = mergeTwClasses('py-2', 'py-8');
			expect(result).toBe('py-8');
		});

		it('should resolve individual padding sides', () => {
			const result = mergeTwClasses('pt-4', 'pt-8');
			expect(result).toBe('pt-8');
		});

		it('should keep last padding when multiple conflicts', () => {
			const result = mergeTwClasses('p-4', 'px-6', 'p-8');
			expect(result).toBe('px-6 p-8');
		});
	});

	suite('margin conflicts', () => {
		it('should resolve conflicting m- classes', () => {
			const result = mergeTwClasses('m-4', 'm-8');
			expect(result).toBe('m-8');
		});

		it('should resolve conflicting mx- classes', () => {
			const result = mergeTwClasses('mx-auto', 'mx-4');
			expect(result).toBe('mx-4');
		});

		it('should resolve conflicting my- classes', () => {
			const result = mergeTwClasses('my-2', 'my-6');
			expect(result).toBe('my-6');
		});
	});

	suite('sizing conflicts', () => {
		it('should resolve conflicting width classes', () => {
			const result = mergeTwClasses('w-full', 'w-1/2');
			expect(result).toBe('w-1/2');
		});

		it('should resolve conflicting height classes', () => {
			const result = mergeTwClasses('h-screen', 'h-64');
			expect(result).toBe('h-64');
		});

		it('should resolve conflicting min-width classes', () => {
			const result = mergeTwClasses('min-w-0', 'min-w-full');
			expect(result).toBe('min-w-full');
		});

		it('should resolve conflicting max-height classes', () => {
			const result = mergeTwClasses('max-h-screen', 'max-h-96');
			expect(result).toBe('max-h-96');
		});
	});

	suite('color conflicts', () => {
		it('should resolve conflicting background colors', () => {
			const result = mergeTwClasses('bg-red-500', 'bg-blue-600');
			expect(result).toBe('bg-blue-600');
		});

		it('should resolve conflicting text colors', () => {
			const result = mergeTwClasses('text-gray-900', 'text-white');
			expect(result).toBe('text-white');
		});

		it('should not conflict text color with text size', () => {
			const result = mergeTwClasses('text-gray-900', 'text-lg');
			expect(result).toContain('text-gray-900');
			expect(result).toContain('text-lg');
		});

		it('should resolve conflicting border colors', () => {
			const result = mergeTwClasses('border-gray-300', 'border-red-500');
			expect(result).toBe('border-red-500');
		});

		it('should resolve conflicting ring colors', () => {
			const result = mergeTwClasses('ring-blue-500', 'ring-red-500');
			expect(result).toBe('ring-red-500');
		});
	});

	suite('typography conflicts', () => {
		it('should resolve conflicting font sizes', () => {
			const result = mergeTwClasses('text-sm', 'text-lg');
			expect(result).toBe('text-lg');
		});

		it('should resolve conflicting font weights', () => {
			const result = mergeTwClasses('font-normal', 'font-bold');
			expect(result).toBe('font-bold');
		});

		it('should handle multiple text utilities correctly', () => {
			const result = mergeTwClasses('text-sm text-gray-900', 'text-lg text-white');
			expect(result).toBe('text-lg text-white');
		});
	});

	suite('layout conflicts', () => {
		it('should resolve conflicting display classes', () => {
			const result = mergeTwClasses('block', 'flex');
			expect(result).toBe('flex');
		});

		it('should resolve conflicting position classes', () => {
			const result = mergeTwClasses('relative', 'absolute');
			expect(result).toBe('absolute');
		});

		it('should resolve conflicting overflow classes', () => {
			const result = mergeTwClasses('overflow-hidden', 'overflow-auto');
			expect(result).toBe('overflow-auto');
		});

		it('should resolve conflicting overflow-x classes', () => {
			const result = mergeTwClasses('overflow-x-scroll', 'overflow-x-hidden');
			expect(result).toBe('overflow-x-hidden');
		});
	});

	suite('flexbox and grid conflicts', () => {
		it('should resolve conflicting flex classes', () => {
			const result = mergeTwClasses('flex-1', 'flex-auto');
			expect(result).toBe('flex-auto');
		});

		it('should resolve conflicting justify classes', () => {
			const result = mergeTwClasses('justify-start', 'justify-center');
			expect(result).toBe('justify-center');
		});

		it('should resolve conflicting items classes', () => {
			const result = mergeTwClasses('items-start', 'items-end');
			expect(result).toBe('items-end');
		});

		it('should resolve conflicting self classes', () => {
			const result = mergeTwClasses('self-auto', 'self-center');
			expect(result).toBe('self-center');
		});
	});

	suite('border conflicts', () => {
		it('should resolve conflicting border widths', () => {
			const result = mergeTwClasses('border', 'border-2');
			expect(result).toBe('border-2');
		});

		it('should resolve conflicting border radius', () => {
			const result = mergeTwClasses('rounded', 'rounded-lg');
			expect(result).toBe('rounded-lg');
		});

		it('should resolve conflicting border styles', () => {
			const result = mergeTwClasses('border-solid', 'border-dashed');
			expect(result).toBe('border-dashed');
		});

		it('should not conflict border width with border color', () => {
			const result = mergeTwClasses('border-2', 'border-red-500');
			expect(result).toContain('border-2');
			expect(result).toContain('border-red-500');
		});
	});

	suite('effects conflicts', () => {
		it('should resolve conflicting shadows', () => {
			const result = mergeTwClasses('shadow-sm', 'shadow-lg');
			expect(result).toBe('shadow-lg');
		});

		it('should resolve conflicting opacity', () => {
			const result = mergeTwClasses('opacity-50', 'opacity-100');
			expect(result).toBe('opacity-100');
		});
	});

	suite('transition conflicts', () => {
		it('should resolve conflicting transition classes', () => {
			const result = mergeTwClasses('transition-all', 'transition-colors');
			expect(result).toBe('transition-colors');
		});

		it('should resolve conflicting duration classes', () => {
			const result = mergeTwClasses('duration-150', 'duration-300');
			expect(result).toBe('duration-300');
		});

		it('should resolve conflicting ease classes', () => {
			const result = mergeTwClasses('ease-in', 'ease-out');
			expect(result).toBe('ease-out');
		});
	});

	suite('z-index conflicts', () => {
		it('should resolve conflicting z-index classes', () => {
			const result = mergeTwClasses('z-10', 'z-50');
			expect(result).toBe('z-50');
		});
	});

	suite('hover variant', () => {
		it('should resolve conflicting hover classes', () => {
			const result = mergeTwClasses('hover:bg-red-500', 'hover:bg-blue-500');
			expect(result).toBe('hover:bg-blue-500');
		});

		it('should not conflict hover with base classes', () => {
			const result = mergeTwClasses('bg-red-500', 'hover:bg-blue-500');
			expect(result).toContain('bg-red-500');
			expect(result).toContain('hover:bg-blue-500');
		});

		it('should resolve hover padding conflicts', () => {
			const result = mergeTwClasses('hover:px-4', 'hover:px-6');
			expect(result).toBe('hover:px-6');
		});
	});

	suite('focus variant', () => {
		it('should resolve conflicting focus classes', () => {
			const result = mergeTwClasses('focus:ring-2', 'focus:ring-4');
			expect(result).toBe('focus:ring-4');
		});

		it('should not conflict focus with hover', () => {
			const result = mergeTwClasses('hover:bg-red-500', 'focus:bg-blue-500');
			expect(result).toContain('hover:bg-red-500');
			expect(result).toContain('focus:bg-blue-500');
		});
	});

	suite('dark mode variant', () => {
		it('should resolve conflicting dark mode classes', () => {
			const result = mergeTwClasses('dark:bg-gray-800', 'dark:bg-gray-900');
			expect(result).toBe('dark:bg-gray-900');
		});

		it('should not conflict dark with base classes', () => {
			const result = mergeTwClasses('bg-white', 'dark:bg-gray-900');
			expect(result).toContain('bg-white');
			expect(result).toContain('dark:bg-gray-900');
		});
	});

	suite('responsive variants', () => {
		it('should resolve conflicting md: classes', () => {
			const result = mergeTwClasses('md:px-4', 'md:px-8');
			expect(result).toBe('md:px-8');
		});

		it('should not conflict different breakpoints', () => {
			const result = mergeTwClasses('md:px-4', 'lg:px-8');
			expect(result).toContain('md:px-4');
			expect(result).toContain('lg:px-8');
		});

		it('should handle all breakpoints correctly', () => {
			const result = mergeTwClasses('sm:p-2', 'md:p-4', 'lg:p-6', 'xl:p-8', '2xl:p-10');
			expect(result).toContain('sm:p-2');
			expect(result).toContain('md:p-4');
			expect(result).toContain('lg:p-6');
			expect(result).toContain('xl:p-8');
			expect(result).toContain('2xl:p-10');
		});
	});

	suite('stacked variants', () => {
		it('should resolve conflicting stacked variants', () => {
			const result = mergeTwClasses('dark:hover:bg-blue-500', 'dark:hover:bg-red-500');
			expect(result).toBe('dark:hover:bg-red-500');
		});

		it('should not conflict different stacked variants', () => {
			const result = mergeTwClasses('dark:hover:bg-blue-500', 'dark:focus:bg-red-500');
			expect(result).toContain('dark:hover:bg-blue-500');
			expect(result).toContain('dark:focus:bg-red-500');
		});

		it('should handle complex stacked variants', () => {
			const result = mergeTwClasses('md:dark:hover:bg-blue-500', 'md:dark:hover:bg-red-500');
			expect(result).toBe('md:dark:hover:bg-red-500');
		});
	});

	suite('complex real-world scenarios', () => {
		it('should handle component base + override pattern', () => {
			const base = 'p-4 bg-red-500 text-white rounded-lg';
			const override = 'p-8 bg-blue-600';
			const result = mergeTwClasses(base, override);

			expect(result).toContain('text-white');
			expect(result).toContain('rounded-lg');
			expect(result).toContain('p-8');
			expect(result).toContain('bg-blue-600');
			expect(result).not.toContain('p-4');
			expect(result).not.toContain('bg-red-500');
		});

		it('should handle conditional classes', () => {
			const isActive = true;
			const result = mergeTwClasses(
				'px-4 py-2 bg-gray-100',
				isActive ? 'bg-blue-500 text-white' : 'text-gray-700',
			);

			expect(result).toContain('px-4');
			expect(result).toContain('py-2');
			expect(result).toContain('bg-blue-500');
			expect(result).toContain('text-white');
			expect(result).not.toContain('bg-gray-100');
			expect(result).not.toContain('text-gray-700');
		});

		it('should handle button variant pattern', () => {
			const baseButton = 'px-4 py-2 rounded font-medium transition-colors';
			const primaryVariant = 'bg-blue-500 text-white hover:bg-blue-600';

			const result = mergeTwClasses(baseButton, primaryVariant);

			expect(result).toContain('px-4');
			expect(result).toContain('py-2');
			expect(result).toContain('rounded');
			expect(result).toContain('font-medium');
			expect(result).toContain('transition-colors');
			expect(result).toContain('bg-blue-500');
			expect(result).toContain('text-white');
			expect(result).toContain('hover:bg-blue-600');
		});

		it('should handle button variant switching', () => {
			const baseButton = 'px-4 py-2 rounded font-medium transition-colors';
			const primaryVariant = 'bg-blue-500 text-white hover:bg-blue-600';
			const secondaryVariant = 'bg-gray-200 text-gray-900 hover:bg-gray-300';

			// When switching from primary to secondary
			const result = mergeTwClasses(baseButton, primaryVariant, secondaryVariant);

			expect(result).toContain('px-4');
			expect(result).toContain('py-2');
			expect(result).toContain('rounded');
			expect(result).toContain('font-medium');
			expect(result).toContain('transition-colors');
			expect(result).toContain('bg-gray-200');
			expect(result).toContain('text-gray-900');
			expect(result).toContain('hover:bg-gray-300');
			expect(result).not.toContain('bg-blue-500');
			expect(result).not.toContain('text-white');
			expect(result).not.toContain('hover:bg-blue-600');
		});

		it('should handle mixed responsive and state variants', () => {
			const result = mergeTwClasses(
				'bg-white hover:bg-gray-100',
				'md:bg-gray-50 md:hover:bg-gray-200',
			);

			expect(result).toContain('bg-white');
			expect(result).toContain('hover:bg-gray-100');
			expect(result).toContain('md:bg-gray-50');
			expect(result).toContain('md:hover:bg-gray-200');
		});

		it('should preserve order for non-conflicting classes', () => {
			const result = mergeTwClasses('flex', 'items-center', 'justify-between', 'gap-4');

			// All classes should be present
			expect(result).toContain('flex');
			expect(result).toContain('items-center');
			expect(result).toContain('justify-between');
			expect(result).toContain('gap-4');
		});

		it('should handle empty array gracefully', () => {
			const result = mergeTwClasses();
			expect(result).toBe('');
		});

		it('should handle whitespace variations', () => {
			const result = mergeTwClasses('  px-4  py-2  ', 'bg-blue-500');
			expect(result).toContain('px-4');
			expect(result).toContain('py-2');
			expect(result).toContain('bg-blue-500');
		});
	});

	suite('edge cases', () => {
		it('should handle classes with numbers', () => {
			const result = mergeTwClasses('p-4', 'p-8');
			expect(result).toBe('p-8');
		});

		it('should handle classes with fractions', () => {
			const result = mergeTwClasses('w-1/2', 'w-2/3');
			expect(result).toBe('w-2/3');
		});

		it('should handle arbitrary values', () => {
			const result = mergeTwClasses('bg-red-500', 'bg-blue-600');
			expect(result).toBe('bg-blue-600');
		});

		it('should handle very long class strings', () => {
			const longString = 'p-1 p-2 p-3 p-4 p-5 p-6 p-7 p-8';
			const result = mergeTwClasses(longString);
			expect(result).toBe('p-8');
		});

		it('should handle multiple consecutive spaces', () => {
			const result = mergeTwClasses('px-4    py-2     bg-blue-500');
			expect(result).toContain('px-4');
			expect(result).toContain('py-2');
			expect(result).toContain('bg-blue-500');
		});
	});
});
