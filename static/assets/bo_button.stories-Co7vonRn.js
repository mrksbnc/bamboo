import{_ as B,B as t,a}from"./index-XSN0ibLG.js";import{s as i,B as e,I as S}from"./index-DDnE1tkY.js";import"./vue.esm-bundler-De164cfR.js";import"./iframe-DuGl65Uy.js";import"../sb-preview/runtime.js";const _={title:"Button/bo-button",component:B,tags:["autodocs"],argTypes:{label:{type:"string",description:"The label of the button",control:{type:"text"},table:{category:"props",subcategory:"required"}},variant:{options:Object.values(t),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonVariant",detail:i(t,"BoButtonVariant")}},defaultValue:t.primary},type:{type:"string",options:Object.values(a),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonType",detail:i(a,"BoButtonType")}},defaultValue:a.default},disabled:{type:"boolean",description:"Whether the button is disabled",control:{type:"boolean"},table:{category:"props",subcategory:"optional"},defaultValue:!1},size:{type:"string",options:Object.values(e),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoSize",detail:i(e,"BoSize")}},defaultValue:e.default},prefixIcon:{type:"string",description:"The icon to be displayed before the label",control:{type:"text"},defaultValue:null,table:{category:"props",subcategory:"optional"}},suffixIcon:{type:"string",description:"The icon to be displayed after the label",control:{type:"text"},defaultValue:null,table:{category:"props",subcategory:"optional"}}},args:{variant:t.primary,label:"Label",size:e.default,disabled:!1,type:a.default}},n={args:{variant:t.primary,label:"Label",size:e.default,disabled:!1,type:a.default}},l={render:()=>({components:{BoButton:B},template:`
            <div class="items-center flex">
                <BoButton label="Extra small" size="${e.extra_small}" class="m-1"/>
                <BoButton label="Small" size="${e.small}" class="m-1"/>
                <BoButton label="Default" size="${e.default}" class="m-1"/>
                <BoButton label="Large" size="${e.large}" class="m-1"/>
                <BoButton label="Extra large" size="${e.extra_large}" />
            </div>
        `})},o={render:()=>({components:{BoButton:B},template:`
            <h1 style="margin: 20px 0;">Default</h1>
            <div class="flex flex-1">
                <BoButton label="Primary" variant="${t.primary}" class="m-1"/>
                <BoButton label="Secondary" variant="${t.secondary}" class="m-1"/>
                <BoButton label="Alternative" variant="${t.alternative}" class="m-1"/>
                <BoButton label="Danger" variant="${t.danger}" class="m-1"/>
                <BoButton label="Warning" variant="${t.warning}" class="m-1"/>
                <BoButton label="Success" variant="${t.success}" class="m-1"/>
                <BoButton label="Light" variant="${t.light}" class="m-1"/>
                <BoButton label="Dark" variant="${t.dark}" class="m-1"/>
                <BoButton label="Purple" variant="${t.purple}" class="m-1"/>
                <BoButton label="Teal" variant="${t.teal}" class="m-1"/>
            </div>
            <h1 style="margin: 20px 0;">Pill</h1>
            <div class="flex flex-1">
                <BoButton label="Primary" variant="${t.primary}" type=${a.pill} class="m-1"/>
                <BoButton label="Secondary" variant="${t.secondary}" type=${a.pill} class="m-1"/>
                <BoButton label="Alternative" variant="${t.alternative}" type=${a.pill} class="m-1"/>
                <BoButton label="Danger" variant="${t.danger}" type=${a.pill} class="m-1"/>
                <BoButton label="Warning" variant="${t.warning}" type=${a.pill} class="m-1"/>
                <BoButton label="Success" variant="${t.success}" type=${a.pill} class="m-1"/>
                <BoButton label="Light" variant="${t.light}" type=${a.pill} class="m-1"/>
                <BoButton label="Dark" variant="${t.dark}" type=${a.pill} class="m-1"/>
                <BoButton label="Purple" variant="${t.purple}" type=${a.pill} class="m-1"/>
                <BoButton label="Teal" variant="${t.teal}" type=${a.pill} class="m-1"/>
            </div>
            <h1 style="margin: 20px 0;">Outline</h1>
            <div class="flex flex-1">
                <BoButton label="Primary" variant="${t.primary}" type=${a.outline} class="m-1"/>
                <BoButton label="Secondary" variant="${t.secondary}" type=${a.outline} class="m-1"/>
                <BoButton label="Alternative" variant="${t.alternative}" type=${a.outline} class="m-1"/>
                <BoButton label="Danger" variant="${t.danger}" type=${a.outline} class="m-1"/>
                <BoButton label="Warning" variant="${t.warning}" type=${a.outline} class="m-1"/>
                <BoButton label="Success" variant="${t.success}" type=${a.outline} class="m-1"/>
                <BoButton label="Light" variant="${t.light}" type=${a.outline} class="m-1"/>
                <BoButton label="Dark" variant="${t.dark}" type=${a.outline} class="m-1"/>
                <BoButton label="Purple" variant="${t.purple}" type=${a.outline} class="m-1"/>
                <BoButton label="Teal" variant="${t.teal}" type=${a.outline} class="m-1"/>
            </div>
        `})},r={args:{prefixIcon:S.alert_circle,label:"Label"}},s={args:{suffixIcon:S.alert_circle,label:"Label"}};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: BoButtonVariant.primary,
    label: 'Label',
    size: BoSize.default,
    disabled: false,
    type: BoButtonType.default
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,y,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var $,d,v;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      BoButton\n    },\n    template: `\n            <h1 style="margin: 20px 0;">Default</h1>\n            <div class="flex flex-1">\n                <BoButton label="Primary" variant="${BoButtonVariant.primary}" class="m-1"/>\n                <BoButton label="Secondary" variant="${BoButtonVariant.secondary}" class="m-1"/>\n                <BoButton label="Alternative" variant="${BoButtonVariant.alternative}" class="m-1"/>\n                <BoButton label="Danger" variant="${BoButtonVariant.danger}" class="m-1"/>\n                <BoButton label="Warning" variant="${BoButtonVariant.warning}" class="m-1"/>\n                <BoButton label="Success" variant="${BoButtonVariant.success}" class="m-1"/>\n                <BoButton label="Light" variant="${BoButtonVariant.light}" class="m-1"/>\n                <BoButton label="Dark" variant="${BoButtonVariant.dark}" class="m-1"/>\n                <BoButton label="Purple" variant="${BoButtonVariant.purple}" class="m-1"/>\n                <BoButton label="Teal" variant="${BoButtonVariant.teal}" class="m-1"/>\n            </div>\n            <h1 style="margin: 20px 0;">Pill</h1>\n            <div class="flex flex-1">\n                <BoButton label="Primary" variant="${BoButtonVariant.primary}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Alternative" variant="${BoButtonVariant.alternative}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Danger" variant="${BoButtonVariant.danger}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Warning" variant="${BoButtonVariant.warning}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Success" variant="${BoButtonVariant.success}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Light" variant="${BoButtonVariant.light}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Dark" variant="${BoButtonVariant.dark}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Purple" variant="${BoButtonVariant.purple}" type=${BoButtonType.pill} class="m-1"/>\n                <BoButton label="Teal" variant="${BoButtonVariant.teal}" type=${BoButtonType.pill} class="m-1"/>\n            </div>\n            <h1 style="margin: 20px 0;">Outline</h1>\n            <div class="flex flex-1">\n                <BoButton label="Primary" variant="${BoButtonVariant.primary}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Secondary" variant="${BoButtonVariant.secondary}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Alternative" variant="${BoButtonVariant.alternative}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Danger" variant="${BoButtonVariant.danger}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Warning" variant="${BoButtonVariant.warning}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Success" variant="${BoButtonVariant.success}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Light" variant="${BoButtonVariant.light}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Dark" variant="${BoButtonVariant.dark}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Purple" variant="${BoButtonVariant.purple}" type=${BoButtonType.outline} class="m-1"/>\n                <BoButton label="Teal" variant="${BoButtonVariant.teal}" type=${BoButtonType.outline} class="m-1"/>\n            </div>\n        `\n  })\n}',...(v=(d=o.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var g,f,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefixIcon: Icon.alert_circle,
    label: 'Label'
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,V,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    suffixIcon: Icon.alert_circle,
    label: 'Label'
  }
}`,...(T=(V=s.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const k=["Example","Sizes","Variants","WithPrefixIcon","WithSuffixIcon"];export{n as Example,l as Sizes,o as Variants,r as WithPrefixIcon,s as WithSuffixIcon,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=bo_button.stories-Co7vonRn.js.map
