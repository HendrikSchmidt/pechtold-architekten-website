<script lang="ts">
    import ProjectList from "$lib/ProjectList.svelte";
    export let projects;

    import { title } from "$lib/utils";
    title.set('Projekte');
</script>

<ProjectList {projects} />
