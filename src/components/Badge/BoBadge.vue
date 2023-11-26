<template>
	<div :class="['bo-badge', cssClasses]">
		<span v-if="$slots['prefix'] != null">
			<slot name="prefix"></slot>
		</span>

		<span v-if="$slots['body'] != null">
			<slot name="body"></slot>
		</span>
		<span
			class="label"
			v-if="label != null && $slots['body'] == null"
		>
			{{ label }}
		</span>
		<span v-if="$slots['suffix'] != null">
			<slot name="suffix"></slot>
		</span>
	</div>
</template>

<script setup lang="ts">
import { toRefs, type PropType, computed } from 'vue';
import type { OptionalCss } from '@/types';
import {
	BadgeVariant,
	BadgeType,
	BadgeSize,
	BadgeForm,
} from '@/components/Badge';

const props = defineProps({
	variant: {
		type: String as PropType<BadgeVariant>,
		default: () => BadgeVariant.Default,
	},
	form: {
		type: String as PropType<BadgeForm>,
		default: () => BadgeForm.Pill,
	},
	type: {
		type: String as PropType<BadgeType>,
		default: () => BadgeType.Filled,
	},
	size: {
		type: String as PropType<BadgeSize>,
		default: () => BadgeSize.SM,
	},
	label: {
		type: String,
		required: false,
	},
});

const { variant, form, type, size, label } = toRefs(props);

const cssClasses = computed<OptionalCss>(() => {
	const classes: OptionalCss = {};

	switch (variant.value) {
		case BadgeVariant.Default:
			classes['default'] = true;
			break;
		case BadgeVariant.Info:
			classes['info'] = true;
			break;
		case BadgeVariant.Success:
			classes['success'] = true;
			break;
		case BadgeVariant.Warning:
			classes['warning'] = true;
			break;
		case BadgeVariant.Danger:
			classes['danger'] = true;
			break;
		case BadgeVariant.Tertiary:
			classes['tertiary'] = true;
			break;
	}

	switch (form.value) {
		case BadgeForm.Flat:
			classes['flat'] = true;
			break;
		case BadgeForm.Base:
			classes['base'] = true;
			break;
		case BadgeForm.Circle:
			classes['circle'] = true;
			break;
		case BadgeForm.Pill:
			classes['pill'] = true;
			break;
	}

	switch (type.value) {
		case BadgeType.Filled:
			classes['filled'] = true;
			break;
		case BadgeType.Outline:
			classes['outline'] = true;
			break;
	}

	switch (type.value) {
		case BadgeType.Filled:
			classes['filled'] = true;
			break;
		case BadgeType.Outline:
			classes['outline'] = true;
			break;
	}

	switch (size.value) {
		case BadgeSize.XXS:
			classes['xxs'] = true;
			break;
		case BadgeSize.XS:
			classes['xs'] = true;
			break;
		case BadgeSize.SM:
			classes['sm'] = true;
			break;
		case BadgeSize.MD:
			classes['md'] = true;
			break;
		case BadgeSize.LG:
			classes['lg'] = true;
			break;
		case BadgeSize.XL:
			classes['xl'] = true;
			break;
		case BadgeSize.XXL:
			classes['xxl'] = true;
			break;
		case BadgeSize.XXXL:
			classes['xxxl'] = true;
			break;
	}

	return classes;
});
</script>

<style scoped lang="scss">
@import './badge.scss';
</style>
