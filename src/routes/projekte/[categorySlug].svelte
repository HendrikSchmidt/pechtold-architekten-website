<script lang="ts">
	import ProjectList from '$lib/ProjectList.svelte';
	import { page } from '$app/stores';
	import { desluggify, title } from '$lib/utils';

	export let projects;

	title.set(desluggify($page.params.categorySlug));
</script>

<ProjectList {projects} />
