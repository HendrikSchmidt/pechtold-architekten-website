<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { variables } from "$lib/variables";
  import { page } from "$app/stores";
  import { desluggify, title } from "$lib/utils";
  import { onMount } from "svelte";

  export let project;
  const photos = project.Fotos.data;

  title.set(desluggify($page.params.projectSlug));
</script>

<div class="card">
  <div class="card-body">
    <h2 class="card-title">{project.Titel}</h2>
    <p class="card-text">
      <SvelteMarkdown source={project.Adresse} options={variables.markdownOptions} />
    </p>
    <p class="card-text"><small class="text-muted">{project.Dauer}</small></p>
  </div>
  {#if photos.length > 1}
    <div id="projectPhotos" class="carousel slide card-img-top" data-bs-ride="carousel">
      <div class="carousel-indicators">
        {#each photos as image, index}
          <button
            class:active={index === 0}
            type="button"
            data-bs-target="#projectPhotos"
            data-bs-slide-to={index}
            aria-current={index === 0}
            aria-label="Slide {index + 1}"></button>
        {/each}
      </div>
      <div class="carousel-inner">
        {#each photos as image, index}
          <div class="carousel-item" class:active={index === 0}>
              <img
								loading="lazy"
                src={image.attributes.formats.large.url}
                class="d-block w-100"
                alt={image.attributes.alternativeText}
								data-bs-toggle="modal"
								data-bs-target="#lightboxModal-{index}"
              />
          </div>
        {/each}
      </div>
      <button
        class="carousel-control carousel-control-prev"
        type="button"
        data-bs-target="#projectPhotos"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control carousel-control-next"
        type="button"
        data-bs-target="#projectPhotos"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  {:else if photos.length === 1}
    <img
      src={photos[0].attributes.url}
      class="d-block"
      alt={photos[0].attributes.alternativeText}
    />
  {/if}
  <div class="card-body">
    <p class="card-text">
      <SvelteMarkdown source={project.Beschreibung} options={variables.markdownOptions} />
    </p>
  </div>
</div>

{#each photos as image, index}
  <div class="modal" id="lightboxModal-{index}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <button type="button" class="btn-close btn-close-white position-absolute end-0 p-2" data-bs-dismiss="modal" aria-label="Close"></button>
      <img loading="lazy" src={image.attributes.url} alt={image.attributes.alternativeText} class="w-100 h-100" />
    </div>
  </div>
{/each}

<style lang="scss">
  .carousel-inner {
    background-color: #6685a3;
    aspect-ratio: 3 / 2;

    .carousel-item {
      height: 100%;

      img {
        min-width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: zoom-in;
      }
    }
  }

  .carousel-control-prev {
    cursor: w-resize;
  }

  .carousel-control-next {
    cursor: e-resize;
  }

  .modal {
    cursor: zoom-out;
    background-color: #11111111;

    img {
      object-fit: contain;
      object-position: center center;
    }
  }
</style>
