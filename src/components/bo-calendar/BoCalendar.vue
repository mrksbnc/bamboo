<template>
	<div
		:class="[
			'rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800',
			variant === 'compact' ? 'p-2' : 'p-4',
			sizeClasses[size],
		]"
		:data-testid="`bo-calendar-${id}`"
	>
		<div
			v-if="showHeader"
			class="mb-4 flex items-center justify-between"
		>
			<button
				type="button"
				:disabled="disabled"
				:class="[
					'rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700',
					disabled ? 'cursor-not-allowed opacity-50' : '',
				]"
				@click="previousMonth"
			>
				<bo-icon :icon="Icon.chevronLeft" />
			</button>
			<span class="font-semibold">{{ currentMonthYear }}</span>
			<button
				type="button"
				:disabled="disabled"
				:class="[
					'rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700',
					disabled ? 'cursor-not-allowed opacity-50' : '',
				]"
				@click="nextMonth"
			>
				<bo-icon :icon="Icon.chevronRight" />
			</button>
		</div>

		<div
			v-if="showWeekDays"
			class="mb-2 grid grid-cols-7 gap-1"
		>
			<div
				v-for="day in weekDays"
				:key="day"
				:class="[
					'text-center text-sm',
					variant === 'compact' ? 'text-xs' : 'text-sm',
					'text-neutral-500 dark:text-neutral-400',
				]"
			>
				{{ day }}
			</div>
		</div>

		<div class="grid grid-cols-7 gap-1">
			<div
				v-for="day in daysInMonth"
				:key="day.date.getTime()"
				:class="[
					'cursor-pointer rounded-lg text-center',
					variant === 'compact' ? 'p-1' : 'p-2',
					day.isCurrentMonth || showOtherMonths
						? 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
						: 'text-neutral-400 dark:text-neutral-500',
					isSelected(day.date) ? 'bg-blue-500 text-white' : '',
					isToday(day.date) ? 'font-bold' : '',
					isDisabled(day.date) ? 'cursor-not-allowed opacity-50' : '',
					!day.isCurrentMonth && !showOtherMonths ? 'invisible' : '',
				]"
				@click="selectDate(day.date)"
			>
				{{ day.date.getDate() }}
			</div>
		</div>

		<div
			v-if="showTime"
			class="mt-4 flex items-center justify-center gap-2"
		>
			<input
				type="number"
				:value="hours"
				min="0"
				max="23"
				:disabled="disabled"
				:class="[
					'w-12 rounded-lg border border-neutral-200 bg-transparent text-center dark:border-neutral-700',
					disabled ? 'cursor-not-allowed opacity-50' : '',
				]"
				@input="updateHours"
			/>
			<span>:</span>
			<input
				type="number"
				:value="minutes"
				min="0"
				max="59"
				:disabled="disabled"
				:class="[
					'w-12 rounded-lg border border-neutral-200 bg-transparent text-center dark:border-neutral-700',
					disabled ? 'cursor-not-allowed opacity-50' : '',
				]"
				@input="updateMinutes"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { computed, ref, toRefs } from 'vue';
import { BoCalendarProps, BoCalendarVariant } from './bo-calendar';

const props = withDefaults(defineProps<BoCalendarProps>(), {
	id: IdentityService.instance.generateId(),
	size: BoSize.default,
	disabled: false,
	showTime: false,
	showHeader: true,
	showWeekDays: true,
	showOtherMonths: true,
	variant: BoCalendarVariant.default,
});

const emit = defineEmits<{
	'update:modelValue': [value: Date | undefined];
}>();

const { modelValue, size, disabled, showTime, variant } = toRefs(props);

const currentDate = ref(new Date());
const hours = ref(0);
const minutes = ref(0);

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const sizeClasses = {
	[BoSize.extra_small]: 'text-xs',
	[BoSize.small]: 'text-sm',
	[BoSize.default]: 'text-base',
	[BoSize.large]: 'text-lg',
	[BoSize.extra_large]: 'text-xl',
};

const currentMonthYear = computed(() => {
	return currentDate.value.toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});
});

const daysInMonth = computed(() => {
	const year = currentDate.value.getFullYear();
	const month = currentDate.value.getMonth();
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const days = [];

	// Add days from previous month
	const prevMonthLastDay = new Date(year, month, 0).getDate();
	const firstDayOfWeek = firstDay.getDay();
	for (let i = firstDayOfWeek - 1; i >= 0; i--) {
		days.push({
			date: new Date(year, month - 1, prevMonthLastDay - i),
			isCurrentMonth: false,
		});
	}

	// Add days from current month
	for (let i = 1; i <= lastDay.getDate(); i++) {
		days.push({
			date: new Date(year, month, i),
			isCurrentMonth: true,
		});
	}

	// Add days from next month
	const remainingDays = 42 - days.length; // 6 rows * 7 days
	for (let i = 1; i <= remainingDays; i++) {
		days.push({
			date: new Date(year, month + 1, i),
			isCurrentMonth: false,
		});
	}

	return days;
});

const previousMonth = () => {
	if (disabled.value) return;
	currentDate.value = new Date(
		currentDate.value.getFullYear(),
		currentDate.value.getMonth() - 1,
		1,
	);
};

const nextMonth = () => {
	if (disabled.value) return;
	currentDate.value = new Date(
		currentDate.value.getFullYear(),
		currentDate.value.getMonth() + 1,
		1,
	);
};

const selectDate = (date: Date) => {
	if (disabled.value || isDisabled(date)) return;

	const newDate = new Date(date);
	if (showTime.value) {
		newDate.setHours(hours.value);
		newDate.setMinutes(minutes.value);
	}

	emit('update:modelValue', newDate);
};

const updateHours = (event: Event) => {
	if (disabled.value) return;
	const value = parseInt((event.target as HTMLInputElement).value);
	if (value >= 0 && value <= 23) {
		hours.value = value;
		if (modelValue.value) {
			const newDate = new Date(modelValue.value);
			newDate.setHours(value);
			emit('update:modelValue', newDate);
		}
	}
};

const updateMinutes = (event: Event) => {
	if (disabled.value) return;
	const value = parseInt((event.target as HTMLInputElement).value);
	if (value >= 0 && value <= 59) {
		minutes.value = value;
		if (modelValue.value) {
			const newDate = new Date(modelValue.value);
			newDate.setMinutes(value);
			emit('update:modelValue', newDate);
		}
	}
};

const isSelected = (date: Date) => {
	if (!modelValue.value) return false;
	return (
		date.getDate() === modelValue.value.getDate() &&
		date.getMonth() === modelValue.value.getMonth() &&
		date.getFullYear() === modelValue.value.getFullYear()
	);
};

const isToday = (date: Date) => {
	const today = new Date();
	return (
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		date.getFullYear() === today.getFullYear()
	);
};

const isDisabled = (date: Date) => {
	if (props.minDate && date < props.minDate) return true;
	if (props.maxDate && date > props.maxDate) return true;
	return false;
};
</script>
