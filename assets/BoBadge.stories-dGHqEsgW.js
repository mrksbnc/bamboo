import{d as Q,t as U,f as Y,o,g as s,j as y,k as d,u as w,l as Z,n as ee}from"./vue.esm-bundler-jyss5HX4.js";import{_ as ae}from"./_plugin-vue_export-helper-x3n3nnut.js";import{B as v}from"./BoIcon-iFbTEelT.js";import{s as f}from"./storybook-j7faMZma.js";import"./iframe-_idAskDX.js";import"../sb-preview/runtime.js";var t=(a=>(a.Default="default",a.Info="info",a.Tertiary="tertiary",a.Success="success",a.Warning="warning",a.Danger="danger",a))(t||{}),i=(a=>(a.Flat="flat",a.Base="base",a.Pill="pill",a.Circle="circle",a))(i||{}),r=(a=>(a.Filled="filled",a.Outline="outline",a))(r||{}),l=(a=>(a.XS="xs",a.SM="sm",a.MD="md",a.LG="lg",a.XL="xl",a.XXL="xxl",a.XXXL="xxxl",a))(l||{});const le={key:0},te={key:1},ie={key:2,class:"label"},re={key:3},W=Q({__name:"BoBadge",props:{variant:{type:String,default:()=>t.Default},form:{type:String,default:()=>i.Pill},type:{type:String,default:()=>r.Filled},size:{type:String,default:()=>l.SM},label:{type:String,required:!1}},setup(a){const R=a,{variant:A,form:H,type:x,size:J,label:z}=U(R),K=Y(()=>{const e={};switch(A.value){case t.Default:e.default=!0;break;case t.Info:e.info=!0;break;case t.Success:e.success=!0;break;case t.Warning:e.warning=!0;break;case t.Danger:e.danger=!0;break;case t.Tertiary:e.tertiary=!0;break}switch(H.value){case i.Flat:e.flat=!0;break;case i.Base:e.base=!0;break;case i.Circle:e.circle=!0;break;case i.Pill:e.pill=!0;break}switch(x.value){case r.Filled:e.filled=!0;break;case r.Outline:e.outline=!0;break}switch(x.value){case r.Filled:e.filled=!0;break;case r.Outline:e.outline=!0;break}switch(J.value){case l.XS:e.xs=!0;break;case l.SM:e.sm=!0;break;case l.MD:e.md=!0;break;case l.LG:e.lg=!0;break;case l.XL:e.xl=!0;break;case l.XXL:e.xxl=!0;break;case l.XXXL:e.xxxl=!0;break}return e});return(e,ne)=>(o(),s("div",{class:ee(["bo-badge",K.value])},[e.$slots.prefix!=null?(o(),s("span",le,[y(e.$slots,"prefix",{},void 0,!0)])):d("",!0),e.$slots.body!=null?(o(),s("span",te,[y(e.$slots,"body",{},void 0,!0)])):d("",!0),w(z)!=null&&e.$slots.body==null?(o(),s("span",ie,Z(w(z)),1)):d("",!0),e.$slots.suffix!=null?(o(),s("span",re,[y(e.$slots,"suffix",{},void 0,!0)])):d("",!0)],2))}}),n=ae(W,[["__scopeId","data-v-855afefa"]]);W.__docgenInfo={exportName:"default",displayName:"BoBadge",description:"",tags:{},props:[{name:"variant",type:{name:"BadgeVariant"},defaultValue:{func:!0,value:"() => BadgeVariant.Default"}},{name:"form",type:{name:"BadgeForm"},defaultValue:{func:!0,value:"() => BadgeForm.Pill"}},{name:"type",type:{name:"BadgeType"},defaultValue:{func:!0,value:"() => BadgeType.Filled"}},{name:"size",type:{name:"BadgeSize"},defaultValue:{func:!0,value:"() => BadgeSize.SM"}},{name:"label",type:{name:"string"},required:!1}],slots:[{name:"prefix"},{name:"body"},{name:"suffix"}],sourceFiles:["/Volumes/Data/code/projects/bamboo/src/components/Badge/vue/BoBadge.vue"]};const ce={title:"Badge/bo-badge",component:n,tags:["autodocs"],argTypes:{variant:{description:"The variant of the badge.",table:{category:"props",subcategory:"optional",type:{summary:"BadgeVariant",detail:f(t,"BadgeVariant")},defaultValue:{summary:t.Default}},control:{type:"select"},options:Object.values(t)},form:{description:"The form of the badge.",table:{category:"props",subcategory:"optional",type:{summary:"BadgeForm",detail:f(i,"BadgeForm")},defaultValue:{summary:i.Base}},control:{type:"select"},options:Object.values(i)},type:{description:"The type of the badge.",table:{category:"props",subcategory:"optional",type:{summary:"BadgeType",detail:f(r,"BadgeType")},defaultValue:{summary:r.Filled}},control:{type:"select"},options:Object.values(r)},size:{description:"The size of the badge",table:{category:"props",subcategory:"optional",type:{summary:"BadgeSize",detail:f(l,"BadgeSize")},defaultValue:{summary:l.SM}},control:{type:"select"},options:Object.values(l)},label:{description:"The label of the badge if the `body` slot wasn't used",table:{category:"props",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}},prefix:{description:"The prefix slot of the badge",table:{category:"slots",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}},body:{description:"The body slot of the badge",table:{category:"slots",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}},suffix:{description:"The suffix slot of the badge",table:{category:"slots",subcategory:"optional",type:{summary:"string"},defaultValue:{summary:void 0}},control:{type:"text"}}}},m={args:{variant:t.Default,size:l.MD,label:"Label",form:i.Base}},p={args:{},render:()=>({components:{BoBadge:n},template:`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="Label" type="filled"/>
                <BoBadge variant="info" size="md" label="Label" type="filled"/>
                <BoBadge variant="tertiary" size="md" label="Label" type="filled"/>
                <BoBadge variant="success" size="md" label="Label" type="filled"/>
                <BoBadge variant="danger" size="md" label="Label" type="filled"/>
                <BoBadge variant="warning" size="md" label="Label" type="filled"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="filled" form="circle"/>
                <BoBadge variant="info" size="md" label="2" type="filled" form="circle" />
                <BoBadge variant="tertiary" size="md" label="3" type="filled" form="circle"/>
                <BoBadge variant="success" size="md" label="4" type="filled" form="circle"/>
                <BoBadge variant="danger" size="md" label="5" type="filled" form="circle"/>
                <BoBadge variant="warning" size="md" label="6" type="filled" form="circle"/>
            </div>
            Base	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="filled" form="base"/>
                <BoBadge variant="info" size="md" label="2" type="filled" form="base" />
                <BoBadge variant="tertiary" size="md" label="3" type="filled" form="base"/>
                <BoBadge variant="success" size="md" label="4" type="filled" form="base"/>
                <BoBadge variant="danger" size="md" label="5" type="filled" form="base"/>
                <BoBadge variant="warning" size="md" label="6" type="filled" form="base"/>
            </div>
            Flate	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="filled" form="flat"/>
                <BoBadge variant="info" size="md" label="2" type="filled" form="flat" />
                <BoBadge variant="tertiary" size="md" label="3" type="filled" form="flat"/>
                <BoBadge variant="success" size="md" label="4" type="filled" form="flat"/>
                <BoBadge variant="danger" size="md" label="5" type="filled" form="flat"/>
                <BoBadge variant="warning" size="md" label="6" type="filled" form="flat"/>
            </div>
        </div>
    `})},c={args:{},render:()=>({components:{BoBadge:n},template:`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="Label" type="outline"/>
                <BoBadge variant="info" size="md" label="Label" type="outline"/>
                <BoBadge variant="tertiary" size="md" label="Label" type="outline"/>
                <BoBadge variant="success" size="md" label="Label" type="outline"/>
                <BoBadge variant="danger" size="md" label="Label" type="outline"/>
                <BoBadge variant="warning" size="md" label="Label" type="outline"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="outline" form="circle"/>
                <BoBadge variant="info" size="md" label="2" type="outline" form="circle" />
                <BoBadge variant="tertiary" size="md" label="3" type="outline" form="circle"/>
                <BoBadge variant="success" size="md" label="4" type="outline" form="circle"/>
                <BoBadge variant="danger" size="md" label="5" type="outline" form="circle"/>
                <BoBadge variant="warning" size="md" label="6" type="outline" form="circle"/>
            </div>
            Base	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="outline" form="base"/>
                <BoBadge variant="info" size="md" label="2" type="outline" form="base" />
                <BoBadge variant="tertiary" size="md" label="3" type="outline" form="base"/>
                <BoBadge variant="success" size="md" label="4" type="outline" form="base"/>
                <BoBadge variant="danger" size="md" label="5" type="outline" form="base"/>
                <BoBadge variant="warning" size="md" label="6" type="outline" form="base"/>
            </div>
            Flate	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="outline" form="flat"/>
                <BoBadge variant="info" size="md" label="2" type="outline" form="flat" />
                <BoBadge variant="tertiary" size="md" label="3" type="outline" form="flat"/>
                <BoBadge variant="success" size="md" label="4" type="outline" form="flat"/>
                <BoBadge variant="danger" size="md" label="5" type="outline" form="flat"/>
                <BoBadge variant="warning" size="md" label="6" type="outline" form="flat"/>
            </div>
        </div>

    `})},g={args:{},render:()=>({components:{BoBadge:n},template:`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="xs" label="Label" />
            <BoBadge variant="default" size="md" label="Label" />
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
        Base
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" form="base" size="xs" label="1" />
            <BoBadge variant="default" form="base" size="md" label="2" />
            <BoBadge variant="default" form="base" size="md" label="3" />
            <BoBadge variant="default" form="base" size="lg" label="4" />
            <BoBadge variant="default" form="base" size="xl" label="5" />
        </div>
        Flat
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
        <BoBadge variant="default" form="flat" size="xs" label="1" />
        <BoBadge variant="default" form="flat" size="md" label="2" />
        <BoBadge variant="default" form="flat" size="md" label="3" />
        <BoBadge variant="default" form="flat" size="lg" label="4" />
        <BoBadge variant="default" form="flat" size="xl" label="5" />
    </div>
    </div>
    `})},B={args:{},render:()=>({components:{BoBadge:n,BoIcon:v},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #prefix>
                    <span style="margin-right: 5px; display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    `})},u={args:{},render:()=>({components:{BoBadge:n,BoIcon:v},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #body>
                    <span style="display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    `})},b={args:{},render:()=>({components:{BoBadge:n,BoIcon:v},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" size="md" label="Label">
                <template #suffix>
                    <span style="margin-left: 5px; display: flex; align-items: center;">
                        <BoIcon name="alert-circle" color="white" size="xs"  />
                    </span>
                </template>
            </BoBadge>
        </div>
    `})};var L,h,k;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: BadgeVariant.Default,
    size: BadgeSize.MD,
    label: 'Label',
    form: BadgeForm.Base
  }
}`,...(k=(h=m.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,F,_;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge
    },
    template: \`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="Label" type="filled"/>
                <BoBadge variant="info" size="md" label="Label" type="filled"/>
                <BoBadge variant="tertiary" size="md" label="Label" type="filled"/>
                <BoBadge variant="success" size="md" label="Label" type="filled"/>
                <BoBadge variant="danger" size="md" label="Label" type="filled"/>
                <BoBadge variant="warning" size="md" label="Label" type="filled"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="filled" form="circle"/>
                <BoBadge variant="info" size="md" label="2" type="filled" form="circle" />
                <BoBadge variant="tertiary" size="md" label="3" type="filled" form="circle"/>
                <BoBadge variant="success" size="md" label="4" type="filled" form="circle"/>
                <BoBadge variant="danger" size="md" label="5" type="filled" form="circle"/>
                <BoBadge variant="warning" size="md" label="6" type="filled" form="circle"/>
            </div>
            Base	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="filled" form="base"/>
                <BoBadge variant="info" size="md" label="2" type="filled" form="base" />
                <BoBadge variant="tertiary" size="md" label="3" type="filled" form="base"/>
                <BoBadge variant="success" size="md" label="4" type="filled" form="base"/>
                <BoBadge variant="danger" size="md" label="5" type="filled" form="base"/>
                <BoBadge variant="warning" size="md" label="6" type="filled" form="base"/>
            </div>
            Flate	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="filled" form="flat"/>
                <BoBadge variant="info" size="md" label="2" type="filled" form="flat" />
                <BoBadge variant="tertiary" size="md" label="3" type="filled" form="flat"/>
                <BoBadge variant="success" size="md" label="4" type="filled" form="flat"/>
                <BoBadge variant="danger" size="md" label="5" type="filled" form="flat"/>
                <BoBadge variant="warning" size="md" label="6" type="filled" form="flat"/>
            </div>
        </div>
    \`
  })
}`,...(_=(F=p.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var D,I,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoBadge
    },
    template: \`
        <div style="display: flex; flex-direction: column; gap: 20px;">
            Pill
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="Label" type="outline"/>
                <BoBadge variant="info" size="md" label="Label" type="outline"/>
                <BoBadge variant="tertiary" size="md" label="Label" type="outline"/>
                <BoBadge variant="success" size="md" label="Label" type="outline"/>
                <BoBadge variant="danger" size="md" label="Label" type="outline"/>
                <BoBadge variant="warning" size="md" label="Label" type="outline"/>
            </div>
            Circle
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="outline" form="circle"/>
                <BoBadge variant="info" size="md" label="2" type="outline" form="circle" />
                <BoBadge variant="tertiary" size="md" label="3" type="outline" form="circle"/>
                <BoBadge variant="success" size="md" label="4" type="outline" form="circle"/>
                <BoBadge variant="danger" size="md" label="5" type="outline" form="circle"/>
                <BoBadge variant="warning" size="md" label="6" type="outline" form="circle"/>
            </div>
            Base	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="outline" form="base"/>
                <BoBadge variant="info" size="md" label="2" type="outline" form="base" />
                <BoBadge variant="tertiary" size="md" label="3" type="outline" form="base"/>
                <BoBadge variant="success" size="md" label="4" type="outline" form="base"/>
                <BoBadge variant="danger" size="md" label="5" type="outline" form="base"/>
                <BoBadge variant="warning" size="md" label="6" type="outline" form="base"/>
            </div>
            Flate	
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <BoBadge variant="default" size="md" label="1" type="outline" form="flat"/>
                <BoBadge variant="info" size="md" label="2" type="outline" form="flat" />
                <BoBadge variant="tertiary" size="md" label="3" type="outline" form="flat"/>
                <BoBadge variant="success" size="md" label="4" type="outline" form="flat"/>
                <BoBadge variant="danger" size="md" label="5" type="outline" form="flat"/>
                <BoBadge variant="warning" size="md" label="6" type="outline" form="flat"/>
            </div>
        </div>

    \`
  })
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,X,C;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
            <BoBadge variant="default" size="md" label="Label" />
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
        Base
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoBadge variant="default" form="base" size="xs" label="1" />
            <BoBadge variant="default" form="base" size="md" label="2" />
            <BoBadge variant="default" form="base" size="md" label="3" />
            <BoBadge variant="default" form="base" size="lg" label="4" />
            <BoBadge variant="default" form="base" size="xl" label="5" />
        </div>
        Flat
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
        <BoBadge variant="default" form="flat" size="xs" label="1" />
        <BoBadge variant="default" form="flat" size="md" label="2" />
        <BoBadge variant="default" form="flat" size="md" label="3" />
        <BoBadge variant="default" form="flat" size="lg" label="4" />
        <BoBadge variant="default" form="flat" size="xl" label="5" />
    </div>
    </div>
    \`
  })
}`,...(C=(X=g.parameters)==null?void 0:X.docs)==null?void 0:C.source}}};var P,O,M;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(O=B.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var $,j,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var N,q,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ge=["Example","Filled","Outline","Sizes","Prefix","Body","Suffix"];export{u as Body,m as Example,p as Filled,c as Outline,B as Prefix,g as Sizes,b as Suffix,ge as __namedExportsOrder,ce as default};
