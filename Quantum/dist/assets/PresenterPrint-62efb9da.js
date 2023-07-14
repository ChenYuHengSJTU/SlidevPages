import{d as _,i as d,a as u,u as p,b as h,c as m,e as f,f as n,g as t,t as a,h as s,F as g,r as v,n as x,j as y,o as l,k as b,l as N,m as k,p as P,q as S,_ as w}from"./index-53587c4e.js";import{N as T}from"./NoteDisplay-99c54504.js";const V={class:"m-4"},j={class:"mb-10"},C={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(u),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>y.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:x(s(S))},[t("div",V,[t("div",j,[t("h1",C,a(s(m).title),1),t("div",L,a(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(s(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(b)),1),N(" "+a(e==null?void 0:e.title)+" ",1),z])]),k(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(l(),n("hr",A)):P("v-if",!0)]))),128))])],4))}}),E=w(F,[["__file","/home/cyh627/SJTU/QuantumAI/QuantumComputation/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
