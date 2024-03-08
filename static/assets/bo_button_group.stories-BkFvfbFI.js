import{b,c as e,d as a}from"./index-BKyAkUP5.js";import{S as d,I as l}from"./index-CmNQD-HU.js";import"./vue.esm-bundler-DlZOrE6n.js";import"./iframe-DRPT1DR7.js";import"../sb-preview/runtime.js";const u=[{id:"1",label:"Label 1"},{id:"2",label:"Label 2"},{id:"3",label:"Label 3"}],O={title:"Button/bo-button-group",component:b,tags:["autodocs"],argTypes:{items:{description:"The items to be displayed",table:{category:"props",subcategory:"required"},control:{type:"object"}},variant:{options:Object.values(e),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonGroupVariant",detail:d.stringEnumFormatter(e,"BoButtonGroupVariant")}},defaultValue:e.default},disabled:{type:"boolean",description:"Whether the button is disabled",control:{type:"boolean"},table:{category:"props",subcategory:"optional"},defaultValue:!1},size:{type:"string",options:Object.values(a),description:"The variant of the button",control:{type:"select"},table:{category:"props",subcategory:"optional",type:{summary:"BoButtonGroupSize",detail:d.stringEnumFormatter(a,"BoButtonGroupSize")}},defaultValue:a.default}},args:{items:u,variant:e.default,size:a.default,disabled:!1}},t={args:{items:u,variant:e.default,size:a.default,disabled:!1}},o={args:{items:u,variant:e.default,size:a.default,disabled:!0}},n={render:()=>({components:{BoButtonGroup:b},template:`
            <div class="flex flex-col">
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${e.default}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${e.info}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${e.danger}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${e.warning}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${e.success}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="${e.dark}" class="m-1"/>
            </div>
        `})},i={render:()=>({components:{BoButtonGroup:b},template:`
            <div class="flex flex-col">
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="${a.small}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="${a.default}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="${a.large}" class="m-1"/>
            </div>
        `})},r={args:{variant:e.default,size:a.default,disabled:!1,items:[{id:"1",label:"Label 1",prefixIcon:l.alert_circle},{id:"2",label:"Label 2",prefixIcon:l.alert_triangle},{id:"3",label:"Label 3",prefixIcon:l.alert_octagon}]}},s={args:{variant:e.default,size:a.default,disabled:!1,items:[{id:"1",label:"Label 1",suffixIcon:l.alert_circle},{id:"2",label:"Label 2",suffixIcon:l.alert_triangle},{id:"3",label:"Label 3",suffixIcon:l.alert_octagon}]}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items,
    variant: BoButtonGroupVariant.default,
    size: BoButtonGroupSize.default,
    disabled: false
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var B,f,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items,
    variant: BoButtonGroupVariant.default,
    size: BoButtonGroupSize.default,
    disabled: true
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var G,g,v;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BoButtonGroup
    },
    template: \`
            <div class="flex flex-col">
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="\${BoButtonGroupVariant.default}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="\${BoButtonGroupVariant.info}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="\${BoButtonGroupVariant.danger}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="\${BoButtonGroupVariant.warning}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="\${BoButtonGroupVariant.success}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" variant="\${BoButtonGroupVariant.dark}" class="m-1"/>
            </div>
        \`
  })
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,z,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BoButtonGroup
    },
    template: \`
            <div class="flex flex-col">
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="\${BoButtonGroupSize.small}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="\${BoButtonGroupSize.default}" class="m-1"/>
                <BoButtonGroup :items="{0:{id:'1',label:'Label 1'},1:{id:'2',label:'Label 2'},2:{id:'3',label:'Label 3'}}" size="\${BoButtonGroupSize.large}" class="m-1"/>
            </div>
        \`
  })
}`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var S,y,V;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: BoButtonGroupVariant.default,
    size: BoButtonGroupSize.default,
    disabled: false,
    items: [{
      id: '1',
      label: 'Label 1',
      prefixIcon: Icon.alert_circle
    }, {
      id: '2',
      label: 'Label 2',
      prefixIcon: Icon.alert_triangle
    }, {
      id: '3',
      label: 'Label 3',
      prefixIcon: Icon.alert_octagon
    }]
  }
}`,...(V=(y=r.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var $,_,h;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: BoButtonGroupVariant.default,
    size: BoButtonGroupSize.default,
    disabled: false,
    items: [{
      id: '1',
      label: 'Label 1',
      suffixIcon: Icon.alert_circle
    }, {
      id: '2',
      label: 'Label 2',
      suffixIcon: Icon.alert_triangle
    }, {
      id: '3',
      label: 'Label 3',
      suffixIcon: Icon.alert_octagon
    }]
  }
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const w=["Example","Disabled","Variants","Sizes","WithPrefixIcons","WithSuffixIcons"];export{o as Disabled,t as Example,i as Sizes,n as Variants,r as WithPrefixIcons,s as WithSuffixIcons,w as __namedExportsOrder,O as default};
//# sourceMappingURL=bo_button_group.stories-BkFvfbFI.js.map
