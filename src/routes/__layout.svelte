<script context="module">
	import SvelteMarkdown from "svelte-markdown";
	import { variables } from '$lib/variables';

	export async function load({ fetch }) {
		const categoriesResponse = await fetch(`${variables.apiPath}/kategorien`);
		const categories = await categoriesResponse.json();
		const categoryNames = categories.data.map(category => category.attributes.Anzeigename);

		const contactResponse = await fetch(`${variables.apiPath}/kontakt`);
		const contactData = await contactResponse.json();
		const contact = contactData.data.attributes.Kurzfassung;

		return {
			status: categoriesResponse.status,
			props: {
				categoryNames,
				contact,
			}
		};
	}
</script>


<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.scss';
	export let categoryNames;
	export let contact;
</script>

<Header {categoryNames} />

<main class="container pb-4">
	<div class="row justify-content-center">
		<div class="col-lg-10">
			<slot />
		</div>
	</div>
</main>

<!--<footer class="position-fixed bottom-0 bg-body w-100">-->
<!--	<div class="border-top small">-->
<!--		<SvelteMarkdown source={contact} />-->
<!--	</div>-->
<!--</footer>-->

<style>
</style>
