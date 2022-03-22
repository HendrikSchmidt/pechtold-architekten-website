<script context="module">
	import { variables } from '$lib/variables';

	export async function load({ fetch }) {
		const response = await fetch(`${variables.apiPath}/kategorien`);
		const categories = await response.json();
		const categoryNames = categories.data.map(category => category.attributes.Anzeigename);

		return {
			status: response.status,
			props: {
				categoryNames: categoryNames
			}
		};
	}
</script>


<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';
	export let categoryNames;
</script>

<Header {categoryNames} />

<main class="container">
	<slot />
</main>

<footer>

</footer>

<style>
</style>
