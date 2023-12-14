import{s as ne,f as v,a as A,g as p,h as b,r as V,c as L,d as m,j as n,u as I,i as B,v as u,w as Z,x as ie,y as re,l as ue,m as de,n as fe,z as he,A as ve,B as pe,C as me,D as _e}from"../chunks/scheduler.af368774.js";import{S as oe,i as ce,b as ge,d as ke,m as be,a as ee,t as te,e as xe}from"../chunks/index.aaef9ff3.js";import{e as ae,s as M,t as je}from"../chunks/utils.7ff5dbf4.js";import{p as ye}from"../chunks/stores.40d2b8ab.js";import{b as k}from"../chunks/paths.420b7af2.js";function se(r,s,t){const e=r.slice();return e[3]=s[t],e}function le(r){let s,t,e=r[3]+"",c,g,i;return{c(){s=v("li"),t=v("a"),c=ue(e),i=A(),this.h()},l(o){s=p(o,"LI",{});var l=b(s);t=p(l,"A",{"data-sveltekit-prefetch":!0,class:!0,href:!0});var d=b(t);c=de(d,e),d.forEach(m),i=L(l),l.forEach(m),this.h()},h(){n(t,"data-sveltekit-prefetch",""),n(t,"class","dropdown-item svelte-1xccq1n"),n(t,"href",g=k+"/projekte/"+M(r[3])),I(t,"active",r[1].url.pathname===encodeURI(`${k}/projekte/${M(r[3])}`))},m(o,l){B(o,s,l),u(s,t),u(t,c),u(s,i)},p(o,l){l&1&&e!==(e=o[3]+"")&&fe(c,e),l&1&&g!==(g=k+"/projekte/"+M(o[3]))&&n(t,"href",g),l&3&&I(t,"active",o[1].url.pathname===encodeURI(`${k}/projekte/${M(o[3])}`))},d(o){o&&m(s)}}}function $e(r){let s,t,e,c,g=`<a class="title d-flex flex-column justify-content-center text-center svelte-1xccq1n" data-sveltekit-prefetch="" href="${k}/"><span class="svelte-1xccq1n">Pechtold</span> <span class="svelte-1xccq1n">Architekten</span></a>`,i,o,l,d,a,q="Büro",w,j,x,G="Projekte",S,C,H,y,J="Übersicht",T,K,N,$,O="Kontakt",U=ae(r[0]),_=[];for(let f=0;f<U.length;f+=1)_[f]=le(se(r,U,f));return{c(){s=v("header"),t=v("div"),e=v("nav"),c=v("div"),c.innerHTML=g,i=A(),o=v("div"),l=v("ul"),d=v("li"),a=v("a"),a.textContent=q,w=A(),j=v("li"),x=v("a"),x.textContent=G,S=A(),C=v("ul"),H=v("li"),y=v("a"),y.textContent=J,T=A();for(let f=0;f<_.length;f+=1)_[f].c();K=A(),N=v("li"),$=v("a"),$.textContent=O,this.h()},l(f){s=p(f,"HEADER",{class:!0});var E=b(s);t=p(E,"DIV",{class:!0});var h=b(t);e=p(h,"NAV",{class:!0});var D=b(e);c=p(D,"DIV",{class:!0,"data-svelte-h":!0}),V(c)!=="svelte-1st1jlk"&&(c.innerHTML=g),i=L(D),o=p(D,"DIV",{class:!0});var Q=b(o);l=p(Q,"UL",{class:!0});var R=b(l);d=p(R,"LI",{class:!0});var W=b(d);a=p(W,"A",{"data-sveltekit-prefetch":!0,class:!0,href:!0,"data-svelte-h":!0}),V(a)!=="svelte-sztycn"&&(a.textContent=q),W.forEach(m),w=L(R),j=p(R,"LI",{class:!0});var P=b(j);x=p(P,"A",{class:!0,id:!0,role:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),V(x)!=="svelte-y3pa4o"&&(x.textContent=G),S=L(P),C=p(P,"UL",{class:!0,"aria-labelledby":!0});var z=b(C);H=p(z,"LI",{});var X=b(H);y=p(X,"A",{"data-sveltekit-prefetch":!0,class:!0,href:!0,"data-svelte-h":!0}),V(y)!=="svelte-6uc6ja"&&(y.textContent=J),X.forEach(m),T=L(z);for(let F=0;F<_.length;F+=1)_[F].l(z);z.forEach(m),P.forEach(m),K=L(R),N=p(R,"LI",{class:!0});var Y=b(N);$=p(Y,"A",{"data-sveltekit-prefetch":!0,class:!0,href:!0,"data-svelte-h":!0}),V($)!=="svelte-18fancd"&&($.textContent=O),Y.forEach(m),R.forEach(m),Q.forEach(m),D.forEach(m),h.forEach(m),E.forEach(m),this.h()},h(){n(c,"class","container title-container justify-content-center pb-3"),n(a,"data-sveltekit-prefetch",""),n(a,"class","nav-link svelte-1xccq1n"),n(a,"href",k+"/büro"),I(a,"active",r[1].url.pathname===encodeURI(`${k}/büro`)),n(d,"class","nav-item svelte-1xccq1n"),n(x,"class","nav-link dropdown-toggle svelte-1xccq1n"),n(x,"id","navbarDropdown"),n(x,"role","button"),n(x,"data-bs-toggle","dropdown"),n(x,"aria-expanded","false"),I(x,"active",r[2].includes(r[1].url.pathname)),n(y,"data-sveltekit-prefetch",""),n(y,"class","dropdown-item svelte-1xccq1n"),n(y,"href",k+"/projekte"),I(y,"active",r[1].url.pathname===`${k}/projekte`),n(C,"class","dropdown-menu text-center start-50 translate-middle-x m-0 p-0 svelte-1xccq1n"),n(C,"aria-labelledby","navbarDropdown"),n(j,"class","nav-item dropdown svelte-1xccq1n"),n($,"data-sveltekit-prefetch",""),n($,"class","nav-link svelte-1xccq1n"),n($,"href",k+"/kontakt"),I($,"active",r[1].url.pathname===`${k}/kontakt`),n(N,"class","nav-item svelte-1xccq1n"),n(l,"class","navbar-nav w-100 justify-content-around svelte-1xccq1n"),n(o,"class","container menu-bar p-0 svelte-1xccq1n"),n(e,"class","col navbar navbar-expand flex-column py-3"),n(t,"class","row justify-content-center"),n(s,"class","container")},m(f,E){B(f,s,E),u(s,t),u(t,e),u(e,c),u(e,i),u(e,o),u(o,l),u(l,d),u(d,a),u(l,w),u(l,j),u(j,x),u(j,S),u(j,C),u(C,H),u(H,y),u(C,T);for(let h=0;h<_.length;h+=1)_[h]&&_[h].m(C,null);u(l,K),u(l,N),u(N,$)},p(f,[E]){if(E&2&&I(a,"active",f[1].url.pathname===encodeURI(`${k}/büro`)),E&6&&I(x,"active",f[2].includes(f[1].url.pathname)),E&2&&I(y,"active",f[1].url.pathname===`${k}/projekte`),E&3){U=ae(f[0]);let h;for(h=0;h<U.length;h+=1){const D=se(f,U,h);_[h]?_[h].p(D,E):(_[h]=le(D),_[h].c(),_[h].m(C,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=U.length}E&2&&I($,"active",f[1].url.pathname===`${k}/kontakt`)},i:Z,o:Z,d(f){f&&m(s),ie(_,f)}}}function Ee(r,s,t){let e;re(r,ye,i=>t(1,e=i));let{categoryNames:c}=s;const g=[`${k}/projekte`,...c.map(i=>encodeURI(`${k}/projekte/${M(i)}`))];return r.$$set=i=>{"categoryNames"in i&&t(0,c=i.categoryNames)},[c,e,g]}class qe extends oe{constructor(s){super(),ce(this,s,Ee,$e,ne,{categoryNames:0})}}function Ce(r){let s,t,e,c,g,i,o;document.title=s=r[0],c=new qe({props:{categoryNames:r[1]}});const l=r[4].default,d=he(l,r,r[3],null);return{c(){t=A(),e=v("div"),ge(c.$$.fragment),g=A(),i=v("main"),d&&d.c(),this.h()},l(a){ve("svelte-1igowiq",document.head).forEach(m),t=L(a),e=p(a,"DIV",{class:!0});var w=b(e);ke(c.$$.fragment,w),g=L(w),i=p(w,"MAIN",{class:!0});var j=b(i);d&&d.l(j),j.forEach(m),w.forEach(m),this.h()},h(){n(i,"class","container pb-2"),n(e,"class","app")},m(a,q){B(a,t,q),B(a,e,q),be(c,e,null),u(e,g),u(e,i),d&&d.m(i,null),o=!0},p(a,[q]){(!o||q&1)&&s!==(s=a[0])&&(document.title=s),d&&d.p&&(!o||q&8)&&pe(d,l,a,a[3],o?_e(l,a[3],q,null):me(a[3]),null)},i(a){o||(ee(c.$$.fragment,a),ee(d,a),o=!0)},o(a){te(c.$$.fragment,a),te(d,a),o=!1},d(a){a&&(m(t),m(e)),xe(c),d&&d.d(a)}}}function Ie(r,s,t){let e;re(r,je,l=>t(0,e=l));let{$$slots:c={},$$scope:g}=s,{data:i}=s,{categoryNames:o}=i;return r.$$set=l=>{"data"in l&&t(2,i=l.data),"$$scope"in l&&t(3,g=l.$$scope)},[e,o,i,g,c]}class Ue extends oe{constructor(s){super(),ce(this,s,Ie,Ce,ne,{data:2})}}export{Ue as component};
