<script>
    export let lazy = false;
    export let img;
    export let src;
    export let sizes;
    export let classString = "";
    let { formats } = img;
</script>

<img
    class={classString}
    loading={lazy ? 'lazy' : 'eager'}
    src={formats[src] ? formats[src].url : formats.small.url}
    srcset="{formats.small.url} 500w,
                    {formats.large ? formats.medium.url + ' 750w,' : ''}
                    {formats.large ? formats.large.url + ' 1000w,' : ''}
                    {formats.xlarge ? formats.xlarge.url + ' 1500w' : ''}"
    {sizes}
    alt={img.alternativeText}
/>
