import{s as r}from"./utils-48bd0cca.js";const e="https://pechtold-architekten-cms.herokuapp.com/api",t=async(a,n)=>{const i=await(await fetch(`${e}/${a}?pagination[pageSize]=100`)).json(),s={};return i.data.forEach(o=>s[r(o.attributes[n])]=o.id),console.log(s),s},g={apiPath:e,markdownOptions:{breaks:!0},projectSlugsToIds:t("projekte","Titel"),categorySlugsToIds:t("kategorien","Anzeigename")};export{g as v};