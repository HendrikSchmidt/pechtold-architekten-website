import{S as ge,i as be,s as ke,k as h,q as Q,a as A,v as W,l as p,m as g,r as X,h as c,c as T,w as Y,n as s,b as J,C as o,x as ee,Z as $e,u as ce,t as F,d as _e,f as H,y as te,F as Ee,g as ve,L as ye,M as we,B as ue}from"../../../../chunks/index-2d03a8b1.js";import{S as de,v as fe}from"../../../../chunks/variables-17a07bce.js";import{p as Pe}from"../../../../chunks/stores-c9dc8ddf.js";import{t as Se,d as ze}from"../../../../chunks/utils-21664df1.js";import{I as me}from"../../../../chunks/Image-8ffe7ec4.js";function he(u,e,a){const t=u.slice();return t[9]=e[a],t[11]=a,t}function Ie(u){let e,a;return e=new me({props:{img:u[2][0].attributes,src:"large",classString:"d-block w-100"}}),e.$on("click",u[7]),{c(){W(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,_){ee(e,t,_),a=!0},p(t,_){const b={};_&4&&(b.img=t[2][0].attributes),e.$set(b)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){F(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function De(u){let e,a,t=[],_=new Map,b,v,d,i,w,S,V,k,m,z,f,$,I,L,D,P=u[2];const q=r=>r[9].attributes.url;for(let r=0;r<P.length;r+=1){let l=he(u,P,r),y=q(l);_.set(y,t[r]=pe(y,l))}return{c(){e=h("div"),a=h("div");for(let r=0;r<t.length;r+=1)t[r].c();b=A(),v=h("button"),d=h("span"),i=h("span"),w=A(),S=h("span"),V=Q("Previous"),k=A(),m=h("button"),z=h("span"),f=h("span"),$=A(),I=h("span"),L=Q("Next"),this.h()},l(r){e=p(r,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var l=g(e);a=p(l,"DIV",{class:!0});var y=g(a);for(let G=0;G<t.length;G+=1)t[G].l(y);y.forEach(c),b=T(l),v=p(l,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var M=g(v);d=p(M,"SPAN",{class:!0});var B=g(d);i=p(B,"SPAN",{class:!0,"aria-hidden":!0}),g(i).forEach(c),B.forEach(c),w=T(M),S=p(M,"SPAN",{class:!0});var U=g(S);V=X(U,"Previous"),U.forEach(c),M.forEach(c),k=T(l),m=p(l,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var j=g(m);z=p(j,"SPAN",{class:!0});var N=g(z);f=p(N,"SPAN",{class:!0,"aria-hidden":!0}),g(f).forEach(c),N.forEach(c),$=T(j),I=p(j,"SPAN",{class:!0});var x=g(I);L=X(x,"Next"),x.forEach(c),j.forEach(c),l.forEach(c),this.h()},h(){s(a,"class","carousel-inner svelte-1azre3v"),s(i,"class","carousel-control-prev-icon svelte-1azre3v"),s(i,"aria-hidden","true"),s(d,"class","control-container svelte-1azre3v"),s(S,"class","visually-hidden"),s(v,"class","carousel-control carousel-control-prev svelte-1azre3v"),s(v,"type","button"),s(v,"data-bs-target","#projectPhotos"),s(v,"data-bs-slide","prev"),s(f,"class","carousel-control-next-icon svelte-1azre3v"),s(f,"aria-hidden","true"),s(z,"class","control-container svelte-1azre3v"),s(I,"class","visually-hidden"),s(m,"class","carousel-control carousel-control-next svelte-1azre3v"),s(m,"type","button"),s(m,"data-bs-target","#projectPhotos"),s(m,"data-bs-slide","next"),s(e,"id","projectPhotos"),s(e,"class","carousel carousel-dark slide"),s(e,"data-bs-ride","carousel")},m(r,l){J(r,e,l),o(e,a);for(let y=0;y<t.length;y+=1)t[y].m(a,null);o(e,b),o(e,v),o(v,d),o(d,i),o(v,w),o(v,S),o(S,V),o(e,k),o(e,m),o(m,z),o(z,f),o(m,$),o(m,I),o(I,L),D=!0},p(r,l){l&12&&(P=r[2],ve(),t=ye(t,l,q,1,r,P,_,a,we,pe,null,he),_e())},i(r){if(!D){for(let l=0;l<P.length;l+=1)H(t[l]);D=!0}},o(r){for(let l=0;l<t.length;l+=1)F(t[l]);D=!1},d(r){r&&c(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function pe(u,e){let a,t,_,b;function v(){return e[6](e[9])}return t=new me({props:{lazy:e[11]!==0,img:e[9].attributes,src:"large",classString:"d-block w-100"}}),t.$on("click",v),{key:u,first:null,c(){a=h("div"),W(t.$$.fragment),_=A(),this.h()},l(d){a=p(d,"DIV",{class:!0});var i=g(a);Y(t.$$.fragment,i),_=T(i),i.forEach(c),this.h()},h(){s(a,"class","carousel-item svelte-1azre3v"),ue(a,"active",e[11]===0),this.first=a},m(d,i){J(d,a,i),ee(t,a,null),o(a,_),b=!0},p(d,i){e=d;const w={};i&4&&(w.lazy=e[11]!==0),i&4&&(w.img=e[9].attributes),t.$set(w),(!b||i&4)&&ue(a,"active",e[11]===0)},i(d){b||(H(t.$$.fragment,d),b=!0)},o(d){F(t.$$.fragment,d),b=!1},d(d){d&&c(a),te(t)}}}function Ne(u){let e,a,t,_,b=u[0].Dauer+"",v,d,i,w=u[0].Titel+"",S,V,k,m,z,f,$,I,L,D,P,q,r,l,y,M,B,U,j,N,x,G;m=new de({props:{source:u[0].Adresse,options:fe.markdownOptions}});const ae=[De,Ie],C=[];function se(n,E){return n[2].length>1?0:n[2].length===1?1:-1}return~(f=se(u))&&($=C[f]=ae[f](u)),P=new de({props:{source:u[0].Beschreibung,options:fe.markdownOptions}}),{c(){e=h("div"),a=h("div"),t=h("p"),_=h("small"),v=Q(b),d=A(),i=h("h2"),S=Q(w),V=A(),k=h("p"),W(m.$$.fragment),z=A(),$&&$.c(),I=A(),L=h("div"),D=h("p"),W(P.$$.fragment),q=A(),r=h("div"),l=h("div"),y=h("button"),M=A(),B=h("img"),this.h()},l(n){e=p(n,"DIV",{class:!0});var E=g(e);a=p(E,"DIV",{class:!0});var O=g(a);t=p(O,"P",{class:!0});var R=g(t);_=p(R,"SMALL",{class:!0});var Z=g(_);v=X(Z,b),Z.forEach(c),R.forEach(c),d=T(O),i=p(O,"H2",{class:!0});var re=g(i);S=X(re,w),re.forEach(c),V=T(O),k=p(O,"P",{class:!0});var le=g(k);Y(m.$$.fragment,le),le.forEach(c),O.forEach(c),z=T(E),$&&$.l(E),I=T(E),L=p(E,"DIV",{class:!0});var oe=g(L);D=p(oe,"P",{class:!0});var ne=g(D);Y(P.$$.fragment,ne),ne.forEach(c),oe.forEach(c),E.forEach(c),q=T(n),r=p(n,"DIV",{class:!0,id:!0,tabindex:!0,"aria-hidden":!0});var ie=g(r);l=p(ie,"DIV",{class:!0});var K=g(l);y=p(K,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),g(y).forEach(c),M=T(K),B=p(K,"IMG",{loading:!0,class:!0,alt:!0}),K.forEach(c),ie.forEach(c),this.h()},h(){s(_,"class","text-muted"),s(t,"class","card-text"),s(i,"class","card-title"),s(k,"class","card-text"),s(a,"class","card-body"),s(D,"class","card-text"),s(L,"class","card-body"),s(e,"class","card"),s(y,"type","button"),s(y,"class","btn-close btn-close-white position-absolute end-0 p-2"),s(y,"data-bs-dismiss","modal"),s(y,"aria-label","Close"),s(B,"loading","lazy"),s(B,"class","w-100 h-100 svelte-1azre3v"),s(B,"alt","PLACEHOLDER"),s(l,"class","modal-dialog modal-fullscreen"),s(r,"class","modal show svelte-1azre3v"),s(r,"id","lightbox"),s(r,"tabindex","-1"),r.hidden=U=!u[1],s(r,"aria-hidden",j=!u[1])},m(n,E){J(n,e,E),o(e,a),o(a,t),o(t,_),o(_,v),o(a,d),o(a,i),o(i,S),o(a,V),o(a,k),ee(m,k,null),o(e,z),~f&&C[f].m(e,null),o(e,I),o(e,L),o(L,D),ee(P,D,null),J(n,q,E),J(n,r,E),o(r,l),o(l,y),o(l,M),o(l,B),N=!0,x||(G=$e(r,"click",u[4]),x=!0)},p(n,[E]){(!N||E&1)&&b!==(b=n[0].Dauer+"")&&ce(v,b),(!N||E&1)&&w!==(w=n[0].Titel+"")&&ce(S,w);const O={};E&1&&(O.source=n[0].Adresse),m.$set(O);let R=f;f=se(n),f===R?~f&&C[f].p(n,E):($&&(ve(),F(C[R],1,1,()=>{C[R]=null}),_e()),~f?($=C[f],$?$.p(n,E):($=C[f]=ae[f](n),$.c()),H($,1),$.m(e,I)):$=null);const Z={};E&1&&(Z.source=n[0].Beschreibung),P.$set(Z),(!N||E&2&&U!==(U=!n[1]))&&(r.hidden=U),(!N||E&2&&j!==(j=!n[1]))&&s(r,"aria-hidden",j)},i(n){N||(H(m.$$.fragment,n),H($),H(P.$$.fragment,n),N=!0)},o(n){F(m.$$.fragment,n),F($),F(P.$$.fragment,n),N=!1},d(n){n&&c(e),te(m),~f&&C[f].d(),te(P),n&&c(q),n&&c(r),x=!1,G()}}}function Ae(u,e,a){let t,_,b;Ee(u,Pe,k=>a(8,b=k));let{data:v}=e;Se.set(ze(b.params.projectSlug));let d=!1;const i=(k,m)=>{a(1,d=!0);const f=document.getElementById("lightbox").querySelector("img");f.src=k,f.alt=m},w=()=>{a(1,d=!1)},S=k=>i(k.attributes.url,k.attributes.alternativeText),V=()=>i(_[0].attributes.url,_[0].attributes.alternativeText);return u.$$set=k=>{"data"in k&&a(5,v=k.data)},u.$$.update=()=>{u.$$.dirty&32&&a(0,t=v.project),u.$$.dirty&1&&a(2,_=t.Fotos.data)},[t,d,_,i,w,v,S,V]}class Oe extends ge{constructor(e){super(),be(this,e,Ae,Ne,ke,{data:5})}}export{Oe as default};
