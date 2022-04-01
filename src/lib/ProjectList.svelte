<script>
	import { base } from '$app/paths';
	import { sluggify } from '$lib/utils';

	export let projects;
</script>

<div class="row">
	{#each projects as project, index}
		<a
			class="text-dark"
			sveltekit:prefetch
			href="{base}/projekt/{sluggify(project.attributes.Titel)}"
		>
			<div class="card mb-3">
				{#if project.attributes.Fotos.data}
					<div class="img-container">
						<img
							loading={index < 2 ? 'eager' : 'lazy'}
							class="card-img-top"
							src={project.attributes.Fotos.data[0].attributes.formats.medium.url}
							srcset="{project.attributes.Fotos.data[0].attributes.formats.small.url} 500w,
											{project.attributes.Fotos.data[0].attributes.formats.medium.url} 750w,
											{project.attributes.Fotos.data[0].attributes.formats.large.url} 1000w,
											{project.attributes.Fotos.data[0].attributes.formats.xlarge.url} 1500w"
							sizes="(max-width: 500px) 500px,
											(max-width: 991px) 750px,
											(max-width: 1200px) 1000px,
          						1500px"
							alt={project.attributes.Fotos.data[0].attributes.alternativeText}
						/>
					</div>
				{/if}
				<div class="card-body position-absolute bottom-0 text-white p-3 w-100">
					<p class="duration card-text m-0">
						<small>{project.attributes.Dauer}</small>
					</p>
					<h5 class="card-title m-0">{project.attributes.Titel}</h5>
				</div>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	a {
		text-decoration: none;

		.card-body {
			background-color: rgba(50, 50, 50, 0.7);
		}

		.img-container {
			aspect-ratio: 3 / 2;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-position: center center;
				object-fit: cover;
				border-radius: 0;
			}
		}
	}
</style>
