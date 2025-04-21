<template>
	<div class="relative">
		<div
			:class="[
				'flex items-center gap-2 rounded-lg border bg-white dark:bg-neutral-800',
				'focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500',
				disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
				sizeClasses[size],
				variant === 'outlined'
					? 'border-neutral-300 dark:border-neutral-600'
					: 'border-transparent',
			]"
			@click="toggleCalendar"
		>
			<bo-icon
				:icon="Icon.calendar"
				:size="size"
				class="text-neutral-500 dark:text-neutral-400"
			/>
			<input
				ref="inputRef"
				type="text"
				:value="formattedDate"
				:placeholder="placeholder"
				:disabled="disabled"
				:class="[
					'w-full bg-transparent outline-none',
					'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
					'text-neutral-900 dark:text-neutral-100',
				]"
				readonly
				@focus="showCalendar = true"
				@blur="handleBlur"
			/>
			<bo-icon
				v-if="modelValue"
				:icon="Icon.close"
				:size="size"
				class="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
				@click.stop="clearDate"
			/>
		</div>

		<div
			v-if="showCalendar"
			:class="[
				'absolute z-50 mt-2 w-full rounded-lg border border-neutral-200 dark:border-neutral-700',
				'bg-white shadow-lg dark:bg-neutral-800',
			]"
		>
			<div class="p-4">
				<div class="mb-4 flex items-center justify-between">
					<button
						type="button"
						class="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
						@click="previousMonth"
					>
						<bo-icon :icon="Icon.chevronLeft" />
					</button>
					<span class="font-semibold">{{ currentMonthYear }}</span>
					<button
						type="button"
						class="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
						@click="nextMonth"
					>
						<bo-icon :icon="Icon.chevronRight" />
					</button>
				</div>

				<div class="grid grid-cols-7 gap-1">
					<div
						v-for="day in weekDays"
						:key="day"
						class="text-center text-sm text-neutral-500 dark:text-neutral-400"
					>
						{{ day }}
					</div>
					<div
						v-for="day in daysInMonth"
						:key="day.date.getTime()"
						:class="[
							'cursor-pointer rounded-lg p-2 text-center',
							day.isCurrentMonth
								? 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
								: 'text-neutral-400 dark:text-neutral-500',
							isSelected(day.date) ? 'bg-blue-500 text-white' : '',
							isToday(day.date) ? 'font-bold' : '',
							isDisabled(day.date) ? 'cursor-not-allowed opacity-50' : '',
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
						class="w-12 rounded-lg border border-neutral-200 bg-transparent text-center dark:border-neutral-700"
						@input="updateHours"
					/>
					<span>:</span>
					<input
						type="number"
						:value="minutes"
						min="0"
						max="59"
						class="w-12 rounded-lg border border-neutral-200 bg-transparent text-center dark:border-neutral-700"
						@input="updateMinutes"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { computed, ref, toRefs } from 'vue';
import { BoDatepickerProps, BoDatepickerVariant } from './bo-datepicker';

const props = withDefaults(defineProps<BoDatepickerProps>(), {
	id: IdentityService.instance.generateId(),
	size: BoSize.default,
	disabled: false,
	placeholder: 'Select date',
	format: 'MM/DD/YYYY',
	showTime: false,
	variant: BoDatepickerVariant.default,
});

const emit = defineEmits<{
	'update:modelValue': [value: Date | undefined];
}>();

const { modelValue, size, disabled, format, showTime } = toRefs(props);

const inputRef = ref<HTMLInputElement | null>(null);
const showCalendar = ref(false);
const currentDate = ref(new Date());
const hours = ref(0);
const minutes = ref(0);

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const sizeClasses = {
	[BoSize.extra_small]: 'px-2 py-1 text-xs',
	[BoSize.small]: 'px-3 py-1.5 text-sm',
	[BoSize.default]: 'px-4 py-2 text-base',
	[BoSize.large]: 'px-5 py-2.5 text-lg',
	[BoSize.extra_large]: 'px-6 py-3 text-xl',
};

const formattedDate = computed(() => {
	if (!modelValue.value) return '';
	return formatDate(modelValue.value, format.value);
});

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

const toggleCalendar = () => {
	if (disabled.value) return;
	showCalendar.value = !showCalendar.value;
};

const handleBlur = (event: FocusEvent) => {
	// Check if the blur event was caused by clicking outside
	const relatedTarget = event.relatedTarget as HTMLElement;
	if (!relatedTarget?.closest('.bo-datepicker')) {
		showCalendar.value = false;
	}
};

const clearDate = (event: Event) => {
	event.stopPropagation();
	emit('update:modelValue', undefined);
};

const previousMonth = () => {
	currentDate.value = new Date(
		currentDate.value.getFullYear(),
		currentDate.value.getMonth() - 1,
		1,
	);
};

const nextMonth = () => {
	currentDate.value = new Date(
		currentDate.value.getFullYear(),
		currentDate.value.getMonth() + 1,
		1,
	);
};

const selectDate = (date: Date) => {
	if (isDisabled(date)) return;

	const newDate = new Date(date);
	if (showTime.value) {
		newDate.setHours(hours.value);
		newDate.setMinutes(minutes.value);
	}

	emit('update:modelValue', newDate);
	if (!showTime.value) {
		showCalendar.value = false;
	}
};

const updateHours = (event: Event) => {
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

const formatDate = (date: Date, format: string) => {
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return format
		.replace('DD', day)
		.replace('MM', month)
		.replace('YYYY', year.toString())
		.replace('HH', hours)
		.replace('mm', minutes);
};
</script>
