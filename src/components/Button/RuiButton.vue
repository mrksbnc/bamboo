<template>
	<button
		:id="id"
		ref="rui-button"
		class="rui-button"
		:class="[btnClass]"
		:disabled="disabled"
		@click="clickHandler($event)"
	>
		<rui-loading-spinner
			v-if="isLoading"
			:size="loaderSize"
			:show-label="false"
			:color="loaderColor"
		/>
		<div
			v-else
			class="flex items-center justify-center"
		>
			<span class="rui-button__prefix mr-2">
				<slot name="prefix" />
			</span>
			<span>
				{{ label }}
			</span>
			<span class="rui-button__suffix ml-2">
				<slot name="suffix" />
			</span>
		</div>
	</button>
</template>

<script setup lang="ts">
	import { ButtonType, ButtonSize } from './constants';
	import { type PropType, computed, toRefs, ref } from 'vue';
	import { RuiLoadingSpinner, LoadingSpinnerColor, LoadingSpinnerSize } from '../Loader';

	const props = defineProps({
		type: {
			type: String as PropType<ButtonType>,
			default: ButtonType.primary,
		},
		label: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String as PropType<ButtonSize>,
			default: ButtonSize.base,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		onClick: {
			type: Function as PropType<(event: MouseEvent) => void>,
			default: () => {},
		},
	});

	const { label, type, disabled, size, isLoading, onClick } = toRefs(props);

	const id = ref('ds_button_' + Date.now());

	const disabledBtnColorClass =
		'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-lg cursor-not-allowed';

	const defaultBtnClass =
		'flex flex-row justify-center items-center shadow-md focus:outline-none focus:ring-1';

	const computedButtonTypeClass = computed<string>(() => {
		switch (type.value) {
			case ButtonType.primary:
				return 'bg-blue-600 dark:bg-blue-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-blue-500 dark:focus-ring-blue-600 rounded-lg';
			case ButtonType.primary_outline:
				return 'text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg';
			case ButtonType.primary_pill:
				return 'bg-blue-600 dark:bg-blue-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-blue-500 dark:focus-ring-blue-600 rounded-full';
			case ButtonType.secondary:
				return 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-white hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-lg';
			case ButtonType.secondary_outline:
				return 'text-gray-600 dark:text-gray-400 border border-gray-600 dark:border-gray-300 hover:bg-gray-700 hover:text-white focus:ring-gray-300 dark:focus:ring-gray-800 rounded-lg';
			case ButtonType.secondary_pill:
				return 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:text-white hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-full dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
			case ButtonType.danger:
				return 'bg-red-600 dark:bg-red-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-red-500 dark:focus-ring-red-600 rounded-lg';
			case ButtonType.danger_outline:
				return 'text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-red-300 dark:focus:ring-red-800 rounded-lg';
			case ButtonType.danger_pill:
				return 'bg-red-600 dark:bg-red-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-red-500 dark:focus-ring-red-600 rounded-full';
			case ButtonType.warning:
				return 'bg-yellow-500 dark:bg-yellow-600 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-yellow-500 dark:focus-ring-yellow-500 rounded-lg';
			case ButtonType.warning_outline:
				return 'text-yellow-500 border border-yellow-500 hover:bg-yellow-600 hover:text-white focus:ring-yellow-300 dark:focus:ring-yellow-800 rounded-lg';
			case ButtonType.warning_pill:
				return 'bg-yellow-500 dark:bg-yellow-600 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-yellow-500 dark:focus-ring-yellow-500 rounded-full';
			case ButtonType.success:
				return 'bg-green-600 dark:bg-green-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-green-500 dark:focus-ring-green-600 rounded-lg';
			case ButtonType.success_outline:
				return 'text-green-600 border border-green-600 hover:bg-green-600 hover:text-white focus:ring-green-300 dark:focus:ring-green-800 rounded-lg';
			case ButtonType.success_pill:
				return 'bg-green-600 dark:bg-green-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-green-500 dark:focus-ring-green-600 rounded-full';
			case ButtonType.dark:
				return 'bg-gray-800 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-lg';
			case ButtonType.dark_outline:
				return 'text-gray-800 dark:text-gray-400 border border-gray-800 dark:border-gray-400 hover:bg-gray-800 hover:text-white dark:hover:text-white focus:ring-gray-300 dark:focus:ring-gray-800 rounded-lg';
			case ButtonType.dark_pill:
				return 'bg-gray-800 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-full';
			case ButtonType.light:
				return 'bg-white text-gray-800 hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-lg';
			case ButtonType.light_outline:
				return 'border border-white hover:bg-white text-gray-800 focus:ring-gray-300 dark:focus:ring-gray-800 rounded-lg';
			case ButtonType.light_pill:
				return 'bg-white text-gray-800 hover:opacity-90 transition-opacity duration-150 focus-ring-gray-500 dark:focus-ring-gray-600 rounded-full';
			default:
				return 'bg-blue-600 dark:bg-blue-700 text-white hover:opacity-90 transition-opacity duration-150 focus-ring-blue-500 dark:focus-ring-blue-600 rounded-lg';
		}
	});

	const computedBtnSize = computed<string>(() => {
		switch (size.value) {
			case ButtonSize.extra_small:
				return 'px-3 py-2 text-xs font-medium text-center';
			case ButtonSize.small:
				return 'px-3 py-2 text-sm font-medium text-center';
			case ButtonSize.base:
				return 'px-5 py-2.5 text-sm font-medium text-center';
			case ButtonSize.large:
				return 'px-5 py-3 text-base font-medium text-center';
			case ButtonSize.extra_large:
				return 'px-2 py-1 text-xs font-medium text-center';
			default:
				return 'px-6 py-3.5 text-base font-medium text-center';
		}
	});

	const btnClass = computed(() => {
		const color = disabled.value ? disabledBtnColorClass : computedButtonTypeClass.value;

		return `${defaultBtnClass} ${computedBtnSize.value} ${color}`;
	});

	const loaderColor = computed(() => {
		switch (type.value) {
			case ButtonType.primary:
				return LoadingSpinnerColor.blue;
			case ButtonType.secondary:
				return LoadingSpinnerColor.gray;
			case ButtonType.danger:
				return LoadingSpinnerColor.red;
			case ButtonType.warning:
				return LoadingSpinnerColor.yellow;
			case ButtonType.success:
				return LoadingSpinnerColor.green;
			case ButtonType.dark:
				return LoadingSpinnerColor.white;
			case ButtonType.light:
				return LoadingSpinnerColor.black;
			default:
				return LoadingSpinnerColor.blue;
		}
	});

	const loaderSize = computed(() => {
		switch (size.value) {
			case ButtonSize.small:
				return LoadingSpinnerSize.small;
			case ButtonSize.base:
				return LoadingSpinnerSize.small;
			case ButtonSize.large:
				return LoadingSpinnerSize.normal;
			default:
				return LoadingSpinnerSize.small;
		}
	});

	const clickHandler = (event: MouseEvent): void => {
		if (disabled.value) return;
		onClick.value(event);
	};
</script>
