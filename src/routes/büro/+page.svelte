<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { variables } from '$lib/variables';
	import { title } from '$lib/utils';

	export let data;

	title.set('Büro');
</script>

<div class="card">
	<div class="card-body">
		<div class="px-3">
			<SvelteMarkdown source={data.office.Profil} options={variables.markdownOptions} />
		</div>
	</div>
</div>
