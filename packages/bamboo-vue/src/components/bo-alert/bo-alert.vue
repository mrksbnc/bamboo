<template>
	<div
		v-if="!isDismissed"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:class="containerClassValues"
	>
		<!-- Icon -->
		<div v-if="icon" :class="iconClassValues">
			<bo-icon :icon="icon" :class="iconSizeClassValues" />
		</div>

		<!-- Content -->
		<div class="flex-1 min-w-0">
			<!-- Title -->
			<div v-if="title" :class="titleClassValues">
				{{ title }}
			</div>

			<!-- Message content -->
			<div :class="contentClassValues">
				<slot></slot>
			</div>
		</div>

		<!-- Close button -->
		<button
			v-if="dismissible"
			type="button"
			:class="closeButtonClassValues"
			@click="handleDismiss"
			aria-label="Dismiss alert"
		>
			<bo-icon icon="x" class="w-4 h-4" />
		</button>
	</div>
</template>

<script setup lang="ts">
	import {
		ALERT_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoAlertProps,
	} from '@workspace/bamboo-core';
	import { computed, ref } from 'vue';
	import { BoIcon } from '../bo-icon';

	const props = withDefaults(defineProps<BoAlertProps>(), {
		id: () => generateComponentId('alert'),
		dataTestId: () => generateDataTestId('alert'),
		size: () => ALERT_MANIFEST.defaults.size,
		variant: () => ALERT_MANIFEST.defaults.variant,
		dismissible: () => ALERT_MANIFEST.defaults.dismissible,
		role: () => ALERT_MANIFEST.defaults.role,
	});

	const emit = defineEmits<{
		dismiss: [];
	}>();

	const isDismissed = ref(false);

	const containerClassValues = computed<string>(() => {
		return mergeTwClasses(
			ALERT_MANIFEST.styles.base,
			ALERT_MANIFEST.styles.size[props.size],
			ALERT_MANIFEST.styles.variants[props.variant],
		);
	});

	const iconClassValues = computed<string>(() => {
		return mergeTwClasses('flex-shrink-0', ALERT_MANIFEST.styles.iconColor[props.variant]);
	});

	const iconSizeClassValues = computed<string>(() => {
		return ALERT_MANIFEST.styles.iconSize[props.size];
	});

	const titleClassValues = computed<string>(() => {
		return mergeTwClasses(ALERT_MANIFEST.styles.titleSize[props.size], 'mb-1');
	});

	const contentClassValues = computed<string>(() => {
		return ALERT_MANIFEST.styles.contentSize[props.size];
	});

	const closeButtonClassValues = computed<string>(() => {
		return mergeTwClasses(
			ALERT_MANIFEST.styles.closeButton.base,
			ALERT_MANIFEST.styles.closeButton.hover,
		);
	});

	function handleDismiss(): void {
		isDismissed.value = true;
		emit('dismiss');
	}
</script>
