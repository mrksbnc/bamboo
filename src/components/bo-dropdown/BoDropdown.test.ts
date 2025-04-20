import { BoButtonVariant } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, shallowRef } from 'vue';
import BoDefaultDropdownItem from './BoDefaultDropdownItem.vue';
import BoDropdown from './BoDropdown.vue';

describe('BoDropdown', () => {
	it('renders correctly with default props', () => {
		const wrapper = shallowMount(BoDropdown);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.findComponent({ name: 'bo-button' }).exists()).toBe(true);
		expect(wrapper.find('#dropdown').exists()).toBe(false);
	});

	it('uses custom id when provided', () => {
		const wrapper = shallowMount(BoDropdown, {
			props: {
				id: 'custom-dropdown-id',
			},
		});

		const button = wrapper.findComponent({ name: 'bo-button' });
		expect(button.attributes('id')).toBe('custom-dropdown-id');
	});

	it('applies toggle variant to button', () => {
		const wrapper = shallowMount(BoDropdown, {
			props: {
				toggleVariant: BoButtonVariant.secondary,
			},
		});

		const button = wrapper.findComponent({ name: 'bo-button' });
		expect(button.props('variant')).toBe('secondary');
	});

	it('renders default option in toggle button', () => {
		const defaultOption = {
			icon: Icon.user,
			label: 'User Profile',
		};

		const wrapper = shallowMount(BoDropdown, {
			props: {
				defaultOption,
			},
		});

		const button = wrapper.findComponent({ name: 'bo-button' });
		expect(button.props('label')).toBe('User Profile');
		expect(button.props('prefixIcon')).toBe(Icon.user);
	});

	it('toggles dropdown visibility on button click', async () => {
		const wrapper = mount(BoDropdown);

		expect(wrapper.find('#dropdown').exists()).toBe(false);

		await wrapper.findComponent({ name: 'bo-button' }).trigger('click');
		expect(wrapper.find('#dropdown').exists()).toBe(true);

		await wrapper.findComponent({ name: 'bo-button' }).trigger('click');
		expect(wrapper.find('#dropdown').exists()).toBe(false);
	});

	it('renders dropdown options when open', async () => {
		const options = [
			{ icon: Icon.user, label: 'Profile' },
			{ icon: Icon.settings, label: 'Settings' },
			{ icon: Icon.log_out, label: 'Logout' },
		];

		const wrapper = mount(BoDropdown, {
			props: {
				options,
			},
		});

		await wrapper.findComponent({ name: 'bo-button' }).trigger('click');

		const dropdownItems = wrapper.findAllComponents(BoDefaultDropdownItem);
		expect(dropdownItems.length).toBe(3);

		expect(dropdownItems[0].props('icon')).toBe(Icon.user);
		expect(dropdownItems[0].props('label')).toBe('Profile');

		expect(dropdownItems[1].props('icon')).toBe(Icon.settings);
		expect(dropdownItems[1].props('label')).toBe('Settings');

		expect(dropdownItems[2].props('icon')).toBe(Icon.log_out);
		expect(dropdownItems[2].props('label')).toBe('Logout');
	});

	it('emits select event when an option is clicked', async () => {
		const options = [
			{ icon: Icon.user, label: 'Profile' },
			{ icon: Icon.settings, label: 'Settings' },
		];

		const wrapper = mount(BoDropdown, {
			props: {
				options,
			},
		});

		await wrapper.findComponent({ name: 'bo-button' }).trigger('click');
		await wrapper.findAllComponents(BoDefaultDropdownItem)[1].trigger('click');

		const selectEmit = wrapper.emitted('select');
		expect(selectEmit).toBeTruthy();
		if (selectEmit) {
			expect(selectEmit[0][0]).toEqual(options[1]);
		}

		// Dropdown should be closed after selection
		expect(wrapper.find('#dropdown').exists()).toBe(false);
	});

	it('updates active option when an option is selected', async () => {
		const options = [
			{ icon: Icon.user, label: 'Profile' },
			{ icon: Icon.settings, label: 'Settings' },
		];

		const wrapper = mount(BoDropdown, {
			props: {
				options,
				defaultOption: { icon: Icon.user, label: 'Select option' },
			},
		});

		const button = wrapper.findComponent({ name: 'bo-button' });
		expect(button.props('label')).toBe('Select option');

		await button.trigger('click');
		await wrapper.findAllComponents(BoDefaultDropdownItem)[1].trigger('click');

		expect(button.props('label')).toBe('Settings');
	});

	it('uses custom component for dropdown items when provided', async () => {
		const CustomItemComponent = {
			name: 'custom-item',
			template: '<div class="custom-item">{{ label }}</div>',
			props: ['icon', 'label'],
		};

		const options = [
			{ icon: Icon.user, label: 'Profile' },
			{ icon: Icon.settings, label: 'Settings' },
		];

		const wrapper = mount(BoDropdown, {
			props: {
				options,
				component: shallowRef(CustomItemComponent),
			},
		});

		await wrapper.findComponent({ name: 'bo-button' }).trigger('click');

		const customItems = wrapper.findAll('.custom-item');
		expect(customItems.length).toBe(2);
		expect(customItems[0].text()).toBe('Profile');
		expect(customItems[1].text()).toBe('Settings');
	});

	it('renders custom toggle slot when provided', () => {
		const wrapper = mount(BoDropdown, {
			slots: {
				toggle: '<button data-test="custom-toggle">Custom Toggle</button>',
				items: '<div>Default items slot</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-toggle"]').exists()).toBe(true);
		expect(wrapper.findComponent({ name: 'bo-button' }).exists()).toBe(false);
	});

	it('renders custom items slot when provided', async () => {
		const CustomItemComponent = defineComponent({
			name: 'custom-item',
			template: '<div class="custom-item">{{ label }}</div>',
			props: ['icon', 'label'],
		});

		const wrapper = mount(BoDropdown, {
			component: shallowRef(CustomItemComponent),
			options: [
				{ icon: Icon.user, label: 'Profile' },
				{ icon: Icon.settings, label: 'Settings' },
			],
		});

		expect(wrapper.findComponent(BoDefaultDropdownItem).exists()).toBe(false);
	});
});
