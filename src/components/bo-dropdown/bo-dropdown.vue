<template>
	<div
		:id="id"
		:class="[componentBaseClasses, customCssClass]"
		:data-testid="dataTestId"
		ref="dropdownRef"
	>
		<button
			type="button"
			:disabled="disabled"
			:class="triggerClasses"
			:aria-label="computedAriaLabel"
			:aria-labelledby="ariaLabelledBy"
			:aria-describedby="ariaDescribedBy"
			:aria-expanded="isOpen"
			:aria-haspopup="true"
			:tabindex="computedTabIndex"
			@click="toggleDropdown"
			@keydown="handleTriggerKeydown"
		>
			<div class="bo-dropdown__trigger-content">
				<bo-icon v-if="icon" :icon="icon" :size="iconSize" />
				<bo-text :value="selectedLabel" :font-size="textSize" :variant="textVariant" />
				<bo-icon :icon="Icon.chevron_down" :size="iconSize" :class="chevronClasses" />
			</div>
		</button>

		<Transition name="bo-dropdown-fade">
			<div
				v-if="isOpen"
				:class="menuClasses"
				:role="multiselect ? 'listbox' : 'menu'"
				:aria-multiselectable="multiselect"
				:aria-live="ariaLive"
			>
				<button
					v-for="(option, index) in options"
					:key="option.value"
					type="button"
					:role="multiselect ? 'option' : 'menuitem'"
					:class="getOptionClasses(option)"
					:disabled="option.disabled"
					:aria-selected="isSelected(option.value)"
					@click="selectOption(option)"
					@keydown="handleOptionKeydown($event, index)"
				>
					<bo-icon v-if="option.icon" :icon="option.icon" :size="iconSize" />
					<div class="bo-dropdown__option-content">
						<bo-text :value="option.label" :font-size="textSize" :variant="textVariant" />
						<bo-text
							v-if="option.subtitle"
							:value="option.subtitle"
							:font-size="subtitleSize"
							:variant="textVariant"
							class="bo-dropdown__option-subtitle"
						/>
					</div>
					<bo-icon
						v-if="isSelected(option.value)"
						:icon="Icon.check"
						:size="iconSize"
						class="bo-dropdown__check-icon"
					/>
				</button>
			</div>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoTextVariant } from '@/components/bo-text/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
	import type { BoDropdownOption, BoDropdownProps } from './bo-dropdown';

	const props = withDefaults(defineProps<BoDropdownProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-dropdown'),
		placeholder: 'Select an option',
		ariaLive: AriaLive.polite,
		multiselect: false,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string | string[]];
		change: [value: string | string[]];
	}>();

	const isOpen = ref(false);
	const dropdownRef = useTemplateRef('dropdownRef');

	const selectedValues = computed<string[]>(() => {
		if (props.multiselect) {
			return Array.isArray(props.modelValue) ? props.modelValue : [];
		}
		return props.modelValue ? [props.modelValue as string] : [];
	});

	const selectedLabel = computed(() => {
		if (selectedValues.value.length === 0) {
			return props.placeholder;
		}

		if (props.multiselect) {
			if (selectedValues.value.length === 1) {
				const option = props.options.find((opt) => opt.value === selectedValues.value[0]);
				return option?.label || props.placeholder;
			}
			return `${selectedValues.value.length} selected`;
		}

		const option = props.options.find((opt) => opt.value === selectedValues.value[0]);
		return option?.label || props.placeholder;
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.ariaLabelledBy) {
			return undefined;
		}
		return 'Dropdown menu';
	});

	const computedTabIndex = computed<number | undefined>(() => {
		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}
		if (props.disabled) {
			return -1;
		}
		return undefined;
	});

	const iconSize = 16;
	const textSize = BoFontSize.default;
	const subtitleSize = BoFontSize.sm;
	const textVariant = BoTextVariant.inherit;

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-dropdown',
			props.disabled && 'bo-dropdown--disabled',
			props.multiselect && 'bo-dropdown--multiselect',
		]
			.filter(Boolean)
			.join(' ');
	});

	const triggerClasses = computed<string>(() => {
		return ['bo-dropdown__trigger', isOpen.value && 'bo-dropdown__trigger--open']
			.filter(Boolean)
			.join(' ');
	});

	const chevronClasses = computed<string>(() => {
		return ['bo-dropdown__chevron', isOpen.value && 'bo-dropdown__chevron--open']
			.filter(Boolean)
			.join(' ');
	});

	const menuClasses = computed<string>(() => {
		return 'bo-dropdown__menu';
	});

	function isSelected(value: string): boolean {
		return selectedValues.value.includes(value);
	}

	function getOptionClasses(option: BoDropdownOption): string {
		return [
			'bo-dropdown__option',
			isSelected(option.value) && 'bo-dropdown__option--selected',
			option.disabled && 'bo-dropdown__option--disabled',
			option.subtitle && 'bo-dropdown__option--with-subtitle',
		]
			.filter(Boolean)
			.join(' ');
	}

	function toggleDropdown(): void {
		if (!props.disabled) {
			isOpen.value = !isOpen.value;
		}
	}

	function selectOption(option: BoDropdownOption): void {
		if (option.disabled) {
			return;
		}

		if (props.multiselect) {
			const newValues = [...selectedValues.value];
			const index = newValues.indexOf(option.value);

			if (index > -1) {
				newValues.splice(index, 1);
			} else {
				newValues.push(option.value);
			}

			emit('update:modelValue', newValues);
			emit('change', newValues);
		} else {
			emit('update:modelValue', option.value);
			emit('change', option.value);
			isOpen.value = false;
		}
	}

	function handleClickOutside(event: MouseEvent): void {
		if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
			isOpen.value = false;
		}
	}

	function handleTriggerKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
			event.preventDefault();
			isOpen.value = true;
		} else if (event.key === 'Escape') {
			isOpen.value = false;
		}
	}

	function handleOptionKeydown(event: KeyboardEvent, index: number): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			selectOption(props.options[index]!);
		} else if (event.key === 'ArrowDown') {
			event.preventDefault();
			const nextIndex = (index + 1) % props.options.length;
			const nextElement = (event.target as HTMLElement).parentElement?.children[
				nextIndex
			] as HTMLElement;
			nextElement?.focus();
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			const prevIndex = (index - 1 + props.options.length) % props.options.length;
			const prevElement = (event.target as HTMLElement).parentElement?.children[
				prevIndex
			] as HTMLElement;
			prevElement?.focus();
		} else if (event.key === 'Escape') {
			isOpen.value = false;
		}
	}

	onMounted(() => {
		document.addEventListener('click', handleClickOutside);
	});

	onUnmounted(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>

<style scoped lang="scss">
	.bo-dropdown {
		width: 100%;
		position: relative;
		display: inline-block;

		&--disabled {
			opacity: 0.5;
			cursor: not-allowed;
			pointer-events: none;
		}

		&__trigger {
			width: 100%;
			margin: 0;
			padding: 0.625rem 1rem;
			height: 2.5rem;
			border: 1px solid var(--dropdown-trigger-border);
			color: var(--dropdown-trigger-text);
			cursor: pointer;
			text-align: left;
			box-sizing: border-box;
			background-color: var(--dropdown-trigger-bg);
			border-radius: 0.375rem;
			user-select: none;
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
			transition:
				background-color 0.15s ease-in-out,
				border-color 0.15s ease-in-out,
				color 0.15s ease-in-out,
				box-shadow 0.15s ease-in-out;

			&:hover:not(:disabled) {
				background-color: var(--dropdown-trigger-bg-hover);
				border-color: var(--dropdown-trigger-border-hover);
			}

			&:focus-visible {
				outline: none;
				border-color: var(--dropdown-focus-ring);
				box-shadow: 0 0 0 3px color-mix(in oklch, var(--dropdown-focus-ring) 10%, transparent);
			}

			&:disabled {
				cursor: not-allowed;
			}

			&--open {
				border-color: var(--dropdown-focus-ring);
				box-shadow: 0 0 0 3px color-mix(in oklch, var(--dropdown-focus-ring) 10%, transparent);
			}
		}

		&__trigger-content {
			display: inline-flex;
			align-items: center;
			gap: inherit;
			width: 100%;
		}

		&__chevron {
			margin-left: auto;
			flex-shrink: 0;
			transition: transform 0.2s ease-in-out;
			color: var(--dropdown-trigger-icon);

			&--open {
				transform: rotate(180deg);
			}
		}

		&__menu {
			position: absolute;
			top: calc(100% + 0.375rem);
			left: 0;
			right: 0;
			z-index: var(--z-dropdown);
			background-color: var(--dropdown-bg);
			border: 1px solid var(--dropdown-border);
			border-radius: 0.5rem;
			box-shadow: var(--dropdown-shadow);
			max-height: 320px;
			overflow-y: auto;
			padding: 0.5rem;

			&::-webkit-scrollbar {
				width: 8px;
			}

			&::-webkit-scrollbar-track {
				background: transparent;
			}

			&::-webkit-scrollbar-thumb {
				background: var(--dropdown-scrollbar-thumb);
				border-radius: 4px;

				&:hover {
					background: var(--dropdown-scrollbar-thumb-hover);
				}
			}
		}

		&__option {
			width: 100%;
			margin: 0;
			padding: 0.5rem 0.75rem;
			border: none;
			color: var(--dropdown-item-text);
			cursor: pointer;
			text-align: left;
			box-sizing: border-box;
			background-color: transparent;
			border-radius: 0.375rem;
			display: flex;
			align-items: center;
			gap: 0.75rem;
			transition:
				background-color 0.15s ease-in-out,
				color 0.15s ease-in-out;

			&:hover:not(&--disabled) {
				background-color: var(--dropdown-item-bg-hover);
			}

			&:focus-visible {
				outline: none;
				background-color: var(--dropdown-item-bg-focus);
				box-shadow: inset 0 0 0 2px var(--dropdown-focus-ring);
			}

			&--selected {
				background-color: var(--dropdown-item-bg-selected);
				color: var(--dropdown-item-text-selected);

				&:hover:not(.bo-dropdown__option--disabled) {
					background-color: color-mix(in oklch, var(--dropdown-item-bg-selected) 150%, transparent);
				}
			}

			&--disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			&--with-subtitle {
				align-items: flex-start;
				padding: 0.75rem;
			}
		}

		&__option-content {
			display: flex;
			flex-direction: column;
			gap: 0.125rem;
			flex: 1;
			min-width: 0;
		}

		&__option-subtitle {
			color: var(--dropdown-subtitle-text);
		}

		&__option:hover:not(&__option--disabled) &__option-subtitle {
			color: var(--dropdown-subtitle-text-hover);
		}

		&__check-icon {
			margin-left: auto;
			flex-shrink: 0;
			color: var(--dropdown-check-icon);
		}
	}

	/* Transition animations */
	.bo-dropdown-fade-enter-active,
	.bo-dropdown-fade-leave-active {
		transition:
			opacity 0.2s ease-in-out,
			transform 0.2s ease-in-out;
	}

	.bo-dropdown-fade-enter-from {
		opacity: 0;
		transform: translateY(-0.5rem) scale(0.95);
	}

	.bo-dropdown-fade-leave-to {
		opacity: 0;
		transform: translateY(-0.25rem) scale(0.98);
	}
</style>
