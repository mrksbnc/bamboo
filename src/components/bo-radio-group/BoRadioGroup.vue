<template>
	<div
		:class="containerClasses"
		class="bo-radio-group"
	>
		<div
			v-if="label"
			class="bo-radio-group__label mb-2"
		>
			<bo-text
				:value="label"
				:size="labelSize"
				:weight="BoFontWeight.medium"
			/>
		</div>
		<div :class="orientationClasses">
			<slot></slot>
		</div>
		<div
			v-if="description"
			class="bo-radio-group__description mt-1"
		>
			<bo-text
				:value="description"
				:size="BoFontSize.xs"
				:color="BoTextColor.secondary"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo-text';
import { TailwindService } from '@/services';
import { computed, toRefs } from 'vue';
import { BoRadioGroupOrientation, type BoRadioGroupProps } from './bo-radio-group';

const props = withDefaults(defineProps<BoRadioGroupProps>(), {
	orientation: () => BoRadioGroupOrientation.vertical,
});

const { orientation, label, description, cssClass } = toRefs(props);

const orientationClasses = computed(() => {
	return orientation.value === BoRadioGroupOrientation.horizontal
		? /*tw*/ 'flex flex-row gap-4'
		: /*tw*/ 'flex flex-col gap-2';
});

const containerClasses = computed(() => {
	return TailwindService.instance.merge('bo-radio-group', cssClass.value || '');
});

const labelSize = computed(() => {
	return BoFontSize.sm;
});
</script>
