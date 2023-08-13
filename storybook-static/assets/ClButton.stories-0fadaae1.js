import{d as ie,t as de,l as pe,c as n,a as S,m as ge,u as l,f as R,p as C,b as me,n as ye,o as A}from"./vue.esm-bundler-0d3af25d.js";import{_ as be,L as s,a as u}from"./ClLoadingSpinner-c21f4498.js";var e=(a=>(a.PRIMARY="primary",a.SECONDARY="secondary",a.DANGER="danger",a.WARNING="warning",a.SUCCESS="success",a.LIGHT="light",a.DARK="dark",a))(e||{}),t=(a=>(a.EXTRA_SMALL="extra-small",a.SMALL="small",a.BASE="base",a.LARGE="large",a.EXTRA_LARGE="extra-large",a))(t||{});const fe=["id","disabled"],Se={key:0},Re={key:1},Ae="text-gray-400 bg-gray-200 cursor-not-allowed hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",he="w-full h-full flex flex-row justify-center items-center focus:ring-4 font-medium rounded-lg focus:outline-none",Z=ie({__name:"ClButton",props:{type:{type:String,default:e.PRIMARY},label:{type:String,required:!0},disabled:{type:Boolean,default:!1},size:{type:String,default:t.BASE},isLoading:{type:Boolean,default:!1},onClick:{type:Function,default:()=>{}}},setup(a){const ee=a,{label:ae,type:h,disabled:L,size:E,onClick:te}=de(ee),re=pe("cl-button_"+Date.now()),r={[e.PRIMARY]:"text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800",[e.SECONDARY]:"text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300",[e.DANGER]:"text-white bg-red-700 hover:bg-red-800 focus:ring-red-300",[e.WARNING]:"text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300",[e.SUCCESS]:"text-white bg-green-500 hover:bg-green-600 focus:ring-green-300",[e.DARK]:"text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300",[e.LIGHT]:"text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300"},se=n(()=>{switch(h.value){case e.PRIMARY:return r[e.PRIMARY];case e.SECONDARY:return r[e.SECONDARY];case e.DANGER:return r[e.DANGER];case e.WARNING:return r[e.WARNING];case e.SUCCESS:return r[e.SUCCESS];case e.DARK:return r[e.DARK];case e.LIGHT:return r[e.LIGHT];default:return r[e.PRIMARY]}}),ne=n(()=>{switch(E.value){case t.EXTRA_SMALL:return"px-3 py-2 text-xs font-medium text-center";case t.SMALL:return"px-3 py-2 text-sm font-medium text-center";case t.BASE:return"px-5 py-2.5 text-sm font-medium text-center";case t.LARGE:return"px-5 py-3 text-base font-medium text-center";case t.EXTRA_LARGE:return"px-2 py-1 text-xs font-medium text-center";default:return"tpx-6 py-3.5 text-base font-medium"}}),oe=n(()=>{const o=L.value?Ae:se.value;return`${he} ${ne.value} ${o}`}),le=n(()=>{switch(h.value){case e.PRIMARY:return s.BLUE;case e.SECONDARY:return s.GRAY;case e.DANGER:return s.RED;case e.WARNING:return s.YELLOW;case e.SUCCESS:return s.GREEN;case e.DARK:return s.WHITE;case e.LIGHT:return s.BLACK;default:return s.BLUE}}),ue=n(()=>{switch(E.value){case t.SMALL:return u.SMALL;case t.BASE:return u.NORMAL;case t.LARGE:return u.LARGE;default:return u.NORMAL}});return(o,k)=>(A(),S("button",{id:re.value,ref:"cl-button",class:ye(["cl-button",[oe.value]]),disabled:l(L),onClick:k[0]||(k[0]=ce=>l(te)(ce))},[a.isLoading?(A(),S("div",Se,[ge(l(be),{size:ue.value,"show-label":!1,color:le.value},null,8,["size","color"])])):(A(),S("div",Re,[R("span",null,[C(o.$slots,"prefix")]),R("span",null,me(l(ae)),1),R("span",null,[C(o.$slots,"suffix")])]))],10,fe))}});Z.__docgenInfo={exportName:"default",displayName:"ClButton",description:"",tags:{},props:[{name:"type",type:{name:"ButtonType"},defaultValue:{func:!1,value:"ButtonType.PRIMARY"}},{name:"label",type:{name:"string"},required:!0},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"ButtonSize"},defaultValue:{func:!1,value:"ButtonSize.BASE"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"(e: MouseEvent) => void"},defaultValue:{func:!0,value:"() => {}"}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/Volumes/Data/Code/Projects/complib/src/components/Button/ClButton.vue"]};const ke={title:"Button/cl-button",component:Z,tags:["autodocs"],argTypes:{label:{description:"The label of the button",table:{category:"props",subcategory:"required",type:{summary:"string"}},control:{type:"text"},defaultValue:{summary:void 0}},type:{description:"The type of the button",table:{category:"props",subcategory:"optional",type:{summary:"ButtonType",detail:`enum ButtonType {
${Object.keys(e).map(a=>`	${a} = "${e[a]}",`).join(`\r
`)+`\r
}`}`},defaultValue:{summary:e.PRIMARY}},control:{type:"select"},options:Object.keys(e).map(a=>e[a])},disabled:{description:"The disabled state of the button",table:{category:"props",subcategory:"optional",type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},size:{description:"The size of the button",table:{category:"props",subcategory:"optional",type:{summary:"ButtonSize",detail:`enum ButtonSize {
${Object.keys(t).map(a=>`	${a} = "${t[a]}",`).join(`\r
`)+`\r
}`}`},defaultValue:{summary:t.BASE}},control:{type:"select"},options:Object.keys(t).map(a=>t[a])},isLoading:{description:"The loading state of the button",table:{category:"props",subcategory:"optional",type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},onClick:{description:"The click event handler",table:{category:"props",subcategory:"optional",type:{summary:"() => void"}},control:{type:null},action:"clicked"},prefix:{description:"Content of the prefix slot",table:{category:"slots",subcategory:"optional",type:{summary:"unkown"},defaultValue:{summary:void 0}}},suffix:{description:"Content of the suffix slot",table:{category:"slots",subcategory:"optional",type:{summary:"unkown"},defaultValue:{summary:void 0}}}}},c={parameters:{backgrounds:{default:"white"}},args:{label:"Primary",type:e.PRIMARY}},i={parameters:{backgrounds:{default:"white"}},args:{label:"Secondary",type:e.SECONDARY}},d={parameters:{backgrounds:{default:"white"}},args:{label:"Danger",type:e.DANGER}},p={parameters:{backgrounds:{default:"white"}},args:{label:"Warning",type:e.WARNING}},g={parameters:{backgrounds:{default:"white"}},args:{label:"Success",type:e.SUCCESS}},m={parameters:{backgrounds:{default:"white"}},args:{label:"Light",type:e.LIGHT}},y={parameters:{backgrounds:{default:"white"}},args:{label:"Dark",type:e.DARK}},b={parameters:{backgrounds:{default:"white"}},args:{label:"Disabled",disabled:!0}},f={parameters:{backgrounds:{default:"white"}},args:{label:"Is Loading",isLoading:!0}};var x,v,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Primary',
    type: ButtonType.PRIMARY
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,N,G;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Secondary',
    type: ButtonType.SECONDARY
  }
}`,...(G=(N=i.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var I,B,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Danger',
    type: ButtonType.DANGER
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var M,Y,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Warning',
    type: ButtonType.WARNING
  }
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var P,O,V;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Success',
    type: ButtonType.SUCCESS
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var W,$,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Light',
    type: ButtonType.LIGHT
  }
}`,...(z=($=m.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var U,j,H;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Dark',
    type: ButtonType.DARK
  }
}`,...(H=(j=y.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var K,X,q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...(q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var F,J,Q;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'white'
    }
  },
  args: {
    label: 'Is Loading',
    isLoading: true
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ce=["Primary","Secondary","Danger","Warning","Success","Light","Dark","Disabled","Loading"];export{d as Danger,y as Dark,b as Disabled,m as Light,f as Loading,c as Primary,i as Secondary,g as Success,p as Warning,Ce as __namedExportsOrder,ke as default};
//# sourceMappingURL=ClButton.stories-0fadaae1.js.map
