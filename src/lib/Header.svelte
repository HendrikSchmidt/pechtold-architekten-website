<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { sluggify } from "./utils";
	export let categoryNames;
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" sveltekit:prefetch href="{base}/">Pechtold Architekten</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a sveltekit:prefetch class:active={$page.url.pathname === encodeURI(`${base}/büro`)} href="{base}/büro">Büro</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
						<a sveltekit:prefetch class:active={$page.url.pathname === `${base}/kontakt`} href="{base}/kontakt">Kontakt</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
