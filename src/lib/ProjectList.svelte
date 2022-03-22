<script>
    import { base } from '$app/paths';
    import { sluggify } from '$lib/utils';
    export let projects;
</script>

{#each projects as project}
    <h2><a href="{base}/projekt/{sluggify(project.attributes.Titel)}">{project.attributes.Titel}</a></h2>
    {#if project.attributes.Fotos.data}
        <img src="{project.attributes.Fotos.data[0].url}"  alt="{project.attributes.Fotos.data[0].alternativeText}" />
    {/if}
{/each}
