import{d as ta,t as ia,f as e,o as v,g as d,u as n,n as B,k as x,m as k,p as ra,l as oa}from"./vue.esm-bundler-jyss5HX4.js";import{_ as ea}from"./_plugin-vue_export-helper-x3n3nnut.js";import{s as C}from"./storybook-j7faMZma.js";var r=(t=>(t.Image="image",t.Initial="initial",t))(r||{}),o=(t=>(t.Rounded="rounded",t.Base="base",t.Flat="flat",t))(o||{}),i=(t=>(t.XS="xs",t.SM="sm",t.MD="md",t.LG="lg",t.XL="xl",t.XXL="xxl",t.XXXL="xxxl",t))(i||{}),h=(t=>(t.Top="top",t.Bottom="bottom",t))(h||{});const na=""+new URL("avatar-J8GqM2uk.png",import.meta.url).href,la={class:"bo-avatar__container"},sa=["src"],G=ta({__name:"BoAvatar",props:{src:{type:String,default:null},initial:{type:String,default:null},type:{type:String,default:()=>r.Image},variant:{type:String,default:()=>o.Rounded},size:{type:String,default:()=>i.MD},indicatorProps:{type:Object,default:()=>null},initialProps:{type:Object,default:()=>null}},setup(t){const U=t,{src:W,initial:z,type:b,variant:q,size:H,indicatorProps:s,initialProps:p}=ia(U),Q=e(()=>W.value??na),w=e(()=>{const a={};switch(b.value){case r.Image:a.image=!0;break;case r.Initial:a.initial=!0;break}switch(q.value){case o.Rounded:a.rounded=!0;break;case o.Base:a.base=!0;break;case o.Flat:a.flat=!0;break}switch(H.value){case i.XS:a.xs=!0;break;case i.SM:a.sm=!0;break;case i.MD:a.md=!0;break;case i.LG:a.lg=!0;break;case i.XL:a.xl=!0;break;case i.XXL:a.xxl=!0;break;case i.XXXL:a.xxxl=!0;break}return a}),Y=e(()=>s.value!=null),Z=e(()=>{var a;return{background:((a=s.value)==null?void 0:a.color)??"var(--black)"}}),$=e(()=>{var a,A;return{"background-color":((a=p.value)==null?void 0:a.backgroundColor)??"var(--gray-300)",color:((A=p==null?void 0:p.value)==null?void 0:A.fontColor)??"var(--gray-800)"}}),aa=e(()=>{const a={};if(s.value!=null)switch(s.value.position){case h.Bottom:a.bottom=!0;break;case h.Top:default:a.top=!0;break}return a});return(a,A)=>(v(),d("div",la,[n(b)===n(r).Image?(v(),d("img",{key:0,alt:"Avatar",src:Q.value,class:B(["bo-avatar__container__image",w.value])},null,10,sa)):x("",!0),n(b)===n(r).Initial&&n(z)!==null?(v(),d("div",{key:1,style:k($.value),class:B(["bo-avatar__container__image",w.value])},[ra("span",null,oa(n(z).toUpperCase()),1)],6)):x("",!0),Y.value?(v(),d("span",{key:2,style:k(Z.value),class:B(["bo-avatar__container__indicator",aa.value])},null,6)):x("",!0)]))}}),l=ea(G,[["__scopeId","data-v-720975bc"]]);G.__docgenInfo={exportName:"default",displayName:"BoAvatar",description:"",tags:{},props:[{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"initial",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"AvatarType"},defaultValue:{func:!0,value:"() => AvatarType.Image"}},{name:"variant",type:{name:"AvatarVariant"},defaultValue:{func:!0,value:"() => AvatarVariant.Rounded"}},{name:"size",type:{name:"AvatarSize"},defaultValue:{func:!0,value:"() => AvatarSize.MD"}},{name:"indicatorProps",type:{name:"AvatarIndicatorProps"},defaultValue:{func:!0,value:"() => null"}},{name:"initialProps",type:{name:"AvatarInitialProps"},defaultValue:{func:!0,value:"() => null"}}],sourceFiles:["/Volumes/Data/code/projects/bamboo/src/components/Avatar/vue/BoAvatar.vue"]};const ca={title:"Avatar/bo-avatar",component:l,tags:["autodocs"],argTypes:{src:{description:"The path to the img displayed in avatar in case the type is `Image`. If the type is `Image` but no `src` was provided a placeholder will be used",table:{category:"props",subcategory:"optional",type:{summary:"string"}},control:{type:"text"}},initial:{description:"The text to display in the avatar if the type is `Initial`",table:{category:"props",subcategory:"optional",type:{summary:"string"}},control:{type:"text"}},type:{description:"The type of the avatar (Image or initial)",table:{category:"props",subcategory:"optional",type:{summary:"AvatarType",detail:C(r,"AvatarType")},defaultValue:{summary:r.Image}},control:{type:"select"},options:Object.values(r)},variant:{description:"The variant of the avatar (rounded, base or flat)",table:{category:"props",subcategory:"optional",type:{summary:"AvatarVariant",detail:C(o,"AvatarVariant")},defaultValue:{summary:o.Rounded}},control:{type:"select"},options:Object.values(o)},size:{description:"The size of the avatar",table:{category:"props",subcategory:"optional",type:{summary:"AvatarSize",detail:C(i,"AvatarSize")},defaultValue:{summary:i.MD}},control:{type:"select"},options:Object.values(i)},indicatorProps:{description:"Color and position of the indicator",table:{category:"props",subcategory:"optional",type:{summary:"AvatarIndicatorProps",detail:"{ color: string; position: AvatarIndicatorPosition; }"},defaultValue:{summary:null}},control:{type:"object"}},initialProps:{description:"background and font color for the initial version",table:{category:"props",subcategory:"optional",type:{summary:"AvatarIndicatorProps",detail:"{ color: string; position: AvatarIndicatorPosition; }"},defaultValue:{summary:null}},control:{type:"object"}}}},c={args:{}},u={args:{},render:()=>({components:{BoAvatar:l},template:`
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
    `})},g={args:{},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar variant="base" />
            <BoAvatar
                variant="base"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="base"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
            <BoAvatar variant="base" type="initial" initial="JK" />
            <BoAvatar
                variant="base"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="base"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    `})},m={args:{},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar variant="flat" />
            <BoAvatar
                variant="flat"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="flat"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
            <BoAvatar variant="flat" type="initial" initial="JK" />
            <BoAvatar
                variant="flat"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="flat"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    `})},y={args:{},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
            <BoAvatar size="xs" />
            <BoAvatar size="sm" />
            <BoAvatar size="md" />
            <BoAvatar size="lg" />
            <BoAvatar size="xl" />
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="base"/>
            <BoAvatar size="sm" variant="base"/>
            <BoAvatar size="md" variant="base"/>
            <BoAvatar size="lg" variant="base"/>
            <BoAvatar size="xl" variant="base"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
        <BoAvatar size="xs" variant="flat"/>
        <BoAvatar size="sm" variant="flat"/>
        <BoAvatar size="md" variant="flat"/>
        <BoAvatar size="lg" variant="flat"/>
        <BoAvatar size="xl" variant="flat"/>
    </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
        <BoAvatar size="xs" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="sm" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="md" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="lg" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="xl" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
    </div>
    `})},f={args:{initial:"JK",type:r.Initial,initialProps:{backgroundColor:"var(--teal-600)",fontColor:"var(--white)"}},render:()=>({components:{BoAvatar:l},template:`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar
            initial="JK"
            type="initial"
            :initial-props="{backgroundColor:'var(--teal-600)',fontColor:'var(--white)'}"
        />
            <BoAvatar
                initial="JK"
                type="initial"
                variant="base"
                :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
            />
            <BoAvatar
            initial="JK"
            type="initial"
            variant="base"
            :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
        />
        </div>
        `})};var J,K,_;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {}
}`,...(_=(K=c.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var I,S,V;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var P,X,T;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoAvatar
    },
    template: \`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar variant="base" />
            <BoAvatar
                variant="base"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="base"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
            <BoAvatar variant="base" type="initial" initial="JK" />
            <BoAvatar
                variant="base"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="base"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    \`
  })
}`,...(T=(X=g.parameters)==null?void 0:X.docs)==null?void 0:T.source}}};var M,L,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: () => ({
    components: {
      BoAvatar
    },
    template: \`
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <BoAvatar variant="flat" />
            <BoAvatar
                variant="flat"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="flat"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
            <BoAvatar variant="flat" type="initial" initial="JK" />
            <BoAvatar
                variant="flat"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'top'}"
            />
            <BoAvatar
                variant="flat"
                type="initial"
                initial="JK"
                :indicator-props="{color:'var(--green-500)',position:'bottom'}"
            />
        </div>
    \`
  })
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var j,D,F;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
            <BoAvatar size="xs" variant="base"/>
            <BoAvatar size="sm" variant="base"/>
            <BoAvatar size="md" variant="base"/>
            <BoAvatar size="lg" variant="base"/>
            <BoAvatar size="xl" variant="base"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
        <BoAvatar size="xs" variant="flat"/>
        <BoAvatar size="sm" variant="flat"/>
        <BoAvatar size="md" variant="flat"/>
        <BoAvatar size="lg" variant="flat"/>
        <BoAvatar size="xl" variant="flat"/>
    </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="rounded" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--green-600)',fontColor:'var(--white)'}"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
            <BoAvatar size="xs" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="sm" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="md" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="lg" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
            <BoAvatar size="xl" variant="base" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 10px;">
        <BoAvatar size="xs" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="sm" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="md" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="lg" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
        <BoAvatar size="xl" variant="flat" type="initial" initial="JK" :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"/>
    </div>
    \`
  })
}`,...(F=(D=y.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var O,E,N;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
                variant="base"
                :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
            />
            <BoAvatar
            initial="JK"
            type="initial"
            variant="base"
            :initial-props="{backgroundColor:'var(--red-600)',fontColor:'var(--white)'}"
        />
        </div>
        \`
  })
}`,...(N=(E=f.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ua=["Example","Rounded","Base","Flat","MultiSize","InitialsWithColor"];export{g as Base,c as Example,m as Flat,f as InitialsWithColor,y as MultiSize,u as Rounded,ua as __namedExportsOrder,ca as default};
