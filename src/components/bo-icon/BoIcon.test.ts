import { BoSize } from '@/shared/bo-size';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoIcon from './BoIcon.vue';
import { Icon } from './bo-icon';

describe('BoIcon.vue', () => {
	it('renders with specified icon', () => {
		const wrapper = mount(BoIcon, { props: { icon: Icon.search } });
		expect(wrapper.classes()).toContain('bo-icon');
	});

	it('applies custom class', () => {
		const wrapper = mount(BoIcon, { props: { icon: Icon.search, class: 'custom-class' } });
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoIcon, { props: { icon: Icon.search, size: BoSize.large } });
		expect(wrapper.classes()).toContain('size-5');
	});

	it('renders with custom color', () => {
		const wrapper = mount(BoIcon, { props: { icon: Icon.search, color: '#ff0000' } });
		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)');
	});

	it('renders with default decorative icon', () => {
		const wrapper = mount(BoIcon, { props: { icon: Icon.none } });
		expect(wrapper.attributes('role')).toBe('presentation');
		expect(wrapper.attributes('aria-label')).toBe('icon');
	});

	it('renders with custom accessibility props', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.none,
				accessibility: { decorative: false, title: 'Custom Icon' },
			},
		});
		expect(wrapper.attributes('role')).toBe('img');
		expect(wrapper.attributes('aria-label')).toBe('Custom Icon');
	});

	it('applies color style based on color prop', () => {
		const wrapper = mount(BoIcon, {
			props: { icon: Icon.none, color: 'red' },
		});
		const i = wrapper.find('i');
		expect(i.attributes('style')).toContain('color: red');
	});
});
