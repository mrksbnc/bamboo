import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{useParameter:p,addons:v,useEffect:S,useMemo:I}=__STORYBOOK_MODULE_PREVIEW_API__;var g=Object.defineProperty,R=(e,t)=>{for(var r in t)g(e,r,{get:t[r],enumerable:!0})},O={};R(O,{initializeThemeState:()=>T,pluckThemeFromContext:()=>h,useThemeParameters:()=>u});var c="themes",A=`storybook/${c}`,M="theme",k={},L={REGISTER_THEMES:`${A}/REGISTER_THEMES`};function h({globals:e}){return e[M]||""}function u(){return p(c,k)}function T(e,t){v.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",m=e=>e.split(" ").filter(Boolean),b=({themes:e,defaultTheme:t,parentSelector:r=P})=>(T(Object.keys(e),t),(d,_)=>{let{themeOverride:s}=u(),o=h(_);return S(()=>{let l=s||o||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([n])=>n!==l).forEach(([n,f])=>{let E=m(f);E.length>0&&a.classList.remove(...E)});let i=m(e[l]);i.length>0&&a.classList.add(...i)},[s,o,r]),d()});const N={parameters:{layout:"padded",docs:{toc:!0},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"light",values:[{name:"light",value:"#f0f0f0"},{name:"dark",value:"#333"}]}},decorators:[b({themes:{light:"light",dark:"dark"},defaultTheme:"light"})]};export{N as default};
//# sourceMappingURL=preview-Bx5yPmr_.js.map