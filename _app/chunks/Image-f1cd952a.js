import{S as z,i as c,s as h,e as o,c as S,b as a,R as m,g as w,H as f,d as y}from"./vendor-a1d99b99.js";function I(l){let e,i,g,t;return{c(){e=o("img"),this.h()},l(s){e=S(s,"IMG",{class:!0,loading:!0,src:!0,srcset:!0,sizes:!0,alt:!0}),this.h()},h(){a(e,"class",l[4]),a(e,"loading",i=l[0]?"lazy":"eager"),m(e.src,g=l[5][l[2]]?l[5][l[2]].url:l[5].small.url)||a(e,"src",g),a(e,"srcset",l[5].small.url+` 500w,
                    `+(l[5].large?l[5].medium.url+" 750w,":"")+`
                    `+(l[5].large?l[5].large.url+" 1000w,":"")+`
                    `+(l[5].xlarge?l[5].xlarge.url+" 1500w":"")),a(e,"sizes",l[3]),a(e,"alt",t=l[1].alternativeText)},m(s,r){w(s,e,r)},p(s,[r]){r&16&&a(e,"class",s[4]),r&1&&i!==(i=s[0]?"lazy":"eager")&&a(e,"loading",i),r&4&&!m(e.src,g=s[5][s[2]]?s[5][s[2]].url:s[5].small.url)&&a(e,"src",g),r&8&&a(e,"sizes",s[3]),r&2&&t!==(t=s[1].alternativeText)&&a(e,"alt",t)},i:f,o:f,d(s){s&&y(e)}}}function d(l,e,i){let{lazy:g=!1}=e,{img:t}=e,{src:s}=e,{sizes:r}=e,{classString:u=""}=e,{formats:_}=t;return l.$$set=n=>{"lazy"in n&&i(0,g=n.lazy),"img"in n&&i(1,t=n.img),"src"in n&&i(2,s=n.src),"sizes"in n&&i(3,r=n.sizes),"classString"in n&&i(4,u=n.classString)},[g,t,s,r,u,_]}class v extends z{constructor(e){super();c(this,e,d,I,h,{lazy:0,img:1,src:2,sizes:3,classString:4})}}export{v as I};