"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),s=r(6010),i=r(2466),l=r(6550),o=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=f({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),k=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var k=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==l&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(814),s=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,o=[];a.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),c=`https://releases.transloadit.com/uppy/v${l}/${i}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,c)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(s.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},p))}},9827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var a=r(7462),n=r(7294),s=r(3905),i=(r(4866),r(5162),r(3068),r(9960));const l="section_kw8a",o="item_MAQH",u=e=>n.createElement("section",{className:l},e.items.map((e=>n.createElement(i.Z,{to:e.link},n.createElement("div",{className:o},n.createElement("h2",null,e.name),n.createElement("p",null,e.description)))))),c={sidebar_position:1},p="Quick start",d={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/uppy.io/pr-preview/pr-78/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the uploader you need",permalink:"/uppy.io/pr-preview/pr-78/docs/guides/choosing-uploader"}},m={},f=[{value:"Features",id:"features",level:2}],h={toc:f},k="wrapper";function y(e){let{components:t,...r}=e;return(0,s.kt)(k,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quick-start"},"Quick start"),(0,s.kt)("p",null,"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly\nwith any application. It\u2019s fast, has a comprehensible API and lets you worry\nabout more important problems than building a file uploader."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Fetch")," files from local disk, remote URLs, Google Drive, Dropbox, Box,\nInstagram or snap and record selfies with a\xa0camera"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Preview")," and edit metadata with a nice interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Upload")," to the final destination, optionally process/encode")),(0,s.kt)("h2",{id:"features"},"Features"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lightweight, modular plugin-based architecture, light on dependencies \u26a1"),(0,s.kt)("li",{parentName:"ul"},"Resumable file uploads via the open ",(0,s.kt)("a",{parentName:"li",href:"https://tus.io/"},"tus")," standard, so large\nuploads survive network hiccups"),(0,s.kt)("li",{parentName:"ul"},"Supports picking files from: Webcam, Dropbox, Box, Google Drive, Instagram,\nbypassing the user\u2019s device where possible, syncing between servers directly\nvia ",(0,s.kt)("a",{parentName:"li",href:"/docs/companion"},"@uppy/companion")),(0,s.kt)("li",{parentName:"ul"},"Works great with file encoding and processing backends, such as\n",(0,s.kt)("a",{parentName:"li",href:"https://transloadit.com"},"Transloadit"),", works great without (all you need is\nto roll your own Apache/Nginx/Node/FFmpeg/etc backend)"),(0,s.kt)("li",{parentName:"ul"},"Sleek user interface \u2728"),(0,s.kt)("li",{parentName:"ul"},"Optional file recovery (after a browser crash) with\n",(0,s.kt)("a",{parentName:"li",href:"/docs/golden-retriever/"},"Golden Retriever")),(0,s.kt)("li",{parentName:"ul"},"Speaks several languages (i18n) \ud83c\udf0d"),(0,s.kt)("li",{parentName:"ul"},"Built with accessibility in mind"),(0,s.kt)("li",{parentName:"ul"},"Free for the world, forever (as in beer \ud83c\udf7a, pizza \ud83c\udf55, and liberty \ud83d\uddfd)"),(0,s.kt)("li",{parentName:"ul"},"Cute as a puppy, also accepts cat pictures \ud83d\udc36")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk inside\n",(0,s.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,s.kt)(u,{items:[{name:"Examples",description:"Try out one of our extensive example projects",link:"https://github.com/transloadit/uppy/tree/main/examples"},{name:"Uploaders",description:"Choosing the uploader you need",link:"/docs/guides/choosing-uploader"},{name:"Dashboard",description:"Powerful, responsive, and pluggable UI",link:"/docs/user-interfaces/dashboard"},{name:"Companion",description:"Download files from remote sources on the server",link:"/docs/companion"}],mdxType:"QuickStartLinks"}))}y.isMDXComponent=!0}}]);