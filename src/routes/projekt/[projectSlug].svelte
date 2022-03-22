<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { variables } from "$lib/variables";
    export let project;
</script>

<SvelteMarkdown source={project.data.attributes.Beschreibung} options={variables.markdownOptions} />
