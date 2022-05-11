<script>
    export let lazy = false;
    export let img;
    export let src;
    export let sizes;
    export let classString = "";
    let { formats } = img;
    console.log(formats);
    console.log(formats[src].url);
    console.log(formats.small.url);
</script>

<img
    class={classString}
    loading={lazy ? 'lazy' : 'eager'}
    src={formats[src] ? formats[src].url : formats.small.url}
    {sizes}
    alt={img.alternativeText}
/>
