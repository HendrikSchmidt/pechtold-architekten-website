import{s as me,e as b,t as re,a as P,c as k,b as y,d as ne,f as g,g as S,u as Q,l as n,i as q,h as m,q as ge,j as oe,k as be,v as ie}from"../chunks/scheduler.BwF9jDwd.js";import{S as ke,i as $e,c as F,a as R,m as G,b as V,e as pe,t as j,d as J,g as _e}from"../chunks/index.Q8DpAYkg.js";import{t as we,d as ye,e as ce,u as Ee,o as Te}from"../chunks/utils.BTVJuuno.js";import{S as ue,v as de}from"../chunks/variables.CAF22qZk.js";import{p as ze}from"../chunks/stores.C9kbH3sc.js";import{I as ve}from"../chunks/Image.CmJr5E2J.js";function fe(o,e,s){const t=o.slice();return t[9]=e[s],t[11]=s,t}function Le(o){let e,s;return e=new ve({props:{img:o[2][0].attributes,src:"large",classString:"d-block w-100"}}),e.$on("click",o[7]),{c(){F(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,u){G(e,t,u),s=!0},p(t,u){const p={};u&4&&(p.img=t[2][0].attributes),e.$set(p)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){J(e,t)}}}function Ie(o){let e,s,t=[],u=new Map,p,_,d='<span class="control-container svelte-1azre3v"><span class="carousel-control-prev-icon svelte-1azre3v" aria-hidden="true"></span></span> <span class="visually-hidden">Previous</span>',c,f,T='<span class="control-container svelte-1azre3v"><span class="carousel-control-next-icon svelte-1azre3v" aria-hidden="true"></span></span> <span class="visually-hidden">Next</span>',E,h=ce(o[2]);const w=i=>i[9].attributes.url;for(let i=0;i<h.length;i+=1){let a=fe(o,h,i),r=w(a);u.set(r,t[i]=he(r,a))}return{c(){e=b("div"),s=b("div");for(let i=0;i<t.length;i+=1)t[i].c();p=P(),_=b("button"),_.innerHTML=d,c=P(),f=b("button"),f.innerHTML=T,this.h()},l(i){e=k(i,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var a=y(e);s=k(a,"DIV",{class:!0});var r=y(s);for(let L=0;L<t.length;L+=1)t[L].l(r);r.forEach(g),p=S(a),_=k(a,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0,"data-svelte-h":!0}),Q(_)!=="svelte-1rpywhf"&&(_.innerHTML=d),c=S(a),f=k(a,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0,"data-svelte-h":!0}),Q(f)!=="svelte-x1f9w3"&&(f.innerHTML=T),a.forEach(g),this.h()},h(){n(s,"class","carousel-inner svelte-1azre3v"),n(_,"class","carousel-control carousel-control-prev svelte-1azre3v"),n(_,"type","button"),n(_,"data-bs-target","#projectPhotos"),n(_,"data-bs-slide","prev"),n(f,"class","carousel-control carousel-control-next svelte-1azre3v"),n(f,"type","button"),n(f,"data-bs-target","#projectPhotos"),n(f,"data-bs-slide","next"),n(e,"id","projectPhotos"),n(e,"class","carousel carousel-dark slide"),n(e,"data-bs-ride","carousel")},m(i,a){q(i,e,a),m(e,s);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(s,null);m(e,p),m(e,_),m(e,c),m(e,f),E=!0},p(i,a){a&12&&(h=ce(i[2]),_e(),t=Ee(t,a,w,1,i,h,u,s,Te,he,null,fe),pe())},i(i){if(!E){for(let a=0;a<h.length;a+=1)j(t[a]);E=!0}},o(i){for(let a=0;a<t.length;a+=1)V(t[a]);E=!1},d(i){i&&g(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function he(o,e){let s,t,u,p;function _(){return e[6](e[9])}return t=new ve({props:{lazy:e[11]!==0,img:e[9].attributes,src:"large",classString:"d-block w-100"}}),t.$on("click",_),{key:o,first:null,c(){s=b("div"),F(t.$$.fragment),u=P(),this.h()},l(d){s=k(d,"DIV",{class:!0});var c=y(s);R(t.$$.fragment,c),u=S(c),c.forEach(g),this.h()},h(){n(s,"class","carousel-item svelte-1azre3v"),ie(s,"active",e[11]===0),this.first=s},m(d,c){q(d,s,c),G(t,s,null),m(s,u),p=!0},p(d,c){e=d;const f={};c&4&&(f.lazy=e[11]!==0),c&4&&(f.img=e[9].attributes),t.$set(f),(!p||c&4)&&ie(s,"active",e[11]===0)},i(d){p||(j(t.$$.fragment,d),p=!0)},o(d){V(t.$$.fragment,d),p=!1},d(d){d&&g(s),J(t)}}}function De(o){let e,s,t,u,p=o[0].Dauer+"",_,d,c,f=o[0].Titel+"",T,E,h,w,i,a,r,L,C,B,I,x,$,H,W='<button type="button" class="btn-close btn-close-white position-absolute end-0 p-2" data-bs-dismiss="modal" aria-label="Close"></button> <img loading="lazy" class="w-100 h-100 svelte-1azre3v" alt="PLACEHOLDER"/>',N,U,D,K,X;w=new ue({props:{source:o[0].Adresse,options:de.markdownOptions}});const Y=[Ie,Le],M=[];function Z(l,v){return l[2].length>1?0:l[2].length===1?1:-1}return~(a=Z(o))&&(r=M[a]=Y[a](o)),I=new ue({props:{source:o[0].Beschreibung,options:de.markdownOptions}}),{c(){e=b("div"),s=b("div"),t=b("p"),u=b("small"),_=re(p),d=P(),c=b("h2"),T=re(f),E=P(),h=b("p"),F(w.$$.fragment),i=P(),r&&r.c(),L=P(),C=b("div"),B=b("p"),F(I.$$.fragment),x=P(),$=b("div"),H=b("div"),H.innerHTML=W,this.h()},l(l){e=k(l,"DIV",{class:!0});var v=y(e);s=k(v,"DIV",{class:!0});var z=y(s);t=k(z,"P",{class:!0});var O=y(t);u=k(O,"SMALL",{class:!0});var A=y(u);_=ne(A,p),A.forEach(g),O.forEach(g),d=S(z),c=k(z,"H2",{class:!0});var ee=y(c);T=ne(ee,f),ee.forEach(g),E=S(z),h=k(z,"P",{class:!0});var te=y(h);R(w.$$.fragment,te),te.forEach(g),z.forEach(g),i=S(v),r&&r.l(v),L=S(v),C=k(v,"DIV",{class:!0});var ae=y(C);B=k(ae,"P",{class:!0});var se=y(B);R(I.$$.fragment,se),se.forEach(g),ae.forEach(g),v.forEach(g),x=S(l),$=k(l,"DIV",{class:!0,id:!0,tabindex:!0,"aria-hidden":!0});var le=y($);H=k(le,"DIV",{class:!0,"data-svelte-h":!0}),Q(H)!=="svelte-2p3a0p"&&(H.innerHTML=W),le.forEach(g),this.h()},h(){n(u,"class","text-muted"),n(t,"class","card-text"),n(c,"class","card-title"),n(h,"class","card-text"),n(s,"class","card-body"),n(B,"class","card-text"),n(C,"class","card-body"),n(e,"class","card"),n(H,"class","modal-dialog modal-fullscreen"),n($,"class","modal show svelte-1azre3v"),n($,"id","lightbox"),n($,"tabindex","-1"),$.hidden=N=!o[1],n($,"aria-hidden",U=!o[1])},m(l,v){q(l,e,v),m(e,s),m(s,t),m(t,u),m(u,_),m(s,d),m(s,c),m(c,T),m(s,E),m(s,h),G(w,h,null),m(e,i),~a&&M[a].m(e,null),m(e,L),m(e,C),m(C,B),G(I,B,null),q(l,x,v),q(l,$,v),m($,H),D=!0,K||(X=ge($,"click",o[4]),K=!0)},p(l,[v]){(!D||v&1)&&p!==(p=l[0].Dauer+"")&&oe(_,p),(!D||v&1)&&f!==(f=l[0].Titel+"")&&oe(T,f);const z={};v&1&&(z.source=l[0].Adresse),w.$set(z);let O=a;a=Z(l),a===O?~a&&M[a].p(l,v):(r&&(_e(),V(M[O],1,1,()=>{M[O]=null}),pe()),~a?(r=M[a],r?r.p(l,v):(r=M[a]=Y[a](l),r.c()),j(r,1),r.m(e,L)):r=null);const A={};v&1&&(A.source=l[0].Beschreibung),I.$set(A),(!D||v&2&&N!==(N=!l[1]))&&($.hidden=N),(!D||v&2&&U!==(U=!l[1]))&&n($,"aria-hidden",U)},i(l){D||(j(w.$$.fragment,l),j(r),j(I.$$.fragment,l),D=!0)},o(l){V(w.$$.fragment,l),V(r),V(I.$$.fragment,l),D=!1},d(l){l&&(g(e),g(x),g($)),J(w),~a&&M[a].d(),J(I),K=!1,X()}}}function Me(o,e,s){let t,u,p;be(o,ze,h=>s(8,p=h));let{data:_}=e;we.set(ye(p.params.projectSlug));let d=!1;const c=(h,w)=>{s(1,d=!0);const a=document.getElementById("lightbox").querySelector("img");a.src=h,a.alt=w},f=()=>{s(1,d=!1)},T=h=>c(h.attributes.url,h.attributes.alternativeText),E=()=>c(u[0].attributes.url,u[0].attributes.alternativeText);return o.$$set=h=>{"data"in h&&s(5,_=h.data)},o.$$.update=()=>{o.$$.dirty&32&&s(0,t=_.project),o.$$.dirty&1&&s(2,u=t.Fotos.data)},[t,d,u,c,f,_,T,E]}class Be extends ke{constructor(e){super(),$e(this,e,Me,De,me,{data:5})}}export{Be as component};