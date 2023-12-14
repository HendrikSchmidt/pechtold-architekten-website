import{s as Y,f as v,a as E,g as m,h as b,d as p,c as j,r as q,j as o,i as K,v as d,u as B}from"../chunks/scheduler.af368774.js";import{S as Z,i as ee,b as Q,d as R,m as W,c as te,a as P,t as H,e as X,g as ae}from"../chunks/index.aaef9ff3.js";import{e as F,u as se,t as re,s as U,o as le}from"../chunks/utils.7ff5dbf4.js";import{S as oe,v as ne}from"../chunks/variables.aa3c7c71.js";import{b as A}from"../chunks/paths.420b7af2.js";import{I as ie}from"../chunks/Image.780f9be8.js";function G(f,a,t){const e=f.slice();return e[1]=a[t],e[3]=t,e}function J(f,a){let t,e,c,n,_;return e=new ie({props:{lazy:a[3]!==0,img:a[1].attributes.Fotos.data[0].attributes,src:"large"}}),{key:f,first:null,c(){t=v("a"),Q(e.$$.fragment),c=E(),this.h()},l(i){t=m(i,"A",{class:!0,"data-sveltekit-prefetch":!0,href:!0});var l=b(t);R(e.$$.fragment,l),c=j(l),l.forEach(p),this.h()},h(){o(t,"class","carousel-item svelte-yv0ntx"),o(t,"data-sveltekit-prefetch",""),o(t,"href",n=A+"/projekt/"+U(a[1].attributes.Titel)),B(t,"active",a[3]===0),this.first=t},m(i,l){K(i,t,l),W(e,t,null),d(t,c),_=!0},p(i,l){a=i;const y={};l&1&&(y.lazy=a[3]!==0),l&1&&(y.img=a[1].attributes.Fotos.data[0].attributes),e.$set(y),(!_||l&1&&n!==(n=A+"/projekt/"+U(a[1].attributes.Titel)))&&o(t,"href",n),(!_||l&1)&&B(t,"active",a[3]===0)},i(i){_||(P(e.$$.fragment,i),_=!0)},o(i){H(e.$$.fragment,i),_=!1},d(i){i&&p(t),X(e)}}}function ce(f){let a,t,e,c,n=[],_=new Map,i,l,y='<span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span>',D,h,L='<span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span>',V,k,$,T,g,I,x=F(f[0].projects);const S=r=>r[1].attributes.Titel;for(let r=0;r<x.length;r+=1){let s=G(f,x,r),u=S(s);_.set(u,n[r]=J(u,s))}return g=new oe({props:{source:f[0].contact,options:ne.markdownOptions}}),{c(){a=v("div"),t=v("div"),e=v("div"),c=v("div");for(let r=0;r<n.length;r+=1)n[r].c();i=E(),l=v("button"),l.innerHTML=y,D=E(),h=v("button"),h.innerHTML=L,V=E(),k=v("div"),$=v("div"),T=v("div"),Q(g.$$.fragment),this.h()},l(r){a=m(r,"DIV",{class:!0});var s=b(a);t=m(s,"DIV",{class:!0});var u=b(t);e=m(u,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var w=b(e);c=m(w,"DIV",{class:!0});var z=b(c);for(let M=0;M<n.length;M+=1)n[M].l(z);z.forEach(p),i=j(w),l=m(w,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0,"data-svelte-h":!0}),q(l)!=="svelte-qmyes5"&&(l.innerHTML=y),D=j(w),h=m(w,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0,"data-svelte-h":!0}),q(h)!=="svelte-188zrxx"&&(h.innerHTML=L),w.forEach(p),u.forEach(p),V=j(s),k=m(s,"DIV",{class:!0});var C=b(k);$=m(C,"DIV",{class:!0});var N=b($);T=m(N,"DIV",{class:!0});var O=b(T);R(g.$$.fragment,O),O.forEach(p),N.forEach(p),C.forEach(p),s.forEach(p),this.h()},h(){o(c,"class","carousel-inner"),o(l,"class","carousel-control carousel-control-prev"),o(l,"type","button"),o(l,"data-bs-target","#homepagePhotos"),o(l,"data-bs-slide","prev"),o(h,"class","carousel-control carousel-control-next"),o(h,"type","button"),o(h,"data-bs-target","#homepagePhotos"),o(h,"data-bs-slide","next"),o(e,"id","homepagePhotos"),o(e,"class","carousel slide overflow-hidden"),o(e,"data-bs-ride","carousel"),o(t,"class","col d-flex flex-column justify-content-center"),o(T,"class","card-body p-2 text-center small"),o($,"class","card mt-3 svelte-yv0ntx"),o(k,"class","col flex-grow-0"),o(a,"class","row h-100 flex-column justify-content-center align-items-center svelte-yv0ntx")},m(r,s){K(r,a,s),d(a,t),d(t,e),d(e,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(c,null);d(e,i),d(e,l),d(e,D),d(e,h),d(a,V),d(a,k),d(k,$),d($,T),W(g,T,null),I=!0},p(r,[s]){s&1&&(x=F(r[0].projects),ae(),n=se(n,s,S,1,r,x,_,c,le,J,null,G),te());const u={};s&1&&(u.source=r[0].contact),g.$set(u)},i(r){if(!I){for(let s=0;s<x.length;s+=1)P(n[s]);P(g.$$.fragment,r),I=!0}},o(r){for(let s=0;s<n.length;s+=1)H(n[s]);H(g.$$.fragment,r),I=!1},d(r){r&&p(a);for(let s=0;s<n.length;s+=1)n[s].d();X(g)}}}function ue(f,a,t){let{data:e}=a;return re.clear(),f.$$set=c=>{"data"in c&&t(0,e=c.data)},[e]}class _e extends Z{constructor(a){super(),ee(this,a,ue,ce,Y,{data:0})}}export{_e as component};
