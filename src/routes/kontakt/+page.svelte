<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { variables } from '$lib/variables';
	import { title } from '$lib/utils';

	export let data;
	let contact = data.contact;

	title.set('Kontakt');
</script>

<div class="card">
	<div class="card-body">
		<div class=" px-3">
			<SvelteMarkdown source={contact.Kontakt} options={variables.markdownOptions} />
		</div>
		<div class="accordion accordion-flush border-top" id="accordionPanelsStayOpenExample">
			<div class="accordion-item">
				<h2 class="accordion-header" id="panelsStayOpen-headingOne">
					<button
						class="accordion-button collapsed px-3"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseOne"
						aria-expanded="false"
						aria-controls="panelsStayOpen-collapseOne"
					>
						Impressum
					</button>
				</h2>
				<div
					id="panelsStayOpen-collapseOne"
					class="accordion-collapse collapse px-3"
					aria-labelledby="panelsStayOpen-headingOne"
				>
					<small class="accordion-body">
						<SvelteMarkdown source={contact.Impressum} options={variables.markdownOptions} />
					</small>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
					<button
						class="accordion-button collapsed px-3"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#panelsStayOpen-collapseTwo"
						aria-expanded="false"
						aria-controls="panelsStayOpen-collapseTwo"
					>
						Datenschutzerklärung
					</button>
				</h2>
				<div
					id="panelsStayOpen-collapseTwo"
					class="accordion-collapse collapse px-3"
					aria-labelledby="panelsStayOpen-headingTwo"
				>
					<small class="accordion-body">
						<SvelteMarkdown source={contact.Datenschutz} options={variables.markdownOptions} />
					</small>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.accordion-item {
		background-color: aliceblue;
	}

	.accordion-button {
		color: #212529;
		background-color: aliceblue;
	}
</style>
