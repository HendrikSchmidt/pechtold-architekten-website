<script>
    export let projects;
</script>

{#each projects as project}
    <img src="{image.attributes.url}"  alt="{image.attributes.alternativeText}" />
{/each}
