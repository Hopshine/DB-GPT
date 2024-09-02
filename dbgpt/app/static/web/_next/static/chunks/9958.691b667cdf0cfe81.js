"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{2440:function(e,l,t){var s=t(25519);l.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(s.C9))&&void 0!==e?e:"")}},88331:function(e,l,t){t.r(l),t.d(l,{default:function(){return Y}});var s=t(85893),a=t(41468),n=t(76212),r=t(74434),i=t(30853),c=t(25519),o=t(30071),d=t(79090),u=t(28508),m=t(88284),x=t(89035),p=t(38292),v=t(93967),f=t.n(v),g=t(25675),h=t.n(g),j=t(39332),y=t(67294),w=t(67421),b=t(14660),N=t(55186),k=t(65429),_=t(15381),Z=t(85175),C=t(65654),S=t(66309),P=t(55102),O=t(14726),J=t(45360),$=t(55241),I=t(96074),M=t(20640),A=t.n(M);let E=e=>{let{list:l,loading:t,feedback:a,setFeedbackOpen:n}=e,{t:r}=(0,w.$G)(),[i,c]=(0,y.useState)([]),[o,d]=(0,y.useState)("");return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"flex flex-1 flex-wrap w-72",children:null==l?void 0:l.map(e=>{let l=i.findIndex(l=>l.reason_type===e.reason_type)>-1;return(0,s.jsx)(S.Z,{className:"text-xs text-[#525964] mb-2 p-1 px-2 rounded-md cursor-pointer ".concat(l?"border-[#0c75fc] text-[#0c75fc]":""),onClick:()=>{c(l=>{let t=l.findIndex(l=>l.reason_type===e.reason_type);return t>-1?[...l.slice(0,t),...l.slice(t+1)]:[...l,e]})},children:e.reason},e.reason_type)})}),(0,s.jsx)(P.default.TextArea,{placeholder:r("feedback_tip"),className:"w-64 h-20 resize-none mb-2",value:o,onChange:e=>d(e.target.value.trim())}),(0,s.jsxs)("div",{className:"flex gap-2 justify-end",children:[(0,s.jsx)(O.ZP,{className:"w-16 h-8",onClick:()=>{n(!1)},children:"取消"}),(0,s.jsx)(O.ZP,{type:"primary",className:"min-w-16 h-8",onClick:async()=>{let e=i.map(e=>e.reason_type);await (null==a?void 0:a({feedback_type:"unlike",reason_types:e,remark:o}))},loading:t,children:"确认"})]})]})};var F=e=>{var l,t;let{content:a}=e,{t:r}=(0,w.$G)(),i=(0,j.useSearchParams)(),c=null!==(t=null==i?void 0:i.get("id"))&&void 0!==t?t:"",[o,d]=J.ZP.useMessage(),[u,m]=(0,y.useState)(!1),[x,p]=(0,y.useState)(null==a?void 0:null===(l=a.feedback)||void 0===l?void 0:l.feedback_type),[v,g]=(0,y.useState)(),h=async e=>{let l=null==e?void 0:e.replace(/\trelations:.*/g,""),t=A()(l);t?l?o.open({type:"success",content:r("copy_success")}):o.open({type:"warning",content:r("copy_nothing")}):o.open({type:"error",content:r("copy_failed")})},{run:b,loading:N}=(0,C.Z)(async e=>await (0,n.Vx)((0,n.zx)({conv_uid:c,message_id:a.order+"",feedback_type:e.feedback_type,reason_types:e.reason_types,remark:e.remark})),{manual:!0,onSuccess:e=>{let[,l]=e;p(null==l?void 0:l.feedback_type),J.ZP.success("反馈成功"),m(!1)}}),{run:S}=(0,C.Z)(async()=>await (0,n.Vx)((0,n.Jr)()),{manual:!0,onSuccess:e=>{let[,l]=e;g(l||[]),l&&m(!0)}}),{run:P}=(0,C.Z)(async()=>await (0,n.Vx)((0,n.Ir)({conv_uid:c,message_id:(null==a?void 0:a.order)+""})),{manual:!0,onSuccess:e=>{let[,l]=e;l&&(p("none"),J.ZP.success("操作成功"))}});return(0,s.jsxs)(s.Fragment,{children:[d,(0,s.jsxs)("div",{className:"flex flex-1 items-center text-sm px-4",children:[(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)(k.Z,{className:f()("cursor-pointer",{"text-[#0C75FC]":"like"===x}),onClick:async()=>{if("like"===x){await P();return}await b({feedback_type:"like"})}}),(0,s.jsx)($.Z,{placement:"bottom",autoAdjustOverflow:!0,destroyTooltipOnHide:!0,content:(0,s.jsx)(E,{setFeedbackOpen:m,feedback:b,list:v||[],loading:N}),trigger:"click",open:u,children:(0,s.jsx)(_.Z,{className:f()("cursor-pointer",{"text-[#0C75FC]":"unlike"===x}),onClick:async()=>{if("unlike"===x){await P();return}await S()}})})]}),(0,s.jsx)(I.Z,{type:"vertical"}),(0,s.jsx)(Z.Z,{className:"cursor-pointer",onClick:()=>h(a.context)})]})]})},T=t(50228),V=t(48218),G=t(39718),z=(0,y.memo)(e=>{var l;let{model:t}=e,a=(0,j.useSearchParams)(),n=null!==(l=null==a?void 0:a.get("scene"))&&void 0!==l?l:"";return"chat_agent"===n?(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[rgba(255,255,255,0.16)]",children:(0,s.jsx)(V.Z,{scene:n})}):t?(0,s.jsx)(G.Z,{width:32,height:32,model:t}):(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[rgba(255,255,255,0.16)]",children:(0,s.jsx)(T.Z,{})})});let B=()=>{var e;let l=JSON.parse(null!==(e=localStorage.getItem(c.C9))&&void 0!==e?e:"");return l.avatar_url?(0,s.jsx)(h(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:32,height:32,src:null==l?void 0:l.avatar_url,alt:null==l?void 0:l.nick_name}):(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#31afff] to-[#1677ff] text-xs text-white",children:null==l?void 0:l.nick_name})},D={todo:{bgClass:"bg-gray-500",icon:(0,s.jsx)(o.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,s.jsx)(d.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,s.jsx)(u.Z,{className:"ml-2"})},completed:{bgClass:"bg-green-500",icon:(0,s.jsx)(m.Z,{className:"ml-2"})}},H=e=>e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>"),L=e=>null==e?void 0:e.replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>");var R=(0,y.memo)(e=>{var l;let{content:t,onLinkClick:a}=e,{t:n}=(0,w.$G)(),r=(0,j.useSearchParams)(),c=null!==(l=null==r?void 0:r.get("scene"))&&void 0!==l?l:"",{context:o,model_name:d,role:u,thinking:m}=t,v=(0,y.useMemo)(()=>"view"===u,[u]),{value:g,cachePluginContext:h}=(0,y.useMemo)(()=>{if("string"!=typeof o)return{relations:[],value:"",cachePluginContext:[]};let[e,l]=o.split("	relations:"),t=l?l.split(","):[],s=[],a=0,n=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var l;let t=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),n=JSON.parse(t),r="<custom-view>".concat(a,"</custom-view>");return s.push({...n,result:H(null!==(l=n.result)&&void 0!==l?l:"")}),a++,r}catch(l){return console.log(l.message,l),e}});return{relations:t,cachePluginContext:s,value:n}},[o]),k=(0,y.useMemo)(()=>({"custom-view"(e){var l;let{children:t}=e,a=+t.toString();if(!h[a])return t;let{name:n,status:r,err_msg:c,result:o}=h[a],{bgClass:d,icon:u}=null!==(l=D[r])&&void 0!==l?l:{};return(0,s.jsxs)("div",{className:"bg-white dark:bg-[#212121] rounded-lg overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,s.jsxs)("div",{className:f()("flex px-4 md:px-6 py-2 items-center text-white text-sm",d),children:[n,u]}),o?(0,s.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:(0,s.jsx)(p.Z,{components:i.Z,rehypePlugins:[b.Z],remarkPlugins:[N.Z],children:null!=o?o:""})}):(0,s.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:c})]})}}),[h]);return(0,s.jsxs)("div",{className:"flex flex-1 gap-3 mt-6",children:[(0,s.jsx)("div",{className:"flex flex-shrink-0 items-start",children:v?(0,s.jsx)(z,{model:d}):(0,s.jsx)(B,{})}),(0,s.jsxs)("div",{className:"flex ".concat("chat_agent"!==c||m?"":"flex-1"," overflow-hidden"),children:[!v&&(0,s.jsx)("div",{className:"flex flex-1 items-center text-sm text-[#1c2533] dark:text-white",children:"string"==typeof o&&o}),v&&(0,s.jsxs)("div",{className:"flex flex-1 flex-col w-full",children:[(0,s.jsxs)("div",{className:"bg-white dark:bg-[rgba(255,255,255,0.16)] p-4 rounded-2xl rounded-tl-none mb-2",children:["object"==typeof o&&(0,s.jsxs)("div",{children:["[".concat(o.template_name,"]: "),(0,s.jsxs)("span",{className:"text-theme-primary cursor-pointer",onClick:a,children:[(0,s.jsx)(x.Z,{className:"mr-1"}),o.template_introduce||"More Details"]})]}),"string"==typeof o&&"chat_agent"===c&&(0,s.jsx)(p.Z,{components:{...i.Z},rehypePlugins:[b.Z],remarkPlugins:[N.Z],children:L(g)}),"string"==typeof o&&"chat_agent"!==c&&(0,s.jsx)("div",{children:(0,s.jsx)(p.Z,{components:{...i.Z,...k},rehypePlugins:[b.Z],remarkPlugins:[N.Z],children:H(g)})}),m&&!o&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"flex text-sm text-[#1c2533] dark:text-white",children:n("thinking")}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse1"}),(0,s.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse2"}),(0,s.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse3"})]})]})]}),(0,s.jsx)(F,{content:t})]})]})]})}),U=t(69256),q=t(62418),K=t(2093),Q=t(85576),W=t(96486),X=t(25934),Y=()=>{var e;let l=(0,y.useRef)(null),t=(0,j.useSearchParams)(),i=null!==(e=null==t?void 0:t.get("id"))&&void 0!==e?e:"",{currentDialogInfo:c,model:o}=(0,y.useContext)(a.p),{history:d,handleChat:u,refreshDialogList:m,setAppInfo:x,setModelValue:p,setTemperatureValue:v,setResourceValue:f}=(0,y.useContext)(U.ChatContentContext),[g,h]=(0,y.useState)(!1),[w,b]=(0,y.useState)(""),N=(0,y.useMemo)(()=>{let e=(0,W.cloneDeep)(d);return e.filter(e=>["view","human"].includes(e.role)).map(e=>({...e,key:(0,X.Z)()}))},[d]);return(0,K.Z)(async()=>{let e=(0,q.a_)();if(e&&e.id===i){let[,i]=await (0,n.Vx)((0,n.BN)({...c}));if(i){var l,t,s,a,r,d,g;let n=(null==i?void 0:null===(l=i.param_need)||void 0===l?void 0:l.map(e=>e.type))||[],c=(null===(t=null==i?void 0:null===(s=i.param_need)||void 0===s?void 0:s.filter(e=>"model"===e.type)[0])||void 0===t?void 0:t.value)||o,h=(null===(a=null==i?void 0:null===(r=i.param_need)||void 0===r?void 0:r.filter(e=>"temperature"===e.type)[0])||void 0===a?void 0:a.value)||.5,j=null===(d=null==i?void 0:null===(g=i.param_need)||void 0===g?void 0:g.filter(e=>"resource"===e.type)[0])||void 0===d?void 0:d.bind_value;x(i||{}),v(h||.5),p(c),f(j),await u(e.message,{app_code:null==i?void 0:i.app_code,model_name:c,...(null==n?void 0:n.includes("temperature"))&&{temperature:h},...n.includes("resource")&&{select_param:"string"==typeof j?j:JSON.stringify(j)}}),await m(),localStorage.removeItem(q.rU)}}},[i,c]),(0,y.useEffect)(()=>{setTimeout(()=>{var e,t;null===(e=l.current)||void 0===e||e.scrollTo(0,null===(t=l.current)||void 0===t?void 0:t.scrollHeight)},50)},[d,d[d.length-1].context]),(0,s.jsxs)("div",{className:"flex flex-col w-5/6 mx-auto",ref:l,children:[!!N.length&&N.map((e,l)=>(0,s.jsx)(R,{content:e,onLinkClick:()=>{h(!0),b(JSON.stringify(null==e?void 0:e.context,null,2))}},l)),(0,s.jsx)(Q.default,{title:"JSON Editor",open:g,width:"60%",cancelButtonProps:{hidden:!0},onOk:()=>{h(!1)},onCancel:()=>{h(!1)},children:(0,s.jsx)(r.Z,{className:"w-full h-[500px]",language:"json",value:w})})]})}}}]);