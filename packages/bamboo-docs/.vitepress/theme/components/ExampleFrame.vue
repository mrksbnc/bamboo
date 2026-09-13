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
const isCopied = ref(false);
const codeId = `example-code-${useId()}`;

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

function highlightTag(value: string): string {
	const tagMatch = value.match(/^<(\/)?([A-Za-z][\w.-]*)/);
	if (!tagMatch) return escapeHtml(value);

	const closing = tagMatch[1] ? '/' : '';
	const tagName = tagMatch[2];
	const ending = value.endsWith('/>') ? '/>' : '>';
	const attributes = value.slice(tagMatch[0].length, value.length - ending.length);
	const attributePattern = /([^\s=/>]+)(\s*=\s*)?("[^"]*"|'[^']*'|[^\s>]+)?/g;
	let html = `&lt;${closing}<span class="example-code-tag">${escapeHtml(tagName)}</span>`;
	let cursor = 0;

	for (const attribute of attributes.matchAll(attributePattern)) {
		const fullMatch = attribute[0];
		const index = attribute.index ?? 0;
		const name = attribute[1];
		const equals = attribute[2];
		const rawValue = attribute[3];

		html += escapeHtml(attributes.slice(cursor, index));
		html += `<span class="example-code-attribute">${escapeHtml(name)}</span>`;
		if (equals && rawValue) {
			html += escapeHtml(equals);
			html += `<span class="example-code-string">${escapeHtml(rawValue)}</span>`;
		}
		cursor = index + fullMatch.length;
	}

	html += escapeHtml(attributes.slice(cursor));
	return `${html}${escapeHtml(ending)}`;
}

function highlightLine(value: string): string {
	const parts = value.split(/(<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*>)/g);
	return parts
		.map((part) => {
			if (part.startsWith('<!--')) {
				return `<span class="example-code-comment">${escapeHtml(part)}</span>`;
			}
			if (part.startsWith('<')) return highlightTag(part);
			const text = escapeHtml(part);
			return text.replace(/(\{\{.*?\}\})/g, '<span class="example-code-expression">$1</span>');
		})
		.join('');
}

function highlightCode(code: string): string {
	const lines = code.trim().split(/\r?\n/);
	return `<pre class="example-code"><code>${lines
		.map((line) => `<span class="line example-code-line">${highlightLine(line) || ' '}</span>`)
		.join('\n')}</code></pre>`;
}

const highlightedCode = computed(() => highlightCode(props.code));

async function copyCode(): Promise<void> {
	if (typeof navigator === 'undefined' || !navigator.clipboard) return;

	try {
		await navigator.clipboard.writeText(props.code.trim());
		isCopied.value = true;
		window.setTimeout(() => {
			isCopied.value = false;
		}, 1500);
	} catch {
		isCopied.value = false;
	}
}
</script>

<template>
	<div class="example-frame" data-slot="component-preview" data-not-typeset>
		<div class="example-frame-preview" data-slot="preview" :data-align="align">
			<slot />
		</div>
		<div class="example-frame-code" data-slot="code" :data-expanded="isCodeVisible">
			<div
				:id="codeId"
				:data-lang="lang"
				class="example-frame-code-highlight"
				tabindex="0"
				v-html="highlightedCode"
			></div>
			<button
				v-if="isCodeVisible"
				type="button"
				class="example-frame-copy-button"
				:aria-label="isCopied ? 'Code copied' : 'Copy code'"
				@click="copyCode"
			>
				{{ isCopied ? 'Copied' : 'Copy' }}
			</button>
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
