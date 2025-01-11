<template>
	<bo-slot-modal
		tabindex="-1"
		:show-close-button="showCloseButton"
		:bordered-header="false"
		:bordered-footer="false"
		:width-in-px="420"
		class="bo-alert-modal"
		@update:show="cancelButtonProps.onCLick"
		@keydown="KeyboardUtils.registerEnterKeyHandler($event, confirmButtonProps.onCLick)"
	>
		<template #header>
			<div :class="['flex gap-2', headerAlignment]">
				<span v-if="withIcon" class="flex flex-col items-center">
					<warning-svg
						v-if="variant === BoAlertModalVariant.warning"
						class="h-10 w-10 fill-yellow-500"
					/>
					<success-svg
						v-else-if="variant === BoAlertModalVariant.success"
						class="h-10 w-10 fill-green-600"
					/>
					<error-svg
						v-else-if="variant === BoAlertModalVariant.error"
						class="h-10 w-10 fill-red-600"
					/>
					<info-svg v-else class="h-10 w-10 fill-blue-600" />
				</span>
				<span class="flex flex-col items-center">
					<bo-text
						:text="title"
						:size="BoFontSize['3xl']"
						:weight="BoFontWeight.semibold"
						:font-family="BoFontFamily.sans"
					/>
				</span>
			</div>
		</template>
		<template #body>
			<div class="flex flex-col gap-2 pt-4">
				<bo-text
					:text="content"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:white-space="BoTextWhiteSpace.break_spaces"
					:text-align="
						alignment === BoAlertModalAlignment.centered ? BoTextAlign.center : BoTextAlign.justify
					"
				/>
			</div>
		</template>
		<template #footer>
			<div class="flex w-full justify-between gap-2 pt-4">
				<bo-button
					v-if="showCancelButton"
					tabindex="1"
					class="w-full"
					v-bind="cancelButtonProps.props"
					@click="cancelButtonProps.onCLick"
				/>
				<bo-button
					tabindex="2"
					class="w-full"
					v-bind="confirmButtonProps.props"
					@click="confirmButtonProps.onCLick"
				/>
			</div>
		</template>
	</bo-slot-modal>
</template>

<script setup lang="ts">
import ErrorSvg from '@/assets/svg/error.svg?component';
import InfoSvg from '@/assets/svg/info.svg?component';
import SuccessSvg from '@/assets/svg/success.svg?component';
import WarningSvg from '@/assets/svg/warning.svg?component';
import { BoButton, BoButtonVariant } from '@/components/bo_button';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoText,
	BoTextAlign,
	BoTextColor,
	BoTextWhiteSpace,
} from '@/components/bo_text';
import { HtmlButtonType } from '@/shared/html_button';
import { KeyboardUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import { BoSlotModal } from '.';
import { BoAlertModalAlignment, BoAlertModalVariant } from './constants';
import type { BoAlertModalProps } from './types';

const props = withDefaults(defineProps<BoAlertModalProps>(), {
	title: '',
	content: '',
	withIcon: true,
	confirmButtonProps: () => ({
		props: {
			label: '',
			variant: BoButtonVariant.primary,
			type: HtmlButtonType.submit,
		},
		onCLick: () => {},
	}),
	cancelButtonProps: () => ({
		props: {
			label: '',
			variant: BoButtonVariant.secondary,
			type: HtmlButtonType.reset,
		},
		onCLick: () => {},
	}),
	variant: () => BoAlertModalVariant.info,
	alignment: () => BoAlertModalAlignment.default,
	confirmButtonVariant: () => BoButtonVariant.primary,
	cancelButtonVariant: () => BoButtonVariant.secondary,
});

const {
	title,
	content,
	withIcon,
	showCloseButton,
	showCancelButton,
	cancelButtonProps,
	confirmButtonProps,
	variant,
	alignment,
} = toRefs(props);

const headerAlignment = computed<string>(() => {
	switch (alignment.value) {
		case BoAlertModalAlignment.centered:
			return /*tw*/ 'flex-col items-center';
		case BoAlertModalAlignment.default:
		default:
			return /*tw*/ 'items-center';
	}
});
</script>
