<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { variables } from "$lib/variables";
    export let office;
</script>

<div class="row justify-content-center">
    <div class="col-10">
        <SvelteMarkdown source={office.Profil} options={variables.markdownOptions} />
    </div>
</div>
