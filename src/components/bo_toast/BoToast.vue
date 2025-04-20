<template>
	<Teleport to="body">
		<div
			v-if="visible"
			:class="['wrapper', hideClass]"
		>
			<div
				:class="['toast', { offline: type === BoToastType.error }]"
				role="alert"
			>
				<div class="content">
					<div
						class="icon"
						:class="{ 'bg-red-500': type === BoToastType.error }"
					>
						<bo-icon
							:icon="getIcon"
							:size="BoSize.default"
							class="text-white"
						/>
					</div>
					<div class="details">
						<span>{{ title }}</span>
						<p>{{ message }}</p>
					</div>
				</div>
				<div
					class="close-icon"
					@click="handleClose"
				>
					<bo-icon
						:icon="Icon.x"
						:size="BoSize.small"
					/>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoSize } from '@/shared'
import { computed, onMounted, ref, watch } from 'vue'
import { BoToastType } from './constants'
import type { BoToastProps } from './types'

const props = withDefaults(defineProps<BoToastProps>(), {
	duration: 3000, // Default duration in milliseconds
	type: BoToastType.success,
	autoClose: true,
})

const emit = defineEmits(['close'])

const visible = ref(false)
const hideClass = ref('')

const getIcon = computed(() => {
	switch (props.type) {
		case BoToastType.success:
			return Icon.check
		case BoToastType.error:
			return Icon.wifi_off
		case BoToastType.warning:
			return Icon.alert_triangle
		case BoToastType.info:
			return Icon.info
		default:
			return Icon.check
	}
})

let timeoutId: number | null = null

function show() {
	visible.value = true
	hideClass.value = ''

	if (props.autoClose) {
		if (timeoutId) clearTimeout(timeoutId)

		timeoutId = window.setTimeout(() => {
			hide()
		}, props.duration)
	}
}

function hide() {
	hideClass.value = 'hide'
	setTimeout(() => {
		visible.value = false
		emit('close')
	}, 1000) // Match the animation duration
}

function handleClose() {
	if (timeoutId) {
		clearTimeout(timeoutId)
		timeoutId = null
	}
	hide()
}

onMounted(() => {
	show()
})

watch(
	() => props.visible,
	(newVal) => {
		if (newVal) {
			show()
		} else {
			hide()
		}
	},
)
</script>

<style scoped>
.wrapper {
	position: fixed;
	top: 20px;
	left: 20px;
	z-index: 9999;
	animation: show_toast 1s ease forwards;
}

@keyframes show_toast {
	0% {
		transform: translateX(-100%);
	}
	40% {
		transform: translateX(10%);
	}
	80%,
	100% {
		transform: translateX(20px);
	}
}

.wrapper.hide {
	animation: hide_toast 1s ease forwards;
}

@keyframes hide_toast {
	0% {
		transform: translateX(20px);
	}
	40% {
		transform: translateX(10%);
	}
	80%,
	100% {
		opacity: 0;
		pointer-events: none;
		transform: translateX(-100%);
	}
}

.toast {
	background: #fff;
	padding: 20px 15px 20px 20px;
	border-radius: 10px;
	border-left: 5px solid #2ecc71;
	box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.15);
	width: 430px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.toast.offline {
	border-color: #ccc;
}

.content {
	display: flex;
	align-items: center;
}

.icon {
	font-size: 25px;
	color: #fff;
	height: 50px;
	width: 50px;
	text-align: center;
	line-height: 50px;
	border-radius: 50%;
	background: #2ecc71;
	display: flex;
	align-items: center;
	justify-content: center;
}

.toast.offline .icon {
	background: #ccc;
}

.details {
	margin-left: 15px;
}

.details span {
	font-size: 20px;
	font-weight: 500;
}

.details p {
	color: #878787;
}

.close-icon {
	color: #878787;
	font-size: 23px;
	cursor: pointer;
	height: 40px;
	width: 40px;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	background: #f2f2f2;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
}

.close-icon:hover {
	background: #efefef;
}
</style>
