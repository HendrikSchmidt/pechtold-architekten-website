import{S as ve,i as _e,s as me,Q as ne,e as d,t as Q,k as j,w as K,c as p,a as v,h as W,d as i,m as N,x as X,b as s,g as R,G as o,y as Y,V as ge,j as ie,q as H,o as F,B as Z,J as be,H as ke,F as $e,n as xe,R as we,T as Ee,p as ye}from"../../chunks/vendor-4b436adb.js";import{v as ce}from"../../chunks/variables-5929cedc.js";import{p as Se}from"../../chunks/stores-389870d4.js";import{t as Pe,d as ze}from"../../chunks/utils-a6ed768f.js";import{I as pe}from"../../chunks/Image-19bec03a.js";function ue(u,e,a){const t=u.slice();return t[8]=e[a],t[10]=a,t}function Ie(u){let e,a;return e=new pe({props:{img:u[2][0].attributes,src:"large",sizes:"(max-width: 500px) 500px, (max-width: 991px) 750px, (max-width: 1200px) 1000px, 1500px",classString:"d-block w-100"}}),e.$on("click",u[6]),{c(){K(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,m){Y(e,t,m),a=!0},p:ke,i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){F(e.$$.fragment,t),a=!1},d(t){Z(e,t)}}}function De(u){let e,a,t=[],m=new Map,b,h,c,f,z,E,$,P,_,y,x,S,T,A,I,w=u[2];const M=r=>r[8].attributes.url;for(let r=0;r<w.length;r+=1){let l=ue(u,w,r),k=M(l);m.set(k,t[r]=de(k,l))}return{c(){e=d("div"),a=d("div");for(let r=0;r<t.length;r+=1)t[r].c();b=j(),h=d("button"),c=d("span"),f=d("span"),z=j(),E=d("span"),$=Q("Previous"),P=j(),_=d("button"),y=d("span"),x=d("span"),S=j(),T=d("span"),A=Q("Next"),this.h()},l(r){e=p(r,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var l=v(e);a=p(l,"DIV",{class:!0});var k=v(a);for(let C=0;C<t.length;C+=1)t[C].l(k);k.forEach(i),b=N(l),h=p(l,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var O=v(h);c=p(O,"SPAN",{class:!0});var V=v(c);f=p(V,"SPAN",{class:!0,"aria-hidden":!0}),v(f).forEach(i),V.forEach(i),z=N(O),E=p(O,"SPAN",{class:!0});var U=v(E);$=W(U,"Previous"),U.forEach(i),O.forEach(i),P=N(l),_=p(l,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var B=v(_);y=p(B,"SPAN",{class:!0});var D=v(y);x=p(D,"SPAN",{class:!0,"aria-hidden":!0}),v(x).forEach(i),D.forEach(i),S=N(B),T=p(B,"SPAN",{class:!0});var q=v(T);A=W(q,"Next"),q.forEach(i),B.forEach(i),l.forEach(i),this.h()},h(){s(a,"class","carousel-inner svelte-1azre3v"),s(f,"class","carousel-control-prev-icon svelte-1azre3v"),s(f,"aria-hidden","true"),s(c,"class","control-container svelte-1azre3v"),s(E,"class","visually-hidden"),s(h,"class","carousel-control carousel-control-prev svelte-1azre3v"),s(h,"type","button"),s(h,"data-bs-target","#projectPhotos"),s(h,"data-bs-slide","prev"),s(x,"class","carousel-control-next-icon svelte-1azre3v"),s(x,"aria-hidden","true"),s(y,"class","control-container svelte-1azre3v"),s(T,"class","visually-hidden"),s(_,"class","carousel-control carousel-control-next svelte-1azre3v"),s(_,"type","button"),s(_,"data-bs-target","#projectPhotos"),s(_,"data-bs-slide","next"),s(e,"id","projectPhotos"),s(e,"class","carousel carousel-dark slide"),s(e,"data-bs-ride","carousel")},m(r,l){R(r,e,l),o(e,a);for(let k=0;k<t.length;k+=1)t[k].m(a,null);o(e,b),o(e,h),o(h,c),o(c,f),o(h,z),o(h,E),o(E,$),o(e,P),o(e,_),o(_,y),o(y,x),o(_,S),o(_,T),o(T,A),I=!0},p(r,l){l&12&&(w=r[2],xe(),t=we(t,l,M,1,r,w,m,a,Ee,de,null,ue),ye())},i(r){if(!I){for(let l=0;l<w.length;l+=1)H(t[l]);I=!0}},o(r){for(let l=0;l<t.length;l+=1)F(t[l]);I=!1},d(r){r&&i(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function de(u,e){let a,t,m,b;function h(){return e[5](e[8])}return t=new pe({props:{lazy:e[10]!==0,img:e[8].attributes,src:"large",sizes:"(max-width: 500px) 500px, (max-width: 991px) 750px, (max-width: 1200px) 1000px, 1500px",classString:"d-block w-100"}}),t.$on("click",h),{key:u,first:null,c(){a=d("div"),K(t.$$.fragment),m=j(),this.h()},l(c){a=p(c,"DIV",{class:!0});var f=v(a);X(t.$$.fragment,f),m=N(f),f.forEach(i),this.h()},h(){s(a,"class","carousel-item svelte-1azre3v"),$e(a,"active",e[10]===0),this.first=a},m(c,f){R(c,a,f),Y(t,a,null),o(a,m),b=!0},p(c,f){e=c},i(c){b||(H(t.$$.fragment,c),b=!0)},o(c){F(t.$$.fragment,c),b=!1},d(c){c&&i(a),Z(t)}}}function je(u){let e,a,t,m,b=u[0].Dauer+"",h,c,f,z=u[0].Titel+"",E,$,P,_,y,x,S,T,A,I,w,M,r,l,k,O,V,U,B,D,q,C;_=new ne({props:{source:u[0].Adresse,options:ce.markdownOptions}});const he=[De,Ie],ee=[];function fe(n,g){return n[2].length>1?0:n[2].length===1?1:-1}return~(x=fe(u))&&(S=ee[x]=he[x](u)),w=new ne({props:{source:u[0].Beschreibung,options:ce.markdownOptions}}),{c(){e=d("div"),a=d("div"),t=d("p"),m=d("small"),h=Q(b),c=j(),f=d("h2"),E=Q(z),$=j(),P=d("p"),K(_.$$.fragment),y=j(),S&&S.c(),T=j(),A=d("div"),I=d("p"),K(w.$$.fragment),M=j(),r=d("div"),l=d("div"),k=d("button"),O=j(),V=d("img"),this.h()},l(n){e=p(n,"DIV",{class:!0});var g=v(e);a=p(g,"DIV",{class:!0});var L=v(a);t=p(L,"P",{class:!0});var G=v(t);m=p(G,"SMALL",{class:!0});var te=v(m);h=W(te,b),te.forEach(i),G.forEach(i),c=N(L),f=p(L,"H2",{class:!0});var ae=v(f);E=W(ae,z),ae.forEach(i),$=N(L),P=p(L,"P",{class:!0});var se=v(P);X(_.$$.fragment,se),se.forEach(i),L.forEach(i),y=N(g),S&&S.l(g),T=N(g),A=p(g,"DIV",{class:!0});var re=v(A);I=p(re,"P",{class:!0});var le=v(I);X(w.$$.fragment,le),le.forEach(i),re.forEach(i),g.forEach(i),M=N(n),r=p(n,"DIV",{class:!0,id:!0,tabindex:!0,"aria-hidden":!0});var oe=v(r);l=p(oe,"DIV",{class:!0});var J=v(l);k=p(J,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),v(k).forEach(i),O=N(J),V=p(J,"IMG",{loading:!0,class:!0,alt:!0}),J.forEach(i),oe.forEach(i),this.h()},h(){s(m,"class","text-muted"),s(t,"class","card-text"),s(f,"class","card-title"),s(P,"class","card-text"),s(a,"class","card-body"),s(I,"class","card-text"),s(A,"class","card-body"),s(e,"class","card"),s(k,"type","button"),s(k,"class","btn-close btn-close-white position-absolute end-0 p-2"),s(k,"data-bs-dismiss","modal"),s(k,"aria-label","Close"),s(V,"loading","lazy"),s(V,"class","w-100 h-100 svelte-1azre3v"),s(V,"alt","PLACEHOLDER"),s(l,"class","modal-dialog modal-fullscreen"),s(r,"class","modal show svelte-1azre3v"),s(r,"id","lightbox"),s(r,"tabindex","-1"),r.hidden=U=!u[1],s(r,"aria-hidden",B=!u[1])},m(n,g){R(n,e,g),o(e,a),o(a,t),o(t,m),o(m,h),o(a,c),o(a,f),o(f,E),o(a,$),o(a,P),Y(_,P,null),o(e,y),~x&&ee[x].m(e,null),o(e,T),o(e,A),o(A,I),Y(w,I,null),R(n,M,g),R(n,r,g),o(r,l),o(l,k),o(l,O),o(l,V),D=!0,q||(C=ge(r,"click",u[4]),q=!0)},p(n,[g]){(!D||g&1)&&b!==(b=n[0].Dauer+"")&&ie(h,b),(!D||g&1)&&z!==(z=n[0].Titel+"")&&ie(E,z);const L={};g&1&&(L.source=n[0].Adresse),_.$set(L),S&&S.p(n,g);const G={};g&1&&(G.source=n[0].Beschreibung),w.$set(G),(!D||g&2&&U!==(U=!n[1]))&&(r.hidden=U),(!D||g&2&&B!==(B=!n[1]))&&s(r,"aria-hidden",B)},i(n){D||(H(_.$$.fragment,n),H(S),H(w.$$.fragment,n),D=!0)},o(n){F(_.$$.fragment,n),F(S),F(w.$$.fragment,n),D=!1},d(n){n&&i(e),Z(_),~x&&ee[x].d(),Z(w),n&&i(M),n&&i(r),q=!1,C()}}}function Ne(u,e,a){let t;be(u,Se,$=>a(7,t=$));let{project:m}=e;const b=m.Fotos.data;Pe.set(ze(t.params.projectSlug));let h=!1;const c=($,P)=>{a(1,h=!0);const y=document.getElementById("lightbox").querySelector("img");y.src=$,y.alt=P},f=()=>{a(1,h=!1)},z=$=>c($.attributes.url,$.attributes.alternativeText),E=()=>c(b[0].attributes.url,b[0].attributes.alternativeText);return u.$$set=$=>{"project"in $&&a(0,m=$.project)},[m,h,b,c,f,z,E]}class Oe extends ve{constructor(e){super();_e(this,e,Ne,je,me,{project:0})}}export{Oe as default};