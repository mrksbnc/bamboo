<template>
	<div
		:class="rootClasses"
		:data-testid="constructAttribute(id, 'accordion-container')"
	>
		<template
			v-for="(child, index) in $slots.default?.() ?? []"
			:key="child.key ?? IdentityService.instance.getComponentId()"
		>
			<component
				:is="child.type"
				v-bind="{
					...child.props,
					open: child.props?.id === props.defaultOpenItemId,
					isFirst: index === 0,
					isLast: index === ($slots.default?.() ?? []).length - 1,
				}"
				v-on="child.props?.['onVnodeBeforeMount'] ?? {}"
			>
				<template
					v-for="(_, name) in child.children"
					v-slot:[name]="slotProps"
				>
					<slot
						:name="name"
						v-bind="slotProps"
					/>
				</template>
			</component>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, provide, ref } from 'vue';
import { type BoAccordionContainerProps } from './bo-accordion-container';

const props = withDefaults(defineProps<BoAccordionContainerProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	allowMultiple: false,
	defaultOpenItemId: undefined,
});

const { constructAttribute } = useAttributes();

const ACCORDION_CONTAINER_STYLE = {
	base: {
		container:
			'flex flex-col gap-2 w-full max-w-full space-y-0 overflow-hidden border-0 bg-transparent dark:border-0 dark:bg-transparent',
	},
} as const;

const openAccordions = ref<Set<string>>(new Set());

// Initialize with default open item if specified
if (props.defaultOpenItemId) {
	openAccordions.value.add(props.defaultOpenItemId);
}

provide(InjectKey.AccordionGroup, {
	allowMultiple: props.allowMultiple,
	openAccordions,
	toggleAccordion: (id: string) => {
		if (openAccordions.value.has(id)) {
			openAccordions.value.delete(id);
		} else {
			if (!props.allowMultiple) {
				openAccordions.value.clear();
			}
			openAccordions.value.add(id);
		}
	},
});

const rootClasses = computed(() => {
	return TailwindService.instance.merge(
		'bo-accordion-container',
		ACCORDION_CONTAINER_STYLE.base.container,
	);
});
</script>
