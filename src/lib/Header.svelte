<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { sluggify } from "./utils";
	export let categoryNames;
	const projectPaths = [`${base}/projekte`, ...categoryNames.map(category => encodeURI(`${base}/projekte/${sluggify(category)}`))];
</script>

<header class="container">
	<div class="row justify-content-center">
		<nav class="col-lg-10 navbar navbar-expand flex-column py-3">
			<div class="container title-container justify-content-center pb-3">
				<a class="title d-flex flex-column justify-content-center text-center" sveltekit:prefetch href="{base}/">
					<span>Pechtold</span>
					<span>Architekten</span>
				</a>
			</div>
			<div class="container menu-bar p-0">
				<ul class="navbar-nav w-100 justify-content-around">
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
			font-size: calc(1.5rem + 1.5vw);
			font-weight: 600;
			color: #6685a3;
			letter-spacing: .05em;
		}
		font-size: calc(1.2rem + 1.2vw);
		font-weight: 400;
		letter-spacing: .02em;
		color: #666;
	}

	.menu-bar {
		ul {
			border-top: 1px solid #6685a3;
			border-bottom: 1px solid #6685a3;
		}
		.dropdown-menu {
			border-radius: 0;
			border: 1px solid #6685a3;
			.dropdown-item:hover {
				background-color: aliceblue;
			}
		}
		.nav-item > a {
			color: #6685a3;
			font-weight: 300;
			padding: .25rem 1rem .5rem;
			border-top: 4px solid transparent;

			&:hover {
				background-color: aliceblue;
			}

			&.active {
				border-color: #6685a3;
			}
		}
		.dropdown-item {
			color: #6685a3;
			font-weight: 300;
			&.active {
				background-color: transparent;
				color: black;
				border-left: 4px solid #6685a3;
				border-right: 4px solid #6685a3;
			}
		}
	}
</style>
