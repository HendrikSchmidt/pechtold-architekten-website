<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { variables } from "$lib/variables";
  import { page } from "$app/stores";
  import { desluggify, title } from "$lib/utils";
  import Image from "$lib/Image.svelte";

  export let project;
  const photos = project.Fotos.data;

  title.set(desluggify($page.params.projectSlug));

  let showLightbox = false;
  const openLightbox = (url, text) => {
    showLightbox = true;
    const lightbox = document.getElementById('lightbox');
    const modalImg = lightbox.querySelector('img');
    modalImg.src = url;
    modalImg.alt = text;
  };
  const hideLightbox = () => {showLightbox = false;};
</script>

<div class="card">
  <div class="card-body">
    <p class="card-text">
      <small class="text-muted">{project.Dauer}</small>
    </p>
    <h2 class="card-title">{project.Titel}</h2>
    <p class="card-text">
      <SvelteMarkdown source={project.Adresse} options={variables.markdownOptions} />
    </p>
  </div>
  {#if photos.length > 1}
    <div id="projectPhotos" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {#each photos as image, index}
          <div class="carousel-item" class:active={index === 0}>
            <Image
              lazy={index !== 0}
              img={image.attributes}
              src="large"
              sizes="(max-width: 500px) 500px, (max-width: 991px) 750px, (max-width: 1200px) 1000px, 1500px"
              classString="d-block w-100"
              on:click={() => openLightbox(image.attributes.url, image.attributes.alternativeText)}
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
        <span class="control-container">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control carousel-control-next"
        type="button"
        data-bs-target="#projectPhotos"
        data-bs-slide="next"
      >
        <span class="control-container">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </span>
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

<div class="modal show" id="lightbox" tabindex="-1" hidden={!showLightbox} aria-hidden={!showLightbox} on:click={hideLightbox}>
  <div class="modal-dialog modal-fullscreen">
    <button type="button" class="btn-close btn-close-white position-absolute end-0 p-2" data-bs-dismiss="modal" aria-label="Close"></button>
    <img loading="lazy" class="w-100 h-100" />
  </div>
</div>

<style lang="scss">
  .carousel-inner {
    aspect-ratio: 3 / 2;

    .carousel-item {
      height: 100%;

      :global(img) {
        min-width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: zoom-in;
      }
    }
  }

  .control-container {
    background-color: aliceblue;
    line-height: 0;
    span {
      margin: 5px;
    }
  }

  .carousel-control-prev {
    cursor: w-resize;
  }

  .carousel-control-next {
    cursor: e-resize;
  }

  .modal {
    display: block;
    cursor: zoom-out;
    background-color: rgba(0,0,0,0.5);

    img {
      object-fit: contain;
      object-position: center center;
    }
  }
</style>
