<script>
    import SvelteMarkdown from 'svelte-markdown';
    export let office;
    const source = office.data.attributes.Profil;
</script>

<SvelteMarkdown {source} />
