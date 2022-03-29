<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import {variables} from "$lib/variables";

    export let homepage;
    const gallery = homepage.Aufmachergalerie.data;
</script>

<div class="row justify-content-center">
  <div class="col">
    <div class="img-container py-2 d-flex justify-content-center overflow-hidden">
      <img src="{gallery[0].attributes.url}" alt="{gallery[0].attributes.alternativeText}" />
    </div>
    <div class="card mt-4">
      <div class="card-body text-center small">
        <SvelteMarkdown source={homepage.Kontakt} options={variables.markdownOptions}/>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .img-container {
    height: calc(100vh - 350px);
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .card {
    font-weight: 300;

    :global(p) {
      margin-bottom: 0;
    }
  }
</style>
