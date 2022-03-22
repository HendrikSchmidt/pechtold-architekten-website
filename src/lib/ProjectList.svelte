<script>
    import { base } from '$app/paths';
    import { sluggify } from '$lib/utils';
    export let projects;
</script>

{#each projects as project}
    <a href="{base}/projekt/{sluggify(project.attributes.Titel)}">
        <div class="card mb-3">
            {#if project.attributes.Fotos.data}
                <img class="card-img-top" src="{project.attributes.Fotos.data[0].url}"  alt="{project.attributes.Fotos.data[0].alternativeText}" />
            {/if}
            <div class="card-body text-dark">
                <h5 class="card-title">{project.attributes.Titel}</h5>
<!--                <p class="card-text">{project.attributes.Adresse}</p>-->
                <p class="card-text"><small class="text-muted">{project.attributes.Dauer}</small></p>
            </div>
        </div>
    </a>
{/each}

<style>
    a {
        text-decoration: none;
    }
</style>
