<script lang="ts">
	import ProjectList from '$lib/ProjectList.svelte';
	import { title } from '$lib/utils';

	export let projects;

	title.set('Projekte');
</script>

<ProjectList {projects} />
