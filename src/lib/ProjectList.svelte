<script>
  import { base } from '$app/paths';
  import { sluggify } from '$lib/utils';
  import Image from '$lib/Image.svelte';

  export let projects;

  const getEndDate = durationString => parseInt(durationString.split('–').slice(-1)[0].trim());

  const sortedProjects = projects.sort((projectA, projectB) => getEndDate(projectB.attributes.Dauer) - getEndDate(projectA.attributes.Dauer));
</script>

<div class="row">
  {#each sortedProjects as project, index (project.attributes.Titel)}
    <a
      class="text-dark"
      sveltekit:prefetch
      href="{base}/projekt/{sluggify(project.attributes.Titel)}"
    >
      <div class="card mb-3">
        {#if project.attributes.Fotos.data}
          <div class="img-container">
            <Image
              lazy={index > 1}
              img={project.attributes.Fotos.data[0].attributes}
              src="large"
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

      :global(img) {
        width: 100%;
        height: 100%;
        object-position: center center;
        object-fit: cover;
        border-radius: 0;
      }
    }
  }
</style>
