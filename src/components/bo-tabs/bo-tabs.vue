<template>
	<div :id="id" :class="['bo-tabs', customCssClass]" :data-testid="dataTestId">
		<div :class="['bo-tabs__header', `bo-tabs__header--${variant}`]" role="tablist">
			<button
				v-for="tab in tabs"
				:key="tab.value"
				:class="['bo-tabs__tab', { 'bo-tabs__tab--active': modelValue === tab.value }]"
				:style="getTabStyle(tab)"
				:disabled="tab.disabled"
				:aria-selected="modelValue === tab.value"
				:aria-controls="`${id}-panel-${tab.value}`"
				role="tab"
				type="button"
				@click="handleTabClick(tab.value)"
			>
				<bo-icon v-if="tab.icon" :icon="tab.icon" :size="16" custom-css-class="bo-tabs__icon" />
				<bo-text
					:value="tab.label"
					:font-size="BoFontSize.sm"
					:font-weight="BoFontWeight.medium"
					:variant="BoTextVariant.inherit"
					custom-css-class="bo-tabs__label"
				/>
				<bo-badge
					v-if="tab.badge"
					:label="typeof tab.badge === 'number' ? String(tab.badge) : tab.badge"
					:size="BoSize.sm"
				/>
			</button>
		</div>
		<div class="bo-tabs__content">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import BoBadge from '@/components/bo-badge/bo-badge.vue';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoTextVariant } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { BoSize } from '@/shared/size';
	import { provide, type StyleValue } from 'vue';
	import type { BoTabsProps, TabItem } from './bo-tabs';

	const props = withDefaults(defineProps<BoTabsProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-tabs'),
		variant: 'underline',
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		change: [value: string];
	}>();

	provide('activeTab', props.modelValue);
	provide('tabsId', props.id);

	function getTabStyle(tab: TabItem): StyleValue {
		if (tab.customColor && props.modelValue === tab.value) {
			const colorStyle = ColorService.instance.getValidCssColor(tab.customColor);
			return {
				color: colorStyle,
				borderColor: colorStyle,
			};
		}
		return {};
	}

	function handleTabClick(value: string): void {
		emit('update:modelValue', value);
		emit('change', value);
	}
</script>

<style scoped lang="scss">
	.bo-tabs {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&__header {
			display: flex;
			gap: 0.5rem;
			border-bottom: 2px solid var(--tabs-border);

			&--pills {
				border-bottom: none;
				background-color: var(--tabs-pills-bg);
				padding: 0.25rem;
				border-radius: 0.5rem;
			}

			&--boxed {
				border-bottom: 1px solid var(--tabs-boxed-border);
			}
		}

		&__tab {
			padding: 0.75rem 1rem;
			border: none;
			background: none;
			cursor: pointer;
			color: var(--tabs-tab-text);
			transition: all 0.15s ease-in-out;
			position: relative;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			white-space: nowrap;

			&:hover:not(:disabled) {
				color: var(--tabs-tab-text-hover);
			}

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}

			&--active {
				color: var(--tabs-tab-text-active);
			}
		}

		&__content {
			padding: 1rem 0;
		}
	}

	/* Underline variant styles */
	.bo-tabs__header--underline .bo-tabs__tab {
		border-bottom: 2px solid transparent;
		margin-bottom: -2px;

		&.bo-tabs__tab--active {
			border-bottom-color: var(--tabs-tab-border-active);
		}
	}

	/* Pills variant styles */
	.bo-tabs__header--pills .bo-tabs__tab {
		border-radius: 0.375rem;

		&.bo-tabs__tab--active {
			background-color: var(--tabs-pills-active-bg);
			color: var(--tabs-pills-active-text);
			box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
		}
	}

	/* Boxed variant styles */
	.bo-tabs__header--boxed .bo-tabs__tab {
		border: 1px solid transparent;
		border-bottom: none;
		border-radius: 0.375rem 0.375rem 0 0;
		margin-bottom: -1px;

		&.bo-tabs__tab--active {
			border-color: var(--tabs-boxed-active-border);
			background-color: var(--tabs-boxed-active-bg);
		}
	}
</style>
