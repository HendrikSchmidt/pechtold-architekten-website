<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { sluggify } from "./utils";
	export let categoryNames;
</script>

<header class="pt-2">
	<nav class="navbar navbar-expand-md navbar-light flex-column">
		<div class="container title-container justify-content-md-center">
			<a class="title" sveltekit:prefetch href="{base}/">
				<span>Pechtold</span>
				<span>Architekten</span>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
		<div class="container">
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mb-2 mb-lg-0 w-100 justify-content-around">
					<li class="nav-item">
						<a sveltekit:prefetch class="nav-link" class:active={$page.url.pathname === encodeURI(`${base}/büro`)} href="{base}/büro">Büro</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Projekte
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li><a sveltekit:prefetch class="dropdown-item" class:active={$page.url.pathname === `${base}/projekte`} href="{base}/projekte">Übersicht</a></li>
							{#each categoryNames as category}
							<li><a sveltekit:prefetch class="dropdown-item" class:active={$page.url.pathname === `${base}/projekte/${sluggify(category)}`} href="{base}/projekte/{sluggify(category)}">{category}</a></li>
							{/each}
						</ul>
					</li>
					<li class="nav-item">
						<a sveltekit:prefetch class="nav-link" class:active={$page.url.pathname === `${base}/kontakt`} href="{base}/kontakt">Kontakt</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		text-transform: uppercase;
		line-height: 1;
		:first-child {
			font-weight: 600;
			font-size: 2.75rem;
			color: #6685a3;
		}
		font-size: 2.2rem;
		font-weight: 200;
		letter-spacing: .03em;
		color: #666;
	}
</style>
