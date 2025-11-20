<template>
	<div
		:id="id"
		:class="componentBaseClasses"
		:data-testid="dataTestId"
		:role="'separator'"
		:aria-orientation="orientation"
	>
		<bo-text
			v-if="text && !$slots.default"
			:value="text"
			:font-size="BoFontSize.sm"
			custom-css-class="bo-divider__text"
		/>
		<span v-if="$slots.default" class="bo-divider__text">
			<slot />
		</span>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { computed } from 'vue';
	import type { BoDividerProps } from './bo-divider';

	const props = withDefaults(defineProps<BoDividerProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-divider'),
		orientation: 'horizontal',
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-divider',
			`bo-divider--${props.orientation}`,
			(props.text || props.customCssClass) && 'bo-divider--with-text',
			props.customCssClass,
		]
			.filter(Boolean)
			.join(' ');
	});
</script>

<style scoped lang="scss">
	.bo-divider {
		border: none;
		margin: 1rem 0;

		&--horizontal {
			width: 100%;
			height: 1px;
			background-color: var(--divider-line);
			display: flex;
			align-items: center;
			justify-content: center;

			&.bo-divider--with-text {
				background: none;

				&::before,
				&::after {
					content: '';
					flex: 1;
					height: 1px;
					background-color: var(--divider-line);
				}
			}
		}

		&--vertical {
			width: 1px;
			height: 100%;
			background-color: var(--divider-line);
			display: inline-block;
			margin: 0 1rem;
		}

		&__text {
			padding: 0 1rem;
			color: var(--divider-text);
			white-space: nowrap;
		}
	}
</style>
