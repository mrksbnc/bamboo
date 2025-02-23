<template>
	<bo-card>
		<template #header>
			<div class="flex flex-row gap-2 items-center text-neutral-900 dark:text-neutral-100">
				<bo-icon :icon="Icon.globe" :size="BoSize.default" />
				<bo-text
					text="Lorem ipsum"
					:size="BoFontSize['1xl']"
					:color="BoTextColor.secondary"
					:weight="BoFontWeight.semibold"
				/>
			</div>
		</template>
		<template #content>
			<div class="flex flex-col gap-2 mt-2">
				<bo-text
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
				/>
			</div>
		</template>
		<template #actions>
			<div class="flex gap-2 mt-2">
				<bo-button label="Read more" :size="BoSize.small" :variant="BoButtonVariant.dark" />
			</div>
		</template>
	</bo-card>
</template>

<script setup lang="ts">
import { BoCard } from '@/components/bo_card';
import { BoButton, BoButtonVariant } from '@/components/bo_button';
import { BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo_text';
import { BoSize } from '@/shared';
import { Icon, BoIcon } from '@/components/bo_icon';
</script>
