import{_ as l}from"./iframe-c905f399.js";import{e as d,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-e3b0b9fd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";var c={},i=d;c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},B=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},m=y;return new Promise((u,p)=>{l(()=>import("./index-ad079bc7.js"),["./index-ad079bc7.js","./index-2e850551.js","./index-e3b0b9fd.js","./iframe-c905f399.js","./index-d475d2ea.js","./_commonjsHelpers-725317a4.js","./index-d37d4223.js","./index-f073aaf1.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:h})=>_(o.createElement(C,{showException:p,key:Math.random()},o.createElement(h,{components:s},o.createElement(m,{context:t,docsParameter:e}))),r)).then(()=>u())})},this.unmount=t=>{v(t)}}};export{B as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-641e73c1.js.map
