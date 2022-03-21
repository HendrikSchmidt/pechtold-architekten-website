<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    export let project;
</script>

<SvelteMarkdown source={project.data.attributes.Beschreibung} />
