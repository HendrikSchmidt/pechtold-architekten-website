<script>
    import SvelteMarkdown from 'svelte-markdown';
    export let contact;
</script>

<SvelteMarkdown source={contact.data.attributes.Langfassung} />

<SvelteMarkdown source={contact.data.attributes.Impressum} />
