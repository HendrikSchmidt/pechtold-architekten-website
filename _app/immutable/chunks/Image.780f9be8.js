import{s as v,f as o,a as y,g as h,h as S,c as j,d as p,j as r,O as E,J as w,i as I,v as d,E as P,w as z,P as q}from"./scheduler.af368774.js";import{S as x,i as C}from"./index.aaef9ff3.js";function O(l){let t,i,g,c,a,u,n,m,_,f;return{c(){t=o("picture"),i=o("source"),c=y(),a=o("img"),this.h()},l(s){t=h(s,"PICTURE",{});var e=S(t);i=h(e,"SOURCE",{type:!0,srcset:!0,sizes:!0}),c=j(e),a=h(e,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),e.forEach(p),this.h()},h(){r(i,"type","image/webp"),E(i,g=l[5](l[6]))||r(i,"srcset",g),r(i,"sizes",`(max-width: 575px) 95vw,
           (max-width: 767px) 516px,
           (max-width: 991px) 696px,
           (max-width: 1199px) 936px,
           (max-width: 1399px) 1116px,
           1296px`),r(a,"class",l[3]),r(a,"loading",u=l[0]?"lazy":"eager"),w(a.src,n=l[4][l[2]]?l[4][l[2]].url:l[4].small.url)||r(a,"src",n),r(a,"alt",m=l[1].alternativeText)},m(s,e){I(s,t,e),d(t,i),d(t,c),d(t,a),_||(f=P(a,"click",l[7]),_=!0)},p(s,[e]){e&8&&r(a,"class",s[3]),e&1&&u!==(u=s[0]?"lazy":"eager")&&r(a,"loading",u),e&4&&!w(a.src,n=s[4][s[2]]?s[4][s[2]].url:s[4].small.url)&&r(a,"src",n),e&2&&m!==(m=s[1].alternativeText)&&r(a,"alt",m)},i:z,o:z,d(s){s&&p(t),_=!1,f()}}}function T(l,t,i){let{lazy:g=!1}=t,{img:c}=t,{src:a}=t,{classString:u=""}=t,{formats:n}=c;const m={small:"500w",medium:"750w",large:"1000w",xlarge:"1500w"},_=e=>e.replace(/\.jpe?g/gi,".webp");let f=Object.entries(m).filter(([e])=>n[e]).map(([e,b])=>`${n[e].url} ${b}`).join();function s(e){q.call(this,l,e)}return l.$$set=e=>{"lazy"in e&&i(0,g=e.lazy),"img"in e&&i(1,c=e.img),"src"in e&&i(2,a=e.src),"classString"in e&&i(3,u=e.classString)},[g,c,a,u,n,_,f,s]}class J extends x{constructor(t){super(),C(this,t,T,O,v,{lazy:0,img:1,src:2,classString:3})}}export{J as I};
