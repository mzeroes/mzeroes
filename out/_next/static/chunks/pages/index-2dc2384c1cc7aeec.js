(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3405)}])},3405:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return K}});var n=t(5893),a=t(5161),i=t(7747),o=t(2757),s=t(4e3),l=t(6554),d=t(6914),c=(0,l.G)(function(e,r){let{templateAreas:t,gap:a,rowGap:i,columnGap:o,column:s,row:l,autoFlow:c,autoRows:m,templateRows:x,autoColumns:h,templateColumns:f,...g}=e;return(0,n.jsx)(d.m.div,{ref:r,__css:{display:"grid",gridTemplateAreas:t,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:h,gridColumn:s,gridRow:l,gridAutoFlow:c,gridAutoRows:m,gridTemplateRows:x,gridTemplateColumns:f},...g})});c.displayName="Grid";var m=t(8940),x=t(8925),h=t(5432),f=Object.freeze(["base","sm","md","lg","xl","2xl"]);function g(e,r){return Array.isArray(e)?e.map(e=>null===e?null:r(e)):(0,h.Kn)(e)?Object.keys(e).reduce((t,n)=>(t[n]=r(e[n]),t),{}):null!=e?r(e):null}var u=(0,l.G)(function(e,r){let{columns:t,spacingX:a,spacingY:i,spacing:o,minChildWidth:s,...l}=e,d=(0,m.F)(),h=s?g(s,e=>{let r=(0,x.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(d);return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}):g(t,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,n.jsx)(c,{ref:r,gap:o,columnGap:a,rowGap:i,templateColumns:h,...l})});u.displayName="SimpleGrid";var p=t(6948),j=t(3547),b=t(7294),y=t(9583),k=t(7735);let w={java:y.zEo,javascript:y.zPb,"spring boot, hibernate":k.Ciz,"reactjs, react native, nextjs, redux":y.huN,"nodejs, expressjs, nestjs":y.t0,mongodb:k.t$b,postgresql:k.u4B,"linux, ci/cd with docker & jenkins":y._Aq,"aws (ec2, ecs, rds, s3, cloudfront, elastic cache etc.)":y.UC$};var v=()=>{let{colorMode:e}=(0,a.If)();return(0,n.jsx)(i.xu,{py:8,color:"light"===e?"black":"white",children:(0,n.jsxs)(i.xu,{children:[(0,n.jsx)(o.X,{as:"h1",size:"lg",mb:4,children:(0,n.jsx)(i.xu,{as:"span",bgGradient:"light"===e?"linear(to-r, #6B46C1, #205AD5)":"linear(to-r, #A78BFA, #9F7AEA)",bgClip:"text",display:"inline",children:j.HS})}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-3,mb:7,children:j.F6}),(0,n.jsx)(u,{columns:[1,2,3],spacing:5,children:Object.entries(j.nb).map((e,r)=>(0,n.jsxs)(b.Fragment,{children:[(0,n.jsxs)(s.x,{casing:"capitalize",fontWeight:"bold",children:[e[0],":"]}),e[1].map((e,r)=>(0,n.jsxs)(i.xu,{display:"flex",alignItems:"center",borderRadius:"md",children:[(0,n.jsx)(p.J,{as:w["string"==typeof e[0]?e[0].toLowerCase():""],mr:2}),(0,n.jsx)(s.x,{children:e[0]})]},r))]},r))})]})})},z=t(7970),A=()=>{let{colorMode:e}=(0,a.If)();return(0,n.jsx)(i.xu,{py:8,color:"light"===e?"black":"white",children:(0,n.jsxs)(i.xu,{children:[(0,n.jsx)(o.X,{as:"h1",size:"lg",mb:4,children:(0,n.jsx)(i.xu,{as:"span",bgGradient:"light"===e?"linear(to-r, #6B46C1, #205AD5)":"linear(to-r, #A78BFA, #9F7AEA)",bgClip:"text",display:"inline",children:j.fg})}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-3,mb:7,children:j.ri}),j.F$.map((e,r)=>(0,n.jsx)(s.x,{fontSize:"md",mb:4,children:e},r)),(0,n.jsx)(s.x,{fontSize:"md",children:j.m4})]})})},F=t(6465),_=t.n(F),S=t(3717),C=t(2883),E=t(5675),D=t.n(E),N=t(6336),B=e=>(0,n.jsx)(d.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});B.displayName="StackItem";var G=(0,l.G)((e,r)=>{let{isInline:t,direction:a,align:i,justify:o,spacing:s="0.5rem",wrap:l,children:c,divider:m,className:x,shouldWrapChildren:f,...u}=e,p=t?"row":null!=a?a:"column",j=(0,b.useMemo)(()=>(function(e){let{spacing:r,direction:t}=e,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":g(t,e=>n[e])}})({spacing:s,direction:p}),[s,p]),y=!!m,k=!f&&!y,w=(0,b.useMemo)(()=>{let e=b.Children.toArray(c).filter(e=>(0,b.isValidElement)(e));return k?e:e.map((r,t)=>{let a=void 0!==r.key?r.key:t,i=t+1===e.length,o=(0,n.jsx)(B,{children:r},a),s=f?o:r;if(!y)return s;let l=(0,b.cloneElement)(m,{__css:j});return(0,n.jsxs)(b.Fragment,{children:[s,i?null:l]},a)})},[m,j,y,k,f,c]),v=(0,h.cx)("chakra-stack",x);return(0,n.jsx)(d.m.div,{ref:r,display:"flex",alignItems:i,justifyContent:o,flexDirection:p,flexWrap:l,gap:y?void 0:s,className:v,...u,children:w})});G.displayName="Stack";var W=e=>{let{link:r,text:t}=e,{colorMode:o}=(0,a.If)(),s=function(e,r){var t;let n=(0,h.Kn)(r)?r:{fallback:null!=r?r:"base"},a=function(e){var r,t;let n=(0,h.Kn)(e)?e:{fallback:null!=e?e:"base"},a=(0,m.F)(),i=a.__breakpoints.details.map(({minMaxQuery:e,breakpoint:r})=>({breakpoint:r,query:e.replace("@media screen and ","")})),o=i.map(e=>e.breakpoint===n.fallback),s=function(e,r={}){let{ssr:t=!0,fallback:n}=r,{getWindow:a}=(0,N.O)(),i=Array.isArray(e)?e:[e],o=Array.isArray(n)?n:[n];o=o.filter(e=>null!=e);let[s,l]=(0,b.useState)(()=>i.map((e,r)=>({media:e,matches:t?!!o[r]:a().matchMedia(e).matches})));return(0,b.useEffect)(()=>{let e=a();l(i.map(r=>({media:r,matches:e.matchMedia(r).matches})));let r=i.map(r=>e.matchMedia(r)),t=e=>{l(r=>r.slice().map(r=>r.media===e.media?{...r,matches:e.matches}:r))};return r.forEach(e=>{"function"==typeof e.addListener?e.addListener(t):e.addEventListener("change",t)}),()=>{r.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(t):e.removeEventListener("change",t)})}},[a]),s.map(e=>e.matches)}(i.map(e=>e.query),{fallback:o,ssr:n.ssr}),l=s.findIndex(e=>!0==e);return null!=(t=null==(r=i[l])?void 0:r.breakpoint)?t:n.fallback}(n),i=(0,m.F)();if(!a)return;let o=Array.from((null==(t=i.__breakpoints)?void 0:t.keys)||[]),s=Array.isArray(e)?Object.fromEntries(Object.entries(function(e,r=f){let t={};return e.forEach((e,n)=>{let a=r[n];null!=e&&(t[a]=e)}),t}(e,o)).map(([e,r])=>[e,r])):e;return function(e,r,t=f){let n=Object.keys(e).indexOf(r);if(-1!==n)return e[r];let a=t.indexOf(r);for(;a>=0;){let r=t[a];if(e.hasOwnProperty(r)){n=a;break}a-=1}if(-1!==n){let r=t[n];return e[r]}}(s,a,o)}({base:!0,md:!1}),l="light"===o?"white":"green.800";return(0,n.jsx)(i.xu,{bg:"light"===o?"teal.500":"teal.200",color:l,py:3,textAlign:"center",fontSize:{base:"sm",md:"md"},fontWeight:"bold",borderRadius:"10px",mt:4,children:s?(0,n.jsxs)(G,{spacing:1,align:"center",justify:"center",children:[(0,n.jsxs)(S.k,{align:"center",children:[(0,n.jsx)(i.xu,{as:y.ltd,size:"1.5em",mr:1}),(0,n.jsx)(i.xu,{as:"span",children:t})]}),(0,n.jsx)(C.r,{color:l,textDecoration:"underline",href:r,target:"_blank",rel:"noopener noreferrer",children:"Connect with Me"})]}):(0,n.jsxs)(S.k,{align:"center",justify:"center",children:[(0,n.jsx)(i.xu,{as:y.ltd,mr:1}),t," ",(0,n.jsx)(i.xu,{as:"span",ml:1,children:(0,n.jsx)(C.r,{color:l,textDecoration:"underline",href:r,target:"_blank",rel:"noopener noreferrer",children:"Connect with Me"})})]})})},L=()=>{let{colorMode:e}=(0,a.If)(),[r,t]=(0,b.useState)(!1);return(0,n.jsxs)(S.k,{direction:{base:"column",md:"row"},align:{base:"center",md:"center"},justify:"center",maxHeight:{base:"auto",md:"75vh",lg:"90vh"},p:{base:4,md:0},mb:{base:8,md:0,lg:"20px"},mt:{base:8,md:0,lg:"20px"},color:"light"===e?"black":"white",children:[(0,n.jsx)(S.k,{direction:"column",align:"center",justify:"center",flex:{base:"none",md:2},mb:{base:4,md:0},children:(0,n.jsx)("div",{style:{width:"200px",height:"200px",boxShadow:"lg",overflow:"hidden",position:"relative",transform:r?"translateY(-5px)":"none",transition:"transform 0.3s ease"},onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"jsx-19cf844254373528 profile-image",children:(0,n.jsx)(i.xu,{width:"200px",height:"200px",borderRadius:"50%",boxShadow:"lg",overflow:"hidden",position:"relative",className:"profile-image",children:(0,n.jsx)(D(),{src:"/assets/main.jpeg",alt:j.D4,layout:"fill",objectFit:"cover"})})})}),(0,n.jsxs)(i.xu,{flex:{base:1,md:8},ml:{base:0,md:"lg"},mt:{base:"lg",md:"16px",lg:"16px"},mb:{base:"16px",md:"24px",lg:"48px"},children:[(0,n.jsxs)(o.X,{as:"h1",size:"xl",mb:4,children:[(0,n.jsx)("span",{role:"img","aria-label":"Waving Hand",className:"jsx-19cf844254373528 wave",children:"\uD83D\uDC4B"})," ",(0,n.jsx)(i.xu,{as:"span",bgGradient:"light"===e?"linear(to-r, #6B46C1, #205AD5)":"linear(to-r, #A78BFA, #9F7AEA)",bgClip:"text",display:"inline",children:j.TN})]}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:"5px",mb:"2px",children:j.WL}),(0,n.jsx)(s.x,{fontSize:"lg",children:j.eF}),(0,n.jsx)(s.x,{mt:4,fontSize:"md",color:"light"===e?"#6B46C1":"#A78BFA",children:j.Sp}),(0,n.jsx)(s.x,{fontSize:"xs",color:"gray.500",mt:4,children:j.OD.map((e,r)=>e.link&&e.name?(0,n.jsx)(C.r,{href:e.link||"",isExternal:!0,textDecoration:"underline",children:e.name||""},r):(0,n.jsx)(b.Fragment,{},r))}),(0,n.jsx)(W,{link:j.ZY,text:j.Tf})]}),(0,n.jsx)(_(),{id:"19cf844254373528",children:".container.jsx-19cf844254373528{padding:0 .5rem}.wave.jsx-19cf844254373528{display:inline-block;-webkit-animation-name:wave-animation;-moz-animation-name:wave-animation;-o-animation-name:wave-animation;animation-name:wave-animation;-webkit-animation-duration:1.5s;-moz-animation-duration:1.5s;-o-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes wave-animation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}75%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-moz-keyframes wave-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}25%{-moz-transform:rotate(10deg);transform:rotate(10deg)}50%{-moz-transform:rotate(0deg);transform:rotate(0deg)}75%{-moz-transform:rotate(-10deg);transform:rotate(-10deg)}100%{-moz-transform:rotate(0deg);transform:rotate(0deg)}}@-o-keyframes wave-animation{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}25%{-o-transform:rotate(10deg);transform:rotate(10deg)}50%{-o-transform:rotate(0deg);transform:rotate(0deg)}75%{-o-transform:rotate(-10deg);transform:rotate(-10deg)}100%{-o-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes wave-animation{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(10deg);-moz-transform:rotate(10deg);-o-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}75%{-webkit-transform:rotate(-10deg);-moz-transform:rotate(-10deg);-o-transform:rotate(-10deg);transform:rotate(-10deg)}100%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}}"})]})},[I,T]=(0,t(6071).eC)("Card"),O=t(3179),M=t(7440),P=(0,l.G)(function(e,r){let{className:t,children:a,direction:i="column",justify:o,align:s,...l}=(0,O.Lr)(e),c=(0,M.jC)("Card",e);return(0,n.jsx)(d.m.div,{ref:r,className:(0,h.cx)("chakra-card",t),__css:{display:"flex",flexDirection:i,justifyContent:o,alignItems:s,position:"relative",minWidth:0,wordWrap:"break-word",...c.container},...l,children:(0,n.jsx)(I,{value:c,children:a})})}),X=(0,l.G)(function(e,r){let{className:t,...a}=e,i=T();return(0,n.jsx)(d.m.div,{ref:r,className:(0,h.cx)("chakra-card__body",t),__css:i.body,...a})}),R=t(7161),U=e=>{let{title:r,subtitle:t,description:l,details:d,imageUrl:c,demoUrl:m,githubUrl:x,tag:h}=e,{colorMode:f}=(0,a.If)(),[g,u]=(0,b.useState)(!1),p="light"===f?"black":"gray.400";return(0,n.jsxs)(P,{className:"project-card",width:"100%",borderRadius:"lg",overflow:"hidden",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[(0,n.jsxs)(i.xu,{position:"relative",children:[(0,n.jsx)(s.x,{position:"absolute",top:"2",right:"2",fontSize:"xs",color:{"Personal Project":"#056602",Stealth:"#390B66",Featured:"#653E02"}[h]||"black",bg:{"Personal Project":"linear-gradient(to right, #9EFF9C, #9AFEDC)",Stealth:"linear-gradient(to right, #D3A4FF, #F2A5FD)",Featured:"linear-gradient(to right, #FED79C, #FDEBA8)"}[h]||"transparent",borderRadius:"md",px:2,py:1,fontWeight:"bold",zIndex:"1",children:h}),(0,n.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("div",{style:{width:"100%",paddingTop:"75%",position:"relative"},children:(0,n.jsx)(D(),{src:c,alt:"".concat(r," Screenshot"),layout:"fill",objectFit:"cover"})})})]}),(0,n.jsxs)(X,{children:[(0,n.jsx)(o.X,{as:"h4",size:"md",mb:2,children:r}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-2,mb:"2px",children:t}),(0,n.jsx)(s.x,{fontSize:"sm",color:p,mb:3,children:l}),null==d?void 0:d.map(e=>(0,n.jsx)(s.x,{fontSize:"sm",color:p,mb:3,children:e},e)),(0,n.jsxs)(S.k,{justify:"flex-start",align:"center",children:[(0,n.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,n.jsx)(R.z,{size:"xs",colorScheme:"purple",bg:"purple.300",_hover:{bg:"purple.500",color:"white"},leftIcon:(0,n.jsx)(y.CkN,{}),mr:2,children:"View Demo"})}),x&&(0,n.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,n.jsx)(R.z,{size:"xs",colorScheme:"white",bg:"light"===f?"#334254":"white",_hover:{bg:"black",color:"white"},leftIcon:(0,n.jsx)(y.hJX,{}),children:"Github"})})]})]})]})},q=()=>{let{colorMode:e}=(0,a.If)();return(0,n.jsxs)(i.xu,{children:[(0,n.jsx)(o.X,{as:"h1",size:"lg",mb:4,mt:8,children:(0,n.jsx)(i.xu,{as:"span",bgGradient:"light"===e?"linear(to-r, #6B46C1, #205AD5)":"linear(to-r, #A78BFA, #9F7AEA)",bgClip:"text",display:"inline",children:j.Hq})}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-2,mb:"2px",children:j.H1}),j.q.map(e=>(0,n.jsx)(S.k,{direction:{base:"column",md:"row"},mt:10,children:(0,n.jsx)(i.xu,{flex:"1",mb:6,mr:{base:0,md:6},children:(0,n.jsx)(U,{title:e.name,subtitle:(e.workedFrom?e.workedFrom:"")+(e.workedTo?"-"+e.workedTo:""),description:e.description,details:e.details,imageUrl:e.image,demoUrl:e.projectUrl,githubUrl:e.sourceCode,tag:e.tag})})},e.name)),(0,n.jsx)(S.k,{justify:"flex-end",mb:8,children:(0,n.jsx)(C.r,{color:"gray.500",href:j.bW,children:j.WU})})]})},H=e=>{let{title:r,subtitle:t,description:l,details:d,imageUrl:c,demoUrl:m,githubUrl:x,tag:h}=e,{colorMode:f}=(0,a.If)(),[g,u]=(0,b.useState)(!1),p="light"===f?"black":"gray.400";return(0,n.jsxs)(P,{className:"project-card",width:"100%",borderRadius:"lg",overflow:"hidden",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[(0,n.jsxs)(i.xu,{position:"relative",children:[(0,n.jsx)(s.x,{position:"absolute",top:"2",right:"2",fontSize:"xs",color:{"Personal Project":"#056602",Stealth:"#390B66",Featured:"#653E02"}[h]||"black",bg:{"Personal Project":"linear-gradient(to right, #9EFF9C, #9AFEDC)",Stealth:"linear-gradient(to right, #D3A4FF, #F2A5FD)",Featured:"linear-gradient(to right, #FED79C, #FDEBA8)"}[h]||"transparent",borderRadius:"md",px:2,py:1,fontWeight:"bold",zIndex:"1",children:h}),(0,n.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("div",{style:{width:"100%",paddingTop:"75%",position:"relative"},children:(0,n.jsx)(D(),{src:c,alt:"".concat(r," Screenshot"),layout:"fill",objectFit:"contain"})})})]}),(0,n.jsxs)(X,{children:[(0,n.jsx)(o.X,{as:"h4",size:"md",mb:2,children:r}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-2,mb:"2px",children:t}),(0,n.jsx)(s.x,{fontSize:"sm",color:p,mb:3,children:l}),null==d?void 0:d.map(e=>(0,n.jsx)(s.x,{fontSize:"sm",color:p,mb:3,children:e},e)),(0,n.jsxs)(S.k,{justify:"flex-start",align:"center",children:[(0,n.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,n.jsx)(R.z,{size:"xs",colorScheme:"purple",bg:"purple.300",_hover:{bg:"purple.500",color:"white"},leftIcon:(0,n.jsx)(y.CkN,{}),mr:2,children:"View"})}),x&&(0,n.jsx)("a",{href:x,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,n.jsx)(R.z,{size:"xs",colorScheme:"white",bg:"light"===f?"#334254":"white",_hover:{bg:"black",color:"white"},leftIcon:(0,n.jsx)(y.hJX,{}),children:"Github"})})]})]})]})},Z=()=>{let{colorMode:e}=(0,a.If)();return(0,n.jsxs)(i.xu,{children:[(0,n.jsx)(o.X,{as:"h1",size:"lg",mb:4,mt:8,children:(0,n.jsx)(i.xu,{as:"span",bgGradient:"light"===e?"linear(to-r, #6B46C1, #205AD5)":"linear(to-r, #A78BFA, #9F7AEA)",bgClip:"text",display:"inline",children:j.RG})}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-2,mb:"2px"}),j.ZT.map(e=>(0,n.jsxs)(i.xu,{children:[(0,n.jsx)(o.X,{as:"h4",size:"md",mb:2,children:e.company}),(0,n.jsxs)(s.x,{fontSize:"sm",color:"gray.500",mt:-2,mb:"2px",children:[e.workedFrom," - ",e.workedTo]}),(0,n.jsx)(s.x,{fontSize:"sm",color:"gray.500",mt:-2,mb:"2px",children:e.description}),e.projects.map(e=>(0,n.jsx)(S.k,{direction:{base:"column",md:"row"},mt:10,children:(0,n.jsx)(i.xu,{flex:"1",mb:6,mr:{base:0,md:6},children:(0,n.jsx)(H,{title:e.name,subtitle:e.subtitle,description:e.description,details:e.details,imageUrl:e.imageUrl,demoUrl:e.projectUrl,tag:e.tag})})},e.name))]},e.company))]})},$=t(9008),J=t.n($);function K(){return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)(J(),{children:[(0,n.jsx)("title",{children:j.TN}),(0,n.jsx)("meta",{name:"description",content:j.WL}),(0,n.jsx)("meta",{property:"og:title",content:j.TN}),(0,n.jsx)("meta",{property:"og:description",content:j.WL}),(0,n.jsx)("meta",{property:"og:image",content:"/assets/cover-image.png"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:url",content:j.wo}),(0,n.jsx)("link",{rel:"icon",href:"/".concat(j.yb)})]}),(0,n.jsx)(L,{}),(0,n.jsx)(z.Z,{}),(0,n.jsx)(A,{}),(0,n.jsx)(z.Z,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(z.Z,{}),(0,n.jsx)(v,{}),(0,n.jsx)(z.Z,{}),(0,n.jsx)(q,{})]})}},9008:function(e,r,t){e.exports=t(2636)},4e3:function(e,r,t){"use strict";t.d(r,{x:function(){return d}});var n=t(6554),a=t(7440),i=t(3179),o=t(6914),s=t(5432),l=t(5893),d=(0,n.G)(function(e,r){let t=(0,a.mq)("Text",e),{className:n,align:d,decoration:c,casing:m,...x}=(0,i.Lr)(e),h=function(e){let r=Object.assign({},e);for(let e in r)void 0===r[e]&&delete r[e];return r}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(o.m.p,{ref:r,className:(0,s.cx)("chakra-text",e.className),...h,...x,__css:t})});d.displayName="Text"},2757:function(e,r,t){"use strict";t.d(r,{X:function(){return d}});var n=t(6554),a=t(7440),i=t(3179),o=t(6914),s=t(5432),l=t(5893),d=(0,n.G)(function(e,r){let t=(0,a.mq)("Heading",e),{className:n,...d}=(0,i.Lr)(e);return(0,l.jsx)(o.m.h2,{ref:r,className:(0,s.cx)("chakra-heading",e.className),...d,__css:t})});d.displayName="Heading"}},function(e){e.O(0,[415,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);