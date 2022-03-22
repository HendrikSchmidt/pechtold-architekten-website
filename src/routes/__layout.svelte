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

<main>
	<slot />
</main>

<footer>

</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
