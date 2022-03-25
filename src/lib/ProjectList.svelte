<script>
    import { base } from '$app/paths';
    import { sluggify } from '$lib/utils';
    export let projects;
</script>

<div class="row">
    {#each projects as project}
        <a class="col-6" sveltekit:prefetch href="{base}/projekt/{sluggify(project.attributes.Titel)}">
            <div class="card mb-3">
                {#if project.attributes.Fotos.data}
                    <div class="img-container">
                        <img class="card-img-top position-relative top-50 translate-middle-y" src="{project.attributes.Fotos.data[0].attributes.url}"  alt="{project.attributes.Fotos.data[0].attributes.alternativeText}" />
                    </div>
                {/if}
                <div class="card-body text-dark">
                    <h5 class="card-title">{project.attributes.Titel}</h5>
    <!--                <p class="card-text">{project.attributes.Adresse}</p>-->
                    <p class="card-text"><small class="text-muted">{project.attributes.Dauer}</small></p>
                </div>
            </div>
        </a>
    {/each}
</div>

<style lang="scss">
    a {
      text-decoration: none;
    }
    .img-container {
      height: 15rem;
      overflow: hidden;
      .card-img-top {
        object-fit: cover;
        border-radius: 0;
      }
    }
</style>
