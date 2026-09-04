<script setup lang="ts">
import { codeToHtml, type BundledLanguage } from 'shiki';
import { ref, useId, watch } from 'vue';

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

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

async function highlightCode(code: string, lang: string): Promise<string> {
	try {
		return await codeToHtml(code, {
			lang: lang as BundledLanguage,
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		});
	} catch {
		return `<pre><code>${escapeHtml(code)}</code></pre>`;
	}
}

const highlightedCode = ref(await highlightCode(props.code.trim(), props.lang));

watch(
	() => [props.code, props.lang],
	async ([code, lang]) => {
		highlightedCode.value = await highlightCode(code.trim(), lang);
	},
);
</script>

<template>
	<div class="example-frame" data-slot="component-preview" data-not-typeset>
		<div class="example-frame-preview" data-slot="preview" :data-align="align">
			<slot />
		</div>
		<div
			:id="codeId"
			class="example-frame-code"
			data-slot="code"
			:data-lang="lang"
			:data-expanded="isCodeVisible"
		>
			<div class="example-frame-code-content" v-html="highlightedCode"></div>
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
