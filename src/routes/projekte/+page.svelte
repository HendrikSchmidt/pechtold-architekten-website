<script lang="ts">
	import ProjectList from '$lib/ProjectList.svelte';
	import { title } from '$lib/utils';

	export let data;
	let projects = data.projects;

	title.set('Projekte');
</script>

<ProjectList {projects} />
