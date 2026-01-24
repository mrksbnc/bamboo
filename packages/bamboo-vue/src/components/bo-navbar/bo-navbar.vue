<template>
	<nav :id="id" :data-testid="dataTestId" :role="role" :class="navbarClasses">
		<div :class="containerClasses">
			<div :class="contentClasses">
				<!-- Brand/Logo -->
				<div :class="brandClasses">
					<slot name="brand" />
				</div>

				<!-- Desktop Navigation -->
				<div :class="navClasses">
					<slot name="nav" />
				</div>

				<!-- Actions -->
				<div :class="actionsClasses">
					<slot name="actions" />

					<!-- Mobile menu toggle -->
					<button
						v-if="$slots.mobile || hasMobileContent"
						:class="mobileToggleClasses"
						@click="toggleMobileMenu"
						:aria-expanded="isMobileMenuOpen"
						aria-label="Toggle mobile menu"
					>
						<bo-icon :icon="isMobileMenuOpen ? 'x' : 'menu'" size="sm" />
					</button>
				</div>
			</div>

			<!-- Mobile Menu -->
			<div
				v-if="$slots.mobile || hasMobileContent"
				:class="mobileMenuClasses"
				:style="{ display: isMobileMenuOpen ? 'block' : 'none' }"
			>
				<div class="px-2 pt-2 pb-3 space-y-1">
					<slot name="mobile">
						<slot name="nav" />
					</slot>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import {
		NAVBAR_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoNavbarProps,
	} from '@workspace/bamboo-core';
	import { computed, ref, useSlots } from 'vue';
	import BoIcon from '../bo-icon/bo-icon.vue';

	const props = withDefaults(defineProps<BoNavbarProps>(), {
		...NAVBAR_MANIFEST.defaults,
	});

	const slots = useSlots();

	// State
	const isMobileMenuOpen = ref(false);

	// Computed
	const id = computed(() => props.id ?? generateComponentId('navbar'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoNavbar'));

	const hasMobileContent = computed(() => !!slots.nav);

	const navbarClasses = computed(() => {
		return mergeTwClasses(
			NAVBAR_MANIFEST.styles.base,
			NAVBAR_MANIFEST.styles.variant[props.variant!],
			NAVBAR_MANIFEST.styles.size[props.size!],
			props.sticky ? NAVBAR_MANIFEST.styles.sticky : '',
			props.shadow ? NAVBAR_MANIFEST.styles.shadow : '',
			props.blur ? NAVBAR_MANIFEST.styles.blur : '',
		);
	});

	const containerClasses = computed(() =>
		mergeTwClasses(
			NAVBAR_MANIFEST.styles.container.base,
			NAVBAR_MANIFEST.styles.container.maxWidth[props.maxWidth!],
		),
	);

	const contentClasses = computed(() =>
		mergeTwClasses(
			NAVBAR_MANIFEST.styles.content.base,
			NAVBAR_MANIFEST.styles.content.size[props.size!],
		),
	);

	const brandClasses = computed(() => NAVBAR_MANIFEST.styles.brand);
	const navClasses = computed(() => NAVBAR_MANIFEST.styles.nav);
	const actionsClasses = computed(() => NAVBAR_MANIFEST.styles.actions);
	const mobileToggleClasses = computed(() => NAVBAR_MANIFEST.styles.mobile.toggle);

	const mobileMenuClasses = computed(() => {
		return mergeTwClasses(
			NAVBAR_MANIFEST.styles.mobile.menu,
			isMobileMenuOpen.value ? NAVBAR_MANIFEST.styles.mobile.menuOpen : '',
		);
	});

	// Methods
	const toggleMobileMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	};

	const closeMobileMenu = () => {
		isMobileMenuOpen.value = false;
	};

	// Expose methods for external control
	defineExpose({
		toggleMobileMenu,
		closeMobileMenu,
		isMobileMenuOpen: computed(() => isMobileMenuOpen.value),
	});
</script>
