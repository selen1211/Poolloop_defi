(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6571],{90239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(57437),o=n(2265);t.default=function(e){let{html:t,height:n=null,width:a=null,children:i,dataNtpc:l=""}=e;return(0,o.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=a?"".concat(a,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},64404:function(e,t,n){"use strict";var r;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=n(57437),i=n(2265),l=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===o&&(o=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,a.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===o){console.warn("@next/third-parties: GA has not been initialized");return}window[o]?window[o].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(o," does not exist"))}},27640:function(e,t,n){"use strict";var r;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=n(57437),i=n(2265),l=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:u,dataLayer:s}=e;void 0===o&&(o=n);let c="dataLayer"!==n?"&l=".concat(n):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s?"w[l].push(".concat(JSON.stringify(s),")"):"","\n      })(window,'").concat(n,"');")}}),(0,a.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r?"&gtm_auth=".concat(r):"").concat(u?"&gtm_preview=".concat(u,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===o){console.warn("@next/third-parties: GTM has not been initialized");return}window[o]?window[o].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(o," does not exist"))}},87138:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(231),o=n.n(r)},31877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.a}});var r=n(84080),o=n.n(r),a={};for(var i in r)"default"!==i&&(a[i]=(function(e){return r[e]}).bind(0,i));n.d(t,a)},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(18157);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25944:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(18157),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},40905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&l.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(a(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(99920),o=n(57437),a=r._(n(2265)),i=n(98016),l=n(18029),u=n(41142),s=n(43461),c=n(844),f=n(60291),d=n(44467),p=n(53106),h=n(25944),m=n(4897),g=n(51507),y=new Set;function b(e,t,n,r,o,a){if("undefined"!=typeof window&&(a||(0,l.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let _=a.default.forwardRef(function(e,t){let n,r;let{href:u,as:y,children:_,prefetch:w=null,passHref:E,replace:P,shallow:j,scroll:x,locale:O,onClick:S,onMouseEnter:M,onTouchStart:R,legacyBehavior:k=!1,...C}=e;n=_,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let T=a.default.useContext(f.RouterContext),N=a.default.useContext(d.AppRouterContext),L=null!=T?T:N,I=!T,A=!1!==w,U=null===w?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:D,as:q}=a.default.useMemo(()=>{if(!T){let e=v(u);return{href:e,as:y?v(y):e}}let[e,t]=(0,i.resolveHref)(T,u,!0);return{href:e,as:y?(0,i.resolveHref)(T,y):t||e}},[T,u,y]),z=a.default.useRef(D),W=a.default.useRef(q);k&&(r=a.default.Children.only(n));let H=k?r&&"object"==typeof r&&r.ref:t,[F,G,K]=(0,p.useIntersection)({rootMargin:"200px"}),B=a.default.useCallback(e=>{(W.current!==q||z.current!==D)&&(K(),W.current=q,z.current=D),F(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[q,H,D,K,F]);a.default.useEffect(()=>{L&&G&&A&&b(L,D,q,{locale:O},{kind:U},I)},[q,D,G,O,A,null==T?void 0:T.locale,L,I,U]);let V={ref:B,onClick(e){k||"function"!=typeof S||S(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,i,u,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?a.default.startTransition(d):d()}(e,L,D,q,P,j,x,O,I)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(A||!I)&&b(L,D,q,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},I)},onTouchStart:function(e){k||"function"!=typeof R||R(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(A||!I)&&b(L,D,q,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},I)}};if((0,s.isAbsoluteUrl)(q))V.href=q;else if(!k||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,h.getDomainLocale)(q,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);V.href=t||(0,m.addBasePath)((0,c.addLocale)(q,e,null==T?void 0:T.defaultLocale))}return k?a.default.cloneElement(r,V):(0,o.jsx)("a",{...C,...V,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},98016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(18323),o=n(41142),a=n(45519),i=n(43461),l=n(18157),u=n(18029),s=n(59195),c=n(80020);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,n);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(n,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[i,t||i]:i}catch(e){return n?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},84080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y}});let r=n(99920),o=n(41452),a=n(57437),i=r._(n(54887)),l=o._(n(2265)),u=n(36590),s=n(40905),c=n(49189),f=new Map,d=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:c}=e,m=n||t;if(m&&d.has(m))return;if(f.has(t)){d.add(m),f.get(t).then(r,u);return}let g=()=>{o&&o(),d.add(m)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(a?(y.innerHTML=a.__html||"",g()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",g()):t&&(y.src=t,f.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),c&&h(c),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:f,stylesheets:p,...h}=e,{updateScripts:g,scripts:y,getIsSsr:b,appDir:v,nonce:_}=(0,l.useContext)(u.HeadManagerContext),w=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;w.current||(o&&e&&d.has(e)&&o(),w.current=!0)},[o,t,n]);let E=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!E.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),E.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(g?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:f,...h}]),g(y)):b&&b()?d.add(t||n):b&&!b()&&m(e)),v){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:_}:{as:"script",nonce:_}),(0,a.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===s&&n&&i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:_}:{as:"script",nonce:_})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(2265),o=n(49189),a="function"==typeof IntersectionObserver,i=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!a,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81943:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},41142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return l},urlObjectKeys:function(){return i}});let r=n(41452)._(n(18323)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",i=e.pathname||"",l=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(r.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},59195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(49089),o=n(28083)},80020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let r=n(41533),o=n(63169);function a(e,t,n){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,u=(t!==e?(0,r.getRouteMatcher)(i)(t):"")||n;a=e;let s=Object.keys(l);return s.every(e=>{let t=u[e]||"",{repeat:n,optional:r}=l[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(a=a.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:s,result:a}}},28083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let r=n(82269),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},18029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=n(43461),o=n(49404);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},45519:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},18323:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},41533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(43461);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},i={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(i[e]=~r.indexOf("/")?r.split("/").map(e=>a(e)):t.repeat?[a(r)]:a(r))}),i}}},63169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return u}});let r=n(82269),o=n(81943),a=n(67741);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function l(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),n={},l=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:r,repeat:u}=i(a[1]);return n[e]={pos:l++,repeat:u,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=i(a[1]);return n[e]={pos:l++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function u(e){let{parameterizedRoute:t,groups:n}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:a,keyPrefix:l}=e,{key:u,optional:s,repeat:c}=i(r),f=u.replace(/\W/g,"");l&&(f=""+l+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),l?a[f]=""+l+u:a[f]=u;let p=t?(0,o.escapeStringRegexp)(t):"";return c?s?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function c(e,t){let n;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:i.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&a){let[n]=e.split(a[0]);return s({getSafeRouteKey:l,interceptionMarker:n,segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return a?s({getSafeRouteKey:l,segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let n=c(e,t);return{...u(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){let{parameterizedRoute:n}=l(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},49089:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),i=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),i=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function a(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},43461:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return u},getLocationOrigin:function(){return i},getURL:function(){return l},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},58488:function(){},44193:function(){},91541:function(e){e.exports={style:{fontFamily:"'__steradian_1d375e', '__steradian_Fallback_1d375e'"},className:"__className_1d375e",variable:"__variable_1d375e"}},46789:function(e,t,n){"use strict";n.d(t,{r:function(){return v}});var r=n(2265),o=n(6584),a=n(99299),i=n(72955),l=n(75180),u=n(41469),s=n(89080),c=n(47986),f=n(3600),d=n(83184),p=n(7551),h=n(61463);let m=(0,r.createContext)(null),g=Object.assign((0,f.yV)(function(e,t){let n=(0,i.M)(),{id:o="headlessui-label-".concat(n),passive:a=!1,...l}=e,s=function e(){let t=(0,r.useContext)(m);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),c=(0,u.T)(t);(0,h.e)(()=>s.register(o),[o,s.register]);let d={ref:c,...s.props,id:o};return a&&("onClick"in d&&(delete d.htmlFor,delete d.onClick),"onClick"in l&&delete l.onClick),(0,f.sY)({ourProps:d,theirProps:l,slot:s.slot||{},defaultTag:"label",name:s.name||"Label"})}),{}),y=(0,r.createContext)(null);y.displayName="GroupContext";let b=r.Fragment,v=Object.assign((0,f.yV)(function(e,t){var n;let d=(0,i.M)(),{id:h="headlessui-switch-".concat(d),checked:m,defaultChecked:g=!1,onChange:b,disabled:v=!1,name:_,value:w,form:E,...P}=e,j=(0,r.useContext)(y),x=(0,r.useRef)(null),O=(0,u.T)(x,t,null===j?null:j.setSwitch),[S,M]=function(e,t,n){let[a,i]=(0,r.useState)(n),l=void 0!==e,u=(0,r.useRef)(l),s=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!l||u.current||s.current?l||!u.current||c.current||(c.current=!0,u.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,u.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:a,(0,o.z)(e=>(l||i(e),null==t?void 0:t(e)))]}(m,b,g),R=(0,o.z)(()=>null==M?void 0:M(!S)),k=(0,o.z)(e=>{if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),R()}),C=(0,o.z)(e=>{e.key===p.R.Space?(e.preventDefault(),R()):e.key===p.R.Enter&&function(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}(e.currentTarget)}),T=(0,o.z)(e=>e.preventDefault()),N=(0,r.useMemo)(()=>({checked:S}),[S]),L={id:h,ref:O,role:"switch",type:(0,l.f)(e,x),tabIndex:-1===e.tabIndex?0:null!=(n=e.tabIndex)?n:0,"aria-checked":S,"aria-labelledby":null==j?void 0:j.labelledby,"aria-describedby":null==j?void 0:j.describedby,disabled:v,onClick:k,onKeyUp:C,onKeyPress:T},I=(0,a.G)();return(0,r.useEffect)(()=>{var e;let t=null==(e=x.current)?void 0:e.closest("form");t&&void 0!==g&&I.addEventListener(t,"reset",()=>{M(g)})},[x,M]),r.createElement(r.Fragment,null,null!=_&&S&&r.createElement(s._,{features:s.A.Hidden,...(0,f.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,disabled:v,form:E,checked:S,name:_,value:w})}),(0,f.sY)({ourProps:L,theirProps:P,slot:N,defaultTag:"button",name:"Switch"}))}),{Group:function(e){var t;let[n,a]=(0,r.useState)(null),[i,l]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,o.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),a=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(m.Provider,{value:a},e.children)},[t])]}(),[u,s]=(0,d.f)(),c=(0,r.useMemo)(()=>({switch:n,setSwitch:a,labelledby:i,describedby:u}),[n,a,i,u]);return r.createElement(s,{name:"Switch.Description"},r.createElement(l,{name:"Switch.Label",props:{htmlFor:null==(t=c.switch)?void 0:t.id,onClick(e){n&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},r.createElement(y.Provider,{value:c},(0,f.sY)({ourProps:{},theirProps:e,defaultTag:b,name:"Switch.Group"}))))},Label:g,Description:d.d})},80354:function(e,t,n){"use strict";n.d(t,{ViewTransitions:function(){return u},r:function(){return c}});var r=n(57437),o=n(87138),a=n(16463),i=n(2265);let l=(0,i.createContext)(()=>()=>{});function u(e){let{children:t}=e,[n,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{n&&(n(),o(null))},[n]),!function(){let e=(0,a.usePathname)(),t=(0,i.useRef)(e),[n,r]=(0,i.useState)(null);(0,i.useEffect)(()=>{if(!("startViewTransition"in document))return()=>{};let e=()=>{let e;let t=new Promise(t=>{e=t});r([new Promise(e=>{document.startViewTransition(()=>(e(),t))}),e])};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}},[]),n&&t.current!==e&&(0,i.use)(n[0]);let o=(0,i.useRef)(n);(0,i.useEffect)(()=>{o.current=n},[n]),(0,i.useEffect)(()=>{t.current=e,o.current&&(o.current[1](),o.current=null)},[e])}(),(0,r.jsx)(l.Provider,{value:o,children:t})}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){let t=(0,a.useRouter)(),n=(0,i.use)(l),{href:u,as:c,replace:f,scroll:d}=e,p=(0,i.useCallback)(r=>{e.onClick&&e.onClick(r),"startViewTransition"in document&&!function(e){let{nodeName:t}=e.currentTarget;return!!("A"===t.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))}(r)&&(r.preventDefault(),document.startViewTransition(()=>new Promise(e=>{(0,i.startTransition)(()=>{t[f?"replace":"push"](c||u,{scroll:null==d||d}),n(()=>e)})})))},[e.onClick,u,c,f,d]);return(0,r.jsx)(o.default,s({},e,{onClick:p}))}}}]);