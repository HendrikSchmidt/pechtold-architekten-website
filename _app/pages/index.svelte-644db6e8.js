import{S as ot,i as nt,s as ct,e as v,w as tt,k as N,c as m,a as p,x as et,m as D,d as u,b as e,F as it,g as at,y as st,G as c,q as V,o as F,B as rt,Q as ut,t as K,h as L,p as dt,I as ht,n as ft}from"../chunks/vendor-a1d99b99.js";import{v as vt}from"../chunks/variables-4dda7172.js";import{s as W,t as mt}from"../chunks/utils-48bd0cca.js";import{b as X}from"../chunks/paths-396f020f.js";import{I as pt}from"../chunks/Image-f1cd952a.js";function Y(_,t,n){const r=_.slice();return r[2]=t[n],r[4]=n,r}function Z(_){let t,n,r,d,f;return n=new pt({props:{lazy:_[4]!==0,img:_[2].attributes.Fotos.data[0].attributes,src:"large",sizes:"(max-width: 300px) 500px, (max-width: 991px) 750px, (max-width: 1200px) 1000px, 1500px"}}),{c(){t=v("a"),tt(n.$$.fragment),r=N(),this.h()},l(s){t=m(s,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var h=p(t);et(n.$$.fragment,h),r=D(h),h.forEach(u),this.h()},h(){e(t,"class","carousel-item svelte-yv0ntx"),e(t,"sveltekit:prefetch",""),e(t,"href",d=X+"/projekt/"+W(_[2].attributes.Titel)),it(t,"active",_[4]===0)},m(s,h){at(s,t,h),st(n,t,null),c(t,r),f=!0},p(s,h){const E={};h&2&&(E.img=s[2].attributes.Fotos.data[0].attributes),n.$set(E),(!f||h&2&&d!==(d=X+"/projekt/"+W(s[2].attributes.Titel)))&&e(t,"href",d)},i(s){f||(V(n.$$.fragment,s),f=!0)},o(s){F(n.$$.fragment,s),f=!1},d(s){s&&u(t),rt(n)}}}function _t(_){let t,n,r,d,f,s,h,E,w,O,q,g,k,z,I,U,C,$,P,j,x,T,y=_[1],l=[];for(let a=0;a<y.length;a+=1)l[a]=Z(Y(_,y,a));const lt=a=>F(l[a],1,1,()=>{l[a]=null});return x=new ut({props:{source:_[0],options:vt.markdownOptions}}),{c(){t=v("div"),n=v("div"),r=v("div"),d=v("div");for(let a=0;a<l.length;a+=1)l[a].c();f=N(),s=v("button"),h=v("span"),E=N(),w=v("span"),O=K("Previous"),q=N(),g=v("button"),k=v("span"),z=N(),I=v("span"),U=K("Next"),C=N(),$=v("div"),P=v("div"),j=v("div"),tt(x.$$.fragment),this.h()},l(a){t=m(a,"DIV",{class:!0});var i=p(t);n=m(i,"DIV",{class:!0});var b=p(n);r=m(b,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var o=p(r);d=m(o,"DIV",{class:!0});var S=p(d);for(let G=0;G<l.length;G+=1)l[G].l(S);S.forEach(u),f=D(o),s=m(o,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var A=p(s);h=m(A,"SPAN",{class:!0,"aria-hidden":!0}),p(h).forEach(u),E=D(A),w=m(A,"SPAN",{class:!0});var M=p(w);O=L(M,"Previous"),M.forEach(u),A.forEach(u),q=D(o),g=m(o,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var B=p(g);k=m(B,"SPAN",{class:!0,"aria-hidden":!0}),p(k).forEach(u),z=D(B),I=m(B,"SPAN",{class:!0});var Q=p(I);U=L(Q,"Next"),Q.forEach(u),B.forEach(u),o.forEach(u),b.forEach(u),C=D(i),$=m(i,"DIV",{class:!0});var R=p($);P=m(R,"DIV",{class:!0});var H=p(P);j=m(H,"DIV",{class:!0});var J=p(j);et(x.$$.fragment,J),J.forEach(u),H.forEach(u),R.forEach(u),i.forEach(u),this.h()},h(){e(d,"class","carousel-inner"),e(h,"class","carousel-control-prev-icon"),e(h,"aria-hidden","true"),e(w,"class","visually-hidden"),e(s,"class","carousel-control carousel-control-prev"),e(s,"type","button"),e(s,"data-bs-target","#homepagePhotos"),e(s,"data-bs-slide","prev"),e(k,"class","carousel-control-next-icon"),e(k,"aria-hidden","true"),e(I,"class","visually-hidden"),e(g,"class","carousel-control carousel-control-next"),e(g,"type","button"),e(g,"data-bs-target","#homepagePhotos"),e(g,"data-bs-slide","next"),e(r,"id","homepagePhotos"),e(r,"class","carousel slide overflow-hidden"),e(r,"data-bs-ride","carousel"),e(n,"class","col d-flex flex-column justify-content-center"),e(j,"class","card-body p-2 text-center small"),e(P,"class","card mt-3 svelte-yv0ntx"),e($,"class","col flex-grow-0"),e(t,"class","row h-100 flex-column justify-content-center align-items-center svelte-yv0ntx")},m(a,i){at(a,t,i),c(t,n),c(n,r),c(r,d);for(let b=0;b<l.length;b+=1)l[b].m(d,null);c(r,f),c(r,s),c(s,h),c(s,E),c(s,w),c(w,O),c(r,q),c(r,g),c(g,k),c(g,z),c(g,I),c(I,U),c(t,C),c(t,$),c($,P),c(P,j),st(x,j,null),T=!0},p(a,[i]){if(i&2){y=a[1];let o;for(o=0;o<y.length;o+=1){const S=Y(a,y,o);l[o]?(l[o].p(S,i),V(l[o],1)):(l[o]=Z(S),l[o].c(),V(l[o],1),l[o].m(d,null))}for(ft(),o=y.length;o<l.length;o+=1)lt(o);dt()}const b={};i&1&&(b.source=a[0]),x.$set(b)},i(a){if(!T){for(let i=0;i<y.length;i+=1)V(l[i]);V(x.$$.fragment,a),T=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)F(l[i]);F(x.$$.fragment,a),T=!1},d(a){a&&u(t),ht(l,a),rt(x)}}}function gt(_,t,n){let{contact:r}=t,{projects:d}=t;return mt.clear(),_.$$set=f=>{"contact"in f&&n(0,r=f.contact),"projects"in f&&n(1,d=f.projects)},[r,d]}class kt extends ot{constructor(t){super();nt(this,t,gt,_t,ct,{contact:0,projects:1})}}export{kt as default};