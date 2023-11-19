import{d as Y,t as Z,f as o,j as v,k as c,u as n,l as b,p as B,n as z,s as $,q as aa}from"./vue.esm-bundler-xVzf3HLK.js";import{_ as ta,s as x}from"./storybook-C-1g1n2x.js";const ra=""+new URL("avatar-J8GqM2uk.png",import.meta.url).href,ia={class:"bo-avatar__container"},ea=["src"],E=Y({__name:"BoAvatar",props:{src:{type:String,default:null},initial:{type:String,default:null},type:{type:String,default:()=>i.Image},variant:{type:String,default:()=>e.Rounded},size:{type:String,default:()=>r.MD},indicatorProps:{type:Object,default:()=>null},initialProps:{type:Object,default:()=>null}},setup(a){const L=a,{src:N,initial:h,type:f,variant:X,size:F,indicatorProps:s,initialProps:p}=Z(L),G=o(()=>N.value??ra),k=o(()=>{const t={};switch(f.value){case i.Image:t.image=!0;break;case i.Initial:t.initial=!0;break}switch(X.value){case e.Rounded:t.rounded=!0;break;case e.Square:t.square=!0;break}switch(F.value){case r.XS:t.xs=!0;break;case r.SM:t.sm=!0;break;case r.MD:t.md=!0;break;case r.LG:t.lg=!0;break;case r.XL:t.xl=!0;break}return t}),W=o(()=>s.value!=null),U=o(()=>{var t;return{background:((t=s.value)==null?void 0:t.color)??"var(--black)"}}),H=o(()=>{var t,A;return{"background-color":((t=p.value)==null?void 0:t.backgroundColor)??"var(--gray-300)",color:((A=p==null?void 0:p.value)==null?void 0:A.fontColor)??"var(--gray-800)"}}),Q=o(()=>{const t={};if(s.value!=null)switch(s.value.position){case C.Bottom:t.bottom=!0;break;case C.Top:default:t.top=!0;break}return t});return(t,A)=>(v(),c("div",ia,[n(f)===n(i).Image?(v(),c("img",{key:0,alt:"Avatar",src:G.value,class:b(["bo-avatar",k.value])},null,10,ea)):B("",!0),n(f)===n(i).Initial&&n(h)!==null?(v(),c("div",{key:1,style:z(H.value),class:b(["bo-avatar",k.value])},[$("span",null,aa(n(h)),1)],6)):B("",!0),W.value?(v(),c("span",{key:2,style:z(U.value),class:b(["indicator",Q.value])},null,6)):B("",!0)]))}}),l=ta(E,[["__scopeId","data-v-3a25c820"]]);E.__docgenInfo={exportName:"default",displayName:"BoAvatar",description:"",tags:{},props:[{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"initial",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"AvatarType"},defaultValue:{func:!0,value:"() => AvatarType.Image"}},{name:"variant",type:{name:"AvatarVariant"},defaultValue:{func:!0,value:"() => AvatarVariant.Rounded"}},{name:"size",type:{name:"AvatarSize"},defaultValue:{func:!0,value:"() => AvatarSize.MD"}},{name:"indicatorProps",type:{name:"AvatarIndicatorProps"},defaultValue:{func:!0,value:"() => null"}},{name:"initialProps",type:{name:"AvatarInitialProps"},defaultValue:{func:!0,value:"() => null"}}],sourceFiles:["/Volumes/Data/code/projects/bamboo/src/components/Avatar/BoAvatar.vue"]};var i=(a=>(a.Image="image",a.Initial="initial",a))(i||{}),e=(a=>(a.Rounded="rounded",a.Square="square",a.Flat="flat",a))(e||{}),r=(a=>(a.XS="xs",a.SM="sm",a.MD="md",a.LG="lg",a.XL="xl",a))(r||{}),C=(a=>(a.Top="top",a.Bottom="bottom",a))(C||{});const la={title:"Avatar/bo-avatar",component:l,tags:["autodocs"],argTypes:{src:{description:"The path to the img displayed in avatar in case the type is `Image`. If the type is `Image` but no `src` was provided a placeholder will be used",table:{category:"props",subcategory:"optional",type:{summary:"string"}},control:{type:"text"}},initial:{description:"The text to display in the avatar if the type is `Initial`",table:{category:"props",subcategory:"optional",type:{summary:"string"}},control:{type:"text"}},type:{description:"The type of the avatar (Image or initial)",table:{category:"props",subcategory:"optional",type:{summary:"AvatarType",detail:x(i,"AvatarType")},defaultValue:{summary:i.Image}},control:{type:"select"},options:Object.values(i)},variant:{description:"The variant of the avatar (rounded or square)",table:{category:"props",subcategory:"optional",type:{summary:"AvatarVariant",detail:x(e,"AvatarVariant")},defaultValue:{summary:e.Rounded}},control:{type:"select"},options:Object.values(e)},size:{description:"The size of the avatar",table:{category:"props",subcategory:"optional",type:{summary:"AvatarSize",detail:x(r,"AvatarSize")},defaultValue:{summary:r.MD}},control:{type:"select"},options:Object.values(r)},indicatorProps:{description:"Color and position of the indicator",table:{category:"props",subcategory:"optional",type:{summary:"AvatarIndicatorProps",detail:"{ color: string; position: AvatarIndicatorPosition; }"},defaultValue:{summary:null}},control:{type:"object"}},initialProps:{description:"background and font color for the initial version",table:{category:"props",subcategory:"optional",type:{summary:"AvatarIndicatorProps",detail:"{ color: string; position: AvatarIndicatorPosition; }"},defaultValue:{summary:null}},control:{type:"object"}}}},d={args:{}},u={args:{},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar />
            <BoAvatar :indicator-props="{color:'var(--green-500)',position:'top'}" />
            <BoAvatar :indicator-props="{color:'var(--green-500)',position:'bottom'}" />
            <BoAvatar type="initial" initial="JK" />
            <BoAvatar
                initial="JK"
                type="initial"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                initial="JK"
                type="initial"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    `})},m={args:{},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar variant="square" />
            <BoAvatar
                variant="square"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="square"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
            <BoAvatar variant="square" type="initial" initial="JK" />
            <BoAvatar
                variant="square"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="square"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    `})},g={args:{},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoAvatar size="xs" />
            <BoAvatar size="sm" />
            <BoAvatar size="md" />
            <BoAvatar size="lg" />
            <BoAvatar size="xl" />
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="square"/>
            <BoAvatar size="sm" variant="square"/>
            <BoAvatar size="md" variant="square"/>
            <BoAvatar size="lg" variant="square"/>
            <BoAvatar size="xl" variant="square"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        </div>
    `})},y={args:{initial:"JK",type:i.Initial,initialProps:{backgroundColor:"var(--teal-600)",fontColor:"var(--white)"}},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar
            initial="JK"
            type="initial"
            :initial-props="{backgroundColor:'var(--teal-600)',fontColor:'var(--white)'}"
        />
            <BoAvatar
                initial="JK"
                type="initial"
                variant="square"
                :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
            />
        </div>
        `})};var w,q,J;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,I,S;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoAvatar
    },
    template: \`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar />
            <BoAvatar :indicator-props="{color:'var(--green-500)',position:'top'}" />
            <BoAvatar :indicator-props="{color:'var(--green-500)',position:'bottom'}" />
            <BoAvatar type="initial" initial="JK" />
            <BoAvatar
                initial="JK"
                type="initial"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                initial="JK"
                type="initial"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    \`
  })
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,V,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoAvatar
    },
    template: \`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar variant="square" />
            <BoAvatar
                variant="square"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="square"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
            <BoAvatar variant="square" type="initial" initial="JK" />
            <BoAvatar
                variant="square"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="square"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    \`
  })
}`,...(P=(V=m.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var T,M,j;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoAvatar
    },
    template: \`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoAvatar size="xs" />
            <BoAvatar size="sm" />
            <BoAvatar size="md" />
            <BoAvatar size="lg" />
            <BoAvatar size="xl" />
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="square"/>
            <BoAvatar size="sm" variant="square"/>
            <BoAvatar size="md" variant="square"/>
            <BoAvatar size="lg" variant="square"/>
            <BoAvatar size="xl" variant="square"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="square" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        </div>
    \`
  })
}`,...(j=(M=g.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var R,D,O;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    initial: 'JK',
    type: AvatarType.Initial,
    initialProps: {
      backgroundColor: 'var(--teal-600)',
      fontColor: 'var(--white)'
    }
  },
  render: () => ({
    components: {
      BoAvatar
    },
    template: \`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar
            initial="JK"
            type="initial"
            :initial-props="{backgroundColor:'var(--teal-600)',fontColor:'var(--white)'}"
        />
            <BoAvatar
                initial="JK"
                type="initial"
                variant="square"
                :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
            />
        </div>
        \`
  })
}`,...(O=(D=y.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const sa=["Example","Rounded","Square","MultiSize","InitialsWithColor"];export{d as Example,y as InitialsWithColor,g as MultiSize,u as Rounded,m as Square,sa as __namedExportsOrder,la as default};
//# sourceMappingURL=BoAvatar.stories-bdX8TLhL.js.map
