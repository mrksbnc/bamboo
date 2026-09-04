<script setup lang="ts">
import { computed, ref, useId } from 'vue';

const props = withDefaults(
	defineProps<{
		code: string;
		align?: 'center' | 'start' | 'end';
		lang?: string;
	}>(),
	{
		align: 'center',
		lang: 'vue',
	},
);

const isCodeVisible = ref(false);
const codeId = `example-code-${useId()}`;
const codeLines = computed<string[]>(() => props.code.trim().split(/\r?\n/));
</script>

<template>
	<div class="example-frame" data-slot="component-preview" data-not-typeset>
		<div class="example-frame-preview" data-slot="preview" :data-align="align">
			<slot />
		</div>
		<div class="example-frame-code" data-slot="code" :data-expanded="isCodeVisible">
			<pre :id="codeId" :data-lang="lang" tabindex="0"><code><span
				v-for="(line, index) in codeLines"
				:key="`${index}-${line}`"
				class="example-frame-code-line"
			><span class="example-frame-line-number" aria-hidden="true">{{ index + 1 }}</span><span>{{ line || ' ' }}</span></span></code></pre>
			<div v-if="!isCodeVisible" class="example-frame-code-fade">
				<button
					type="button"
					class="example-frame-code-button"
					:aria-controls="codeId"
					:aria-expanded="isCodeVisible"
					@click="isCodeVisible = true"
				>
					View Code
				</button>
			</div>
		</div>
	</div>
</template>
