import{F as we,S as be,i as ke,s as ye,e as d,t as U,c as h,a as v,h as V,d as i,b as s,G as A,g as O,H as r,j as Ee,k as S,m as H,I as he,J as $e,K as je,L as Ie,w as Ne,x as Ae,y as De,M as Pe,N as Re,O as Le,q as ve,o as pe,B as Ue}from"../chunks/vendor-e86d0398.js";import{v as me}from"../chunks/variables-e571050f.js";import{b}from"../chunks/paths-396f020f.js";import{s as M}from"../chunks/utils-1d28902d.js";const Ve=()=>{const a=we("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},Se={subscribe(a){return Ve().page.subscribe(a)}};function _e(a,e,l){const n=a.slice();return n[3]=e[l],n}function ge(a){let e,l,n=a[3]+"",u,c;return{c(){e=d("li"),l=d("a"),u=U(n),this.h()},l(t){e=h(t,"LI",{});var _=v(e);l=h(_,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var p=v(l);u=V(p,n),p.forEach(i),_.forEach(i),this.h()},h(){s(l,"sveltekit:prefetch",""),s(l,"class","dropdown-item svelte-1kbyw0m"),s(l,"href",c=b+"/projekte/"+M(a[3])),A(l,"active",a[1].url.pathname===encodeURI(`${b}/projekte/${M(a[3])}`))},m(t,_){O(t,e,_),r(e,l),r(l,u)},p(t,_){_&1&&n!==(n=t[3]+"")&&Ee(u,n),_&1&&c!==(c=b+"/projekte/"+M(t[3]))&&s(l,"href",c),_&3&&A(l,"active",t[1].url.pathname===encodeURI(`${b}/projekte/${M(t[3])}`))},d(t){t&&i(e)}}}function He(a){let e,l,n,u,c,t,_,p,o,k,D,P,E,K,$,Q,T,R,y,W,X,j,C,I,Y,Z,x,B,N,ee,q=a[0],g=[];for(let f=0;f<q.length;f+=1)g[f]=ge(_e(a,q,f));return{c(){e=d("header"),l=d("div"),n=d("nav"),u=d("div"),c=d("a"),t=d("span"),_=U("Pechtold"),p=S(),o=d("span"),k=U("Architekten"),D=S(),P=d("div"),E=d("ul"),K=d("li"),$=d("a"),Q=U("B\xFCro"),T=S(),R=d("li"),y=d("a"),W=U("Projekte"),X=S(),j=d("ul"),C=d("li"),I=d("a"),Y=U("\xDCbersicht"),Z=S();for(let f=0;f<g.length;f+=1)g[f].c();x=S(),B=d("li"),N=d("a"),ee=U("Kontakt"),this.h()},l(f){e=h(f,"HEADER",{class:!0});var w=v(e);l=h(w,"DIV",{class:!0});var m=v(l);n=h(m,"NAV",{class:!0});var L=v(n);u=h(L,"DIV",{class:!0});var ae=v(u);c=h(ae,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var F=v(c);t=h(F,"SPAN",{class:!0});var se=v(t);_=V(se,"Pechtold"),se.forEach(i),p=H(F),o=h(F,"SPAN",{class:!0});var re=v(o);k=V(re,"Architekten"),re.forEach(i),F.forEach(i),ae.forEach(i),D=H(L),P=h(L,"DIV",{class:!0});var le=v(P);E=h(le,"UL",{class:!0});var z=v(E);K=h(z,"LI",{class:!0});var ne=v(K);$=h(ne,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var oe=v($);Q=V(oe,"B\xFCro"),oe.forEach(i),ne.forEach(i),T=H(z),R=h(z,"LI",{class:!0});var G=v(R);y=h(G,"A",{class:!0,id:!0,role:!0,"data-bs-toggle":!0,"aria-expanded":!0});var ce=v(y);W=V(ce,"Projekte"),ce.forEach(i),X=H(G),j=h(G,"UL",{class:!0,"aria-labelledby":!0});var J=v(j);C=h(J,"LI",{});var ie=v(C);I=h(ie,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var ue=v(I);Y=V(ue,"\xDCbersicht"),ue.forEach(i),ie.forEach(i),Z=H(J);for(let te=0;te<g.length;te+=1)g[te].l(J);J.forEach(i),G.forEach(i),x=H(z),B=h(z,"LI",{class:!0});var fe=v(B);N=h(fe,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var de=v(N);ee=V(de,"Kontakt"),de.forEach(i),fe.forEach(i),z.forEach(i),le.forEach(i),L.forEach(i),m.forEach(i),w.forEach(i),this.h()},h(){s(t,"class","svelte-1kbyw0m"),s(o,"class","svelte-1kbyw0m"),s(c,"class","title d-flex flex-md-column justify-content-center text-center svelte-1kbyw0m"),s(c,"sveltekit:prefetch",""),s(c,"href",b+"/"),s(u,"class","container title-container justify-content-center pb-3"),s($,"sveltekit:prefetch",""),s($,"class","nav-link svelte-1kbyw0m"),s($,"href",b+"/b\xFCro"),A($,"active",a[1].url.pathname===encodeURI(`${b}/b\xFCro`)),s(K,"class","nav-item svelte-1kbyw0m"),s(y,"class","nav-link dropdown-toggle svelte-1kbyw0m"),s(y,"id","navbarDropdown"),s(y,"role","button"),s(y,"data-bs-toggle","dropdown"),s(y,"aria-expanded","false"),A(y,"active",a[2].includes(a[1].url.pathname)),s(I,"sveltekit:prefetch",""),s(I,"class","dropdown-item svelte-1kbyw0m"),s(I,"href",b+"/projekte"),A(I,"active",a[1].url.pathname===`${b}/projekte`),s(j,"class","dropdown-menu text-center start-50 translate-middle-x m-0 p-0 svelte-1kbyw0m"),s(j,"aria-labelledby","navbarDropdown"),s(R,"class","nav-item dropdown svelte-1kbyw0m"),s(N,"sveltekit:prefetch",""),s(N,"class","nav-link svelte-1kbyw0m"),s(N,"href",b+"/kontakt"),A(N,"active",a[1].url.pathname===`${b}/kontakt`),s(B,"class","nav-item svelte-1kbyw0m"),s(E,"class","navbar-nav w-100 justify-content-around svelte-1kbyw0m"),s(P,"class","container menu-bar p-0 svelte-1kbyw0m"),s(n,"class","col-lg-10 navbar navbar-expand navbar-light flex-column py-3"),s(l,"class","row justify-content-center"),s(e,"class","container")},m(f,w){O(f,e,w),r(e,l),r(l,n),r(n,u),r(u,c),r(c,t),r(t,_),r(c,p),r(c,o),r(o,k),r(n,D),r(n,P),r(P,E),r(E,K),r(K,$),r($,Q),r(E,T),r(E,R),r(R,y),r(y,W),r(R,X),r(R,j),r(j,C),r(C,I),r(I,Y),r(j,Z);for(let m=0;m<g.length;m+=1)g[m].m(j,null);r(E,x),r(E,B),r(B,N),r(N,ee)},p(f,[w]){if(w&2&&A($,"active",f[1].url.pathname===encodeURI(`${b}/b\xFCro`)),w&6&&A(y,"active",f[2].includes(f[1].url.pathname)),w&2&&A(I,"active",f[1].url.pathname===`${b}/projekte`),w&3){q=f[0];let m;for(m=0;m<q.length;m+=1){const L=_e(f,q,m);g[m]?g[m].p(L,w):(g[m]=ge(L),g[m].c(),g[m].m(j,null))}for(;m<g.length;m+=1)g[m].d(1);g.length=q.length}w&2&&A(N,"active",f[1].url.pathname===`${b}/kontakt`)},i:he,o:he,d(f){f&&i(e),$e(g,f)}}}function Ke(a,e,l){let n;je(a,Se,t=>l(1,n=t));let{categoryNames:u}=e;const c=[`${b}/projekte`,...u.map(t=>encodeURI(`${b}/projekte/${M(t)}`))];return a.$$set=t=>{"categoryNames"in t&&l(0,u=t.categoryNames)},[u,n,c]}class Be extends be{constructor(e){super();ke(this,e,Ke,He,ye,{categoryNames:0})}}function qe(a){let e,l,n,u,c,t;e=new Be({props:{categoryNames:a[0]}});const _=a[2].default,p=Ie(_,a,a[1],null);return{c(){Ne(e.$$.fragment),l=S(),n=d("main"),u=d("div"),c=d("div"),p&&p.c(),this.h()},l(o){Ae(e.$$.fragment,o),l=H(o),n=h(o,"MAIN",{class:!0});var k=v(n);u=h(k,"DIV",{class:!0});var D=v(u);c=h(D,"DIV",{class:!0});var P=v(c);p&&p.l(P),P.forEach(i),D.forEach(i),k.forEach(i),this.h()},h(){s(c,"class","col-lg-10"),s(u,"class","row justify-content-center"),s(n,"class","container pb-4")},m(o,k){De(e,o,k),O(o,l,k),O(o,n,k),r(n,u),r(u,c),p&&p.m(c,null),t=!0},p(o,[k]){const D={};k&1&&(D.categoryNames=o[0]),e.$set(D),p&&p.p&&(!t||k&2)&&Pe(p,_,o,o[1],t?Le(_,o[1],k,null):Re(o[1]),null)},i(o){t||(ve(e.$$.fragment,o),ve(p,o),t=!0)},o(o){pe(e.$$.fragment,o),pe(p,o),t=!1},d(o){Ue(e,o),o&&i(l),o&&i(n),p&&p.d(o)}}}async function Je({fetch:a}){const e=await a(`${me.apiPath}/kategorien`),n=(await e.json()).data.map(_=>_.attributes.Anzeigename),t=(await(await a(`${me.apiPath}/kontakt`)).json()).data.attributes.Kurzfassung;return{status:e.status,props:{categoryNames:n,contact:t}}}function ze(a,e,l){let{$$slots:n={},$$scope:u}=e,{categoryNames:c}=e;return a.$$set=t=>{"categoryNames"in t&&l(0,c=t.categoryNames),"$$scope"in t&&l(1,u=t.$$scope)},[c,u,n]}class Oe extends be{constructor(e){super();ke(this,e,ze,qe,ye,{categoryNames:0})}}export{Oe as default,Je as load};
