<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { variables } from '$lib/variables';
	import { title } from '$lib/utils';
	import { base } from '$app/paths';
	import { sluggify } from '$lib/utils';

	export let contact;
	export let projects;

	title.clear();
</script>

<div class="row justify-content-center">
	<div class="col">
		<div id="homepagePhotos" class="carousel slide card-img-top py-1 overflow-hidden" data-bs-ride="carousel">
			<div class="carousel-inner">
				{#each projects as project, index}
					<a class="carousel-item"
						 class:active={index === 0}
						 sveltekit:prefetch
						 href="{base}/projekt/{sluggify(project.attributes.Titel)}">
						<img
							loading="lazy"
							src={project.attributes.Fotos.data[0].attributes.formats.large.url}
							alt={project.attributes.Fotos.data[0].attributes.alternativeText}
						/>
					</a>
				{/each}
			</div>
			<button
				class="carousel-control carousel-control-prev"
				type="button"
				data-bs-target="#homepagePhotos"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control carousel-control-next"
				type="button"
				data-bs-target="#homepagePhotos"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>

		<div class="card mt-3">
			<div class="card-body text-center small">
				<SvelteMarkdown source={contact} options={variables.markdownOptions} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.carousel-item {
		width: 100%;
		height: calc(100vh - 320px);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
		}
	}

	.card {
		font-weight: 300;

		:global(p) {
			margin-bottom: 0;
		}
	}
</style>
