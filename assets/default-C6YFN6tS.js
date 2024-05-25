import{d as $,c as i,o as T,a as U,b as I,p as V,m as A,e as q,f as L,g as Z,h as S,i as G,t as C,s as _,u as ie,j as Y,k as x,l,n as B,q as E,w as p,F as ue,r as ce,v as J,x as de,y as ve,z as me,A as K,B as fe,C as W,D as he,E as w,G as ge,H as be,I as ye,J as _e,K as pe,L as Ve,M as F,V as Se,N as xe,O as ke}from"./index-hIOiGxGi.js";import{m as X,a as Q,b as ee,u as te,c as ae,d as le,e as oe,V as j,f as Be,g as R}from"./index-C_MqMqWE.js";import{V as Ie,m as Te,a as Ce}from"./index-e_vQTdwD.js";const z=(e,n)=>{const t=e.__vccOpts||e;for(const[r,a]of n)t[r]=a;return t},He=$({name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},setup(e){return{symbolId:i(()=>`#${e.prefix}-${e.name}`)}}}),Ne={"aria-hidden":"true"},Pe=["href","fill"];function we(e,n,t,r,a,o){return T(),U("svg",Ne,[I("use",{href:e.symbolId,fill:e.color},null,8,Pe)])}const Ae=z(He,[["render",we]]),Le=V({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...X(),...A(),...Q(),...q(),...ee(),...L({tag:"footer"}),...Z()},"VFooter"),Re=S()({name:"VFooter",props:Le(),setup(e,n){let{slots:t}=n;const{themeClasses:r}=G(e),{backgroundColorClasses:a,backgroundColorStyles:o}=te(C(e,"color")),{borderClasses:f}=ae(e),{elevationClasses:d}=le(e),{roundedClasses:h}=oe(e),g=_(32),{resizeRef:c}=ie(b=>{b.length&&(g.value=b[0].target.clientHeight)}),m=i(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:v,layoutIsReady:u}=Y({id:e.name,order:i(()=>parseInt(e.order,10)),position:i(()=>"bottom"),layoutSize:m,elementSize:i(()=>e.height==="auto"?void 0:m.value),active:i(()=>e.app),absolute:C(e,"absolute")});return x(()=>l(e.tag,{ref:c,class:["v-footer",r.value,a.value,f.value,d.value,h.value,e.class],style:[o.value,e.app?v.value:{height:B(e.height)},e.style]},t)),e.app?u:{}}}),$e=e=>(ve("data-v-dbfc302a"),e=e(),me(),e),Ee={key:"ClassIsland",href:"https://github.com/HelloWRC/ClassIsland/blob/master/",title:"ClassIsland",class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},Fe=["href","title"],ze={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},De=$e(()=>I("span",{class:"d-none d-sm-inline-block"},"DSZ Dev Team",-1)),Me=$({__name:"AppFooter",setup(e){const n=[{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:"svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:"mdi-discord",href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(t,r)=>(T(),E(Re,{height:"40",app:""},{default:p(()=>[I("a",Ee,[l(j,{size:24},{default:p(()=>[l(Ae,{name:"logo-cilogo"})]),_:1})]),(T(),U(ue,null,ce(n,a=>I("a",{key:a.title,href:a.href,title:a.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[l(j,{icon:a.icon,size:a.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,Fe)),64)),I("div",ze,[J(" © 2023-"+de(new Date().getFullYear())+" ",1),De])]),_:1}))}}),je=z(Me,[["__scopeId","data-v-dbfc302a"]]),ne=V({text:String,...A(),...L()},"VToolbarTitle"),se=S()({name:"VToolbarTitle",props:ne(),setup(e,n){let{slots:t}=n;return x(()=>{const r=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[r&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Oe=[null,"prominent","default","comfortable","compact"],re=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Oe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...X(),...A(),...Q(),...ee(),...L({tag:"header"}),...Z()},"VToolbar"),O=S()({name:"VToolbar",props:re(),setup(e,n){var u;let{slots:t}=n;const{backgroundColorClasses:r,backgroundColorStyles:a}=te(C(e,"color")),{borderClasses:o}=ae(e),{elevationClasses:f}=le(e),{roundedClasses:d}=oe(e),{themeClasses:h}=G(e),{rtlClasses:g}=K(),c=_(!!(e.extended||(u=t.extension)!=null&&u.call(t))),m=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=i(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return fe({VBtn:{variant:"text"}}),x(()=>{var N;const b=!!(e.title||t.title),k=!!(t.image||e.image),H=(N=t.extension)==null?void 0:N.call(t);return c.value=!!(e.extended||H),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,o.value,f.value,d.value,h.value,g.value,e.class],style:[a.value,e.style]},{default:()=>[k&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(R,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(Be,{key:"image-img",cover:!0,src:e.image},null)]),l(R,{defaults:{VTabs:{height:B(m.value)}}},{default:()=>{var P,s,y;return[l("div",{class:"v-toolbar__content",style:{height:B(m.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(P=t.prepend)==null?void 0:P.call(t)]),b&&l(se,{key:"title",text:e.title},{text:t.title}),(s=t.default)==null?void 0:s.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(y=t.append)==null?void 0:y.call(t)])])]}}),l(R,{defaults:{VTabs:{height:B(v.value)}}},{default:()=>[l(Ie,null,{default:()=>[c.value&&l("div",{class:"v-toolbar__extension",style:{height:B(v.value)}},[H])]})]})]})}),{contentHeight:m,extensionHeight:v}}}),Ue=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=n;let r=0;const a=W(null),o=_(0),f=_(0),d=_(0),h=_(!1),g=_(!1),c=i(()=>Number(e.scrollThreshold)),m=i(()=>he((c.value-o.value)/c.value||0)),v=()=>{const u=a.value;!u||t&&!t.value||(r=o.value,o.value="window"in u?u.pageYOffset:u.scrollTop,g.value=o.value<r,d.value=Math.abs(o.value-c.value))};return w(g,()=>{f.value=f.value||o.value}),w(h,()=>{f.value=0}),ge(()=>{w(()=>e.scrollTarget,u=>{var k;const b=u?document.querySelector(u):window;b&&b!==a.value&&((k=a.value)==null||k.removeEventListener("scroll",v),a.value=b,a.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),be(()=>{var u;(u=a.value)==null||u.removeEventListener("scroll",v)}),t&&w(t,v,{immediate:!0}),{scrollThreshold:c,currentScroll:o,currentThreshold:d,isScrollActive:h,scrollRatio:m,isScrollingUp:g,savedScroll:f}}const Ze=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...re(),...q(),...Ue(),height:{type:[Number,String],default:64}},"VAppBar"),Ge=S()({name:"VAppBar",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const r=W(),a=ye(e,"modelValue"),o=i(()=>{var y;const s=new Set(((y=e.scrollBehavior)==null?void 0:y.split(" "))??[]);return{hide:s.has("hide"),fullyHide:s.has("fully-hide"),inverted:s.has("inverted"),collapse:s.has("collapse"),elevate:s.has("elevate"),fadeImage:s.has("fade-image")}}),f=i(()=>{const s=o.value;return s.hide||s.fullyHide||s.inverted||s.collapse||s.elevate||s.fadeImage||!a.value}),{currentScroll:d,scrollThreshold:h,isScrollingUp:g,scrollRatio:c}=qe(e,{canScroll:f}),m=i(()=>o.value.hide||o.value.fullyHide),v=i(()=>e.collapse||o.value.collapse&&(o.value.inverted?c.value>0:c.value===0)),u=i(()=>e.flat||o.value.fullyHide&&!a.value||o.value.elevate&&(o.value.inverted?d.value>0:d.value===0)),b=i(()=>o.value.fadeImage?o.value.inverted?1-c.value:c.value:void 0),k=i(()=>{var D,M;const s=Number(((D=r.value)==null?void 0:D.contentHeight)??e.height),y=Number(((M=r.value)==null?void 0:M.extensionHeight)??0);return m.value?d.value<h.value||o.value.fullyHide?s+y:s:s+y});_e(i(()=>!!e.scrollBehavior),()=>{pe(()=>{m.value?o.value.inverted?a.value=d.value>h.value:a.value=g.value||d.value<h.value:a.value=!0})});const{ssrBootStyles:H}=Ve(),{layoutItemStyles:N,layoutIsReady:P}=Y({id:e.name,order:i(()=>parseInt(e.order,10)),position:C(e,"location"),layoutSize:k,elementSize:_(void 0),active:a,absolute:C(e,"absolute")});return x(()=>{const s=O.filterProps(e);return l(O,F({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...N.value,"--v-toolbar-image-opacity":b.value,height:void 0,...H.value},e.style]},s,{collapse:v.value,flat:u.value}),t)}),P}}),Ye=V({...Te({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Je=S()({name:"VAppBarNavIcon",props:Ye(),setup(e,n){let{slots:t}=n;return x(()=>l(Ce,F(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Ke=S()({name:"VAppBarTitle",props:ne(),setup(e,n){let{slots:t}=n;return x(()=>l(se,F(e,{class:"v-app-bar-title"}),t)),{}}}),We={};function Xe(e,n){return T(),E(Ge,{elevation:2},{prepend:p(()=>[l(Je)]),default:p(()=>[l(Ke,null,{default:p(()=>[J("迁移到ClassIsland")]),_:1})]),_:1})}const Qe=z(We,[["render",Xe]]),et=V({fluid:{type:Boolean,default:!1},...A(),...L()},"VContainer"),tt=S()({name:"VContainer",props:et(),setup(e,n){let{slots:t}=n;const{rtlClasses:r}=K();return x(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},r.value,e.class],style:e.style},t)),{}}}),nt=$({__name:"default",setup(e){return(n,t)=>{const r=Qe,a=xe("router-view"),o=je;return T(),E(Se,null,{default:p(()=>[l(r),l(ke,null,{default:p(()=>[l(tt,{class:"pa-4 pa-sm-6 pa-md-8",style:{"max-width":"960px"}},{default:p(()=>[l(a)]),_:1})]),_:1}),l(o)]),_:1})}}});export{nt as default};
