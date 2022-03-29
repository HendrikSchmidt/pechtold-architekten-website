<script>
	import { base } from '$app/paths';
	import { sluggify } from '$lib/utils';

	export let projects;
</script>

<div class="row">
	{#each projects as project}
		<a
			class="col-md-6 text-dark"
			sveltekit:prefetch
			href="{base}/projekt/{sluggify(project.attributes.Titel)}"
		>
			<div class="card mb-3">
				<div class="card-body">
					<p class="duration card-text m-0">
						<small class="text-muted">{project.attributes.Dauer}</small>
					</p>
					<h5 class="card-title m-0">{project.attributes.Titel}</h5>
				</div>
				{#if project.attributes.Fotos.data}
					<div class="img-container">
						<img
							class="card-img-bottom"
							src={project.attributes.Fotos.data[0].attributes.url}
							alt={project.attributes.Fotos.data[0].attributes.alternativeText}
						/>
					</div>
				{/if}
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	@import '../../node_modules/bootstrap/scss/_functions';
	@import '../../node_modules/bootstrap/scss/_variables';
	@import '../../node_modules/bootstrap/scss/mixins/_breakpoints';

	a {
		text-decoration: none;
	}

	.img-container {
		height: 15rem;
		overflow: hidden;

		.card-img-bottom {
			width: 100%;
			height: 100%;
			object-position: center center;
			object-fit: cover;
			border-radius: 0;
		}
	}
</style>
