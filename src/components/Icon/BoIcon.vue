<template>
	<i
		:id="id"
		role="img"
		:style="style"
		:aria-label="name"
		:class="['bo-icon', boIconClass]"
	/>
</template>

<script setup lang="ts">
import type { OptionalCss } from '@/types'
import type { Icon } from '@/components/Icon'
import { iconMap, IconSize } from '@/components/Icon'
import {
	type PropType,
	toRefs,
	computed,
	onUpdated,
	ref,
	onBeforeMount,
} from 'vue'

const props = defineProps({
	name: {
		type: String as PropType<Icon>,
		required: true,
	},
	size: {
		type: String as PropType<IconSize>,
		default: () => IconSize.M,
	},
	color: {
		type: String,
		default: () => null,
	},
})

const { name, size, color } = toRefs(props)

const index = ref<number>(0)
const id = ref<string>(`bo-icon-${index.value + 1}`)
const icon = ref<{ default: string } | null>(null)

const style = computed<Record<string, string>>(() => {
	const i = iconMap.get(name.value) ?? null
	const defaultColor = 'var(--icon-color)'

	return {
		'background-color': color.value ? color.value : defaultColor,
		maskImage: `url('${i?.default}')`,
		webkitMaskImage: `url('${i?.default}')`,
	}
})

const boIconClass = computed<OptionalCss>(() => {
	const classes: OptionalCss = {}

	switch (size.value) {
		case IconSize.XXS:
			classes['xxs'] = true
			break
		case IconSize.XS:
			classes['xs'] = true
			break
		case IconSize.S:
			classes['sm'] = true
			break
		case IconSize.M:
			classes['md'] = true
			break
		case IconSize.L:
			classes['lg'] = true
			break
		case IconSize.XL:
			classes['xl'] = true
			break
		case IconSize.XXL:
			classes['xxl'] = true
			break
	}

	return classes
})

onBeforeMount(() => {
	icon.value = iconMap.get(name.value) ?? null
})

onUpdated(() => {
	icon.value = iconMap.get(name.value) ?? null
})
</script>

<style scoped lang="scss">
@import url('./icon.scss');
</style>
