import{s as r}from"./utils-a6ed768f.js";const o="https://pechtold-architekten-cms.herokuapp.com/api",e=async(a,n)=>{const i=await(await fetch(`${o}/${a}?pagination[pageSize]=100`)).json(),s={};return i.data.forEach(t=>s[r(t.attributes[n])]=t.id),s},g={apiPath:o,markdownOptions:{breaks:!0},projectSlugsToIds:e("projekte","Titel"),categorySlugsToIds:e("kategorien","Anzeigename")};export{g as v};
