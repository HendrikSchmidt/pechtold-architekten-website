<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { sluggify } from "./utils";
	export let categoryNames;
	const projectPaths = [`${base}/projekte`, ...categoryNames.map(category => encodeURI(`${base}/projekte/${sluggify(category)}`))];
</script>

<header class="container">
	<div class="row justify-content-center">
		<nav class="col-lg-10 navbar navbar-expand navbar-light flex-column">
			<div class="container title-container justify-content-center p-2">
				<a class="title" sveltekit:prefetch href="{base}/">
					<span>Pechtold</span>
					<span>Architekten</span>
				</a>
			</div>
			<div class="container menu-bar p-0">
				<ul class="navbar-nav mb-2 w-100 justify-content-around border-top border-bottom">
					<li class="nav-item">
						<a sveltekit:prefetch class="nav-link" class:active={$page.url.pathname === encodeURI(`${base}/büro`)} href="{base}/büro">Büro</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" class:active={projectPaths.includes($page.url.pathname)} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Projekte
						</a>
						<ul class="dropdown-menu text-center start-50 translate-middle-x m-0 p-0" aria-labelledby="navbarDropdown">
							<li><a sveltekit:prefetch class="dropdown-item" class:active={$page.url.pathname === `${base}/projekte`} href="{base}/projekte">Übersicht</a></li>
							{#each categoryNames as category}
							<li><hr class="dropdown-divider m-0"></li>
							<li><a sveltekit:prefetch class="dropdown-item" class:active={$page.url.pathname === encodeURI(`${base}/projekte/${sluggify(category)}`)} href="{base}/projekte/{sluggify(category)}">{category}</a></li>
							{/each}
						</ul>
					</li>
					<li class="nav-item">
						<a sveltekit:prefetch class="nav-link" class:active={$page.url.pathname === `${base}/kontakt`} href="{base}/kontakt">Kontakt</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</header>

<style lang="scss">
	.title {
		text-decoration: none;
		text-transform: uppercase;
		line-height: 1;
		:first-child {
			font-weight: 600;
			color: #6685a3;
			letter-spacing: .05em;
		}
		font-size: 2.2rem;
		font-weight: 400;
		letter-spacing: .02em;
		color: #666;
	}

	.menu-bar {
		.dropdown-menu {
			border-radius: 0;
		}
		.nav-item > a {
			padding-top: 2px;
			border-top: 4px solid transparent;

			&.active {
				border-color: #6685a3;
			}
		}
		.dropdown-item.active {
			background-color: transparent;
			color: black;
			border-left: 4px solid #6685a3;
			border-right: 4px solid #6685a3;
		}
	}
</style>
