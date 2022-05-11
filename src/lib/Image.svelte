<script>
    export let lazy = false;
    export let img;
    export let src;
    export let sizes;
    export let classString = "";
    let { formats } = img;
    const scales = {
        small: '500w',
        medium: '750w',
        large: '1000w',
        xlarge: '1500w',
    };
    let srcset = Object.entries(scales).filter(([scale]) => formats[scale]).map(([scale, width]) => `${formats[scale].url} ${width}`).join();
</script>

<img
    class={classString}
    loading={lazy ? 'lazy' : 'eager'}
    src={formats[src] ? formats[src].url : formats.small.url}
    {srcset}
    {sizes}
    alt={img.alternativeText}
/>
