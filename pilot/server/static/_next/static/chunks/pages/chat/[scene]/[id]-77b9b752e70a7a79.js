(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{1826:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat/[scene]/[id]",function(){return r(99316)}])},50948:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return u},default:function(){return o}});let l=r(38754),n=(r(67294),l._(r(23900)));function a(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let o=l.loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,u(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2804:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let l=r(38754),n=l._(r(67294)),a=n.default.createContext(null)},23900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let l=r(38754),n=l._(r(67294)),a=r(2804),u=[],o=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function u(){if(!l){let t=new d(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return u()})}function s(e,t){!function(){u();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:l.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return s.preload=()=>u(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(s,e)}function f(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(u).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(i=!0,t());f(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let _=c},99316:function(e,t,r){"use strict";r.r(t);var l=r(85893),n=r(67294),a=r(11163),u=r(41468),o=r(5152),i=r.n(o);let s=i()(()=>Promise.all([r.e(662),r.e(599),r.e(996),r.e(262),r.e(566),r.e(737),r.e(995),r.e(294),r.e(442),r.e(45),r.e(414),r.e(61),r.e(636),r.e(440)]).then(r.bind(r,53913)),{loadableGenerated:{webpack:()=>[53913]},ssr:!1}),d=i()(()=>Promise.all([r.e(662),r.e(599),r.e(996),r.e(262),r.e(566),r.e(737),r.e(479),r.e(647),r.e(995),r.e(294),r.e(655),r.e(411),r.e(45),r.e(615),r.e(414),r.e(539),r.e(249),r.e(636),r.e(910)]).then(r.bind(r,59578)),{loadableGenerated:{webpack:()=>[59578]},ssr:!1});t.default=function(){let{query:{id:e,scene:t}}=(0,a.useRouter)(),{isContract:r,setIsContract:o,setIsMenuExpand:i}=(0,n.useContext)(u.p);return(0,n.useEffect)(()=>{i("chat_dashboard"!==t),e&&t&&o(!1)},[e,t]),(0,l.jsx)(l.Fragment,{children:r?(0,l.jsx)(s,{}):(0,l.jsx)(d,{})})}},5152:function(e,t,r){e.exports=r(50948)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1826)}),_N_E=e.O()}]);