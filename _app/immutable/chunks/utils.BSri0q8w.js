import{b as _,t as x}from"./index.Cv7tkUva.js";import{w as T}from"./scheduler.CP60U8Vn.js";import{w as $}from"./index.BiO7oVWO.js";function D(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function E(e,o){_(e,1,1,()=>{o.delete(e.key)})}function F(e,o,a,q,k,y,d,v,A,P,u,S){let c=e.length,l=y.length,i=c;const w={};for(;i--;)w[e[i].key]=i;const f=[],m=new Map,g=new Map,r=[];for(i=l;i--;){const t=S(k,y,i),n=a(t);let s=d.get(n);s?r.push(()=>s.p(t,o)):(s=P(n,t),s.c()),m.set(n,f[i]=s),n in w&&g.set(n,Math.abs(i-w[n]))}const b=new Set,M=new Set;function p(t){x(t,1),t.m(v,u),d.set(t.key,t),u=t.first,l--}for(;c&&l;){const t=f[l-1],n=e[c-1],s=t.key,h=n.key;t===n?(u=t.first,c--,l--):m.has(h)?!d.has(s)||b.has(s)?p(t):M.has(h)?c--:g.get(s)>g.get(h)?(M.add(s),p(t)):(b.add(h),c--):(A(n,d),c--)}for(;c--;){const t=e[c];m.has(t.key)||A(t,d)}for(;l;)p(f[l-1]);return T(r),f}function j(){const{subscribe:e,set:o}=$("");return{subscribe:e,set:a=>{o(`${a} • Pechtold Architekten`)},clear:()=>{o("Pechtold Architekten")}}}const G=j(),H=e=>e.replaceAll(" ","_"),I=e=>e.replaceAll("_"," ");export{I as d,D as e,E as o,H as s,G as t,F as u};
