import{S as K,i as O,s as Q,e as d,k as D,t as A,c as m,a as b,m as I,h as H,d as h,b as c,g as L,H as f,P as M,j as V,l as C,I as G,J as R}from"./vendor-e86d0398.js";import{b as J}from"./paths-396f020f.js";import{s as N}from"./utils-1d28902d.js";function w(i,e,s){const a=i.slice();return a[1]=e[s],a}function z(i){let e,s,a;return{c(){e=d("img"),this.h()},l(t){e=m(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(e,"class","card-img-top"),M(e.src,s=i[1].attributes.Fotos.data[0].url)||c(e,"src",s),c(e,"alt",a=i[1].attributes.Fotos.data[0].alternativeText)},m(t,r){L(t,e,r)},p(t,r){r&1&&!M(e.src,s=t[1].attributes.Fotos.data[0].url)&&c(e,"src",s),r&1&&a!==(a=t[1].attributes.Fotos.data[0].alternativeText)&&c(e,"alt",a)},d(t){t&&h(e)}}}function B(i){let e,s,a,t,r,l=i[1].attributes.Titel+"",_,T,p,v,g=i[1].attributes.Dauer+"",j,P,k,o=i[1].attributes.Fotos.data&&z(i);return{c(){e=d("a"),s=d("div"),o&&o.c(),a=D(),t=d("div"),r=d("h5"),_=A(l),T=D(),p=d("p"),v=d("small"),j=A(g),P=D(),this.h()},l(n){e=m(n,"A",{href:!0,class:!0});var u=b(e);s=m(u,"DIV",{class:!0});var E=b(s);o&&o.l(E),a=I(E),t=m(E,"DIV",{class:!0});var F=b(t);r=m(F,"H5",{class:!0});var y=b(r);_=H(y,l),y.forEach(h),T=I(F),p=m(F,"P",{class:!0});var S=b(p);v=m(S,"SMALL",{class:!0});var q=b(v);j=H(q,g),q.forEach(h),S.forEach(h),F.forEach(h),E.forEach(h),P=I(u),u.forEach(h),this.h()},h(){c(r,"class","card-title"),c(v,"class","text-muted"),c(p,"class","card-text"),c(t,"class","card-body text-dark"),c(s,"class","card mb-3"),c(e,"href",k=J+"/projekt/"+N(i[1].attributes.Titel)),c(e,"class","svelte-1paj6gt")},m(n,u){L(n,e,u),f(e,s),o&&o.m(s,null),f(s,a),f(s,t),f(t,r),f(r,_),f(t,T),f(t,p),f(p,v),f(v,j),f(e,P)},p(n,u){n[1].attributes.Fotos.data?o?o.p(n,u):(o=z(n),o.c(),o.m(s,a)):o&&(o.d(1),o=null),u&1&&l!==(l=n[1].attributes.Titel+"")&&V(_,l),u&1&&g!==(g=n[1].attributes.Dauer+"")&&V(j,g),u&1&&k!==(k=J+"/projekt/"+N(n[1].attributes.Titel))&&c(e,"href",k)},d(n){n&&h(e),o&&o.d()}}}function U(i){let e,s=i[0],a=[];for(let t=0;t<s.length;t+=1)a[t]=B(w(i,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=C()},l(t){for(let r=0;r<a.length;r+=1)a[r].l(t);e=C()},m(t,r){for(let l=0;l<a.length;l+=1)a[l].m(t,r);L(t,e,r)},p(t,[r]){if(r&1){s=t[0];let l;for(l=0;l<s.length;l+=1){const _=w(t,s,l);a[l]?a[l].p(_,r):(a[l]=B(_),a[l].c(),a[l].m(e.parentNode,e))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i:G,o:G,d(t){R(a,t),t&&h(e)}}}function W(i,e,s){let{projects:a}=e;return i.$$set=t=>{"projects"in t&&s(0,a=t.projects)},[a]}class $ extends K{constructor(e){super();O(this,e,W,U,Q,{projects:0})}}export{$ as P};
