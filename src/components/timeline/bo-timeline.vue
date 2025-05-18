<template>
	<div
		class="bo-timeline flex flex-col"
		:data-testid="`bo-timeline-${id}`"
	>
		<div
			v-for="(item, index) in items"
			:key="index"
			class="bo-timeline-item relative"
			:class="timelineItemClasses"
			:data-testid="`bo-timeline-item-${id}-${index}`"
		>
			<!-- Timeline connector/line -->
			<div
				v-if="showConnector && index < items.length - 1"
				class="bo-timeline-connector absolute bottom-0 z-0 translate-y-full"
				:class="connectorClasses"
			></div>

			<!-- Icon/Avatar indicator -->
			<div
				class="bo-timeline-indicator"
				:class="indicatorClasses"
				:data-testid="`bo-timeline-dot-${id}-${index}`"
			>
				<template v-if="variant === BoTimelineVariant.avatar && item.avatar">
					<img
						:src="item.avatar"
						:alt="`${item.title} avatar`"
						class="bo-timeline-avatar"
						:class="avatarClasses"
					/>
				</template>
				<template v-else-if="variant === BoTimelineVariant.icon && item.icon">
					<div
						class="bo-timeline-icon-container"
						:class="[iconContainerClasses, iconColorClasses[item.iconColor || 'primary']]"
					>
						<bo-icon
							:icon="item.icon"
							:size="iconSize"
							class="bo-timeline-icon"
						/>
					</div>
				</template>
				<template v-else>
					<div
						class="bo-timeline-dot"
						:class="[dotClasses, iconColorClasses[item.iconColor || 'primary']]"
					></div>
				</template>
			</div>

			<!-- Timeline content -->
			<div
				class="bo-timeline-content"
				:class="contentClasses"
				:data-testid="`bo-timeline-content-${id}-${index}`"
			>
				<h6
					class="bo-timeline-title"
					:class="titleClasses"
					:data-testid="`bo-timeline-title-${id}-${index}`"
				>
					{{ item.title }}
				</h6>

				<p
					class="bo-timeline-description"
					:class="descriptionClasses"
					:data-testid="`bo-timeline-description-${id}-${index}`"
				>
					{{ item.content }}
				</p>

				<small
					v-if="item.time"
					class="bo-timeline-time"
					:class="timeClasses"
					:data-testid="`bo-timeline-time-${id}-${index}`"
				>
					{{ item.time }}
				</small>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import BoIcon from '@/components/icon/bo-icon.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, toRefs } from 'vue';
import {
	BoTimelineAlign,
	BoTimelineIconColor,
	BoTimelineVariant,
	type BoTimelineProps,
} from './bo-timeline.js';

const props = withDefaults(defineProps<BoTimelineProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-timeline'),
	variant: () => BoTimelineVariant.default,
	size: () => BoSize.default,
	showConnector: true,
	align: () => BoTimelineAlign.left,
});

const { items, variant, size, showConnector, align } = toRefs(props);

const timelineClasses = computed(() => {
	return TailwindService.instance.merge(
		'relative',
		align.value === BoTimelineAlign.center
			? 'flex flex-col items-center'
			: align.value === BoTimelineAlign.right
				? 'flex flex-col items-end'
				: 'flex flex-col items-start',
	);
});

const timelineItemClasses = computed(() => {
	return TailwindService.instance.merge(
		'relative mb-6 last:mb-0',
		align.value === BoTimelineAlign.center
			? 'flex flex-col items-center'
			: align.value === BoTimelineAlign.right
				? 'flex flex-col items-end text-right'
				: 'flex flex-col items-start text-left',
	);
});

const connectorClasses = computed(() => {
	return TailwindService.instance.merge(
		'absolute w-0.5 bg-gray-200 dark:bg-gray-700',
		align.value === BoTimelineAlign.center
			? 'left-1/2 -ml-px h-full'
			: align.value === BoTimelineAlign.right
				? 'right-4 h-full'
				: 'left-4 h-full',
	);
});

const indicatorClasses = computed(() => {
	return TailwindService.instance.merge(
		'relative z-10 mb-3',
		align.value === BoTimelineAlign.center
			? 'flex justify-center'
			: align.value === BoTimelineAlign.right
				? 'flex justify-end mr-4'
				: 'flex justify-start ml-4',
	);
});

const contentClasses = computed(() => {
	return TailwindService.instance.merge(
		'py-2 px-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700',
		align.value === BoTimelineAlign.center
			? 'max-w-md'
			: align.value === BoTimelineAlign.right
				? 'mr-12'
				: 'ml-12',
	);
});

const titleClasses = computed(() => {
	return TailwindService.instance.merge('text-base font-bold text-gray-900 dark:text-white');
});

const descriptionClasses = computed(() => {
	return TailwindService.instance.merge('text-sm font-normal text-gray-500 dark:text-gray-400');
});

const timeClasses = computed(() => {
	return TailwindService.instance.merge(
		'block mt-2 text-xs font-normal text-gray-500 dark:text-gray-400',
	);
});

const dotClasses = computed(() => {
	return TailwindService.instance.merge(
		'rounded-full',
		size.value === BoSize.small ? 'h-2 w-2' : size.value === BoSize.large ? 'h-4 w-4' : 'h-3 w-3',
	);
});

const iconContainerClasses = computed(() => {
	return TailwindService.instance.merge(
		'rounded-full flex items-center justify-center',
		size.value === BoSize.small ? 'h-6 w-6' : size.value === BoSize.large ? 'h-10 w-10' : 'h-8 w-8',
	);
});

const avatarClasses = computed(() => {
	return TailwindService.instance.merge(
		'rounded-full object-cover',
		size.value === BoSize.small ? 'h-6 w-6' : size.value === BoSize.large ? 'h-10 w-10' : 'h-8 w-8',
	);
});

const iconSize = computed(() => {
	return size.value === BoSize.small
		? BoSize.small
		: size.value === BoSize.large
			? BoSize.large
			: BoSize.default;
});

const iconColorClasses = {
	[BoTimelineIconColor.primary]: 'bg-blue-600 text-white',
	[BoTimelineIconColor.secondary]: 'bg-gray-600 text-white',
	[BoTimelineIconColor.success]: 'bg-green-600 text-white',
	[BoTimelineIconColor.danger]: 'bg-red-600 text-white',
	[BoTimelineIconColor.warning]: 'bg-yellow-500 text-white',
	[BoTimelineIconColor.info]: 'bg-blue-400 text-white',
	[BoTimelineIconColor.light]: 'bg-gray-200 text-gray-800',
	[BoTimelineIconColor.dark]: 'bg-gray-800 text-white',
};
</script>
