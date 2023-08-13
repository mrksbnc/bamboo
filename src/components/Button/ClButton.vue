<template>
	<button
		:id="id"
		ref="cl-button"
		class="cl-button"
		:class="[btnClass]"
		:disabled="disabled"
		@click="onClick($event)"
	>
		<div v-if="isLoading">
			<ClLoadingSpinner
				:size="loaderSize"
				:show-label="false"
				:color="loaderColor"
			/>
		</div>
		<div v-else>
			<span>
				<slot name="prefix" />
			</span>
			<span>
				{{ label }}
			</span>
			<span>
				<slot name="suffix" />
			</span>
		</div>
	</button>
</template>

<script setup lang="ts">
	import { ButtonType, ButtonSize } from './constants';
	import { type PropType, computed, toRefs, ref } from 'vue';
	import { ClLoadingSpinner, LoadingSpinnerColor, LoadingSpinnerSize } from '../Loader';

	const props = defineProps({
		type: {
			type: String as PropType<ButtonType>,
			default: ButtonType.PRIMARY,
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
			default: ButtonSize.BASE,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		onClick: {
			type: Function as PropType<(e: MouseEvent) => void>,
			default: () => {},
		},
	});

	const { label, type, disabled, size, onClick } = toRefs(props);

	const id = ref('cl-button_' + Date.now());

	const btnColorClass: Record<ButtonType, string> = {
		[ButtonType.PRIMARY]:
			'text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800',
		[ButtonType.SECONDARY]: 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300',
		[ButtonType.DANGER]: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',
		[ButtonType.WARNING]: 'text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300',
		[ButtonType.SUCCESS]: 'text-white bg-green-500 hover:bg-green-600 focus:ring-green-300',
		[ButtonType.DARK]: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
		[ButtonType.LIGHT]: 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300',
	};

	const disabledBtnColorClass =
		'text-gray-400 bg-gray-200 cursor-not-allowed hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800';

	const defaultBtnClass =
		'w-full h-full flex flex-row justify-center items-center focus:ring-4 font-medium rounded-lg focus:outline-none';

	const colorClasses = computed<string>(() => {
		switch (type.value) {
			case ButtonType.PRIMARY:
				return btnColorClass[ButtonType.PRIMARY];
			case ButtonType.SECONDARY:
				return btnColorClass[ButtonType.SECONDARY];
			case ButtonType.DANGER:
				return btnColorClass[ButtonType.DANGER];
			case ButtonType.WARNING:
				return btnColorClass[ButtonType.WARNING];
			case ButtonType.SUCCESS:
				return btnColorClass[ButtonType.SUCCESS];
			case ButtonType.DARK:
				return btnColorClass[ButtonType.DARK];
			case ButtonType.LIGHT:
				return btnColorClass[ButtonType.LIGHT];
			default:
				return btnColorClass[ButtonType.PRIMARY];
		}
	});

	const computedBtnSize = computed<string>(() => {
		switch (size.value) {
			case ButtonSize.EXTRA_SMALL:
				return 'px-3 py-2 text-xs font-medium text-center';
			case ButtonSize.SMALL:
				return 'px-3 py-2 text-sm font-medium text-center';
			case ButtonSize.BASE:
				return 'px-5 py-2.5 text-sm font-medium text-center';
			case ButtonSize.LARGE:
				return 'px-5 py-3 text-base font-medium text-center';
			case ButtonSize.EXTRA_LARGE:
				return 'px-2 py-1 text-xs font-medium text-center';
			default:
				return 'tpx-6 py-3.5 text-base font-medium';
		}
	});

	const btnClass = computed(() => {
		const color = disabled.value ? disabledBtnColorClass : colorClasses.value;

		return `${defaultBtnClass} ${computedBtnSize.value} ${color}`;
	});

	const loaderColor = computed(() => {
		switch (type.value) {
			case ButtonType.PRIMARY:
				return LoadingSpinnerColor.BLUE;
			case ButtonType.SECONDARY:
				return LoadingSpinnerColor.GRAY;
			case ButtonType.DANGER:
				return LoadingSpinnerColor.RED;
			case ButtonType.WARNING:
				return LoadingSpinnerColor.YELLOW;
			case ButtonType.SUCCESS:
				return LoadingSpinnerColor.GREEN;
			case ButtonType.DARK:
				return LoadingSpinnerColor.WHITE;
			case ButtonType.LIGHT:
				return LoadingSpinnerColor.BLACK;
			default:
				return LoadingSpinnerColor.BLUE;
		}
	});

	const loaderSize = computed(() => {
		switch (size.value) {
			case ButtonSize.SMALL:
				return LoadingSpinnerSize.SMALL;
			case ButtonSize.BASE:
				return LoadingSpinnerSize.NORMAL;
			case ButtonSize.LARGE:
				return LoadingSpinnerSize.LARGE;
			default:
				return LoadingSpinnerSize.NORMAL;
		}
	});
</script>
