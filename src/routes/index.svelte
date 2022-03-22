<script lang="ts">
    export let homepage;
    const gallery = homepage.Aufmachergalerie.data;
</script>

{#each gallery as image}
    <img src="{image.attributes.url}"  alt="{image.attributes.alternativeText}" />
{/each}
