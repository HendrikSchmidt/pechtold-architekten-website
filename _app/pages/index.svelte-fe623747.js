import{S as tt,i as et,s as at,e as h,k as T,c as m,a as b,m as D,d,b as t,Q as H,F as st,g as Z,G as l,R as rt,t as J,w as lt,h as K,x as ot,y as it,q as nt,o as ct,I as ut,B as dt}from"../chunks/vendor-7059e03e.js";import{v as ft}from"../chunks/variables-ff88740e.js";import{s as L,t as ht}from"../chunks/utils-699e7247.js";import{b as W}from"../chunks/paths-396f020f.js";function X(n,e,a){const r=n.slice();return r[2]=e[a],r[4]=a,r}function Y(n){let e,a,r,f,_,c,g,x;return{c(){e=h("a"),a=h("img"),g=T(),this.h()},l(o){e=m(o,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var v=b(e);a=m(v,"IMG",{loading:!0,src:!0,srcset:!0,sizes:!0,alt:!0,class:!0}),g=D(v),v.forEach(d),this.h()},h(){t(a,"loading",r=n[4]===0?"eager":"lazy"),H(a.src,f=n[2].attributes.Fotos.data[0].attributes.formats.large.url)||t(a,"src",f),t(a,"srcset",_=n[2].attributes.Fotos.data[0].attributes.formats.small.url+` 500w,
											`+n[2].attributes.Fotos.data[0].attributes.formats.medium.url+` 750w,
											`+n[2].attributes.Fotos.data[0].attributes.formats.large.url+` 1000w,
											`+n[2].attributes.Fotos.data[0].attributes.formats.xlarge.url+" 1500w"),t(a,"sizes",`(max-width: 300px) 500px,
											(max-width: 991px) 750px,
											(max-width: 1200px) 1000px,
          						1500px`),t(a,"alt",c=n[2].attributes.Fotos.data[0].attributes.alternativeText),t(a,"class","svelte-11biyyj"),t(e,"class","carousel-item svelte-11biyyj"),t(e,"sveltekit:prefetch",""),t(e,"href",x=W+"/projekt/"+L(n[2].attributes.Titel)),st(e,"active",n[4]===0)},m(o,v){Z(o,e,v),l(e,a),l(e,g)},p(o,v){v&2&&!H(a.src,f=o[2].attributes.Fotos.data[0].attributes.formats.large.url)&&t(a,"src",f),v&2&&_!==(_=o[2].attributes.Fotos.data[0].attributes.formats.small.url+` 500w,
											`+o[2].attributes.Fotos.data[0].attributes.formats.medium.url+` 750w,
											`+o[2].attributes.Fotos.data[0].attributes.formats.large.url+` 1000w,
											`+o[2].attributes.Fotos.data[0].attributes.formats.xlarge.url+" 1500w")&&t(a,"srcset",_),v&2&&c!==(c=o[2].attributes.Fotos.data[0].attributes.alternativeText)&&t(a,"alt",c),v&2&&x!==(x=W+"/projekt/"+L(o[2].attributes.Titel))&&t(e,"href",x)},d(o){o&&d(e)}}}function mt(n){let e,a,r,f,_,c,g,x,o,v,z,p,F,B,j,O,G,k,I,P,E,V,N=n[1],u=[];for(let s=0;s<N.length;s+=1)u[s]=Y(X(n,N,s));return E=new rt({props:{source:n[0],options:ft.markdownOptions}}),{c(){e=h("div"),a=h("div"),r=h("div"),f=h("div");for(let s=0;s<u.length;s+=1)u[s].c();_=T(),c=h("button"),g=h("span"),x=T(),o=h("span"),v=J("Previous"),z=T(),p=h("button"),F=h("span"),B=T(),j=h("span"),O=J("Next"),G=T(),k=h("div"),I=h("div"),P=h("div"),lt(E.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0});var y=b(e);a=m(y,"DIV",{class:!0});var w=b(a);r=m(w,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var i=b(r);f=m(i,"DIV",{class:!0});var S=b(f);for(let M=0;M<u.length;M+=1)u[M].l(S);S.forEach(d),_=D(i),c=m(i,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var A=b(c);g=m(A,"SPAN",{class:!0,"aria-hidden":!0}),b(g).forEach(d),x=D(A),o=m(A,"SPAN",{class:!0});var R=b(o);v=K(R,"Previous"),R.forEach(d),A.forEach(d),z=D(i),p=m(i,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var q=b(p);F=m(q,"SPAN",{class:!0,"aria-hidden":!0}),b(F).forEach(d),B=D(q),j=m(q,"SPAN",{class:!0});var U=b(j);O=K(U,"Next"),U.forEach(d),q.forEach(d),i.forEach(d),w.forEach(d),G=D(y),k=m(y,"DIV",{class:!0});var C=b(k);I=m(C,"DIV",{class:!0});var Q=b(I);P=m(Q,"DIV",{class:!0});var $=b(P);ot(E.$$.fragment,$),$.forEach(d),Q.forEach(d),C.forEach(d),y.forEach(d),this.h()},h(){t(f,"class","carousel-inner"),t(g,"class","carousel-control-prev-icon"),t(g,"aria-hidden","true"),t(o,"class","visually-hidden"),t(c,"class","carousel-control carousel-control-prev"),t(c,"type","button"),t(c,"data-bs-target","#homepagePhotos"),t(c,"data-bs-slide","prev"),t(F,"class","carousel-control-next-icon"),t(F,"aria-hidden","true"),t(j,"class","visually-hidden"),t(p,"class","carousel-control carousel-control-next"),t(p,"type","button"),t(p,"data-bs-target","#homepagePhotos"),t(p,"data-bs-slide","next"),t(r,"id","homepagePhotos"),t(r,"class","carousel slide overflow-hidden"),t(r,"data-bs-ride","carousel"),t(a,"class","col d-flex flex-column justify-content-center"),t(P,"class","card-body p-2 text-center small"),t(I,"class","card mt-3 svelte-11biyyj"),t(k,"class","col flex-grow-0"),t(e,"class","row h-100 flex-column justify-content-center align-items-center svelte-11biyyj")},m(s,y){Z(s,e,y),l(e,a),l(a,r),l(r,f);for(let w=0;w<u.length;w+=1)u[w].m(f,null);l(r,_),l(r,c),l(c,g),l(c,x),l(c,o),l(o,v),l(r,z),l(r,p),l(p,F),l(p,B),l(p,j),l(j,O),l(e,G),l(e,k),l(k,I),l(I,P),it(E,P,null),V=!0},p(s,[y]){if(y&2){N=s[1];let i;for(i=0;i<N.length;i+=1){const S=X(s,N,i);u[i]?u[i].p(S,y):(u[i]=Y(S),u[i].c(),u[i].m(f,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=N.length}const w={};y&1&&(w.source=s[0]),E.$set(w)},i(s){V||(nt(E.$$.fragment,s),V=!0)},o(s){ct(E.$$.fragment,s),V=!1},d(s){s&&d(e),ut(u,s),dt(E)}}}function vt(n,e,a){let{contact:r}=e,{projects:f}=e;return ht.clear(),n.$$set=_=>{"contact"in _&&a(0,r=_.contact),"projects"in _&&a(1,f=_.projects)},[r,f]}class yt extends tt{constructor(e){super();et(this,e,vt,mt,at,{contact:0,projects:1})}}export{yt as default};