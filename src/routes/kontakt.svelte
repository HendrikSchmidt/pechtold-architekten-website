<script>
    import SvelteMarkdown from 'svelte-markdown';
    export let contact;
    const source = contact.data.attributes.Langfassung;
</script>

<SvelteMarkdown {source} />
