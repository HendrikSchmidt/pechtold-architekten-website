import{S as ce,i as ie,s as ue,e as h,w as se,k as j,c as f,a as v,x as re,m as N,d as i,b as a,F as W,g as le,y as oe,G as c,q as R,o as U,B as ne,Q as de,t as X,h as Y,R as he,p as fe,n as ve,T as pe}from"../chunks/vendor-4b436adb.js";import{v as me}from"../chunks/variables-5929cedc.js";import{s as Z,t as _e}from"../chunks/utils-a6ed768f.js";import{b as ee}from"../chunks/paths-396f020f.js";import{I as ge}from"../chunks/Image-19bec03a.js";function te(_,s,t){const e=_.slice();return e[2]=s[t],e[4]=t,e}function ae(_,s){let t,e,d,l,b;return e=new ge({props:{lazy:s[4]!==0,img:s[2].attributes.Fotos.data[0].attributes,src:"large",sizes:"(max-width: 300px) 500px, (max-width: 991px) 750px, (max-width: 1200px) 1000px, 1500px"}}),{key:_,first:null,c(){t=h("a"),se(e.$$.fragment),d=j(),this.h()},l(u){t=f(u,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var n=v(t);re(e.$$.fragment,n),d=N(n),n.forEach(i),this.h()},h(){a(t,"class","carousel-item svelte-yv0ntx"),a(t,"sveltekit:prefetch",""),a(t,"href",l=ee+"/projekt/"+Z(s[2].attributes.Titel)),W(t,"active",s[4]===0),this.first=t},m(u,n){le(u,t,n),oe(e,t,null),c(t,d),b=!0},p(u,n){s=u;const g={};n&2&&(g.lazy=s[4]!==0),n&2&&(g.img=s[2].attributes.Fotos.data[0].attributes),e.$set(g),(!b||n&2&&l!==(l=ee+"/projekt/"+Z(s[2].attributes.Titel)))&&a(t,"href",l),n&2&&W(t,"active",s[4]===0)},i(u){b||(R(e.$$.fragment,u),b=!0)},o(u){U(e.$$.fragment,u),b=!1},d(u){u&&i(t),ne(e)}}}function be(_){let s,t,e,d,l=[],b=new Map,u,n,g,A,x,z,B,m,k,F,w,O,q,E,$,I,y,D,T=_[1];const C=o=>o[2].attributes.Titel;for(let o=0;o<T.length;o+=1){let r=te(_,T,o),p=C(r);b.set(p,l[o]=ae(p,r))}return y=new de({props:{source:_[0],options:me.markdownOptions}}),{c(){s=h("div"),t=h("div"),e=h("div"),d=h("div");for(let o=0;o<l.length;o+=1)l[o].c();u=j(),n=h("button"),g=h("span"),A=j(),x=h("span"),z=X("Previous"),B=j(),m=h("button"),k=h("span"),F=j(),w=h("span"),O=X("Next"),q=j(),E=h("div"),$=h("div"),I=h("div"),se(y.$$.fragment),this.h()},l(o){s=f(o,"DIV",{class:!0});var r=v(s);t=f(r,"DIV",{class:!0});var p=v(t);e=f(p,"DIV",{id:!0,class:!0,"data-bs-ride":!0});var P=v(e);d=f(P,"DIV",{class:!0});var G=v(d);for(let M=0;M<l.length;M+=1)l[M].l(G);G.forEach(i),u=N(P),n=f(P,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var S=v(n);g=f(S,"SPAN",{class:!0,"aria-hidden":!0}),v(g).forEach(i),A=N(S),x=f(S,"SPAN",{class:!0});var Q=v(x);z=Y(Q,"Previous"),Q.forEach(i),S.forEach(i),B=N(P),m=f(P,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var V=v(m);k=f(V,"SPAN",{class:!0,"aria-hidden":!0}),v(k).forEach(i),F=N(V),w=f(V,"SPAN",{class:!0});var H=v(w);O=Y(H,"Next"),H.forEach(i),V.forEach(i),P.forEach(i),p.forEach(i),q=N(r),E=f(r,"DIV",{class:!0});var J=v(E);$=f(J,"DIV",{class:!0});var K=v($);I=f(K,"DIV",{class:!0});var L=v(I);re(y.$$.fragment,L),L.forEach(i),K.forEach(i),J.forEach(i),r.forEach(i),this.h()},h(){a(d,"class","carousel-inner"),a(g,"class","carousel-control-prev-icon"),a(g,"aria-hidden","true"),a(x,"class","visually-hidden"),a(n,"class","carousel-control carousel-control-prev"),a(n,"type","button"),a(n,"data-bs-target","#homepagePhotos"),a(n,"data-bs-slide","prev"),a(k,"class","carousel-control-next-icon"),a(k,"aria-hidden","true"),a(w,"class","visually-hidden"),a(m,"class","carousel-control carousel-control-next"),a(m,"type","button"),a(m,"data-bs-target","#homepagePhotos"),a(m,"data-bs-slide","next"),a(e,"id","homepagePhotos"),a(e,"class","carousel slide overflow-hidden"),a(e,"data-bs-ride","carousel"),a(t,"class","col d-flex flex-column justify-content-center"),a(I,"class","card-body p-2 text-center small"),a($,"class","card mt-3 svelte-yv0ntx"),a(E,"class","col flex-grow-0"),a(s,"class","row h-100 flex-column justify-content-center align-items-center svelte-yv0ntx")},m(o,r){le(o,s,r),c(s,t),c(t,e),c(e,d);for(let p=0;p<l.length;p+=1)l[p].m(d,null);c(e,u),c(e,n),c(n,g),c(n,A),c(n,x),c(x,z),c(e,B),c(e,m),c(m,k),c(m,F),c(m,w),c(w,O),c(s,q),c(s,E),c(E,$),c($,I),oe(y,I,null),D=!0},p(o,[r]){r&2&&(T=o[1],ve(),l=he(l,r,C,1,o,T,b,d,pe,ae,null,te),fe());const p={};r&1&&(p.source=o[0]),y.$set(p)},i(o){if(!D){for(let r=0;r<T.length;r+=1)R(l[r]);R(y.$$.fragment,o),D=!0}},o(o){for(let r=0;r<l.length;r+=1)U(l[r]);U(y.$$.fragment,o),D=!1},d(o){o&&i(s);for(let r=0;r<l.length;r+=1)l[r].d();ne(y)}}}function ye(_,s,t){let{contact:e}=s,{projects:d}=s;return _e.clear(),_.$$set=l=>{"contact"in l&&t(0,e=l.contact),"projects"in l&&t(1,d=l.projects)},[e,d]}class Ie extends ce{constructor(s){super();ie(this,s,ye,be,ue,{contact:0,projects:1})}}export{Ie as default};