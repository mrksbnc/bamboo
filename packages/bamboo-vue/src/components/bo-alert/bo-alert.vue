<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-labelledby="title && !slots['default'] ? titleId : undefined"
		:aria-describedby="description && !slots['default'] ? descriptionId : undefined"
		:class="classValues"
	>
		<bo-icon
			v-if="showIcon && iconValue"
			:icon="iconValue"
			size="sm"
			variant="inherit"
			:class="iconClasses"
			aria-hidden="true"
		/>
		<div :class="ALERT_MANIFEST.styles.content">
			<slot>
				<bo-text
					v-if="title"
					:id="titleId"
					variant="inherit"
					font-size="sm"
					font-weight="medium"
					:class="ALERT_MANIFEST.styles.title"
				>
					{{ title }}
				</bo-text>
				<bo-text
					v-if="description"
					:id="descriptionId"
					variant="inherit"
					:class="ALERT_MANIFEST.styles.description"
				>
					{{ description }}
				</bo-text>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	ALERT_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoAlertProps,
	type Icon,
} from '@workspace/bamboo-core';
import { computed, useSlots } from 'vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

// --- props ---

const props = withDefaults(defineProps<BoAlertProps>(), {
	id: () => generateComponentId('alert'),
	dataTestId: () => generateDataTestId('alert'),
	role: () => ALERT_MANIFEST.defaults.role,
	variant: () => ALERT_MANIFEST.defaults.variant,
	showIcon: () => ALERT_MANIFEST.defaults.showIcon,
});

// --- consts ---

const slots = useSlots();

// --- computed ---

const titleId = computed<string>(() => `${props.id}-title`);

const descriptionId = computed<string>(() => `${props.id}-description`);

const iconValue = computed<Icon | null>(() => {
	if (props.icon) return props.icon;

	const map: Record<string, Icon> = {
		primary: 'fa_solid_circle_info',
		warning: 'fa_solid_circle_exclamation',
		destructive: 'fa_solid_circle_xmark',
	};

	return map[props.variant || 'default'] ?? null;
});

const iconClasses = computed<string>(() =>
	mergeTwClasses(
		ALERT_MANIFEST.styles.icon.base,
		ALERT_MANIFEST.styles.icon[props.variant || 'default'],
	),
);

const classValues = computed<string>(() =>
	mergeTwClasses(
		ALERT_MANIFEST.styles.base,
		ALERT_MANIFEST.styles.variant[props.variant || 'default'],
	),
);
</script>
