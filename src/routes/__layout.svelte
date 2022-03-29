<script context="module">
	import { variables } from '$lib/variables';

	export async function load({ fetch }) {
		const categoriesResponse = await fetch(`${variables.apiPath}/kategorien`);
		const categories = await categoriesResponse.json();
		const categoryNames = categories.data.map((category) => category.attributes.Anzeigename);

		return {
			status: categoriesResponse.status,
			props: { categoryNames },
		};
	}
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.scss';
	import { title } from '$lib/utils';

	export let categoryNames;
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<Header {categoryNames} />

<main class="container pb-3">
	<div class="row justify-content-center">
		<div class="col-lg-10">
			<slot />
		</div>
	</div>
</main>
