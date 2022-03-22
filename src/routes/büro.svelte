<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { variables } from "$lib/variables";
    export let office;
</script>

<SvelteMarkdown source={office.Profil} options={variables.markdownOptions} />
