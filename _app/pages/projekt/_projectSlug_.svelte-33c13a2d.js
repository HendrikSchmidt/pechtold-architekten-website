import{S as _e,i as he,s as fe,Q as X,e as h,k as S,c as f,a as b,d as c,m as T,b as a,R as Q,g as U,G as i,H as L,t as F,w as Y,l as Z,h as H,x as ee,y as te,j as ae,q as le,o as se,B as re,I as J,J as ve,F as de}from"../../chunks/vendor-6802d557.js";import{v as oe}from"../../chunks/variables-8eea1b4e.js";import{p as ge}from"../../chunks/stores-1a6ebe76.js";import{t as pe,d as me}from"../../chunks/utils-b6745002.js";function ie(r,e,t){const l=r.slice();return l[3]=e[t],l[5]=t,l}function ne(r,e,t){const l=r.slice();return l[3]=e[t],l[5]=t,l}function be(r,e,t){const l=r.slice();return l[3]=e[t],l[5]=t,l}function ke(r){let e,t;return{c(){e=h("img"),this.h()},l(l){e=f(l,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){Q(e.src,t=r[1][0].attributes.url)||a(e,"src",t),a(e,"class","d-block"),a(e,"alt",r[1][0].attributes.alternativeText)},m(l,u){U(l,e,u)},p:L,d(l){l&&c(e)}}}function Ee(r){let e,t,l,u,k,n,p,_,I,D,B,y,N,q,M,O,G=r[1],$=[];for(let o=0;o<G.length;o+=1)$[o]=ye(be(r,G,o));let V=r[1],v=[];for(let o=0;o<V.length;o+=1)v[o]=ce(ne(r,V,o));return{c(){e=h("div"),t=h("div");for(let o=0;o<$.length;o+=1)$[o].c();l=S(),u=h("div");for(let o=0;o<v.length;o+=1)v[o].c();k=S(),n=h("button"),p=h("span"),_=S(),I=h("span"),D=F("Previous"),B=S(),y=h("button"),N=h("span"),q=S(),M=h("span"),O=F("Next"),this.h()},l(o){e=f(o,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var j=b(e);t=f(j,"DIV",{class:!0});var d=b(t);for(let m=0;m<$.length;m+=1)$[m].l(d);d.forEach(c),l=T(j),u=f(j,"DIV",{class:!0});var P=b(u);for(let m=0;m<v.length;m+=1)v[m].l(P);P.forEach(c),k=T(j),n=f(j,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var A=b(n);p=f(A,"SPAN",{class:!0,"aria-hidden":!0}),b(p).forEach(c),_=T(A),I=f(A,"SPAN",{class:!0});var E=b(I);D=H(E,"Previous"),E.forEach(c),A.forEach(c),B=T(j),y=f(j,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var s=b(y);N=f(s,"SPAN",{class:!0,"aria-hidden":!0}),b(N).forEach(c),q=T(s),M=f(s,"SPAN",{class:!0});var g=b(M);O=H(g,"Next"),g.forEach(c),s.forEach(c),j.forEach(c),this.h()},h(){a(t,"class","carousel-indicators"),a(u,"class","carousel-inner svelte-18ogs15"),a(p,"class","carousel-control-prev-icon"),a(p,"aria-hidden","true"),a(I,"class","visually-hidden"),a(n,"class","carousel-control carousel-control-prev svelte-18ogs15"),a(n,"type","button"),a(n,"data-bs-target","#projectPhotos"),a(n,"data-bs-slide","prev"),a(N,"class","carousel-control-next-icon"),a(N,"aria-hidden","true"),a(M,"class","visually-hidden"),a(y,"class","carousel-control carousel-control-next svelte-18ogs15"),a(y,"type","button"),a(y,"data-bs-target","#projectPhotos"),a(y,"data-bs-slide","next"),a(e,"id","projectPhotos"),a(e,"class","carousel slide card-img-top"),a(e,"data-bs-ride","carousel")},m(o,j){U(o,e,j),i(e,t);for(let d=0;d<$.length;d+=1)$[d].m(t,null);i(e,l),i(e,u);for(let d=0;d<v.length;d+=1)v[d].m(u,null);i(e,k),i(e,n),i(n,p),i(n,_),i(n,I),i(I,D),i(e,B),i(e,y),i(y,N),i(y,q),i(y,M),i(M,O)},p(o,j){if(j&2){V=o[1];let d;for(d=0;d<V.length;d+=1){const P=ne(o,V,d);v[d]?v[d].p(P,j):(v[d]=ce(P),v[d].c(),v[d].m(u,null))}for(;d<v.length;d+=1)v[d].d(1);v.length=V.length}},d(o){o&&c(e),J($,o),J(v,o)}}}function ye(r){let e,t,l,u;return{c(){e=h("button"),this.h()},l(k){e=f(k,"BUTTON",{type:!0,"data-bs-target":!0,"data-bs-slide-to":!0,"aria-current":!0,"aria-label":!0}),b(e).forEach(c),this.h()},h(){a(e,"type","button"),a(e,"data-bs-target","#projectPhotos"),a(e,"data-bs-slide-to",t=r[5]),a(e,"aria-current",l=r[5]===0),a(e,"aria-label",u="Slide "+(r[5]+1)),de(e,"active",r[5]===0)},m(k,n){U(k,e,n)},p:L,d(k){k&&c(e)}}}function ce(r){let e,t,l,u,k,n;return{c(){e=h("div"),t=h("img"),n=S(),this.h()},l(p){e=f(p,"DIV",{class:!0});var _=b(e);t=f(_,"IMG",{loading:!0,src:!0,class:!0,alt:!0,"data-bs-toggle":!0,"data-bs-target":!0}),n=T(_),_.forEach(c),this.h()},h(){a(t,"loading","lazy"),Q(t.src,l=r[3].attributes.formats.large.url)||a(t,"src",l),a(t,"class","d-block w-100 svelte-18ogs15"),a(t,"alt",u=r[3].attributes.alternativeText),a(t,"data-bs-toggle","modal"),a(t,"data-bs-target",k="#lightboxModal-"+r[5]),a(e,"class","carousel-item svelte-18ogs15"),de(e,"active",r[5]===0)},m(p,_){U(p,e,_),i(e,t),i(e,n)},p:L,d(p){p&&c(e)}}}function ue(r){let e,t,l,u,k,n,p;return{c(){e=h("div"),t=h("div"),l=h("img"),n=S(),this.h()},l(_){e=f(_,"DIV",{class:!0,id:!0,tabindex:!0,"aria-hidden":!0});var I=b(e);t=f(I,"DIV",{class:!0});var D=b(t);l=f(D,"IMG",{loading:!0,src:!0,alt:!0,class:!0}),D.forEach(c),n=T(I),I.forEach(c),this.h()},h(){a(l,"loading","lazy"),Q(l.src,u=r[3].attributes.url)||a(l,"src",u),a(l,"alt",k=r[3].attributes.alternativeText),a(l,"class","w-100 h-100 svelte-18ogs15"),a(t,"class","modal-dialog modal-fullscreen"),a(e,"class","modal fade svelte-18ogs15"),a(e,"id",p="lightboxModal-"+r[5]),a(e,"tabindex","-1"),a(e,"aria-hidden","true")},m(_,I){U(_,e,I),i(e,t),i(t,l),i(e,n)},p:L,d(_){_&&c(e)}}}function $e(r){let e,t,l,u=r[0].Titel+"",k,n,p,_,I,D,B,y=r[0].Dauer+"",N,q,M,O,G,$,V,v,o;_=new X({props:{source:r[0].Adresse,options:oe.markdownOptions}});function j(s,g){if(s[1].length>1)return Ee;if(s[1].length===1)return ke}let d=j(r),P=d&&d(r);$=new X({props:{source:r[0].Beschreibung,options:oe.markdownOptions}});let A=r[1],E=[];for(let s=0;s<A.length;s+=1)E[s]=ue(ie(r,A,s));return{c(){e=h("div"),t=h("div"),l=h("h2"),k=F(u),n=S(),p=h("p"),Y(_.$$.fragment),I=S(),D=h("p"),B=h("small"),N=F(y),q=S(),P&&P.c(),M=S(),O=h("div"),G=h("p"),Y($.$$.fragment),V=S();for(let s=0;s<E.length;s+=1)E[s].c();v=Z(),this.h()},l(s){e=f(s,"DIV",{class:!0});var g=b(e);t=f(g,"DIV",{class:!0});var m=b(t);l=f(m,"H2",{class:!0});var x=b(l);k=H(x,u),x.forEach(c),n=T(m),p=f(m,"P",{class:!0});var w=b(p);ee(_.$$.fragment,w),w.forEach(c),I=T(m),D=f(m,"P",{class:!0});var z=b(D);B=f(z,"SMALL",{class:!0});var R=b(B);N=H(R,y),R.forEach(c),z.forEach(c),m.forEach(c),q=T(g),P&&P.l(g),M=T(g),O=f(g,"DIV",{class:!0});var K=b(O);G=f(K,"P",{class:!0});var W=b(G);ee($.$$.fragment,W),W.forEach(c),K.forEach(c),g.forEach(c),V=T(s);for(let C=0;C<E.length;C+=1)E[C].l(s);v=Z(),this.h()},h(){a(l,"class","card-title"),a(p,"class","card-text"),a(B,"class","text-muted"),a(D,"class","card-text"),a(t,"class","card-body"),a(G,"class","card-text"),a(O,"class","card-body"),a(e,"class","card")},m(s,g){U(s,e,g),i(e,t),i(t,l),i(l,k),i(t,n),i(t,p),te(_,p,null),i(t,I),i(t,D),i(D,B),i(B,N),i(e,q),P&&P.m(e,null),i(e,M),i(e,O),i(O,G),te($,G,null),U(s,V,g);for(let m=0;m<E.length;m+=1)E[m].m(s,g);U(s,v,g),o=!0},p(s,[g]){(!o||g&1)&&u!==(u=s[0].Titel+"")&&ae(k,u);const m={};g&1&&(m.source=s[0].Adresse),_.$set(m),(!o||g&1)&&y!==(y=s[0].Dauer+"")&&ae(N,y),P&&P.p(s,g);const x={};if(g&1&&(x.source=s[0].Beschreibung),$.$set(x),g&2){A=s[1];let w;for(w=0;w<A.length;w+=1){const z=ie(s,A,w);E[w]?E[w].p(z,g):(E[w]=ue(z),E[w].c(),E[w].m(v.parentNode,v))}for(;w<E.length;w+=1)E[w].d(1);E.length=A.length}},i(s){o||(le(_.$$.fragment,s),le($.$$.fragment,s),o=!0)},o(s){se(_.$$.fragment,s),se($.$$.fragment,s),o=!1},d(s){s&&c(e),re(_),P&&P.d(),re($),s&&c(V),J(E,s),s&&c(v)}}}function Ie(r,e,t){let l;ve(r,ge,n=>t(2,l=n));let{project:u}=e;const k=u.Fotos.data;return pe.set(me(l.params.projectSlug)),r.$$set=n=>{"project"in n&&t(0,u=n.project)},[u,k]}class Se extends _e{constructor(e){super();he(this,e,Ie,$e,fe,{project:0})}}export{Se as default};
