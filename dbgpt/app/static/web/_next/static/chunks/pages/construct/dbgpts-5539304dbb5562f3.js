(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3480],{17664:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/dbgpts",function(){return a(42079)}])},48218:function(e,t,a){"use strict";var s=a(85893),l=a(82353),n=a(16165),r=a(67294);t.Z=e=>{let{width:t,height:a,scene:i}=e,c=(0,r.useCallback)(()=>{switch(i){case"chat_knowledge":return l.je;case"chat_with_db_execute":return l.zM;case"chat_excel":return l.DL;case"chat_with_db_qa":case"chat_dba":return l.RD;case"chat_dashboard":return l.In;case"chat_agent":return l.si;case"chat_normal":return l.O7;default:return}},[i]);return(0,s.jsx)(n.Z,{className:"w-".concat(t||7," h-").concat(a||7),component:c()})}},91467:function(e,t,a){"use strict";a.d(t,{TH:function(){return x},ZS:function(){return g}});var s=a(85893),l=a(3471),n=a(83062),r=a(96074),i=a(91776),c=a(85418),o=a(93967),d=a.n(o),p=a(36609),u=a(25675),h=a.n(u);a(67294);var m=a(48218);a(11873);let x=e=>{let{onClick:t,Icon:a="/pictures/card_chat.png",text:l=(0,p.t)("start_chat")}=e;return"string"==typeof a&&(a=(0,s.jsx)(h(),{src:a,alt:a,width:17,height:15})),(0,s.jsxs)("div",{className:"flex items-center gap-1 text-default",onClick:e=>{e.stopPropagation(),t&&t()},children:[a,(0,s.jsx)("span",{children:l})]})},g=e=>{let{menu:t}=e;return(0,s.jsx)(c.Z,{menu:t,getPopupContainer:e=>e.parentNode,placement:"bottomRight",autoAdjustOverflow:!1,children:(0,s.jsx)(l.Z,{className:"p-2 hover:bg-white hover:dark:bg-black rounded-md"})})};t.ZP=e=>{let{RightTop:t,Tags:a,LeftBottom:l,RightBottom:c,onClick:o,rightTopHover:p=!0,logo:u,name:x,description:g,className:b,scene:f,code:w}=e;return"string"==typeof g&&(g=(0,s.jsx)("p",{className:"line-clamp-2 relative bottom-4 text-ellipsis min-h-[42px] text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)]",children:g})),(0,s.jsx)("div",{className:d()("hover-underline-gradient flex justify-center mt-6 relative group w-1/3 px-2 mb-6",b),children:(0,s.jsxs)("div",{onClick:o,className:"backdrop-filter backdrop-blur-lg cursor-pointer  bg-white bg-opacity-70 border-2 border-white rounded-lg shadow p-4 relative w-full h-full dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",children:[(0,s.jsxs)("div",{className:"flex items-end relative bottom-8 justify-between w-full",children:[(0,s.jsxs)("div",{className:"flex items-end gap-4 w-11/12  flex-1",children:[(0,s.jsx)("div",{className:"bg-white rounded-lg shadow-sm w-14 h-14 flex items-center p-3",children:f?(0,s.jsx)(m.Z,{scene:f,width:14,height:14}):u&&(0,s.jsx)(h(),{src:u,width:44,height:44,alt:x,className:"w-8 min-w-8 rounded-full max-w-none"})}),(0,s.jsx)("div",{className:"flex-1",children:x.length>6?(0,s.jsx)(n.Z,{title:x,children:(0,s.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:x})}):(0,s.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:x})})]}),(0,s.jsx)("span",{className:d()("shrink-0",{hidden:p,"group-hover:block":p}),onClick:e=>{e.stopPropagation()},children:t})]}),g,(0,s.jsx)("div",{className:"relative bottom-2",children:a}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("div",{children:l}),(0,s.jsx)("div",{children:c})]}),w&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{className:"my-3"}),(0,s.jsx)(i.Z.Text,{copyable:!0,className:"absolute bottom-1 right-4 text-xs text-gray-500",children:w})]})]})})}},1771:function(e,t,a){"use strict";var s=a(85893),l=a(82353),n=a(41156),r=a(9641),i=a(16165),c=a(9020),o=a(92962),d=a(38545),p=a(50067),u=a(28459),h=a(11941),m=a(36609),x=a(11163);a(67294),a(53878),t.Z=function(e){let{children:t}=e,a=[{key:"app",name:(0,m.t)("App"),path:"/app",icon:(0,s.jsx)(n.Z,{})},{key:"flow",name:(0,m.t)("awel_flow"),icon:(0,s.jsx)(r.Z,{}),path:"/flow"},{key:"models",name:(0,m.t)("model_manage"),path:"/models",icon:(0,s.jsx)(i.Z,{component:l.IN})},{key:"database",name:(0,m.t)("Database"),icon:(0,s.jsx)(c.Z,{}),path:"/database"},{key:"knowledge",name:(0,m.t)("Knowledge_Space"),icon:(0,s.jsx)(o.Z,{}),path:"/knowledge"},{key:"prompt",name:(0,m.t)("Prompt"),icon:(0,s.jsx)(d.Z,{}),path:"/prompt"},{key:"dbgpts",name:(0,m.t)("dbgpts_community"),path:"/dbgpts",icon:(0,s.jsx)(p.Z,{})}],g=(0,x.useRouter)(),b=g.pathname.split("/")[2];return(0,s.jsx)("div",{className:"flex flex-col h-full w-full  dark:bg-gradient-dark bg-gradient-light bg-cover bg-center",children:(0,s.jsx)(u.ZP,{theme:{components:{Button:{},Segmented:{itemSelectedBg:"#2867f5",itemSelectedColor:"white"}}},children:(0,s.jsx)(h.Z,{activeKey:b,items:a.map(e=>({key:e.key,label:e.name,children:t,icon:e.icon})),onTabClick:e=>{g.push("/construct/".concat(e))}})})})}},42079:function(e,t,a){"use strict";a.r(t);var s=a(85893),l=a(76212),n=a(91467),r=a(1771),i=a(98165),c=a(40110),o=a(52645),d=a(69753),p=a(65654),u=a(45360),h=a(74330),m=a(92783),x=a(14726),g=a(55102),b=a(66309),f=a(93967),w=a.n(f),j=a(30381),v=a.n(j),k=a(67294),y=a(67421);t.default=function(){let{t:e}=(0,y.$G)(),[t,a]=(0,k.useState)(""),[f,j]=(0,k.useState)("market"),[_,N]=(0,k.useState)(!1),[Z,C]=(0,k.useState)(!1),[S,P]=(0,k.useState)(!1),[T,E]=(0,k.useState)(),[z,R]=(0,k.useState)("all"),A=(0,k.useMemo)(()=>({pageNo:1,pageSize:20}),[]),{data:I=[],refresh:V}=(0,p.Z)(async()=>{var e,a;if(C(!0),"my"===f){let[a,s]=await (0,l.Vx)((0,l.YP)({name:t||void 0,type:"all"===z?void 0:z,page_index:A.pageNo,page_size:A.pageSize}));return C(!1),P(!!a),null!==(e=null==s?void 0:s.items)&&void 0!==e?e:[]}let s={page_index:A.pageNo,page_size:A.pageSize,name:t||void 0,type:"all"===z?void 0:z},[n,r]=await (0,l.Vx)((0,l.uf)(s));return C(!1),P(!!n),null!==(a=null==r?void 0:r.items)&&void 0!==a?a:[]},{manual:!0}),B=async()=>{try{N(!0);let[e]=await (0,l.Vx)((0,l.zE)());if(e)return;u.ZP.success("success"),V()}finally{N(!1)}};(0,k.useEffect)(()=>{V()},[f,z]);let H=(0,k.useCallback)(async(e,t,a)=>{if(T)return;E(t),C(!0);let s=null;if(a){let[t]=await (0,l.Vx)((0,l.Al)(e));s=t}else{let[t]=await (0,l.Vx)((0,l.l_)({name:e.name,type:e.type}));s=t}C(!1),s||(u.ZP.success("success"),V()),E(void 0)},[T,V]),O=[{value:"market",label:e("community_dbgpts")},{value:"my",label:e("my_dbgpts")}],D=[{value:"all",label:e("All")},{value:"workflow",label:e("workflow")},{value:"agents",label:"Agent"},{value:"resources",label:e("resources")},{value:"apps",label:e("app")},{value:"operators",label:e("operators")}],K=e=>{switch(e){case"workflow":return"/pictures/flow.png";case"resources":return"/pictures/database.png";case"apps":return"/pictures/app.png";case"operators":return"/pictures/knowledge.png";default:return"/pictures/agent.png"}};return(0,s.jsx)(r.Z,{children:(0,s.jsx)(h.Z,{spinning:Z,children:(0,s.jsxs)("div",{className:"h-screen w-full p-4 md:p-6 overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,s.jsx)("div",{className:"flex items-center gap-4",children:(0,s.jsx)(m.Z,{className:"backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 border-2 border-white rounded-lg shadow p-1 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",options:O,onChange:e=>{j(e)},value:f})}),(0,s.jsx)("div",{className:"flex items-center gap-4",children:(0,s.jsx)(x.ZP,{className:w()("border-none text-white bg-button-gradient h-full",{"opacity-40":!1}),loading:_,icon:(0,s.jsx)(i.Z,{}),onClick:B,children:e("Refresh_dbgpts")})})]}),(0,s.jsxs)("div",{className:"w-full flex flex-wrap pb-12 mx-[-8px]",children:[(0,s.jsx)(m.Z,{className:"backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 border-2 border-white rounded-lg shadow p-1 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",options:D,onChange:e=>{R(e)},value:z}),(0,s.jsx)(g.default,{variant:"filled",prefix:(0,s.jsx)(c.Z,{}),placeholder:e("please_enter_the_keywords"),value:t,onChange:e=>a(e.target.value),onPressEnter:V,allowClear:!0,className:"w-[230px] h-[40px] border-1 border-white ml-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60"})]}),(0,s.jsx)("div",{className:"flex flex-wrap pb-12",children:I.map((t,a)=>(0,s.jsx)(n.ZP,{logo:K(t.type),onClick:()=>{window.open("https://github.com/eosphoros-ai/dbgpts/tree/main/".concat(t.type,"/").concat(t.name),"_blank")},description:t.description,name:t.name,Tags:(0,s.jsxs)("div",{children:[t.author&&(0,s.jsx)(b.Z,{children:t.author}),t.version&&(0,s.jsxs)(b.Z,{children:["v",t.version]}),t.storage_channel&&(0,s.jsx)(b.Z,{children:t.storage_channel})]}),LeftBottom:(0,s.jsxs)("div",{className:"flex gap-2",children:[t.author&&(0,s.jsx)("span",{children:t.author}),t.author&&(0,s.jsx)("span",{children:"•"}),(null==t?void 0:t.gmt_created)&&(0,s.jsx)("span",{children:v()(null==t?void 0:t.gmt_created).fromNow()+" "+e("update")})]}),RightTop:t.type&&(0,s.jsx)(b.Z,{children:t.type}),rightTopHover:!1,RightBottom:t.installed||"my"==f?(0,s.jsx)(n.TH,{Icon:(0,s.jsx)(o.Z,{}),text:"Uninstall",onClick:()=>{H(t,a,!1)}}):(0,s.jsx)(n.TH,{Icon:(0,s.jsx)(d.Z,{}),text:"Install",onClick:()=>{H(t,a,!0)}})},t.id))})]})})})}},11873:function(){},53878:function(){}},function(e){e.O(0,[2648,3791,4296,5102,3293,4330,1776,5418,1941,2783,8391,9774,2888,179],function(){return e(e.s=17664)}),_N_E=e.O()}]);