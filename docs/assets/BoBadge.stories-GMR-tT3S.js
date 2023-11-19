import{d as Q,t as U,f as Y,j as n,k as o,m as b,p as d,u as w,q as Z,l as ee}from"./vue.esm-bundler-xVzf3HLK.js";import{_ as ae,s as c}from"./storybook-C-1g1n2x.js";import{B as v}from"./constants-l8QlKuOW.js";import"./zoom-out-vxfWIlGz.js";const le={key:0},te={key:1},ie={key:2,class:"label"},re={key:3},W=Q({__name:"BoBadge",props:{variant:{type:String,default:()=>l.Default},form:{type:String,default:()=>r.Pill},type:{type:String,default:()=>i.Filled},size:{type:String,default:()=>t.SM},label:{type:String,required:!1}},setup(a){const R=a,{variant:A,form:H,type:x,size:J,label:z}=U(R),K=Y(()=>{const e={};switch(A.value){case l.Default:e.default=!0;break;case l.Info:e.info=!0;break;case l.Success:e.success=!0;break;case l.Warning:e.warning=!0;break;case l.Danger:e.danger=!0;break;case l.Tertiary:e.tertiary=!0;break}switch(H.value){case r.Square:e.square=!0;break;case r.Circle:e.circle=!0;break;case r.Pill:e.pill=!0;break}switch(x.value){case i.Filled:e.filled=!0;break;case i.Outline:e.outline=!0;break}switch(x.value){case i.Filled:e.filled=!0;break;case i.Outline:e.outline=!0;break}switch(J.value){case t.XS:e.xs=!0;break;case t.SM:e.sm=!0;break;case t.MD:e.md=!0;break;case t.LG:e.lg=!0;break;case t.XL:e.xl=!0;break}return e});return(e,se)=>(n(),o("div",{class:ee(["bo-badge",K.value])},[e.$slots.prefix!=null?(n(),o("span",le,[b(e.$slots,"prefix",{},void 0,!0)])):d("",!0),e.$slots.body!=null?(n(),o("span",te,[b(e.$slots,"body",{},void 0,!0)])):d("",!0),w(z)!=null&&e.$slots.body==null?(n(),o("span",ie,Z(w(z)),1)):d("",!0),e.$slots.suffix!=null?(n(),o("span",re,[b(e.$slots,"suffix",{},void 0,!0)])):d("",!0)],2))}}),s=ae(W,[["__scopeId","data-v-439bf86c"]]);W.__docgenInfo={exportName:"default",displayName:"BoBadge",description:"",tags:{},props:[{name:"variant",type:{name:"BadgeVariant"},defaultValue:{func:!0,value:"() => BadgeVariant.Default"}},{name:"form",type:{name:"BadgeForm"},defaultValue:{func:!0,value:"() => BadgeForm.Pill"}},{name:"type",type:{name:"BadgeType"},defaultValue:{func:!0,value:"() => BadgeType.Filled"}},{name:"size",type:{name:"BadgeSize"},defaultValue:{func:!0,value:"() => BadgeSize.SM"}},{name:"label",type:{name:"string"},required:!1}],slots:[{name:"prefix"},{name:"body"},{name:"suffix"}],sourceFiles:["/Volumes/Data/code/projects/bamboo/src/components/Badge/BoBadge.vue"]};var l=(a=>(a.Default="default",a.Info="info",a.Tertiary="tertiary",a.Success="success",a.Warning="warning",a.Danger="danger",a))(l||{}),r=(a=>(a.Square="square",a.Pill="pill",a.Circle="circle",a))(r||{}),i=(a=>(a.Filled="filled",a.Outline="outline",a))(i||{}),t=(a=>(a.XS="xs",a.SM="sm",a.MD="md",a.LG="lg",a.XL="xl",a))(t||{});const pe={title:"Badge/bo-badge",component:s,tags:["autodocs"],argTypes:{variant:{description:"The variant of the badge.",table:{category:"props",subcategory:"optional",type:{summary:"BadgeVariant",detail:c(l,"BadgeVariant")},defaultValue:{summary:l.Default}},control:{type:"select"},options:Object.values(l)},form:{description:"The form of the badge.",table:{category:"props",subcategory:"optional",type:{summary:"BadgeForm",detail:c(r,"BadgeForm")},defaultValue:{summary:r.Pill}},control:{type:"select"},options:Object.values(r)},type:{description:"The type of the badge.",table:{category:"props",subcategory:"optional",type:{summary:"BadgeType",detail:c(i,"BadgeType")},defaultValue:{summary:i.Filled}},control:{type:"select"},options:Object.values(i)},size:{description:"The size of the badge",table:{category:"props",subcategory:"optional",type:{summary:"BadgeSize",detail:c(t,"BadgeSize")},defaultValue:{summary:t.SM}},control:{type:"select"},options:Object.values(t)},label:{description:"The label of the badge if the `body` slot wasn't used",table:{category:"props",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}},prefix:{description:"The prefix slot of the badge",table:{category:"slots",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}},body:{description:"The body slot of the badge",table:{category:"slots",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}},suffix:{description:"The suffix slot of the badge",table:{category:"slots",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}}}},p={args:{variant:l.Default,size:t.SM,label:"Label"}},m={args:{},render:()=>({components:{BoBadge:s},template:`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="Label" type="filled"/>
                <BoBadge variant="info" size="sm" label="Label" type="filled"/>
                <BoBadge variant="tertiary" size="sm" label="Label" type="filled"/>
                <BoBadge variant="success" size="sm" label="Label" type="filled"/>
                <BoBadge variant="danger" size="sm" label="Label" type="filled"/>
                <BoBadge variant="warning" size="sm" label="Label" type="filled"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="filled" form="circle"/>
                <BoBadge variant="info" size="sm" label="2" type="filled" form="circle" />
                <BoBadge variant="tertiary" size="sm" label="3" type="filled" form="circle"/>
                <BoBadge variant="success" size="sm" label="4" type="filled" form="circle"/>
                <BoBadge variant="danger" size="sm" label="5" type="filled" form="circle"/>
                <BoBadge variant="warning" size="sm" label="6" type="filled" form="circle"/>
            </div>
            Square	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="filled" form="square"/>
                <BoBadge variant="info" size="sm" label="2" type="filled" form="square" />
                <BoBadge variant="tertiary" size="sm" label="3" type="filled" form="square"/>
                <BoBadge variant="success" size="sm" label="4" type="filled" form="square"/>
                <BoBadge variant="danger" size="sm" label="5" type="filled" form="square"/>
                <BoBadge variant="warning" size="sm" label="6" type="filled" form="square"/>
            </div>
        </div>
    `})},f={args:{},render:()=>({components:{BoBadge:s},template:`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="Label" type="outline"/>
                <BoBadge variant="info" size="sm" label="Label" type="outline"/>
                <BoBadge variant="tertiary" size="sm" label="Label" type="outline"/>
                <BoBadge variant="success" size="sm" label="Label" type="outline"/>
                <BoBadge variant="danger" size="sm" label="Label" type="outline"/>
                <BoBadge variant="warning" size="sm" label="Label" type="outline"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="outline" form="circle"/>
                <BoBadge variant="info" size="sm" label="2" type="outline" form="circle" />
                <BoBadge variant="tertiary" size="sm" label="3" type="outline" form="circle"/>
                <BoBadge variant="success" size="sm" label="4" type="outline" form="circle"/>
                <BoBadge variant="danger" size="sm" label="5" type="outline" form="circle"/>
                <BoBadge variant="warning" size="sm" label="6" type="outline" form="circle"/>
            </div>
            Square
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="outline" form="square"/>
                <BoBadge variant="info" size="sm" label="2" type="outline" form="square" />
                <BoBadge variant="tertiary" size="sm" label="3" type="outline" form="square"/>
                <BoBadge variant="success" size="sm" label="4" type="outline" form="square"/>
                <BoBadge variant="danger" size="sm" label="5" type="outline" form="square"/>
                <BoBadge variant="warning" size="sm" label="6" type="outline" form="square"/>
            </div>
        </div>
    `})},u={args:{},render:()=>({components:{BoBadge:s},template:`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="xs" label="Label" />
            <BoBadge variant="default" size="sm" label="Label" />
            <BoBadge variant="default" size="md" label="Label" />
            <BoBadge variant="default" size="lg" label="Label" />
            <BoBadge variant="default" size="xl" label="Label" />
        </div>
        Circle
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" form="circle" size="xs" label="1" />
            <BoBadge variant="default" form="circle" size="sm" label="2" />
            <BoBadge variant="default" form="circle" size="md" label="3" />
            <BoBadge variant="default" form="circle" size="lg" label="4" />
            <BoBadge variant="default" form="circle" size="xl" label="5" />
        </div>
        Square
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" form="square" size="xs" label="1" />
            <BoBadge variant="default" form="square" size="sm" label="2" />
            <BoBadge variant="default" form="square" size="md" label="3" />
            <BoBadge variant="default" form="square" size="lg" label="4" />
            <BoBadge variant="default" form="square" size="xl" label="5" />
        </div>
    </div>
    `})},g={args:{},render:()=>({components:{BoBadge:s,BoIcon:v},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #prefix>
                    <span style="margin-right: 5px; display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    `})},B={args:{},render:()=>({components:{BoBadge:s,BoIcon:v},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #body>
                    <span style="display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    `})},y={args:{},render:()=>({components:{BoBadge:s,BoIcon:v},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #suffix>
                    <span style="margin-left: 5px; display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    `})};var q,L,S;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: BadgeVariant.Default,
    size: BadgeSize.SM,
    label: 'Label'
  }
}`,...(S=(L=p.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var h,k,_;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge
    },
    template: \`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="Label" type="filled"/>
                <BoBadge variant="info" size="sm" label="Label" type="filled"/>
                <BoBadge variant="tertiary" size="sm" label="Label" type="filled"/>
                <BoBadge variant="success" size="sm" label="Label" type="filled"/>
                <BoBadge variant="danger" size="sm" label="Label" type="filled"/>
                <BoBadge variant="warning" size="sm" label="Label" type="filled"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="filled" form="circle"/>
                <BoBadge variant="info" size="sm" label="2" type="filled" form="circle" />
                <BoBadge variant="tertiary" size="sm" label="3" type="filled" form="circle"/>
                <BoBadge variant="success" size="sm" label="4" type="filled" form="circle"/>
                <BoBadge variant="danger" size="sm" label="5" type="filled" form="circle"/>
                <BoBadge variant="warning" size="sm" label="6" type="filled" form="circle"/>
            </div>
            Square	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="filled" form="square"/>
                <BoBadge variant="info" size="sm" label="2" type="filled" form="square" />
                <BoBadge variant="tertiary" size="sm" label="3" type="filled" form="square"/>
                <BoBadge variant="success" size="sm" label="4" type="filled" form="square"/>
                <BoBadge variant="danger" size="sm" label="5" type="filled" form="square"/>
                <BoBadge variant="warning" size="sm" label="6" type="filled" form="square"/>
            </div>
        </div>
    \`
  })
}`,...(_=(k=m.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var I,T,V;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge
    },
    template: \`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="Label" type="outline"/>
                <BoBadge variant="info" size="sm" label="Label" type="outline"/>
                <BoBadge variant="tertiary" size="sm" label="Label" type="outline"/>
                <BoBadge variant="success" size="sm" label="Label" type="outline"/>
                <BoBadge variant="danger" size="sm" label="Label" type="outline"/>
                <BoBadge variant="warning" size="sm" label="Label" type="outline"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="outline" form="circle"/>
                <BoBadge variant="info" size="sm" label="2" type="outline" form="circle" />
                <BoBadge variant="tertiary" size="sm" label="3" type="outline" form="circle"/>
                <BoBadge variant="success" size="sm" label="4" type="outline" form="circle"/>
                <BoBadge variant="danger" size="sm" label="5" type="outline" form="circle"/>
                <BoBadge variant="warning" size="sm" label="6" type="outline" form="circle"/>
            </div>
            Square
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="sm" label="1" type="outline" form="square"/>
                <BoBadge variant="info" size="sm" label="2" type="outline" form="square" />
                <BoBadge variant="tertiary" size="sm" label="3" type="outline" form="square"/>
                <BoBadge variant="success" size="sm" label="4" type="outline" form="square"/>
                <BoBadge variant="danger" size="sm" label="5" type="outline" form="square"/>
                <BoBadge variant="warning" size="sm" label="6" type="outline" form="square"/>
            </div>
        </div>
    \`
  })
}`,...(V=(T=f.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,P,C;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge
    },
    template: \`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="xs" label="Label" />
            <BoBadge variant="default" size="sm" label="Label" />
            <BoBadge variant="default" size="md" label="Label" />
            <BoBadge variant="default" size="lg" label="Label" />
            <BoBadge variant="default" size="xl" label="Label" />
        </div>
        Circle
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" form="circle" size="xs" label="1" />
            <BoBadge variant="default" form="circle" size="sm" label="2" />
            <BoBadge variant="default" form="circle" size="md" label="3" />
            <BoBadge variant="default" form="circle" size="lg" label="4" />
            <BoBadge variant="default" form="circle" size="xl" label="5" />
        </div>
        Square
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" form="square" size="xs" label="1" />
            <BoBadge variant="default" form="square" size="sm" label="2" />
            <BoBadge variant="default" form="square" size="md" label="3" />
            <BoBadge variant="default" form="square" size="lg" label="4" />
            <BoBadge variant="default" form="square" size="xl" label="5" />
        </div>
    </div>
    \`
  })
}`,...(C=(P=u.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var F,O,M;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge,
      BoIcon
    },
    template: \`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #prefix>
                    <span style="margin-right: 5px; display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    \`
  })
}`,...(M=(O=g.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var $,j,E;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge,
      BoIcon
    },
    template: \`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #body>
                    <span style="display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    \`
  })
}`,...(E=(j=B.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var X,N,G;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge,
      BoIcon
    },
    template: \`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #suffix>
                    <span style="margin-left: 5px; display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    \`
  })
}`,...(G=(N=y.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const me=["Example","Filled","Outline","Sizes","Prefix","Body","Suffix"];export{B as Body,p as Example,m as Filled,f as Outline,g as Prefix,u as Sizes,y as Suffix,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=BoBadge.stories-GMR-tT3S.js.map
