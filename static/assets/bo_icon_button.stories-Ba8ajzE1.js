import{e as B,B as t,f as n}from"./index-BKyAkUP5.js";import{S as e,I as o,B as a}from"./index-CmNQD-HU.js";import"./vue.esm-bundler-DlZOrE6n.js";import"./iframe-DRPT1DR7.js";import"../sb-preview/runtime.js";const T={title:"Button/bo-icon-button",component:B,tags:["autodocs"],argTypes:{icon:{description:"The name of the icon",table:{category:"props",subcategory:"required",type:{summary:"Icon",detail:e.stringEnumFormatter(o,"Icon")}},control:{type:"select"},options:Object.values(o)},size:{description:"The size of the icon",table:{category:"props",subcategory:"optional",type:{summary:"BoSize",detail:e.stringEnumFormatter(a,"BoSize")},defaultValue:{summary:a.default}},control:{type:"select"},options:Object.values(a)},disabled:{type:"boolean",description:"Whether the button is disabled",control:{type:"boolean"},table:{category:"props",subcategory:"optional"},defaultValue:!1},variant:{options:Object.values(t),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonVariant",detail:e.stringEnumFormatter(t,"BoButtonVariant")}},defaultValue:t.primary},type:{options:Object.values(n),description:"The type of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoIconButtonType",detail:e.stringEnumFormatter(n,"BoIconButtonType")}},defaultValue:n.default}},args:{icon:o.airplay}},r={args:{icon:o.airplay}},c={args:{disabled:!0}},s={render:()=>({components:{BoIconButton:B},template:`
            <div style="display: flex; align-items: center;">
                <BoIconButton icon="${o.box}" size="${a.extra_small}" variant="${t.teal}" class="m-1"/>
                <BoIconButton icon="${o.box}" size="${a.small}" variant="${t.teal}" class="m-1"/>
                <BoIconButton icon="${o.box}" size="${a.default}" variant="${t.teal}" class="m-1"/>
                <BoIconButton icon="${o.box}" size="${a.large}" variant="${t.teal}" class="m-1"/>
                <BoIconButton icon="${o.box}" size="${a.extra_large}" variant="${t.teal}" />
            </div>
        `})},i={render:()=>({components:{BoIconButton:B},template:`
            <h1 class="my-2 dark:text-white">Default</h1>
            <div style="display: flex; align-items: center;">
                <BoIconButton icon="${o.box}" variant="${t.primary}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.secondary}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.danger}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.warning}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.success}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.dark}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.purple}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.teal}" />
            </div>
            <h1 class="my-2 dark:text-white">Round</h1>
            <div style="display: flex; align-items: center;">
                <BoIconButton icon="${o.box}" variant="${t.primary}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.secondary}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.danger}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.warning}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.success}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.dark}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.purple}" type="${n.round}" class="m-1"/>
                <BoIconButton icon="${o.box}" variant="${t.teal}" type="${n.round}" />
            </div>
        `})};var u,l,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: Icon.airplay
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,$,d;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(d=($=c.parameters)==null?void 0:$.docs)==null?void 0:d.source}}};var y,I,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      BoIconButton\n    },\n    template: `\n            <div style="display: flex; align-items: center;">\n                <BoIconButton icon="${Icon.box}" size="${BoSize.extra_small}" variant="${BoButtonVariant.teal}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" size="${BoSize.small}" variant="${BoButtonVariant.teal}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" size="${BoSize.default}" variant="${BoButtonVariant.teal}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" size="${BoSize.large}" variant="${BoButtonVariant.teal}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" size="${BoSize.extra_large}" variant="${BoButtonVariant.teal}" />\n            </div>\n        `\n  })\n}',...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var v,x,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      BoIconButton\n    },\n    template: `\n            <h1 class="my-2 dark:text-white">Default</h1>\n            <div style="display: flex; align-items: center;">\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.primary}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.secondary}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.danger}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.warning}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.success}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.dark}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.purple}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.teal}" />\n            </div>\n            <h1 class="my-2 dark:text-white">Round</h1>\n            <div style="display: flex; align-items: center;">\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.primary}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.secondary}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.danger}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.warning}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.success}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.dark}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.purple}" type="${BoIconButtonType.round}" class="m-1"/>\n                <BoIconButton icon="${Icon.box}" variant="${BoButtonVariant.teal}" type="${BoIconButtonType.round}" />\n            </div>\n        `\n  })\n}',...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const k=["Example","Disabled","Sizes","Variants"];export{c as Disabled,r as Example,s as Sizes,i as Variants,k as __namedExportsOrder,T as default};
//# sourceMappingURL=bo_icon_button.stories-Ba8ajzE1.js.map
