(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8662],{54681:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/knowledge",function(){return a(18671)}])},26892:function(e,t,a){"use strict";var s=a(85893),l=a(67294),n=a(66309),r=a(83062),i=a(94184),c=a.n(i),o=a(25675),d=a.n(o);t.Z=(0,l.memo)(function(e){let{icon:t,iconBorder:a=!0,title:i,desc:o,tags:m,children:u,disabled:x,operations:h,className:p,..._}=e,j=(0,l.useMemo)(()=>t?"string"==typeof t?(0,s.jsx)(d(),{className:c()("w-11 h-11 rounded-full mr-4 object-contain bg-white",{"border border-gray-200":a}),width:44,height:44,src:t,alt:i}):t:null,[t]),f=(0,l.useMemo)(()=>m&&m.length?(0,s.jsx)("div",{className:"flex items-center mt-1 flex-wrap",children:m.map((e,t)=>{var a;return"string"==typeof e?(0,s.jsx)(n.Z,{className:"text-xs",bordered:!1,color:"default",children:e},t):(0,s.jsx)(n.Z,{className:"text-xs",bordered:null!==(a=e.border)&&void 0!==a&&a,color:e.color,children:e.text},t)})}):null,[m]);return(0,s.jsxs)("div",{className:c()("group/card relative flex flex-col w-72 rounded justify-between text-black bg-white shadow-[0_8px_16px_-10px_rgba(100,100,100,.08)] hover:shadow-[0_14px_20px_-10px_rgba(100,100,100,.15)] dark:bg-[#232734] dark:text-white dark:hover:border-white transition-[transfrom_shadow] duration-300 hover:-translate-y-1 min-h-fit",{"grayscale cursor-no-drop":x,"cursor-pointer":!x&&!!_.onClick},p),..._,children:[(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[j,(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h2",{className:"text-sm font-semibold",children:i}),f]})]}),o&&(0,s.jsx)(r.Z,{title:o,children:(0,s.jsx)("p",{className:"mt-2 text-sm text-gray-500 font-normal line-clamp-2",children:o})})]}),(0,s.jsxs)("div",{children:[u,h&&!!h.length&&(0,s.jsx)("div",{className:"flex flex-wrap items-center justify-center border-t border-solid border-gray-100 dark:border-theme-dark",children:h.map((e,t)=>(0,s.jsx)(r.Z,{title:e.label,children:(0,s.jsxs)("div",{className:"relative flex flex-1 items-center justify-center h-11 text-gray-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer",onClick:t=>{var a;t.stopPropagation(),null===(a=e.onClick)||void 0===a||a.call(e)},children:[e.children,t<h.length-1&&(0,s.jsx)("div",{className:"w-[1px] h-6 absolute top-2 right-0 bg-gray-100 rounded dark:bg-theme-dark"})]})},"operation-".concat(t)))})]})]})})},47207:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(85893),l=a(27595),n=a(27329),r=a(68346);function i(e){let{type:t}=e;return"TEXT"===t?(0,s.jsx)(l.Z,{className:"text-[#2AA3FF] mr-2 !text-lg"}):"DOCUMENT"===t?(0,s.jsx)(n.Z,{className:"text-[#2AA3FF] mr-2 !text-lg"}):(0,s.jsx)(r.Z,{className:"text-[#2AA3FF] mr-2 !text-lg"})}},18671:function(e,t,a){"use strict";let s;a.r(t),a.d(t,{default:function(){return e_}});var l=a(85893),n=a(67294),r=a(24969),i=a(71577),c=a(36147),o=a(3363),d=a(46735),m=a(55241),u=a(40411),x=a(11163);a(25675);var h=a(28058),p=a(87547),_=a(24019),j=a(37017),f=a(27704),g=a(83062),b=a(66309),N=a(85813),y=a(96074),Z=a(32983),v=a(42075),w=a(75081),k=a(31326),T=a(88008),P=a(18754),S=a(43893),C=a(30381),I=a.n(C),E=a(79531),D=a(71230),F=a(15746),A=a(39479),U=a(44442),O=a(67421),V=a(31545),M=a(6321),q=a(90389);let{TextArea:z}=E.default;function L(e){let{space:t,argumentsShow:a,setArgumentsShow:s}=e,{t:r}=(0,O.$G)(),[o,d]=(0,n.useState)(),[m,u]=(0,n.useState)(!1),x=async()=>{let[e,a]=await (0,S.Vx)((0,S.Tu)(t.name));d(a)};(0,n.useEffect)(()=>{x()},[t.name]);let h=[{key:"Embedding",label:(0,l.jsxs)("div",{children:[(0,l.jsx)(V.Z,{}),r("Embedding")]}),children:(0,l.jsxs)(D.Z,{gutter:24,children:[(0,l.jsx)(F.Z,{span:12,offset:0,children:(0,l.jsx)(A.Z.Item,{tooltip:r("the_top_k_vectors"),rules:[{required:!0}],label:r("topk"),name:["embedding","topk"],children:(0,l.jsx)(E.default,{className:"mb-5 h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:r("Set_a_threshold_score"),rules:[{required:!0}],label:r("recall_score"),name:["embedding","recall_score"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:r("Please_input_the_owner")})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:r("recall_type"),rules:[{required:!0}],label:r("recall_type"),name:["embedding","recall_type"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:r("A_model_used"),rules:[{required:!0}],label:r("model"),name:["embedding","model"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:r("The_size_of_the_data_chunks"),rules:[{required:!0}],label:r("chunk_size"),name:["embedding","chunk_size"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12"})})}),(0,l.jsx)(F.Z,{span:12,children:(0,l.jsx)(A.Z.Item,{tooltip:r("The_amount_of_overlap"),rules:[{required:!0}],label:r("chunk_overlap"),name:["embedding","chunk_overlap"],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:r("Please_input_the_description")})})})]})},{key:"Prompt",label:(0,l.jsxs)("div",{children:[(0,l.jsx)(M.Z,{}),r("Prompt")]}),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{tooltip:r("A_contextual_parameter"),label:r("scene"),name:["prompt","scene"],children:(0,l.jsx)(z,{rows:4,className:"mb-2"})}),(0,l.jsx)(A.Z.Item,{tooltip:r("structure_or_format"),label:r("template"),name:["prompt","template"],children:(0,l.jsx)(z,{rows:7,className:"mb-2"})}),(0,l.jsx)(A.Z.Item,{tooltip:r("The_maximum_number_of_tokens"),label:r("max_token"),name:["prompt","max_token"],children:(0,l.jsx)(E.default,{className:"mb-2"})})]})},{key:"Summary",label:(0,l.jsxs)("div",{children:[(0,l.jsx)(q.Z,{}),r("Summary")]}),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{rules:[{required:!0}],label:r("max_iteration"),name:["summary","max_iteration"],children:(0,l.jsx)(E.default,{className:"mb-2"})}),(0,l.jsx)(A.Z.Item,{rules:[{required:!0}],label:r("concurrency_limit"),name:["summary","concurrency_limit"],children:(0,l.jsx)(E.default,{className:"mb-2"})})]})}],p=async e=>{u(!0);let[a,l,n]=await (0,S.Vx)((0,S.iH)(t.name,{argument:JSON.stringify(e)}));u(!1),(null==n?void 0:n.success)&&s(!1)};return(0,l.jsx)(c.default,{width:850,open:a,onCancel:()=>{s(!1)},footer:null,children:(0,l.jsx)(w.Z,{spinning:m,children:(0,l.jsxs)(A.Z,{size:"large",className:"mt-4",layout:"vertical",name:"basic",initialValues:{...o},autoComplete:"off",onFinish:p,children:[(0,l.jsx)(U.Z,{items:h}),(0,l.jsxs)("div",{className:"mt-3 mb-3",children:[(0,l.jsx)(i.ZP,{htmlType:"submit",type:"primary",className:"mr-6",children:r("Submit")}),(0,l.jsx)(i.ZP,{onClick:()=>{s(!1)},children:r("close")})]})]})})})}var R=a(47207);let{confirm:G}=c.default;function H(e){let{space:t}=e,{t:a}=(0,O.$G)(),s=(0,x.useRouter)(),[c,o]=(0,n.useState)(!1),[d,m]=(0,n.useState)([]),[u,p]=(0,n.useState)(!1),[_,j]=(0,n.useState)(0),C=(0,n.useRef)(1),E=(0,n.useMemo)(()=>d.length<_,[d.length,_]),D=e=>{G({title:a("Tips"),icon:(0,l.jsx)(h.Z,{}),content:"".concat(a("Del_Document_Tips"),"?"),okText:"Yes",okType:"danger",cancelText:"No",async onOk(){await V(e)}})};async function F(){o(!0);let[e,a]=await (0,S.Vx)((0,S._Q)(t.name,{page:C.current,page_size:18}));m(null==a?void 0:a.data),j((null==a?void 0:a.total)||0),o(!1)}let A=async()=>{if(!E)return;o(!0),C.current+=1;let[e,a]=await (0,S.Vx)((0,S._Q)(t.name,{page:C.current,page_size:18}));m([...d,...a.data]),o(!1)},U=async(e,t)=>{await (0,S.Vx)((0,S.Hx)(e,{doc_ids:[t]}))},V=async a=>{await (0,S.Vx)((0,S.n3)(t.name,{doc_name:a.doc_name})),F(),e.onDeleteDoc()},M=()=>{e.onAddDoc(t.name)},q=(e,t)=>{let a;switch(e){case"TODO":a="gold";break;case"RUNNING":a="#2db7f5";break;case"FINISHED":a="cyan";break;default:a="red"}return(0,l.jsx)(g.Z,{title:t,children:(0,l.jsx)(b.Z,{color:a,children:e})})};return(0,n.useEffect)(()=>{F()},[t]),(0,l.jsxs)("div",{className:"collapse-container pt-2 px-4",children:[(0,l.jsxs)(v.Z,{children:[(0,l.jsx)(i.ZP,{size:"middle",type:"primary",className:"flex items-center",icon:(0,l.jsx)(r.Z,{}),onClick:M,children:a("Add_Datasource")}),(0,l.jsx)(i.ZP,{size:"middle",className:"flex items-center mx-2",icon:(0,l.jsx)(P.Z,{}),onClick:()=>{p(!0)},children:"Arguments"})]}),(0,l.jsx)(y.Z,{}),(0,l.jsx)(w.Z,{spinning:c,children:(null==d?void 0:d.length)>0?(0,l.jsxs)("div",{className:"max-h-96 overflow-auto max-w-3/4",children:[(0,l.jsx)("div",{className:"mt-3 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5",children:d.map(e=>(0,l.jsxs)(N.Z,{className:" dark:bg-[#484848] relative  shrink-0 grow-0 cursor-pointer rounded-[10px] border border-gray-200 border-solid w-full",title:(0,l.jsx)(g.Z,{title:e.doc_name,children:(0,l.jsxs)("div",{className:"truncate ",children:[(0,l.jsx)(R.Z,{type:e.doc_type}),(0,l.jsx)("span",{children:e.doc_name})]})}),extra:(0,l.jsxs)("div",{className:"mx-3",children:[(0,l.jsx)(g.Z,{title:"detail",children:(0,l.jsx)(k.Z,{className:"mr-2 !text-lg",style:{color:"#1b7eff",fontSize:"20px"},onClick:()=>{s.push("/knowledge/chunk/?spaceName=".concat(t.name,"&id=").concat(e.id))}})}),(0,l.jsx)(g.Z,{title:"Sync",children:(0,l.jsx)(T.Z,{className:"mr-2 !text-lg",style:{color:"#1b7eff",fontSize:"20px"},onClick:()=>{U(t.name,e.id)}})}),(0,l.jsx)(g.Z,{title:"Delete",children:(0,l.jsx)(f.Z,{className:"text-[#ff1b2e] !text-lg",onClick:()=>{D(e)}})})]}),children:[(0,l.jsxs)("p",{className:"mt-2 font-semibold ",children:[a("Size"),":"]}),(0,l.jsxs)("p",{children:[e.chunk_size," chunks"]}),(0,l.jsxs)("p",{className:"mt-2 font-semibold ",children:[a("Last_Sync"),":"]}),(0,l.jsx)("p",{children:I()(e.last_sync).format("YYYY-MM-DD HH:MM:SS")}),(0,l.jsx)("p",{className:"mt-2 mb-2",children:q(e.status,e.result)})]},e.id))}),E&&(0,l.jsx)(y.Z,{children:(0,l.jsx)("span",{className:"cursor-pointer",onClick:A,children:a("Load_more")})})]}):(0,l.jsx)(Z.Z,{image:Z.Z.PRESENTED_IMAGE_DEFAULT,children:(0,l.jsx)(i.ZP,{type:"primary",className:"flex items-center mx-auto",icon:(0,l.jsx)(r.Z,{}),onClick:M,children:"Create Now"})})}),(0,l.jsx)(L,{space:t,argumentsShow:u,setArgumentsShow:p})]})}var Y=a(19284),X=a(26892);let{confirm:$}=c.default;function K(e){let t=(0,x.useRouter)(),{t:a}=(0,O.$G)(),{space:s,getSpaces:n}=e,r=()=>{$({title:a("Tips"),icon:(0,l.jsx)(h.Z,{}),content:"".concat(a("Del_Knowledge_Tips"),"?"),okText:"Yes",okType:"danger",cancelText:"No",async onOk(){await (0,S.Vx)((0,S.XK)({name:null==s?void 0:s.name})),n()}})},i=async()=>{let[e,a]=await (0,S.Vx)((0,S.sW)({chat_mode:"chat_knowledge"}));(null==a?void 0:a.conv_uid)&&t.push("/chat?scene=chat_knowledge&id=".concat(null==a?void 0:a.conv_uid,"&db_param=").concat(s.name))};return(0,l.jsx)(d.ZP,{theme:{components:{Popover:{zIndexPopup:90}}},children:(0,l.jsx)(m.Z,{className:"cursor-pointer",placement:"bottom",trigger:"click",content:(0,l.jsx)(H,{space:s,onAddDoc:e.onAddDoc,onDeleteDoc:function(){n()}}),children:(0,l.jsx)(u.Z,{className:"mb-4 min-w-[200px] sm:w-60 lg:w-72",count:s.docs||0,children:(0,l.jsx)(X.Z,{title:s.name,desc:s.desc,icon:Y.l3[s.vector_type]||"/LOGO_SMALL.png",iconBorder:!1,tags:[{text:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{className:"mr-1"}),null==s?void 0:s.owner]})},{text:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_.Z,{className:"mr-1"}),I()(s.gmt_modified).format("YYYY-MM-DD")]})}],operations:[{label:a("Chat"),children:(0,l.jsx)(j.Z,{}),onClick:i},{label:a("Delete"),children:(0,l.jsx)(f.Z,{}),onClick:()=>{r()}}]})})})})}var W=a(84553),B=a(2453),Q=a(64082),J=a(94184),ee=a.n(J);let{Dragger:et}=W.default,{TextArea:ea}=E.default;function es(e){let{className:t,handleStepChange:a,spaceName:s,docType:r}=e,{t:c}=(0,O.$G)(),[o]=A.Z.useForm(),[d,m]=(0,n.useState)(!1),[u,x]=(0,n.useState)([]),h=async e=>{let t;let{docName:l,textSource:n,text:i,webPageUrl:c}=e;switch(m(!0),r){case"URL":[,t]=await (0,S.Vx)((0,S.H_)(s,{doc_name:l,content:c,doc_type:"URL"}));break;case"TEXT":[,t]=await (0,S.Vx)((0,S.H_)(s,{doc_name:l,source:n,content:i,doc_type:"TEXT"}))}return(m(!1),"DOCUMENT"===r&&u.length<1)?B.ZP.error("Upload failed, please re-upload."):"DOCUMENT"===r||t?void a({label:"forward",files:"DOCUMENT"===r?u:[{name:l,doc_id:t||-1}]}):B.ZP.error("Upload failed, please re-upload.")},p=e=>{let{file:t,fileList:a}=e;0===a.length&&o.setFieldValue("originFileObj",null)},_=async e=>{let{onSuccess:t,onError:a,file:l}=e,n=new FormData,r=null==l?void 0:l.name;n.append("doc_name",r),n.append("doc_file",l),n.append("doc_type","DOCUMENT");let[,i]=await (0,S.Vx)((0,S.iG)(s,n));Number.isInteger(i)?(t&&t(i||0),x(e=>(e.push({name:r,doc_id:i||-1}),e))):a&&a({name:"",message:""})},j=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{label:"".concat(c("Name"),":"),name:"docName",rules:[{required:!0,message:c("Please_input_the_name")}],children:(0,l.jsx)(E.default,{className:"mb-5 h-12",placeholder:c("Please_input_the_name")})}),(0,l.jsx)(A.Z.Item,{label:"".concat(c("Text_Source"),":"),name:"textSource",rules:[{required:!0,message:c("Please_input_the_text_source")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:c("Please_input_the_text_source")})}),(0,l.jsx)(A.Z.Item,{label:"".concat(c("Text"),":"),name:"text",rules:[{required:!0,message:c("Please_input_the_description")}],children:(0,l.jsx)(ea,{rows:4})})]}),f=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{label:"".concat(c("Name"),":"),name:"docName",rules:[{required:!0,message:c("Please_input_the_name")}],children:(0,l.jsx)(E.default,{className:"mb-5 h-12",placeholder:c("Please_input_the_name")})}),(0,l.jsx)(A.Z.Item,{label:"".concat(c("Web_Page_URL"),":"),name:"webPageUrl",rules:[{required:!0,message:c("Please_input_the_Web_Page_URL")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:c("Please_input_the_Web_Page_URL")})})]}),g=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(A.Z.Item,{name:"originFileObj",rules:[{required:!0,message:c("Please_select_file")}],children:(0,l.jsxs)(et,{multiple:!0,onChange:p,maxCount:10,accept:".pdf,.ppt,.pptx,.xls,.xlsx,.doc,.docx,.txt,.md",customRequest:_,children:[(0,l.jsx)("p",{className:"ant-upload-drag-icon",children:(0,l.jsx)(Q.Z,{})}),(0,l.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:c("Select_or_Drop_file")}),(0,l.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})})});return(0,l.jsx)(w.Z,{spinning:d,children:(0,l.jsxs)(A.Z,{form:o,size:"large",className:ee()("mt-4",t),layout:"vertical",name:"basic",initialValues:{remember:!0},autoComplete:"off",onFinish:h,children:[(()=>{switch(r){case"URL":return f();case"DOCUMENT":return g();default:return j()}})(),(0,l.jsxs)(A.Z.Item,{children:[(0,l.jsx)(i.ZP,{onClick:()=>{a({label:"back"})},className:"mr-4",children:"".concat(c("Back"))}),(0,l.jsx)(i.ZP,{type:"primary",loading:d,htmlType:"submit",children:c("Next")})]})]})})}function el(e){let{t}=(0,O.$G)(),{handleStepChange:a}=e,[s,r]=(0,n.useState)(!1),c=async e=>{let{spaceName:t,owner:s,description:l}=e;r(!0);let[n,i,c]=await (0,S.Vx)((0,S.be)({name:t,vector_type:"Chroma",owner:s,desc:l}));r(!1),(null==c?void 0:c.success)&&a({label:"forward",spaceName:t})};return(0,l.jsx)(w.Z,{spinning:s,children:(0,l.jsxs)(A.Z,{size:"large",className:"mt-4",layout:"vertical",name:"basic",initialValues:{remember:!0},autoComplete:"off",onFinish:c,children:[(0,l.jsx)(A.Z.Item,{label:t("Knowledge_Space_Name"),name:"spaceName",rules:[{required:!0,message:t("Please_input_the_name")},()=>({validator:(e,a)=>/[^\u4e00-\u9fa50-9a-zA-Z_-]/.test(a)?Promise.reject(Error(t("the_name_can_only_contain"))):Promise.resolve()})],children:(0,l.jsx)(E.default,{className:"mb-5 h-12",placeholder:t("Please_input_the_name")})}),(0,l.jsx)(A.Z.Item,{label:t("Owner"),name:"owner",rules:[{required:!0,message:t("Please_input_the_owner")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:t("Please_input_the_owner")})}),(0,l.jsx)(A.Z.Item,{label:t("Description"),name:"description",rules:[{required:!0,message:t("Please_input_the_description")}],children:(0,l.jsx)(E.default,{className:"mb-5  h-12",placeholder:t("Please_input_the_description")})}),(0,l.jsx)(A.Z.Item,{children:(0,l.jsx)(i.ZP,{type:"primary",htmlType:"submit",children:t("Next")})})]})})}function en(e){let{t}=(0,O.$G)(),{handleStepChange:a}=e,s=[{type:"TEXT",title:t("Text"),subTitle:t("Fill your raw text"),iconType:"TEXT"},{type:"URL",title:t("URL"),subTitle:t("Fetch_the_content_of_a_URL"),iconType:"WEBPAGE"},{type:"DOCUMENT",title:t("Document"),subTitle:t("Upload_a_document"),iconType:"DOCUMENT"}];return(0,l.jsx)(l.Fragment,{children:s.map((e,t)=>(0,l.jsxs)(N.Z,{className:"mt-4 mb-4 cursor-pointer",onClick:()=>{a({label:"forward",docType:e.type})},children:[(0,l.jsxs)("div",{className:"font-semibold",children:[(0,l.jsx)(R.Z,{type:e.iconType}),e.title]}),(0,l.jsx)("div",{children:e.subTitle})]},t))})}var er=a(38925),ei=a(47221),ec=a(16165),eo=a(48928),ed=a(84567),em=a(78045);let{TextArea:eu}=E.default;function ex(e){let{strategies:t,docType:a,fileName:s,field:r}=e,i="";if("DOCUMENT"===a){let e=s.split(".");i=e[e.length-1]}let c=i?t.filter(e=>e.suffix.indexOf(i)>-1):t,[o,d]=(0,n.useState)(),{t:m}=(0,O.$G)(),u={strategy:"Automatic",name:m("Automatic"),desc:m("Automatic_desc")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z.Item,{name:[r.name,"chunk_parameters","chunk_strategy"],initialValue:u.strategy,children:(0,l.jsxs)(em.ZP.Group,{style:{marginTop:16},onChange:function(e){d(e.target.value)},children:[(0,l.jsx)(em.ZP,{value:u.strategy,children:u.name}),c.map(e=>(0,l.jsx)(em.ZP,{value:e.strategy,children:e.name},"strategy_radio_".concat(e.strategy)))]})}),function(){if(!o)return null;if(o===u.name)return(0,l.jsx)("p",{className:"my-4",children:u.desc});let e=null==c?void 0:c.filter(e=>e.strategy===o)[0].parameters;return e&&e.length?(0,l.jsx)("div",{className:"mt-2",children:null==e?void 0:e.map(e=>(0,l.jsx)(A.Z.Item,{label:e.param_name,name:[r.name,"chunk_parameters",e.param_name],rules:[{required:!0,message:m("Please_input_the_name")}],initialValue:e.default_value,valuePropName:"boolean"===e.param_type?"checked":"value",tooltip:e.description,children:function(e){switch(e){case"int":return(0,l.jsx)(eo.Z,{className:"w-full",min:1});case"string":return(0,l.jsx)(eu,{className:"w-full",rows:2});case"boolean":return(0,l.jsx)(ed.Z,{})}}(e.param_type)},"param_".concat(e.param_name)))}):(0,l.jsx)(er.Z,{className:"my-2",type:"warning",message:m("No_parameter")})}()]})}var eh=a(82353);function ep(e){let{spaceName:t,docType:a,uploadFiles:r,handleStepChange:c}=e,{t:o}=(0,O.$G)(),[d]=A.Z.useForm(),[m,u]=(0,n.useState)(r),[x,h]=(0,n.useState)(),[p,_]=(0,n.useState)([]),[j,f]=(0,n.useState)("");async function g(){var e;h(!0);let[,t]=await (0,S.Vx)((0,S.iZ)());h(!1),_(null===(e=t||[])||void 0===e?void 0:e.filter(e=>e.type.indexOf(a)>-1))}(0,n.useEffect)(()=>(g(),()=>{s&&clearInterval(s)}),[]);let b=async e=>{if(function(e){let t=!0;"RUNNING"===j&&(t=!1,B.ZP.warning("The task is still running, do not submit it again."));let{fileStrategies:a}=e;return a.map(e=>{var t,a;let s=null==e?void 0:null===(t=e.chunk_parameters)||void 0===t?void 0:t.chunk_strategy;s||(e.chunk_parameters={chunk_strategy:"Automatic"});let l=p.filter(e=>e.strategy===s)[0],n={chunk_strategy:null==e?void 0:null===(a=e.chunk_parameters)||void 0===a?void 0:a.chunk_strategy};l&&l.parameters&&l.parameters.forEach(t=>{let a=t.param_name;n[a]=(null==e?void 0:e.chunk_parameters)[a]}),e.chunk_parameters=n}),t}(e)){var a;h(!0);let[,l]=await (0,S.Vx)((0,S.KL)(t,e.fileStrategies));if(h(!1),(null==l?void 0:l.tasks)&&(null==l?void 0:null===(a=l.tasks)||void 0===a?void 0:a.length)>0){B.ZP.success("Segemation task start successfully. task id: ".concat(null==l?void 0:l.tasks.join(","))),f("RUNNING");let t=e.fileStrategies.map(e=>e.doc_id);s=setInterval(async()=>{let e=await N(t);"FINISHED"===e&&(clearInterval(s),f("FINISHED"),B.ZP.success("Congratulation, All files sync successfully."),c({label:"finish"}))},3e3)}}};async function N(e){let[,a]=await (0,S.Vx)((0,S._Q)(t,{doc_ids:e}));if((null==a?void 0:a.data)&&(null==a?void 0:a.data.length)>0){let e=[...m];if(null==a||a.data.map(t=>{var a;let s=null===(a=null==e?void 0:e.filter(e=>e.doc_id===t.id))||void 0===a?void 0:a[0];s&&(s.status=t.status)}),u(e),null==a?void 0:a.data.every(e=>"FINISHED"===e.status||"FAILED"===e.status))return"FINISHED"}}return(0,l.jsx)(w.Z,{spinning:x,children:(0,l.jsxs)(A.Z,{labelCol:{span:6},wrapperCol:{span:18},labelAlign:"right",form:d,size:"large",className:"mt-4",layout:"horizontal",name:"basic",autoComplete:"off",initialValues:{fileStrategies:m},onFinish:b,children:[p&&p.length?(0,l.jsx)(A.Z.List,{name:"fileStrategies",children:e=>{switch(a){case"TEXT":case"URL":return null==e?void 0:e.map(e=>(0,l.jsx)(ex,{strategies:p,docType:a,fileName:m[e.name].name,field:e}));case"DOCUMENT":return(0,l.jsx)(ei.Z,{defaultActiveKey:0,size:m.length>5?"small":"middle",children:null==e?void 0:e.map(e=>(0,l.jsx)(ei.Z.Panel,{header:"".concat(e.name+1,". ").concat(m[e.name].name),extra:function(e){let t=m[e].status;switch(t){case"FINISHED":return(0,l.jsx)(ec.Z,{component:eh.qw});case"RUNNING":return(0,l.jsx)(ec.Z,{className:"animate-spin animate-infinite",component:eh.bn});case"FAILED":return(0,l.jsx)(ec.Z,{component:eh.FE});default:return(0,l.jsx)(ec.Z,{component:eh.tu})}}(e.name),children:(0,l.jsx)(ex,{strategies:p,docType:a,fileName:m[e.name].name,field:e})},e.key))})}}}):(0,l.jsx)(er.Z,{message:"Cannot find one strategy for ".concat(a," type knowledge."),type:"warning"}),(0,l.jsxs)(A.Z.Item,{className:"mt-4",children:[(0,l.jsx)(i.ZP,{onClick:()=>{c({label:"back"})},className:"mr-4",children:"".concat(o("Back"))}),(0,l.jsx)(i.ZP,{type:"primary",htmlType:"submit",loading:x||"RUNNING"===j,children:o("Process")})]})]})})}var e_=()=>{let[e,t]=(0,n.useState)([]),[a,s]=(0,n.useState)(!1),[d,m]=(0,n.useState)(0),[u,x]=(0,n.useState)(""),[h,p]=(0,n.useState)([]),[_,j]=(0,n.useState)(""),{t:f}=(0,O.$G)(),g=[{title:f("Knowledge_Space_Config")},{title:f("Choose_a_Datasource_type")},{title:f("Upload")},{title:f("Segmentation")}];async function b(){let[e,a]=await (0,S.Vx)((0,S.Vm)());t(a)}(0,n.useEffect)(()=>{b()},[]);let N=e=>{let{label:t,spaceName:a,docType:l,files:n}=e;"finish"===t?(s(!1),b(),x(""),j(""),b()):"forward"===t?(0===d&&b(),m(e=>e+1)):m(e=>e-1),n&&p(n),a&&x(a),l&&j(l)};function y(e){x(e),m(1),s(!0)}return(0,l.jsxs)("div",{className:"bg-[#FAFAFA] dark:bg-transparent w-full h-full",children:[(0,l.jsxs)("div",{className:"page-body p-4 md:p-6 h-full overflow-auto",children:[(0,l.jsx)(i.ZP,{type:"primary",className:"flex items-center",icon:(0,l.jsx)(r.Z,{}),onClick:()=>{s(!0)},children:"Create"}),(0,l.jsx)("div",{className:"flex flex-wrap mt-4 gap-2 md:gap-4",children:null==e?void 0:e.map(e=>(0,l.jsx)(K,{space:e,onAddDoc:y,getSpaces:b},e.id))})]}),(0,l.jsxs)(c.default,{title:"Add Knowledge",centered:!0,open:a,destroyOnClose:!0,onCancel:()=>{s(!1)},width:1e3,afterClose:()=>{m(0),b()},footer:null,children:[(0,l.jsx)(o.Z,{current:d,items:g}),0===d&&(0,l.jsx)(el,{handleStepChange:N}),1===d&&(0,l.jsx)(en,{handleStepChange:N}),(0,l.jsx)(es,{className:ee()({hidden:2!==d}),spaceName:u,docType:_,handleStepChange:N}),3===d&&(0,l.jsx)(ep,{spaceName:u,docType:_,uploadFiles:h,handleStepChange:N})]})]})}}},function(e){e.O(0,[4885,7113,5503,9479,4442,4553,5813,411,8928,8548,6485,8660,9774,2888,179],function(){return e(e.s=54681)}),_N_E=e.O()}]);