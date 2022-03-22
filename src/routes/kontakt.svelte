<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { variables } from "$lib/variables";
    export let contact;
</script>

<div class="row justify-content-center">
    <div class="col-10">
        <SvelteMarkdown source={contact.Langfassung} options={variables.markdownOptions} />
    </div>
    <div class="col-10">
        <div class="accordion accordion-flush border-top" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                        Impressum
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                    <small class="accordion-body">
                        <SvelteMarkdown source={contact.Impressum} options={variables.markdownOptions} />
                    </small>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Datenschutzerklärung
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <small class="accordion-body">
                        <SvelteMarkdown source={contact.Datenschutz} options={variables.markdownOptions} />
                    </small>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .accordion-button:not(.collapsed) {
        color: #212529;
        background-color: #fff;
    }
</style>
