<template>
	<BoButton
		:id="IdentityUtils.generateRandomIdWithPrefix('bo-dropdown-button')"
		data-dropdown-toggle="dropdown"
		:label="defaultOption.label"
		:prefix-icon="defaultOption.icon"
	></BoButton>
	<div
		id="dropdown"
		class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
	>
		<ul
			class="py-2 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="dropdownDefaultButton"
		>
			<li>
				<a
					href="#"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Dashboard</a
				>
			</li>
			<li>
				<a
					href="#"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Settings</a
				>
			</li>
			<li>
				<a
					href="#"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Earnings</a
				>
			</li>
			<li>
				<a
					href="#"
					class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>Sign out</a
				>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Icon } from '@/components/bo_icon';
import { BoButton } from '@/components/bo_button';
import { IdentityUtils } from '@/utils';
import type { BoDropdownProps } from './types';

const props = withDefaults(defineProps<BoDropdownProps>(), {
	defaultOption: () => {
		return {
			icon: Icon.none,
			label: '',
		};
	},
});

const { defaultOption, options } = toRefs(props);
</script>
