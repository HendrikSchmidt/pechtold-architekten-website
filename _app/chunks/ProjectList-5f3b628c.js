import{S as J,i as K,s as N,e as d,k as I,t as y,c as _,a as v,m as T,h as S,d as f,b as c,g as L,G as n,Q as A,j as G,H,I as O}from"./vendor-c8343447.js";import{b as M}from"./paths-396f020f.js";import{s as z}from"./utils-a8ea6870.js";function C(i,e,s){const l=i.slice();return l[1]=e[s],l}function Q(i){let e,s,l,t;return{c(){e=d("div"),s=d("img"),this.h()},l(r){e=_(r,"DIV",{class:!0});var a=v(e);s=_(a,"IMG",{loading:!0,class:!0,src:!0,alt:!0}),a.forEach(f),this.h()},h(){c(s,"loading","lazy"),c(s,"class","card-img-top svelte-1g22qup"),A(s.src,l=i[1].attributes.Fotos.data[0].attributes.formats.medium.url)||c(s,"src",l),c(s,"alt",t=i[1].attributes.Fotos.data[0].attributes.alternativeText),c(e,"class","img-container svelte-1g22qup")},m(r,a){L(r,e,a),n(e,s)},p(r,a){a&1&&!A(s.src,l=r[1].attributes.Fotos.data[0].attributes.formats.medium.url)&&c(s,"src",l),a&1&&t!==(t=r[1].attributes.Fotos.data[0].attributes.alternativeText)&&c(s,"alt",t)},d(r){r&&f(e)}}}function B(i){let e,s,l,t,r,a,m=i[1].attributes.Dauer+"",g,D,p,b=i[1].attributes.Titel+"",k,F,j,o=i[1].attributes.Fotos.data&&Q(i);return{c(){e=d("a"),s=d("div"),o&&o.c(),l=I(),t=d("div"),r=d("p"),a=d("small"),g=y(m),D=I(),p=d("h5"),k=y(b),F=I(),this.h()},l(u){e=_(u,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var h=v(e);s=_(h,"DIV",{class:!0});var E=v(s);o&&o.l(E),l=T(E),t=_(E,"DIV",{class:!0});var q=v(t);r=_(q,"P",{class:!0});var P=v(r);a=_(P,"SMALL",{});var V=v(a);g=S(V,m),V.forEach(f),P.forEach(f),D=T(q),p=_(q,"H5",{class:!0});var w=v(p);k=S(w,b),w.forEach(f),q.forEach(f),E.forEach(f),F=T(h),h.forEach(f),this.h()},h(){c(r,"class","duration card-text m-0"),c(p,"class","card-title m-0"),c(t,"class","card-body position-absolute bottom-0 text-white p-3 w-100 svelte-1g22qup"),c(s,"class","card mb-3"),c(e,"class","col-lg-6 text-dark svelte-1g22qup"),c(e,"sveltekit:prefetch",""),c(e,"href",j=M+"/projekt/"+z(i[1].attributes.Titel))},m(u,h){L(u,e,h),n(e,s),o&&o.m(s,null),n(s,l),n(s,t),n(t,r),n(r,a),n(a,g),n(t,D),n(t,p),n(p,k),n(e,F)},p(u,h){u[1].attributes.Fotos.data?o?o.p(u,h):(o=Q(u),o.c(),o.m(s,l)):o&&(o.d(1),o=null),h&1&&m!==(m=u[1].attributes.Dauer+"")&&G(g,m),h&1&&b!==(b=u[1].attributes.Titel+"")&&G(k,b),h&1&&j!==(j=M+"/projekt/"+z(u[1].attributes.Titel))&&c(e,"href",j)},d(u){u&&f(e),o&&o.d()}}}function R(i){let e,s=i[0],l=[];for(let t=0;t<s.length;t+=1)l[t]=B(C(i,s,t));return{c(){e=d("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=_(t,"DIV",{class:!0});var r=v(e);for(let a=0;a<l.length;a+=1)l[a].l(r);r.forEach(f),this.h()},h(){c(e,"class","row")},m(t,r){L(t,e,r);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(t,[r]){if(r&1){s=t[0];let a;for(a=0;a<s.length;a+=1){const m=C(t,s,a);l[a]?l[a].p(m,r):(l[a]=B(m),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},i:H,o:H,d(t){t&&f(e),O(l,t)}}}function U(i,e,s){let{projects:l}=e;return i.$$set=t=>{"projects"in t&&s(0,l=t.projects)},[l]}class Z extends J{constructor(e){super();K(this,e,U,R,N,{projects:0})}}export{Z as P};
