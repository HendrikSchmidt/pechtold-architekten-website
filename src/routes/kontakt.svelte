<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { variables } from "$lib/variables";
    export let contact;
</script>

<SvelteMarkdown source={contact.Langfassung} options={variables.markdownOptions} />

<SvelteMarkdown source={contact.Impressum} options={variables.markdownOptions} />
