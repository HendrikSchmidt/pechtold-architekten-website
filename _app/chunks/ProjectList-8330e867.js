import{S as K,i as N,s as O,e as d,t as y,k as T,c as _,a as v,h as A,d as f,m as P,b as o,g as L,H as u,j as H,P as M,I as w,J as Q}from"./vendor-e86d0398.js";import{b as C}from"./paths-396f020f.js";import{s as G}from"./utils-1d28902d.js";function J(i,e,l){const t=i.slice();return t[1]=e[l],t}function z(i){let e,l,t,a;return{c(){e=d("div"),l=d("img"),this.h()},l(r){e=_(r,"DIV",{class:!0});var s=v(e);l=_(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(f),this.h()},h(){o(l,"class","card-img-bottom svelte-4ecls2"),M(l.src,t=i[1].attributes.Fotos.data[0].attributes.url)||o(l,"src",t),o(l,"alt",a=i[1].attributes.Fotos.data[0].attributes.alternativeText),o(e,"class","img-container svelte-4ecls2")},m(r,s){L(r,e,s),u(e,l)},p(r,s){s&1&&!M(l.src,t=r[1].attributes.Fotos.data[0].attributes.url)&&o(l,"src",t),s&1&&a!==(a=r[1].attributes.Fotos.data[0].attributes.alternativeText)&&o(l,"alt",a)},d(r){r&&f(e)}}}function B(i){let e,l,t,a,r,s=i[1].attributes.Dauer+"",m,D,b,p=i[1].attributes.Titel+"",g,F,I,k,c=i[1].attributes.Fotos.data&&z(i);return{c(){e=d("a"),l=d("div"),t=d("div"),a=d("p"),r=d("small"),m=y(s),D=T(),b=d("h5"),g=y(p),F=T(),c&&c.c(),I=T(),this.h()},l(n){e=_(n,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var h=v(e);l=_(h,"DIV",{class:!0});var j=v(l);t=_(j,"DIV",{class:!0});var E=v(t);a=_(E,"P",{class:!0});var V=v(a);r=_(V,"SMALL",{class:!0});var S=v(r);m=A(S,s),S.forEach(f),V.forEach(f),D=P(E),b=_(E,"H5",{class:!0});var q=v(b);g=A(q,p),q.forEach(f),E.forEach(f),F=P(j),c&&c.l(j),j.forEach(f),I=P(h),h.forEach(f),this.h()},h(){o(r,"class","text-muted"),o(a,"class","duration card-text m-0"),o(b,"class","card-title m-0"),o(t,"class","card-body"),o(l,"class","card mb-3"),o(e,"class","col-md-6 text-dark svelte-4ecls2"),o(e,"sveltekit:prefetch",""),o(e,"href",k=C+"/projekt/"+G(i[1].attributes.Titel))},m(n,h){L(n,e,h),u(e,l),u(l,t),u(t,a),u(a,r),u(r,m),u(t,D),u(t,b),u(b,g),u(l,F),c&&c.m(l,null),u(e,I)},p(n,h){h&1&&s!==(s=n[1].attributes.Dauer+"")&&H(m,s),h&1&&p!==(p=n[1].attributes.Titel+"")&&H(g,p),n[1].attributes.Fotos.data?c?c.p(n,h):(c=z(n),c.c(),c.m(l,null)):c&&(c.d(1),c=null),h&1&&k!==(k=C+"/projekt/"+G(n[1].attributes.Titel))&&o(e,"href",k)},d(n){n&&f(e),c&&c.d()}}}function R(i){let e,l=i[0],t=[];for(let a=0;a<l.length;a+=1)t[a]=B(J(i,l,a));return{c(){e=d("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=_(a,"DIV",{class:!0});var r=v(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(f),this.h()},h(){o(e,"class","row")},m(a,r){L(a,e,r);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(a,[r]){if(r&1){l=a[0];let s;for(s=0;s<l.length;s+=1){const m=J(a,l,s);t[s]?t[s].p(m,r):(t[s]=B(m),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},i:w,o:w,d(a){a&&f(e),Q(t,a)}}}function U(i,e,l){let{projects:t}=e;return i.$$set=a=>{"projects"in a&&l(0,t=a.projects)},[t]}class Z extends K{constructor(e){super();N(this,e,U,R,O,{projects:0})}}export{Z as P};
