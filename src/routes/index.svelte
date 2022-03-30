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

<div class="row h-100 flex-column justify-content-center align-items-center">
	<div class="col d-flex flex-column justify-content-center">
		<div id="homepagePhotos" class="carousel slide overflow-hidden" data-bs-ride="carousel">
			<div class="carousel-inner">
				{#each projects as project, index}
					<a class="carousel-item"
						 class:active={index === 0}
						 sveltekit:prefetch
						 href="{base}/projekt/{sluggify(project.attributes.Titel)}">
						<img
							loading={index === 0 ? 'eager' : 'lazy'}
							src={project.attributes.Fotos.data[0].attributes.large.url}
							srcset="{project.attributes.Fotos.data[0].attributes.formats.small.url} 500w,
											{project.attributes.Fotos.data[0].attributes.formats.medium.url} 750w,
											{project.attributes.Fotos.data[0].attributes.formats.large.url} 1000w,
											{project.attributes.Fotos.data[0].attributes.formats.xlarge.url} 1500w"
							sizes="(max-width: 300px) 500px,
											(max-width: 991px) 750px,
											(max-width: 1200px) 1000px,
          						1500px"
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
	</div>
	<div class="col flex-grow-0">
		<div class="card mt-3">
			<div class="card-body p-2 text-center small">
				<SvelteMarkdown source={contact} options={variables.markdownOptions} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import "../../node_modules/bootstrap/scss/functions";
	@import "../../node_modules/bootstrap/scss/variables";
	@import "../../node_modules/bootstrap/scss/mixins";

	.row {
		min-height: calc(100vh - 180px);
	}

	.carousel-item {
		width: 100%;
		aspect-ratio: 1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
		}
	}

	@include media-breakpoint-up(sm) {
		.carousel-item {
			aspect-ratio: 3 / 2;
		}
	}

	.card {
		font-weight: 300;

		:global(p) {
			margin-bottom: 0;
		}
	}
</style>
