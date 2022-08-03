<script>
    export let lazy = false;
    export let img;
    export let src;
    export let classString = "";
    let { formats } = img;
    const scales = {
        small: '500w',
        medium: '750w',
        large: '1000w',
        xlarge: '1500w',
    };
    const replaceJPGWithWebP = url => url.replace(/\.jpe?g/gi, '.webp');
    let srcset = Object.entries(scales).filter(([scale]) => formats[scale]).map(([scale, width]) => `${formats[scale].url} ${width}`).join();
</script>

<picture>
  <source
    type="image/webp"
    srcset={replaceJPGWithWebP(srcset)}
    sizes="(max-width: 575px) 95vw,
           (max-width: 767px) 516px,
           (max-width: 991px) 696px,
           (max-width: 1199px) 936px,
           (max-width: 1399px) 1116px,
           1296px"
  />
  <img
    class={classString}
    loading={lazy ? 'lazy' : 'eager'}
    src={formats[src] ? formats[src].url : formats.small.url}
    alt={img.alternativeText}
    on:click
  />
</picture>

