<script lang="ts">
    import ProjectList from "$lib/ProjectList.svelte";
    export let projects;

    import { page } from '$app/stores';
    import { title, desluggify } from "$lib/utils";
    title.set(desluggify($page.params.categorySlug));
</script>

<ProjectList {projects} />
