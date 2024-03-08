import{_ as u,B as t,a}from"./index-BKyAkUP5.js";import{S as B,B as e,I as P}from"./index-CmNQD-HU.js";import"./vue.esm-bundler-DlZOrE6n.js";import"./iframe-DRPT1DR7.js";import"../sb-preview/runtime.js";const L={title:"Button/bo-button",component:u,tags:["autodocs"],argTypes:{label:{type:"string",description:"The label of the button",control:{type:"text"},table:{category:"props",subcategory:"required"}},variant:{options:Object.values(t),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonVariant",detail:B.stringEnumFormatter(t,"BoButtonVariant")}},defaultValue:t.primary},type:{type:"string",options:Object.values(a),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonType",detail:B.stringEnumFormatter(a,"BoButtonType")}},defaultValue:a.default},disabled:{type:"boolean",description:"Whether the button is disabled",control:{type:"boolean"},table:{category:"props",subcategory:"optional"},defaultValue:!1},size:{type:"string",options:Object.values(e),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoSize",detail:B.stringEnumFormatter(e,"BoSize")}},defaultValue:e.default},prefixIcon:{type:"string",description:"The icon to be displayed before the label",control:{type:"text"},defaultValue:null,table:{category:"props",subcategory:"optional"}},suffixIcon:{type:"string",description:"The icon to be displayed after the label",control:{type:"text"},defaultValue:null,table:{category:"props",subcategory:"optional"}}},args:{variant:t.primary,label:"Label",size:e.default,disabled:!1,type:a.default}},n={args:{variant:t.primary,label:"Label",size:e.default,disabled:!1,type:a.default}},l={args:{disabled:!0}},o={render:()=>({components:{BoButton:u},template:`
            <div class="items-center flex">
                <BoButton label="Extra small" size="${e.extra_small}" class="m-1"/>
                <BoButton label="Small" size="${e.small}" class="m-1"/>
                <BoButton label="Default" size="${e.default}" class="m-1"/>
                <BoButton label="Large" size="${e.large}" class="m-1"/>
                <BoButton label="Extra large" size="${e.extra_large}" />
            </div>
        `})},r={render:()=>({components:{BoButton:u},template:`
            <h1 class="my-2 dark:text-white">Default</h1>
            <div class="flex flex-1">
                <BoButton label="Primary" variant="${t.primary}" class="m-1"/>
                <BoButton label="Secondary" variant="${t.secondary}" class="m-1"/>
                <BoButton label="Danger" variant="${t.danger}" class="m-1"/>
                <BoButton label="Warning" variant="${t.warning}" class="m-1"/>
                <BoButton label="Success" variant="${t.success}" class="m-1"/>
                <BoButton label="Dark" variant="${t.dark}" class="m-1"/>
                <BoButton label="Purple" variant="${t.purple}" class="m-1"/>
                <BoButton label="Teal" variant="${t.teal}" class="m-1"/>
            </div>
            <h1 class="my-2 dark:text-white">Pill</h1>
            <div class="flex flex-1">
                <BoButton label="Primary" variant="${t.primary}" type=${a.pill} class="m-1"/>
                <BoButton label="Secondary" variant="${t.secondary}" type=${a.pill} class="m-1"/>
                <BoButton label="Danger" variant="${t.danger}" type=${a.pill} class="m-1"/>
                <BoButton label="Warning" variant="${t.warning}" type=${a.pill} class="m-1"/>
                <BoButton label="Success" variant="${t.success}" type=${a.pill} class="m-1"/>
                <BoButton label="Dark" variant="${t.dark}" type=${a.pill} class="m-1"/>
                <BoButton label="Purple" variant="${t.purple}" type=${a.pill} class="m-1"/>
                <BoButton label="Teal" variant="${t.teal}" type=${a.pill} class="m-1"/>
            </div>
            <h1 class="my-2 dark:text-white">Outline</h1>
            <div class="flex flex-1">
                <BoButton label="Primary" variant="${t.primary}" type=${a.outline} class="m-1"/>
                <BoButton label="Secondary" variant="${t.secondary}" type=${a.outline} class="m-1"/>
                <BoButton label="Danger" variant="${t.danger}" type=${a.outline} class="m-1"/>
                <BoButton label="Warning" variant="${t.warning}" type=${a.outline} class="m-1"/>
                <BoButton label="Success" variant="${t.success}" type=${a.outline} class="m-1"/>
                <BoButton label="Dark" variant="${t.dark}" type=${a.outline} class="m-1"/>
                <BoButton label="Purple" variant="${t.purple}" type=${a.outline} class="m-1"/>
                <BoButton label="Teal" variant="${t.teal}" type=${a.outline} class="m-1"/>
            </div>
        `})},s={args:{prefixIcon:P.alert_circle,label:"Label"}},i={args:{suffixIcon:P.alert_circle,label:"Label"}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: BoButtonVariant.primary,
    label: 'Label',
    size: BoSize.default,
    disabled: false,
    type: BoButtonType.default
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,d,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(d=l.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var $,v,g;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BoButton
    },
    template: \`
            <div class="items-center flex">
                <BoButton label="Extra small" size="\${BoSize.extra_small}" class="m-1"/>
                <BoButton label="Small" size="\${BoSize.small}" class="m-1"/>
                <BoButton label="Default" size="\${BoSize.default}" class="m-1"/>
                <BoButton label="Large" size="\${BoSize.large}" class="m-1"/>
                <BoButton label="Extra large" size="\${BoSize.extra_large}" />
            </div>
        \`
  })
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      BoButton\n    },\n    template: `\n            <h1 class="my-2 dark:text-white">Default</h1>\n            <div class="flex flex-1">\n                <BoButton label="Primary" variant="${BoButtonVariant.primary}" class="m-1"/>\n                <BoButton label="Secondary" variant="${BoButtonVariant.secondary}" class="m-1"/>\n                <BoButton label="Danger" variant="${BoButtonVariant.danger}" class="m-1"/>\n                <BoButton label="Warning" variant="${BoButtonVariant.warning}" class="m-1"/>\n                <BoButton label="Success" variant="${BoButtonVariant.success}" class="m-1"/>\n                <BoButton label="Dark" variant="${BoButtonVariant.dark}" class="m-1"/>\n                <BoButton label="Purple" variant="${BoButtonVariant.purple}" class="m-1"/>\n                <BoButton label="Teal" variant="${BoButtonVariant.teal}" class="m-1"/>\n            </div>\n            <h1 class="my-2 dark:text-white">Pill</h1>\n            <div class="flex flex-1">\n                <BoButton label="Primary" variant="${BoButtonVariant.primary}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Danger" variant="${BoButtonVariant.danger}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Warning" variant="${BoButtonVariant.warning}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Success" variant="${BoButtonVariant.success}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Dark" variant="${BoButtonVariant.dark}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Purple" variant="${BoButtonVariant.purple}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Teal" variant="${BoButtonVariant.teal}" type=${BoButtonType.pill} class="m-1"/>\n            </div>\n            <h1 class="my-2 dark:text-white">Outline</h1>\n            <div class="flex flex-1">\n                <BoButton label="Primary" variant="${BoButtonVariant.primary}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Danger" variant="${BoButtonVariant.danger}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Warning" variant="${BoButtonVariant.warning}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Success" variant="${BoButtonVariant.success}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Dark" variant="${BoButtonVariant.dark}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Purple" variant="${BoButtonVariant.purple}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Teal" variant="${BoButtonVariant.teal}" type=${BoButtonType.outline} class="m-1"/>\n            </div>\n        `\n  })\n}',...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var V,S,T;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    prefixIcon: Icon.alert_circle,
    label: 'Label'
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var z,k,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    suffixIcon: Icon.alert_circle,
    label: 'Label'
  }
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const O=["Example","Disabled","Sizes","Variants","WithPrefixIcon","WithSuffixIcon"];export{l as Disabled,n as Example,o as Sizes,r as Variants,s as WithPrefixIcon,i as WithSuffixIcon,O as __namedExportsOrder,L as default};
//# sourceMappingURL=bo_button.stories-BSg-vfj8.js.map
