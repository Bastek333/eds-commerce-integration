import{jsxs as M,jsx as c,Fragment as v}from"@dropins/tools/preact-jsx-runtime.js";import{classes as S}from"@dropins/tools/lib.js";import{Card as C,InLineAlert as w,Icon as L,Button as R,Field as O,Picker as q,Input as V,InputDate as g,Checkbox as F,TextArea as U}from"@dropins/tools/components.js";import{useRef as H,useState as N,useEffect as G,useCallback as A,useMemo as X}from"@dropins/tools/preact-hooks.js";import{Text as _,useText as x}from"@dropins/tools/i18n.js";import*as m from"@dropins/tools/preact-compat.js";import{memo as k,useCallback as D}from"@dropins/tools/preact-compat.js";import{events as P}from"@dropins/tools/event-bus.js";import{e as W}from"../chunks/getGuestOrder.js";import"@dropins/tools/fetch-graphql.js";const z=r=>m.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},m.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.8052 14.4968C10.8552 14.4968 9.9752 14.0268 9.4452 13.2368L9.4152 13.1868L9.3852 13.1268C8.1352 11.2268 7.5352 8.96681 7.6852 6.68681C7.7552 4.42681 9.6052 2.61681 11.8652 2.60681H12.0052C14.2752 2.47681 16.2152 4.21681 16.3452 6.47681C16.3452 6.55681 16.3452 6.62681 16.3452 6.70681C16.4852 8.94681 15.9052 11.1768 14.6852 13.0568L14.6052 13.1768C14.0552 13.9868 13.1352 14.4668 12.1652 14.4768H12.0052C11.9352 14.4768 11.8652 14.4868 11.7952 14.4868L11.8052 14.4968Z",stroke:"currentColor"}),m.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M4.3252 21.5469C4.3552 20.4169 4.4752 19.2869 4.6752 18.1769C4.8952 17.1669 6.4752 16.0269 8.9052 15.1569C9.2352 15.0369 9.4852 14.7869 9.5952 14.4569L9.8052 14.0269",stroke:"currentColor"}),m.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M14.425 14.4069L14.165 14.1569C14.375 14.5969 14.725 14.9569 15.155 15.1869C16.945 15.7969 19.125 16.9569 19.375 18.2069C19.585 19.3069 19.685 20.4269 19.675 21.5369",stroke:"currentColor"})),Z=r=>m.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},m.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),j=({onSubmit:r,loading:n,inLineAlert:u,fieldsConfig:o})=>M(C,{variant:"secondary",className:"dropin-order-search-form",children:[c("h2",{className:"dropin-order-search-form__title",children:c(_,{id:"Order.OrderSearchForm.title"})}),c("p",{children:c(_,{id:"Order.OrderSearchForm.description"})}),u.text?c(w,{"data-testid":"orderAlert",className:"dropin-order-search-form__alert",type:u.type,variant:"secondary",heading:u.text,icon:c(L,{source:Z})}):null,c(K,{className:"dropin-order-search-form__wrapper",name:"orderSearchForm",loading:n,fieldsConfig:o,onSubmit:r,children:c("div",{class:"dropin-order-search-form__button-container",children:c(R,{className:"dropin-order-search-form__button",size:"medium",variant:"primary",type:"submit",disabled:n,children:c(_,{id:"Order.OrderSearchForm.button"})},"logIn")})})]}),Y=r=>r.reduce((n,{code:u,required:o,defaultValue:a})=>(o&&(n[u]=a),n),{}),J=({fieldsConfig:r,onSubmit:n})=>{const{requiredFieldError:u}=x({requiredFieldError:"Order.Form.notifications.requiredFieldError"}),o=H(null),[a,i]=N({}),[h,l]=N({});G(()=>{if(!r||!r.length)return;const f=Y(r);i(f)},[r==null?void 0:r.length]);const p=A((f,e)=>{const t=r.find(s=>s.code===f);return t!=null&&t.required&&!e?u:""},[r,u]),b=A(f=>{const{name:e,value:t,type:d,checked:s}=f==null?void 0:f.target,E=d==="checkbox"?s:t;i($=>({...$,[e]:E}))},[]),T=A(f=>{const{name:e,value:t,type:d,checked:s}=f==null?void 0:f.target,E=d==="checkbox"?s:t;l($=>({...$,[e]:p(e,E)}))},[p]),I=A(f=>{f.preventDefault();let e=!0,t={},d=null;for(const[s,E]of Object.entries(a)){const $=p(s,E);$&&(t[s]=$,e=!1,d||(d=s))}if(l(t),d&&o.current){const s=o.current.elements.namedItem(d);s==null||s.focus()}n==null||n(f,e)},[a,p,n]);return{formData:a,errors:h,formRef:o,handleChange:b,handleBlur:T,handleSubmit:I}},B=k(({loading:r,values:n,fields:u=[],errors:o,className:a="",onChange:i,onBlur:h})=>{const l=`${a}__item`,p=D((e,t,d)=>{const s=e.options.map(E=>({text:E.label,value:E.value}));return c(O,{error:d,className:S([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${a}--${e.id}`,disabled:r,children:c(q,{name:e.id,floatingLabel:`${e.label} ${e.required?"*":""}`,placeholder:e.label,"aria-label":e.label,options:s,onBlur:h,handleSelect:i,value:t||e.defaultValue})},e.id)},[a,r,l,h,i]),b=D((e,t,d)=>{const s=e.id==="email",E=s?c(z,{}):void 0,$=s?"username":"";return c(O,{error:d,className:S([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e==null?void 0:e.is_hidden],e.className]),"data-testid":`${a}--${e.id}`,disabled:r,children:c(V,{"aria-label":e.label,"aria-required":e.required,autoComplete:$,icon:E,type:"text",name:e.id,value:t||e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:h,onChange:i})},e.id)},[a,r,l,h,i]),T=D((e,t,d)=>c(O,{error:d,className:S([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${a}--${e.id}`,disabled:r,children:c(g,{type:"text",name:e.id,value:t||e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:h,onChange:i})},e.id),[a,r,l,h,i]),I=D((e,t,d)=>c(O,{error:d,className:S([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${a}--${e.id}`,disabled:r,children:c(F,{name:e.id,checked:t||e.defaultValue,placeholder:e.label,label:`${e.label} ${e.required?"*":""}`,onBlur:h,onChange:i})},e.id),[a,r,l,h,i]),f=D((e,t,d)=>c(O,{error:d,className:S([l,`${l}--${e.id}`,[`${l}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${a}--${e.id}`,disabled:r,children:c(U,{type:"text",name:e.id,value:t===void 0?e.defaultValue:t,label:`${e.label} ${e.required?"*":""}`,onBlur:h,onChange:i})},e.id),[a,r,l,h,i]);return u.length?c(v,{children:u.map(e=>{var s;const t=(o==null?void 0:o[e.id])??"",d=(n==null?void 0:n[e.id])??"";switch(e.fieldType){case"TEXT":return(s=e==null?void 0:e.options)!=null&&s.length?p(e,d,t):b(e,d,t);case"MULTILINE":return b(e,d,t);case"SELECT":return p(e,d,t);case"DATE":return T(e,d,t);case"BOOLEAN":return I(e,d,t);case"TEXTAREA":return f(e,d,t);default:return null}})}):null}),K=k(({name:r,loading:n,children:u,className:o="defaultForm",fieldsConfig:a,onSubmit:i})=>{const{formData:h,errors:l,formRef:p,handleChange:b,handleBlur:T,handleSubmit:I}=J({fieldsConfig:a,onSubmit:i});return M("form",{className:S(["dropin-form",o]),onSubmit:I,name:r,ref:p,children:[c(B,{className:o,loading:n,fields:a,onChange:b,onBlur:T,errors:l,values:h}),u]})});var y=(r=>(r.BOOLEAN="BOOLEAN",r.DATE="DATE",r.DATETIME="DATETIME",r.DROPDOWN="DROPDOWN",r.FILE="FILE",r.GALLERY="GALLERY",r.HIDDEN="HIDDEN",r.IMAGE="IMAGE",r.MEDIA_IMAGE="MEDIA_IMAGE",r.MULTILINE="MULTILINE",r.MULTISELECT="MULTISELECT",r.PRICE="PRICE",r.SELECT="SELECT",r.TEXT="TEXT",r.TEXTAREA="TEXTAREA",r.UNDEFINED="UNDEFINED",r.VISUAL="VISUAL",r.WEIGHT="WEIGHT",r.EMPTY="",r))(y||{});const Q=r=>{if(!r)return null;const n=new FormData(r);if(r.querySelectorAll('input[type="checkbox"]').forEach(o=>{n.has(o.name)||n.set(o.name,"false"),o.checked&&n.set(o.name,"true")}),n&&typeof n.entries=="function"){const o=n.entries();if(o&&typeof o[Symbol.iterator]=="function")return JSON.parse(JSON.stringify(Object.fromEntries(o)))||{}}return{}},ee=()=>{const[r,n]=N({text:"",type:"success"}),[u,o]=N(!1),a=x({invalidSearch:"Order.Errors.invalidSearch",unknown:"Order.Errors.unknown",email:"Order.OrderSearchForm.email",postcode:"Order.OrderSearchForm.postcode",number:"Order.OrderSearchForm.orderNumber"}),i=X(()=>[{entity_type:"CUSTOMER_ADDRESS",is_unique:!1,label:a.email,options:[],defaultValue:"",fieldType:y.TEXT,className:"",required:!0,orderNumber:1,name:"email",id:"email",code:"email"},{entity_type:"CUSTOMER_ADDRESS",is_unique:!1,label:a.postcode,options:[],defaultValue:"",fieldType:y.TEXT,className:"",required:!0,orderNumber:2,name:"postcode",id:"postcode",code:"postcode"},{entity_type:"CUSTOMER_ADDRESS",is_unique:!1,label:a.number,options:[],defaultValue:"",fieldType:y.TEXT,className:"",required:!0,orderNumber:3,name:"number",id:"number",code:"number"}],[a]);return{onSubmit:A(async(l,p)=>{if(!p)return null;o(!0);const b=Q(l.target);await W(b).then(T=>{T||n({text:a.invalidSearch,type:"warning"}),P.emit("order/data",T)}).catch(()=>{n({text:a.unknown,type:"warning"})}).finally(()=>{o(!1)}),l.target.reset()},[a]),inLineAlert:r,loading:u,normalizeFieldsConfig:i}},ue=({className:r})=>{const{onSubmit:n,loading:u,inLineAlert:o,normalizeFieldsConfig:a}=ee();return c("div",{className:S(["dropin-order-search",r]),children:c(j,{onSubmit:n,loading:u,inLineAlert:o,fieldsConfig:a})})};export{ue as OrderSearch,ue as default};