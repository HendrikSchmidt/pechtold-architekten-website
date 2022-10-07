<script lang="ts">
	import ProjectList from '$lib/ProjectList.svelte';
	import { page } from '$app/stores';
	import { desluggify, title } from '$lib/utils';

	export let data;
	$: projects = data.projects;

	title.set(desluggify($page.params.categorySlug));
</script>

{#key $page.params.categorySlug}
<ProjectList {projects} />
{/key }