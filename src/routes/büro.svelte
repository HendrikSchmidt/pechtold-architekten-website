<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { variables } from '$lib/variables';
	import { title } from '$lib/utils';

	export let office;

	title.set('Büro');
</script>

<div class="card">
	<div class="card-body">
		<SvelteMarkdown source={office.Profil} options={variables.markdownOptions} />
	</div>
</div>
