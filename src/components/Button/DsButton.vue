<template>
	<button
		:id="id"
		ref="Ds-button"
		class="Ds-button"
		:class="[btnClass]"
		:disabled="disabled"
		@click="clickHandler($event)"
	>
		<div v-if="isLoading">
			<Ds-loading-spinner
				:size="loaderSize"
				:show-label="false"
				:color="loaderColor"
			/>
		</div>
		<div
			v-else
			class="flex flex-row justify-center items-center"
		>
			<span class="sh-button__prefix mr-2">
				<slot name="prefix" />
			</span>
			<span>
				{{ label }}
			</span>
			<span class="sh-button__suffix ml-2">
				<slot name="suffix" />
			</span>
		</div>
	</button>
</template>

<script setup lang="ts">
	import { type PropType, computed, toRefs, ref } from 'vue';
	import { ButtonType, ButtonSize, ButtonForm } from './constants';
	import { DsLoadingSpinner, LoadingSpinnerColor, LoadingSpinnerSize } from '../Loader';

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
		form: {
			type: String as PropType<ButtonForm>,
			default: ButtonForm.base,
		},
	});

	const { label, type, disabled, size, isLoading, onClick, form } = toRefs(props);

	const id = ref('Ds-button_' + Date.now());

	const disabledBtnColorClass =
		'text-gray-400 bg-gray-200 cursor-not-allowed hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800';

	const defaultBtnClass =
		'w-full h-full flex flex-row justify-center items-center focus:ring-1 font-medium focus:outline-none';

	const colorClasses = computed<string>(() => {
		switch (type.value) {
			case ButtonType.primary:
				return 'text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800';
			case ButtonType.secondary:
				return 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300';
			case ButtonType.danger:
				return 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300';
			case ButtonType.warning:
				return 'text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300';
			case ButtonType.success:
				return 'text-white bg-green-500 hover:bg-green-600 focus:ring-green-300';
			case ButtonType.dark:
				return 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300';
			case ButtonType.light:
				return 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300';
			default:
				return 'text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800';
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
				return 'tpx-6 py-3.5 text-base font-medium';
		}
	});

	const computedButtonFormClass = computed<string>(() => {
		switch (form.value) {
			case ButtonForm.base:
				return 'rounded-lg';
			case ButtonForm.pill:
				return 'rounded-full';
			default:
				return 'rounded-lg';
		}
	});

	const btnClass = computed(() => {
		const color = disabled.value ? disabledBtnColorClass : colorClasses.value;

		return `${defaultBtnClass} ${computedBtnSize.value} ${computedButtonFormClass.value} ${color}`;
	});

	const loaderColor = computed(() => {
		switch (type.value) {
			case ButtonType.primary:
				return LoadingSpinnerColor.blue;
			case ButtonType.secondary:
				return LoadingSpinnerColor.GRAY;
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
				return LoadingSpinnerSize.NORMAL;
			case ButtonSize.large:
				return LoadingSpinnerSize.large;
			default:
				return LoadingSpinnerSize.NORMAL;
		}
	});

	const clickHandler = (event: MouseEvent): void => {
		if (disabled.value) return;
		onClick.value(event);
	};
</script>
