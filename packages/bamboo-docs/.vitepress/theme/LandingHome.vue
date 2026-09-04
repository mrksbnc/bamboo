<script setup lang="ts">
import { useData, withBase } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
	<div class="landing">
		<div class="landing-grid" aria-hidden="true"></div>
		<div class="landing-glow" aria-hidden="true"></div>

		<main class="landing-main">
			<img class="landing-logo" :src="withBase('/assets/logo.webp')" alt="Bamboo logo" width="96" />

			<p class="landing-badge">
				<span class="landing-badge-dot"></span>
				Vue 3 component library
			</p>

			<h1 class="landing-title">
				Build interfaces.
				<br />
				<span class="landing-title-accent">Keep control.</span>
			</h1>

			<p class="landing-subtitle">
				Typed, manifest-driven components for Vue 3 with accessible states, concrete styles, and
				room to make each surface your own.
			</p>

			<div class="landing-actions">
				<a class="landing-button landing-button-primary" href="/en/guide/getting-started">
					Get started
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</a>
				<a
					class="landing-button landing-button-ghost"
					href="https://github.com/mrksbnc/bamboo"
					target="_blank"
					rel="noopener"
				>
					GitHub
				</a>
			</div>

			<div class="landing-terminal">
				<div class="landing-terminal-bar">
					<span class="landing-terminal-dot dot-red"></span>
					<span class="landing-terminal-dot dot-yellow"></span>
					<span class="landing-terminal-dot dot-green"></span>
					<span class="landing-terminal-title">terminal</span>
				</div>
				<div class="landing-terminal-body">
					<p class="landing-terminal-line">
						<span class="landing-terminal-prompt">$</span> pnpm add @mrksbnc/bamboo-vue
					</p>
					<p class="landing-terminal-line landing-terminal-dim">Packages: +1</p>
					<p class="landing-terminal-line landing-terminal-dim">
						Progress: resolved 1, reused 0, downloaded 1
					</p>
					<p class="landing-terminal-line">
						<span class="landing-terminal-prompt">$</span> import { BoButton } from
						'@mrksbnc/bamboo-vue'
					</p>
					<p class="landing-terminal-line">
						<span class="landing-terminal-caret">▍</span>
					</p>
				</div>
			</div>
		</main>

		<section class="landing-features">
			<div class="landing-feature">
				<span class="landing-feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 256 220.8">
						<path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" />
						<path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" />
						<path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" />
					</svg>
				</span>
				<h3>Vue 3</h3>
				<p>Composition API components that fit naturally into modern Vue applications.</p>
			</div>
			<div class="landing-feature">
				<span class="landing-feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="20">
						<path fill="#007acc" d="M0 200V0h400v400H0" />
						<path
							fill="#fff"
							d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
						/>
					</svg>
				</span>
				<h3>TypeScript First</h3>
				<p>Props, manifests, and public APIs stay typed from source to template.</p>
			</div>
			<div class="landing-feature">
				<span class="landing-feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="#38bdf8">
						<path
							d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
						/>
					</svg>
				</span>
				<h3>Tailwind CSS 4</h3>
				<p>Utility-first styling with concrete tokens and predictable dark-mode pairs.</p>
			</div>
			<div class="landing-feature">
				<span class="landing-feature-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#a78bfa"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="13.5" cy="6.5" r=".5" fill="#a78bfa" />
						<circle cx="17.5" cy="10.5" r=".5" fill="#a78bfa" />
						<circle cx="8.5" cy="7.5" r=".5" fill="#a78bfa" />
						<circle cx="6.5" cy="12.5" r=".5" fill="#a78bfa" />
						<path
							d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
						/>
					</svg>
				</span>
				<h3>Composable</h3>
				<p>Use the pieces you need and keep each surface as a normal Vue component.</p>
			</div>
			<div class="landing-feature">
				<span class="landing-feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="#fbbf24">
						<path
							d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
						/>
					</svg>
				</span>
				<h3>Dark Mode Ready</h3>
				<p>Every surface ships with a deliberate light and dark treatment.</p>
			</div>
			<div class="landing-feature">
				<span class="landing-feature-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#4ade80"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
						<path d="m9 12 2 2 4-4" />
					</svg>
				</span>
				<h3>Accessible</h3>
				<p>Semantic markup, keyboard-friendly interactions, and reduced-motion support.</p>
			</div>
		</section>

		<footer class="landing-footer">
			<span>MIT Licensed</span>
			<span>·</span>
			<a href="/en/components/index">Components</a>
			<span>·</span>
			<a href="/en/guide/theming">Theming</a>
		</footer>
	</div>
</template>

<style scoped>
.landing {
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 64px);
	background: #050505;
	color: #e4e4e7;
	overflow: hidden;
	font-family: ui-sans-serif, system-ui, sans-serif;
}

.landing-grid {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(to right, rgb(255 255 255 / 4%) 1px, transparent 1px),
		linear-gradient(to bottom, rgb(255 255 255 / 4%) 1px, transparent 1px);
	background-size: 56px 56px;
	mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
	pointer-events: none;
}

.landing-glow {
	position: absolute;
	top: -20%;
	left: 50%;
	transform: translateX(-50%);
	width: 720px;
	height: 480px;
	background: radial-gradient(ellipse at center, rgb(59 130 246 / 18%), transparent 65%);
	filter: blur(40px);
	pointer-events: none;
}

.landing-main {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 120px 24px 72px;
	text-align: center;
}

.landing-logo {
	margin: 0 auto 20px;
	display: block;
	width: 96px;
	height: auto;
}

.landing-badge {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 28px;
	padding: 6px 14px;
	border: 1px solid rgb(255 255 255 / 10%);
	border-radius: 999px;
	background: rgb(255 255 255 / 4%);
	font-size: 13px;
	color: #a1a1aa;
}

.landing-badge-dot {
	width: 6px;
	height: 6px;
	border-radius: 999px;
	background: #22c55e;
	box-shadow: 0 0 8px rgb(34 197 94 / 80%);
}

.landing-title {
	margin: 0;
	font-size: clamp(44px, 8vw, 84px);
	font-weight: 700;
	line-height: 1.05;
	letter-spacing: -0.04em;
	color: #fafafa;
}

.landing-title-accent {
	background: linear-gradient(100deg, #60a5fa 0%, #a78bfa 55%, #f472b6 100%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}

.landing-subtitle {
	max-width: 560px;
	margin: 24px 0 0;
	font-size: 17px;
	line-height: 1.6;
	color: #a1a1aa;
}

.landing-actions {
	display: flex;
	gap: 12px;
	margin-top: 36px;
}

.landing-button {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 22px;
	border-radius: 8px;
	font-size: 15px;
	font-weight: 500;
	text-decoration: none;
	transition:
		background-color 0.15s ease,
		border-color 0.15s ease,
		color 0.15s ease;
}

.landing-button-primary {
	background: #fafafa;
	color: #09090b;
}

.landing-button-primary:hover {
	background: #d4d4d8;
}

.landing-button-ghost {
	border: 1px solid rgb(255 255 255 / 14%);
	color: #e4e4e7;
}

.landing-button-ghost:hover {
	border-color: rgb(255 255 255 / 30%);
	background: rgb(255 255 255 / 5%);
}

.landing-terminal {
	width: min(640px, 100%);
	margin-top: 64px;
	border: 1px solid rgb(255 255 255 / 10%);
	border-radius: 12px;
	background: rgb(9 9 11 / 90%);
	box-shadow: 0 24px 80px rgb(0 0 0 / 60%);
	text-align: left;
	overflow: hidden;
}

.landing-terminal-bar {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 12px 16px;
	border-bottom: 1px solid rgb(255 255 255 / 8%);
}

.landing-terminal-dot {
	width: 10px;
	height: 10px;
	border-radius: 999px;
}

.dot-red {
	background: #ff5f57;
}

.dot-yellow {
	background: #febc2e;
}

.dot-green {
	background: #28c840;
}

.landing-terminal-title {
	margin-left: 8px;
	font-size: 12px;
	color: #71717a;
}

.landing-terminal-body {
	padding: 18px 20px;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
	font-size: 13.5px;
	line-height: 1.9;
}

.landing-terminal-line {
	margin: 0;
	color: #d4d4d8;
}

.landing-terminal-dim {
	color: #71717a;
}

.landing-terminal-prompt {
	margin-right: 8px;
	color: #60a5fa;
}

.landing-terminal-caret {
	color: #60a5fa;
	animation: landing-blink 1.1s steps(1) infinite;
}

@keyframes landing-blink {
	50% {
		opacity: 0;
	}
}

.landing-features {
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 16px;
	width: min(1040px, 100%);
	margin: 0 auto;
	padding: 0 24px 96px;
}

.landing-feature {
	padding: 22px;
	border: 1px solid rgb(255 255 255 / 8%);
	border-radius: 12px;
	background: rgb(255 255 255 / 2.5%);
	transition: border-color 0.15s ease;
}

.landing-feature:hover {
	border-color: rgb(255 255 255 / 18%);
}

.landing-feature-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	margin-bottom: 12px;
	border: 1px solid rgb(255 255 255 / 10%);
	border-radius: 9px;
	background: rgb(255 255 255 / 4%);
}

.landing-feature h3 {
	margin: 0 0 8px;
	font-size: 15px;
	font-weight: 600;
	color: #fafafa;
}

.landing-feature p {
	margin: 0;
	font-size: 14px;
	line-height: 1.6;
	color: #a1a1aa;
}

.landing-feature code {
	padding: 1px 6px;
	border-radius: 4px;
	background: rgb(255 255 255 / 8%);
	color: #d4d4d8;
	font-size: 12.5px;
}

.landing-footer {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 28px 24px 40px;
	font-size: 13px;
	color: #52525b;
}

.landing-footer a {
	color: #71717a;
	text-decoration: none;
	transition: color 0.15s ease;
}

.landing-footer a:hover {
	color: #d4d4d8;
}
</style>
